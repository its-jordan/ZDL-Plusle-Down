// 'use client';

// import CommonPage from '@/components/commonPage';
// import { ProfileName, ProfilePreview } from '@/utils/getProfilePic';
// import { useState } from 'react';

// function setSettingTest(key: string, value: string) {
//   typeof window !== 'undefined' && window.localStorage
//     ? window.localStorage.setItem(key, JSON.stringify(value))
//     : '';
// }

// export default function Settings() {
//   const [value, setValue] = useState('');
//   const [user, setUser] = useState('');
//   return (
//     <CommonPage header='Settings'>
//       <div className='settings-container'>
//         <div className='settings-button'>
//           <div className='setting-header'>Set a profile image</div>
//           <ProfilePreview classname='settings-profile' />
//           <input
//             className='settings-input'
//             type='text'
//             value={value}
//             onChange={(e) => {
//               setValue(e.currentTarget.value);
//             }}
//             onKeyUp={() => {
//               setSettingTest('profileImg', value);
//             }}
//           />
//         </div>
//         <div className='settings-button'>
//           <div className='setting-header'>Set a username</div>
//           <ProfileName classname='settings-profile username' />
//           <input
//             className='settings-input'
//             pattern='danknett|seanboyq|resolamxxy|beachwatch|revelreloaded|dtbaggins|c0c0_|ifurgat|tokotoro|castleflutes|thanabros|its_jordan'
//             type='text'
//             value={user}
//             onChange={(e) => {
//               setUser(e.currentTarget.value);
//             }}
//             onKeyUp={() => {
//               setSettingTest('username', user);
//             }}
//           />
//           <div className='settings-note'>
//             Valid Inputs: danknett, seanboyq, resolamxxy, beachwatch,
//             revelreloaded, dtbaggins, c0c0_, ifurgat, tokotoro, castleflutes,
//             thanabros, its_jordan
//           </div>
//         </div>
//       </div>
//     </CommonPage>
//   );
// }

export default function Settings() {
  return <></>;
}
