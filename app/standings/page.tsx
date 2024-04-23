'use client';

import CommonPage from '@/components/commonPage';
import replaceUsername from '@/functions/replaceUsername';
import { standings } from '@/data/standings';
import Link from 'next/link';

const winPercentage = (wins: number, losses: number) => {
  return wins / (wins + losses);
};

const sortedStandings = [...standings].sort(
  (a, b) => winPercentage(b.wins, b.losses) - winPercentage(a.wins, a.losses)
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
          <div className='standings-header-content'></div>
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
              data-type={data.primaryType}
              key={index}>
              <div
                className='type-icon-container type-matchup'
                key={index}
                data-type='type'>
                <img
                  src={`/icons/${data.primaryType}.svg`}
                  height={30}
                  width={30}
                  data-type={data.primaryType}
                  className='pokemon-type-icon'
                />
                <div
                  className='hover-only type_title'
                  data-type={data.primaryType}>
                  {data.primaryType.charAt(0).toUpperCase() +
                    data.primaryType.slice(1)}
                </div>
              </div>
              <div className='standings-data-content' data-type='name'>
                <div className='standings-data-teamname'>
                  <div>{data.teamName} </div>
                  {data.eliminated ? (
                    <div className='eliminated-badge'>Eliminated</div>
                  ) : (
                    <></>
                  )}
                </div>
                <div className='standings-data-username'>
                  {replaceUsername(data.name)}
                </div>
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
            </Link>
          );
        })}
      </div>
    </CommonPage>
  );
}
