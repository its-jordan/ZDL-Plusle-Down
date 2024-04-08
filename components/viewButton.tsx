'use client';

import Link from 'next/link';
import React, { createContext, useContext, useEffect } from 'react';
import {
  PiGridFourLight,
  PiGridFourFill,
  PiListNumbersLight,
  PiListNumbersFill,
  PiArrowLeftBold,
  PiArrowUpRightBold,
} from 'react-icons/pi';

interface ViewProps {
  children: React.ReactNode;
  header?: string;
}

export function Header({ children }: ViewProps) {
  return <div className='header-container'>{children}</div>;
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

  function localStore() {
    typeof window !== 'undefined' && localStorage.view !== undefined
      ? localStorage.getItem('view')
      : 'list-view';
  }

  function getStatStore() {
    const sort =
      typeof window !== 'undefined' ? localStorage.getItem('stat') : 'HP';
    return sort;
  }

  return (
    <main className='content-grid'>
      <Header>
        <Link className='back-selector' href={'/teams'}>
          <div className='back-button'>
            <PiArrowLeftBold />
            <div>Teams</div>
          </div>
        </Link>
        <h1 className='page-header flex-grow'>{header}</h1>
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
      </Header>
      <ModeContext.Provider
        // @ts-ignore
        value={localStore()}>
        <div className={className} data-sort={getStatStore()}>
          {children}
        </div>
      </ModeContext.Provider>
    </main>
  );
}
