import Link from 'next/link';
import React from 'react';
import { Header } from './viewButton';
import { teamArray } from '@/data/teamNames';

interface ViewProps {
  children?: React.ReactNode;
  header?: string;
  match: { player1: string; player2: string; score: string };
  index?: number;
  customClass?: string;
}

interface ViewPropsNoMatch {
  children?: React.ReactNode;
  header?: string;
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
}: ViewPropsNoMatch) {
  return (
    <main className='content-grid'>
      <Header>
        <h1 className='page-header'>{header}</h1>
      </Header>
      <div className={customClass}>{children}</div>
    </main>
  );
}

export function ScheduleTemplate({ children, header }: ViewPropsNoMatch) {
  return (
    <div>
      <div className='schedule-container'>{children}</div>
    </div>
  );
}

export function MatchTemplate({ match, index }: ViewProps) {
  // @ts-ignore
  const team1 = teamArray[match.player1];
  console.log(team1);
  // @ts-ignore
  const team2 = teamArray[match.player2];
  return (
    <Link
      href={`/scores/${match.player1}-${match.player2}`}
      key={index}
      className='match-container'
      data-score1={match?.score.charAt(0)}
      data-score2={match?.score.charAt(2)}
      data-played={match?.score !== '0-0' ? 'true' : 'false'}>
      {match?.score !== '0-0' ? (
        <>
          <div className='match-player-container'>
            <div className='match-player player-1'>
              <img className='match-player-image' src={team1.picture}></img>
              <div className='match-player-data'>
                <div className='match-team-name'>{team1.team}</div>
                <div className='match-player-name'>{team1.discord}</div>
              </div>
            </div>
            <div className='match-score'>
              <div className='score player-1'>{match?.score?.charAt(0)}</div>
            </div>
          </div>
          <div className='match-player-container'>
            <div className='match-player player-2'>
              <img className='match-player-image' src={team2.picture}></img>
              <div className='match-player-data'>
                <div className='match-team-name'>{team2.team}</div>
                <div className='match-player-name'>{team2.discord}</div>
              </div>
            </div>
            <div className='match-score'>
              <div className='score player-2'>{match?.score?.charAt(2)}</div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='match-player-container'>
            <div className='match-player player-1'>
              <img className='match-player-image' src={team1.picture}></img>
              <div className='match-player-data'>
                <div className='match-team-name'>{team1.team}</div>
                <div className='match-player-name'>{team1.discord}</div>
              </div>
            </div>
          </div>
          <div className='match-player-container'>
            <div className='match-player player-2'>
              <img className='match-player-image' src={team2.picture}></img>
              <div className='match-player-data'>
                <div className='match-team-name'>{team2.team}</div>
                <div className='match-player-name'>{team2.discord}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </Link>
  );
}
