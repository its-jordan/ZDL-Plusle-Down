import schedule from '@/data/schedule.json';
import returnresults from './results';

const currentWeek = 4;

const users = ['resolamxxy', 'ifurgat'];

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

  const playerStringWk4 = schedule['week-4'].map((ele) => {
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

  const winners4 = playerStringWk4.map((element) => {
    return returnresults(element)?.winner;
  });

  const allWinners = winners.concat(winners2).concat(winners3).concat(winners4);

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
  const playerStringWk4 = schedule['week-4'].map((ele) => {
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
  const losers4 = playerStringWk4.map((element) => {
    return returnresults(element)?.loser;
  });

  const allLosers = losers.concat(losers2).concat(losers3).concat(losers4);

  return allLosers;
}

export function getDefeated(e: string, weekValue: any) {
  // @ts-ignore
  const index = schedule[weekValue].findIndex(
    (ele: any) => ele.player1 == e || ele.player2 == e
  );
  if (weekValue >= currentWeek) {
    const score = 0;
    return score;
  }
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
  return score;
}

export function getDeaths(e: string, weekValue: any) {
  // @ts-ignore
  const index = schedule[weekValue].findIndex(
    (ele: any) => ele.player1 == e || ele.player2 == e
  );
  if (weekValue >= currentWeek) {
    const score = 0;
    return score;
  }
  // @ts-ignore
  const score =
    //   @ts-ignore
    schedule[weekValue][index].player1 == e &&
    //   @ts-ignore
    schedule[weekValue][index].score == '0-1'
      ? 6
      : //   @ts-ignore
      schedule[weekValue][index].player2 == e &&
        //   @ts-ignore
        schedule[weekValue][index].score == '1-0'
      ? 6
      : //   @ts-ignore
        schedule[weekValue][index].defeatlog.length - 6;
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
      getDefeated('danknett', 'week-3') +
      getDefeated('danknett', 'week-4') +
      getDefeated('danknett', 'week-5') +
      getDefeated('danknett', 'week-6') +
      getDefeated('danknett', 'week-7') +
      getDefeated('danknett', 'week-8'),
    deaths:
      getDeaths('danknett', 'week-1') +
      getDeaths('danknett', 'week-2') +
      getDeaths('danknett', 'week-3') +
      getDeaths('danknett', 'week-4') +
      getDeaths('danknett', 'week-5') +
      getDeaths('danknett', 'week-6') +
      getDeaths('danknett', 'week-7') +
      getDeaths('danknett', 'week-8'),
  },
  {
    name: 'seanboyq',
    wins: winnerNames().filter((ele) => ele == 'seanboyq').length,
    losses: loserNames().filter((ele) => ele == 'seanboyq').length,
    defeats:
      getDefeated('seanboyq', 'week-1') +
      getDefeated('seanboyq', 'week-2') +
      getDefeated('seanboyq', 'week-3') +
      getDefeated('seanboyq', 'week-4') +
      getDefeated('seanboyq', 'week-5') +
      getDefeated('seanboyq', 'week-6') +
      getDefeated('seanboyq', 'week-7') +
      getDefeated('seanboyq', 'week-8'),
    deaths:
      getDeaths('seanboyq', 'week-1') +
      getDeaths('seanboyq', 'week-2') +
      getDeaths('seanboyq', 'week-3') +
      getDeaths('seanboyq', 'week-4') +
      getDeaths('seanboyq', 'week-5') +
      getDeaths('seanboyq', 'week-6') +
      getDeaths('seanboyq', 'week-7') +
      getDeaths('seanboyq', 'week-8'),
  },
  {
    name: 'resolamxxy',
    wins: winnerNames().filter((ele) => ele == 'resolamxxy').length,
    losses: loserNames().filter((ele) => ele == 'resolamxxy').length,
    defeats:
      getDefeated('resolamxxy', 'week-1') +
      getDefeated('resolamxxy', 'week-2') +
      getDefeated('resolamxxy', 'week-3') +
      getDefeated('resolamxxy', 'week-4') +
      getDefeated('resolamxxy', 'week-5') +
      getDefeated('resolamxxy', 'week-6') +
      getDefeated('resolamxxy', 'week-7') +
      getDefeated('resolamxxy', 'week-8'),
    deaths:
      getDeaths('resolamxxy', 'week-1') +
      getDeaths('resolamxxy', 'week-2') +
      getDeaths('resolamxxy', 'week-3') +
      getDeaths('resolamxxy', 'week-4') +
      getDeaths('resolamxxy', 'week-5') +
      getDeaths('resolamxxy', 'week-6') +
      getDeaths('resolamxxy', 'week-7') +
      getDeaths('resolamxxy', 'week-8'),
  },
  {
    name: 'beachwatch',
    wins: winnerNames().filter((ele) => ele == 'beachwatch').length,
    losses: loserNames().filter((ele) => ele == 'beachwatch').length,
    defeats:
      getDefeated('beachwatch', 'week-1') +
      getDefeated('beachwatch', 'week-2') +
      getDefeated('beachwatch', 'week-3') +
      getDefeated('beachwatch', 'week-4') +
      getDefeated('beachwatch', 'week-5') +
      getDefeated('beachwatch', 'week-6') +
      getDefeated('beachwatch', 'week-7') +
      getDefeated('beachwatch', 'week-8'),
    deaths:
      getDeaths('beachwatch', 'week-1') +
      getDeaths('beachwatch', 'week-2') +
      getDeaths('beachwatch', 'week-3') +
      getDeaths('beachwatch', 'week-4') +
      getDeaths('beachwatch', 'week-5') +
      getDeaths('beachwatch', 'week-6') +
      getDeaths('beachwatch', 'week-7') +
      getDeaths('beachwatch', 'week-8'),
  },
  {
    name: 'revelreloaded',
    wins: winnerNames().filter((ele) => ele == 'revelreloaded').length,
    losses: loserNames().filter((ele) => ele == 'revelreloaded').length,
    defeats:
      getDefeated('revelreloaded', 'week-1') +
      getDefeated('revelreloaded', 'week-2') +
      getDefeated('revelreloaded', 'week-3') +
      getDefeated('revelreloaded', 'week-4') +
      getDefeated('revelreloaded', 'week-5') +
      getDefeated('revelreloaded', 'week-6') +
      getDefeated('revelreloaded', 'week-7') +
      getDefeated('revelreloaded', 'week-8'),
    deaths:
      getDeaths('revelreloaded', 'week-1') +
      getDeaths('revelreloaded', 'week-2') +
      getDeaths('revelreloaded', 'week-3') +
      getDeaths('revelreloaded', 'week-4') +
      getDeaths('revelreloaded', 'week-5') +
      getDeaths('revelreloaded', 'week-6') +
      getDeaths('revelreloaded', 'week-7') +
      getDeaths('revelreloaded', 'week-8'),
  },
  {
    name: 'dtbaggins',
    wins: winnerNames().filter((ele) => ele == 'dtbaggins').length,
    losses: loserNames().filter((ele) => ele == 'dtbaggins').length,
    defeats:
      getDefeated('dtbaggins', 'week-1') +
      getDefeated('dtbaggins', 'week-2') +
      getDefeated('dtbaggins', 'week-3') +
      getDefeated('dtbaggins', 'week-4') +
      getDefeated('dtbaggins', 'week-5') +
      getDefeated('dtbaggins', 'week-6') +
      getDefeated('dtbaggins', 'week-7') +
      getDefeated('dtbaggins', 'week-8'),
    deaths:
      getDeaths('dtbaggins', 'week-1') +
      getDeaths('dtbaggins', 'week-2') +
      getDeaths('dtbaggins', 'week-3') +
      getDeaths('dtbaggins', 'week-4') +
      getDeaths('dtbaggins', 'week-5') +
      getDeaths('dtbaggins', 'week-6') +
      getDeaths('dtbaggins', 'week-7') +
      getDeaths('dtbaggins', 'week-8'),
  },
  {
    name: 'c0c0_',
    wins: winnerNames().filter((ele) => ele == 'c0c0_').length,
    losses: loserNames().filter((ele) => ele == 'c0c0_').length,
    defeats:
      getDefeated('c0c0_', 'week-1') +
      getDefeated('c0c0_', 'week-2') +
      getDefeated('c0c0_', 'week-3') +
      getDefeated('c0c0_', 'week-4') +
      getDefeated('c0c0_', 'week-5') +
      getDefeated('c0c0_', 'week-6') +
      getDefeated('c0c0_', 'week-7') +
      getDefeated('c0c0_', 'week-8'),
    deaths:
      getDeaths('c0c0_', 'week-1') +
      getDeaths('c0c0_', 'week-2') +
      getDeaths('c0c0_', 'week-3') +
      getDeaths('c0c0_', 'week-4') +
      getDeaths('c0c0_', 'week-5') +
      getDeaths('c0c0_', 'week-6') +
      getDeaths('c0c0_', 'week-7') +
      getDeaths('c0c0_', 'week-8'),
  },
  {
    name: 'ifurgat',
    wins: winnerNames().filter((ele) => ele == 'ifurgat').length,
    losses: loserNames().filter((ele) => ele == 'ifurgat').length,
    defeats:
      getDefeated('ifurgat', 'week-1') +
      getDefeated('ifurgat', 'week-2') +
      getDefeated('ifurgat', 'week-3') +
      getDefeated('ifurgat', 'week-4') +
      getDefeated('ifurgat', 'week-5') +
      getDefeated('ifurgat', 'week-6') +
      getDefeated('ifurgat', 'week-7') +
      getDefeated('ifurgat', 'week-8'),
    deaths:
      getDeaths('ifurgat', 'week-1') +
      getDeaths('ifurgat', 'week-2') +
      getDeaths('ifurgat', 'week-3') +
      getDeaths('ifurgat', 'week-4') +
      getDeaths('ifurgat', 'week-5') +
      getDeaths('ifurgat', 'week-6') +
      getDeaths('ifurgat', 'week-7') +
      getDeaths('ifurgat', 'week-8'),
  },
  {
    name: 'tokotoro',
    wins: winnerNames().filter((ele) => ele == 'tokotoro').length,
    losses: loserNames().filter((ele) => ele == 'tokotoro').length,
    defeats:
      getDefeated('tokotoro', 'week-1') +
      getDefeated('tokotoro', 'week-2') +
      getDefeated('tokotoro', 'week-3') +
      getDefeated('tokotoro', 'week-4') +
      getDefeated('tokotoro', 'week-5') +
      getDefeated('tokotoro', 'week-6') +
      getDefeated('tokotoro', 'week-7') +
      getDefeated('tokotoro', 'week-8'),
    deaths:
      getDeaths('tokotoro', 'week-1') +
      getDeaths('tokotoro', 'week-2') +
      getDeaths('tokotoro', 'week-3') +
      getDeaths('tokotoro', 'week-4') +
      getDeaths('tokotoro', 'week-5') +
      getDeaths('tokotoro', 'week-6') +
      getDeaths('tokotoro', 'week-7') +
      getDeaths('tokotoro', 'week-8'),
  },
  {
    name: 'castleflutes',
    wins: winnerNames().filter((ele) => ele == 'castleflutes').length,
    losses: loserNames().filter((ele) => ele == 'castleflutes').length,
    defeats:
      getDefeated('castleflutes', 'week-1') +
      getDefeated('castleflutes', 'week-2') +
      getDefeated('castleflutes', 'week-3') +
      getDefeated('castleflutes', 'week-4') +
      getDefeated('castleflutes', 'week-5') +
      getDefeated('castleflutes', 'week-6') +
      getDefeated('castleflutes', 'week-7') +
      getDefeated('castleflutes', 'week-8'),
    deaths:
      getDeaths('castleflutes', 'week-1') +
      getDeaths('castleflutes', 'week-2') +
      getDeaths('castleflutes', 'week-3') +
      getDeaths('castleflutes', 'week-4') +
      getDeaths('castleflutes', 'week-5') +
      getDeaths('castleflutes', 'week-6') +
      getDeaths('castleflutes', 'week-7') +
      getDeaths('castleflutes', 'week-8'),
  },
  {
    name: 'thanabros',
    wins: winnerNames().filter((ele) => ele == 'thanabros').length,
    losses: loserNames().filter((ele) => ele == 'thanabros').length,
    defeats:
      getDefeated('thanabros', 'week-1') +
      getDefeated('thanabros', 'week-2') +
      getDefeated('thanabros', 'week-3') +
      getDefeated('thanabros', 'week-4') +
      getDefeated('thanabros', 'week-5') +
      getDefeated('thanabros', 'week-6') +
      getDefeated('thanabros', 'week-7') +
      getDefeated('thanabros', 'week-8'),
    deaths:
      getDeaths('thanabros', 'week-1') +
      getDeaths('thanabros', 'week-2') +
      getDeaths('thanabros', 'week-3') +
      getDeaths('thanabros', 'week-4') +
      getDeaths('thanabros', 'week-5') +
      getDeaths('thanabros', 'week-6') +
      getDeaths('thanabros', 'week-7') +
      getDeaths('thanabros', 'week-8'),
  },
  {
    name: 'its_jordan',
    wins: winnerNames().filter((ele) => ele == 'its_jordan').length,
    losses: loserNames().filter((ele) => ele == 'its_jordan').length,
    defeats:
      getDefeated('its_jordan', 'week-1') +
      getDefeated('its_jordan', 'week-2') +
      getDefeated('its_jordan', 'week-3') +
      getDefeated('its_jordan', 'week-4') +
      getDefeated('its_jordan', 'week-5') +
      getDefeated('its_jordan', 'week-6') +
      getDefeated('its_jordan', 'week-7') +
      getDefeated('its_jordan', 'week-8'),
    deaths:
      getDeaths('its_jordan', 'week-1') +
      getDeaths('its_jordan', 'week-2') +
      getDeaths('its_jordan', 'week-3') +
      getDeaths('its_jordan', 'week-4') +
      getDeaths('its_jordan', 'week-5') +
      getDeaths('its_jordan', 'week-6') +
      getDeaths('its_jordan', 'week-7') +
      getDeaths('its_jordan', 'week-8'),
  },
];
