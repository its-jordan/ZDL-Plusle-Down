import { GoKebabHorizontal } from 'react-icons/go';
import Link from 'next/link';
import { getTypeWeaknesses } from '../data/pokemon-types/index';

interface Pokemon extends Partial<CSSStyleDeclaration> {
  pokemon: string;
  direction?: 'ascending' | 'descending';
  sortStat?: 'HP' | 'ATK' | 'SPATK' | 'DEF' | 'SPDEF' | 'SPEED';
  children?: React.ReactNode;
  link?: string;
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
      ?.replace('silvally-bug', 'silvally')
      ?.replace('silvally-flying', 'silvally')}`
  );
  const pokData: any = res != null ? await res.json() : null;
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

export async function PokemonType({ pokemon }: Pokemon) {
  const type = await callPokemon({ pokemon });
  return type[0].types[0];
}

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
                <button
                  key={index}
                  className={`type-heading ${type}`}
                  data-column={index + 1}>
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
                </button>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

export default async function ReturnPokemon({
  pokemon,
  animation,
  direction,
  sortStat,
}: Pokemon) {
  function setStyle(data: any) {
    if (sortStat == 'HP') {
      return animation != undefined && direction == 'ascending'
        ? { order: `${data.stats[0].stat}`, animation: animation }
        : { order: `-${data.stats[0].stat}`, animation: animation };
    } else if (sortStat == 'ATK') {
      return animation != undefined && direction == 'ascending'
        ? { order: `${data.stats[1].stat}`, animation: animation }
        : { order: `-${data.stats[1].stat}`, animation: animation };
    } else if (sortStat == 'DEF') {
      return animation != undefined && direction == 'ascending'
        ? { order: `${data.stats[2].stat}`, animation: animation }
        : { order: `-${data.stats[2].stat}`, animation: animation };
    } else if (sortStat == 'SPATK') {
      return animation != undefined && direction == 'ascending'
        ? { order: `${data.stats[3].stat}`, animation: animation }
        : { order: `-${data.stats[3].stat}`, animation: animation };
    } else if (sortStat == 'SPDEF') {
      return animation != undefined && direction == 'ascending'
        ? { order: `${data.stats[4].stat}`, animation: animation }
        : { order: `-${data.stats[4].stat}`, animation: animation };
    } else if (sortStat == 'SPEED') {
      return animation != undefined && direction == 'ascending'
        ? { order: `${data.stats[5].stat}`, animation: animation }
        : { order: `-${data.stats[5].stat}`, animation: animation };
    } else {
      return animation != undefined && direction == 'ascending'
        ? { animation: animation }
        : { animation: animation };
    }
  }

  return (
    <>
      {(await callPokemon({ pokemon })).map((data, index) => {
        return (
          <Link
            // href={`https://www.smogon.com/dex/sv/pokemon/${data.name}`}
            href={`/pokemon/${data.name}`}
            data-speed={`${data.stats[5].stat}`}
            key={index}
            className='pokemon-card'
            // target='_blank'
            data-type={`${data.types[0]}`}
            style={setStyle(data)}>
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
