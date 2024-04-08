import { replaceStatNames } from '@/components/getPokemon';
import { getTypeWeaknesses } from '@/data/pokemon-types';
import allMons from '@/data/allmons.json';

async function fetchMon(e: string) {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${e}`);
  const res = await data.json();
  const pokWeakness = getTypeWeaknesses(
    res.types[0].type.name,
    res.types[1]?.type.name
  );
  const pokArray = Object.entries(pokWeakness)
    .map((a) => a.join(': '))
    .filter((a) => !a.includes('1'))
    .map((i) => i + 'x')
    .sort();
  const mons = [
    {
      name: res.name,
      id: res.id,
      abilities: [
        res.abilities[0].ability.name,
        res.abilities[1]?.ability.name,
        res.abilities[2]?.ability.name,
      ],
      types: [res.types[0].type.name, res.types[1]?.type.name],
      sprite: res.sprites.other['official-artwork'].front_default,
      weakness: pokArray,
      stats: [
        {
          stat: res.stats[0].base_stat,
          name: replaceStatNames(res.stats[0].stat.name),
        },
        {
          stat: res.stats[1].base_stat,
          name: replaceStatNames(res.stats[1].stat.name),
        },
        {
          stat: res.stats[2].base_stat,
          name: replaceStatNames(res.stats[2].stat.name),
        },
        {
          stat: res.stats[3].base_stat,
          name: replaceStatNames(res.stats[3].stat.name),
        },
        {
          stat: res.stats[4].base_stat,
          name: replaceStatNames(res.stats[4].stat.name),
        },
        {
          stat: res.stats[5].base_stat,
          name: replaceStatNames(res.stats[5].stat.name),
        },
      ],
    },
  ];
  return (
    <div>
      {mons.map((mon, index) => {
        return (
          <div key={index}>
            <div>
              "{mon.name}": {'{'}
            </div>
            <div>"abilities": {`[`}</div>
            <div>"{mon.abilities[0]}",</div>
            {mon.abilities[1] !== null ? (
              <div>"{mon.abilities[1]}",</div>
            ) : (
              <></>
            )}
            {mon.abilities[2] !== null || undefined ? (
              <div>"{mon.abilities[2]}"</div>
            ) : (
              <></>
            )}
            <div>{`],`}</div>
            <div>"id": {mon.id},</div>
            <div>"sprite": "{mon.sprite}",</div>
            <div>"types": {`[`}</div>
            <div>"{mon.types[0]}",</div>
            {mon.types[1] !== null ? <div>"{mon.types[1]}"</div> : <></>}
            <div>{'],'}</div>
            <div>"weaknesses": {`[`}</div>
            {mon.weakness.map((weakness, index) => {
              return <div key={index}>"{weakness}",</div>;
            })}
            <div>{`],`}</div>
            <div>"stats": {`[`}</div>
            <div>
              {'{'}"stat": {mon.stats[0].stat}, "name": "{mon.stats[0].name}"
              {'}'},{'{'}"stat": {mon.stats[1].stat}, "name": "
              {mon.stats[1].name}"{'}'},{'{'}"stat": {mon.stats[2].stat},
              "name": "{mon.stats[2].name}"{'}'},{'{'}"stat":{' '}
              {mon.stats[3].stat}, "name": "{mon.stats[3].name}"{'}'},{'{'}
              "stat": {mon.stats[4].stat}, "name": "{mon.stats[4].name}"{'}'},
              {'{'}"stat": {mon.stats[5].stat}, "name": "{mon.stats[5].name}"
              {'}'}
            </div>
            <div>{`]`}</div>
            <div>{'},'}</div>
          </div>
        );
      })}
    </div>
  );
}

export default async function FetchMon() {
  return (
    <div>
      <div>{'{'}</div>
      {allMons.map((pokemon, index) => {
        return <div key={index}>{fetchMon(pokemon)}</div>;
      })}
      <div>{'}'}</div>
    </div>
  );
}
