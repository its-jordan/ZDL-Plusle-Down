'use client';

import CommonPage from '@/components/commonPage';
import replaceUsername from '@/functions/replaceUsername';
import { standings } from '@/data/standings';
import Link from 'next/link';

const winPercentage = (wins: number, losses: number) => {
  return wins / (wins + losses);
};

const sortedStandings = [...standings].sort(
  (a, b) =>
    winPercentage(b.wins, b.losses) - winPercentage(a.wins, a.losses) ||
    b.defeats - b.deaths - (a.defeats - a.deaths)
);
const sortedStandingsReverse = [...standings].sort((a, b) => a.wins - b.wins);

const maxWins = sortedStandingsReverse.pop()?.wins;

const gamesBehind = (wins: number, maxWins: number) => {
  return maxWins - wins != 0 ? maxWins - wins : '-';
};

export default function Standings() {
  return (
    <CommonPage header='Standings'>
      <div className='standings-container' role='treegrid'>
        <div className='standings-header'>
          <div className='standings-header-content'>Name</div>
          <div className='standings-header-content'>Wins</div>
          <div className='standings-header-content'>Losses</div>
          <div className='standings-header-content'>Win Pct.</div>
          <div className='standings-header-content'>GB</div>
          {/* <div className='standings-header-content'>+ -</div> */}
        </div>
        {sortedStandings.map((data, index) => {
          return (
            <Link
              href={`/teams/${data.name}`}
              className='standings-data'
              key={index}>
              <div className='standings-data-content' data-type='name'>
                {replaceUsername(data.name)}
              </div>
              <div className='standings-data-content' data-type='wins'>
                {data.wins}
              </div>
              <div className='standings-data-content' data-type='losses'>
                {data.losses}
              </div>
              <div className='standings-data-winpct'>
                {winPercentage(data.wins, data.losses)
                  .toFixed(3)
                  .replace('0.', '.')}
              </div>
              <div className='standings-data-gb'>
                {maxWins ? gamesBehind(data.wins, maxWins) : ''}
              </div>
              {/* <div
                className={`${
                  Math.sign(data.defeats - data.deaths) == 1
                    ? 'standings-data-diff diff-positive'
                    : Math.sign(data.defeats - data.deaths) == 0
                    ? 'standings-data-diff diff-zero'
                    : 'standings-data-diff diff-negative'
                }`}>
                {Math.sign(data.defeats - data.deaths) == 1
                  ? '+'
                  : Math.sign(data.defeats - data.deaths) == 0
                  ? ''
                  : ''}
                {data.defeats - data.deaths}
              </div> */}
            </Link>
          );
        })}
      </div>
    </CommonPage>
  );
}
