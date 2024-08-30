'use client';

import { usePathname } from 'next/navigation';
import teams from '@/data/teams02.json';

export const teamArray = {
  lupamai: {
    name: 'Lupa',
    team: 'Fairview Floatzels',
    pokemon: teams['lupa.mai'],
    discord: 'lupa.mai',
    showdown: 'the jazzy ursaring',
    picture: '/images/teams/lupamai.png',
  },
  jaegerpods: {
    name: 'Nick',
    team: 'My Name is Jeff',
    pokemon: teams.jaegerpods,
    discord: 'jaegerpods',
    showdown: 'Jaegervans',
    picture: '/images/teams/jaegerpods.jpg',
  },
  seanboyq: {
    name: 'Sean',
    team: 'Rayquaza Jordans',
    pokemon: teams.seanboyq,
    discord: 'seanboyq',
    showdown: 'SeanBoyQ',
    picture: '/images/teams/seanboyq.png',
  },
  danknett: {
    name: 'Jake',
    team: 'The Thugshadows',
    pokemon: teams.danknett,
    discord: 'danknett',
    showdown: 'pweenween',
    picture: '/images/teams/danknett.png',
  },
  beachwatch: {
    name: 'Lars',
    team: 'El Paso Texas Glooms',
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
    team: 'Fe Legion',
    pokemon: teams.dtbaggins,
    discord: 'dtbaggins',
    showdown: 'DTBaggins',
    picture: '/images/teams/dtbaggins.png',
  },
  revelreloaded: {
    name: 'Mark',
    team: 'NY Yampers',
    pokemon: teams.revelreloaded,
    discord: 'revelreloaded',
    showdown: '2016 waves',
    picture: '/images/teams/revelreloaded.jpg',
  },
  its_jordan: {
    name: 'Jordan',
    team: 'OMGVAMPSANDPIPLUPARESOKAWAII🦇',
    pokemon: teams.its_jordan,
    discord: 'its_jordan',
    showdown: 'doomedschultze',
    picture: '/images/teams/its_jordan.png',
  },
  ifurgat: {
    name: 'Jakob',
    team: 'i was just squidding',
    pokemon: teams.ifurgat,
    discord: 'ifurgat',
    showdown: 'ifurgat',
    picture: '/images/teams/ifurgat.jpg',
  },
  resolamxxy: {
    name: 'Max',
    team: 'Pristine Art 🤤',
    pokemon: teams.resolamxxy,
    discord: 'resolamxxy',
    showdown: 'resolamxxy',
    picture: '/images/teams/resolamxxy.png',
  },
  tokotoro: {
    name: 'Jackson',
    team: 'Catpost Corral',
    pokemon: teams.tokotoro,
    discord: 'tokotoro',
    showdown: 't0kotoro',
    picture: '/images/teams/tokotoro.jpg',
  },
};

export const teamsArray = [
  {
    ...teamArray.lupamai,
  },
  {
    ...teamArray.jaegerpods,
  },
  {
    ...teamArray.seanboyq,
  },
  {
    ...teamArray.danknett,
  },
  {
    ...teamArray.beachwatch,
  },
  {
    ...teamArray.c0c0_,
  },
  {
    ...teamArray.dtbaggins,
  },
  {
    ...teamArray.revelreloaded,
  },
  {
    ...teamArray.its_jordan,
  },
  {
    ...teamArray.ifurgat,
  },
  {
    ...teamArray.resolamxxy,
  },
  {
    ...teamArray.tokotoro,
  },
];

export function useTeamName(e: string) {
  if (e == 'lupamai') {
    const array = teamArray.lupamai;
    return array.team;
  } else if (e == 'jaegerpods') {
    const array = teamArray.jaegerpods;
    return array.team;
  } else if (e == 'seanboyq') {
    const array = teamArray.seanboyq;
    return array.team;
  } else if (e == 'danknett') {
    const array = teamArray.danknett;
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
  }
}

export default function Teams() {
  const e = usePathname().replace('/teams/', '');
  function returnPathTextArray() {
    if (e == 'lupamai') {
      const array = teamArray.lupamai;
      return array.pokemon;
    } else if (e == 'jaegerpods') {
      const array = teamArray.jaegerpods;
      return array.pokemon;
    } else if (e == 'seanboyq') {
      const array = teamArray.seanboyq;
      return array.pokemon;
    } else if (e == 'danknett') {
      const array = teamArray.danknett;
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
    } else {
      const array = teamArray.tokotoro;
      return array.pokemon;
    }
  }

  return returnPathTextArray;
}
