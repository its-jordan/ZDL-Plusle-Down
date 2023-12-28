import { GoKebabHorizontal } from 'react-icons/go';
import Link from 'next/link';

interface Pokemon extends Partial<CSSStyleDeclaration> {
  pokemon: string;
}

function nameSplit(e: string) {
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

function replaceStatNames(e: string) {
  return e
    .replace('-', ' ')
    .replace('pecial attack', 'pa')
    .replace('pecial defense', 'pd')
    .replace('ack', '')
    .replace('ense', '')
    .replace('eed', 'e')
    .toUpperCase();
}

export default async function ReturnPokemon({ pokemon, animation }: Pokemon) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const pokData = await res.json();
  const res2 = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${pokemon?.split('-')[0]}`
  );
  const data2 = await res2.json();
  const pokemonInfo = [
    {
      name: pokData.name,
      id: data2.order,
      types: [pokData.types[0].type.name, pokData.types[1]?.type?.name],
      sprite: pokData.sprites.other['official-artwork'].front_default,
      color: data2.color.name,
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
  return (
    <>
      {pokemonInfo.map((data, index) => {
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
