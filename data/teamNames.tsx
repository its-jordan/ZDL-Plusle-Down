'use client';

import { usePathname } from 'next/navigation';
import teams from '@/data/teamsS2.json';

export const teamArray = {
  racer_59: {
    name: 'Brandon',
    team: 'Brandon',
    pokemon: teams.racer_59,
    discord: 'racer_59',
    showdown: 'racer59',
    picture: '/images/teams/racer_59.png',
  },
  thanabros: {
    name: 'Ben',
    team: 'Sandbox Boys',
    pokemon: teams.thanabros,
    discord: 'thanabros',
    showdown: 'THANABR0S',
    picture: '/images/teams/thanabros.png',
  },
  seanboyq: {
    name: 'Sean',
    team: '#unban mega muk',
    pokemon: teams.seanboyq,
    discord: 'seanboyq',
    showdown: 'SeanBoyQ',
    picture: '/images/teams/seanboyq.png',
  },
  bigmanbinch: {
    name: 'Mitch',
    team: 'Plano Poliwrath',
    pokemon: teams.bigmanbinch,
    discord: 'bigmanbinch',
    showdown: 'Grumpydogman',
    picture: '/images/teams/bigmanbinch.jpg',
  },
  castleflutes: {
    name: 'Dom',
    team: '11:59 Hawaiian Standard',
    pokemon: teams.castleflutes,
    discord: 'castleflutes',
    showdown: 'johnstaraptor',
    picture: '/images/teams/castleflutes.png',
  },
  beachwatch: {
    name: 'Lars',
    team: 'Zokeys show(down) - 269 offensive',
    pokemon: teams.beachwatch,
    discord: 'beachwatch',
    showdown: 'brickneyspears',
    picture: '/images/teams/beachwatch.jpg',
  },
  c0c0_: {
    name: 'Tristan',
    team: 'Clown Central',
    pokemon: teams.c0c0_,
    discord: 'c0c0_',
    showdown: 'Wishmaker01',
    picture: '/images/teams/c0c0_.jpg',
  },
  dtbaggins: {
    name: 'Jon',
    team: 'Berry Roo',
    pokemon: teams.dtbaggins,
    discord: 'dtbaggins',
    showdown: 'DTBaggins',
    picture: '/images/teams/dtbaggins.jpg',
  },
  revelreloaded: {
    name: 'Mark',
    team: 'NY Yampers',
    pokemon: teams.revelreloaded,
    discord: 'revelreloaded',
    showdown: '2016 waves',
    picture: 'images/teams/revelreloaded.jpg',
  },
  its_jordan: {
    name: 'Jordan',
    team: 'OMGVAMPIRESARESOKAWAII🧛‍♀️',
    pokemon: teams.its_jordan,
    discord: 'its_jordan',
    showdown: 'doomedschultze',
    picture: '/images/teams/its_jordan.png',
  },
  ifurgat: {
    name: 'Jakob',
    team: 'Fuck My Disgusting Chungus Life',
    pokemon: teams.ifurgat,
    discord: 'ifurgat',
    showdown: 'ifurgat',
    picture: '/images/teams/ifurgat.jpg',
  },
  resolamxxy: {
    name: 'Max',
    team: 'Kafka Sunlight 🐱',
    pokemon: teams.resolamxxy,
    discord: 'resolamxxy',
    showdown: 'resolamxxy',
    picture: '/images/teams/resolamxxy.png',
  },
  tokotoro: {
    name: 'Jackson',
    team: 'Catpost Co.',
    pokemon: teams.tokotoro,
    discord: 'tokotoro',
    showdown: 't0kotoro',
    picture: '/images/teams/tokotoro.png',
  },
  aquagtothepast: {
    name: 'Cooper',
    team: 'Cooper',
    pokemon: teams.aquagtothepast,
    discord: 'aquagtothepast',
    showdown: 'Okidogi',
    picture: '/images/teams/aquagtothepast',
  },
};

export const teamsArray = [
  {
    name: 'Brandon',
    team: 'Brandon',
    pokemon: teams.racer_59,
    discord: 'racer_59',
    showdown: 'racer59',
    picture: '/images/teams/racer_59.png',
  },
  {
    name: 'Ben',
    team: 'Sandbox Boys',
    pokemon: teams.thanabros,
    discord: 'thanabros',
    showdown: 'THANABR0S',
    picture: '/images/teams/thanabros.png',
  },
  {
    name: 'Sean',
    team: '#unban mega muk',
    pokemon: teams.seanboyq,
    discord: 'seanboyq',
    showdown: 'SeanBoyQ',
    picture: '/images/teams/seanboyq.png',
  },
  {
    name: 'Mitch',
    team: 'Sandbox Boys',
    pokemon: teams.bigmanbinch,
    discord: 'bigmanbinch',
    showdown: 'Grumpydogman',
    picture: '/images/teams/bigmanbinch.jpg',
  },
  {
    name: 'Dom',
    team: '11:59 Hawaiian Standard',
    pokemon: teams.castleflutes,
    discord: 'castleflutes',
    showdown: 'johnstaraptor',
    picture: '/images/teams/castleflutes.png',
  },
  {
    name: 'Lars',
    team: 'Zokeys show(down) - 269 offensive',
    pokemon: teams.beachwatch,
    discord: 'beachwatch',
    showdown: 'brickneyspears',
    picture: '/images/teams/beachwatch.jpg',
  },
  {
    name: 'Tristan',
    team: 'Clown Central',
    pokemon: teams.c0c0_,
    discord: 'c0c0_',
    showdown: 'Wishmaker01',
    picture: '/images/teams/c0c0_.jpg',
  },
  {
    name: 'Jon',
    team: 'Berry Roo',
    pokemon: teams.dtbaggins,
    discord: 'dtbaggins',
    showdown: 'DTBaggins',
    picture: '/images/teams/dtbaggins.jpg',
  },
  {
    name: 'Mark',
    team: 'NY Yampers',
    pokemon: teams.revelreloaded,
    discord: 'revelreloaded',
    showdown: '2016 waves',
    picture: '/images/teams/revelreloaded.jpg',
  },
  {
    name: 'Jordan',
    team: 'OMGVAMPIRESARESOKAWAII🧛‍♀️',
    pokemon: teams.its_jordan,
    discord: 'its_jordan',
    showdown: 'doomedschultze',
    picture: '/images/teams/its_jordan.png',
  },
  {
    name: 'Jakob',
    team: 'Fuck My Disgusting Chungus Life',
    pokemon: teams.ifurgat,
    discord: 'ifurgat',
    showdown: 'ifurgat',
    picture: '/images/teams/ifurgat.jpg',
  },
  {
    name: 'Max',
    team: 'Kafka Sunlight 🐱',
    pokemon: teams.resolamxxy,
    discord: 'resolamxxy',
    showdown: 'resolamxxy',
    picture: '/images/teams/resolamxxy.png',
  },
  {
    name: 'Jackson',
    team: 'Catpost Co.',
    pokemon: teams.tokotoro,
    discord: 'tokotoro',
    showdown: 't0kotoro',
    picture: '/images/teams/tokotoro.png',
  },
  {
    name: 'Cooper',
    team: 'Cooper',
    pokemon: teams.aquagtothepast,
    discord: 'aquagtothepast',
    showdown: 'Okidogi',
    picture: '/images/teams/aquagtothepast',
  },
];

export function useTeamName(e: string) {
  if (e == 'racer_59') {
    const array = teamArray.racer_59;
    return array.team;
  } else if (e == 'thanabros') {
    const array = teamArray.thanabros;
    return array.team;
  } else if (e == 'seanboyq') {
    const array = teamArray.seanboyq;
    return array.team;
  } else if (e == 'bigmanbinch') {
    const array = teamArray.bigmanbinch;
    return array.team;
  } else if (e == 'castleflutes') {
    const array = teamArray.castleflutes;
    return array.team;
  } else if (e == 'beachwatch') {
    const array = teamArray.beachwatch;
    return array.team;
  } else if (e == 'c0c0_') {
    const array = teamArray.c0c0_;
    return array.team;
  } else if (e == 'dtbaggins') {
    const array = teamArray.dtbaggins;
    return array.team;
  } else if (e == 'revelreloaded') {
    const array = teamArray.revelreloaded;
    return array.team;
  } else if (e == 'its_jordan') {
    const array = teamArray.its_jordan;
    return array.team;
  } else if (e == 'ifurgat') {
    const array = teamArray.ifurgat;
    return array.team;
  } else if (e == 'resolamxxy') {
    const array = teamArray.resolamxxy;
    return array.team;
  } else if (e == 'tokotoro') {
    const array = teamArray.tokotoro;
    return array.team;
  } else if (e == 'aquagtothepast') {
    const array = teamArray.aquagtothepast;
    return array.team;
  } else {
    const array = teamArray.racer_59;
    return array.team;
  }
}

export default function Teams() {
  const e = usePathname().replace('/teams/', '');
  function returnPathTextArray() {
    if (e == 'racer_59') {
      const array = teamArray.racer_59;
      return array.pokemon;
    } else if (e == 'thanabros') {
      const array = teamArray.thanabros;
      return array.pokemon;
    } else if (e == 'seanboyq') {
      const array = teamArray.seanboyq;
      return array.pokemon;
    } else if (e == 'bigmanbinch') {
      const array = teamArray.bigmanbinch;
      return array.pokemon;
    } else if (e == 'castleflutes') {
      const array = teamArray.castleflutes;
      return array.pokemon;
    } else if (e == 'beachwatch') {
      const array = teamArray.beachwatch;
      return array.pokemon;
    } else if (e == 'c0c0_') {
      const array = teamArray.c0c0_;
      return array.pokemon;
    } else if (e == 'dtbaggins') {
      const array = teamArray.dtbaggins;
      return array.pokemon;
    } else if (e == 'revelreloaded') {
      const array = teamArray.revelreloaded;
      return array.pokemon;
    } else if (e == 'its_jordan') {
      const array = teamArray.its_jordan;
      return array.pokemon;
    } else if (e == 'ifurgat') {
      const array = teamArray.ifurgat;
      return array.pokemon;
    } else if (e == 'resolamxxy') {
      const array = teamArray.resolamxxy;
      return array.pokemon;
    } else if (e == 'tokotoro') {
      const array = teamArray.tokotoro;
      return array.pokemon;
    } else if (e == 'aquagtothepast') {
      const array = teamArray.aquagtothepast;
      return array.pokemon;
    } else {
      const array = teamArray.racer_59;
      return array.pokemon;
    }
  }

  return returnPathTextArray;
}
