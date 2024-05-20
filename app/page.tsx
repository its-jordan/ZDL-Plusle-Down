'use client';

import Image from 'next/image';
import { NextUIProvider } from '@nextui-org/react';

export default function Home() {
  return (
    <NextUIProvider>
      <main>
        <div className='home-background'>
          <div className='home-text'>ZDL Season 2</div>
          <Image
            className='muk-img'
            src={'/images/muk-mega.png'}
            data-pokemon={'muk-mega'}
            width={2560}
            height={2560}
            alt='plusle and minun'></Image>
          <div className='home-fg'></div>
        </div>
      </main>
    </NextUIProvider>
  );
}
