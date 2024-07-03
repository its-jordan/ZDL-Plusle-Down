import { GoKebabHorizontal } from 'react-icons/go';
import Link from 'next/link';
import { getTypeWeaknesses } from '../data/pokemon-types/index';
import returnMons from '@/data/pokemonDataS2';
import { PiArrowUpRightBold } from 'react-icons/pi';
import { MdCatchingPokemon } from 'react-icons/md';
import Image from 'next/image';

interface Pokemon extends Partial<CSSStyleDeclaration> {
  pokemon: string;
  direction?: 'ascending' | 'descending';
  sortStat?: 'HP' | 'ATK' | 'SPATK' | 'DEF' | 'SPDEF' | 'SPEED';
  children?: React.ReactNode;
  link?: string;
}

export function nameSplit(e: string) {
  if (e == 'farfetchd-galar') {
    return "Galarian Farfetch'd";
  } else if (e == 'ting-lu') {
    return `${
      e.split('-')[0].charAt(0).toUpperCase() +
      e.split('-')[0].slice(1) +
      '-' +
      e.split('-')[1].charAt(0).toUpperCase() +
      e.split('-')[1].slice(1)
    }`;
  } else if (e == 'eiscue-ice') {
    return `${
      e.split('-')[0].charAt(0).toUpperCase() +
      e.split('-')[0].slice(1) +
      '-' +
      e.split('-')[1].charAt(0).toUpperCase() +
      e.split('-')[1].slice(1)
    }`;
  } else if (
    e.includes('iron-') ||
    e.includes('tapu-') ||
    e.includes('raging-') ||
    e.includes('-therian') ||
    e.includes('-wake') ||
    e.includes('-moon') ||
    e.includes('-small') ||
    e.includes('-average') ||
    e.includes('-large') ||
    e.includes('-super') ||
    e.includes('-defense') ||
    e.includes('-speed')
  ) {
    return `${
      e.split('-')[0].charAt(0).toUpperCase() +
      e.split('-')[0].slice(1) +
      ' ' +
      e.split('-')[1].charAt(0).toUpperCase() +
      e.split('-')[1].slice(1)
    }`;
  } else if (e.includes('galar') == true) {
    return `${
      e.split('-')[1].charAt(0).toUpperCase() +
      e.split('-')[1].slice(1).concat('ian')
    } ${' '} ${
      e.split('-')[0].charAt(0).toUpperCase() + e.split('-')[0].slice(1)
    }`;
  } else if (e.includes('50')) {
    return `${e.replace('-50', '')}`;
  } else if (e.includes('-mega')) {
    return `${
      e.split('-')[1].charAt(0).toUpperCase() +
      e.split('-')[1].slice(1) +
      ' ' +
      e.split('-')[0].charAt(0).toUpperCase() +
      e.split('-')[0].slice(1)
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
  } else if (e.includes('rotom-') == true) {
    return `${
      e.split('-')[1].charAt(0).toUpperCase() + e.split('-')[1].slice(1)
    } ${
      ' ' + e.split('-')[0].charAt(0).toUpperCase() + e.split('-')[0].slice(1)
    }`;
  } else if (e.includes('incarnate') == true) {
    return `${
      e.split('-')[0].charAt(0).toUpperCase() + e.split('-')[0].slice(1)
    }`;
  } else if (e.includes('-fini') == true) {
    return `${
      e.split('-')[0].charAt(0).toUpperCase() +
      e.split('-')[0].slice(1) +
      ' Fini'
    }`;
  } else if (e.endsWith('-female')) {
    return `${
      e.split('-')[0].charAt(0).toUpperCase() +
      e.split('-')[0].slice(1) +
      ' (Female)'
    }`;
  } else if (e.endsWith('-male')) {
    return `${
      e.split('-')[0].charAt(0).toUpperCase() +
      e.split('-')[0].slice(1) +
      ' (Male)'
    }`;
  } else if (e.includes('-jr') == true) {
    return `${
      e.split('-')[0].charAt(0).toUpperCase() +
      e.split('-')[0].slice(1) +
      ' Jr.'
    }`;
  } else if (e.includes('farfetchd') == true && e.includes('galar') == false) {
    return `${
      e.split('d')[0].charAt(0).toUpperCase() + e.split('d')[0].slice(1) + "'d"
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

export function PokemonType({ pokemon }: Pokemon) {
  const mon = pokemon;
  const data = returnMons(mon);
  const type = data.types[0];
  return type;
}

export function ReturnTypeMatchup({ pokemon }: Pokemon) {
  const mon = pokemon;
  const data = returnMons(mon);
  return (
    <div className='type-matchup-data'>
      <div className='type-matchup-pokemon' data-type={`${data.types[0]}`}>
        <Image
          loading='lazy'
          className='pokemon-img matchup-data'
          src={data.sprite}
          width={100}
          height={100}
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
            {data.weaknesses.includes(`${type}: .25x`) ? (
              <div className={`multiplier quarter`} data-multiplier={'.25x'}>
                {'1/4'}
              </div>
            ) : data.weaknesses.includes(`${type}: 0.5x`) ? (
              <div className={`multiplier half`} data-multiplier={'.5x'}>
                {'1/2'}
              </div>
            ) : data.weaknesses.includes(`${type}: 2x`) ? (
              <div className={`multiplier double`} data-multiplier={'2x'}>
                {'2x'}
              </div>
            ) : data.weaknesses.includes(`${type}: 4x`) ? (
              <div className={`multiplier quadruple`} data-multiplier={'4x'}>
                {'4x'}
              </div>
            ) : data.weaknesses.includes(`${type}: 0x`) ? (
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
}

function nameReplace(e: string) {
  const moveName = e;
  const moveNameFront =
    moveName?.split('-')[1] !== undefined
      ? moveName?.charAt(0).toUpperCase() +
        moveName?.split('-')[0].slice(1) +
        ' ' +
        moveName?.split('-')[1].charAt(0).toUpperCase() +
        moveName?.split('-')[1].slice(1)
      : moveName?.charAt(0).toUpperCase() + moveName?.slice(1);
  return moveNameFront;
}

function replaceAbilityName(e: string) {
  const abilityName = e;
  const replaceName = abilityName?.replace(/(^|\/|-)(\S)/g, s=>s.toUpperCase()).replaceAll('-', ' ');
  return replaceName;
}

export default function ReturnMon({
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
  const mon = pokemon;
  const data = returnMons(mon);
  function calcMaxSpeed(e :number, item: string) {
    const nature = 1.1;
    const formula = (e * 2 + 99) * nature ;
    const speed = item == 'choicescarf' ? Math.floor(formula * 1.5 - 1) : item == 'tailwind' ? Math.floor(formula * 2 - 1) : Math.floor(formula - 1);
    return speed;
  }
  return (
    <Link
      // href={`https://www.smogon.com/dex/sv/pokemon/${data.name}`}
      href={`/pokemon/${data.name}`}
      data-speed={`${data.stats[5].stat}`}
      className='pokemon-card'
      // target='_blank'
      data-type={`${data.types[0]}`}
      data-localLoad='true'
      style={setStyle(data)}>
      <div className='pokemon-number'>#{data.id}</div>
      <div className='pokemon-name'>
        {data.name ? nameSplit(data.name) : ''}
      </div>
      <div className='pokemon-types'>
        {data.types.map((type: any, index: number) => {
          return (
            <>
              {type !== undefined || null ? (
                <div className='type-icon-container' key={index}>
                  <Image
                    src={`/icons/${type}.svg`}
                    height={30}
                    width={30}
                    data-type={type}
                    alt={`${type} icon.`}
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
      <div className='pokemon-abilities-container'>
        {data.abilities.map((data, index) => {
          return (
            <Link
              href={`https://www.smogon.com/dex/sv/abilities/${data}`}
              className='pokemon-ability'
              key={index}>
              {replaceAbilityName(data)}
            </Link>
          );
        })}
      </div>
      <div className='pokemon-stat-container'>
        {data.stats.map((stat, index) => {
          if (stat.name == data.stats[5].name) {
            return
          }
          return (
            <div className='pokemon-stat' key={index}>
              <div className='pokemon-stat-value'>{stat.stat}</div>
              <div className='pokemon-stat-name'>{stat.name}</div>
            </div>
          );
        })}
        <div className='divider'></div>
        <div className='pokemon-stat'>
          <div className='pokemon-stat-value'>{data.stats[5].stat}</div>
          <div className='pokemon-stat-name'>{data.stats[5].name}</div>
        </div>
        <div className='pokemon-stat'>
          <div className='pokemon-stat-value'>{calcMaxSpeed(data.stats[5].stat, '')}</div>
          <div className='pokemon-stat-name'>MAX</div>
        </div>
        <div className='pokemon-stat'>
          <div className='pokemon-stat-value'>{calcMaxSpeed(data.stats[5].stat, 'choicescarf')}</div>
          <div className='pokemon-stat-name'>+1S</div>
        </div>
        <div className='pokemon-stat'>
          <div className='pokemon-stat-value'>{calcMaxSpeed(data.stats[5].stat, 'tailwind')}</div>
          <div className='pokemon-stat-name'>+2S</div>
        </div>
      </div>

      <Image
        loading='lazy'
        className='pokemon-img'
        src={data.sprite ? data.sprite : ''}
        alt={`Sprite for ${data.name}.`}
        width={300}
        height={300}
        data-type={data.types[1] ? data.types[1] : data.types[0]}
      />
    </Link>
  );
}
