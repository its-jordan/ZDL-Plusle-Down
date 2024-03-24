'use client';

import { usePathname } from 'next/navigation';

import React, { useEffect } from 'react';
import ReturnPokemon, { ReturnTypeMatchup } from '@/components/getPokemon';
import ViewMode from '@/components/viewButton';
import teams from '@/data/teams.json';
import replaceUsername from '@/functions/replaceUsername';

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
  const player1 = usePathname().replace('/scores/', '').split('-')[0];
  const player2 = usePathname().replace('/scores/', '').split('-')[1];
  function returnPathTextArrayP1() {
    if (player1 == 'danknett') {
      const pokemonArray = teams.danknett;
      return pokemonArray;
    } else if (player1 == 'seanboyq') {
      const pokemonArray = teams.seanboyq;
      return pokemonArray;
    } else if (player1 == 'resolamxxy') {
      const pokemonArray = teams.resolamxxy;
      return pokemonArray;
    } else if (player1 == 'beachwatch') {
      const pokemonArray = teams.beachwatch;
      return pokemonArray;
    } else if (player1 == 'revelreloaded') {
      const pokemonArray = teams.revelreloaded;
      return pokemonArray;
    } else if (player1 == 'dtbaggins') {
      const pokemonArray = teams.dtbaggins;
      return pokemonArray;
    } else if (player1 == 'c0c0_') {
      const pokemonArray = teams.c0c0_;
      return pokemonArray;
    } else if (player1 == 'ifurgat') {
      const pokemonArray = teams.ifurgat;
      return pokemonArray;
    } else if (player1 == 'tokotoro') {
      const pokemonArray = teams.tokotoro;
      return pokemonArray;
    } else if (player1 == 'castleflutes') {
      const pokemonArray = teams.castleflutes;
      return pokemonArray;
    } else if (player1 == 'thanabros') {
      const pokemonArray = teams.thanabros;
      return pokemonArray;
    } else if (player1 == 'its_jordan') {
      const pokemonArray = teams.its_jordan;
      return pokemonArray;
    } else {
      const pokemonArray = teams.danknett;
      return pokemonArray;
    }
  }

  function returnPathTextArrayP2() {
    if (player2 == 'danknett') {
      const pokemonArray2 = teams.danknett;
      return pokemonArray2;
    } else if (player2 == 'seanboyq') {
      const pokemonArray2 = teams.seanboyq;
      return pokemonArray2;
    } else if (player2 == 'resolamxxy') {
      const pokemonArray2 = teams.resolamxxy;
      return pokemonArray2;
    } else if (player2 == 'beachwatch') {
      const pokemonArray2 = teams.beachwatch;
      return pokemonArray2;
    } else if (player2 == 'revelreloaded') {
      const pokemonArray2 = teams.revelreloaded;
      return pokemonArray2;
    } else if (player2 == 'dtbaggins') {
      const pokemonArray2 = teams.dtbaggins;
      return pokemonArray2;
    } else if (player2 == 'c0c0_') {
      const pokemonArray2 = teams.c0c0_;
      return pokemonArray2;
    } else if (player2 == 'ifurgat') {
      const pokemonArray2 = teams.ifurgat;
      return pokemonArray2;
    } else if (player2 == 'tokotoro') {
      const pokemonArray2 = teams.tokotoro;
      return pokemonArray2;
    } else if (player2 == 'castleflutes') {
      const pokemonArray2 = teams.castleflutes;
      return pokemonArray2;
    } else if (player2 == 'thanabros') {
      const pokemonArray2 = teams.thanabros;
      return pokemonArray2;
    } else if (player2 == 'its_jordan') {
      const pokemonArray2 = teams.its_jordan;
      return pokemonArray2;
    } else {
      const pokemonArray2 = teams.danknett;
      return pokemonArray2;
    }
  }

  const mergedArray = [...returnPathTextArrayP1(), ...returnPathTextArrayP2()];

  function pathnameApos() {
    if (
      player1 == 'dtbaggins' ||
      player1 == 'thanabros' ||
      player1 == 'castleflutes' ||
      player2 == 'dtbaggins' ||
      player2 == 'thanabros' ||
      player2 == 'castleflutes'
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
    <>
      <ViewMode
        header={`${replaceUsername(player1)} vs. ${replaceUsername(player2)}`}>
        <div className='type-chart-header player-name'>
          <h2 className='page-header w-full justify-start flex'>
            {replaceUsername(player1)}
          </h2>
        </div>
        {returnPathTextArrayP1().map((pokemon: any, index: number) => {
          return (
            <ReturnPokemon
              pokemon={pokemon}
              key={index}
              animation={`fadeIn min(calc(500ms * (.25 * ${index})), 1.5s) ease-in forwards`}
            />
          );
        })}
        <div className='type-chart-header'>
          <h2 className='page-header w-full justify-start flex'>
            {replaceUsername(player2)}
          </h2>
        </div>

        {returnPathTextArrayP2().map((pokemon: any, index: number) => {
          return (
            <ReturnPokemon
              pokemon={pokemon}
              key={index}
              animation={`fadeIn min(calc(500ms * (.25 * ${index})), 1.5s) ease-in forwards`}
            />
          );
        })}
        <div className='type-chart-header'>
          <h2 className='page-header w-full justify-start flex'>Type Charts</h2>
        </div>

        <div className='type-relations-list-view'>
          <div className='type-chart-header'>
            <h2 className='page-header w-full justify-start flex'>
              {replaceUsername(player1)}
            </h2>
          </div>
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
            {returnPathTextArrayP1().map((pokemon: any, index: number) => {
              return <ReturnTypeMatchup pokemon={pokemon} key={index} />;
            })}
          </div>
        </div>
        <div className='type-relations-list-view'>
          <div className='type-chart-header'>
            <h2 className='page-header w-full justify-start flex'>
              {replaceUsername(player2)}
            </h2>
          </div>
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
            {returnPathTextArrayP2().map((pokemon: any, index: number) => {
              return <ReturnTypeMatchup pokemon={pokemon} key={index} />;
            })}
          </div>
        </div>
      </ViewMode>
    </>
  );
}
