'use client';

import { usePathname } from 'next/navigation';

import {
  RiHome2Line,
  RiHome2Fill,
  RiArrowLeftLine,
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
import { FaRegUser, FaUser } from 'react-icons/fa';
import { BiSpreadsheet, BiSolidSpreadsheet } from 'react-icons/bi';
import Link from 'next/link';
import React, { useEffect } from 'react';

function usePosition() {
  const [position, setPosition] = React.useState(
    typeof window !== 'undefined' ? localStorage.position : 'bottom'
  );

  const navPosition = position === 'bottom' ? 'bottom' : 'left';

  useEffect(() => {
    const body = window.document.body;

    if (typeof window !== 'undefined') {
      localStorage.setItem('position', position);
    }
  }, [position]);

  return [navPosition, setPosition];
}

export default function Navbar() {
  const pathname = usePathname();
  const [position, setPosition] = usePosition();

  const NavLinks = [
    { path: '/', title: 'Home', icon: RiHome2Line, iconActive: RiHome2Fill },
    {
      path: '/draft',
      title: 'Draft',
      icon: RiTimerFlashLine,
      iconActive: RiTimerFlashFill,
    },
    {
      path: '/pokemon',
      title: 'Pokemon',
      icon: CgPokemon,
      iconActive: MdCatchingPokemon,
    },
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
      path: '/replays',
      title: 'Replays',
      icon: HiOutlineVideoCamera,
      iconActive: HiVideoCamera,
    },
    {
      path: '/user',
      title: 'User',
      icon: FaRegUser,
      iconActive: FaUser,
    },
  ];

  function handlePosition() {
    if (position === 'bottom') {
      return (
        <button
          // @ts-ignore
          onClick={() => setPosition('left')}
          className='nav-position-selector item-8'
          data-current-position={position}
          aria-label={`Move ${position} navigation to the left of the screen`}>
          <div
            className='hover-only navigation_title'
            aria-hidden='true'
            aria-label='Move navigation to the left'>
            Move Nav to Left
          </div>
          <RiArrowLeftLine className='navigation_icon_button' />
        </button>
      );
    } else if (position === 'left') {
      return (
        <button
          className='nav-position-selector item-8'
          data-current-position={position}
          aria-label={`Move ${position} navigation to the bottom of the screen`}
          // @ts-ignore
          onClick={() => setPosition('bottom')}>
          <div
            className='hover-only navigation_title'
            aria-hidden='true'
            aria-label='Move navigation to the bottom'>
            Move Nav to Bottom
          </div>
          <RiArrowDownLine className='navigation_icon_button' />
        </button>
      );
    }
  }

  function targetType(e: string) {
    if (e === 'Home' || e === 'Draft' || e === 'Teams' || e === 'Pokemon') {
      return '';
    } else {
      return '_blank';
    }
  }

  return (
    <>
      {position === 'bottom' ? (
        <div className='navigation_container bottom'>
          <nav className='navigation'>
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
                  <div className='hover-only navigation_title'>
                    {link.title}
                  </div>
                  {pathname == link.path ? (
                    <link.iconActive
                      className='navigation_icon'
                      aria-hidden='true'
                    />
                  ) : (
                    <link.icon className='navigation_icon' aria-hidden='true' />
                  )}
                </Link>
              );
            })}
            {handlePosition()}
          </nav>
        </div>
      ) : (
        <div className='navigation_container left'>
          <nav className='navigation'>
            {NavLinks.map((link, index) => {
              return (
                <Link
                  key={index}
                  className={`navigation_link item-${index} ${
                    pathname == link.path ? 'active' : ''
                  }`}
                  data-link={link.title}
                  href={`${link.path}`}
                  target={targetType(link.title)}>
                  <div
                    className='hover-only navigation_title'
                    aria-hidden='true'
                    title={link.title}>
                    {link.title}
                  </div>
                  {pathname == link.path ? (
                    <link.iconActive className='navigation_icon' />
                  ) : (
                    <link.icon className='navigation_icon' />
                  )}
                </Link>
              );
            })}
            {handlePosition()}
          </nav>
        </div>
      )}
    </>
  );
}
