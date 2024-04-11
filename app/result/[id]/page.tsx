'use client';

import returnResults from '@/data/results';
import { usePathname } from 'next/navigation';
import returnMons from '@/data/pokemonData';
import Image from 'next/image';
import CommonPage from '@/components/commonPage';
import { nameSplit } from '@/components/getPokemon';
import replaceUsername from '@/functions/replaceUsername';

export default function Results() {
  const pathname = usePathname();
  const player1 = pathname.replace('/result/', '').split('-')[0];
  const player2 = pathname.replace('/result/', '').split('-')[1];
  const match = returnResults(pathname.replace('/result/', ''))?.defeatLog;
  const imageSize = 50;

  return (
    <CommonPage
      header={`${replaceUsername(player1)} vs. ${replaceUsername(player2)}`}>
      <div className='results-container'>
        {match?.map((result, index) => {
          const pokemonSprite = returnMons(result.pokemon.toLowerCase()).sprite;
          const defeatedMonSprite = returnMons(
            result.defeatedmon.toLowerCase()
          ).sprite;
          return (
            <div key={index} className='results-log' data-defeat={index + 1}>
              <div className='results-log-number'>{index + 1}</div>
              <Image
                className='results-log-image'
                src={pokemonSprite}
                alt=''
                width={imageSize}
                height={imageSize}
              />
              <div className='results-log-mons'>
                {nameSplit(result.pokemon)} defeats{' '}
                {nameSplit(result.defeatedmon)}
              </div>
              <Image
                className='results-log-image'
                src={defeatedMonSprite}
                alt=''
                width={imageSize}
                height={imageSize}
              />
            </div>
          );
        })}
      </div>
    </CommonPage>
  );
}
