import schedule from '@/data/schedule.json';

export default function returnresults(e: string) {
  if (e == 'thanabros-its_jordan') {
    const index = schedule['week-1'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-1'][index];
    const defeatLog = result.defeatlog;
    console.log(defeatLog);
    const loserCount = defeatLog?.length - 6;
    const winner = result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { defeatLog, loserCount, winner, loser };
  } else if (e == 'seanboyq-castleflutes') {
    const index = schedule['week-1'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-1'][index];
    const defeatLog = result.defeatlog;
    const loserCount = defeatLog?.length - 6;
    const winner =
      result && result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { defeatLog, loserCount, winner, loser };
  } else if (e == 'revelreloaded-c0c0_') {
    const index = schedule['week-1'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-1'][index];
    const defeatLog = result.defeatlog;
    const loserCount = defeatLog?.length - 6;
    const winner =
      result && result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { defeatLog, loserCount, winner, loser };
  } else if (e == 'tokotoro-ifurgat') {
    const index = schedule['week-1'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-1'][index];
    const defeatLog = result.defeatlog;
    const loserCount = defeatLog?.length - 6;
    const winner =
      result && result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { defeatLog, loserCount, winner, loser };
  } else if (e == 'resolamxxy-danknett') {
    const index = schedule['week-1'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-1'][index];
    const defeatLog = result.defeatlog;
    const loserCount = defeatLog?.length - 6;
    const winner =
      result && result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { defeatLog, loserCount, winner, loser };
  } else if (e == 'dtbaggins-beachwatch') {
    const index = schedule['week-1'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-1'][index];
    const defeatLog = result.defeatlog;
    const loserCount = defeatLog?.length - 6;
    const winner =
      result && result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { defeatLog, loserCount, winner, loser };
  } else if (e == 'ifurgat-dtbaggins') {
    const index = schedule['week-2'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-2'][index];
    const defeatLog = result.defeatlog;
    console.log(defeatLog);
    const loserCount = defeatLog?.length - 6;
    const winner = result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { defeatLog, loserCount, winner, loser };
  } else if (e == 'beachwatch-thanabros') {
    const index = schedule['week-2'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-2'][index];
    const defeatLog = result.defeatlog;
    console.log(defeatLog);
    const loserCount = defeatLog?.length - 6;
    const winner = result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { defeatLog, loserCount, winner, loser };
  } else if (e == 'danknett-tokotoro') {
    const index = schedule['week-2'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-2'][index];
    const defeatLog = result.defeatlog;
    console.log(defeatLog);
    const loserCount = defeatLog?.length - 6;
    const winner = result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { defeatLog, loserCount, winner, loser };
  } else if (e == 'c0c0_-resolamxxy') {
    const index = schedule['week-2'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-2'][index];
    const defeatLog = result.defeatlog;
    console.log(defeatLog);
    const loserCount = defeatLog?.length - 6;
    const winner = result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { defeatLog, loserCount, winner, loser };
  } else if (e == 'castleflutes-revelreloaded') {
    const index = schedule['week-2'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-2'][index];
    const defeatLog = result.defeatlog;
    console.log(defeatLog);
    const loserCount = defeatLog?.length - 6;
    const winner = result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { defeatLog, loserCount, winner, loser };
  } else if (e == 'its_jordan-seanboyq') {
    const index = schedule['week-2'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-2'][index];
    const defeatLog = result.defeatlog;
    console.log(defeatLog);
    const loserCount = defeatLog?.length - 6;
    const winner = result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { defeatLog, loserCount, winner, loser };
  } else if (e == 'resolamxxy-castleflutes') {
    const index = schedule['week-3'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-3'][index];
    const defeatLog = result.defeatlog;
    console.log(defeatLog);
    const loserCount = defeatLog?.length - 6;
    const winner = result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { defeatLog, loserCount, winner, loser };
  } else if (e == 'revelreloaded-its_jordan') {
    const index = schedule['week-3'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-3'][index];
    const defeatLog = result.defeatlog;
    console.log(defeatLog);
    const loserCount = defeatLog?.length - 6;
    const winner = result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { defeatLog, loserCount, winner, loser };
  } else if (e == 'thanabros-seanboyq') {
    const index = schedule['week-3'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-3'][index];
    const defeatLog = result.defeatlog;
    console.log(defeatLog);
    const loserCount = defeatLog?.length - 6;
    const winner = result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { defeatLog, loserCount, winner, loser };
  } else if (e == 'tokotoro-c0c0_') {
    const index = schedule['week-3'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-3'][index];
    const defeatLog = result.defeatlog;
    console.log(defeatLog);
    const loserCount = defeatLog?.length - 6;
    const winner = result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { defeatLog, loserCount, winner, loser };
  } else if (e == 'dtbaggins-danknett') {
    const index = schedule['week-3'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-3'][index];
    const defeatLog = result.defeatlog;
    console.log(defeatLog);
    const loserCount = defeatLog?.length - 6;
    const winner = result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { defeatLog, loserCount, winner, loser };
  } else if (e == 'beachwatch-ifurgat') {
    const index = schedule['week-3'].findIndex(
      (ele) => ele.player1 == e.split('-')[0]
    );
    const result = schedule['week-3'][index];
    const defeatLog = result.defeatlog;
    console.log(defeatLog);
    const loserCount = defeatLog?.length - 6;
    const winner = result.score == '1-0' ? result.player1 : result.player2;
    const loser = result.score == '1-0' ? result.player2 : result.player1;
    return { defeatLog, loserCount, winner, loser };
  }
}
