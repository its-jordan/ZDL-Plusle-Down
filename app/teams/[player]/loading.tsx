'use client';

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
  const placeholderTypes = ['?', '?'];
  return (
    <main className='content-grid'>
      <div className='header-container'>
        <h1 className='page-header flex-grow mt-6'></h1>
        <div className='mt-6'>
          <div className='view-button'>Loading...</div>
        </div>
      </div>
      <div>
        <div className='stat-topbar mt-10'>
          <div className='stat-sort-container'>
            <div className='stat-sort-header'>
              <div className='sort'>Loading...</div>
            </div>
          </div>
        </div>
        <div className='pokemon-grid list-view -mt-2'>
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
      </div>
    </main>
  );
}
