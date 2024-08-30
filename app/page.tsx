'use client';

import Image from 'next/image';
import { NextUIProvider } from '@nextui-org/react';
import { Component } from '@/components/charts/radar';

export default function Home() {
  return (
    <NextUIProvider>
      <main>
        <div className='home-background'>
          <div className='home-text'>ZDL Offseason 2</div>
          <Image
            className='muk-img'
            src={'/images/rayquaza-jordans.png'}
            data-pokemon={'rayquaza'}
            width={2560}
            height={2560}
            alt='Rayquaza Jordans'></Image>
          <div className='home-fg'></div>
        </div>
      </main>
    </NextUIProvider>
  );
}
