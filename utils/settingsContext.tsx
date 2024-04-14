// 'use client';

// import { createContext, useContext, useEffect, useState } from 'react';

// function useSettings() {
//   const [setting, setSetting] = useState<string>(
//     typeof window !== 'undefined' && window.localStorage
//       ? localStorage.stat
//       : 'HP'
//   );

//   useEffect(() => {
//     if (typeof window !== 'undefined' && window.localStorage) {
//       localStorage.setItem('stat', stat);
//     }
//   }, [stat]);

//   return [setting, setSetting];
// }

// export function setSettingValue(key: string, value: string) {
//   typeof window !== 'undefined' && window.localStorage
//     ? window.localStorage.setItem(key, JSON.stringify(value))
//     : '';
//   console.log(localStorage.getItem(key));
// }

// function settingsStore(keys: Array<string>) {
//   const keyValues = keys.forEach((key) => {
//     const keyValue = localStorage.getItem(key);
//     console.log(keyValue);
//     return keyValue;
//   });
//   return keyValues;
// }

// export default function Settings(value: string, children: React.ReactNode) {
//   const [setting, setSetting] = useSettings();
//   const SettingsContext = createContext(setting);
//   const settingsCtx = useContext(SettingsContext);
//   return (
//     <SettingsContext.Provider
//       // @ts-ignore
//       value={settingsStore(value)}>
//       {children}
//     </SettingsContext.Provider>
//   );
// }

export const Default = () => {
  return <></>;
};
