import schedule from '@/data/schedule.json';
import returnresults from './results';

export function winnerNames() {
  const playerStringWk1 = schedule['week-1'].map((ele) => {
    return `${ele.player1}-${ele.player2}`;
  });
  const playerStringWk2 = schedule['week-2'].map((ele) => {
    return `${ele.player1}-${ele.player2}`;
  });
  const playerStringWk3 = schedule['week-3'].map((ele) => {
    return `${ele.player1}-${ele.player2}`;
  });
  const winners = playerStringWk1.map((element) => {
    return returnresults(element)?.winner;
  });

  const winners2 = playerStringWk2.map((element) => {
    return returnresults(element)?.winner;
  });

  const winners3 = playerStringWk3.map((element) => {
    return returnresults(element)?.winner;
  });

  const allWinners = winners.concat(winners2).concat(winners3);

  return allWinners;
}

export function loserNames() {
  const playerStringWk1 = schedule['week-1'].map((ele) => {
    return `${ele.player1}-${ele.player2}`;
  });
  const playerStringWk2 = schedule['week-2'].map((ele) => {
    return `${ele.player1}-${ele.player2}`;
  });
  const playerStringWk3 = schedule['week-3'].map((ele) => {
    return `${ele.player1}-${ele.player2}`;
  });
  const losers = playerStringWk1.map((element) => {
    return returnresults(element)?.loser;
  });

  const losers2 = playerStringWk2.map((element) => {
    return returnresults(element)?.loser;
  });

  const losers3 = playerStringWk3.map((element) => {
    return returnresults(element)?.loser;
  });

  const allLosers = losers.concat(losers2).concat(losers3);

  return allLosers;
}

export function getDefeated(e: string, weekValue: any) {
  // @ts-ignore
  const index = schedule[weekValue].findIndex(
    (ele: any) => ele.player1 == e || ele.player2 == e
  );
  // @ts-ignore
  const score =
    //   @ts-ignore
    schedule[weekValue][index].player1 == e &&
    //   @ts-ignore
    schedule[weekValue][index].score == '1-0'
      ? 6
      : //   @ts-ignore
      schedule[weekValue][index].player2 == e &&
        //   @ts-ignore
        schedule[weekValue][index].score == '0-1'
      ? 6
      : //   @ts-ignore
        schedule[weekValue][index].defeatlog.length - 6;
  console.log(score);
  return score;
}

export const standings = [
  {
    name: 'danknett',
    wins: winnerNames().filter((ele) => ele == 'danknett').length,
    losses: loserNames().filter((ele) => ele == 'danknett').length,
    defeats:
      getDefeated('danknett', 'week-1') +
      getDefeated('danknett', 'week-2') +
      getDefeated('danknett', 'week-3'),
    deaths: 18,
  },
  {
    name: 'seanboyq',
    wins: winnerNames().filter((ele) => ele == 'seanboyq').length,
    losses: loserNames().filter((ele) => ele == 'seanboyq').length,
    defeats: 12,
    deaths: 18,
  },
  {
    name: 'resolamxxy',
    wins: winnerNames().filter((ele) => ele == 'resolamxxy').length,
    losses: loserNames().filter((ele) => ele == 'resolamxxy').length,
    defeats: 18,
    deaths: 10,
  },
  {
    name: 'beachwatch',
    wins: winnerNames().filter((ele) => ele == 'beachwatch').length,
    losses: loserNames().filter((ele) => ele == 'beachwatch').length,
    defeats: 10,
    deaths: 14,
  },
  {
    name: 'revelreloaded',
    wins: winnerNames().filter((ele) => ele == 'revelreloaded').length,
    losses: loserNames().filter((ele) => ele == 'revelreloaded').length,
    defeats: 15,
    deaths: 6,
  },
  {
    name: 'dtbaggins',
    wins: winnerNames().filter((ele) => ele == 'dtbaggins').length,
    losses: loserNames().filter((ele) => ele == 'dtbaggins').length,
    defeats: 9,
    deaths: 16,
  },
  {
    name: 'c0c0_',
    wins: winnerNames().filter((ele) => ele == 'c0c0_').length,
    losses: loserNames().filter((ele) => ele == 'c0c0_').length,
    defeats: 9,
    deaths: 15,
  },
  {
    name: 'ifurgat',
    wins: winnerNames().filter((ele) => ele == 'ifurgat').length,
    losses: loserNames().filter((ele) => ele == 'ifurgat').length,
    defeats: 18,
    deaths: 9,
  },
  {
    name: 'tokotoro',
    wins: winnerNames().filter((ele) => ele == 'tokotoro').length,
    losses: loserNames().filter((ele) => ele == 'tokotoro').length,
    defeats: 13,
    deaths: 14,
  },
  {
    name: 'castleflutes',
    wins: winnerNames().filter((ele) => ele == 'castleflutes').length,
    losses: loserNames().filter((ele) => ele == 'castleflutes').length,
    defeats: 10,
    deaths: 15,
  },
  {
    name: 'thanabros',
    wins: winnerNames().filter((ele) => ele == 'thanabros').length,
    losses: loserNames().filter((ele) => ele == 'thanabros').length,
    defeats: 18,
    deaths: 4,
  },
  {
    name: 'its_jordan',
    wins: winnerNames().filter((ele) => ele == 'its_jordan').length,
    losses: loserNames().filter((ele) => ele == 'its_jordan').length,
    defeats:
      getDefeated('its_jordan', 'week-1') +
      getDefeated('its_jordan', 'week-2') +
      getDefeated('its_jordan', 'week-3'),
    deaths: 14,
  },
];
