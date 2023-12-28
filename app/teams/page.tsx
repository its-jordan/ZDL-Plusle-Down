import React, { useEffect } from 'react';
import { GoKebabHorizontal } from 'react-icons/go';
import { BsList, BsGridFill } from 'react-icons/bs';
import ReturnPokemon from '@/components/getPokemon';
import ViewButton, { useView } from '@/components/viewButton';
import ViewMode from '@/components/viewButton';

const pokemonArray = [
  'joltik',
  'litwick',
  'meowth-galar',
  'oshawott',
  'noibat',
  'salandit',
  'shroodle',
  'snorunt',
  'tinkatink',
  'voltorb-hisui',
];

export default function Teams() {
  return (
    <ViewMode header={`SeanBoyQ's Team`}>
      {pokemonArray.map((pokemon, index) => {
        return (
          <ReturnPokemon
            pokemon={pokemon}
            key={index}
            animation={
              index < 11 && index > 0
                ? `fadeIn calc(500ms * (.75 * ${index})) ease-in`
                : index == 0
                ? `fadeIn 500ms ease-in`
                : `fadeIn 3.75s ease-in`
            }
          />
        );
      })}
    </ViewMode>
  );
}
