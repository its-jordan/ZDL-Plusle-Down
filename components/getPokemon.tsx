import { GoKebabHorizontal } from 'react-icons/go';
import Link from 'next/link';
import { getTypeWeaknesses } from '../data/pokemon-types/index';
import Image from 'next/image';

interface Pokemon extends Partial<CSSStyleDeclaration> {
  pokemon: string;
}

export function nameSplit(e: string) {
  if (e.includes('galar') == true) {
    return `${
      e.split('-')[1].charAt(0).toUpperCase() +
      e.split('-')[1].slice(1).concat('ian')
    } ${' '} ${
      e.split('-')[0].charAt(0).toUpperCase() + e.split('-')[0].slice(1)
    }`;
  } else if (e.includes('50')) {
    return `${e.replace('-50', '')}`;
  } else if (e.includes('mega') == true) {
    return `${
      e.split('-')[1].charAt(0).toUpperCase() + e.split('-')[1].slice(1)
    } ${
      ' ' + e.split('-')[0].charAt(0).toUpperCase() + e.split('-')[0].slice(1)
    }`;
  } else if (e.includes('alola') == true) {
    return `${
      e.split('-')[1].charAt(0).toUpperCase() +
      e.split('-')[1].slice(1)?.concat('n')
    } ${
      ' ' + e.split('-')[0].charAt(0).toUpperCase() + e.split('-')[0].slice(1)
    }`;
  } else if (e.includes('hisui') == true) {
    return `${
      e.split('-')[1].charAt(0).toUpperCase() +
      e.split('-')[1].slice(1)?.concat('an')
    } ${
      ' ' + e.split('-')[0].charAt(0).toUpperCase() + e.split('-')[0].slice(1)
    }`;
  } else if (e.includes('paldea') == true) {
    return `${
      e.split('-')[1].charAt(0).toUpperCase() +
      e.split('-')[1].slice(1)?.concat('n')
    } ${
      ' ' + e.split('-')[0].charAt(0).toUpperCase() + e.split('-')[0].slice(1)
    }`;
  } else if (e.includes('blade') == true) {
    return `${e.split('-')[0]}`;
  } else if (e.includes('rotom') == true) {
    return `${
      e.split('-')[1].charAt(0).toUpperCase() + e.split('-')[1].slice(1)
    } ${
      ' ' + e.split('-')[0].charAt(0).toUpperCase() + e.split('-')[0].slice(1)
    }`;
  } else if (e.includes('incarnate') == true) {
    return `${
      e.split('-')[0].charAt(0).toUpperCase() + e.split('-')[0].slice(1)
    }`;
  } else {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
}

export function replaceStatNames(e: string) {
  return e
    .replace('-', ' ')
    .replace('pecial attack', 'pa')
    .replace('pecial defense', 'pd')
    .replace('ack', '')
    .replace('ense', '')
    .replace('eed', 'e')
    .toUpperCase();
}

export async function callPokemon({ pokemon }: Pokemon) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon
      .replace('silvally-bug', 'silvally')
      .replace('silvally-flying', 'silvally')}`
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
  const pokemonInfo = [
    {
      name: pokData.name,
      id: data2.order,
      types: [pokData.types[0].type.name, pokData.types[1]?.type?.name],
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
  return pokemonInfo;
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

export async function ReturnTypeMatchup({ pokemon }: Pokemon) {
  return (
    <>
      {(await callPokemon({ pokemon })).map((data, index) => {
        return (
          <div className='type-matchup-data' key={index}>
            <div
              className='type-matchup-pokemon'
              data-type={`${data.types[0]}`}>
              <img
                loading='lazy'
                className='pokemon-img matchup-data'
                src={data.sprite}
                alt={`Sprite for ${data.name}.`}
                data-type={data.types[1] ? data.types[1] : data.types[0]}
              />
              <div className=''>{nameSplit(data.name)}</div>
            </div>
            {types.map((type, index) => {
              return (
                <div key={index} className={`type-heading ${type}`}>
                  {data.weakness.includes(`${type}: .25x`) ? (
                    <div
                      className={`multiplier quarter`}
                      data-multiplier={'.25x'}>
                      {'1/4'}
                    </div>
                  ) : data.weakness.includes(`${type}: 0.5x`) ? (
                    <div className={`multiplier half`} data-multiplier={'.5x'}>
                      {'1/2'}
                    </div>
                  ) : data.weakness.includes(`${type}: 2x`) ? (
                    <div className={`multiplier double`} data-multiplier={'2x'}>
                      {'2x'}
                    </div>
                  ) : data.weakness.includes(`${type}: 4x`) ? (
                    <div
                      className={`multiplier quadruple`}
                      data-multiplier={'4x'}>
                      {'4x'}
                    </div>
                  ) : data.weakness.includes(`${type}: 0x`) ? (
                    <div className={`multiplier immune`} data-multiplier={'0'}>
                      {'0'}
                    </div>
                  ) : (
                    <div className={`multiplier normal`} data-multiplier={'1x'}>
                      {''}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

export default async function ReturnPokemon({ pokemon, animation }: Pokemon) {
  return (
    <>
      {(await callPokemon({ pokemon })).map((data, index) => {
        return (
          <Link
            href={`https://www.smogon.com/dex/sv/pokemon/${data.name}`}
            key={index}
            className='pokemon-card'
            target='_blank'
            data-type={`${data.types[0]}`}
            style={
              animation != undefined
                ? {
                    animation: animation,
                  }
                : {
                    animation: 'none',
                  }
            }>
            <div className='pokemon-number'>#{data.id}</div>

            <div className='pokemon-name'>{nameSplit(data.name)}</div>
            <div className='pokemon-types'>
              {data.types.map((type, index) => {
                return (
                  <>
                    {type !== undefined ? (
                      <div className='type-icon-container' key={index}>
                        <img
                          src={`/icons/${type}.svg`}
                          height={30}
                          width={30}
                          data-type={type}
                          className='pokemon-type-icon'
                        />
                        <div className='hover-only type_title' data-type={type}>
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </>
                );
              })}
            </div>
            <div className='pokemon-stat-container'>
              {data.stats.map((stat, index) => {
                return (
                  <div className='pokemon-stat' key={index}>
                    <div className='pokemon-stat-value'>{stat.stat}</div>
                    <div className='pokemon-stat-name'>{stat.name}</div>
                  </div>
                );
              })}
            </div>
            <div className='damage-relation-types-alt'>
              {data.weakness?.map((value, index) => {
                return (
                  <div
                    key={index}
                    data-type={value.split(':')[0]}
                    data-multiplier={value
                      .split(':')[1]
                      .replace(' ', '')
                      .replace('x', '')}
                    className='relations-type-alt'>
                    <div>
                      <Image
                        className={`relations-type-icon-alt`}
                        src={`../icons/${value.split(':')[0]}.svg`}
                        alt={`${value.split(':')[0]}-type icon`}
                        height={30}
                        width={30}></Image>
                    </div>
                    <div
                      className={`relation-type-name-hover ${
                        value.split(':')[0]
                      }`}
                      aria-hidden='true'>
                      {value.split(':')[0].charAt(0).toUpperCase() +
                        value.split(':')[0].slice(1)}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* <div className='pokemon-moves-container'>
              {pokData.moves.map((move: any, index: number) => {
                return <div key={index}>{move.move.name}</div>;
              })}
            </div> */}
            <div className='show-more'>
              <GoKebabHorizontal />
            </div>
            <img
              loading='lazy'
              className='pokemon-img'
              src={data.sprite}
              alt={`Sprite for ${data.name}.`}
              data-type={data.types[1] ? data.types[1] : data.types[0]}
            />
          </Link>
        );
      })}
    </>
  );
}
