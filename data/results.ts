import schedule from '@/data/schedule3.json';

export function returnResults(player1: string, player2: string, week: string) {
  const matchWeek: string = week;
  // @ts-ignore
  const index = schedule[matchWeek].findIndex((ele) => ele.player1 == player1);
  // @ts-ignore
  const result = schedule[matchWeek][index];
  // console.log(result);
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
