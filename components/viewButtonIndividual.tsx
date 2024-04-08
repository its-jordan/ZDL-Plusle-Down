'use client';

import Link from 'next/link';
import React, { createContext, useContext, useEffect } from 'react';
import {
  PiGridFourLight,
  PiGridFourFill,
  PiListNumbersLight,
  PiListNumbersFill,
  PiArrowLeftBold,
  PiArrowUpRightBold,
} from 'react-icons/pi';
import ReturnPokemonIndividual from './getPokemonIndividual';
import { nameSplit } from './getPokemon';

interface ViewProps {
  children?: React.ReactNode;
  link?: string;
  pokemon?: string;
}

export function Header({ children }: ViewProps) {
  return <div className='header-container'>{children}</div>;
}

export default function ViewModeIndividual({ pokemon, children }: ViewProps) {
  return (
    <main className='content-grid'>
      <Header>
        {/* <Link className='back-selector' href={'./teams'}>
          <div className='back-button'>
            <PiArrowLeftBold />
            <div>Teams</div>
          </div>
        </Link> */}
        {/* @ts-ignore */}
        <h1 className='page-header flex-grow'>{nameSplit(pokemon)}</h1>
        <Link
          // @ts-ignore
          href={`https://www.smogon.com/dex/sv/pokemon/${pokemon}`}
          className='smogon-link'
          target='_blank'>
          View on Smogon <PiArrowUpRightBold />
        </Link>
      </Header>
      <div>
        {children}
        {/* @ts-ignore */}
        <div>{ReturnPokemonIndividual({ pokemon })}</div>
      </div>
    </main>
  );
}
