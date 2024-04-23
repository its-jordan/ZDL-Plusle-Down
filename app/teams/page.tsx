'use client';

import React from 'react';
import { BsDiscord } from 'react-icons/bs';
import { MdOutlineCatchingPokemon } from 'react-icons/md';
import Link from 'next/link';
import { Header } from '@/components/viewButton';

const teamsArray = [
  {
    player: 'danknett',
    teamName: 'BFI (Big Fucking Illumise)',
    showdown: 'Pweenween',
  },
  {
    player: 'seanboyq',
    teamName: 'Despicable Plusle and Friends',
    showdown: 'SeanBoyQ',
  },
  {
    player: 'resolamxxy',
    teamName: 'Zeta\u0027s boob window 😚',
    showdown: 'resolamxxy',
  },
  {
    player: 'beachwatch',
    teamName: 'Shit I found under the rug',
    showdown: 'brickneyspears',
  },
  { player: 'revelreloaded', teamName: 'NY Yampers', showdown: 'like p diddy' },
  { player: 'dtbaggins', teamName: 'Grotto Gremlins', showdown: 'DTBaggins' },
  { player: 'c0c0_', teamName: 'Clown Central', showdown: 'Wishmaker01' },
  { player: 'ifurgat', teamName: 'CUTENESS OVERLOAD ≧◡≦', showdown: 'ifurgat' },
  { player: 'tokotoro', teamName: 'Wooloo \u0026 Crew', showdown: 't0kotoro' },
  {
    player: 'castleflutes',
    teamName: 'Max Mensingus',
    showdown: 'johnstaraptor',
  },
  { player: 'thanabros', teamName: 'The Weathermen', showdown: 'THANABR0S' },
  {
    player: 'its_jordan',
    teamName: 'OMGVAMPIRESARESOKAWAII🧛',
    showdown: 'doomedschultze',
  },
];

function replaceUsername(e: string) {
  if (e == 'danknett') {
    return e.replace('d', 'D');
  } else if (e == 'seanboyq') {
    return e.replace('s', 'S').replace('b', 'B').replace('q', 'Q');
  } else if (e == 'dtbaggins') {
    return e.replace('dtb', 'DTB');
  } else if (e == 'ifurgat') {
    return e.replace('f', 'F');
  } else if (e == 'tokotoro') {
    return e.replace('t', 'T');
  } else {
    return e;
  }
}

export default function Teams() {
  return (
    <main className='content-grid'>
      <Header>
        <h1 className='page-header'>All Teams</h1>
      </Header>
      <div className='team-name-container'>
        {teamsArray.map((team, index) => {
          return (
            <Link
              key={index}
              className='team-name'
              href={`/teams/${team.player}`}>
              <div className='team-name-teamname'>{team.teamName}</div>
              <div className='team-bottom-container'>
                <div className='discord-link'>
                  <BsDiscord />
                  {replaceUsername(team.player)}
                </div>
                <Link
                  href={`https://pokemonshowdown.com/users/${team.showdown}`}
                  className='showdown-link'>
                  <MdOutlineCatchingPokemon />
                  <div className='team-name-showdown'>{team.showdown}</div>
                </Link>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
