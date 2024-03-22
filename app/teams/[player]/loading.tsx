'use client';

import { useRouter } from 'next/navigation';
import { PiArrowLeftBold } from 'react-icons/pi';

export default function Loading() {
  const placeholderPokemon = [
    'Loading...',
    'Loading...',
    'Loading...',
    'Loading...',
    'Loading...',
    'Loading...',
    'Loading...',
    'Loading...',
    'Loading...',
    'Loading...',
  ];
  const placeholderStats = [
    { stat: '??', name: 'HP' },
    { stat: '??', name: 'ATT' },
    { stat: '??', name: 'DEF' },
    { stat: '??', name: 'SPA' },
    { stat: '??', name: 'SPD' },
    { stat: '??', name: 'SPE' },
  ];
  const router = useRouter();
  const placeholderTypes = ['?', '?'];
  return (
    <main className='content-grid'>
      <div className='flex flex-row justify-between items-center'>
        <button
          type='button'
          className='back-selector'
          onClick={() => router.back()}>
          <div className='back-button'>
            <PiArrowLeftBold />
            <div>Teams</div>
          </div>
        </button>
        <h1 className='page-header'>Loading...</h1>
      </div>
      <div className='pokemon-grid grid-view'>
        {placeholderPokemon.map((pokemon, index) => {
          return (
            <div className='pokemon-card loading' key={index}>
              <div className='pokemon-number'>#???</div>
              <div className='pokemon-name'>{pokemon}</div>
              <div className='pokemon-types'>
                {placeholderTypes.map((type, index) => {
                  return (
                    <div className='type-icon-container loading' key={index}>
                      <div data-type={type} className='pokemon-type-icon'>
                        {type}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className='pokemon-stat-container'>
                {placeholderStats.map((stat, index) => {
                  return (
                    <div className='pokemon-stat' key={index}>
                      <div className='pokemon-stat-value'>{stat.stat}</div>
                      <div className='pokemon-stat-name'>{stat.name}</div>
                    </div>
                  );
                })}
              </div>
              <div className='pokemon-img loading'>?</div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
