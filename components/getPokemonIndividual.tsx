import { getTypeWeaknesses } from '@/data/pokemon-types';
import { replaceStatNames } from './getPokemon';
import Image from 'next/image';

interface Pokemon extends Partial<CSSStyleDeclaration> {
  pokemon: string;
  direction?: 'ascending' | 'descending';
  sortStat?: 'HP' | 'ATK' | 'SPATK' | 'DEF' | 'SPDEF' | 'SPEED';
  children?: React.ReactNode;
}
type PokemonInfo = [
  {
    name: string;
    id: number;
    abilities: Array<{ name: string; hidden: boolean }>;
    cry: string;
    types: [
      (
        | 'normal'
        | 'fire'
        | 'water'
        | 'electric'
        | 'grass'
        | 'ice'
        | 'fighting'
        | 'poison'
        | 'ground'
        | 'flying'
        | 'psychic'
        | 'bug'
        | 'rock'
        | 'ghost'
        | 'dragon'
        | 'dark'
        | 'steel'
        | 'fairy'
      ),
      (
        | 'normal'
        | 'fire'
        | 'water'
        | 'electric'
        | 'grass'
        | 'ice'
        | 'fighting'
        | 'poison'
        | 'ground'
        | 'flying'
        | 'psychic'
        | 'bug'
        | 'rock'
        | 'ghost'
        | 'dragon'
        | 'dark'
        | 'steel'
        | 'fairy'
      )
    ];
    moves: [any];
    sprite: string;
    color: string;
    weakness: string[];
    stats: Array<{ stat: string; name: string }>;
  }
];

export async function callPokemonPage({ pokemon }: Pokemon) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon
      ?.replace('silvally-bug', 'silvally')
      ?.replace('silvally-flying', 'silvally')}`
  );
  const pokData = await res.json();
  const res2 = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${pokemon?.split('-')[0]}`
  );
  const data2 = await res2.json();
  const pokWeakness = getTypeWeaknesses(
    pokData.types[0].type.name,
    pokData.types[1]?.type.name
  );
  const pokArray = Object.entries(pokWeakness)
    .map((a) => a.join(': '))
    .filter((a) => !a.includes('1'))
    .map((i) => i + 'x')
    .sort();

  const pokemonInfoPage: PokemonInfo = [
    {
      name: pokData.name,
      id: data2.order,
      abilities: [
        {
          name: pokData.abilities[0].ability.name,
          hidden: pokData.abilities[0].is_hidden,
        },
        {
          name: pokData.abilities[1]?.ability?.name,
          hidden: pokData.abilities[1]?.is_hidden,
        },
        {
          name: pokData.abilities[2]?.ability?.name,
          hidden: pokData.abilities[2]?.is_hidden,
        },
      ],
      cry: pokData.cries.latest,
      types: [pokData.types[0].type.name, pokData.types[1]?.type?.name],
      moves: pokData.moves,
      sprite: pokData.sprites.other['official-artwork'].front_default,
      color: data2.color.name,
      weakness: pokArray,
      stats: [
        {
          stat: pokData.stats[0].base_stat,
          name: replaceStatNames(pokData.stats[0].stat.name),
        },
        {
          stat: pokData.stats[1].base_stat,
          name: replaceStatNames(pokData.stats[1].stat.name),
        },
        {
          stat: pokData.stats[2].base_stat,
          name: replaceStatNames(pokData.stats[2].stat.name),
        },
        {
          stat: pokData.stats[3].base_stat,
          name: replaceStatNames(pokData.stats[3].stat.name),
        },
        {
          stat: pokData.stats[4].base_stat,
          name: replaceStatNames(pokData.stats[4].stat.name),
        },
        {
          stat: pokData.stats[5].base_stat,
          name: replaceStatNames(pokData.stats[5].stat.name),
        },
      ],
    },
  ];
  return pokemonInfoPage;
}

export async function moveInfo(move: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/move/${move}`);
  const pokData = await res.json();
  const moveArray = [
    {
      name: pokData.name,
      id: pokData.number,
      class: pokData.damage_class.name,
      critrate: pokData.meta?.crit_rate,
      accuracy: pokData.accuracy,
      power: pokData.power,
      pp: pokData.pp,
      type: pokData.type.name,
      effect: pokData.effect_entries[0]?.short_effect,
    },
  ];
  return (
    <>
      {moveArray.map((data, index) => {
        return (
          <div className='move-stats' key={index} data-id={data.id}>
            {data.class ? (
              <div className='move-stat-container' data-stat='class'>
                <div className='move-label'>Class</div>
                <div className='move-stat-data'>{data.class}</div>
              </div>
            ) : (
              <></>
            )}
            {data.power ? (
              <div className='move-stat-container' data-stat='power'>
                <div className='move-label'>Power</div>
                <div className='move-stat-data'>{data.power}</div>
              </div>
            ) : (
              <></>
            )}
            {data.pp ? (
              <div className='move-stat-container' data-stat='pp'>
                <div className='move-label'>PP</div>
                <div className='move-stat-data'>{data.pp}</div>
              </div>
            ) : (
              <></>
            )}
            {data.accuracy ? (
              <div className='move-stat-container' data-stat='acc'>
                <div className='move-label'>ACC</div>
                <div className='move-stat-data'>{data.accuracy}%</div>
              </div>
            ) : (
              <></>
            )}
            {data.critrate ? (
              <div className='move-stat-container' data-stat='crit'>
                <div className='move-label'>CRIT</div>
                <div className='move-stat-data'>
                  {data.critrate == 1 ? '12.5%' : 2 ? '50%' : '100%'}
                </div>
              </div>
            ) : (
              <></>
            )}
            {data.effect ? (
              <div className='move-stat-container' data-stat='effect'>
                <div className='move-label'>Effect</div>
                <div className='move-stat-data'>{data.effect}</div>
              </div>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </>
  );
}

export async function returnMoveType(move: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/move/${move}`);
  const pokData = await res.json();
  return pokData.type.name;
}

function nameReplace(e: string) {
  const moveName = e;
  const moveNameFront =
    moveName?.split('-')[1] !== undefined
      ? moveName?.charAt(0).toUpperCase() +
        moveName?.split('-')[0].slice(1) +
        ' ' +
        moveName?.split('-')[1]?.charAt(0).toUpperCase() +
        moveName?.split('-')[1]?.slice(1)
      : moveName?.charAt(0).toUpperCase() + moveName?.split('-')[0].slice(1);
  return moveNameFront;
}

export default async function ReturnPokemonIndividual({ pokemon }: Pokemon) {
  return (
    <>
      {(await callPokemonPage({ pokemon })).map((data, index) => {
        return (
          <div
            key={index}
            className='pokemon-page-container'
            data-type={`${data.types[0]}`}
            data-color={data.color}>
            {/* <audio
              id='pokemon-cry'
              className='pokemon-cry'
              src={data.cry}
              autoPlay>
              Play
            </audio> */}
            <div></div>
            <div className='pokemon-moves'>
              {data.moves.map(async (move, index) => {
                const moveName = move.move?.name;
                const moveType = await returnMoveType(moveName);
                return (
                  <div
                    key={index}
                    className='pokemon-move'
                    data-move={move.move?.name}
                    data-type={moveType}>
                    <Image
                      src={`/icons/${moveType}.svg`}
                      alt={`${moveType}`}
                      width={20}
                      height={20}
                    />
                    <div>{nameReplace(moveName)}</div>
                    {moveInfo(moveName)}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
