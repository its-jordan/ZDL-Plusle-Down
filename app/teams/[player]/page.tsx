'use client';

import { usePathname } from 'next/navigation';

import React, { createContext, useContext, useEffect, useState } from 'react';
import ReturnPokemon, { ReturnTypeMatchup } from '@/components/getPokemon';
import ViewMode from '@/components/viewButton';
import teams from '@/data/teams.json';
import replaceUsername from '@/functions/replaceUsername';
import { MdArrowDropDown } from 'react-icons/md';

function useStats() {
  const [stat, setStat] = React.useState<string>(
    typeof window !== 'undefined' && window.localStorage
      ? localStorage.stat
      : 'HP'
  );

  const pokemonStat = stat === 'HP' ? 'HP' : localStorage.stat;

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('stat', stat);
    }
  }, [stat]);

  return [pokemonStat, setStat];
}

export default function Teams() {
  const [stat, setStat] = useStats();
  const StatContext = createContext(stat);
  const stats = useContext(StatContext);
  const pathname = usePathname().replace('/teams/', '');
  function returnPathTextArray() {
    if (pathname == 'danknett') {
      const pokemonArray = teams.danknett;
      return pokemonArray;
    } else if (pathname == 'seanboyq') {
      const pokemonArray = teams.seanboyq;
      return pokemonArray;
    } else if (pathname == 'resolamxxy') {
      const pokemonArray = teams.resolamxxy;
      return pokemonArray;
    } else if (pathname == 'beachwatch') {
      const pokemonArray = teams.beachwatch;
      return pokemonArray;
    } else if (pathname == 'revelreloaded') {
      const pokemonArray = teams.revelreloaded;
      return pokemonArray;
    } else if (pathname == 'dtbaggins') {
      const pokemonArray = teams.dtbaggins;
      return pokemonArray;
    } else if (pathname == 'c0c0_') {
      const pokemonArray = teams.c0c0_;
      return pokemonArray;
    } else if (pathname == 'ifurgat') {
      const pokemonArray = teams.ifurgat;
      return pokemonArray;
    } else if (pathname == 'tokotoro') {
      const pokemonArray = teams.tokotoro;
      return pokemonArray;
    } else if (pathname == 'castleflutes') {
      const pokemonArray = teams.castleflutes;
      return pokemonArray;
    } else if (pathname == 'thanabros') {
      const pokemonArray = teams.thanabros;
      return pokemonArray;
    } else if (pathname == 'its_jordan') {
      const pokemonArray = teams.its_jordan;
      return pokemonArray;
    } else {
      const pokemonArray = teams.danknett;
      return pokemonArray;
    }
  }

  function localStore() {
    typeof window !== 'undefined' && localStorage.stat !== undefined
      ? localStorage.getItem('stat')
      : 'HP';
  }

  function pathnameApos() {
    if (
      pathname == 'dtbaggins' ||
      pathname == 'thanabros' ||
      pathname == 'castleflutes'
    )
      return '\u0027';
    else return '\u0027s';
  }

  const types = [
    'normal',
    'fire',
    'water',
    'electric',
    'grass',
    'ice',
    'fighting',
    'poison',
    'ground',
    'flying',
    'psychic',
    'bug',
    'rock',
    'ghost',
    'dragon',
    'dark',
    'steel',
    'fairy',
  ];

  const statsArray = ['HP', 'ATK', 'SPATK', 'DEF', 'SPDEF', 'SPEED'];

  return (
    <ViewMode header={`${replaceUsername(pathname)}${pathnameApos()} Team`}>
      <div className='stat-topbar'>
        <div className='stat-sort-container'>
          <div className='stat-sort-header'>
            <div className='sort'>Sort by</div>{' '}
            <div className='sort-stat'>
              {stat !== null ? stat.toString() : <></>}
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
                  // @ts-ignore
                  onClick={() => setStat(stat)}>
                  {stat}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <StatContext.Provider
        // @ts-ignore
        value={localStore()}>
        {returnPathTextArray().map((pokemon: any, index: number) => {
          return (
            <ReturnPokemon
              pokemon={pokemon}
              key={index}
              animation={`fadeIn min(calc(500ms * (.25 * ${index})), 1.5s) ease-in forwards`}
              direction='descending'
              // @ts-ignore
              sortStat={
                localStorage.stat !== null && localStorage.stat !== undefined
                  ? stat
                  : 'HP'
              }
            />
          );
        })}
      </StatContext.Provider>
      <div className='type-chart-header'>
        <h2 className='page-header w-full justify-start flex'>Type Chart</h2>
      </div>
      <div className='type-relations-list-view'>
        <div className='type-matchup-header'>
          <div className='type-matchup-spacer'>Pokemon</div>
          {types.map((type, index) => {
            return (
              <div className='type-icon-container type-matchup' key={index}>
                <img
                  src={`/icons/${type}.svg`}
                  height={30}
                  width={30}
                  data-type={type}
                  className='pokemon-type-icon list-view'
                />
                <div className='hover-only type_title' data-type={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </div>
              </div>
            );
          })}
        </div>
        <div className='type-matchup-data-container'>
          {returnPathTextArray().map((pokemon: any, index: number) => {
            return <ReturnTypeMatchup pokemon={pokemon} key={index} />;
          })}
        </div>
      </div>
    </ViewMode>
  );
}
