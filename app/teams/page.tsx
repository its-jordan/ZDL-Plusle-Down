'use client';

import React from 'react';
import { BsDiscord, BsPersonFill } from 'react-icons/bs';
import { MdOutlineCatchingPokemon } from 'react-icons/md';
import Link from 'next/link';
import { Header } from '@/components/viewButton';
import { teamsArray } from '@/data/teamNames';

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
              href={`/teams/${team.discord}`}>
              <img className='background-team-picture' src={team.picture}></img>
              <div className='team-name-teamname'>{team.team}</div>
              <div className='team-bottom-container'>
                <div className='discord-link'>
                  <BsPersonFill />
                  {team.name}
                </div>
                <div className='discord-link'>
                  <BsDiscord />
                  {replaceUsername(team.discord)}
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
