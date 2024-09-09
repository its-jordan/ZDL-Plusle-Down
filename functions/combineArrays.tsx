import allmons1 from '@/data/pokemon-data/allpokemon.json';
import allmons2 from '@/data/pokemon-data/allpokemon2.json';
import allmons3 from '@/data/pokemon-data/allpokemon3.json';
import allmons4 from '@/data/pokemon-data/allpokemon4.json';
import allmons5 from '@/data/pokemon-data/allpokemon5.json';
import allmons6 from '@/data/pokemon-data/allpokemon6.json';

const allMons = allmons1
  .concat(allmons2)
  .concat(allmons3)
  .concat(allmons4)
  .concat(allmons5)
  .concat(allmons6);

console.log(allMons);

export default allMons;
