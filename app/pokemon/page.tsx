'use client';

import ViewMode from '@/components/viewButton';
import allmons from '@/data/allmons2.json';
import ReturnMon from '@/components/getPokemon';

export default function AllMons() {
  return (
    <ViewMode header={`All Pokemon`}>
      {allmons.map((pokemon: any, index: number) => {
        return (
          <ReturnMon
            pokemon={pokemon}
            key={index}
            animation={`fadeIn min(calc(500ms * (.25 * ${index})), 1.5s) ease-in forwards`}
            direction='descending'
            // @ts-ignore
            sortStat={
              typeof window !== 'undefined' &&
              localStorage.stat !== null &&
              localStorage.stat !== undefined
                ? localStorage.stat.toString()
                : 'HP'
            }
          />
        );
      })}
    </ViewMode>
  );
}
