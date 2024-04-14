'use client';

import Link from 'next/link';

// function getProfilePic() {
//   const profilePic =
//     typeof window !== 'undefined' && localStorage.position !== undefined
//       ? localStorage.getItem('profileImg')
//       : '';
//   return profilePic?.toString();
// }

function profileImg() {
  return typeof window !== undefined
    ? window.localStorage.getItem('profileImg')?.replaceAll('"', '')
    : '';
}

function userName() {
  return typeof window !== undefined
    ? window.localStorage.getItem('username')?.replaceAll('"', '')
    : '';
}

export function ProfilePreview({ classname }: { classname: string }) {
  return <img className={classname} src={profileImg()}></img>;
}

export function ProfileName({ classname }: { classname: string }) {
  return <div className={classname}>{userName()}</div>;
}

export default function Profile() {
  return (
    <Link href={`/teams/${userName()}`} className='navigation_link'>
      <img className='navigation_icon profile' src={profileImg()}></img>

      <div className='navigation_title profile-hover'>
        {userName()}
        <div className='divider'>{`|`}</div>
        <Link href={'/settings'}>Settings</Link>
      </div>
    </Link>
  );
}
