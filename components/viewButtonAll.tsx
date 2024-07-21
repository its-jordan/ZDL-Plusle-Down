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
import { nameSplit } from './getPokemon';
import returnMons from '@/data/pokemonDataS2';

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
  pokemon?: [string];
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

function useStats() {
  const [stat, setStat] = React.useState<string>(
    typeof window !== 'undefined' && window.localStorage
      ? localStorage.stat
      : 'HP'
  );

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('stat', stat);
    }
  }, [stat]);

  return [stat, setStat];
}

function replaceStatName(e: string) {
  if (e == 'HP') {
    return 'HP';
  } else if (e == 'ATK') {
    return 'Attack';
  } else if (e == 'SPATK') {
    return 'Sp. Atk';
  } else if (e == 'DEF') {
    return 'Defense';
  } else if (e == 'SPDEF') {
    return 'Sp. Def';
  } else if (e == 'SPEED') {
    return 'Speed';
  }
}

function returnIcon(e: string) {
  if (e == 'HP') {
    return <GiHealthNormal />;
  } else if (e == 'ATK') {
    return <TbSword />;
  } else if (e == 'SPATK') {
    return <TbSwords />;
  } else if (e == 'DEF') {
    return <TbShield />;
  } else if (e == 'SPDEF') {
    return <TbShieldFilled />;
  } else if (e == 'SPEED') {
    return <IoMdSpeedometer />;
  }
}

export function StatStorage() {
  const router = useRouter();
  const [stat, setStat] = useStats();
  const StatContext = createContext(stat);
  const stats = useContext(StatContext);
  const statsArray = ['HP', 'ATK', 'SPATK', 'DEF', 'SPDEF', 'SPEED'];
  return (
    <div className='stat-sort-container'>
      <div className='stat-sort-header'>
        <div className='sort'>
          {stat == null || stat == undefined || stat == ''
            ? 'Sort '
            : 'Sort by '}
        </div>
        <div className='sort-stat'>
          {stat !== null
            ? stat == undefined
              ? ''
              : replaceStatName(stat.toString())
            : ''}
        </div>
        <MdArrowDropDown />
      </div>
      <div className='stat-filter-container'>
        {statsArray.map((stat, index) => {
          return (
            <button
              className='stat-filter-button'
              key={index}
              data-stat={stat}
              onClick={() => {
                // @ts-ignore
                setStat(stat);
                router.refresh();
              }}>
              {returnIcon(stat)}
              {replaceStatName(stat)}
            </button>
          );
        })}
        <button
          className='stat-filter-button'
          // @ts-ignore
          onClick={() => setStat('')}>
          <RiCloseCircleFill />
          Clear Sort
        </button>
      </div>
    </div>
  );
}

export default function ViewMode({
  children,
  header,
  links,
  pokemon,
}: ViewProps) {
  const [view, setView] = useView();
  const ModeContext = createContext(view);
  const mode = useContext(ModeContext);
  const className = 'pokemon-grid ' + mode;

  const [stat, setStat] = useStats();
  const StatContext = createContext(stat);
  const stats = useContext(StatContext);

  function statStore() {
    typeof window !== 'undefined' && localStorage.stat !== undefined
      ? localStorage.getItem('stat')
      : 'HP';
  }

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
        {links?.[3] !== undefined ? (
          <Image
            className='team-image'
            src={links?.[3]}
            height={300}
            width={300}
            alt={'Team Picture'}></Image>
        ) : (
          <></>
        )}
        <h1 className='page-header flex-grow'>
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
                  }>
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
        <StatStorage />
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
          <StatContext.Provider
            // @ts-ignore
            value={statStore()}>
            {children}
          </StatContext.Provider>
        </div>
      </ModeContext.Provider>
    </main>
  );
}
