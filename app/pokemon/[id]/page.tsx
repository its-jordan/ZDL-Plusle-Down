'use client';

import { ReturnTypeMatchup } from '@/components/getPokemon';
import ReturnPokemonIndividual from '@/components/getPokemonIndividual';
import ViewModeIndividual from '@/components/viewButtonIndividual';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

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

export default function PokemonPage() {
  const pokemonName = usePathname().replace('/pokemon/', '');
  return (
    <ViewModeIndividual pokemon={pokemonName}>
      <div className='type-relations-list-view mt-4 mb-4'>
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
                  alt={`${type} icon.`}
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
          <ReturnTypeMatchup pokemon={pokemonName} />
        </div>
      </div>
    </ViewModeIndividual>
  );
}
