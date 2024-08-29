'use client';

import { usePathname } from 'next/navigation';

import ReturnMon, {
  replaceAbilityName,
  ReturnTypeMatchup,
} from '@/components/getPokemon';
import ViewMode from '@/components/viewButton';
import Teams from '@/data/teamNames';

import replaceUsername from '@/functions/replaceUsername';
import { teamArray } from '@/data/teamNames';
import returnMons from '@/data/pokemonDataO2';
import { standingConstructor } from '@/data/standings';
import { PokemonChart } from '@/components/charts/spider';
import Image from 'next/image';
import Link from 'next/link';

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
  // @ts-ignore
  const team = teamArray[pathname];
  const wins = standingConstructor(pathname, 'normal', false).wins;
  const losses = standingConstructor(pathname, 'normal', false).losses;

  function calcMaxSpeed(e: number, item: string) {
    const nature = 1.1;
    const formula = (e * 2 + 99) * nature;
    const speed =
      item == 'choicescarf'
        ? Math.floor(formula * 1.5 - 1)
        : item == 'tailwind'
        ? Math.floor(formula * 2 - 1)
        : Math.floor(formula - 1);
    return speed;
  }

  return (
    <ViewMode
      header={team.team}
      links={[
        team.name,
        team.discord,
        team.showdown,
        team.picture,
        wins,
        losses,
      ]}
      pokemon={team.pokemon}>
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
                <Image
                  src={`/icons/${type}.svg`}
                  height={30}
                  width={30}
                  data-type={type}
                  className='pokemon-type-icon list-view'
                  alt={`${type} type header`}
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
      <div className='pokemon-chart-header type-chart-header'>
        <h2 className='page-header w-full justify-start flex'>Pokemon Stats</h2>
      </div>
      <div className='pokemon-chart-grid'>
        {team.pokemon.map((pokemon: any, index: number) => {
          return (
            <PokemonChart name={pokemon} key={index}>
              <div className='chart-abilities'>
                <h2 className='chart-abilities-header'>Speed Calculations</h2>
                <div className='chart-abilities-container speed-stat'>
                  <div className='chart-ability speed-stat'>
                    <div className='chart-speed'>
                      {calcMaxSpeed(returnMons(pokemon).stats[5].stat, '')}
                    </div>
                    <div className='chart-speed-name'>Base Max</div>
                  </div>
                  <div className='chart-ability speed-stat'>
                    <div className='chart-speed'>
                      {calcMaxSpeed(
                        returnMons(pokemon).stats[5].stat,
                        'choicescarf'
                      )}
                    </div>
                    <div className='chart-speed-name'>Choice Scarf</div>
                  </div>
                  <div className='chart-ability speed-stat'>
                    <div className='chart-speed'>
                      {calcMaxSpeed(
                        returnMons(pokemon).stats[5].stat,
                        'tailwind'
                      )}
                    </div>
                    <div className='chart-speed-name'>
                      Tailwind / Chlorophyll
                    </div>
                  </div>
                </div>
              </div>
              <div className='chart-abilities'>
                <h2 className='chart-abilities-header'>Abilities</h2>
                <div className='chart-abilities-container'>
                  {returnMons(pokemon).abilities.map(
                    (ability: any, index: number) => {
                      return (
                        <Link
                          href={`https://www.smogon.com/dex/sv/abilities/${ability}`}
                          key={index}
                          className='chart-ability'>
                          {replaceAbilityName(ability)}
                        </Link>
                      );
                    }
                  )}
                </div>
              </div>
            </PokemonChart>
          );
        })}
      </div>
    </ViewMode>
  );
}
