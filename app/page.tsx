'use client';

import Image from 'next/image';
import { NextUIProvider } from '@nextui-org/react';

const plusleArray = [
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
  'plusle',
];

export default function Home() {
  return (
    <NextUIProvider>
      <main>
        <div className='flex flex-col justify-center items-center'>
          {}
          {plusleArray.map((data, index) => {
            return (
              <Image
                className='plusle-img'
                src={'/plusle.gif'}
                key={index}
                data-pokemon={data}
                width={index * 32}
                height={index * 32}
                alt='plusle and minun'></Image>
            );
          })}
        </div>
      </main>
    </NextUIProvider>
  );
}
