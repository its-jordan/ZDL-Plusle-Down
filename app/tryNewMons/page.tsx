import mons from '@/data/allmons2.json';

async function tryMonsAPI(mon: string[]) {
  return mon.forEach(async (mon) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${mon}`);
    if (res.ok) {
      const data = await res.json();
      const name = await data.name;
      console.log(data);
      return name;
    } else {
      console.log(mon);
      return mon;
    }
  });
}

export default async function TryMon() {
  // tryMonsAPI(mons);
  return (
    <div>
      Trying every pokemon against the pokeapi. Check Console for more
      information.
    </div>
  );
}
