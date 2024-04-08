'use client';

import React, { createContext, useContext, useEffect } from 'react';
import ViewMode from '@/components/viewButton';
import { MdArrowDropDown } from 'react-icons/md';

import { GiHealthNormal } from 'react-icons/gi';
import { TbSword, TbSwords, TbShield, TbShieldFilled } from 'react-icons/tb';
import { IoMdSpeedometer } from 'react-icons/io';
import { RiCloseCircleFill } from 'react-icons/ri';
import allmons from '@/data/allmons.json';
import ReturnMon from '@/components/getPokemon';

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

export default function AllMons() {
  const [stat, setStat] = useStats();
  const StatContext = createContext(stat);
  const stats = useContext(StatContext);

  function localStore() {
    typeof window !== 'undefined' && localStorage.stat !== undefined
      ? localStorage.getItem('stat')
      : 'HP';
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
    <ViewMode header={`All Pokemon`}>
      <div className='stat-topbar'>
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
                  // @ts-ignore
                  onClick={() => setStat(stat)}>
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
      </div>
      <StatContext.Provider
        // @ts-ignore
        value={localStore()}>
        {allmons.map((pokemon: any, index: number) => {
          return (
            <ReturnMon
              pokemon={pokemon}
              key={index}
              animation={`fadeIn min(calc(500ms * (.25 * ${index})), 1.5s) ease-in forwards`}
              direction='descending'
              // @ts-ignore
              sortStat={
                typeof window !== 'undefined' &&
                localStorage.stat !== null &&
                localStorage.stat !== undefined
                  ? stats.toString()
                  : 'HP'
              }
            />
          );
        })}
      </StatContext.Provider>
      {/* <div className='type-chart-header'>
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
          {pokemonArray.map((pokemon: any, index: number) => {
            return <ReturnTypeMatchup pokemon={pokemon} key={index} />;
          })}
        </div>
      </div> */}
    </ViewMode>
  );
}
