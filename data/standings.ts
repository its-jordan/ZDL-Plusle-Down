import schedule from '@/data/schedule.json';
import { returnResults } from './results';

export function matches(currentWeek: string) {
  // @ts-ignore
  const playerString = schedule[currentWeek].map((ele) => {
    return { match: `${ele.player1}-${ele.player2}`, week: currentWeek };
  });
  const winners = playerString.map((ele: any) => {
    return returnResults(
      ele.match.split('-')[0],
      ele.match.split('-')[1],
      ele.week
    )?.winner;
  });
  const losers = playerString.map((ele: any) => {
    return returnResults(
      ele.match.split('-')[0],
      ele.match.split('-')[1],
      ele.week
    )?.loser;
  });
  return { winners, losers };
}

export function allResults(filter: string) {
  const week1 = matches('week-1');
  const week2 = matches('week-2');
  const week3 = matches('week-3');
  const week4 = matches('week-4');
  const week5 = matches('week-5');
  const week6 = matches('week-6');
  const week7 = matches('week-7');
  const week8 = matches('week-8');

  const winnerArray = week1.winners
    .concat(week2.winners)
    .concat(week3.winners)
    .concat(week4.winners)
    .concat(week5.winners)
    .concat(week6.winners)
    .concat(week7.winners)
    .concat(week8.winners);

  const winnerFilter = winnerArray.filter(
    (ele: string) => ele == filter
  ).length;

  const losersArray = week1.losers
    .concat(week2.losers)
    .concat(week3.losers)
    .concat(week4.losers)
    .concat(week5.losers)
    .concat(week6.losers)
    .concat(week7.losers)
    .concat(week8.losers);

  const loserFilter = losersArray.filter((ele: string) => ele == filter).length;

  return { winnerFilter, loserFilter };
}

export const standings = [
  {
    name: 'danknett',
    teamName: 'BFI (Big Fucking Illumise)',
    wins: allResults('danknett').winnerFilter,
    losses: allResults('danknett').loserFilter,
    eliminated: false,
    primaryType: 'water',
  },
  {
    name: 'seanboyq',
    teamName: 'Despicable Plusle and Friends',
    wins: allResults('seanboyq').winnerFilter,
    losses: allResults('seanboyq').loserFilter,
    eliminated: false,
    primaryType: 'fire',
  },
  {
    name: 'resolamxxy',
    teamName: 'Zeta\u0027s boob window 😚',
    wins: allResults('resolamxxy').winnerFilter,
    losses: allResults('resolamxxy').loserFilter,
    eliminated: false,
    primaryType: 'water',
  },
  {
    name: 'beachwatch',
    teamName: 'Shit I found under the rug',
    wins: allResults('beachwatch').winnerFilter,
    losses: allResults('beachwatch').loserFilter,
    eliminated: false,
    primaryType: 'bug',
  },
  {
    name: 'revelreloaded',
    teamName: 'NY Yampers',
    wins: allResults('revelreloaded').winnerFilter,
    losses: allResults('revelreloaded').loserFilter,
    eliminated: false,
    primaryType: 'electric',
  },
  {
    name: 'dtbaggins',
    teamName: 'Grotto Gremlins',
    wins: allResults('dtbaggins').winnerFilter,
    losses: allResults('dtbaggins').loserFilter,
    eliminated: false,
    primaryType: 'grass',
  },
  {
    name: 'c0c0_',
    teamName: 'Clown Central',
    wins: allResults('c0c0_').winnerFilter,
    losses: allResults('c0c0_').loserFilter,
    eliminated: false,
    primaryType: 'bug',
  },
  {
    name: 'ifurgat',
    teamName: 'CUTENESS OVERLOAD ≧◡≦',
    wins: allResults('ifurgat').winnerFilter,
    losses: allResults('ifurgat').loserFilter,
    eliminated: false,
    primaryType: 'poison',
  },
  {
    name: 'tokotoro',
    teamName: 'Wooloo \u0026 Crew',
    wins: allResults('tokotoro').winnerFilter,
    losses: allResults('tokotoro').loserFilter,
    eliminated: false,
    primaryType: 'fire',
  },
  {
    name: 'castleflutes',
    teamName: 'Max Mensingus',
    wins: allResults('castleflutes').winnerFilter,
    losses: allResults('castleflutes').loserFilter,
    eliminated: false,
    primaryType: 'ground',
  },
  {
    name: 'thanabros',
    teamName: 'The Weathermen',
    wins: allResults('thanabros').winnerFilter,
    losses: allResults('thanabros').loserFilter,
    eliminated: false,
    primaryType: 'normal',
  },
  {
    name: 'its_jordan',
    teamName: 'OMGVAMPIRESARESOKAWAII🧛',
    wins: allResults('its_jordan').winnerFilter,
    losses: allResults('its_jordan').loserFilter,
    eliminated: false,
    primaryType: 'bug',
  },
];
