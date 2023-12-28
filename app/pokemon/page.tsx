import React from 'react';
// import { BsGridFill, BsList } from 'react-icons/bs';
import ReturnPokemon from '@/components/getPokemon';
import { Pokemon as pokemon } from '@/data/pokemonData';
import ViewMode from '@/components/viewButton';

export default function Pokemon() {
  return (
    <ViewMode header={`All Pokemon`}>
      {pokemon.map((pokemon, index) => {
        return (
          <ReturnPokemon
            pokemon={pokemon}
            key={index}
            animation={
              index < 11 && index > 0
                ? `fadeIn calc(500ms * (.75 * ${index})) ease-in forwards`
                : index == 0
                ? `fadeIn 500ms ease-in forwards`
                : `fadeIn 3.75s ease-in forwards`
            }
          />
        );
      })}
    </ViewMode>
  );
}
