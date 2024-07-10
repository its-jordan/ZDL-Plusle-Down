'use client';

import { usePathname } from 'next/navigation';

import React, { useEffect } from 'react';
import ReturnPokemon, { ReturnTypeMatchup } from '@/components/getPokemon';
import ViewMode from '@/components/viewButtonDuo';
import teams from '@/data/teamsS2.json';
import replaceUsername from '@/functions/replaceUsername';
import ReturnMon from '@/components/getPokemonDuo';
import { teamArray } from '@/data/teamNames';
import { PokemonChart } from '@/components/charts/spider';
import Image from 'next/image';

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
  // @ts-ignore
  console.log(teams[player1]);

  // @ts-ignore
  const team1 = teamArray[player1];

  // @ts-ignore
  const team2 = teamArray[player2];

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
        header={`${replaceUsername(player1)} vs. ${replaceUsername(player2)}`}
        navigation={[player1, player2]}
      >
        <div
          className='team-name-header'
          id={player1}
        >
          <h2 className='page-header w-full justify-start flex'>
            {replaceUsername(player1)}
          </h2>
        </div>
        {team1.pokemon.map((pokemon: any, index: number) => {
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
                  ? localStorage.stat.toString()
                  : 'HP'
              }
            />
          );
        })}
        <div
          className='type-chart-header-duo'
          id={`${player1}-type-chart`}
        >
          <h2 className='page-header w-full justify-start flex'>Type Chart</h2>
        </div>
        <div className='type-relations-list-view-duo'>
          <div className='type-matchup-header'>
            <div className='type-matchup-spacer'>Pokemon</div>
            {types.map((type, index) => {
              return (
                <div
                  className='type-icon-container type-matchup'
                  key={index}
                >
                  <img
                    src={`/icons/${type}.svg`}
                    height={30}
                    width={30}
                    data-type={type}
                    className='pokemon-type-icon list-view'
                  />
                  <div
                    className='hover-only type_title'
                    data-type={type}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </div>
                </div>
              );
            })}
          </div>
          <div className='type-matchup-data-container'>
            {team1.pokemon.map((pokemon: any, index: number) => {
              return (
                <ReturnTypeMatchup
                  pokemon={pokemon}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <div
          className='pokemon-chart-header duo type-chart-header'
          id={`${player1}-stat-chart`}
        >
          <h2 className='page-header w-full justify-start flex'>
            Pokemon Stats
          </h2>
        </div>
        <div className='pokemon-chart-grid duo'>
          {team1.pokemon.map((pokemon: any, index: number) => {
            return (
              <PokemonChart
                name={pokemon}
                key={index}
              ></PokemonChart>
            );
          })}
        </div>
        <div
          className='team-name-header second'
          id={player2}
        >
          <h2 className='page-header w-full justify-start flex'>
            {replaceUsername(player2)}
          </h2>
        </div>
        {team2.pokemon.map((pokemon: any, index: number) => {
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
                  ? localStorage.stat.toString()
                  : 'HP'
              }
            />
          );
        })}
        <div
          className='type-chart-header-duo'
          id={`${player2}-type-chart`}
        >
          <h2 className='page-header w-full justify-start flex'>Type Chart</h2>
        </div>
        <div className='type-relations-list-view-duo'>
          <div className='type-matchup-header'>
            <div className='type-matchup-spacer'>Pokemon</div>
            {types.map((type, index) => {
              return (
                <div
                  className='type-icon-container type-matchup'
                  key={index}
                >
                  <Image
                    src={`/icons/${type}.svg`}
                    height={30}
                    width={30}
                    data-type={type}
                    className='pokemon-type-icon list-view'
                    alt='Type Icon'
                  />
                  <div
                    className='hover-only type_title'
                    data-type={type}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </div>
                </div>
              );
            })}
          </div>
          <div className='type-matchup-data-container'>
            {team1.pokemon.map((pokemon: any, index: number) => {
              return (
                <ReturnTypeMatchup
                  pokemon={pokemon}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <div
          className='pokemon-chart-header duo type-chart-header'
          id={`${player2}-stat-chart`}
        >
          <h2 className='page-header w-full justify-start flex'>
            Pokemon Stats
          </h2>
        </div>
        <div className='pokemon-chart-grid duo'>
          {team2.pokemon.map((pokemon: any, index: number) => {
            return (
              <PokemonChart
                name={pokemon}
                key={index}
              ></PokemonChart>
            );
          })}
        </div>
      </ViewMode>
    </>
  );
}
