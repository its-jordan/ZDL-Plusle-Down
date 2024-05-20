'use client';

import { usePathname } from 'next/navigation';

import ReturnMon, { ReturnTypeMatchup } from '@/components/getPokemon';
import ViewMode from '@/components/viewButton';
import Teams from '@/data/teamNames';

import replaceUsername from '@/functions/replaceUsername';
import { teamArray } from '@/data/teamNames';

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
export default function TeamsView() {
  const returnPathTextArray = Teams();
  const pathname = usePathname().replace('/teams/', '');
  function pathnameApos() {
    if (
      pathname == 'dtbaggins' ||
      pathname == 'thanabros' ||
      pathname == 'castleflutes'
    )
      return '\u0027';
    else return '\u0027s';
  }
  // @ts-ignore
  const team = teamArray[pathname];
  console.log(team);
  return (
    <ViewMode
      header={team.team}
      links={[team.name, team.discord, team.showdown, team.picture]}>
      {team.pokemon.map((pokemon: any, index: number) => {
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
