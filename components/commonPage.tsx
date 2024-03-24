import Link from 'next/link';
import React from 'react';
import { Header } from './viewButton';

interface ViewProps {
  children?: React.ReactNode;
  header?: string;
  match?: { player1: string; player2: string; score: string };
  index?: number;
  customClass?: string;
}

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

export default function CommonPage({
  children,
  header,
  customClass,
}: ViewProps) {
  return (
    <main className='content-grid'>
      <Header>
        <h1 className='page-header'>{header}</h1>
      </Header>
      <div className={customClass}>{children}</div>
    </main>
  );
}

export function ScheduleTemplate({ children, header }: ViewProps) {
  return (
    <div>
      <div
        className='subheading'
        id={`${header?.toLowerCase().replace(' ', '-')}`}>
        {header}
      </div>
      <div className='schedule-container'>{children}</div>
    </div>
  );
}

function replaceTeamName(e: string) {
  if (e == 'danknett') return 'BFI (Big Fucking Illumise)';
  else if (e == 'seanboyq') return 'Despicable Plusle and Friends';
  else if (e == 'resolamxxy') return 'Zeta\u0027s boob window 😚';
  else if (e == 'beachwatch') return 'Shit I found under the rug';
  else if (e == 'revelreloaded') return 'NY Yampers';
  else if (e == 'dtbaggins') return 'Grotto Gremlins';
  else if (e == 'c0c0_') return 'Clown Central';
  else if (e == 'ifurgat') return 'CUTENESS OVERLOAD ≧◡≦';
  else if (e == 'tokotoro') return 'Wooloo & Crew';
  else if (e == 'castleflutes') return 'Max Mensingus';
  else if (e == 'thanabros') return 'The Weathermen';
  else if (e == 'its_jordan') return 'OMGVAMPIRESARESOKAWAII🧛';
  else return e;
}

export function MatchTemplate({ match, index }: ViewProps) {
  return (
    <Link
      href={`/scores/${match?.player1}-${match?.player2}`}
      key={index}
      className='match-container'
      data-score1={match?.score.charAt(0)}
      data-score2={match?.score.charAt(2)}>
      <div className='match-player player-1'>
        <div className='match-team-name'>
          {match !== undefined ? replaceTeamName(match.player1) : <></>}
        </div>
        <div className='match-player-name'>
          {match !== undefined ? replaceUsername(match.player1) : <></>}
        </div>
      </div>
      {match?.score !== '0-0' ? (
        <div className='match-score'>
          <div className='score player-1'>{match?.score?.charAt(0)}</div>
          <div className='score player-2'>{match?.score?.charAt(2)}</div>
        </div>
      ) : (
        <></>
      )}
      <div className='match-player player-2'>
        <div className='match-team-name'>
          {match !== undefined ? replaceTeamName(match.player2) : <></>}
        </div>
        <div className='match-player-name'>
          {match !== undefined ? replaceUsername(match.player2) : <></>}
        </div>
      </div>
    </Link>
  );
}
