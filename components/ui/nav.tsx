'use client';

import { usePathname } from 'next/navigation';

import {
  RiHome2Line,
  RiHome2Fill,
  RiArrowRightLine,
  RiArrowDownLine,
  RiTimerFlashLine,
  RiTimerFlashFill,
} from 'react-icons/ri';
import { CgPokemon } from 'react-icons/cg';
import {
  MdCatchingPokemon,
  MdOutlineScoreboard,
  MdScoreboard,
} from 'react-icons/md';
import {
  HiOutlineClipboardList,
  HiClipboardList,
  HiOutlineVideoCamera,
  HiVideoCamera,
} from 'react-icons/hi';
import { BiSpreadsheet, BiSolidSpreadsheet } from 'react-icons/bi';
import Link from 'next/link';
import React, { useEffect, createContext, useContext } from 'react';
import Profile from '@/utils/getProfilePic';

function usePosition() {
  const [position, setPosition] = React.useState(
    typeof window !== 'undefined' ? localStorage.position : 'visible'
  );

  const navPosition = position === 'visible' ? 'visible' : 'hidden';

  useEffect(() => {
    const body = window.document.body;

    if (typeof window !== 'undefined') {
      localStorage.setItem('position', position);
    }
  }, [position]);

  return [navPosition, setPosition];
}

interface ViewProps {
  children: React.ReactNode;
}

export function ViewMode({ children }: ViewProps) {
  const [position, setPosition] = usePosition();
  const PositionContext = createContext(position);
  const mode = useContext(PositionContext);
  const className = 'navigation_container ' + mode;

  function localStore() {
    typeof window !== 'undefined' && localStorage.position !== undefined
      ? localStorage.getItem('position')
      : 'visible';
  }

  function handlePosition() {
    if (position === 'visible') {
      return (
        <button
          // @ts-ignore
          onClick={() => setPosition('hidden')}
          className='nav-position-selector item-5'
          data-current-position={position}
          aria-label={`Hides Navigation`}>
          <div
            className='hover-only navigation_title'
            aria-hidden='true'
            aria-label='Move navigation to the left'>
            Hide Navigation
          </div>
          <RiArrowDownLine className='navigation_icon_button' />
        </button>
      );
    } else if (position === 'hidden') {
      return (
        <button
          className='nav-position-selector item-5'
          data-current-position={position}
          aria-label={`Shows Navigation`}
          // @ts-ignore
          onClick={() => setPosition('visible')}>
          <div
            className='hover-only navigation_title'
            aria-hidden='true'
            aria-label='Move navigation to the bottom'>
            Show Navigation
          </div>
          <RiArrowRightLine className='navigation_icon_button' />
        </button>
      );
    }
  }

  return (
    <PositionContext.Provider
      // @ts-ignore
      value={localStore()}>
      <div className={className}>
        <nav
          className='navigation'
          aria-hidden={position == 'hidden' ? true : false}>
          {children}
          {handlePosition()}
          <Profile />
        </nav>
      </div>
    </PositionContext.Provider>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  const NavLinks = [
    { path: '/', title: 'Home', icon: RiHome2Line, iconActive: RiHome2Fill },
    {
      path: '/teams',
      title: 'Teams',
      icon: BiSpreadsheet,
      iconActive: BiSolidSpreadsheet,
    },
    {
      path: '/scores',
      title: 'Scores',
      icon: MdOutlineScoreboard,
      iconActive: MdScoreboard,
    },
    {
      path: '/standings',
      title: 'Standings',
      icon: HiOutlineClipboardList,
      iconActive: HiClipboardList,
    },
    {
      path: '/pokemon',
      title: 'Pokemon',
      icon: CgPokemon,
      iconActive: MdCatchingPokemon,
    },
  ];

  function targetType(e: string) {
    if (
      e === 'Home' ||
      e === 'Draft' ||
      e === 'Teams' ||
      e === 'Pokemon' ||
      e === 'Scores' ||
      e === 'Standings'
    ) {
      return '';
    } else {
      return '_blank';
    }
  }

  return (
    <ViewMode>
      {NavLinks.map((link, index) => {
        return (
          <Link
            key={index}
            className={`navigation_link item-${index} ${
              pathname == link.path ? 'active' : ''
            }`}
            aria-label={link.title}
            data-link={link.title}
            href={`${link.path}`}
            target={targetType(link.title)}>
            <div className='hover-only navigation_title'>{link.title}</div>
            {pathname == link.path ? (
              <link.iconActive className='navigation_icon' aria-hidden='true' />
            ) : (
              <link.icon className='navigation_icon' aria-hidden='true' />
            )}
          </Link>
        );
      })}
    </ViewMode>
  );
}
