import schedule from '@/data/schedule3.json';
import { returnResults } from './results';
import { teamArray, teamsArray } from './teamNames';

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
  // const week3 = matches('week-3');
  // const week4 = matches('week-4');
  // const week5 = matches('week-5');
  // const week6 = matches('week-6');
  // const week7 = matches('week-7');
  // const week8 = matches('week-8');

  const winnerArray = week1.winners.concat(week2.winners);

  const winnerFilter: number = winnerArray.filter(
    (ele: string) => ele == filter
  ).length;

  const losersArray = week1.losers.concat(week2.losers);

  const loserFilter: number = losersArray.filter(
    (ele: string) => ele == filter
  ).length;

  return { winnerFilter, loserFilter };
}

export function standingConstructor(
  name: string,
  type: string,
  eliminated: boolean
) {
  enum forfeits {
    racer_56 = 0,
    its_jordan = 0,
    ifurgat = 0,
  }
  const index = teamsArray.findIndex((value) => value.name == name).toString();
  console.log(index);
  return {
    name: name,
    // @ts-ignore
    teamName: teamArray[name].team,
    wins: allResults(name).winnerFilter,
    losses: allResults(name).loserFilter,
    eliminated: eliminated,
    primaryType: type,
  };
}

export const standings = [
  // Name: string, Type: string, Eliminated: boolean
  standingConstructor('lupamai', 'fighting', false),
  standingConstructor('jaegerpods', 'ground', false),
  standingConstructor('seanboyq', 'water', false),
  standingConstructor('danknett', 'dark', false),
  standingConstructor('beachwatch', 'psychic', false),
  standingConstructor('c0c0_', 'electric', false),
  standingConstructor('dtbaggins', 'dragon', false),
  standingConstructor('revelreloaded', 'normal', false),
  standingConstructor('its_jordan', 'steel', false),
  standingConstructor('ifurgat', 'ground', false),
  standingConstructor('resolamxxy', 'rock', false),
  standingConstructor('tokotoro', 'ground', false),
];
