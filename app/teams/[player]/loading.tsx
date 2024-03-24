'use client';

import { ReturnTypeMatchup } from '@/components/getPokemon';
import { types } from '@/data/pokemon-types';
import { GoKebabHorizontal } from 'react-icons/go';

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
  ];
  const placeholderStats = [
    { stat: '??', name: 'HP' },
    { stat: '??', name: 'ATT' },
    { stat: '??', name: 'DEF' },
    { stat: '??', name: 'SPA' },
    { stat: '??', name: 'SPD' },
    { stat: '??', name: 'SPE' },
  ];
  const placeholderTypes = ['?', '?'];
  return (
    <main className='content-grid mb-24'>
      <div className='header-container'>
        <h1 className='page-header flex-grow mt-6'></h1>
        <div className='mt-6'>
          <div className='view-button'>Loading...</div>
        </div>
      </div>
      <div>
        <div className='stat-topbar mt-10'>
          <div className='stat-sort-container'>
            <div className='stat-sort-header h-[calc(3rem+10px)]'>
              <div className='sort'>Loading...</div>
            </div>
          </div>
        </div>
        <div className='pokemon-grid list-view list-loading'>
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
                <div className='pokemon-img loading h-12 w-12 rounded-full flex justify-center items-center'>
                  ?
                </div>
                <div className='show-more'>
                  <GoKebabHorizontal />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='type-chart-header'>
        <h2 className='page-header w-full justify-start flex'>Loading...</h2>
      </div>
      <div className='type-relations-list-view mt-2'>
        <div className='type-matchup-header'>
          <div className='type-matchup-spacer'>Pokemon</div>
          {types.map((type, index) => {
            return (
              <div className='type-icon-container type-matchup' key={index}>
                <img
                  src={`/icons/${type}.svg`}
                  height={30}
                  width={30}
                  data-type={type}
                  className='pokemon-type-icon list-view'
                />
                <div className='hover-only type_title' data-type={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </div>
              </div>
            );
          })}
        </div>
        {placeholderPokemon.map((pokemon, index) => {
          return (
            <div
              key={index}
              className='type-matchup-data-container loading-type-data'>
              <div className='type-matchup-data'>
                <div className='type-matchup-pokemon'>
                  <div className='pokemon-img loading h-12 w-12 rounded-full flex justify-center items-center'>
                    ?
                  </div>
                  <div className=''>{pokemon}</div>
                </div>
                {types.map((type, index) => {
                  return (
                    <div key={index} className={`type-heading ${type}`}>
                      <div
                        className={`multiplier normal`}
                        data-multiplier={'1x'}>
                        {''}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
