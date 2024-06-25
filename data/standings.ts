import schedule from '@/data/schedule2.json';
import { returnResults } from './results';
import { teamArray } from './teamNames';

export function matches(currentWeek: string) {
  // @ts-ignore
  const playerString = schedule[currentWeek].map((ele) => {
    return { player1: ele.player1, player2: ele.player2, week: currentWeek };
  });
  const winners = playerString.map((ele: any) => {
    return returnResults(ele.player1, ele.player2, ele.week)?.winner;
  });
  const losers = playerString.map((ele: any) => {
    return returnResults(ele.player1, ele.player2, ele.week)?.loser;
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

  const winnerFilter: number = winnerArray.filter(
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

  const loserFilter: number = losersArray.filter(
    (ele: string) => ele == filter
  ).length;

  return { winnerFilter, loserFilter };
}

export function standingConstructor(
  name: string,
  type: string,
  eliminated: boolean,
) {
  enum forfeits {
    racer_56 = 1,
    its_jordan = 1,
    ifurgat = 1
  }
  const kills = {
    racer_59: 2 + 6 + 2 + 5 + 1 + 2 + (forfeits.racer_56 * 6),
    thanabros: 3 + 4 + 1 + 1 + 3 + 1 + 3 + 2,
    seanboyq: 7 + 2 + 5 + 2 + 6 + 3 + 1 + 1,
    bigmanbinch: 3 + 8 + 1 + 1 + 2 + 3 + 3,
    castleflutes: 2 + 1 + 1,
    beachwatch: 5 + 3 + 2 + 1 + 1,
    c0c0_: 7 + 2 + 2 + 2 + 5 + 1 ,
    dtbaggins: 4 + 1 + 1 + 3 + 7 + 3 + 1,
    revelreloaded: 4 + 4 + 5 + 2 + 4 + 4 + 2,
    its_jordan: 1 + 5 + 1 + 9 + 3 + 2 + (forfeits.its_jordan * 6),
    ifurgat: 7 + 1 + 7 + 6 + 1 + 1 + 1 + (forfeits.ifurgat * 6),
    resolamxxy: 2 + 4 + 1 + 3 + 8 + 1 + 1,
    tokotoro: 2 + 2 + 5 + 4 + 1 + 1 + 1,
    aquagtothepast: 7 + 3 + 2 + 1 + 1 + 2 + 2 + 4 + 2,
  }
  return {
    name: name,
    // @ts-ignore
    teamName: teamArray[name].team,
    wins: allResults(name).winnerFilter,
    losses: allResults(name).loserFilter,
    eliminated: eliminated,
    primaryType: type,
    // @ts-ignore
    kills: (kills[name] - (allResults(name).winnerFilter * 6)) + (allResults(name).winnerFilter * 6)
  };
}

export const standings = [
  // Name: string, Type: string, Eliminated: boolean
  standingConstructor('racer_59', 'fighting', false),
  standingConstructor('thanabros', 'ground', false),
  standingConstructor('seanboyq', 'water', false),
  standingConstructor('bigmanbinch', 'electric', false),
  standingConstructor('castleflutes', 'dark', false),
  standingConstructor('beachwatch', 'psychic', false),
  standingConstructor('c0c0_', 'electric', false),
  standingConstructor('dtbaggins', 'dragon', false),
  standingConstructor('revelreloaded', 'normal', false),
  standingConstructor('its_jordan', 'steel', false),
  standingConstructor('ifurgat', 'ground', false),
  standingConstructor('resolamxxy', 'rock', false),
  standingConstructor('tokotoro', 'ground', false),
  standingConstructor('aquagtothepast', 'grass', false),
];
