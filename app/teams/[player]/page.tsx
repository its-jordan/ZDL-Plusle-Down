'use client';

import { usePathname } from 'next/navigation';

import React, { useEffect } from 'react';
import { GoKebabHorizontal } from 'react-icons/go';
import { BsList, BsGridFill } from 'react-icons/bs';
import ReturnPokemon, { ReturnTypeMatchup } from '@/components/getPokemon';
import ViewButton, { useView } from '@/components/viewButton';
import ViewMode from '@/components/viewButton';
import teams from '@/data/teams.json';
import replaceUsername from '@/functions/replaceUsername';
import Link from 'next/link';

const teamsArray = [
  'danknett',
  'seanboyq',
  'resolamxxy',
  'beachwatch',
  'revelreloaded',
  'dtbaggins',
  'c0c0_',
  'ifurgat',
  'tokotoro',
  'castleflutes',
  'thanabros',
  'its_jordan',
];

export default function Teams() {
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

  return (
    <ViewMode header={`${replaceUsername(pathname)}${pathnameApos()} Team`}>
      {returnPathTextArray().map((pokemon: any, index: number) => {
        return (
          <ReturnPokemon
            pokemon={pokemon}
            key={index}
            animation={`fadeIn min(calc(500ms * (.25 * ${index})), 1.5s) ease-in forwards`}
          />
        );
      })}
      <div className='type-chart-header'>
        <h2 className='page-header w-full justify-start flex'>Type Chart</h2>
      </div>
      <div className='type-relations-list-view'>
        <div className='type-matchup-header'>
          <div className='type-matchup-spacer'>Pokemon</div>
          {types.map((type, index) => {
            return (
              <div key={index}>
                <img
                  src={`/icons/${type}.svg`}
                  height={30}
                  width={30}
                  data-type={type}
                  className='pokemon-type-icon list-view'
                />
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
