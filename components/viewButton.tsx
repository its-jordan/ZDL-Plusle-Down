'use client';

import React, { createContext, useContext, useEffect } from 'react';
import {
  PiGridFourLight,
  PiGridFourFill,
  PiListNumbersLight,
  PiListNumbersFill,
} from 'react-icons/pi';

interface ViewProps {
  children: React.ReactNode;
  header: string;
}

export function useView() {
  const [view, setView] = React.useState(
    typeof window !== 'undefined' ? localStorage.view : 'list-view'
  );

  const pokemonView = view === 'list-view' ? 'list-view' : 'grid-view';

  useEffect(() => {
    const body = window.document.body;

    if (typeof window !== 'undefined') {
      localStorage.setItem('view', view);
    }
  }, [view]);

  return [pokemonView, setView];
}

export default function ViewMode({ children, header }: ViewProps) {
  const [view, setView] = useView();
  const ModeContext = createContext(view);
  const mode = useContext(ModeContext);
  const className = 'pokemon-grid ' + mode;

  return (
    <main className='content-grid'>
      <div className='flex flex-row justify-between items-center'>
        <h1 className='page-header'>{header}</h1>
        {view === 'list-view' ? (
          <button
            // @ts-ignore
            onClick={() => setView('grid-view')}
            className='view-selector'
            data-current-view={view}
            aria-label={`Switch to grid view.`}>
            <div className='view-button'>
              <PiGridFourLight />
              <PiListNumbersFill />
            </div>
          </button>
        ) : (
          <button
            className='view-selector'
            data-current-position={view}
            aria-label={`switch to list view`}
            // @ts-ignore
            onClick={() => setView('list-view')}>
            <div className='view-button'>
              <PiGridFourFill />
              <PiListNumbersLight />
            </div>
          </button>
        )}
      </div>
      <ModeContext.Provider
        // @ts-ignore
        value={
          localStorage.getItem('view') !== undefined
            ? localStorage.getItem('view')
            : 'list-view'
        }>
        <div className={className}>{children}</div>
      </ModeContext.Provider>
    </main>
  );
}
