import schedule from '@/data/schedule.json';

export default function returnresults(e: string) {
  if (e == 'thanabros-its_jordan') {
    const index = schedule['week-1'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-1'][index];
    const winner = result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { winner, loser };
  } else if (e == 'seanboyq-castleflutes') {
    const index = schedule['week-1'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-1'][index];
    const winner = result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { winner, loser };
  } else if (e == 'revelreloaded-c0c0_') {
    const index = schedule['week-1'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-1'][index];
    const winner = result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { winner, loser };
  } else if (e == 'tokotoro-ifurgat') {
    const index = schedule['week-1'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-1'][index];
    const winner = result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { winner, loser };
  } else if (e == 'resolamxxy-danknett') {
    const index = schedule['week-1'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-1'][index];
    const winner = result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { winner, loser };
  } else if (e == 'dtbaggins-beachwatch') {
    const index = schedule['week-1'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-1'][index];
    const winner = result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { winner, loser };
  } else if (e == 'ifurgat-dtbaggins') {
    const index = schedule['week-2'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-2'][index];
    const winner = result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { winner, loser };
  } else if (e == 'beachwatch-thanabros') {
    const index = schedule['week-2'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-2'][index];
    const winner = result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { winner, loser };
  } else if (e == 'danknett-tokotoro') {
    const index = schedule['week-2'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-2'][index];
    const winner = result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { winner, loser };
  } else if (e == 'c0c0_-resolamxxy') {
    const index = schedule['week-2'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-2'][index];
    const winner = result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { winner, loser };
  } else if (e == 'castleflutes-revelreloaded') {
    const index = schedule['week-2'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-2'][index];
    const winner = result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { winner, loser };
  } else if (e == 'its_jordan-seanboyq') {
    const index = schedule['week-2'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-2'][index];
    const winner = result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { winner, loser };
  } else if (e == 'resolamxxy-castleflutes') {
    const index = schedule['week-3'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-3'][index];
    const winner = result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { winner, loser };
  } else if (e == 'revelreloaded-its_jordan') {
    const index = schedule['week-3'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-3'][index];
    const winner = result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { winner, loser };
  } else if (e == 'thanabros-seanboyq') {
    const index = schedule['week-3'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-3'][index];
    const winner = result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { winner, loser };
  } else if (e == 'tokotoro-c0c0_') {
    const index = schedule['week-3'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-3'][index];
    const winner = result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { winner, loser };
  } else if (e == 'dtbaggins-danknett') {
    const index = schedule['week-3'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-3'][index];
    const winner = result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { winner, loser };
  } else if (e == 'beachwatch-ifurgat') {
    const index = schedule['week-3'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-3'][index];
    const winner = result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { winner, loser };
  }
}

export function returnResults(player1: string, player2: string, week: string) {
  const matchWeek: string = week;
  // @ts-ignore
  const index = schedule[matchWeek].findIndex((ele) => ele.player1 == player1);
  // @ts-ignore
  const result = schedule[matchWeek][index];
  if (result.score == '1-0') {
    const winner = player1;
    const loser = player2;
    return { winner, loser };
  } else if (result.score == '0-1') {
    const winner = player2;
    const loser = player1;
    return { winner, loser };
  } else {
    const winner = null;
    const loser = null;
    return { winner, loser };
  }
}
