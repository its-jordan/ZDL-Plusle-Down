import schedule from '@/data/schedule.json';
import { returnResults } from './results';
import useTeamName from './teamNames';

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
  eliminated: boolean
) {
  return {
    name: name,
    teamName: useTeamName(name),
    wins: allResults(name).winnerFilter,
    losses:
      name == 'danknett' || name == 'c0c0_'
        ? allResults(name).loserFilter + 1
        : allResults(name).loserFilter,
    eliminated: eliminated,
    primaryType: type,
  };
}

export const standings = [
  // Name: string, Type: string, Eliminated: boolean
  standingConstructor('danknett', 'water', false),
  standingConstructor('seanboyq', 'fire', false),
  standingConstructor('resolamxxy', 'water', false),
  standingConstructor('beachwatch', 'bug', false),
  standingConstructor('revelreloaded', 'electric', false),
  standingConstructor('dtbaggins', 'grass', false),
  standingConstructor('c0c0_', 'bug', false),
  standingConstructor('ifurgat', 'poison', false),
  standingConstructor('tokotoro', 'fire', false),
  standingConstructor('castleflutes', 'ground', false),
  standingConstructor('thanabros', 'normal', false),
  standingConstructor('its_jordan', 'bug', false),
];
