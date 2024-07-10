'use client';

import { link } from 'fs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useEffect } from 'react';
import { BsDiscord, BsPersonFill } from 'react-icons/bs';
import { GiHealthNormal } from 'react-icons/gi';
import { IoMdSpeedometer } from 'react-icons/io';
import { MdArrowDropDown, MdOutlineCatchingPokemon } from 'react-icons/md';
import {
  PiGridFourLight,
  PiGridFourFill,
  PiListNumbersLight,
  PiListNumbersFill,
  PiArrowLeftBold,
  PiArrowUpRightBold,
} from 'react-icons/pi';
import { RiCloseCircleFill } from 'react-icons/ri';
import { TbSword, TbSwords, TbShield, TbShieldFilled } from 'react-icons/tb';
import Image from 'next/image';

interface ViewProps {
  children: React.ReactNode;
  header?: string;
  links?: [
    name: string,
    showdown: string,
    discord: string,
    picture: string,
    wins: number,
    losses: number
  ];
  navigation: [player1: string, player2: string];
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

export default function ViewMode({
  children,
  header,
  links,
  navigation,
}: ViewProps) {
  const [view, setView] = useView();
  const ModeContext = createContext(view);
  const mode = useContext(ModeContext);
  const className = 'pokemon-grid ' + mode;

  function localStore() {
    typeof window !== 'undefined' && localStorage.view !== undefined
      ? localStorage.getItem('view')
      : 'list-view';
  }

  return (
    <main className='content-grid'>
      {/* @ts-ignore */}
      <Header>
        <Link
          className='back-selector'
          href={'/teams'}
        >
          <div className='back-button'>
            <PiArrowLeftBold />
            <div>Teams</div>
          </div>
        </Link>
        {links?.[3] !== undefined ? (
          <Image
            className='team-image'
            src={links?.[3]}
            height={300}
            width={300}
            alt={'Team Picture'}
          ></Image>
        ) : (
          <></>
        )}
        <h1 className='page-header duo flex-grow'>
          {links != undefined ? (
            <>
              <div className='header-top'>
                <div>{header}</div>
                <div
                  className='header-record'
                  data-wins={links[4]}
                  data-losses={links[5]}
                  data-percentage={
                    links[4] >= links[5] ? 'positive' : 'negative'
                  }
                >
                  {links[4]} - {links[5]}
                </div>
              </div>
              <div className='header-bottom'>
                <div>
                  <div>
                    <BsPersonFill />
                  </div>
                  <div>{links[0]}</div>
                </div>
                <div>
                  <div>
                    <BsDiscord />
                  </div>
                  <div>{links[1]}</div>
                </div>
                <div>
                  <div>
                    <MdOutlineCatchingPokemon />
                  </div>
                  <div>{links[2]}</div>
                </div>
              </div>
            </>
          ) : (
            <>{header}</>
          )}
        </h1>
        <nav className='duo-nav'>
          <div className='duo-nav-player-container'>
            <div className='duo-nav-player'>
              <Link
                className='duo-nav-player-link'
                href={`#${navigation[0]}`}
              >
                {navigation[0]}
              </Link>
            </div>
            <div className='duo-nav-links'>
              <Link
                className='duo-nav-link'
                href={`#${navigation[0]}-type-chart`}
              >
                Type Chart
              </Link>
              <Link
                className='duo-nav-link'
                href={`#${navigation[0]}-stat-chart`}
              >
                Graph
              </Link>
            </div>
          </div>
          <div className='duo-nav-player-container'>
            <div className='duo-nav-player'>
              <Link
                className='duo-nav-player-link'
                href={`#${navigation[1]}`}
              >
                {navigation[1]}
              </Link>
            </div>
            <div className='duo-nav-links'>
              <Link
                className='duo-nav-link'
                href={`#${navigation[1]}-type-chart`}
              >
                Type Chart
              </Link>
              <Link
                className='duo-nav-link'
                href={`#${navigation[1]}-stat-chart`}
              >
                Graph
              </Link>
            </div>
          </div>
        </nav>
        {view === 'list-view' ? (
          <button
            // @ts-ignore
            onClick={() => setView('grid-view')}
            className='view-selector'
            data-current-view={view}
            aria-label={`Switch to grid view.`}
          >
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
            onClick={() => setView('list-view')}
          >
            <div className='view-button'>
              <PiGridFourFill />
              <PiListNumbersLight />
            </div>
          </button>
        )}
      </Header>
      <ModeContext.Provider
        // @ts-ignore
        value={localStore()}
      >
        <div className={className}>{children}</div>
      </ModeContext.Provider>
    </main>
  );
}
