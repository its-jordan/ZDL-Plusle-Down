export default function returnMons(e: string) {
  if (e == 'bulbasaur') {
    const data = {
      name: 'bulbasaur',
      abilities: ['overgrow', 'chlorophyll'],
      id: 1,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
      types: ['grass', 'poison'],
      weaknesses: [
        'electric: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ice: 2x',
        'psychic: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 49, name: 'ATT' },
        { stat: 49, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'ivysaur') {
    const data = {
      name: 'ivysaur',
      abilities: ['overgrow', 'chlorophyll'],
      id: 2,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
      types: ['grass', 'poison'],
      weaknesses: [
        'electric: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ice: 2x',
        'psychic: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 62, name: 'ATT' },
        { stat: 63, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'venusaur') {
    const data = {
      name: 'venusaur',
      abilities: ['overgrow', 'chlorophyll'],
      id: 3,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
      types: ['grass', 'poison'],
      weaknesses: [
        'electric: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ice: 2x',
        'psychic: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 82, name: 'ATT' },
        { stat: 83, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'venusaur-mega') {
    const data = {
      name: 'venusaur-mega',
      abilities: ['thick-fat', ,],
      id: 10033,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10033.png',
      types: ['grass', 'poison'],
      weaknesses: [
        'electric: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ice: 2x',
        'psychic: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 123, name: 'DEF' },
        { stat: 122, name: 'SPA' },
        { stat: 120, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'charmander') {
    const data = {
      name: 'charmander',
      abilities: ['blaze', 'solar-power'],
      id: 4,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 39, name: 'HP' },
        { stat: 52, name: 'ATT' },
        { stat: 43, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'charmeleon') {
    const data = {
      name: 'charmeleon',
      abilities: ['blaze', 'solar-power'],
      id: 5,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 58, name: 'HP' },
        { stat: 64, name: 'ATT' },
        { stat: 58, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'charizard') {
    const data = {
      name: 'charizard',
      abilities: ['blaze', 'solar-power'],
      id: 6,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
      types: ['fire', 'flying'],
      weaknesses: [
        'bug: 0.25x',
        'electric: 2x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'grass: 0.25x',
        'ground: 0x',
        'rock: 4x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 78, name: 'HP' },
        { stat: 84, name: 'ATT' },
        { stat: 78, name: 'DEF' },
        { stat: 109, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'charizard-mega-x') {
    const data = {
      name: 'charizard-mega-x',
      abilities: ['tough-claws', ,],
      id: 10034,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10034.png',
      types: ['fire', 'dragon'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 2x',
        'electric: 0.5x',
        'fire: 0.25x',
        'grass: 0.25x',
        'ground: 2x',
        'rock: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 78, name: 'HP' },
        { stat: 130, name: 'ATT' },
        { stat: 111, name: 'DEF' },
        { stat: 130, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'charizard-mega-y') {
    const data = {
      name: 'charizard-mega-y',
      abilities: ['drought', ,],
      id: 10035,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10035.png',
      types: ['fire', 'flying'],
      weaknesses: [
        'bug: 0.25x',
        'electric: 2x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'grass: 0.25x',
        'ground: 0x',
        'rock: 4x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 78, name: 'HP' },
        { stat: 104, name: 'ATT' },
        { stat: 78, name: 'DEF' },
        { stat: 159, name: 'SPA' },
        { stat: 115, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'squirtle') {
    const data = {
      name: 'squirtle',
      abilities: ['torrent', 'rain-dish'],
      id: 7,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 44, name: 'HP' },
        { stat: 48, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 64, name: 'SPD' },
        { stat: 43, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'wartortle') {
    const data = {
      name: 'wartortle',
      abilities: ['torrent', 'rain-dish'],
      id: 8,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 59, name: 'HP' },
        { stat: 63, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 58, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'blastoise') {
    const data = {
      name: 'blastoise',
      abilities: ['torrent', 'rain-dish'],
      id: 9,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 79, name: 'HP' },
        { stat: 83, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 78, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'blastoise-mega') {
    const data = {
      name: 'blastoise-mega',
      abilities: ['mega-launcher', ,],
      id: 10036,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10036.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 79, name: 'HP' },
        { stat: 103, name: 'ATT' },
        { stat: 120, name: 'DEF' },
        { stat: 135, name: 'SPA' },
        { stat: 115, name: 'SPD' },
        { stat: 78, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'caterpie') {
    const data = {
      name: 'caterpie',
      abilities: ['shield-dust', 'run-away'],
      id: 10,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png',
      types: ['bug'],
      weaknesses: [
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 30, name: 'ATT' },
        { stat: 35, name: 'DEF' },
        { stat: 20, name: 'SPA' },
        { stat: 20, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'metapod') {
    const data = {
      name: 'metapod',
      abilities: ['shed-skin', ,],
      id: 11,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png',
      types: ['bug'],
      weaknesses: [
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 20, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 25, name: 'SPA' },
        { stat: 25, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'butterfree') {
    const data = {
      name: 'butterfree',
      abilities: ['compound-eyes', 'tinted-lens'],
      id: 12,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png',
      types: ['bug', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 2x',
        'rock: 4x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'weedle') {
    const data = {
      name: 'weedle',
      abilities: ['shield-dust', 'run-away'],
      id: 13,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png',
      types: ['bug', 'poison'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'poison: 0.5x',
        'psychic: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 35, name: 'ATT' },
        { stat: 30, name: 'DEF' },
        { stat: 20, name: 'SPA' },
        { stat: 20, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'kakuna') {
    const data = {
      name: 'kakuna',
      abilities: ['shed-skin', ,],
      id: 14,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png',
      types: ['bug', 'poison'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'poison: 0.5x',
        'psychic: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 25, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 25, name: 'SPA' },
        { stat: 25, name: 'SPD' },
        { stat: 35, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'beedrill') {
    const data = {
      name: 'beedrill',
      abilities: ['swarm', 'sniper'],
      id: 15,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png',
      types: ['bug', 'poison'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'poison: 0.5x',
        'psychic: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 75, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'beedrill-mega') {
    const data = {
      name: 'beedrill-mega',
      abilities: ['adaptability', ,],
      id: 10090,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10090.png',
      types: ['bug', 'poison'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'poison: 0.5x',
        'psychic: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 150, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 15, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 145, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'pidgey') {
    const data = {
      name: 'pidgey',
      abilities: ['keen-eye', 'tangled-feet', 'big-pecks'],
      id: 16,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png',
      types: ['normal', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 35, name: 'SPD' },
        { stat: 56, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'pidgeotto') {
    const data = {
      name: 'pidgeotto',
      abilities: ['keen-eye', 'tangled-feet', 'big-pecks'],
      id: 17,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png',
      types: ['normal', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 63, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 71, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'pidgeot') {
    const data = {
      name: 'pidgeot',
      abilities: ['keen-eye', 'tangled-feet', 'big-pecks'],
      id: 18,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png',
      types: ['normal', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 83, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 101, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'pidgeot-mega') {
    const data = {
      name: 'pidgeot-mega',
      abilities: ['no-guard', ,],
      id: 10073,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10073.png',
      types: ['normal', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 83, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 135, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 121, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'rattata') {
    const data = {
      name: 'rattata',
      abilities: ['run-away', 'guts', 'hustle'],
      id: 19,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 30, name: 'HP' },
        { stat: 56, name: 'ATT' },
        { stat: 35, name: 'DEF' },
        { stat: 25, name: 'SPA' },
        { stat: 35, name: 'SPD' },
        { stat: 72, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'raticate') {
    const data = {
      name: 'raticate',
      abilities: ['run-away', 'guts', 'hustle'],
      id: 20,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 81, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 97, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'spearow') {
    const data = {
      name: 'spearow',
      abilities: ['keen-eye', 'sniper'],
      id: 21,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png',
      types: ['normal', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 30, name: 'DEF' },
        { stat: 31, name: 'SPA' },
        { stat: 31, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'fearow') {
    const data = {
      name: 'fearow',
      abilities: ['keen-eye', 'sniper'],
      id: 22,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png',
      types: ['normal', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 61, name: 'SPA' },
        { stat: 61, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'ekans') {
    const data = {
      name: 'ekans',
      abilities: ['intimidate', 'shed-skin', 'unnerve'],
      id: 23,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png',
      types: ['poison'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'poison: 0.5x',
        'psychic: 2x',
      ],
      stats: [
        { stat: 35, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 44, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 54, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'arbok') {
    const data = {
      name: 'arbok',
      abilities: ['intimidate', 'shed-skin', 'unnerve'],
      id: 24,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png',
      types: ['poison'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'poison: 0.5x',
        'psychic: 2x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 69, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 79, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'pikachu') {
    const data = {
      name: 'pikachu',
      abilities: ['static', 'lightning-rod'],
      id: 25,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 35, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'raichu') {
    const data = {
      name: 'raichu',
      abilities: ['static', 'lightning-rod'],
      id: 26,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 110, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sandshrew') {
    const data = {
      name: 'sandshrew',
      abilities: ['sand-veil', 'sand-rush'],
      id: 27,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png',
      types: ['ground'],
      weaknesses: [
        'electric: 0x',
        'grass: 2x',
        'ice: 2x',
        'poison: 0.5x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 20, name: 'SPA' },
        { stat: 30, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sandslash') {
    const data = {
      name: 'sandslash',
      abilities: ['sand-veil', 'sand-rush'],
      id: 28,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png',
      types: ['ground'],
      weaknesses: [
        'electric: 0x',
        'grass: 2x',
        'ice: 2x',
        'poison: 0.5x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 110, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'nidoran-f') {
    const data = {
      name: 'nidoran-f',
      abilities: ['poison-point', 'rivalry', 'hustle'],
      id: 29,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png',
      types: ['poison'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'poison: 0.5x',
        'psychic: 2x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 47, name: 'ATT' },
        { stat: 52, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 41, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'nidorina') {
    const data = {
      name: 'nidorina',
      abilities: ['poison-point', 'rivalry', 'hustle'],
      id: 30,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png',
      types: ['poison'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'poison: 0.5x',
        'psychic: 2x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 62, name: 'ATT' },
        { stat: 67, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 56, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'nidoqueen') {
    const data = {
      name: 'nidoqueen',
      abilities: ['poison-point', 'rivalry', 'sheer-force'],
      id: 31,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png',
      types: ['poison', 'ground'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 0x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'ground: 2x',
        'ice: 2x',
        'poison: 0.25x',
        'psychic: 2x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 92, name: 'ATT' },
        { stat: 87, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 76, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'nidoran-m') {
    const data = {
      name: 'nidoran-m',
      abilities: ['poison-point', 'rivalry', 'hustle'],
      id: 32,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png',
      types: ['poison'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'poison: 0.5x',
        'psychic: 2x',
      ],
      stats: [
        { stat: 46, name: 'HP' },
        { stat: 57, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'nidorino') {
    const data = {
      name: 'nidorino',
      abilities: ['poison-point', 'rivalry', 'hustle'],
      id: 33,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png',
      types: ['poison'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'poison: 0.5x',
        'psychic: 2x',
      ],
      stats: [
        { stat: 61, name: 'HP' },
        { stat: 72, name: 'ATT' },
        { stat: 57, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'nidoking') {
    const data = {
      name: 'nidoking',
      abilities: ['poison-point', 'rivalry', 'sheer-force'],
      id: 34,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png',
      types: ['poison', 'ground'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 0x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'ground: 2x',
        'ice: 2x',
        'poison: 0.25x',
        'psychic: 2x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 81, name: 'HP' },
        { stat: 102, name: 'ATT' },
        { stat: 77, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'clefairy') {
    const data = {
      name: 'clefairy',
      abilities: ['cute-charm', 'magic-guard', 'friend-guard'],
      id: 35,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png',
      types: ['fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'fighting: 0.5x',
        'poison: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 48, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 35, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'clefable') {
    const data = {
      name: 'clefable',
      abilities: ['cute-charm', 'magic-guard', 'unaware'],
      id: 36,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png',
      types: ['fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'fighting: 0.5x',
        'poison: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 95, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 73, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'vulpix') {
    const data = {
      name: 'vulpix',
      abilities: ['flash-fire', 'drought'],
      id: 37,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 38, name: 'HP' },
        { stat: 41, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'ninetales') {
    const data = {
      name: 'ninetales',
      abilities: ['flash-fire', 'drought'],
      id: 38,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 73, name: 'HP' },
        { stat: 76, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 81, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'jigglypuff') {
    const data = {
      name: 'jigglypuff',
      abilities: ['cute-charm', 'competitive', 'friend-guard'],
      id: 39,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png',
      types: ['normal', 'fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'ghost: 0x',
        'poison: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 115, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 20, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 25, name: 'SPD' },
        { stat: 20, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'wigglytuff') {
    const data = {
      name: 'wigglytuff',
      abilities: ['cute-charm', 'competitive', 'frisk'],
      id: 40,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png',
      types: ['normal', 'fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'ghost: 0x',
        'poison: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 140, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'zubat') {
    const data = {
      name: 'zubat',
      abilities: ['inner-focus', 'infiltrator'],
      id: 41,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png',
      types: ['poison', 'flying'],
      weaknesses: [
        'bug: 0.25x',
        'electric: 2x',
        'fairy: 0.5x',
        'fighting: 0.25x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 2x',
        'poison: 0.5x',
        'psychic: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 35, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'golbat') {
    const data = {
      name: 'golbat',
      abilities: ['inner-focus', 'infiltrator'],
      id: 42,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png',
      types: ['poison', 'flying'],
      weaknesses: [
        'bug: 0.25x',
        'electric: 2x',
        'fairy: 0.5x',
        'fighting: 0.25x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 2x',
        'poison: 0.5x',
        'psychic: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'oddish') {
    const data = {
      name: 'oddish',
      abilities: ['chlorophyll', 'run-away'],
      id: 43,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png',
      types: ['grass', 'poison'],
      weaknesses: [
        'electric: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ice: 2x',
        'psychic: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gloom') {
    const data = {
      name: 'gloom',
      abilities: ['chlorophyll', 'stench'],
      id: 44,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png',
      types: ['grass', 'poison'],
      weaknesses: [
        'electric: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ice: 2x',
        'psychic: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'vileplume') {
    const data = {
      name: 'vileplume',
      abilities: ['chlorophyll', 'effect-spore'],
      id: 45,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png',
      types: ['grass', 'poison'],
      weaknesses: [
        'electric: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ice: 2x',
        'psychic: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'paras') {
    const data = {
      name: 'paras',
      abilities: ['effect-spore', 'dry-skin', 'damp'],
      id: 46,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png',
      types: ['bug', 'grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fighting: 0.5x',
        'fire: 4x',
        'flying: 4x',
        'grass: 0.25x',
        'ground: 0.25x',
        'ice: 2x',
        'poison: 2x',
        'rock: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 35, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 25, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'parasect') {
    const data = {
      name: 'parasect',
      abilities: ['effect-spore', 'dry-skin', 'damp'],
      id: 47,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png',
      types: ['bug', 'grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fighting: 0.5x',
        'fire: 4x',
        'flying: 4x',
        'grass: 0.25x',
        'ground: 0.25x',
        'ice: 2x',
        'poison: 2x',
        'rock: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'venonat') {
    const data = {
      name: 'venonat',
      abilities: ['compound-eyes', 'tinted-lens', 'run-away'],
      id: 48,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png',
      types: ['bug', 'poison'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'poison: 0.5x',
        'psychic: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'venomoth') {
    const data = {
      name: 'venomoth',
      abilities: ['shield-dust', 'tinted-lens', 'wonder-skin'],
      id: 49,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png',
      types: ['bug', 'poison'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'poison: 0.5x',
        'psychic: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'diglett') {
    const data = {
      name: 'diglett',
      abilities: ['sand-veil', 'arena-trap', 'sand-force'],
      id: 50,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png',
      types: ['ground'],
      weaknesses: [
        'electric: 0x',
        'grass: 2x',
        'ice: 2x',
        'poison: 0.5x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 10, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 25, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'dugtrio') {
    const data = {
      name: 'dugtrio',
      abilities: ['sand-veil', 'arena-trap', 'sand-force'],
      id: 51,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png',
      types: ['ground'],
      weaknesses: [
        'electric: 0x',
        'grass: 2x',
        'ice: 2x',
        'poison: 0.5x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 35, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 120, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'meowth') {
    const data = {
      name: 'meowth',
      abilities: ['pickup', 'technician', 'unnerve'],
      id: 52,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 35, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'persian') {
    const data = {
      name: 'persian',
      abilities: ['limber', 'technician', 'unnerve'],
      id: 53,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 115, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'psyduck') {
    const data = {
      name: 'psyduck',
      abilities: ['damp', 'cloud-nine', 'swift-swim'],
      id: 54,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 52, name: 'ATT' },
        { stat: 48, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'golduck') {
    const data = {
      name: 'golduck',
      abilities: ['damp', 'cloud-nine', 'swift-swim'],
      id: 55,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 82, name: 'ATT' },
        { stat: 78, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mankey') {
    const data = {
      name: 'mankey',
      abilities: ['vital-spirit', 'anger-point', 'defiant'],
      id: 56,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png',
      types: ['fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'flying: 2x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 35, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'primeape') {
    const data = {
      name: 'primeape',
      abilities: ['vital-spirit', 'anger-point', 'defiant'],
      id: 57,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png',
      types: ['fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'flying: 2x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 105, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'growlithe') {
    const data = {
      name: 'growlithe',
      abilities: ['intimidate', 'flash-fire', 'justified'],
      id: 58,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'arcanine') {
    const data = {
      name: 'arcanine',
      abilities: ['intimidate', 'flash-fire', 'justified'],
      id: 59,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 110, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'poliwag') {
    const data = {
      name: 'poliwag',
      abilities: ['water-absorb', 'damp', 'swift-swim'],
      id: 60,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'poliwhirl') {
    const data = {
      name: 'poliwhirl',
      abilities: ['water-absorb', 'damp', 'swift-swim'],
      id: 61,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'poliwrath') {
    const data = {
      name: 'poliwrath',
      abilities: ['water-absorb', 'damp', 'swift-swim'],
      id: 62,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png',
      types: ['water', 'fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'electric: 2x',
        'fairy: 2x',
        'fire: 0.5x',
        'flying: 2x',
        'grass: 2x',
        'ice: 0.5x',
        'psychic: 2x',
        'rock: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'abra') {
    const data = {
      name: 'abra',
      abilities: ['synchronize', 'inner-focus', 'magic-guard'],
      id: 63,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 25, name: 'HP' },
        { stat: 20, name: 'ATT' },
        { stat: 15, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'kadabra') {
    const data = {
      name: 'kadabra',
      abilities: ['synchronize', 'inner-focus', 'magic-guard'],
      id: 64,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 35, name: 'ATT' },
        { stat: 30, name: 'DEF' },
        { stat: 120, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 105, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'alakazam') {
    const data = {
      name: 'alakazam',
      abilities: ['synchronize', 'inner-focus', 'magic-guard'],
      id: 65,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 135, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 120, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'alakazam-mega') {
    const data = {
      name: 'alakazam-mega',
      abilities: ['trace', ,],
      id: 10037,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10037.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 175, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 150, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'machop') {
    const data = {
      name: 'machop',
      abilities: ['guts', 'no-guard', 'steadfast'],
      id: 66,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png',
      types: ['fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'flying: 2x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 35, name: 'SPD' },
        { stat: 35, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'machoke') {
    const data = {
      name: 'machoke',
      abilities: ['guts', 'no-guard', 'steadfast'],
      id: 67,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png',
      types: ['fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'flying: 2x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'machamp') {
    const data = {
      name: 'machamp',
      abilities: ['guts', 'no-guard', 'steadfast'],
      id: 68,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png',
      types: ['fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'flying: 2x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 130, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'bellsprout') {
    const data = {
      name: 'bellsprout',
      abilities: ['chlorophyll', 'gluttony'],
      id: 69,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png',
      types: ['grass', 'poison'],
      weaknesses: [
        'electric: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ice: 2x',
        'psychic: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 35, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 30, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'weepinbell') {
    const data = {
      name: 'weepinbell',
      abilities: ['chlorophyll', 'gluttony'],
      id: 70,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png',
      types: ['grass', 'poison'],
      weaknesses: [
        'electric: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ice: 2x',
        'psychic: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'victreebel') {
    const data = {
      name: 'victreebel',
      abilities: ['chlorophyll', 'gluttony'],
      id: 71,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png',
      types: ['grass', 'poison'],
      weaknesses: [
        'electric: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ice: 2x',
        'psychic: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 105, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tentacool') {
    const data = {
      name: 'tentacool',
      abilities: ['clear-body', 'liquid-ooze', 'rain-dish'],
      id: 72,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png',
      types: ['water', 'poison'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'poison: 0.5x',
        'psychic: 2x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 40, name: 'ATT' },
        { stat: 35, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tentacruel') {
    const data = {
      name: 'tentacruel',
      abilities: ['clear-body', 'liquid-ooze', 'rain-dish'],
      id: 73,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png',
      types: ['water', 'poison'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'poison: 0.5x',
        'psychic: 2x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 120, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'geodude') {
    const data = {
      name: 'geodude',
      abilities: ['rock-head', 'sturdy', 'sand-veil'],
      id: 74,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png',
      types: ['rock', 'ground'],
      weaknesses: [
        'electric: 0x',
        'fighting: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 4x',
        'ground: 2x',
        'ice: 2x',
        'normal: 0.5x',
        'poison: 0.25x',
        'rock: 0.5x',
        'steel: 2x',
        'water: 4x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 30, name: 'SPD' },
        { stat: 20, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'graveler') {
    const data = {
      name: 'graveler',
      abilities: ['rock-head', 'sturdy', 'sand-veil'],
      id: 75,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png',
      types: ['rock', 'ground'],
      weaknesses: [
        'electric: 0x',
        'fighting: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 4x',
        'ground: 2x',
        'ice: 2x',
        'normal: 0.5x',
        'poison: 0.25x',
        'rock: 0.5x',
        'steel: 2x',
        'water: 4x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 115, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 35, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'golem') {
    const data = {
      name: 'golem',
      abilities: ['rock-head', 'sturdy', 'sand-veil'],
      id: 76,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png',
      types: ['rock', 'ground'],
      weaknesses: [
        'electric: 0x',
        'fighting: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 4x',
        'ground: 2x',
        'ice: 2x',
        'normal: 0.5x',
        'poison: 0.25x',
        'rock: 0.5x',
        'steel: 2x',
        'water: 4x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 130, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'ponyta') {
    const data = {
      name: 'ponyta',
      abilities: ['run-away', 'flash-fire', 'flame-body'],
      id: 77,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'rapidash') {
    const data = {
      name: 'rapidash',
      abilities: ['run-away', 'flash-fire', 'flame-body'],
      id: 78,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 105, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'slowpoke') {
    const data = {
      name: 'slowpoke',
      abilities: ['oblivious', 'own-tempo', 'regenerator'],
      id: 79,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png',
      types: ['water', 'psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'electric: 2x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'ghost: 2x',
        'grass: 2x',
        'ice: 0.5x',
        'psychic: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 15, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'slowbro') {
    const data = {
      name: 'slowbro',
      abilities: ['oblivious', 'own-tempo', 'regenerator'],
      id: 80,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png',
      types: ['water', 'psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'electric: 2x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'ghost: 2x',
        'grass: 2x',
        'ice: 0.5x',
        'psychic: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 95, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 110, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'slowbro-mega') {
    const data = {
      name: 'slowbro-mega',
      abilities: ['shell-armor', ,],
      id: 10071,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10071.png',
      types: ['water', 'psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'electric: 2x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'ghost: 2x',
        'grass: 2x',
        'ice: 0.5x',
        'psychic: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 95, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 180, name: 'DEF' },
        { stat: 130, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'magnemite') {
    const data = {
      name: 'magnemite',
      abilities: ['magnet-pull', 'sturdy', 'analytic'],
      id: 81,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png',
      types: ['electric', 'steel'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'electric: 0.5x',
        'fairy: 0.5x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 0.25x',
        'grass: 0.5x',
        'ground: 4x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'steel: 0.25x',
      ],
      stats: [
        { stat: 25, name: 'HP' },
        { stat: 35, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'magneton') {
    const data = {
      name: 'magneton',
      abilities: ['magnet-pull', 'sturdy', 'analytic'],
      id: 82,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png',
      types: ['electric', 'steel'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'electric: 0.5x',
        'fairy: 0.5x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 0.25x',
        'grass: 0.5x',
        'ground: 4x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'steel: 0.25x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 120, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'farfetchd') {
    const data = {
      name: 'farfetchd',
      abilities: ['keen-eye', 'inner-focus', 'defiant'],
      id: 83,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png',
      types: ['normal', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 52, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 58, name: 'SPA' },
        { stat: 62, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'doduo') {
    const data = {
      name: 'doduo',
      abilities: ['run-away', 'early-bird', 'tangled-feet'],
      id: 84,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png',
      types: ['normal', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 35, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 35, name: 'SPD' },
        { stat: 75, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'dodrio') {
    const data = {
      name: 'dodrio',
      abilities: ['run-away', 'early-bird', 'tangled-feet'],
      id: 85,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png',
      types: ['normal', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 110, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 110, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'seel') {
    const data = {
      name: 'seel',
      abilities: ['thick-fat', 'hydration', 'ice-body'],
      id: 86,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'dewgong') {
    const data = {
      name: 'dewgong',
      abilities: ['thick-fat', 'hydration', 'ice-body'],
      id: 87,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png',
      types: ['water', 'ice'],
      weaknesses: [
        'electric: 2x',
        'fighting: 2x',
        'grass: 2x',
        'ice: 0.25x',
        'rock: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'grimer') {
    const data = {
      name: 'grimer',
      abilities: ['stench', 'sticky-hold', 'poison-touch'],
      id: 88,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png',
      types: ['poison'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'poison: 0.5x',
        'psychic: 2x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 25, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'muk') {
    const data = {
      name: 'muk',
      abilities: ['stench', 'sticky-hold', 'poison-touch'],
      id: 89,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png',
      types: ['poison'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'poison: 0.5x',
        'psychic: 2x',
      ],
      stats: [
        { stat: 105, name: 'HP' },
        { stat: 105, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'shellder') {
    const data = {
      name: 'shellder',
      abilities: ['shell-armor', 'skill-link', 'overcoat'],
      id: 90,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 30, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 25, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cloyster') {
    const data = {
      name: 'cloyster',
      abilities: ['shell-armor', 'skill-link', 'overcoat'],
      id: 91,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png',
      types: ['water', 'ice'],
      weaknesses: [
        'electric: 2x',
        'fighting: 2x',
        'grass: 2x',
        'ice: 0.25x',
        'rock: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 180, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gastly') {
    const data = {
      name: 'gastly',
      abilities: ['levitate', ,],
      id: 92,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png',
      types: ['ghost', 'poison'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 2x',
        'fairy: 0.5x',
        'fighting: 0x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'normal: 0x',
        'poison: 0.25x',
        'psychic: 2x',
      ],
      stats: [
        { stat: 30, name: 'HP' },
        { stat: 35, name: 'ATT' },
        { stat: 30, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 35, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'haunter') {
    const data = {
      name: 'haunter',
      abilities: ['levitate', ,],
      id: 93,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png',
      types: ['ghost', 'poison'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 2x',
        'fairy: 0.5x',
        'fighting: 0x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'normal: 0x',
        'poison: 0.25x',
        'psychic: 2x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 115, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gengar') {
    const data = {
      name: 'gengar',
      abilities: ['cursed-body', ,],
      id: 94,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png',
      types: ['ghost', 'poison'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 2x',
        'fairy: 0.5x',
        'fighting: 0x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'normal: 0x',
        'poison: 0.25x',
        'psychic: 2x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 130, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 110, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gengar-mega') {
    const data = {
      name: 'gengar-mega',
      abilities: ['shadow-tag', ,],
      id: 10038,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10038.png',
      types: ['ghost', 'poison'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 2x',
        'fairy: 0.5x',
        'fighting: 0x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'normal: 0x',
        'poison: 0.25x',
        'psychic: 2x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 170, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 130, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'onix') {
    const data = {
      name: 'onix',
      abilities: ['rock-head', 'sturdy', 'weak-armor'],
      id: 95,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png',
      types: ['rock', 'ground'],
      weaknesses: [
        'electric: 0x',
        'fighting: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 4x',
        'ground: 2x',
        'ice: 2x',
        'normal: 0.5x',
        'poison: 0.25x',
        'rock: 0.5x',
        'steel: 2x',
        'water: 4x',
      ],
      stats: [
        { stat: 35, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 160, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'drowzee') {
    const data = {
      name: 'drowzee',
      abilities: ['insomnia', 'forewarn', 'inner-focus'],
      id: 96,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 48, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 43, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 42, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'hypno') {
    const data = {
      name: 'hypno',
      abilities: ['insomnia', 'forewarn', 'inner-focus'],
      id: 97,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 85, name: 'HP' },
        { stat: 73, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 73, name: 'SPA' },
        { stat: 115, name: 'SPD' },
        { stat: 67, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'krabby') {
    const data = {
      name: 'krabby',
      abilities: ['hyper-cutter', 'shell-armor', 'sheer-force'],
      id: 98,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 30, name: 'HP' },
        { stat: 105, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 25, name: 'SPA' },
        { stat: 25, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'kingler') {
    const data = {
      name: 'kingler',
      abilities: ['hyper-cutter', 'shell-armor', 'sheer-force'],
      id: 99,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 130, name: 'ATT' },
        { stat: 115, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 75, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'voltorb') {
    const data = {
      name: 'voltorb',
      abilities: ['soundproof', 'static', 'aftermath'],
      id: 100,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 30, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'electrode') {
    const data = {
      name: 'electrode',
      abilities: ['soundproof', 'static', 'aftermath'],
      id: 101,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 150, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'exeggcute') {
    const data = {
      name: 'exeggcute',
      abilities: ['chlorophyll', 'harvest'],
      id: 102,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png',
      types: ['grass', 'psychic'],
      weaknesses: [
        'bug: 4x',
        'dark: 2x',
        'electric: 0.5x',
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'psychic: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 40, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'exeggutor') {
    const data = {
      name: 'exeggutor',
      abilities: ['chlorophyll', 'harvest'],
      id: 103,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png',
      types: ['grass', 'psychic'],
      weaknesses: [
        'bug: 4x',
        'dark: 2x',
        'electric: 0.5x',
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'psychic: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 95, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cubone') {
    const data = {
      name: 'cubone',
      abilities: ['rock-head', 'lightning-rod', 'battle-armor'],
      id: 104,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png',
      types: ['ground'],
      weaknesses: [
        'electric: 0x',
        'grass: 2x',
        'ice: 2x',
        'poison: 0.5x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 35, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'marowak') {
    const data = {
      name: 'marowak',
      abilities: ['rock-head', 'lightning-rod', 'battle-armor'],
      id: 105,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png',
      types: ['ground'],
      weaknesses: [
        'electric: 0x',
        'grass: 2x',
        'ice: 2x',
        'poison: 0.5x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 110, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'hitmonlee') {
    const data = {
      name: 'hitmonlee',
      abilities: ['limber', 'reckless', 'unburden'],
      id: 106,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png',
      types: ['fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'flying: 2x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 53, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 87, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'hitmonchan') {
    const data = {
      name: 'hitmonchan',
      abilities: ['keen-eye', 'iron-fist', 'inner-focus'],
      id: 107,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png',
      types: ['fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'flying: 2x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 105, name: 'ATT' },
        { stat: 79, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 76, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'lickitung') {
    const data = {
      name: 'lickitung',
      abilities: ['own-tempo', 'oblivious', 'cloud-nine'],
      id: 108,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'koffing') {
    const data = {
      name: 'koffing',
      abilities: ['levitate', 'neutralizing-gas', 'stench'],
      id: 109,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png',
      types: ['poison'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'poison: 0.5x',
        'psychic: 2x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 35, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'weezing') {
    const data = {
      name: 'weezing',
      abilities: ['levitate', 'neutralizing-gas', 'stench'],
      id: 110,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png',
      types: ['poison'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'poison: 0.5x',
        'psychic: 2x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 120, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'rhyhorn') {
    const data = {
      name: 'rhyhorn',
      abilities: ['lightning-rod', 'rock-head', 'reckless'],
      id: 111,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png',
      types: ['ground', 'rock'],
      weaknesses: [
        'electric: 0x',
        'fighting: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 4x',
        'ground: 2x',
        'ice: 2x',
        'normal: 0.5x',
        'poison: 0.25x',
        'rock: 0.5x',
        'steel: 2x',
        'water: 4x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 30, name: 'SPD' },
        { stat: 25, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'rhydon') {
    const data = {
      name: 'rhydon',
      abilities: ['lightning-rod', 'rock-head', 'reckless'],
      id: 112,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png',
      types: ['ground', 'rock'],
      weaknesses: [
        'electric: 0x',
        'fighting: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 4x',
        'ground: 2x',
        'ice: 2x',
        'normal: 0.5x',
        'poison: 0.25x',
        'rock: 0.5x',
        'steel: 2x',
        'water: 4x',
      ],
      stats: [
        { stat: 105, name: 'HP' },
        { stat: 130, name: 'ATT' },
        { stat: 120, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'chansey') {
    const data = {
      name: 'chansey',
      abilities: ['natural-cure', 'serene-grace', 'healer'],
      id: 113,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 250, name: 'HP' },
        { stat: 5, name: 'ATT' },
        { stat: 5, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tangela') {
    const data = {
      name: 'tangela',
      abilities: ['chlorophyll', 'leaf-guard', 'regenerator'],
      id: 114,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 115, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'kangaskhan') {
    const data = {
      name: 'kangaskhan',
      abilities: ['early-bird', 'scrappy', 'inner-focus'],
      id: 115,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 105, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'kangaskhan-mega') {
    const data = {
      name: 'kangaskhan-mega',
      abilities: ['parental-bond', ,],
      id: 10039,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10039.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 105, name: 'HP' },
        { stat: 125, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'horsea') {
    const data = {
      name: 'horsea',
      abilities: ['swift-swim', 'sniper', 'damp'],
      id: 116,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 30, name: 'HP' },
        { stat: 40, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 25, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'seadra') {
    const data = {
      name: 'seadra',
      abilities: ['poison-point', 'sniper', 'damp'],
      id: 117,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'goldeen') {
    const data = {
      name: 'goldeen',
      abilities: ['swift-swim', 'water-veil', 'lightning-rod'],
      id: 118,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 67, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 63, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'seaking') {
    const data = {
      name: 'seaking',
      abilities: ['swift-swim', 'water-veil', 'lightning-rod'],
      id: 119,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 92, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 68, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'staryu') {
    const data = {
      name: 'staryu',
      abilities: ['illuminate', 'natural-cure', 'analytic'],
      id: 120,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 30, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'starmie') {
    const data = {
      name: 'starmie',
      abilities: ['illuminate', 'natural-cure', 'analytic'],
      id: 121,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png',
      types: ['water', 'psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'electric: 2x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'ghost: 2x',
        'grass: 2x',
        'ice: 0.5x',
        'psychic: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 115, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mr-mime') {
    const data = {
      name: 'mr-mime',
      abilities: ['soundproof', 'filter', 'technician'],
      id: 122,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png',
      types: ['psychic', 'fairy'],
      weaknesses: [
        'dragon: 0x',
        'fighting: 0.25x',
        'ghost: 2x',
        'poison: 2x',
        'psychic: 0.5x',
        'steel: 2x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 120, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'scyther') {
    const data = {
      name: 'scyther',
      abilities: ['swarm', 'technician', 'steadfast'],
      id: 123,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png',
      types: ['bug', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 2x',
        'rock: 4x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 110, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 105, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'jynx') {
    const data = {
      name: 'jynx',
      abilities: ['oblivious', 'forewarn', 'dry-skin'],
      id: 124,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png',
      types: ['ice', 'psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fire: 2x',
        'ghost: 2x',
        'ice: 0.5x',
        'psychic: 0.5x',
        'rock: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 35, name: 'DEF' },
        { stat: 115, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'electabuzz') {
    const data = {
      name: 'electabuzz',
      abilities: ['static', 'vital-spirit'],
      id: 125,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 83, name: 'ATT' },
        { stat: 57, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 105, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'magmar') {
    const data = {
      name: 'magmar',
      abilities: ['flame-body', 'vital-spirit'],
      id: 126,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 57, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 93, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'pinsir') {
    const data = {
      name: 'pinsir',
      abilities: ['hyper-cutter', 'mold-breaker', 'moxie'],
      id: 127,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png',
      types: ['bug'],
      weaknesses: [
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 125, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'pinsir-mega') {
    const data = {
      name: 'pinsir-mega',
      abilities: ['aerilate', ,],
      id: 10040,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10040.png',
      types: ['bug', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 2x',
        'rock: 4x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 155, name: 'ATT' },
        { stat: 120, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 105, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tauros') {
    const data = {
      name: 'tauros',
      abilities: ['intimidate', 'anger-point', 'sheer-force'],
      id: 128,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 110, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'magikarp') {
    const data = {
      name: 'magikarp',
      abilities: ['swift-swim', 'rattled'],
      id: 129,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 20, name: 'HP' },
        { stat: 10, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 15, name: 'SPA' },
        { stat: 20, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gyarados') {
    const data = {
      name: 'gyarados',
      abilities: ['intimidate', 'moxie'],
      id: 130,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png',
      types: ['water', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 4x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'ground: 0x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 95, name: 'HP' },
        { stat: 125, name: 'ATT' },
        { stat: 79, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 81, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gyarados-mega') {
    const data = {
      name: 'gyarados-mega',
      abilities: ['mold-breaker', ,],
      id: 10041,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10041.png',
      types: ['water', 'dark'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'electric: 2x',
        'fairy: 2x',
        'fighting: 2x',
        'fire: 0.5x',
        'ghost: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'psychic: 0x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 95, name: 'HP' },
        { stat: 155, name: 'ATT' },
        { stat: 109, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 130, name: 'SPD' },
        { stat: 81, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'lapras') {
    const data = {
      name: 'lapras',
      abilities: ['water-absorb', 'shell-armor', 'hydration'],
      id: 131,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png',
      types: ['water', 'ice'],
      weaknesses: [
        'electric: 2x',
        'fighting: 2x',
        'grass: 2x',
        'ice: 0.25x',
        'rock: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 130, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'ditto') {
    const data = {
      name: 'ditto',
      abilities: ['limber', 'imposter'],
      id: 132,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 48, name: 'HP' },
        { stat: 48, name: 'ATT' },
        { stat: 48, name: 'DEF' },
        { stat: 48, name: 'SPA' },
        { stat: 48, name: 'SPD' },
        { stat: 48, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'eevee') {
    const data = {
      name: 'eevee',
      abilities: ['run-away', 'adaptability', 'anticipation'],
      id: 133,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'vaporeon') {
    const data = {
      name: 'vaporeon',
      abilities: ['water-absorb', 'hydration'],
      id: 134,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 130, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'jolteon') {
    const data = {
      name: 'jolteon',
      abilities: ['volt-absorb', 'quick-feet'],
      id: 135,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 130, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'flareon') {
    const data = {
      name: 'flareon',
      abilities: ['flash-fire', 'guts'],
      id: 136,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 130, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'porygon') {
    const data = {
      name: 'porygon',
      abilities: ['trace', 'download', 'analytic'],
      id: 137,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'omanyte') {
    const data = {
      name: 'omanyte',
      abilities: ['swift-swim', 'shell-armor', 'weak-armor'],
      id: 138,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png',
      types: ['rock', 'water'],
      weaknesses: [
        'electric: 2x',
        'fighting: 2x',
        'fire: 0.25x',
        'flying: 0.5x',
        'grass: 4x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 35, name: 'HP' },
        { stat: 40, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 35, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'omastar') {
    const data = {
      name: 'omastar',
      abilities: ['swift-swim', 'shell-armor', 'weak-armor'],
      id: 139,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png',
      types: ['rock', 'water'],
      weaknesses: [
        'electric: 2x',
        'fighting: 2x',
        'fire: 0.25x',
        'flying: 0.5x',
        'grass: 4x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 125, name: 'DEF' },
        { stat: 115, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'kabuto') {
    const data = {
      name: 'kabuto',
      abilities: ['swift-swim', 'battle-armor', 'weak-armor'],
      id: 140,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png',
      types: ['rock', 'water'],
      weaknesses: [
        'electric: 2x',
        'fighting: 2x',
        'fire: 0.25x',
        'flying: 0.5x',
        'grass: 4x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 30, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'kabutops') {
    const data = {
      name: 'kabutops',
      abilities: ['swift-swim', 'battle-armor', 'weak-armor'],
      id: 141,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png',
      types: ['rock', 'water'],
      weaknesses: [
        'electric: 2x',
        'fighting: 2x',
        'fire: 0.25x',
        'flying: 0.5x',
        'grass: 4x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 115, name: 'ATT' },
        { stat: 105, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'aerodactyl') {
    const data = {
      name: 'aerodactyl',
      abilities: ['rock-head', 'pressure', 'unnerve'],
      id: 142,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png',
      types: ['rock', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'normal: 0.5x',
        'poison: 0.5x',
        'rock: 2x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 105, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 130, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'aerodactyl-mega') {
    const data = {
      name: 'aerodactyl-mega',
      abilities: ['tough-claws', ,],
      id: 10042,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10042.png',
      types: ['rock', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'normal: 0.5x',
        'poison: 0.5x',
        'rock: 2x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 135, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 150, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'snorlax') {
    const data = {
      name: 'snorlax',
      abilities: ['immunity', 'thick-fat', 'gluttony'],
      id: 143,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 160, name: 'HP' },
        { stat: 110, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'articuno') {
    const data = {
      name: 'articuno',
      abilities: ['pressure', 'snow-cloak'],
      id: 144,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png',
      types: ['ice', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fire: 2x',
        'grass: 0.5x',
        'ground: 0x',
        'rock: 4x',
        'steel: 2x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 125, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'zapdos') {
    const data = {
      name: 'zapdos',
      abilities: ['pressure', 'static'],
      id: 145,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png',
      types: ['electric', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'fighting: 0.5x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'moltres') {
    const data = {
      name: 'moltres',
      abilities: ['pressure', 'flame-body'],
      id: 146,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png',
      types: ['fire', 'flying'],
      weaknesses: [
        'bug: 0.25x',
        'electric: 2x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'grass: 0.25x',
        'ground: 0x',
        'rock: 4x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'dratini') {
    const data = {
      name: 'dratini',
      abilities: ['shed-skin', 'marvel-scale'],
      id: 147,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png',
      types: ['dragon'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ice: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 41, name: 'HP' },
        { stat: 64, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'dragonair') {
    const data = {
      name: 'dragonair',
      abilities: ['shed-skin', 'marvel-scale'],
      id: 148,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png',
      types: ['dragon'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ice: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 61, name: 'HP' },
        { stat: 84, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'dragonite') {
    const data = {
      name: 'dragonite',
      abilities: ['inner-focus', 'multiscale'],
      id: 149,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png',
      types: ['dragon', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 2x',
        'fairy: 2x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 4x',
        'rock: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 91, name: 'HP' },
        { stat: 134, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mewtwo') {
    const data = {
      name: 'mewtwo',
      abilities: ['pressure', 'unnerve'],
      id: 150,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 106, name: 'HP' },
        { stat: 110, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 154, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 130, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mewtwo-mega-x') {
    const data = {
      name: 'mewtwo-mega-x',
      abilities: ['steadfast', ,],
      id: 10043,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10043.png',
      types: ['psychic', 'fighting'],
      weaknesses: [
        'fairy: 2x',
        'fighting: 0.5x',
        'flying: 2x',
        'ghost: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 106, name: 'HP' },
        { stat: 190, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 154, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 130, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mewtwo-mega-y') {
    const data = {
      name: 'mewtwo-mega-y',
      abilities: ['insomnia', ,],
      id: 10044,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10044.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 106, name: 'HP' },
        { stat: 150, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 194, name: 'SPA' },
        { stat: 120, name: 'SPD' },
        { stat: 140, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mew') {
    const data = {
      name: 'mew',
      abilities: ['synchronize', ,],
      id: 151,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'chikorita') {
    const data = {
      name: 'chikorita',
      abilities: ['overgrow', 'leaf-guard'],
      id: 152,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/152.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 49, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 49, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'bayleef') {
    const data = {
      name: 'bayleef',
      abilities: ['overgrow', 'leaf-guard'],
      id: 153,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/153.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 62, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 63, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'meganium') {
    const data = {
      name: 'meganium',
      abilities: ['overgrow', 'leaf-guard'],
      id: 154,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/154.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 82, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 83, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cyndaquil') {
    const data = {
      name: 'cyndaquil',
      abilities: ['blaze', 'flash-fire'],
      id: 155,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/155.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 39, name: 'HP' },
        { stat: 52, name: 'ATT' },
        { stat: 43, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'quilava') {
    const data = {
      name: 'quilava',
      abilities: ['blaze', 'flash-fire'],
      id: 156,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/156.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 58, name: 'HP' },
        { stat: 64, name: 'ATT' },
        { stat: 58, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'typhlosion') {
    const data = {
      name: 'typhlosion',
      abilities: ['blaze', 'flash-fire'],
      id: 157,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/157.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 78, name: 'HP' },
        { stat: 84, name: 'ATT' },
        { stat: 78, name: 'DEF' },
        { stat: 109, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'totodile') {
    const data = {
      name: 'totodile',
      abilities: ['torrent', 'sheer-force'],
      id: 158,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/158.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 64, name: 'DEF' },
        { stat: 44, name: 'SPA' },
        { stat: 48, name: 'SPD' },
        { stat: 43, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'croconaw') {
    const data = {
      name: 'croconaw',
      abilities: ['torrent', 'sheer-force'],
      id: 159,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/159.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 59, name: 'SPA' },
        { stat: 63, name: 'SPD' },
        { stat: 58, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'feraligatr') {
    const data = {
      name: 'feraligatr',
      abilities: ['torrent', 'sheer-force'],
      id: 160,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/160.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 85, name: 'HP' },
        { stat: 105, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 79, name: 'SPA' },
        { stat: 83, name: 'SPD' },
        { stat: 78, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sentret') {
    const data = {
      name: 'sentret',
      abilities: ['run-away', 'keen-eye', 'frisk'],
      id: 161,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/161.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 35, name: 'HP' },
        { stat: 46, name: 'ATT' },
        { stat: 34, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 20, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'furret') {
    const data = {
      name: 'furret',
      abilities: ['run-away', 'keen-eye', 'frisk'],
      id: 162,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/162.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 85, name: 'HP' },
        { stat: 76, name: 'ATT' },
        { stat: 64, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'hoothoot') {
    const data = {
      name: 'hoothoot',
      abilities: ['insomnia', 'keen-eye', 'tinted-lens'],
      id: 163,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/163.png',
      types: ['normal', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 30, name: 'ATT' },
        { stat: 30, name: 'DEF' },
        { stat: 36, name: 'SPA' },
        { stat: 56, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'noctowl') {
    const data = {
      name: 'noctowl',
      abilities: ['insomnia', 'keen-eye', 'tinted-lens'],
      id: 164,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/164.png',
      types: ['normal', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 86, name: 'SPA' },
        { stat: 96, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'ledyba') {
    const data = {
      name: 'ledyba',
      abilities: ['swarm', 'early-bird', 'rattled'],
      id: 165,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/165.png',
      types: ['bug', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 2x',
        'rock: 4x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 20, name: 'ATT' },
        { stat: 30, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'ledian') {
    const data = {
      name: 'ledian',
      abilities: ['swarm', 'early-bird', 'iron-fist'],
      id: 166,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/166.png',
      types: ['bug', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 2x',
        'rock: 4x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 35, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'spinarak') {
    const data = {
      name: 'spinarak',
      abilities: ['swarm', 'insomnia', 'sniper'],
      id: 167,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/167.png',
      types: ['bug', 'poison'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'poison: 0.5x',
        'psychic: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'ariados') {
    const data = {
      name: 'ariados',
      abilities: ['swarm', 'insomnia', 'sniper'],
      id: 168,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/168.png',
      types: ['bug', 'poison'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'poison: 0.5x',
        'psychic: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'crobat') {
    const data = {
      name: 'crobat',
      abilities: ['inner-focus', 'infiltrator'],
      id: 169,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/169.png',
      types: ['poison', 'flying'],
      weaknesses: [
        'bug: 0.25x',
        'electric: 2x',
        'fairy: 0.5x',
        'fighting: 0.25x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 2x',
        'poison: 0.5x',
        'psychic: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 85, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 130, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'chinchou') {
    const data = {
      name: 'chinchou',
      abilities: ['volt-absorb', 'illuminate', 'water-absorb'],
      id: 170,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/170.png',
      types: ['water', 'electric'],
      weaknesses: [
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 2x',
        'ground: 2x',
        'ice: 0.5x',
        'steel: 0.25x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 38, name: 'ATT' },
        { stat: 38, name: 'DEF' },
        { stat: 56, name: 'SPA' },
        { stat: 56, name: 'SPD' },
        { stat: 67, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'lanturn') {
    const data = {
      name: 'lanturn',
      abilities: ['volt-absorb', 'illuminate', 'water-absorb'],
      id: 171,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/171.png',
      types: ['water', 'electric'],
      weaknesses: [
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 2x',
        'ground: 2x',
        'ice: 0.5x',
        'steel: 0.25x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 125, name: 'HP' },
        { stat: 58, name: 'ATT' },
        { stat: 58, name: 'DEF' },
        { stat: 76, name: 'SPA' },
        { stat: 76, name: 'SPD' },
        { stat: 67, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'pichu') {
    const data = {
      name: 'pichu',
      abilities: ['static', 'lightning-rod'],
      id: 172,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 20, name: 'HP' },
        { stat: 40, name: 'ATT' },
        { stat: 15, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 35, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cleffa') {
    const data = {
      name: 'cleffa',
      abilities: ['cute-charm', 'magic-guard', 'friend-guard'],
      id: 173,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/173.png',
      types: ['fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'fighting: 0.5x',
        'poison: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 25, name: 'ATT' },
        { stat: 28, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 15, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'igglybuff') {
    const data = {
      name: 'igglybuff',
      abilities: ['cute-charm', 'competitive', 'friend-guard'],
      id: 174,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/174.png',
      types: ['normal', 'fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'ghost: 0x',
        'poison: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 30, name: 'ATT' },
        { stat: 15, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 20, name: 'SPD' },
        { stat: 15, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'togepi') {
    const data = {
      name: 'togepi',
      abilities: ['hustle', 'serene-grace', 'super-luck'],
      id: 175,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/175.png',
      types: ['fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'fighting: 0.5x',
        'poison: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 35, name: 'HP' },
        { stat: 20, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 20, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'togetic') {
    const data = {
      name: 'togetic',
      abilities: ['hustle', 'serene-grace', 'super-luck'],
      id: 176,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/176.png',
      types: ['fairy', 'flying'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 0.5x',
        'dragon: 0x',
        'electric: 2x',
        'fighting: 0.25x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'poison: 2x',
        'rock: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 40, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'natu') {
    const data = {
      name: 'natu',
      abilities: ['synchronize', 'early-bird', 'magic-bounce'],
      id: 177,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/177.png',
      types: ['psychic', 'flying'],
      weaknesses: [
        'dark: 2x',
        'electric: 2x',
        'fighting: 0.25x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'psychic: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'xatu') {
    const data = {
      name: 'xatu',
      abilities: ['synchronize', 'early-bird', 'magic-bounce'],
      id: 178,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/178.png',
      types: ['psychic', 'flying'],
      weaknesses: [
        'dark: 2x',
        'electric: 2x',
        'fighting: 0.25x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'psychic: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mareep') {
    const data = {
      name: 'mareep',
      abilities: ['static', 'plus'],
      id: 179,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/179.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 40, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 35, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'flaaffy') {
    const data = {
      name: 'flaaffy',
      abilities: ['static', 'plus'],
      id: 180,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/180.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'ampharos') {
    const data = {
      name: 'ampharos',
      abilities: ['static', 'plus'],
      id: 181,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/181.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 115, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'ampharos-mega') {
    const data = {
      name: 'ampharos-mega',
      abilities: ['mold-breaker', ,],
      id: 10045,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10045.png',
      types: ['electric', 'dragon'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0.25x',
        'fairy: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 2x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 105, name: 'DEF' },
        { stat: 165, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'bellossom') {
    const data = {
      name: 'bellossom',
      abilities: ['chlorophyll', 'healer'],
      id: 182,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/182.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'marill') {
    const data = {
      name: 'marill',
      abilities: ['thick-fat', 'huge-power', 'sap-sipper'],
      id: 183,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/183.png',
      types: ['water', 'fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'electric: 2x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 20, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 20, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'azumarill') {
    const data = {
      name: 'azumarill',
      abilities: ['thick-fat', 'huge-power', 'sap-sipper'],
      id: 184,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/184.png',
      types: ['water', 'fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'electric: 2x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sudowoodo') {
    const data = {
      name: 'sudowoodo',
      abilities: ['sturdy', 'rock-head', 'rattled'],
      id: 185,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/185.png',
      types: ['rock'],
      weaknesses: [
        'fighting: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 2x',
        'ground: 2x',
        'normal: 0.5x',
        'poison: 0.5x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 115, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'politoed') {
    const data = {
      name: 'politoed',
      abilities: ['water-absorb', 'damp', 'drizzle'],
      id: 186,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/186.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'hoppip') {
    const data = {
      name: 'hoppip',
      abilities: ['chlorophyll', 'leaf-guard', 'infiltrator'],
      id: 187,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/187.png',
      types: ['grass', 'flying'],
      weaknesses: [
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 4x',
        'poison: 2x',
        'rock: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 35, name: 'HP' },
        { stat: 35, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'skiploom') {
    const data = {
      name: 'skiploom',
      abilities: ['chlorophyll', 'leaf-guard', 'infiltrator'],
      id: 188,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/188.png',
      types: ['grass', 'flying'],
      weaknesses: [
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 4x',
        'poison: 2x',
        'rock: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'jumpluff') {
    const data = {
      name: 'jumpluff',
      abilities: ['chlorophyll', 'leaf-guard', 'infiltrator'],
      id: 189,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/189.png',
      types: ['grass', 'flying'],
      weaknesses: [
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 4x',
        'poison: 2x',
        'rock: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 110, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'aipom') {
    const data = {
      name: 'aipom',
      abilities: ['run-away', 'pickup', 'skill-link'],
      id: 190,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/190.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sunkern') {
    const data = {
      name: 'sunkern',
      abilities: ['chlorophyll', 'solar-power', 'early-bird'],
      id: 191,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/191.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 30, name: 'HP' },
        { stat: 30, name: 'ATT' },
        { stat: 30, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 30, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sunflora') {
    const data = {
      name: 'sunflora',
      abilities: ['chlorophyll', 'solar-power', 'early-bird'],
      id: 192,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/192.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'yanma') {
    const data = {
      name: 'yanma',
      abilities: ['speed-boost', 'compound-eyes', 'frisk'],
      id: 193,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/193.png',
      types: ['bug', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 2x',
        'rock: 4x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'quagsire') {
    const data = {
      name: 'quagsire',
      abilities: ['damp', 'water-absorb', 'unaware'],
      id: 195,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/195.png',
      types: ['water', 'ground'],
      weaknesses: [
        'electric: 0x',
        'fire: 0.5x',
        'grass: 4x',
        'poison: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 95, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 35, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'espeon') {
    const data = {
      name: 'espeon',
      abilities: ['synchronize', 'magic-bounce'],
      id: 196,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/196.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 130, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 110, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'umbreon') {
    const data = {
      name: 'umbreon',
      abilities: ['synchronize', 'inner-focus'],
      id: 197,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png',
      types: ['dark'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'ghost: 0.5x',
        'psychic: 0x',
      ],
      stats: [
        { stat: 95, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 110, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 130, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'murkrow') {
    const data = {
      name: 'murkrow',
      abilities: ['insomnia', 'super-luck', 'prankster'],
      id: 198,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/198.png',
      types: ['dark', 'flying'],
      weaknesses: [
        'dark: 0.5x',
        'electric: 2x',
        'fairy: 2x',
        'ghost: 0.5x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'psychic: 0x',
        'rock: 2x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 42, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 42, name: 'SPD' },
        { stat: 91, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'slowking') {
    const data = {
      name: 'slowking',
      abilities: ['oblivious', 'own-tempo', 'regenerator'],
      id: 199,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/199.png',
      types: ['water', 'psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'electric: 2x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'ghost: 2x',
        'grass: 2x',
        'ice: 0.5x',
        'psychic: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 95, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'misdreavus') {
    const data = {
      name: 'misdreavus',
      abilities: ['levitate', ,],
      id: 200,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/200.png',
      types: ['ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'fighting: 0x',
        'ghost: 2x',
        'normal: 0x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'unown') {
    const data = {
      name: 'unown',
      abilities: ['levitate', ,],
      id: 201,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/201.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 48, name: 'HP' },
        { stat: 72, name: 'ATT' },
        { stat: 48, name: 'DEF' },
        { stat: 72, name: 'SPA' },
        { stat: 48, name: 'SPD' },
        { stat: 48, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'wobbuffet') {
    const data = {
      name: 'wobbuffet',
      abilities: ['shadow-tag', 'telepathy'],
      id: 202,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/202.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 190, name: 'HP' },
        { stat: 33, name: 'ATT' },
        { stat: 58, name: 'DEF' },
        { stat: 33, name: 'SPA' },
        { stat: 58, name: 'SPD' },
        { stat: 33, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'girafarig') {
    const data = {
      name: 'girafarig',
      abilities: ['inner-focus', 'early-bird', 'sap-sipper'],
      id: 203,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/203.png',
      types: ['normal', 'psychic'],
      weaknesses: ['bug: 2x', 'dark: 2x', 'ghost: 0x', 'psychic: 0.5x'],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'pineco') {
    const data = {
      name: 'pineco',
      abilities: ['sturdy', 'overcoat'],
      id: 204,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/204.png',
      types: ['bug'],
      weaknesses: [
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 35, name: 'SPD' },
        { stat: 15, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'forretress') {
    const data = {
      name: 'forretress',
      abilities: ['sturdy', 'overcoat'],
      id: 205,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/205.png',
      types: ['bug', 'steel'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fire: 4x',
        'grass: 0.25x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 140, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'dunsparce') {
    const data = {
      name: 'dunsparce',
      abilities: ['serene-grace', 'run-away', 'rattled'],
      id: 206,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/206.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gligar') {
    const data = {
      name: 'gligar',
      abilities: ['hyper-cutter', 'sand-veil', 'immunity'],
      id: 207,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/207.png',
      types: ['ground', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 0x',
        'fighting: 0.5x',
        'ground: 0x',
        'ice: 4x',
        'poison: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 105, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'steelix') {
    const data = {
      name: 'steelix',
      abilities: ['rock-head', 'sturdy', 'sheer-force'],
      id: 208,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/208.png',
      types: ['steel', 'ground'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'electric: 0x',
        'fairy: 0.5x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 0.5x',
        'ground: 2x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.25x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 200, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'steelix-mega') {
    const data = {
      name: 'steelix-mega',
      abilities: ['sand-force', ,],
      id: 10072,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10072.png',
      types: ['steel', 'ground'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'electric: 0x',
        'fairy: 0.5x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 0.5x',
        'ground: 2x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.25x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 125, name: 'ATT' },
        { stat: 230, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'snubbull') {
    const data = {
      name: 'snubbull',
      abilities: ['intimidate', 'run-away', 'rattled'],
      id: 209,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/209.png',
      types: ['fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'fighting: 0.5x',
        'poison: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'granbull') {
    const data = {
      name: 'granbull',
      abilities: ['intimidate', 'quick-feet', 'rattled'],
      id: 210,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/210.png',
      types: ['fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'fighting: 0.5x',
        'poison: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'qwilfish') {
    const data = {
      name: 'qwilfish',
      abilities: ['poison-point', 'swift-swim', 'intimidate'],
      id: 211,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/211.png',
      types: ['water', 'poison'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'poison: 0.5x',
        'psychic: 2x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'scizor') {
    const data = {
      name: 'scizor',
      abilities: ['swarm', 'technician', 'light-metal'],
      id: 212,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/212.png',
      types: ['bug', 'steel'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fire: 4x',
        'grass: 0.25x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 130, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'scizor-mega') {
    const data = {
      name: 'scizor-mega',
      abilities: ['technician', ,],
      id: 10046,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10046.png',
      types: ['bug', 'steel'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fire: 4x',
        'grass: 0.25x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 150, name: 'ATT' },
        { stat: 140, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 75, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'shuckle') {
    const data = {
      name: 'shuckle',
      abilities: ['sturdy', 'gluttony', 'contrary'],
      id: 213,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/213.png',
      types: ['bug', 'rock'],
      weaknesses: [
        'normal: 0.5x',
        'poison: 0.5x',
        'rock: 2x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 20, name: 'HP' },
        { stat: 10, name: 'ATT' },
        { stat: 230, name: 'DEF' },
        { stat: 10, name: 'SPA' },
        { stat: 230, name: 'SPD' },
        { stat: 5, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'heracross') {
    const data = {
      name: 'heracross',
      abilities: ['swarm', 'guts', 'moxie'],
      id: 214,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/214.png',
      types: ['bug', 'fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 4x',
        'grass: 0.5x',
        'ground: 0.5x',
        'psychic: 2x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 125, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'heracross-mega') {
    const data = {
      name: 'heracross-mega',
      abilities: ['skill-link', ,],
      id: 10047,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10047.png',
      types: ['bug', 'fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 4x',
        'grass: 0.5x',
        'ground: 0.5x',
        'psychic: 2x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 185, name: 'ATT' },
        { stat: 115, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 75, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sneasel') {
    const data = {
      name: 'sneasel',
      abilities: ['inner-focus', 'keen-eye', 'pickpocket'],
      id: 215,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/215.png',
      types: ['dark', 'ice'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 4x',
        'fire: 2x',
        'ghost: 0.5x',
        'ice: 0.5x',
        'psychic: 0x',
        'rock: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 115, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'teddiursa') {
    const data = {
      name: 'teddiursa',
      abilities: ['pickup', 'quick-feet', 'honey-gather'],
      id: 216,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/216.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'ursaring') {
    const data = {
      name: 'ursaring',
      abilities: ['guts', 'quick-feet', 'unnerve'],
      id: 217,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/217.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 130, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'slugma') {
    const data = {
      name: 'slugma',
      abilities: ['magma-armor', 'flame-body', 'weak-armor'],
      id: 218,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/218.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 40, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 20, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'magcargo') {
    const data = {
      name: 'magcargo',
      abilities: ['magma-armor', 'flame-body', 'weak-armor'],
      id: 219,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/219.png',
      types: ['fire', 'rock'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 2x',
        'fire: 0.25x',
        'flying: 0.5x',
        'ground: 4x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0.5x',
        'rock: 2x',
        'water: 4x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 120, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'swinub') {
    const data = {
      name: 'swinub',
      abilities: ['oblivious', 'snow-cloak', 'thick-fat'],
      id: 220,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/220.png',
      types: ['ice', 'ground'],
      weaknesses: [
        'electric: 0x',
        'fighting: 2x',
        'fire: 2x',
        'grass: 2x',
        'poison: 0.5x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 30, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'piloswine') {
    const data = {
      name: 'piloswine',
      abilities: ['oblivious', 'snow-cloak', 'thick-fat'],
      id: 221,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/221.png',
      types: ['ice', 'ground'],
      weaknesses: [
        'electric: 0x',
        'fighting: 2x',
        'fire: 2x',
        'grass: 2x',
        'poison: 0.5x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'corsola') {
    const data = {
      name: 'corsola',
      abilities: ['hustle', 'natural-cure', 'regenerator'],
      id: 222,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/222.png',
      types: ['water', 'rock'],
      weaknesses: [
        'electric: 2x',
        'fighting: 2x',
        'fire: 0.25x',
        'flying: 0.5x',
        'grass: 4x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 35, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'remoraid') {
    const data = {
      name: 'remoraid',
      abilities: ['hustle', 'sniper', 'moody'],
      id: 223,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/223.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 35, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 35, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 35, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'octillery') {
    const data = {
      name: 'octillery',
      abilities: ['suction-cups', 'sniper', 'moody'],
      id: 224,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/224.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 105, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'delibird') {
    const data = {
      name: 'delibird',
      abilities: ['vital-spirit', 'hustle', 'insomnia'],
      id: 225,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/225.png',
      types: ['ice', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fire: 2x',
        'grass: 0.5x',
        'ground: 0x',
        'rock: 4x',
        'steel: 2x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 75, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mantine') {
    const data = {
      name: 'mantine',
      abilities: ['swift-swim', 'water-absorb', 'water-veil'],
      id: 226,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/226.png',
      types: ['water', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 4x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'ground: 0x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 85, name: 'HP' },
        { stat: 40, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 140, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'skarmory') {
    const data = {
      name: 'skarmory',
      abilities: ['keen-eye', 'sturdy', 'weak-armor'],
      id: 227,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/227.png',
      types: ['steel', 'flying'],
      weaknesses: [
        'bug: 0.25x',
        'dragon: 0.5x',
        'electric: 2x',
        'fairy: 0.5x',
        'fire: 2x',
        'flying: 0.5x',
        'grass: 0.25x',
        'ground: 0x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 140, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'houndour') {
    const data = {
      name: 'houndour',
      abilities: ['early-bird', 'flash-fire', 'unnerve'],
      id: 228,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/228.png',
      types: ['dark', 'fire'],
      weaknesses: [
        'dark: 0.5x',
        'fighting: 2x',
        'fire: 0.5x',
        'ghost: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'psychic: 0x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 30, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'houndoom') {
    const data = {
      name: 'houndoom',
      abilities: ['early-bird', 'flash-fire', 'unnerve'],
      id: 229,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/229.png',
      types: ['dark', 'fire'],
      weaknesses: [
        'dark: 0.5x',
        'fighting: 2x',
        'fire: 0.5x',
        'ghost: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'psychic: 0x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'houndoom-mega') {
    const data = {
      name: 'houndoom-mega',
      abilities: ['solar-power', ,],
      id: 10048,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10048.png',
      types: ['dark', 'fire'],
      weaknesses: [
        'dark: 0.5x',
        'fighting: 2x',
        'fire: 0.5x',
        'ghost: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'psychic: 0x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 140, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 115, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'kingdra') {
    const data = {
      name: 'kingdra',
      abilities: ['swift-swim', 'sniper', 'damp'],
      id: 230,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/230.png',
      types: ['water', 'dragon'],
      weaknesses: [
        'dragon: 2x',
        'fairy: 2x',
        'fire: 0.25x',
        'steel: 0.5x',
        'water: 0.25x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'phanpy') {
    const data = {
      name: 'phanpy',
      abilities: ['pickup', 'sand-veil'],
      id: 231,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/231.png',
      types: ['ground'],
      weaknesses: [
        'electric: 0x',
        'grass: 2x',
        'ice: 2x',
        'poison: 0.5x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'donphan') {
    const data = {
      name: 'donphan',
      abilities: ['sturdy', 'sand-veil'],
      id: 232,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/232.png',
      types: ['ground'],
      weaknesses: [
        'electric: 0x',
        'grass: 2x',
        'ice: 2x',
        'poison: 0.5x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 120, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'porygon2') {
    const data = {
      name: 'porygon2',
      abilities: ['trace', 'download', 'analytic'],
      id: 233,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/233.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 85, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'stantler') {
    const data = {
      name: 'stantler',
      abilities: ['intimidate', 'frisk', 'sap-sipper'],
      id: 234,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/234.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 73, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 62, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'smeargle') {
    const data = {
      name: 'smeargle',
      abilities: ['own-tempo', 'technician', 'moody'],
      id: 235,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/235.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 20, name: 'ATT' },
        { stat: 35, name: 'DEF' },
        { stat: 20, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 75, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tyrogue') {
    const data = {
      name: 'tyrogue',
      abilities: ['guts', 'steadfast', 'vital-spirit'],
      id: 236,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/236.png',
      types: ['fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'flying: 2x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 35, name: 'HP' },
        { stat: 35, name: 'ATT' },
        { stat: 35, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 35, name: 'SPD' },
        { stat: 35, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'hitmontop') {
    const data = {
      name: 'hitmontop',
      abilities: ['intimidate', 'technician', 'steadfast'],
      id: 237,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/237.png',
      types: ['fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'flying: 2x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'smoochum') {
    const data = {
      name: 'smoochum',
      abilities: ['oblivious', 'forewarn', 'hydration'],
      id: 238,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/238.png',
      types: ['ice', 'psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fire: 2x',
        'ghost: 2x',
        'ice: 0.5x',
        'psychic: 0.5x',
        'rock: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 30, name: 'ATT' },
        { stat: 15, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'elekid') {
    const data = {
      name: 'elekid',
      abilities: ['static', 'vital-spirit'],
      id: 239,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/239.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 63, name: 'ATT' },
        { stat: 37, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'magby') {
    const data = {
      name: 'magby',
      abilities: ['flame-body', 'vital-spirit'],
      id: 240,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/240.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 37, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 83, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'miltank') {
    const data = {
      name: 'miltank',
      abilities: ['thick-fat', 'scrappy', 'sap-sipper'],
      id: 241,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/241.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 95, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 105, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'blissey') {
    const data = {
      name: 'blissey',
      abilities: ['natural-cure', 'serene-grace', 'healer'],
      id: 242,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/242.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 255, name: 'HP' },
        { stat: 10, name: 'ATT' },
        { stat: 10, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 135, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'raikou') {
    const data = {
      name: 'raikou',
      abilities: ['pressure', 'inner-focus'],
      id: 243,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/243.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 115, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 115, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'entei') {
    const data = {
      name: 'entei',
      abilities: ['pressure', 'inner-focus'],
      id: 244,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/244.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 115, name: 'HP' },
        { stat: 115, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'suicune') {
    const data = {
      name: 'suicune',
      abilities: ['pressure', 'inner-focus'],
      id: 245,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/245.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 115, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 115, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'larvitar') {
    const data = {
      name: 'larvitar',
      abilities: ['guts', 'sand-veil'],
      id: 246,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/246.png',
      types: ['rock', 'ground'],
      weaknesses: [
        'electric: 0x',
        'fighting: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 4x',
        'ground: 2x',
        'ice: 2x',
        'normal: 0.5x',
        'poison: 0.25x',
        'rock: 0.5x',
        'steel: 2x',
        'water: 4x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 64, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 41, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'pupitar') {
    const data = {
      name: 'pupitar',
      abilities: ['shed-skin', ,],
      id: 247,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/247.png',
      types: ['rock', 'ground'],
      weaknesses: [
        'electric: 0x',
        'fighting: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 4x',
        'ground: 2x',
        'ice: 2x',
        'normal: 0.5x',
        'poison: 0.25x',
        'rock: 0.5x',
        'steel: 2x',
        'water: 4x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 84, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 51, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tyranitar') {
    const data = {
      name: 'tyranitar',
      abilities: ['sand-stream', 'unnerve'],
      id: 248,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/248.png',
      types: ['rock', 'dark'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 4x',
        'fire: 0.5x',
        'flying: 0.5x',
        'ghost: 0.5x',
        'grass: 2x',
        'ground: 2x',
        'normal: 0.5x',
        'poison: 0.5x',
        'psychic: 0x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 134, name: 'ATT' },
        { stat: 110, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 61, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tyranitar-mega') {
    const data = {
      name: 'tyranitar-mega',
      abilities: ['sand-stream', ,],
      id: 10049,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10049.png',
      types: ['rock', 'dark'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 4x',
        'fire: 0.5x',
        'flying: 0.5x',
        'ghost: 0.5x',
        'grass: 2x',
        'ground: 2x',
        'normal: 0.5x',
        'poison: 0.5x',
        'psychic: 0x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 164, name: 'ATT' },
        { stat: 150, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 120, name: 'SPD' },
        { stat: 71, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'lugia') {
    const data = {
      name: 'lugia',
      abilities: ['pressure', 'multiscale'],
      id: 249,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png',
      types: ['psychic', 'flying'],
      weaknesses: [
        'dark: 2x',
        'electric: 2x',
        'fighting: 0.25x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'psychic: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 106, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 130, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 154, name: 'SPD' },
        { stat: 110, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'ho-oh') {
    const data = {
      name: 'ho-oh',
      abilities: ['pressure', 'regenerator'],
      id: 250,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/250.png',
      types: ['fire', 'flying'],
      weaknesses: [
        'bug: 0.25x',
        'electric: 2x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'grass: 0.25x',
        'ground: 0x',
        'rock: 4x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 106, name: 'HP' },
        { stat: 130, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 154, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'celebi') {
    const data = {
      name: 'celebi',
      abilities: ['natural-cure', ,],
      id: 251,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/251.png',
      types: ['psychic', 'grass'],
      weaknesses: [
        'bug: 4x',
        'dark: 2x',
        'electric: 0.5x',
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'psychic: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'treecko') {
    const data = {
      name: 'treecko',
      abilities: ['overgrow', 'unburden'],
      id: 252,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/252.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 35, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'grovyle') {
    const data = {
      name: 'grovyle',
      abilities: ['overgrow', 'unburden'],
      id: 253,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/253.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sceptile') {
    const data = {
      name: 'sceptile',
      abilities: ['overgrow', 'unburden'],
      id: 254,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/254.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 120, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sceptile-mega') {
    const data = {
      name: 'sceptile-mega',
      abilities: ['lightning-rod', ,],
      id: 10065,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10065.png',
      types: ['grass', 'dragon'],
      weaknesses: [
        'bug: 2x',
        'dragon: 2x',
        'electric: 0.25x',
        'fairy: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ground: 0.5x',
        'ice: 4x',
        'poison: 2x',
        'water: 0.25x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 110, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 145, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 145, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'torchic') {
    const data = {
      name: 'torchic',
      abilities: ['blaze', 'speed-boost'],
      id: 255,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/255.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'combusken') {
    const data = {
      name: 'combusken',
      abilities: ['blaze', 'speed-boost'],
      id: 256,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/256.png',
      types: ['fire', 'fighting'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 0.5x',
        'fire: 0.5x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'psychic: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'blaziken') {
    const data = {
      name: 'blaziken',
      abilities: ['blaze', 'speed-boost'],
      id: 257,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/257.png',
      types: ['fire', 'fighting'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 0.5x',
        'fire: 0.5x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'psychic: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'blaziken-mega') {
    const data = {
      name: 'blaziken-mega',
      abilities: ['speed-boost', ,],
      id: 10050,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10050.png',
      types: ['fire', 'fighting'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 0.5x',
        'fire: 0.5x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'psychic: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 160, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 130, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mudkip') {
    const data = {
      name: 'mudkip',
      abilities: ['torrent', 'damp'],
      id: 258,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/258.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'marshtomp') {
    const data = {
      name: 'marshtomp',
      abilities: ['torrent', 'damp'],
      id: 259,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/259.png',
      types: ['water', 'ground'],
      weaknesses: [
        'electric: 0x',
        'fire: 0.5x',
        'grass: 4x',
        'poison: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'swampert') {
    const data = {
      name: 'swampert',
      abilities: ['torrent', 'damp'],
      id: 260,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/260.png',
      types: ['water', 'ground'],
      weaknesses: [
        'electric: 0x',
        'fire: 0.5x',
        'grass: 4x',
        'poison: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 110, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'swampert-mega') {
    const data = {
      name: 'swampert-mega',
      abilities: ['swift-swim', ,],
      id: 10064,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10064.png',
      types: ['water', 'ground'],
      weaknesses: [
        'electric: 0x',
        'fire: 0.5x',
        'grass: 4x',
        'poison: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 150, name: 'ATT' },
        { stat: 110, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'poochyena') {
    const data = {
      name: 'poochyena',
      abilities: ['run-away', 'quick-feet', 'rattled'],
      id: 261,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/261.png',
      types: ['dark'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'ghost: 0.5x',
        'psychic: 0x',
      ],
      stats: [
        { stat: 35, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 35, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 30, name: 'SPD' },
        { stat: 35, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mightyena') {
    const data = {
      name: 'mightyena',
      abilities: ['intimidate', 'quick-feet', 'moxie'],
      id: 262,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/262.png',
      types: ['dark'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'ghost: 0.5x',
        'psychic: 0x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'zigzagoon') {
    const data = {
      name: 'zigzagoon',
      abilities: ['pickup', 'gluttony', 'quick-feet'],
      id: 263,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/263.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 38, name: 'HP' },
        { stat: 30, name: 'ATT' },
        { stat: 41, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 41, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'linoone') {
    const data = {
      name: 'linoone',
      abilities: ['pickup', 'gluttony', 'quick-feet'],
      id: 264,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/264.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 78, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 61, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 61, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'wurmple') {
    const data = {
      name: 'wurmple',
      abilities: ['shield-dust', 'run-away'],
      id: 265,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/265.png',
      types: ['bug'],
      weaknesses: [
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 35, name: 'DEF' },
        { stat: 20, name: 'SPA' },
        { stat: 30, name: 'SPD' },
        { stat: 20, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'silcoon') {
    const data = {
      name: 'silcoon',
      abilities: ['shed-skin', ,],
      id: 266,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/266.png',
      types: ['bug'],
      weaknesses: [
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 35, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 25, name: 'SPA' },
        { stat: 25, name: 'SPD' },
        { stat: 15, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'beautifly') {
    const data = {
      name: 'beautifly',
      abilities: ['swarm', 'rivalry'],
      id: 267,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/267.png',
      types: ['bug', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 2x',
        'rock: 4x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cascoon') {
    const data = {
      name: 'cascoon',
      abilities: ['shed-skin', ,],
      id: 268,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/268.png',
      types: ['bug'],
      weaknesses: [
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 35, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 25, name: 'SPA' },
        { stat: 25, name: 'SPD' },
        { stat: 15, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'dustox') {
    const data = {
      name: 'dustox',
      abilities: ['shield-dust', 'compound-eyes'],
      id: 269,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/269.png',
      types: ['bug', 'poison'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'poison: 0.5x',
        'psychic: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'lotad') {
    const data = {
      name: 'lotad',
      abilities: ['swift-swim', 'rain-dish', 'own-tempo'],
      id: 270,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/270.png',
      types: ['water', 'grass'],
      weaknesses: [
        'bug: 2x',
        'flying: 2x',
        'ground: 0.5x',
        'poison: 2x',
        'steel: 0.5x',
        'water: 0.25x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 30, name: 'ATT' },
        { stat: 30, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'lombre') {
    const data = {
      name: 'lombre',
      abilities: ['swift-swim', 'rain-dish', 'own-tempo'],
      id: 271,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/271.png',
      types: ['water', 'grass'],
      weaknesses: [
        'bug: 2x',
        'flying: 2x',
        'ground: 0.5x',
        'poison: 2x',
        'steel: 0.5x',
        'water: 0.25x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'ludicolo') {
    const data = {
      name: 'ludicolo',
      abilities: ['swift-swim', 'rain-dish', 'own-tempo'],
      id: 272,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/272.png',
      types: ['water', 'grass'],
      weaknesses: [
        'bug: 2x',
        'flying: 2x',
        'ground: 0.5x',
        'poison: 2x',
        'steel: 0.5x',
        'water: 0.25x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'seedot') {
    const data = {
      name: 'seedot',
      abilities: ['chlorophyll', 'early-bird', 'pickpocket'],
      id: 273,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/273.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 40, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 30, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'nuzleaf') {
    const data = {
      name: 'nuzleaf',
      abilities: ['chlorophyll', 'early-bird', 'pickpocket'],
      id: 274,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/274.png',
      types: ['grass', 'dark'],
      weaknesses: [
        'bug: 4x',
        'dark: 0.5x',
        'electric: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 2x',
        'ghost: 0.5x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'psychic: 0x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'shiftry') {
    const data = {
      name: 'shiftry',
      abilities: ['chlorophyll', 'wind-rider', 'pickpocket'],
      id: 275,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/275.png',
      types: ['grass', 'dark'],
      weaknesses: [
        'bug: 4x',
        'dark: 0.5x',
        'electric: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 2x',
        'ghost: 0.5x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'psychic: 0x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'taillow') {
    const data = {
      name: 'taillow',
      abilities: ['guts', 'scrappy'],
      id: 276,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/276.png',
      types: ['normal', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 30, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 30, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'swellow') {
    const data = {
      name: 'swellow',
      abilities: ['guts', 'scrappy'],
      id: 277,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/277.png',
      types: ['normal', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 125, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'wingull') {
    const data = {
      name: 'wingull',
      abilities: ['keen-eye', 'hydration', 'rain-dish'],
      id: 278,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/278.png',
      types: ['water', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 4x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'ground: 0x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 30, name: 'ATT' },
        { stat: 30, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 30, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'pelipper') {
    const data = {
      name: 'pelipper',
      abilities: ['keen-eye', 'drizzle', 'rain-dish'],
      id: 279,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/279.png',
      types: ['water', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 4x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'ground: 0x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'ralts') {
    const data = {
      name: 'ralts',
      abilities: ['synchronize', 'trace', 'telepathy'],
      id: 280,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/280.png',
      types: ['psychic', 'fairy'],
      weaknesses: [
        'dragon: 0x',
        'fighting: 0.25x',
        'ghost: 2x',
        'poison: 2x',
        'psychic: 0.5x',
        'steel: 2x',
      ],
      stats: [
        { stat: 28, name: 'HP' },
        { stat: 25, name: 'ATT' },
        { stat: 25, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 35, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'kirlia') {
    const data = {
      name: 'kirlia',
      abilities: ['synchronize', 'trace', 'telepathy'],
      id: 281,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/281.png',
      types: ['psychic', 'fairy'],
      weaknesses: [
        'dragon: 0x',
        'fighting: 0.25x',
        'ghost: 2x',
        'poison: 2x',
        'psychic: 0.5x',
        'steel: 2x',
      ],
      stats: [
        { stat: 38, name: 'HP' },
        { stat: 35, name: 'ATT' },
        { stat: 35, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gardevoir') {
    const data = {
      name: 'gardevoir',
      abilities: ['synchronize', 'trace', 'telepathy'],
      id: 282,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/282.png',
      types: ['psychic', 'fairy'],
      weaknesses: [
        'dragon: 0x',
        'fighting: 0.25x',
        'ghost: 2x',
        'poison: 2x',
        'psychic: 0.5x',
        'steel: 2x',
      ],
      stats: [
        { stat: 68, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 115, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gardevoir-mega') {
    const data = {
      name: 'gardevoir-mega',
      abilities: ['pixilate', ,],
      id: 10051,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10051.png',
      types: ['psychic', 'fairy'],
      weaknesses: [
        'dragon: 0x',
        'fighting: 0.25x',
        'ghost: 2x',
        'poison: 2x',
        'psychic: 0.5x',
        'steel: 2x',
      ],
      stats: [
        { stat: 68, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 165, name: 'SPA' },
        { stat: 135, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'surskit') {
    const data = {
      name: 'surskit',
      abilities: ['swift-swim', 'rain-dish'],
      id: 283,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/283.png',
      types: ['bug', 'water'],
      weaknesses: [
        'electric: 2x',
        'fighting: 0.5x',
        'flying: 2x',
        'ground: 0.5x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 30, name: 'ATT' },
        { stat: 32, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 52, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'masquerain') {
    const data = {
      name: 'masquerain',
      abilities: ['intimidate', 'unnerve'],
      id: 284,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/284.png',
      types: ['bug', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 2x',
        'rock: 4x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 62, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 82, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'shroomish') {
    const data = {
      name: 'shroomish',
      abilities: ['effect-spore', 'poison-heal', 'quick-feet'],
      id: 285,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/285.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 40, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 35, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'breloom') {
    const data = {
      name: 'breloom',
      abilities: ['effect-spore', 'poison-heal', 'technician'],
      id: 286,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/286.png',
      types: ['grass', 'fighting'],
      weaknesses: [
        'dark: 0.5x',
        'electric: 0.5x',
        'fairy: 2x',
        'fire: 2x',
        'flying: 4x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'psychic: 2x',
        'rock: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 130, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'slakoth') {
    const data = {
      name: 'slakoth',
      abilities: ['truant', ,],
      id: 287,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/287.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 35, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'vigoroth') {
    const data = {
      name: 'vigoroth',
      abilities: ['vital-spirit', ,],
      id: 288,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/288.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'slaking') {
    const data = {
      name: 'slaking',
      abilities: ['truant', ,],
      id: 289,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/289.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 150, name: 'HP' },
        { stat: 160, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'nincada') {
    const data = {
      name: 'nincada',
      abilities: ['compound-eyes', 'run-away'],
      id: 290,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/290.png',
      types: ['bug', 'ground'],
      weaknesses: [
        'electric: 0x',
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 31, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 30, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'ninjask') {
    const data = {
      name: 'ninjask',
      abilities: ['speed-boost', 'infiltrator'],
      id: 291,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/291.png',
      types: ['bug', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 2x',
        'rock: 4x',
      ],
      stats: [
        { stat: 61, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 160, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'shedinja') {
    const data = {
      name: 'shedinja',
      abilities: ['wonder-guard', ,],
      id: 292,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/292.png',
      types: ['bug', 'ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'fighting: 0x',
        'fire: 2x',
        'flying: 2x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'normal: 0x',
        'poison: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 1, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 30, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'whismur') {
    const data = {
      name: 'whismur',
      abilities: ['soundproof', 'rattled'],
      id: 293,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/293.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 64, name: 'HP' },
        { stat: 51, name: 'ATT' },
        { stat: 23, name: 'DEF' },
        { stat: 51, name: 'SPA' },
        { stat: 23, name: 'SPD' },
        { stat: 28, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'loudred') {
    const data = {
      name: 'loudred',
      abilities: ['soundproof', 'scrappy'],
      id: 294,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/294.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 84, name: 'HP' },
        { stat: 71, name: 'ATT' },
        { stat: 43, name: 'DEF' },
        { stat: 71, name: 'SPA' },
        { stat: 43, name: 'SPD' },
        { stat: 48, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'exploud') {
    const data = {
      name: 'exploud',
      abilities: ['soundproof', 'scrappy'],
      id: 295,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/295.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 104, name: 'HP' },
        { stat: 91, name: 'ATT' },
        { stat: 63, name: 'DEF' },
        { stat: 91, name: 'SPA' },
        { stat: 73, name: 'SPD' },
        { stat: 68, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'makuhita') {
    const data = {
      name: 'makuhita',
      abilities: ['thick-fat', 'guts', 'sheer-force'],
      id: 296,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/296.png',
      types: ['fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'flying: 2x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 72, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 30, name: 'DEF' },
        { stat: 20, name: 'SPA' },
        { stat: 30, name: 'SPD' },
        { stat: 25, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'hariyama') {
    const data = {
      name: 'hariyama',
      abilities: ['thick-fat', 'guts', 'sheer-force'],
      id: 297,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/297.png',
      types: ['fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'flying: 2x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 144, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'azurill') {
    const data = {
      name: 'azurill',
      abilities: ['thick-fat', 'huge-power', 'sap-sipper'],
      id: 298,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/298.png',
      types: ['normal', 'fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'ghost: 0x',
        'poison: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 20, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 20, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 20, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'nosepass') {
    const data = {
      name: 'nosepass',
      abilities: ['sturdy', 'magnet-pull', 'sand-force'],
      id: 299,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/299.png',
      types: ['rock'],
      weaknesses: [
        'fighting: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 2x',
        'ground: 2x',
        'normal: 0.5x',
        'poison: 0.5x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 30, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 135, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'skitty') {
    const data = {
      name: 'skitty',
      abilities: ['cute-charm', 'normalize', 'wonder-skin'],
      id: 300,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/300.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 35, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'delcatty') {
    const data = {
      name: 'delcatty',
      abilities: ['cute-charm', 'normalize', 'wonder-skin'],
      id: 301,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/301.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sableye') {
    const data = {
      name: 'sableye',
      abilities: ['keen-eye', 'stall', 'prankster'],
      id: 302,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/302.png',
      types: ['dark', 'ghost'],
      weaknesses: [
        'fairy: 2x',
        'fighting: 0x',
        'normal: 0x',
        'poison: 0.5x',
        'psychic: 0x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sableye-mega') {
    const data = {
      name: 'sableye-mega',
      abilities: ['magic-bounce', ,],
      id: 10066,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10066.png',
      types: ['dark', 'ghost'],
      weaknesses: [
        'fairy: 2x',
        'fighting: 0x',
        'normal: 0x',
        'poison: 0.5x',
        'psychic: 0x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 125, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 115, name: 'SPD' },
        { stat: 20, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mawile') {
    const data = {
      name: 'mawile',
      abilities: ['hyper-cutter', 'intimidate', 'sheer-force'],
      id: 303,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/303.png',
      types: ['steel', 'fairy'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 0.5x',
        'dragon: 0x',
        'fairy: 0.5x',
        'fire: 2x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mawile-mega') {
    const data = {
      name: 'mawile-mega',
      abilities: ['huge-power', ,],
      id: 10052,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10052.png',
      types: ['steel', 'fairy'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 0.5x',
        'dragon: 0x',
        'fairy: 0.5x',
        'fire: 2x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 105, name: 'ATT' },
        { stat: 125, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'aron') {
    const data = {
      name: 'aron',
      abilities: ['sturdy', 'rock-head', 'heavy-metal'],
      id: 304,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/304.png',
      types: ['steel', 'rock'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fighting: 4x',
        'flying: 0.25x',
        'ground: 4x',
        'ice: 0.5x',
        'normal: 0.25x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'lairon') {
    const data = {
      name: 'lairon',
      abilities: ['sturdy', 'rock-head', 'heavy-metal'],
      id: 305,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/305.png',
      types: ['steel', 'rock'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fighting: 4x',
        'flying: 0.25x',
        'ground: 4x',
        'ice: 0.5x',
        'normal: 0.25x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 140, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'aggron') {
    const data = {
      name: 'aggron',
      abilities: ['sturdy', 'rock-head', 'heavy-metal'],
      id: 306,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/306.png',
      types: ['steel', 'rock'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fighting: 4x',
        'flying: 0.25x',
        'ground: 4x',
        'ice: 0.5x',
        'normal: 0.25x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 110, name: 'ATT' },
        { stat: 180, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'aggron-mega') {
    const data = {
      name: 'aggron-mega',
      abilities: ['filter', ,],
      id: 10053,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10053.png',
      types: ['steel'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 140, name: 'ATT' },
        { stat: 230, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'meditite') {
    const data = {
      name: 'meditite',
      abilities: ['pure-power', 'telepathy'],
      id: 307,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/307.png',
      types: ['fighting', 'psychic'],
      weaknesses: [
        'fairy: 2x',
        'fighting: 0.5x',
        'flying: 2x',
        'ghost: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 30, name: 'HP' },
        { stat: 40, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'medicham') {
    const data = {
      name: 'medicham',
      abilities: ['pure-power', 'telepathy'],
      id: 308,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/308.png',
      types: ['fighting', 'psychic'],
      weaknesses: [
        'fairy: 2x',
        'fighting: 0.5x',
        'flying: 2x',
        'ghost: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'medicham-mega') {
    const data = {
      name: 'medicham-mega',
      abilities: ['pure-power', ,],
      id: 10054,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10054.png',
      types: ['fighting', 'psychic'],
      weaknesses: [
        'fairy: 2x',
        'fighting: 0.5x',
        'flying: 2x',
        'ghost: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'electrike') {
    const data = {
      name: 'electrike',
      abilities: ['static', 'lightning-rod', 'minus'],
      id: 309,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/309.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'manectric') {
    const data = {
      name: 'manectric',
      abilities: ['static', 'lightning-rod', 'minus'],
      id: 310,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/310.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 105, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'manectric-mega') {
    const data = {
      name: 'manectric-mega',
      abilities: ['intimidate', ,],
      id: 10055,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10055.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 135, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 135, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'plusle') {
    const data = {
      name: 'plusle',
      abilities: ['plus', 'lightning-rod'],
      id: 311,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/311.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'minun') {
    const data = {
      name: 'minun',
      abilities: ['minus', 'volt-absorb'],
      id: 312,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/312.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 40, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'volbeat') {
    const data = {
      name: 'volbeat',
      abilities: ['illuminate', 'swarm', 'prankster'],
      id: 313,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/313.png',
      types: ['bug'],
      weaknesses: [
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 73, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 47, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'illumise') {
    const data = {
      name: 'illumise',
      abilities: ['oblivious', 'tinted-lens', 'prankster'],
      id: 314,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/314.png',
      types: ['bug'],
      weaknesses: [
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 47, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 73, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'roselia') {
    const data = {
      name: 'roselia',
      abilities: ['natural-cure', 'poison-point', 'leaf-guard'],
      id: 315,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/315.png',
      types: ['grass', 'poison'],
      weaknesses: [
        'electric: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ice: 2x',
        'psychic: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gulpin') {
    const data = {
      name: 'gulpin',
      abilities: ['liquid-ooze', 'sticky-hold', 'gluttony'],
      id: 316,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/316.png',
      types: ['poison'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'poison: 0.5x',
        'psychic: 2x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 43, name: 'ATT' },
        { stat: 53, name: 'DEF' },
        { stat: 43, name: 'SPA' },
        { stat: 53, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'swalot') {
    const data = {
      name: 'swalot',
      abilities: ['liquid-ooze', 'sticky-hold', 'gluttony'],
      id: 317,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/317.png',
      types: ['poison'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'poison: 0.5x',
        'psychic: 2x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 73, name: 'ATT' },
        { stat: 83, name: 'DEF' },
        { stat: 73, name: 'SPA' },
        { stat: 83, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'carvanha') {
    const data = {
      name: 'carvanha',
      abilities: ['rough-skin', 'speed-boost'],
      id: 318,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/318.png',
      types: ['water', 'dark'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'electric: 2x',
        'fairy: 2x',
        'fighting: 2x',
        'fire: 0.5x',
        'ghost: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'psychic: 0x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 20, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 20, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sharpedo') {
    const data = {
      name: 'sharpedo',
      abilities: ['rough-skin', 'speed-boost'],
      id: 319,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/319.png',
      types: ['water', 'dark'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'electric: 2x',
        'fairy: 2x',
        'fighting: 2x',
        'fire: 0.5x',
        'ghost: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'psychic: 0x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sharpedo-mega') {
    const data = {
      name: 'sharpedo-mega',
      abilities: ['strong-jaw', ,],
      id: 10070,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10070.png',
      types: ['water', 'dark'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'electric: 2x',
        'fairy: 2x',
        'fighting: 2x',
        'fire: 0.5x',
        'ghost: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'psychic: 0x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 140, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 105, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'wailmer') {
    const data = {
      name: 'wailmer',
      abilities: ['water-veil', 'oblivious', 'pressure'],
      id: 320,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/320.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 130, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 35, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 35, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'wailord') {
    const data = {
      name: 'wailord',
      abilities: ['water-veil', 'oblivious', 'pressure'],
      id: 321,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/321.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 170, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'numel') {
    const data = {
      name: 'numel',
      abilities: ['oblivious', 'simple', 'own-tempo'],
      id: 322,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/322.png',
      types: ['fire', 'ground'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 0x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'ground: 2x',
        'poison: 0.5x',
        'steel: 0.5x',
        'water: 4x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 35, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'camerupt') {
    const data = {
      name: 'camerupt',
      abilities: ['magma-armor', 'solid-rock', 'anger-point'],
      id: 323,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/323.png',
      types: ['fire', 'ground'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 0x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'ground: 2x',
        'poison: 0.5x',
        'steel: 0.5x',
        'water: 4x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'camerupt-mega') {
    const data = {
      name: 'camerupt-mega',
      abilities: ['sheer-force', ,],
      id: 10087,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10087.png',
      types: ['fire', 'ground'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 0x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'ground: 2x',
        'poison: 0.5x',
        'steel: 0.5x',
        'water: 4x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 145, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 20, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'torkoal') {
    const data = {
      name: 'torkoal',
      abilities: ['white-smoke', 'drought', 'shell-armor'],
      id: 324,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/324.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 140, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 20, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'spoink') {
    const data = {
      name: 'spoink',
      abilities: ['thick-fat', 'own-tempo', 'gluttony'],
      id: 325,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/325.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 25, name: 'ATT' },
        { stat: 35, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'grumpig') {
    const data = {
      name: 'grumpig',
      abilities: ['thick-fat', 'own-tempo', 'gluttony'],
      id: 326,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/326.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'spinda') {
    const data = {
      name: 'spinda',
      abilities: ['own-tempo', 'tangled-feet', 'contrary'],
      id: 327,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/327.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'trapinch') {
    const data = {
      name: 'trapinch',
      abilities: ['hyper-cutter', 'arena-trap', 'sheer-force'],
      id: 328,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/328.png',
      types: ['ground'],
      weaknesses: [
        'electric: 0x',
        'grass: 2x',
        'ice: 2x',
        'poison: 0.5x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 10, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'vibrava') {
    const data = {
      name: 'vibrava',
      abilities: ['levitate', ,],
      id: 329,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/329.png',
      types: ['ground', 'dragon'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0x',
        'fairy: 2x',
        'fire: 0.5x',
        'ice: 4x',
        'poison: 0.5x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'flygon') {
    const data = {
      name: 'flygon',
      abilities: ['levitate', ,],
      id: 330,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/330.png',
      types: ['ground', 'dragon'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0x',
        'fairy: 2x',
        'fire: 0.5x',
        'ice: 4x',
        'poison: 0.5x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cacnea') {
    const data = {
      name: 'cacnea',
      abilities: ['sand-veil', 'water-absorb'],
      id: 331,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/331.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 35, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cacturne') {
    const data = {
      name: 'cacturne',
      abilities: ['sand-veil', 'water-absorb'],
      id: 332,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/332.png',
      types: ['grass', 'dark'],
      weaknesses: [
        'bug: 4x',
        'dark: 0.5x',
        'electric: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 2x',
        'ghost: 0.5x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'psychic: 0x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 115, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 115, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'swablu') {
    const data = {
      name: 'swablu',
      abilities: ['natural-cure', 'cloud-nine'],
      id: 333,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/333.png',
      types: ['normal', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 40, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'altaria') {
    const data = {
      name: 'altaria',
      abilities: ['natural-cure', 'cloud-nine'],
      id: 334,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/334.png',
      types: ['dragon', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 2x',
        'fairy: 2x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 4x',
        'rock: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'altaria-mega') {
    const data = {
      name: 'altaria-mega',
      abilities: ['pixilate', ,],
      id: 10067,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10067.png',
      types: ['dragon', 'fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'electric: 0.5x',
        'fairy: 2x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'steel: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 110, name: 'ATT' },
        { stat: 110, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'zangoose') {
    const data = {
      name: 'zangoose',
      abilities: ['immunity', 'toxic-boost'],
      id: 335,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/335.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 73, name: 'HP' },
        { stat: 115, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'seviper') {
    const data = {
      name: 'seviper',
      abilities: ['shed-skin', 'infiltrator'],
      id: 336,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/336.png',
      types: ['poison'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'poison: 0.5x',
        'psychic: 2x',
      ],
      stats: [
        { stat: 73, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'lunatone') {
    const data = {
      name: 'lunatone',
      abilities: ['levitate', ,],
      id: 337,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/337.png',
      types: ['rock', 'psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'ghost: 2x',
        'grass: 2x',
        'ground: 2x',
        'normal: 0.5x',
        'poison: 0.5x',
        'psychic: 0.5x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'solrock') {
    const data = {
      name: 'solrock',
      abilities: ['levitate', ,],
      id: 338,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/338.png',
      types: ['rock', 'psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'ghost: 2x',
        'grass: 2x',
        'ground: 2x',
        'normal: 0.5x',
        'poison: 0.5x',
        'psychic: 0.5x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'barboach') {
    const data = {
      name: 'barboach',
      abilities: ['oblivious', 'anticipation', 'hydration'],
      id: 339,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/339.png',
      types: ['water', 'ground'],
      weaknesses: [
        'electric: 0x',
        'fire: 0.5x',
        'grass: 4x',
        'poison: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 48, name: 'ATT' },
        { stat: 43, name: 'DEF' },
        { stat: 46, name: 'SPA' },
        { stat: 41, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'whiscash') {
    const data = {
      name: 'whiscash',
      abilities: ['oblivious', 'anticipation', 'hydration'],
      id: 340,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/340.png',
      types: ['water', 'ground'],
      weaknesses: [
        'electric: 0x',
        'fire: 0.5x',
        'grass: 4x',
        'poison: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 110, name: 'HP' },
        { stat: 78, name: 'ATT' },
        { stat: 73, name: 'DEF' },
        { stat: 76, name: 'SPA' },
        { stat: 71, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'corphish') {
    const data = {
      name: 'corphish',
      abilities: ['hyper-cutter', 'shell-armor', 'adaptability'],
      id: 341,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/341.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 43, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 35, name: 'SPD' },
        { stat: 35, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'crawdaunt') {
    const data = {
      name: 'crawdaunt',
      abilities: ['hyper-cutter', 'shell-armor', 'adaptability'],
      id: 342,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/342.png',
      types: ['water', 'dark'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'electric: 2x',
        'fairy: 2x',
        'fighting: 2x',
        'fire: 0.5x',
        'ghost: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'psychic: 0x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 63, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'baltoy') {
    const data = {
      name: 'baltoy',
      abilities: ['levitate', ,],
      id: 343,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/343.png',
      types: ['ground', 'psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'electric: 0x',
        'fighting: 0.5x',
        'ghost: 2x',
        'grass: 2x',
        'ice: 2x',
        'poison: 0.5x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 40, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'claydol') {
    const data = {
      name: 'claydol',
      abilities: ['levitate', ,],
      id: 344,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/344.png',
      types: ['ground', 'psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'electric: 0x',
        'fighting: 0.5x',
        'ghost: 2x',
        'grass: 2x',
        'ice: 2x',
        'poison: 0.5x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 105, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 120, name: 'SPD' },
        { stat: 75, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'lileep') {
    const data = {
      name: 'lileep',
      abilities: ['suction-cups', 'storm-drain'],
      id: 345,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/345.png',
      types: ['rock', 'grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fighting: 2x',
        'ice: 2x',
        'normal: 0.5x',
        'steel: 2x',
      ],
      stats: [
        { stat: 66, name: 'HP' },
        { stat: 41, name: 'ATT' },
        { stat: 77, name: 'DEF' },
        { stat: 61, name: 'SPA' },
        { stat: 87, name: 'SPD' },
        { stat: 23, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cradily') {
    const data = {
      name: 'cradily',
      abilities: ['suction-cups', 'storm-drain'],
      id: 346,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/346.png',
      types: ['rock', 'grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fighting: 2x',
        'ice: 2x',
        'normal: 0.5x',
        'steel: 2x',
      ],
      stats: [
        { stat: 86, name: 'HP' },
        { stat: 81, name: 'ATT' },
        { stat: 97, name: 'DEF' },
        { stat: 81, name: 'SPA' },
        { stat: 107, name: 'SPD' },
        { stat: 43, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'anorith') {
    const data = {
      name: 'anorith',
      abilities: ['battle-armor', 'swift-swim'],
      id: 347,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/347.png',
      types: ['rock', 'bug'],
      weaknesses: [
        'normal: 0.5x',
        'poison: 0.5x',
        'rock: 2x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 75, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'armaldo') {
    const data = {
      name: 'armaldo',
      abilities: ['battle-armor', 'swift-swim'],
      id: 348,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/348.png',
      types: ['rock', 'bug'],
      weaknesses: [
        'normal: 0.5x',
        'poison: 0.5x',
        'rock: 2x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 125, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'feebas') {
    const data = {
      name: 'feebas',
      abilities: ['swift-swim', 'oblivious', 'adaptability'],
      id: 349,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/349.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 20, name: 'HP' },
        { stat: 15, name: 'ATT' },
        { stat: 20, name: 'DEF' },
        { stat: 10, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'milotic') {
    const data = {
      name: 'milotic',
      abilities: ['marvel-scale', 'competitive', 'cute-charm'],
      id: 350,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/350.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 95, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 79, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 125, name: 'SPD' },
        { stat: 81, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'castform') {
    const data = {
      name: 'castform',
      abilities: ['forecast', ,],
      id: 351,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/351.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'kecleon') {
    const data = {
      name: 'kecleon',
      abilities: ['color-change', 'protean'],
      id: 352,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/352.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 120, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'shuppet') {
    const data = {
      name: 'shuppet',
      abilities: ['insomnia', 'frisk', 'cursed-body'],
      id: 353,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/353.png',
      types: ['ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'fighting: 0x',
        'ghost: 2x',
        'normal: 0x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 44, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 35, name: 'DEF' },
        { stat: 63, name: 'SPA' },
        { stat: 33, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'banette') {
    const data = {
      name: 'banette',
      abilities: ['insomnia', 'frisk', 'cursed-body'],
      id: 354,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/354.png',
      types: ['ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'fighting: 0x',
        'ghost: 2x',
        'normal: 0x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 64, name: 'HP' },
        { stat: 115, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 83, name: 'SPA' },
        { stat: 63, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'banette-mega') {
    const data = {
      name: 'banette-mega',
      abilities: ['prankster', ,],
      id: 10056,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10056.png',
      types: ['ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'fighting: 0x',
        'ghost: 2x',
        'normal: 0x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 64, name: 'HP' },
        { stat: 165, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 93, name: 'SPA' },
        { stat: 83, name: 'SPD' },
        { stat: 75, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'duskull') {
    const data = {
      name: 'duskull',
      abilities: ['levitate', 'frisk'],
      id: 355,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/355.png',
      types: ['ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'fighting: 0x',
        'ghost: 2x',
        'normal: 0x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 20, name: 'HP' },
        { stat: 40, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 25, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'dusclops') {
    const data = {
      name: 'dusclops',
      abilities: ['pressure', 'frisk'],
      id: 356,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/356.png',
      types: ['ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'fighting: 0x',
        'ghost: 2x',
        'normal: 0x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 130, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 130, name: 'SPD' },
        { stat: 25, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tropius') {
    const data = {
      name: 'tropius',
      abilities: ['chlorophyll', 'solar-power', 'harvest'],
      id: 357,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/357.png',
      types: ['grass', 'flying'],
      weaknesses: [
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 4x',
        'poison: 2x',
        'rock: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 99, name: 'HP' },
        { stat: 68, name: 'ATT' },
        { stat: 83, name: 'DEF' },
        { stat: 72, name: 'SPA' },
        { stat: 87, name: 'SPD' },
        { stat: 51, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'chimecho') {
    const data = {
      name: 'chimecho',
      abilities: ['levitate', ,],
      id: 358,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/358.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'absol') {
    const data = {
      name: 'absol',
      abilities: ['pressure', 'super-luck', 'justified'],
      id: 359,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/359.png',
      types: ['dark'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'ghost: 0.5x',
        'psychic: 0x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 130, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 75, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'absol-mega') {
    const data = {
      name: 'absol-mega',
      abilities: ['magic-bounce', ,],
      id: 10057,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10057.png',
      types: ['dark'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'ghost: 0.5x',
        'psychic: 0x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 150, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 115, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 115, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'wynaut') {
    const data = {
      name: 'wynaut',
      abilities: ['shadow-tag', 'telepathy'],
      id: 360,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/360.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 95, name: 'HP' },
        { stat: 23, name: 'ATT' },
        { stat: 48, name: 'DEF' },
        { stat: 23, name: 'SPA' },
        { stat: 48, name: 'SPD' },
        { stat: 23, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'snorunt') {
    const data = {
      name: 'snorunt',
      abilities: ['inner-focus', 'ice-body', 'moody'],
      id: 361,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/361.png',
      types: ['ice'],
      weaknesses: [
        'fighting: 2x',
        'fire: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'glalie') {
    const data = {
      name: 'glalie',
      abilities: ['inner-focus', 'ice-body', 'moody'],
      id: 362,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/362.png',
      types: ['ice'],
      weaknesses: [
        'fighting: 2x',
        'fire: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'glalie-mega') {
    const data = {
      name: 'glalie-mega',
      abilities: ['refrigerate', ,],
      id: 10074,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10074.png',
      types: ['ice'],
      weaknesses: [
        'fighting: 2x',
        'fire: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 120, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'spheal') {
    const data = {
      name: 'spheal',
      abilities: ['thick-fat', 'ice-body', 'oblivious'],
      id: 363,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/363.png',
      types: ['ice', 'water'],
      weaknesses: [
        'electric: 2x',
        'fighting: 2x',
        'grass: 2x',
        'ice: 0.25x',
        'rock: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 40, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 25, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sealeo') {
    const data = {
      name: 'sealeo',
      abilities: ['thick-fat', 'ice-body', 'oblivious'],
      id: 364,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/364.png',
      types: ['ice', 'water'],
      weaknesses: [
        'electric: 2x',
        'fighting: 2x',
        'grass: 2x',
        'ice: 0.25x',
        'rock: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'walrein') {
    const data = {
      name: 'walrein',
      abilities: ['thick-fat', 'ice-body', 'oblivious'],
      id: 365,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/365.png',
      types: ['ice', 'water'],
      weaknesses: [
        'electric: 2x',
        'fighting: 2x',
        'grass: 2x',
        'ice: 0.25x',
        'rock: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 110, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'clamperl') {
    const data = {
      name: 'clamperl',
      abilities: ['shell-armor', 'rattled'],
      id: 366,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/366.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 35, name: 'HP' },
        { stat: 64, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 74, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 32, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'huntail') {
    const data = {
      name: 'huntail',
      abilities: ['swift-swim', 'water-veil'],
      id: 367,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/367.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 104, name: 'ATT' },
        { stat: 105, name: 'DEF' },
        { stat: 94, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 52, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gorebyss') {
    const data = {
      name: 'gorebyss',
      abilities: ['swift-swim', 'hydration'],
      id: 368,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/368.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 84, name: 'ATT' },
        { stat: 105, name: 'DEF' },
        { stat: 114, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 52, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'relicanth') {
    const data = {
      name: 'relicanth',
      abilities: ['swift-swim', 'rock-head', 'sturdy'],
      id: 369,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/369.png',
      types: ['water', 'rock'],
      weaknesses: [
        'electric: 2x',
        'fighting: 2x',
        'fire: 0.25x',
        'flying: 0.5x',
        'grass: 4x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 130, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'luvdisc') {
    const data = {
      name: 'luvdisc',
      abilities: ['swift-swim', 'hydration'],
      id: 370,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/370.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 43, name: 'HP' },
        { stat: 30, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 97, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'bagon') {
    const data = {
      name: 'bagon',
      abilities: ['rock-head', 'sheer-force'],
      id: 371,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/371.png',
      types: ['dragon'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ice: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 30, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'shelgon') {
    const data = {
      name: 'shelgon',
      abilities: ['rock-head', 'overcoat'],
      id: 372,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/372.png',
      types: ['dragon'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ice: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'salamence') {
    const data = {
      name: 'salamence',
      abilities: ['intimidate', 'moxie'],
      id: 373,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/373.png',
      types: ['dragon', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 2x',
        'fairy: 2x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 4x',
        'rock: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 95, name: 'HP' },
        { stat: 135, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'salamence-mega') {
    const data = {
      name: 'salamence-mega',
      abilities: ['aerilate', ,],
      id: 10089,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10089.png',
      types: ['dragon', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 2x',
        'fairy: 2x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 4x',
        'rock: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 95, name: 'HP' },
        { stat: 145, name: 'ATT' },
        { stat: 130, name: 'DEF' },
        { stat: 120, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 120, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'beldum') {
    const data = {
      name: 'beldum',
      abilities: ['clear-body', 'light-metal'],
      id: 374,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/374.png',
      types: ['steel', 'psychic'],
      weaknesses: [
        'dark: 2x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fire: 2x',
        'flying: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.25x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'metang') {
    const data = {
      name: 'metang',
      abilities: ['clear-body', 'light-metal'],
      id: 375,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/375.png',
      types: ['steel', 'psychic'],
      weaknesses: [
        'dark: 2x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fire: 2x',
        'flying: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.25x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'metagross') {
    const data = {
      name: 'metagross',
      abilities: ['clear-body', 'light-metal'],
      id: 376,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/376.png',
      types: ['steel', 'psychic'],
      weaknesses: [
        'dark: 2x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fire: 2x',
        'flying: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.25x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 135, name: 'ATT' },
        { stat: 130, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'metagross-mega') {
    const data = {
      name: 'metagross-mega',
      abilities: ['tough-claws', ,],
      id: 10076,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10076.png',
      types: ['steel', 'psychic'],
      weaknesses: [
        'dark: 2x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fire: 2x',
        'flying: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.25x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 145, name: 'ATT' },
        { stat: 150, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 110, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'regirock') {
    const data = {
      name: 'regirock',
      abilities: ['clear-body', 'sturdy'],
      id: 377,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/377.png',
      types: ['rock'],
      weaknesses: [
        'fighting: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 2x',
        'ground: 2x',
        'normal: 0.5x',
        'poison: 0.5x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 200, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'regice') {
    const data = {
      name: 'regice',
      abilities: ['clear-body', 'ice-body'],
      id: 378,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/378.png',
      types: ['ice'],
      weaknesses: [
        'fighting: 2x',
        'fire: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 200, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'registeel') {
    const data = {
      name: 'registeel',
      abilities: ['clear-body', 'light-metal'],
      id: 379,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/379.png',
      types: ['steel'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 150, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 150, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'latias') {
    const data = {
      name: 'latias',
      abilities: ['levitate', ,],
      id: 380,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/380.png',
      types: ['dragon', 'psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ice: 2x',
        'psychic: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 130, name: 'SPD' },
        { stat: 110, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'latias-mega') {
    const data = {
      name: 'latias-mega',
      abilities: ['levitate', ,],
      id: 10062,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10062.png',
      types: ['dragon', 'psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ice: 2x',
        'psychic: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 120, name: 'DEF' },
        { stat: 140, name: 'SPA' },
        { stat: 150, name: 'SPD' },
        { stat: 110, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'latios') {
    const data = {
      name: 'latios',
      abilities: ['levitate', ,],
      id: 381,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/381.png',
      types: ['dragon', 'psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ice: 2x',
        'psychic: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 130, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 110, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'latios-mega') {
    const data = {
      name: 'latios-mega',
      abilities: ['levitate', ,],
      id: 10063,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10063.png',
      types: ['dragon', 'psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ice: 2x',
        'psychic: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 130, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 160, name: 'SPA' },
        { stat: 120, name: 'SPD' },
        { stat: 110, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'kyogre') {
    const data = {
      name: 'kyogre',
      abilities: ['drizzle', ,],
      id: 382,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/382.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 150, name: 'SPA' },
        { stat: 140, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'kyogre-primal') {
    const data = {
      name: 'kyogre-primal',
      abilities: ['primordial-sea', ,],
      id: 10077,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10077.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 150, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 180, name: 'SPA' },
        { stat: 160, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'groudon') {
    const data = {
      name: 'groudon',
      abilities: ['drought', ,],
      id: 383,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/383.png',
      types: ['ground'],
      weaknesses: [
        'electric: 0x',
        'grass: 2x',
        'ice: 2x',
        'poison: 0.5x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 150, name: 'ATT' },
        { stat: 140, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'groudon-primal') {
    const data = {
      name: 'groudon-primal',
      abilities: ['desolate-land', ,],
      id: 10078,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10078.png',
      types: ['ground', 'fire'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 0x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'ground: 2x',
        'poison: 0.5x',
        'steel: 0.5x',
        'water: 4x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 180, name: 'ATT' },
        { stat: 160, name: 'DEF' },
        { stat: 150, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'rayquaza') {
    const data = {
      name: 'rayquaza',
      abilities: ['air-lock', ,],
      id: 384,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/384.png',
      types: ['dragon', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 2x',
        'fairy: 2x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 4x',
        'rock: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 105, name: 'HP' },
        { stat: 150, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 150, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'rayquaza-mega') {
    const data = {
      name: 'rayquaza-mega',
      abilities: ['delta-stream', ,],
      id: 10079,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10079.png',
      types: ['dragon', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 2x',
        'fairy: 2x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 4x',
        'rock: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 105, name: 'HP' },
        { stat: 180, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 180, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 115, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'jirachi') {
    const data = {
      name: 'jirachi',
      abilities: ['serene-grace', ,],
      id: 385,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/385.png',
      types: ['steel', 'psychic'],
      weaknesses: [
        'dark: 2x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fire: 2x',
        'flying: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.25x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'deoxys-normal') {
    const data = {
      name: 'deoxys-normal',
      abilities: ['pressure', ,],
      id: 386,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/386.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 150, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 150, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 150, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'deoxys-attack') {
    const data = {
      name: 'deoxys-attack',
      abilities: ['pressure', ,],
      id: 10001,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10001.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 180, name: 'ATT' },
        { stat: 20, name: 'DEF' },
        { stat: 180, name: 'SPA' },
        { stat: 20, name: 'SPD' },
        { stat: 150, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'deoxys-defense') {
    const data = {
      name: 'deoxys-defense',
      abilities: ['pressure', ,],
      id: 10002,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10002.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 160, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 160, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'deoxys-speed') {
    const data = {
      name: 'deoxys-speed',
      abilities: ['pressure', ,],
      id: 10003,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10003.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 180, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'turtwig') {
    const data = {
      name: 'turtwig',
      abilities: ['overgrow', 'shell-armor'],
      id: 387,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/387.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 68, name: 'ATT' },
        { stat: 64, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 31, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'grotle') {
    const data = {
      name: 'grotle',
      abilities: ['overgrow', 'shell-armor'],
      id: 388,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/388.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 89, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 36, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'torterra') {
    const data = {
      name: 'torterra',
      abilities: ['overgrow', 'shell-armor'],
      id: 389,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/389.png',
      types: ['grass', 'ground'],
      weaknesses: [
        'bug: 2x',
        'electric: 0x',
        'fire: 2x',
        'flying: 2x',
        'ground: 0.5x',
        'ice: 4x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 95, name: 'HP' },
        { stat: 109, name: 'ATT' },
        { stat: 105, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 56, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'chimchar') {
    const data = {
      name: 'chimchar',
      abilities: ['blaze', 'iron-fist'],
      id: 390,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/390.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 44, name: 'HP' },
        { stat: 58, name: 'ATT' },
        { stat: 44, name: 'DEF' },
        { stat: 58, name: 'SPA' },
        { stat: 44, name: 'SPD' },
        { stat: 61, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'monferno') {
    const data = {
      name: 'monferno',
      abilities: ['blaze', 'iron-fist'],
      id: 391,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/391.png',
      types: ['fire', 'fighting'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 0.5x',
        'fire: 0.5x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'psychic: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 64, name: 'HP' },
        { stat: 78, name: 'ATT' },
        { stat: 52, name: 'DEF' },
        { stat: 78, name: 'SPA' },
        { stat: 52, name: 'SPD' },
        { stat: 81, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'infernape') {
    const data = {
      name: 'infernape',
      abilities: ['blaze', 'iron-fist'],
      id: 392,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/392.png',
      types: ['fire', 'fighting'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 0.5x',
        'fire: 0.5x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'psychic: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 76, name: 'HP' },
        { stat: 104, name: 'ATT' },
        { stat: 71, name: 'DEF' },
        { stat: 104, name: 'SPA' },
        { stat: 71, name: 'SPD' },
        { stat: 108, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'piplup') {
    const data = {
      name: 'piplup',
      abilities: ['torrent', 'competitive'],
      id: 393,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/393.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 53, name: 'HP' },
        { stat: 51, name: 'ATT' },
        { stat: 53, name: 'DEF' },
        { stat: 61, name: 'SPA' },
        { stat: 56, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'prinplup') {
    const data = {
      name: 'prinplup',
      abilities: ['torrent', 'competitive'],
      id: 394,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/394.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 64, name: 'HP' },
        { stat: 66, name: 'ATT' },
        { stat: 68, name: 'DEF' },
        { stat: 81, name: 'SPA' },
        { stat: 76, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'empoleon') {
    const data = {
      name: 'empoleon',
      abilities: ['torrent', 'competitive'],
      id: 395,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/395.png',
      types: ['water', 'steel'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'electric: 2x',
        'fairy: 0.5x',
        'fighting: 2x',
        'flying: 0.5x',
        'ground: 2x',
        'ice: 0.25x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'steel: 0.25x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 84, name: 'HP' },
        { stat: 86, name: 'ATT' },
        { stat: 88, name: 'DEF' },
        { stat: 111, name: 'SPA' },
        { stat: 101, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'starly') {
    const data = {
      name: 'starly',
      abilities: ['keen-eye', 'reckless'],
      id: 396,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/396.png',
      types: ['normal', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 30, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 30, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'staravia') {
    const data = {
      name: 'staravia',
      abilities: ['intimidate', 'reckless'],
      id: 397,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/397.png',
      types: ['normal', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'staraptor') {
    const data = {
      name: 'staraptor',
      abilities: ['intimidate', 'reckless'],
      id: 398,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/398.png',
      types: ['normal', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 85, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'bidoof') {
    const data = {
      name: 'bidoof',
      abilities: ['simple', 'unaware', 'moody'],
      id: 399,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/399.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 59, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 31, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'bibarel') {
    const data = {
      name: 'bibarel',
      abilities: ['simple', 'unaware', 'moody'],
      id: 400,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/400.png',
      types: ['normal', 'water'],
      weaknesses: [
        'electric: 2x',
        'fighting: 2x',
        'fire: 0.5x',
        'ghost: 0x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 79, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 71, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'kricketot') {
    const data = {
      name: 'kricketot',
      abilities: ['shed-skin', 'run-away'],
      id: 401,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/401.png',
      types: ['bug'],
      weaknesses: [
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 37, name: 'HP' },
        { stat: 25, name: 'ATT' },
        { stat: 41, name: 'DEF' },
        { stat: 25, name: 'SPA' },
        { stat: 41, name: 'SPD' },
        { stat: 25, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'kricketune') {
    const data = {
      name: 'kricketune',
      abilities: ['swarm', 'technician'],
      id: 402,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/402.png',
      types: ['bug'],
      weaknesses: [
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 77, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 51, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 51, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'shinx') {
    const data = {
      name: 'shinx',
      abilities: ['rivalry', 'intimidate', 'guts'],
      id: 403,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/403.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 34, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 34, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'luxio') {
    const data = {
      name: 'luxio',
      abilities: ['rivalry', 'intimidate', 'guts'],
      id: 404,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/404.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 49, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 49, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'luxray') {
    const data = {
      name: 'luxray',
      abilities: ['rivalry', 'intimidate', 'guts'],
      id: 405,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/405.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 79, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 79, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'budew') {
    const data = {
      name: 'budew',
      abilities: ['natural-cure', 'poison-point', 'leaf-guard'],
      id: 406,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/406.png',
      types: ['grass', 'poison'],
      weaknesses: [
        'electric: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ice: 2x',
        'psychic: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 30, name: 'ATT' },
        { stat: 35, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'roserade') {
    const data = {
      name: 'roserade',
      abilities: ['natural-cure', 'poison-point', 'technician'],
      id: 407,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/407.png',
      types: ['grass', 'poison'],
      weaknesses: [
        'electric: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ice: 2x',
        'psychic: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cranidos') {
    const data = {
      name: 'cranidos',
      abilities: ['mold-breaker', 'sheer-force'],
      id: 408,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/408.png',
      types: ['rock'],
      weaknesses: [
        'fighting: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 2x',
        'ground: 2x',
        'normal: 0.5x',
        'poison: 0.5x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 67, name: 'HP' },
        { stat: 125, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 30, name: 'SPD' },
        { stat: 58, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'rampardos') {
    const data = {
      name: 'rampardos',
      abilities: ['mold-breaker', 'sheer-force'],
      id: 409,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/409.png',
      types: ['rock'],
      weaknesses: [
        'fighting: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 2x',
        'ground: 2x',
        'normal: 0.5x',
        'poison: 0.5x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 97, name: 'HP' },
        { stat: 165, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 58, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'shieldon') {
    const data = {
      name: 'shieldon',
      abilities: ['sturdy', 'soundproof'],
      id: 410,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/410.png',
      types: ['rock', 'steel'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fighting: 4x',
        'flying: 0.25x',
        'ground: 4x',
        'ice: 0.5x',
        'normal: 0.25x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 30, name: 'HP' },
        { stat: 42, name: 'ATT' },
        { stat: 118, name: 'DEF' },
        { stat: 42, name: 'SPA' },
        { stat: 88, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'bastiodon') {
    const data = {
      name: 'bastiodon',
      abilities: ['sturdy', 'soundproof'],
      id: 411,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/411.png',
      types: ['rock', 'steel'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fighting: 4x',
        'flying: 0.25x',
        'ground: 4x',
        'ice: 0.5x',
        'normal: 0.25x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 52, name: 'ATT' },
        { stat: 168, name: 'DEF' },
        { stat: 47, name: 'SPA' },
        { stat: 138, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'burmy') {
    const data = {
      name: 'burmy',
      abilities: ['shed-skin', 'overcoat'],
      id: 412,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/412.png',
      types: ['bug'],
      weaknesses: [
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 29, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 29, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 36, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'wormadam-plant') {
    const data = {
      name: 'wormadam-plant',
      abilities: ['anticipation', 'overcoat'],
      id: 413,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/413.png',
      types: ['bug', 'grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fighting: 0.5x',
        'fire: 4x',
        'flying: 4x',
        'grass: 0.25x',
        'ground: 0.25x',
        'ice: 2x',
        'poison: 2x',
        'rock: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 59, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 79, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 36, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mothim') {
    const data = {
      name: 'mothim',
      abilities: ['swarm', 'tinted-lens'],
      id: 414,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/414.png',
      types: ['bug', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 2x',
        'rock: 4x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 94, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 94, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 66, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'combee') {
    const data = {
      name: 'combee',
      abilities: ['honey-gather', 'hustle'],
      id: 415,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/415.png',
      types: ['bug', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 2x',
        'rock: 4x',
      ],
      stats: [
        { stat: 30, name: 'HP' },
        { stat: 30, name: 'ATT' },
        { stat: 42, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 42, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'vespiquen') {
    const data = {
      name: 'vespiquen',
      abilities: ['pressure', 'unnerve'],
      id: 416,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/416.png',
      types: ['bug', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 2x',
        'rock: 4x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 102, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 102, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'pachirisu') {
    const data = {
      name: 'pachirisu',
      abilities: ['run-away', 'pickup', 'volt-absorb'],
      id: 417,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/417.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'buizel') {
    const data = {
      name: 'buizel',
      abilities: ['swift-swim', 'water-veil'],
      id: 418,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/418.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 35, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 30, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'floatzel') {
    const data = {
      name: 'floatzel',
      abilities: ['swift-swim', 'water-veil'],
      id: 419,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/419.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 85, name: 'HP' },
        { stat: 105, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 115, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cherubi') {
    const data = {
      name: 'cherubi',
      abilities: ['chlorophyll', ,],
      id: 420,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/420.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 35, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 62, name: 'SPA' },
        { stat: 53, name: 'SPD' },
        { stat: 35, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cherrim') {
    const data = {
      name: 'cherrim',
      abilities: ['flower-gift', ,],
      id: 421,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/421.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 87, name: 'SPA' },
        { stat: 78, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'shellos') {
    const data = {
      name: 'shellos',
      abilities: ['sticky-hold', 'storm-drain', 'sand-force'],
      id: 422,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/422.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 76, name: 'HP' },
        { stat: 48, name: 'ATT' },
        { stat: 48, name: 'DEF' },
        { stat: 57, name: 'SPA' },
        { stat: 62, name: 'SPD' },
        { stat: 34, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gastrodon') {
    const data = {
      name: 'gastrodon',
      abilities: ['sticky-hold', 'storm-drain', 'sand-force'],
      id: 423,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/423.png',
      types: ['water', 'ground'],
      weaknesses: [
        'electric: 0x',
        'fire: 0.5x',
        'grass: 4x',
        'poison: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 111, name: 'HP' },
        { stat: 83, name: 'ATT' },
        { stat: 68, name: 'DEF' },
        { stat: 92, name: 'SPA' },
        { stat: 82, name: 'SPD' },
        { stat: 39, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'ambipom') {
    const data = {
      name: 'ambipom',
      abilities: ['technician', 'pickup', 'skill-link'],
      id: 424,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/424.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 66, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 66, name: 'SPD' },
        { stat: 115, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'drifloon') {
    const data = {
      name: 'drifloon',
      abilities: ['aftermath', 'unburden', 'flare-boost'],
      id: 425,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/425.png',
      types: ['ghost', 'flying'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 2x',
        'electric: 2x',
        'fighting: 0x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'normal: 0x',
        'poison: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 34, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 44, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'drifblim') {
    const data = {
      name: 'drifblim',
      abilities: ['aftermath', 'unburden', 'flare-boost'],
      id: 426,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/426.png',
      types: ['ghost', 'flying'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 2x',
        'electric: 2x',
        'fighting: 0x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'normal: 0x',
        'poison: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 150, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 44, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 54, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'buneary') {
    const data = {
      name: 'buneary',
      abilities: ['run-away', 'klutz', 'limber'],
      id: 427,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/427.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 66, name: 'ATT' },
        { stat: 44, name: 'DEF' },
        { stat: 44, name: 'SPA' },
        { stat: 56, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'lopunny') {
    const data = {
      name: 'lopunny',
      abilities: ['cute-charm', 'klutz', 'limber'],
      id: 428,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/428.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 76, name: 'ATT' },
        { stat: 84, name: 'DEF' },
        { stat: 54, name: 'SPA' },
        { stat: 96, name: 'SPD' },
        { stat: 105, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'lopunny-mega') {
    const data = {
      name: 'lopunny-mega',
      abilities: ['scrappy', ,],
      id: 10088,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10088.png',
      types: ['normal', 'fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'flying: 2x',
        'ghost: 0x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 136, name: 'ATT' },
        { stat: 94, name: 'DEF' },
        { stat: 54, name: 'SPA' },
        { stat: 96, name: 'SPD' },
        { stat: 135, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mismagius') {
    const data = {
      name: 'mismagius',
      abilities: ['levitate', ,],
      id: 429,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/429.png',
      types: ['ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'fighting: 0x',
        'ghost: 2x',
        'normal: 0x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 105, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'honchkrow') {
    const data = {
      name: 'honchkrow',
      abilities: ['insomnia', 'super-luck', 'moxie'],
      id: 430,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/430.png',
      types: ['dark', 'flying'],
      weaknesses: [
        'dark: 0.5x',
        'electric: 2x',
        'fairy: 2x',
        'ghost: 0.5x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'psychic: 0x',
        'rock: 2x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 125, name: 'ATT' },
        { stat: 52, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 52, name: 'SPD' },
        { stat: 71, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'glameow') {
    const data = {
      name: 'glameow',
      abilities: ['limber', 'own-tempo', 'keen-eye'],
      id: 431,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/431.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 49, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 42, name: 'DEF' },
        { stat: 42, name: 'SPA' },
        { stat: 37, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'purugly') {
    const data = {
      name: 'purugly',
      abilities: ['thick-fat', 'own-tempo', 'defiant'],
      id: 432,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/432.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 71, name: 'HP' },
        { stat: 82, name: 'ATT' },
        { stat: 64, name: 'DEF' },
        { stat: 64, name: 'SPA' },
        { stat: 59, name: 'SPD' },
        { stat: 112, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'chingling') {
    const data = {
      name: 'chingling',
      abilities: ['levitate', ,],
      id: 433,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/433.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 30, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'stunky') {
    const data = {
      name: 'stunky',
      abilities: ['stench', 'aftermath', 'keen-eye'],
      id: 434,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/434.png',
      types: ['poison', 'dark'],
      weaknesses: [
        'dark: 0.5x',
        'ghost: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'poison: 0.5x',
        'psychic: 0x',
      ],
      stats: [
        { stat: 63, name: 'HP' },
        { stat: 63, name: 'ATT' },
        { stat: 47, name: 'DEF' },
        { stat: 41, name: 'SPA' },
        { stat: 41, name: 'SPD' },
        { stat: 74, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'skuntank') {
    const data = {
      name: 'skuntank',
      abilities: ['stench', 'aftermath', 'keen-eye'],
      id: 435,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/435.png',
      types: ['poison', 'dark'],
      weaknesses: [
        'dark: 0.5x',
        'ghost: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'poison: 0.5x',
        'psychic: 0x',
      ],
      stats: [
        { stat: 103, name: 'HP' },
        { stat: 93, name: 'ATT' },
        { stat: 67, name: 'DEF' },
        { stat: 71, name: 'SPA' },
        { stat: 61, name: 'SPD' },
        { stat: 84, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'bronzor') {
    const data = {
      name: 'bronzor',
      abilities: ['levitate', 'heatproof', 'heavy-metal'],
      id: 436,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/436.png',
      types: ['steel', 'psychic'],
      weaknesses: [
        'dark: 2x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fire: 2x',
        'flying: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.25x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 57, name: 'HP' },
        { stat: 24, name: 'ATT' },
        { stat: 86, name: 'DEF' },
        { stat: 24, name: 'SPA' },
        { stat: 86, name: 'SPD' },
        { stat: 23, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'bronzong') {
    const data = {
      name: 'bronzong',
      abilities: ['levitate', 'heatproof', 'heavy-metal'],
      id: 437,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/437.png',
      types: ['steel', 'psychic'],
      weaknesses: [
        'dark: 2x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fire: 2x',
        'flying: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.25x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 67, name: 'HP' },
        { stat: 89, name: 'ATT' },
        { stat: 116, name: 'DEF' },
        { stat: 79, name: 'SPA' },
        { stat: 116, name: 'SPD' },
        { stat: 33, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'bonsly') {
    const data = {
      name: 'bonsly',
      abilities: ['sturdy', 'rock-head', 'rattled'],
      id: 438,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/438.png',
      types: ['rock'],
      weaknesses: [
        'fighting: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 2x',
        'ground: 2x',
        'normal: 0.5x',
        'poison: 0.5x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 10, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 10, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mime-jr') {
    const data = {
      name: 'mime-jr',
      abilities: ['soundproof', 'filter', 'technician'],
      id: 439,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/439.png',
      types: ['psychic', 'fairy'],
      weaknesses: [
        'dragon: 0x',
        'fighting: 0.25x',
        'ghost: 2x',
        'poison: 2x',
        'psychic: 0.5x',
        'steel: 2x',
      ],
      stats: [
        { stat: 20, name: 'HP' },
        { stat: 25, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'happiny') {
    const data = {
      name: 'happiny',
      abilities: ['natural-cure', 'serene-grace', 'friend-guard'],
      id: 440,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/440.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 5, name: 'ATT' },
        { stat: 5, name: 'DEF' },
        { stat: 15, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'chatot') {
    const data = {
      name: 'chatot',
      abilities: ['keen-eye', 'tangled-feet', 'big-pecks'],
      id: 441,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/441.png',
      types: ['normal', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 76, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 92, name: 'SPA' },
        { stat: 42, name: 'SPD' },
        { stat: 91, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'spiritomb') {
    const data = {
      name: 'spiritomb',
      abilities: ['pressure', 'infiltrator'],
      id: 442,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/442.png',
      types: ['ghost', 'dark'],
      weaknesses: [
        'fairy: 2x',
        'fighting: 0x',
        'normal: 0x',
        'poison: 0.5x',
        'psychic: 0x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 92, name: 'ATT' },
        { stat: 108, name: 'DEF' },
        { stat: 92, name: 'SPA' },
        { stat: 108, name: 'SPD' },
        { stat: 35, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gible') {
    const data = {
      name: 'gible',
      abilities: ['sand-veil', 'rough-skin'],
      id: 443,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/443.png',
      types: ['dragon', 'ground'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0x',
        'fairy: 2x',
        'fire: 0.5x',
        'ice: 4x',
        'poison: 0.5x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 58, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 42, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gabite') {
    const data = {
      name: 'gabite',
      abilities: ['sand-veil', 'rough-skin'],
      id: 444,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/444.png',
      types: ['dragon', 'ground'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0x',
        'fairy: 2x',
        'fire: 0.5x',
        'ice: 4x',
        'poison: 0.5x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 68, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 82, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'garchomp') {
    const data = {
      name: 'garchomp',
      abilities: ['sand-veil', 'rough-skin'],
      id: 445,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/445.png',
      types: ['dragon', 'ground'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0x',
        'fairy: 2x',
        'fire: 0.5x',
        'ice: 4x',
        'poison: 0.5x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 108, name: 'HP' },
        { stat: 130, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 102, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'garchomp-mega') {
    const data = {
      name: 'garchomp-mega',
      abilities: ['sand-force', ,],
      id: 10058,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10058.png',
      types: ['dragon', 'ground'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0x',
        'fairy: 2x',
        'fire: 0.5x',
        'ice: 4x',
        'poison: 0.5x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 108, name: 'HP' },
        { stat: 170, name: 'ATT' },
        { stat: 115, name: 'DEF' },
        { stat: 120, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 92, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'munchlax') {
    const data = {
      name: 'munchlax',
      abilities: ['pickup', 'thick-fat', 'gluttony'],
      id: 446,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/446.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 135, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 5, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'riolu') {
    const data = {
      name: 'riolu',
      abilities: ['steadfast', 'inner-focus', 'prankster'],
      id: 447,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/447.png',
      types: ['fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'flying: 2x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'lucario') {
    const data = {
      name: 'lucario',
      abilities: ['steadfast', 'inner-focus', 'justified'],
      id: 448,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png',
      types: ['fighting', 'steel'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 0.5x',
        'dragon: 0.5x',
        'fighting: 2x',
        'fire: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'rock: 0.25x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 110, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 115, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'lucario-mega') {
    const data = {
      name: 'lucario-mega',
      abilities: ['adaptability', ,],
      id: 10059,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10059.png',
      types: ['fighting', 'steel'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 0.5x',
        'dragon: 0.5x',
        'fighting: 2x',
        'fire: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'rock: 0.25x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 145, name: 'ATT' },
        { stat: 88, name: 'DEF' },
        { stat: 140, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 112, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'hippopotas') {
    const data = {
      name: 'hippopotas',
      abilities: ['sand-stream', 'sand-force'],
      id: 449,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/449.png',
      types: ['ground'],
      weaknesses: [
        'electric: 0x',
        'grass: 2x',
        'ice: 2x',
        'poison: 0.5x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 68, name: 'HP' },
        { stat: 72, name: 'ATT' },
        { stat: 78, name: 'DEF' },
        { stat: 38, name: 'SPA' },
        { stat: 42, name: 'SPD' },
        { stat: 32, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'hippowdon') {
    const data = {
      name: 'hippowdon',
      abilities: ['sand-stream', 'sand-force'],
      id: 450,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/450.png',
      types: ['ground'],
      weaknesses: [
        'electric: 0x',
        'grass: 2x',
        'ice: 2x',
        'poison: 0.5x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 108, name: 'HP' },
        { stat: 112, name: 'ATT' },
        { stat: 118, name: 'DEF' },
        { stat: 68, name: 'SPA' },
        { stat: 72, name: 'SPD' },
        { stat: 47, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'skorupi') {
    const data = {
      name: 'skorupi',
      abilities: ['battle-armor', 'sniper', 'keen-eye'],
      id: 451,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/451.png',
      types: ['poison', 'bug'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'poison: 0.5x',
        'psychic: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'drapion') {
    const data = {
      name: 'drapion',
      abilities: ['battle-armor', 'sniper', 'keen-eye'],
      id: 452,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/452.png',
      types: ['poison', 'dark'],
      weaknesses: [
        'dark: 0.5x',
        'ghost: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'poison: 0.5x',
        'psychic: 0x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 110, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'croagunk') {
    const data = {
      name: 'croagunk',
      abilities: ['anticipation', 'dry-skin', 'poison-touch'],
      id: 453,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/453.png',
      types: ['poison', 'fighting'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 0.5x',
        'fighting: 0.5x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'poison: 0.5x',
        'psychic: 4x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 48, name: 'HP' },
        { stat: 61, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 61, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'toxicroak') {
    const data = {
      name: 'toxicroak',
      abilities: ['anticipation', 'dry-skin', 'poison-touch'],
      id: 454,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/454.png',
      types: ['poison', 'fighting'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 0.5x',
        'fighting: 0.5x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'poison: 0.5x',
        'psychic: 4x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 83, name: 'HP' },
        { stat: 106, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 86, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'carnivine') {
    const data = {
      name: 'carnivine',
      abilities: ['levitate', ,],
      id: 455,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/455.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 74, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 72, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 72, name: 'SPD' },
        { stat: 46, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'finneon') {
    const data = {
      name: 'finneon',
      abilities: ['swift-swim', 'storm-drain', 'water-veil'],
      id: 456,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/456.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 49, name: 'HP' },
        { stat: 49, name: 'ATT' },
        { stat: 56, name: 'DEF' },
        { stat: 49, name: 'SPA' },
        { stat: 61, name: 'SPD' },
        { stat: 66, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'lumineon') {
    const data = {
      name: 'lumineon',
      abilities: ['swift-swim', 'storm-drain', 'water-veil'],
      id: 457,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/457.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 69, name: 'HP' },
        { stat: 69, name: 'ATT' },
        { stat: 76, name: 'DEF' },
        { stat: 69, name: 'SPA' },
        { stat: 86, name: 'SPD' },
        { stat: 91, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mantyke') {
    const data = {
      name: 'mantyke',
      abilities: ['swift-swim', 'water-absorb', 'water-veil'],
      id: 458,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/458.png',
      types: ['water', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 4x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'ground: 0x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 20, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 120, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'snover') {
    const data = {
      name: 'snover',
      abilities: ['snow-warning', 'soundproof'],
      id: 459,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/459.png',
      types: ['grass', 'ice'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fighting: 2x',
        'fire: 4x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'poison: 2x',
        'rock: 2x',
        'steel: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 62, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 62, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'abomasnow') {
    const data = {
      name: 'abomasnow',
      abilities: ['snow-warning', 'soundproof'],
      id: 460,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/460.png',
      types: ['grass', 'ice'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fighting: 2x',
        'fire: 4x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'poison: 2x',
        'rock: 2x',
        'steel: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 92, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 92, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'abomasnow-mega') {
    const data = {
      name: 'abomasnow-mega',
      abilities: ['snow-warning', ,],
      id: 10060,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10060.png',
      types: ['grass', 'ice'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fighting: 2x',
        'fire: 4x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'poison: 2x',
        'rock: 2x',
        'steel: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 132, name: 'ATT' },
        { stat: 105, name: 'DEF' },
        { stat: 132, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'weavile') {
    const data = {
      name: 'weavile',
      abilities: ['pressure', 'pickpocket'],
      id: 461,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/461.png',
      types: ['dark', 'ice'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 4x',
        'fire: 2x',
        'ghost: 0.5x',
        'ice: 0.5x',
        'psychic: 0x',
        'rock: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 125, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'magnezone') {
    const data = {
      name: 'magnezone',
      abilities: ['magnet-pull', 'sturdy', 'analytic'],
      id: 462,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/462.png',
      types: ['electric', 'steel'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'electric: 0.5x',
        'fairy: 0.5x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 0.25x',
        'grass: 0.5x',
        'ground: 4x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'steel: 0.25x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 115, name: 'DEF' },
        { stat: 130, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'lickilicky') {
    const data = {
      name: 'lickilicky',
      abilities: ['own-tempo', 'oblivious', 'cloud-nine'],
      id: 463,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/463.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 110, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'rhyperior') {
    const data = {
      name: 'rhyperior',
      abilities: ['lightning-rod', 'solid-rock', 'reckless'],
      id: 464,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/464.png',
      types: ['ground', 'rock'],
      weaknesses: [
        'electric: 0x',
        'fighting: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 4x',
        'ground: 2x',
        'ice: 2x',
        'normal: 0.5x',
        'poison: 0.25x',
        'rock: 0.5x',
        'steel: 2x',
        'water: 4x',
      ],
      stats: [
        { stat: 115, name: 'HP' },
        { stat: 140, name: 'ATT' },
        { stat: 130, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tangrowth') {
    const data = {
      name: 'tangrowth',
      abilities: ['chlorophyll', 'leaf-guard', 'regenerator'],
      id: 465,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/465.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 125, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'electivire') {
    const data = {
      name: 'electivire',
      abilities: ['motor-drive', 'vital-spirit'],
      id: 466,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/466.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 123, name: 'ATT' },
        { stat: 67, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'magmortar') {
    const data = {
      name: 'magmortar',
      abilities: ['flame-body', 'vital-spirit'],
      id: 467,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/467.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 67, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 83, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'togekiss') {
    const data = {
      name: 'togekiss',
      abilities: ['hustle', 'serene-grace', 'super-luck'],
      id: 468,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/468.png',
      types: ['fairy', 'flying'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 0.5x',
        'dragon: 0x',
        'electric: 2x',
        'fighting: 0.25x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'poison: 2x',
        'rock: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 85, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 120, name: 'SPA' },
        { stat: 115, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'yanmega') {
    const data = {
      name: 'yanmega',
      abilities: ['speed-boost', 'tinted-lens', 'frisk'],
      id: 469,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/469.png',
      types: ['bug', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 2x',
        'rock: 4x',
      ],
      stats: [
        { stat: 86, name: 'HP' },
        { stat: 76, name: 'ATT' },
        { stat: 86, name: 'DEF' },
        { stat: 116, name: 'SPA' },
        { stat: 56, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'leafeon') {
    const data = {
      name: 'leafeon',
      abilities: ['leaf-guard', 'chlorophyll'],
      id: 470,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/470.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 110, name: 'ATT' },
        { stat: 130, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'glaceon') {
    const data = {
      name: 'glaceon',
      abilities: ['snow-cloak', 'ice-body'],
      id: 471,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/471.png',
      types: ['ice'],
      weaknesses: [
        'fighting: 2x',
        'fire: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 110, name: 'DEF' },
        { stat: 130, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gliscor') {
    const data = {
      name: 'gliscor',
      abilities: ['hyper-cutter', 'sand-veil', 'poison-heal'],
      id: 472,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/472.png',
      types: ['ground', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 0x',
        'fighting: 0.5x',
        'ground: 0x',
        'ice: 4x',
        'poison: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 125, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mamoswine') {
    const data = {
      name: 'mamoswine',
      abilities: ['oblivious', 'snow-cloak', 'thick-fat'],
      id: 473,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/473.png',
      types: ['ice', 'ground'],
      weaknesses: [
        'electric: 0x',
        'fighting: 2x',
        'fire: 2x',
        'grass: 2x',
        'poison: 0.5x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 110, name: 'HP' },
        { stat: 130, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'porygon-z') {
    const data = {
      name: 'porygon-z',
      abilities: ['adaptability', 'download', 'analytic'],
      id: 474,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/474.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 85, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 135, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gallade') {
    const data = {
      name: 'gallade',
      abilities: ['steadfast', 'sharpness', 'justified'],
      id: 475,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/475.png',
      types: ['psychic', 'fighting'],
      weaknesses: [
        'fairy: 2x',
        'fighting: 0.5x',
        'flying: 2x',
        'ghost: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 68, name: 'HP' },
        { stat: 125, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 115, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gallade-mega') {
    const data = {
      name: 'gallade-mega',
      abilities: ['inner-focus', ,],
      id: 10068,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10068.png',
      types: ['psychic', 'fighting'],
      weaknesses: [
        'fairy: 2x',
        'fighting: 0.5x',
        'flying: 2x',
        'ghost: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 68, name: 'HP' },
        { stat: 165, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 115, name: 'SPD' },
        { stat: 110, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'probopass') {
    const data = {
      name: 'probopass',
      abilities: ['sturdy', 'magnet-pull', 'sand-force'],
      id: 476,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/476.png',
      types: ['rock', 'steel'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fighting: 4x',
        'flying: 0.25x',
        'ground: 4x',
        'ice: 0.5x',
        'normal: 0.25x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 145, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 150, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'dusknoir') {
    const data = {
      name: 'dusknoir',
      abilities: ['pressure', 'frisk'],
      id: 477,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/477.png',
      types: ['ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'fighting: 0x',
        'ghost: 2x',
        'normal: 0x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 135, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 135, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'froslass') {
    const data = {
      name: 'froslass',
      abilities: ['snow-cloak', 'cursed-body'],
      id: 478,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/478.png',
      types: ['ice', 'ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'fighting: 0x',
        'fire: 2x',
        'ghost: 2x',
        'ice: 0.5x',
        'normal: 0x',
        'poison: 0.5x',
        'rock: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 110, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'rotom') {
    const data = {
      name: 'rotom',
      abilities: ['levitate', ,],
      id: 479,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/479.png',
      types: ['electric', 'ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'electric: 0.5x',
        'fighting: 0x',
        'flying: 0.5x',
        'ghost: 2x',
        'ground: 2x',
        'normal: 0x',
        'poison: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 77, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 77, name: 'SPD' },
        { stat: 91, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'uxie') {
    const data = {
      name: 'uxie',
      abilities: ['levitate', ,],
      id: 480,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/480.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 130, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 130, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mesprit') {
    const data = {
      name: 'mesprit',
      abilities: ['levitate', ,],
      id: 481,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/481.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 105, name: 'ATT' },
        { stat: 105, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'azelf') {
    const data = {
      name: 'azelf',
      abilities: ['levitate', ,],
      id: 482,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/482.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 125, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 115, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'dialga') {
    const data = {
      name: 'dialga',
      abilities: ['pressure', 'telepathy'],
      id: 483,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/483.png',
      types: ['steel', 'dragon'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 0.5x',
        'fighting: 2x',
        'flying: 0.5x',
        'grass: 0.25x',
        'ground: 2x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 120, name: 'DEF' },
        { stat: 150, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'palkia') {
    const data = {
      name: 'palkia',
      abilities: ['pressure', 'telepathy'],
      id: 484,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/484.png',
      types: ['water', 'dragon'],
      weaknesses: [
        'dragon: 2x',
        'fairy: 2x',
        'fire: 0.25x',
        'steel: 0.5x',
        'water: 0.25x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 150, name: 'SPA' },
        { stat: 120, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'heatran') {
    const data = {
      name: 'heatran',
      abilities: ['flash-fire', 'flame-body'],
      id: 485,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/485.png',
      types: ['fire', 'steel'],
      weaknesses: [
        'bug: 0.25x',
        'dragon: 0.5x',
        'fairy: 0.25x',
        'fighting: 2x',
        'flying: 0.5x',
        'grass: 0.25x',
        'ground: 4x',
        'ice: 0.25x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'steel: 0.25x',
        'water: 2x',
      ],
      stats: [
        { stat: 91, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 106, name: 'DEF' },
        { stat: 130, name: 'SPA' },
        { stat: 106, name: 'SPD' },
        { stat: 77, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'regigigas') {
    const data = {
      name: 'regigigas',
      abilities: ['slow-start', ,],
      id: 486,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/486.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 110, name: 'HP' },
        { stat: 160, name: 'ATT' },
        { stat: 110, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'giratina-altered') {
    const data = {
      name: 'giratina-altered',
      abilities: ['pressure', 'telepathy'],
      id: 487,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/487.png',
      types: ['ghost', 'dragon'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fighting: 0x',
        'fire: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ice: 2x',
        'normal: 0x',
        'poison: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 150, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 120, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 120, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'giratina-origin') {
    const data = {
      name: 'giratina-origin',
      abilities: ['levitate', ,],
      id: 10007,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10007.png',
      types: ['ghost', 'dragon'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fighting: 0x',
        'fire: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ice: 2x',
        'normal: 0x',
        'poison: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 150, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 120, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cresselia') {
    const data = {
      name: 'cresselia',
      abilities: ['levitate', ,],
      id: 488,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/488.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 120, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 110, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 120, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'phione') {
    const data = {
      name: 'phione',
      abilities: ['hydration', ,],
      id: 489,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/489.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'manaphy') {
    const data = {
      name: 'manaphy',
      abilities: ['hydration', ,],
      id: 490,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/490.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'darkrai') {
    const data = {
      name: 'darkrai',
      abilities: ['bad-dreams', ,],
      id: 491,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/491.png',
      types: ['dark'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'ghost: 0.5x',
        'psychic: 0x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 135, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 125, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'shaymin-land') {
    const data = {
      name: 'shaymin-land',
      abilities: ['natural-cure', ,],
      id: 492,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/492.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'shaymin-sky') {
    const data = {
      name: 'shaymin-sky',
      abilities: ['serene-grace', ,],
      id: 10006,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10006.png',
      types: ['grass', 'flying'],
      weaknesses: [
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 4x',
        'poison: 2x',
        'rock: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 103, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 120, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 127, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'arceus') {
    const data = {
      name: 'arceus',
      abilities: ['multitype', ,],
      id: 493,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 120, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 120, name: 'DEF' },
        { stat: 120, name: 'SPA' },
        { stat: 120, name: 'SPD' },
        { stat: 120, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'victini') {
    const data = {
      name: 'victini',
      abilities: ['victory-star', ,],
      id: 494,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/494.png',
      types: ['psychic', 'fire'],
      weaknesses: [
        'dark: 2x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'psychic: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'snivy') {
    const data = {
      name: 'snivy',
      abilities: ['overgrow', 'contrary'],
      id: 495,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/495.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 63, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'servine') {
    const data = {
      name: 'servine',
      abilities: ['overgrow', 'contrary'],
      id: 496,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/496.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 83, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'serperior') {
    const data = {
      name: 'serperior',
      abilities: ['overgrow', 'contrary'],
      id: 497,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/497.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 113, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tepig') {
    const data = {
      name: 'tepig',
      abilities: ['blaze', 'thick-fat'],
      id: 498,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/498.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 63, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'pignite') {
    const data = {
      name: 'pignite',
      abilities: ['blaze', 'thick-fat'],
      id: 499,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/499.png',
      types: ['fire', 'fighting'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 0.5x',
        'fire: 0.5x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'psychic: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 93, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'emboar') {
    const data = {
      name: 'emboar',
      abilities: ['blaze', 'reckless'],
      id: 500,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/500.png',
      types: ['fire', 'fighting'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 0.5x',
        'fire: 0.5x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'psychic: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 110, name: 'HP' },
        { stat: 123, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'oshawott') {
    const data = {
      name: 'oshawott',
      abilities: ['torrent', 'shell-armor'],
      id: 501,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/501.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 63, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'dewott') {
    const data = {
      name: 'dewott',
      abilities: ['torrent', 'shell-armor'],
      id: 502,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/502.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 83, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'samurott') {
    const data = {
      name: 'samurott',
      abilities: ['torrent', 'shell-armor'],
      id: 503,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/503.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 95, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 108, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'patrat') {
    const data = {
      name: 'patrat',
      abilities: ['run-away', 'keen-eye', 'analytic'],
      id: 504,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/504.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 39, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 39, name: 'SPD' },
        { stat: 42, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'watchog') {
    const data = {
      name: 'watchog',
      abilities: ['illuminate', 'keen-eye', 'analytic'],
      id: 505,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/505.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 69, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 69, name: 'SPD' },
        { stat: 77, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'lillipup') {
    const data = {
      name: 'lillipup',
      abilities: ['vital-spirit', 'pickup', 'run-away'],
      id: 506,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/506.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 25, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'herdier') {
    const data = {
      name: 'herdier',
      abilities: ['intimidate', 'sand-rush', 'scrappy'],
      id: 507,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/507.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'stoutland') {
    const data = {
      name: 'stoutland',
      abilities: ['intimidate', 'sand-rush', 'scrappy'],
      id: 508,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/508.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 85, name: 'HP' },
        { stat: 110, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'purrloin') {
    const data = {
      name: 'purrloin',
      abilities: ['limber', 'unburden', 'prankster'],
      id: 509,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/509.png',
      types: ['dark'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'ghost: 0.5x',
        'psychic: 0x',
      ],
      stats: [
        { stat: 41, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 37, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 37, name: 'SPD' },
        { stat: 66, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'liepard') {
    const data = {
      name: 'liepard',
      abilities: ['limber', 'unburden', 'prankster'],
      id: 510,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/510.png',
      types: ['dark'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'ghost: 0.5x',
        'psychic: 0x',
      ],
      stats: [
        { stat: 64, name: 'HP' },
        { stat: 88, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 88, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 106, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'pansage') {
    const data = {
      name: 'pansage',
      abilities: ['gluttony', 'overgrow'],
      id: 511,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/511.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 53, name: 'ATT' },
        { stat: 48, name: 'DEF' },
        { stat: 53, name: 'SPA' },
        { stat: 48, name: 'SPD' },
        { stat: 64, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'simisage') {
    const data = {
      name: 'simisage',
      abilities: ['gluttony', 'overgrow'],
      id: 512,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/512.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 98, name: 'ATT' },
        { stat: 63, name: 'DEF' },
        { stat: 98, name: 'SPA' },
        { stat: 63, name: 'SPD' },
        { stat: 101, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'pansear') {
    const data = {
      name: 'pansear',
      abilities: ['gluttony', 'blaze'],
      id: 513,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/513.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 53, name: 'ATT' },
        { stat: 48, name: 'DEF' },
        { stat: 53, name: 'SPA' },
        { stat: 48, name: 'SPD' },
        { stat: 64, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'simisear') {
    const data = {
      name: 'simisear',
      abilities: ['gluttony', 'blaze'],
      id: 514,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/514.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 98, name: 'ATT' },
        { stat: 63, name: 'DEF' },
        { stat: 98, name: 'SPA' },
        { stat: 63, name: 'SPD' },
        { stat: 101, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'panpour') {
    const data = {
      name: 'panpour',
      abilities: ['gluttony', 'torrent'],
      id: 515,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/515.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 53, name: 'ATT' },
        { stat: 48, name: 'DEF' },
        { stat: 53, name: 'SPA' },
        { stat: 48, name: 'SPD' },
        { stat: 64, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'simipour') {
    const data = {
      name: 'simipour',
      abilities: ['gluttony', 'torrent'],
      id: 516,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/516.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 98, name: 'ATT' },
        { stat: 63, name: 'DEF' },
        { stat: 98, name: 'SPA' },
        { stat: 63, name: 'SPD' },
        { stat: 101, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'munna') {
    const data = {
      name: 'munna',
      abilities: ['forewarn', 'synchronize', 'telepathy'],
      id: 517,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/517.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 76, name: 'HP' },
        { stat: 25, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 67, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 24, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'musharna') {
    const data = {
      name: 'musharna',
      abilities: ['forewarn', 'synchronize', 'telepathy'],
      id: 518,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/518.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 116, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 107, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 29, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'pidove') {
    const data = {
      name: 'pidove',
      abilities: ['big-pecks', 'super-luck', 'rivalry'],
      id: 519,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/519.png',
      types: ['normal', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 36, name: 'SPA' },
        { stat: 30, name: 'SPD' },
        { stat: 43, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tranquill') {
    const data = {
      name: 'tranquill',
      abilities: ['big-pecks', 'super-luck', 'rivalry'],
      id: 520,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/520.png',
      types: ['normal', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 62, name: 'HP' },
        { stat: 77, name: 'ATT' },
        { stat: 62, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 42, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'unfezant') {
    const data = {
      name: 'unfezant',
      abilities: ['big-pecks', 'super-luck', 'rivalry'],
      id: 521,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/521.png',
      types: ['normal', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 115, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 93, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'blitzle') {
    const data = {
      name: 'blitzle',
      abilities: ['lightning-rod', 'motor-drive', 'sap-sipper'],
      id: 522,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/522.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 32, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 32, name: 'SPD' },
        { stat: 76, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'zebstrika') {
    const data = {
      name: 'zebstrika',
      abilities: ['lightning-rod', 'motor-drive', 'sap-sipper'],
      id: 523,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/523.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 63, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 63, name: 'SPD' },
        { stat: 116, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'roggenrola') {
    const data = {
      name: 'roggenrola',
      abilities: ['sturdy', 'weak-armor', 'sand-force'],
      id: 524,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/524.png',
      types: ['rock'],
      weaknesses: [
        'fighting: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 2x',
        'ground: 2x',
        'normal: 0.5x',
        'poison: 0.5x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 25, name: 'SPA' },
        { stat: 25, name: 'SPD' },
        { stat: 15, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'boldore') {
    const data = {
      name: 'boldore',
      abilities: ['sturdy', 'weak-armor', 'sand-force'],
      id: 525,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/525.png',
      types: ['rock'],
      weaknesses: [
        'fighting: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 2x',
        'ground: 2x',
        'normal: 0.5x',
        'poison: 0.5x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 105, name: 'ATT' },
        { stat: 105, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 20, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gigalith') {
    const data = {
      name: 'gigalith',
      abilities: ['sturdy', 'sand-stream', 'sand-force'],
      id: 526,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/526.png',
      types: ['rock'],
      weaknesses: [
        'fighting: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 2x',
        'ground: 2x',
        'normal: 0.5x',
        'poison: 0.5x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 85, name: 'HP' },
        { stat: 135, name: 'ATT' },
        { stat: 130, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 25, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'woobat') {
    const data = {
      name: 'woobat',
      abilities: ['unaware', 'klutz', 'simple'],
      id: 527,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/527.png',
      types: ['psychic', 'flying'],
      weaknesses: [
        'dark: 2x',
        'electric: 2x',
        'fighting: 0.25x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'psychic: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 43, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 43, name: 'SPD' },
        { stat: 72, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'swoobat') {
    const data = {
      name: 'swoobat',
      abilities: ['unaware', 'klutz', 'simple'],
      id: 528,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/528.png',
      types: ['psychic', 'flying'],
      weaknesses: [
        'dark: 2x',
        'electric: 2x',
        'fighting: 0.25x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'psychic: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 67, name: 'HP' },
        { stat: 57, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 77, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 114, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'drilbur') {
    const data = {
      name: 'drilbur',
      abilities: ['sand-rush', 'sand-force', 'mold-breaker'],
      id: 529,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/529.png',
      types: ['ground'],
      weaknesses: [
        'electric: 0x',
        'grass: 2x',
        'ice: 2x',
        'poison: 0.5x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 68, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'excadrill') {
    const data = {
      name: 'excadrill',
      abilities: ['sand-rush', 'sand-force', 'mold-breaker'],
      id: 530,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/530.png',
      types: ['ground', 'steel'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'electric: 0x',
        'fairy: 0.5x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 0.5x',
        'ground: 2x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.25x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 110, name: 'HP' },
        { stat: 135, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 88, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'audino') {
    const data = {
      name: 'audino',
      abilities: ['healer', 'regenerator', 'klutz'],
      id: 531,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/531.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 103, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 86, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 86, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'audino-mega') {
    const data = {
      name: 'audino-mega',
      abilities: ['healer', ,],
      id: 10069,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10069.png',
      types: ['normal', 'fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'ghost: 0x',
        'poison: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 103, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 126, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 126, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'timburr') {
    const data = {
      name: 'timburr',
      abilities: ['guts', 'sheer-force', 'iron-fist'],
      id: 532,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/532.png',
      types: ['fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'flying: 2x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 25, name: 'SPA' },
        { stat: 35, name: 'SPD' },
        { stat: 35, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gurdurr') {
    const data = {
      name: 'gurdurr',
      abilities: ['guts', 'sheer-force', 'iron-fist'],
      id: 533,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/533.png',
      types: ['fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'flying: 2x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 85, name: 'HP' },
        { stat: 105, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'conkeldurr') {
    const data = {
      name: 'conkeldurr',
      abilities: ['guts', 'sheer-force', 'iron-fist'],
      id: 534,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/534.png',
      types: ['fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'flying: 2x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 105, name: 'HP' },
        { stat: 140, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tympole') {
    const data = {
      name: 'tympole',
      abilities: ['swift-swim', 'hydration', 'water-absorb'],
      id: 535,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/535.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 64, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'palpitoad') {
    const data = {
      name: 'palpitoad',
      abilities: ['swift-swim', 'hydration', 'water-absorb'],
      id: 536,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/536.png',
      types: ['water', 'ground'],
      weaknesses: [
        'electric: 0x',
        'fire: 0.5x',
        'grass: 4x',
        'poison: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 69, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'seismitoad') {
    const data = {
      name: 'seismitoad',
      abilities: ['swift-swim', 'poison-touch', 'water-absorb'],
      id: 537,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/537.png',
      types: ['water', 'ground'],
      weaknesses: [
        'electric: 0x',
        'fire: 0.5x',
        'grass: 4x',
        'poison: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 105, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 74, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'throh') {
    const data = {
      name: 'throh',
      abilities: ['guts', 'inner-focus', 'mold-breaker'],
      id: 538,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/538.png',
      types: ['fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'flying: 2x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 120, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sawk') {
    const data = {
      name: 'sawk',
      abilities: ['sturdy', 'inner-focus', 'mold-breaker'],
      id: 539,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/539.png',
      types: ['fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'flying: 2x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 125, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sewaddle') {
    const data = {
      name: 'sewaddle',
      abilities: ['swarm', 'chlorophyll', 'overcoat'],
      id: 540,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/540.png',
      types: ['bug', 'grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fighting: 0.5x',
        'fire: 4x',
        'flying: 4x',
        'grass: 0.25x',
        'ground: 0.25x',
        'ice: 2x',
        'poison: 2x',
        'rock: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 53, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 42, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'swadloon') {
    const data = {
      name: 'swadloon',
      abilities: ['leaf-guard', 'chlorophyll', 'overcoat'],
      id: 541,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/541.png',
      types: ['bug', 'grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fighting: 0.5x',
        'fire: 4x',
        'flying: 4x',
        'grass: 0.25x',
        'ground: 0.25x',
        'ice: 2x',
        'poison: 2x',
        'rock: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 63, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 42, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'leavanny') {
    const data = {
      name: 'leavanny',
      abilities: ['swarm', 'chlorophyll', 'overcoat'],
      id: 542,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/542.png',
      types: ['bug', 'grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fighting: 0.5x',
        'fire: 4x',
        'flying: 4x',
        'grass: 0.25x',
        'ground: 0.25x',
        'ice: 2x',
        'poison: 2x',
        'rock: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 103, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 92, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'venipede') {
    const data = {
      name: 'venipede',
      abilities: ['poison-point', 'swarm', 'speed-boost'],
      id: 543,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/543.png',
      types: ['bug', 'poison'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'poison: 0.5x',
        'psychic: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 30, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 59, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 39, name: 'SPD' },
        { stat: 57, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'whirlipede') {
    const data = {
      name: 'whirlipede',
      abilities: ['poison-point', 'swarm', 'speed-boost'],
      id: 544,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/544.png',
      types: ['bug', 'poison'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'poison: 0.5x',
        'psychic: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 99, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 79, name: 'SPD' },
        { stat: 47, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'scolipede') {
    const data = {
      name: 'scolipede',
      abilities: ['poison-point', 'swarm', 'speed-boost'],
      id: 545,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/545.png',
      types: ['bug', 'poison'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'poison: 0.5x',
        'psychic: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 89, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 69, name: 'SPD' },
        { stat: 112, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cottonee') {
    const data = {
      name: 'cottonee',
      abilities: ['prankster', 'infiltrator', 'chlorophyll'],
      id: 546,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/546.png',
      types: ['grass', 'fairy'],
      weaknesses: [
        'dark: 0.5x',
        'dragon: 0x',
        'electric: 0.5x',
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 4x',
        'steel: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 27, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 37, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 66, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'whimsicott') {
    const data = {
      name: 'whimsicott',
      abilities: ['prankster', 'infiltrator', 'chlorophyll'],
      id: 547,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/547.png',
      types: ['grass', 'fairy'],
      weaknesses: [
        'dark: 0.5x',
        'dragon: 0x',
        'electric: 0.5x',
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 4x',
        'steel: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 67, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 77, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 116, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'petilil') {
    const data = {
      name: 'petilil',
      abilities: ['chlorophyll', 'own-tempo', 'leaf-guard'],
      id: 548,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/548.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 35, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'lilligant') {
    const data = {
      name: 'lilligant',
      abilities: ['chlorophyll', 'own-tempo', 'leaf-guard'],
      id: 549,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/549.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'basculin-red-striped') {
    const data = {
      name: 'basculin-red-striped',
      abilities: ['reckless', 'adaptability', 'mold-breaker'],
      id: 550,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/550.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 92, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 98, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sandile') {
    const data = {
      name: 'sandile',
      abilities: ['intimidate', 'moxie', 'anger-point'],
      id: 551,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/551.png',
      types: ['ground', 'dark'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'electric: 0x',
        'fairy: 2x',
        'fighting: 2x',
        'ghost: 0.5x',
        'grass: 2x',
        'ice: 2x',
        'poison: 0.5x',
        'psychic: 0x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 72, name: 'ATT' },
        { stat: 35, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 35, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'krokorok') {
    const data = {
      name: 'krokorok',
      abilities: ['intimidate', 'moxie', 'anger-point'],
      id: 552,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/552.png',
      types: ['ground', 'dark'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'electric: 0x',
        'fairy: 2x',
        'fighting: 2x',
        'ghost: 0.5x',
        'grass: 2x',
        'ice: 2x',
        'poison: 0.5x',
        'psychic: 0x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 82, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 74, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'krookodile') {
    const data = {
      name: 'krookodile',
      abilities: ['intimidate', 'moxie', 'anger-point'],
      id: 553,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/553.png',
      types: ['ground', 'dark'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'electric: 0x',
        'fairy: 2x',
        'fighting: 2x',
        'ghost: 0.5x',
        'grass: 2x',
        'ice: 2x',
        'poison: 0.5x',
        'psychic: 0x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 95, name: 'HP' },
        { stat: 117, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 92, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'darumaka') {
    const data = {
      name: 'darumaka',
      abilities: ['hustle', 'inner-focus'],
      id: 554,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/554.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 15, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'darmanitan-standard') {
    const data = {
      name: 'darmanitan-standard',
      abilities: ['sheer-force', 'zen-mode'],
      id: 555,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/555.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 105, name: 'HP' },
        { stat: 140, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'darmanitan-zen') {
    const data = {
      name: 'darmanitan-zen',
      abilities: ['sheer-force', 'zen-mode'],
      id: 10017,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10017.png',
      types: ['fire', 'psychic'],
      weaknesses: [
        'dark: 2x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'psychic: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 105, name: 'HP' },
        { stat: 30, name: 'ATT' },
        { stat: 105, name: 'DEF' },
        { stat: 140, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'maractus') {
    const data = {
      name: 'maractus',
      abilities: ['water-absorb', 'chlorophyll', 'storm-drain'],
      id: 556,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/556.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 86, name: 'ATT' },
        { stat: 67, name: 'DEF' },
        { stat: 106, name: 'SPA' },
        { stat: 67, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'dwebble') {
    const data = {
      name: 'dwebble',
      abilities: ['sturdy', 'shell-armor', 'weak-armor'],
      id: 557,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/557.png',
      types: ['bug', 'rock'],
      weaknesses: [
        'normal: 0.5x',
        'poison: 0.5x',
        'rock: 2x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 35, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'crustle') {
    const data = {
      name: 'crustle',
      abilities: ['sturdy', 'shell-armor', 'weak-armor'],
      id: 558,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/558.png',
      types: ['bug', 'rock'],
      weaknesses: [
        'normal: 0.5x',
        'poison: 0.5x',
        'rock: 2x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 105, name: 'ATT' },
        { stat: 125, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'scraggy') {
    const data = {
      name: 'scraggy',
      abilities: ['shed-skin', 'moxie', 'intimidate'],
      id: 559,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/559.png',
      types: ['dark', 'fighting'],
      weaknesses: [
        'dark: 0.25x',
        'fairy: 4x',
        'fighting: 2x',
        'flying: 2x',
        'ghost: 0.5x',
        'psychic: 0x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 48, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'scrafty') {
    const data = {
      name: 'scrafty',
      abilities: ['shed-skin', 'moxie', 'intimidate'],
      id: 560,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/560.png',
      types: ['dark', 'fighting'],
      weaknesses: [
        'dark: 0.25x',
        'fairy: 4x',
        'fighting: 2x',
        'flying: 2x',
        'ghost: 0.5x',
        'psychic: 0x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 115, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 115, name: 'SPD' },
        { stat: 58, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sigilyph') {
    const data = {
      name: 'sigilyph',
      abilities: ['wonder-skin', 'magic-guard', 'tinted-lens'],
      id: 561,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/561.png',
      types: ['psychic', 'flying'],
      weaknesses: [
        'dark: 2x',
        'electric: 2x',
        'fighting: 0.25x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'psychic: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 72, name: 'HP' },
        { stat: 58, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 103, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 97, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'yamask') {
    const data = {
      name: 'yamask',
      abilities: ['mummy', ,],
      id: 562,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/562.png',
      types: ['ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'fighting: 0x',
        'ghost: 2x',
        'normal: 0x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 38, name: 'HP' },
        { stat: 30, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cofagrigus') {
    const data = {
      name: 'cofagrigus',
      abilities: ['mummy', ,],
      id: 563,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/563.png',
      types: ['ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'fighting: 0x',
        'ghost: 2x',
        'normal: 0x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 58, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 145, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tirtouga') {
    const data = {
      name: 'tirtouga',
      abilities: ['solid-rock', 'sturdy', 'swift-swim'],
      id: 564,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/564.png',
      types: ['water', 'rock'],
      weaknesses: [
        'electric: 2x',
        'fighting: 2x',
        'fire: 0.25x',
        'flying: 0.5x',
        'grass: 4x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 54, name: 'HP' },
        { stat: 78, name: 'ATT' },
        { stat: 103, name: 'DEF' },
        { stat: 53, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 22, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'carracosta') {
    const data = {
      name: 'carracosta',
      abilities: ['solid-rock', 'sturdy', 'swift-swim'],
      id: 565,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/565.png',
      types: ['water', 'rock'],
      weaknesses: [
        'electric: 2x',
        'fighting: 2x',
        'fire: 0.25x',
        'flying: 0.5x',
        'grass: 4x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 74, name: 'HP' },
        { stat: 108, name: 'ATT' },
        { stat: 133, name: 'DEF' },
        { stat: 83, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 32, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'archen') {
    const data = {
      name: 'archen',
      abilities: ['defeatist', ,],
      id: 566,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/566.png',
      types: ['rock', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'normal: 0.5x',
        'poison: 0.5x',
        'rock: 2x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 112, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 74, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'archeops') {
    const data = {
      name: 'archeops',
      abilities: ['defeatist', ,],
      id: 567,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/567.png',
      types: ['rock', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'normal: 0.5x',
        'poison: 0.5x',
        'rock: 2x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 140, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 112, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 110, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'trubbish') {
    const data = {
      name: 'trubbish',
      abilities: ['stench', 'sticky-hold', 'aftermath'],
      id: 568,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/568.png',
      types: ['poison'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'poison: 0.5x',
        'psychic: 2x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 62, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 62, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'garbodor') {
    const data = {
      name: 'garbodor',
      abilities: ['stench', 'weak-armor', 'aftermath'],
      id: 569,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/569.png',
      types: ['poison'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'poison: 0.5x',
        'psychic: 2x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 82, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 82, name: 'SPD' },
        { stat: 75, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'zorua') {
    const data = {
      name: 'zorua',
      abilities: ['illusion', ,],
      id: 570,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/570.png',
      types: ['dark'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'ghost: 0.5x',
        'psychic: 0x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'zoroark') {
    const data = {
      name: 'zoroark',
      abilities: ['illusion', ,],
      id: 571,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/571.png',
      types: ['dark'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'ghost: 0.5x',
        'psychic: 0x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 105, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 120, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 105, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'minccino') {
    const data = {
      name: 'minccino',
      abilities: ['cute-charm', 'technician', 'skill-link'],
      id: 572,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/572.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 75, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cinccino') {
    const data = {
      name: 'cinccino',
      abilities: ['cute-charm', 'technician', 'skill-link'],
      id: 573,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/573.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 115, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gothita') {
    const data = {
      name: 'gothita',
      abilities: ['frisk', 'competitive', 'shadow-tag'],
      id: 574,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/574.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 30, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gothorita') {
    const data = {
      name: 'gothorita',
      abilities: ['frisk', 'competitive', 'shadow-tag'],
      id: 575,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/575.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gothitelle') {
    const data = {
      name: 'gothitelle',
      abilities: ['frisk', 'competitive', 'shadow-tag'],
      id: 576,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/576.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'solosis') {
    const data = {
      name: 'solosis',
      abilities: ['overcoat', 'magic-guard', 'regenerator'],
      id: 577,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/577.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 30, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 20, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'duosion') {
    const data = {
      name: 'duosion',
      abilities: ['overcoat', 'magic-guard', 'regenerator'],
      id: 578,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/578.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 40, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'reuniclus') {
    const data = {
      name: 'reuniclus',
      abilities: ['overcoat', 'magic-guard', 'regenerator'],
      id: 579,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/579.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 110, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'ducklett') {
    const data = {
      name: 'ducklett',
      abilities: ['keen-eye', 'big-pecks', 'hydration'],
      id: 580,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/580.png',
      types: ['water', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 4x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'ground: 0x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 62, name: 'HP' },
        { stat: 44, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 44, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'swanna') {
    const data = {
      name: 'swanna',
      abilities: ['keen-eye', 'big-pecks', 'hydration'],
      id: 581,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/581.png',
      types: ['water', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 4x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'ground: 0x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 87, name: 'ATT' },
        { stat: 63, name: 'DEF' },
        { stat: 87, name: 'SPA' },
        { stat: 63, name: 'SPD' },
        { stat: 98, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'vanillite') {
    const data = {
      name: 'vanillite',
      abilities: ['ice-body', 'snow-cloak', 'weak-armor'],
      id: 582,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/582.png',
      types: ['ice'],
      weaknesses: [
        'fighting: 2x',
        'fire: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 36, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 44, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'vanillish') {
    const data = {
      name: 'vanillish',
      abilities: ['ice-body', 'snow-cloak', 'weak-armor'],
      id: 583,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/583.png',
      types: ['ice'],
      weaknesses: [
        'fighting: 2x',
        'fire: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 51, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 59, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'vanilluxe') {
    const data = {
      name: 'vanilluxe',
      abilities: ['ice-body', 'snow-warning', 'weak-armor'],
      id: 584,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/584.png',
      types: ['ice'],
      weaknesses: [
        'fighting: 2x',
        'fire: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 71, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 79, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'deerling') {
    const data = {
      name: 'deerling',
      abilities: ['chlorophyll', 'sap-sipper', 'serene-grace'],
      id: 585,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/585.png',
      types: ['normal', 'grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 75, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sawsbuck') {
    const data = {
      name: 'sawsbuck',
      abilities: ['chlorophyll', 'sap-sipper', 'serene-grace'],
      id: 586,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/586.png',
      types: ['normal', 'grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'emolga') {
    const data = {
      name: 'emolga',
      abilities: ['static', 'motor-drive'],
      id: 587,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/587.png',
      types: ['electric', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'fighting: 0.5x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 103, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'karrablast') {
    const data = {
      name: 'karrablast',
      abilities: ['swarm', 'shed-skin', 'no-guard'],
      id: 588,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/588.png',
      types: ['bug'],
      weaknesses: [
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'escavalier') {
    const data = {
      name: 'escavalier',
      abilities: ['swarm', 'shell-armor', 'overcoat'],
      id: 589,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/589.png',
      types: ['bug', 'steel'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fire: 4x',
        'grass: 0.25x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 135, name: 'ATT' },
        { stat: 105, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 20, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'foongus') {
    const data = {
      name: 'foongus',
      abilities: ['effect-spore', 'regenerator'],
      id: 590,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/590.png',
      types: ['grass', 'poison'],
      weaknesses: [
        'electric: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ice: 2x',
        'psychic: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 69, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 15, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'amoonguss') {
    const data = {
      name: 'amoonguss',
      abilities: ['effect-spore', 'regenerator'],
      id: 591,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/591.png',
      types: ['grass', 'poison'],
      weaknesses: [
        'electric: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ice: 2x',
        'psychic: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 114, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'frillish') {
    const data = {
      name: 'frillish',
      abilities: ['water-absorb', 'cursed-body', 'damp'],
      id: 592,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/592.png',
      types: ['water', 'ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'electric: 2x',
        'fighting: 0x',
        'fire: 0.5x',
        'ghost: 2x',
        'grass: 2x',
        'ice: 0.5x',
        'normal: 0x',
        'poison: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 40, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'jellicent') {
    const data = {
      name: 'jellicent',
      abilities: ['water-absorb', 'cursed-body', 'damp'],
      id: 593,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/593.png',
      types: ['water', 'ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'electric: 2x',
        'fighting: 0x',
        'fire: 0.5x',
        'ghost: 2x',
        'grass: 2x',
        'ice: 0.5x',
        'normal: 0x',
        'poison: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'alomomola') {
    const data = {
      name: 'alomomola',
      abilities: ['healer', 'hydration', 'regenerator'],
      id: 594,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/594.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 165, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'joltik') {
    const data = {
      name: 'joltik',
      abilities: ['compound-eyes', 'unnerve', 'swarm'],
      id: 595,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/595.png',
      types: ['bug', 'electric'],
      weaknesses: [
        'electric: 0.5x',
        'fighting: 0.5x',
        'fire: 2x',
        'grass: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 47, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 57, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'galvantula') {
    const data = {
      name: 'galvantula',
      abilities: ['compound-eyes', 'unnerve', 'swarm'],
      id: 596,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/596.png',
      types: ['bug', 'electric'],
      weaknesses: [
        'electric: 0.5x',
        'fighting: 0.5x',
        'fire: 2x',
        'grass: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 77, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 97, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 108, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'ferroseed') {
    const data = {
      name: 'ferroseed',
      abilities: ['iron-barbs', ,],
      id: 597,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/597.png',
      types: ['grass', 'steel'],
      weaknesses: [
        'dragon: 0.5x',
        'electric: 0.5x',
        'fairy: 0.5x',
        'fighting: 2x',
        'fire: 4x',
        'grass: 0.25x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 44, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 91, name: 'DEF' },
        { stat: 24, name: 'SPA' },
        { stat: 86, name: 'SPD' },
        { stat: 10, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'ferrothorn') {
    const data = {
      name: 'ferrothorn',
      abilities: ['iron-barbs', 'anticipation'],
      id: 598,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/598.png',
      types: ['grass', 'steel'],
      weaknesses: [
        'dragon: 0.5x',
        'electric: 0.5x',
        'fairy: 0.5x',
        'fighting: 2x',
        'fire: 4x',
        'grass: 0.25x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 74, name: 'HP' },
        { stat: 94, name: 'ATT' },
        { stat: 131, name: 'DEF' },
        { stat: 54, name: 'SPA' },
        { stat: 116, name: 'SPD' },
        { stat: 20, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'klink') {
    const data = {
      name: 'klink',
      abilities: ['plus', 'minus', 'clear-body'],
      id: 599,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/599.png',
      types: ['steel'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'klang') {
    const data = {
      name: 'klang',
      abilities: ['plus', 'minus', 'clear-body'],
      id: 600,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/600.png',
      types: ['steel'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'klinklang') {
    const data = {
      name: 'klinklang',
      abilities: ['plus', 'minus', 'clear-body'],
      id: 601,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/601.png',
      types: ['steel'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 115, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tynamo') {
    const data = {
      name: 'tynamo',
      abilities: ['levitate', ,],
      id: 602,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/602.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 35, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'eelektrik') {
    const data = {
      name: 'eelektrik',
      abilities: ['levitate', ,],
      id: 603,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/603.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'eelektross') {
    const data = {
      name: 'eelektross',
      abilities: ['levitate', ,],
      id: 604,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/604.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 85, name: 'HP' },
        { stat: 115, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'elgyem') {
    const data = {
      name: 'elgyem',
      abilities: ['telepathy', 'synchronize', 'analytic'],
      id: 605,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/605.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'beheeyem') {
    const data = {
      name: 'beheeyem',
      abilities: ['telepathy', 'synchronize', 'analytic'],
      id: 606,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/606.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'litwick') {
    const data = {
      name: 'litwick',
      abilities: ['flash-fire', 'flame-body', 'infiltrator'],
      id: 607,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/607.png',
      types: ['ghost', 'fire'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 2x',
        'fairy: 0.5x',
        'fighting: 0x',
        'fire: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0x',
        'poison: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 30, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 20, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'lampent') {
    const data = {
      name: 'lampent',
      abilities: ['flash-fire', 'flame-body', 'infiltrator'],
      id: 608,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/608.png',
      types: ['ghost', 'fire'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 2x',
        'fairy: 0.5x',
        'fighting: 0x',
        'fire: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0x',
        'poison: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 40, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'chandelure') {
    const data = {
      name: 'chandelure',
      abilities: ['flash-fire', 'flame-body', 'infiltrator'],
      id: 609,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/609.png',
      types: ['ghost', 'fire'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 2x',
        'fairy: 0.5x',
        'fighting: 0x',
        'fire: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0x',
        'poison: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 145, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'axew') {
    const data = {
      name: 'axew',
      abilities: ['rivalry', 'mold-breaker', 'unnerve'],
      id: 610,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/610.png',
      types: ['dragon'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ice: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 46, name: 'HP' },
        { stat: 87, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 57, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'fraxure') {
    const data = {
      name: 'fraxure',
      abilities: ['rivalry', 'mold-breaker', 'unnerve'],
      id: 611,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/611.png',
      types: ['dragon'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ice: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 66, name: 'HP' },
        { stat: 117, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 67, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'haxorus') {
    const data = {
      name: 'haxorus',
      abilities: ['rivalry', 'mold-breaker', 'unnerve'],
      id: 612,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/612.png',
      types: ['dragon'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ice: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 76, name: 'HP' },
        { stat: 147, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 97, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cubchoo') {
    const data = {
      name: 'cubchoo',
      abilities: ['snow-cloak', 'slush-rush', 'rattled'],
      id: 613,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/613.png',
      types: ['ice'],
      weaknesses: [
        'fighting: 2x',
        'fire: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'beartic') {
    const data = {
      name: 'beartic',
      abilities: ['snow-cloak', 'slush-rush', 'swift-swim'],
      id: 614,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/614.png',
      types: ['ice'],
      weaknesses: [
        'fighting: 2x',
        'fire: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 95, name: 'HP' },
        { stat: 130, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cryogonal') {
    const data = {
      name: 'cryogonal',
      abilities: ['levitate', ,],
      id: 615,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/615.png',
      types: ['ice'],
      weaknesses: [
        'fighting: 2x',
        'fire: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 135, name: 'SPD' },
        { stat: 105, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'shelmet') {
    const data = {
      name: 'shelmet',
      abilities: ['hydration', 'shell-armor', 'overcoat'],
      id: 616,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/616.png',
      types: ['bug'],
      weaknesses: [
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 40, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 25, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'accelgor') {
    const data = {
      name: 'accelgor',
      abilities: ['hydration', 'sticky-hold', 'unburden'],
      id: 617,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/617.png',
      types: ['bug'],
      weaknesses: [
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 145, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'stunfisk') {
    const data = {
      name: 'stunfisk',
      abilities: ['static', 'limber', 'sand-veil'],
      id: 618,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/618.png',
      types: ['ground', 'electric'],
      weaknesses: [
        'electric: 0x',
        'flying: 0.5x',
        'grass: 2x',
        'ground: 2x',
        'ice: 2x',
        'poison: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 109, name: 'HP' },
        { stat: 66, name: 'ATT' },
        { stat: 84, name: 'DEF' },
        { stat: 81, name: 'SPA' },
        { stat: 99, name: 'SPD' },
        { stat: 32, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mienfoo') {
    const data = {
      name: 'mienfoo',
      abilities: ['inner-focus', 'regenerator', 'reckless'],
      id: 619,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/619.png',
      types: ['fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'flying: 2x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mienshao') {
    const data = {
      name: 'mienshao',
      abilities: ['inner-focus', 'regenerator', 'reckless'],
      id: 620,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/620.png',
      types: ['fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'flying: 2x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 125, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 105, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'druddigon') {
    const data = {
      name: 'druddigon',
      abilities: ['rough-skin', 'sheer-force', 'mold-breaker'],
      id: 621,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/621.png',
      types: ['dragon'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ice: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 77, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 48, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'golett') {
    const data = {
      name: 'golett',
      abilities: ['iron-fist', 'klutz', 'no-guard'],
      id: 622,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/622.png',
      types: ['ground', 'ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'electric: 0x',
        'fighting: 0x',
        'ghost: 2x',
        'grass: 2x',
        'ice: 2x',
        'normal: 0x',
        'poison: 0.25x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 59, name: 'HP' },
        { stat: 74, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 35, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'golurk') {
    const data = {
      name: 'golurk',
      abilities: ['iron-fist', 'klutz', 'no-guard'],
      id: 623,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/623.png',
      types: ['ground', 'ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'electric: 0x',
        'fighting: 0x',
        'ghost: 2x',
        'grass: 2x',
        'ice: 2x',
        'normal: 0x',
        'poison: 0.25x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 89, name: 'HP' },
        { stat: 124, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'pawniard') {
    const data = {
      name: 'pawniard',
      abilities: ['defiant', 'inner-focus', 'pressure'],
      id: 624,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/624.png',
      types: ['dark', 'steel'],
      weaknesses: [
        'dark: 0.5x',
        'dragon: 0.5x',
        'fighting: 4x',
        'fire: 2x',
        'flying: 0.5x',
        'ghost: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'bisharp') {
    const data = {
      name: 'bisharp',
      abilities: ['defiant', 'inner-focus', 'pressure'],
      id: 625,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/625.png',
      types: ['dark', 'steel'],
      weaknesses: [
        'dark: 0.5x',
        'dragon: 0.5x',
        'fighting: 4x',
        'fire: 2x',
        'flying: 0.5x',
        'ghost: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 125, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'bouffalant') {
    const data = {
      name: 'bouffalant',
      abilities: ['reckless', 'sap-sipper', 'soundproof'],
      id: 626,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/626.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 95, name: 'HP' },
        { stat: 110, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'rufflet') {
    const data = {
      name: 'rufflet',
      abilities: ['keen-eye', 'sheer-force', 'hustle'],
      id: 627,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/627.png',
      types: ['normal', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 83, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 37, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'braviary') {
    const data = {
      name: 'braviary',
      abilities: ['keen-eye', 'sheer-force', 'defiant'],
      id: 628,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/628.png',
      types: ['normal', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 123, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 57, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'vullaby') {
    const data = {
      name: 'vullaby',
      abilities: ['big-pecks', 'overcoat', 'weak-armor'],
      id: 629,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/629.png',
      types: ['dark', 'flying'],
      weaknesses: [
        'dark: 0.5x',
        'electric: 2x',
        'fairy: 2x',
        'ghost: 0.5x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'psychic: 0x',
        'rock: 2x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mandibuzz') {
    const data = {
      name: 'mandibuzz',
      abilities: ['big-pecks', 'overcoat', 'weak-armor'],
      id: 630,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/630.png',
      types: ['dark', 'flying'],
      weaknesses: [
        'dark: 0.5x',
        'electric: 2x',
        'fairy: 2x',
        'ghost: 0.5x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'psychic: 0x',
        'rock: 2x',
      ],
      stats: [
        { stat: 110, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 105, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'heatmor') {
    const data = {
      name: 'heatmor',
      abilities: ['gluttony', 'flash-fire', 'white-smoke'],
      id: 631,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/631.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 85, name: 'HP' },
        { stat: 97, name: 'ATT' },
        { stat: 66, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 66, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'durant') {
    const data = {
      name: 'durant',
      abilities: ['swarm', 'hustle', 'truant'],
      id: 632,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/632.png',
      types: ['bug', 'steel'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fire: 4x',
        'grass: 0.25x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 58, name: 'HP' },
        { stat: 109, name: 'ATT' },
        { stat: 112, name: 'DEF' },
        { stat: 48, name: 'SPA' },
        { stat: 48, name: 'SPD' },
        { stat: 109, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'deino') {
    const data = {
      name: 'deino',
      abilities: ['hustle', ,],
      id: 633,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/633.png',
      types: ['dark', 'dragon'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 4x',
        'fighting: 2x',
        'fire: 0.5x',
        'ghost: 0.5x',
        'grass: 0.5x',
        'ice: 2x',
        'psychic: 0x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 52, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 38, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'zweilous') {
    const data = {
      name: 'zweilous',
      abilities: ['hustle', ,],
      id: 634,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/634.png',
      types: ['dark', 'dragon'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 4x',
        'fighting: 2x',
        'fire: 0.5x',
        'ghost: 0.5x',
        'grass: 0.5x',
        'ice: 2x',
        'psychic: 0x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 72, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 58, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'hydreigon') {
    const data = {
      name: 'hydreigon',
      abilities: ['levitate', ,],
      id: 635,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/635.png',
      types: ['dark', 'dragon'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 4x',
        'fighting: 2x',
        'fire: 0.5x',
        'ghost: 0.5x',
        'grass: 0.5x',
        'ice: 2x',
        'psychic: 0x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 92, name: 'HP' },
        { stat: 105, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 98, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'larvesta') {
    const data = {
      name: 'larvesta',
      abilities: ['flame-body', 'swarm'],
      id: 636,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/636.png',
      types: ['bug', 'fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'flying: 2x',
        'grass: 0.25x',
        'ice: 0.5x',
        'rock: 4x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'volcarona') {
    const data = {
      name: 'volcarona',
      abilities: ['flame-body', 'swarm'],
      id: 637,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/637.png',
      types: ['bug', 'fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'flying: 2x',
        'grass: 0.25x',
        'ice: 0.5x',
        'rock: 4x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 85, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 135, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cobalion') {
    const data = {
      name: 'cobalion',
      abilities: ['justified', ,],
      id: 638,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/638.png',
      types: ['steel', 'fighting'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 0.5x',
        'dragon: 0.5x',
        'fighting: 2x',
        'fire: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'rock: 0.25x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 91, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 129, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 72, name: 'SPD' },
        { stat: 108, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'terrakion') {
    const data = {
      name: 'terrakion',
      abilities: ['justified', ,],
      id: 639,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/639.png',
      types: ['rock', 'fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ground: 2x',
        'normal: 0.5x',
        'poison: 0.5x',
        'psychic: 2x',
        'rock: 0.5x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 91, name: 'HP' },
        { stat: 129, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 72, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 108, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'virizion') {
    const data = {
      name: 'virizion',
      abilities: ['justified', ,],
      id: 640,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/640.png',
      types: ['grass', 'fighting'],
      weaknesses: [
        'dark: 0.5x',
        'electric: 0.5x',
        'fairy: 2x',
        'fire: 2x',
        'flying: 4x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'psychic: 2x',
        'rock: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 91, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 72, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 129, name: 'SPD' },
        { stat: 108, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tornadus-incarnate') {
    const data = {
      name: 'tornadus-incarnate',
      abilities: ['prankster', 'defiant'],
      id: 641,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/641.png',
      types: ['flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fighting: 0.5x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 79, name: 'HP' },
        { stat: 115, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 111, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tornadus-therian') {
    const data = {
      name: 'tornadus-therian',
      abilities: ['regenerator', ,],
      id: 10019,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10019.png',
      types: ['flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fighting: 0.5x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 79, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 121, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'thundurus-incarnate') {
    const data = {
      name: 'thundurus-incarnate',
      abilities: ['prankster', 'defiant'],
      id: 642,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/642.png',
      types: ['electric', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'fighting: 0.5x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 79, name: 'HP' },
        { stat: 115, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 111, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'thundurus-therian') {
    const data = {
      name: 'thundurus-therian',
      abilities: ['volt-absorb', ,],
      id: 10020,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10020.png',
      types: ['electric', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'fighting: 0.5x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 79, name: 'HP' },
        { stat: 105, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 145, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 101, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'reshiram') {
    const data = {
      name: 'reshiram',
      abilities: ['turboblaze', ,],
      id: 643,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/643.png',
      types: ['dragon', 'fire'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 2x',
        'electric: 0.5x',
        'fire: 0.25x',
        'grass: 0.25x',
        'ground: 2x',
        'rock: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 150, name: 'SPA' },
        { stat: 120, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'zekrom') {
    const data = {
      name: 'zekrom',
      abilities: ['teravolt', ,],
      id: 644,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/644.png',
      types: ['dragon', 'electric'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0.25x',
        'fairy: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 2x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 150, name: 'ATT' },
        { stat: 120, name: 'DEF' },
        { stat: 120, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'landorus-incarnate') {
    const data = {
      name: 'landorus-incarnate',
      abilities: ['sand-force', 'sheer-force'],
      id: 645,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/645.png',
      types: ['ground', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 0x',
        'fighting: 0.5x',
        'ground: 0x',
        'ice: 4x',
        'poison: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 89, name: 'HP' },
        { stat: 125, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 115, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 101, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'landorus-therian') {
    const data = {
      name: 'landorus-therian',
      abilities: ['intimidate', ,],
      id: 10021,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10021.png',
      types: ['ground', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 0x',
        'fighting: 0.5x',
        'ground: 0x',
        'ice: 4x',
        'poison: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 89, name: 'HP' },
        { stat: 145, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 91, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'kyurem') {
    const data = {
      name: 'kyurem',
      abilities: ['pressure', ,],
      id: 646,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/646.png',
      types: ['dragon', 'ice'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'grass: 0.5x',
        'rock: 2x',
        'steel: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 125, name: 'HP' },
        { stat: 130, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 130, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'kyurem-black') {
    const data = {
      name: 'kyurem-black',
      abilities: ['teravolt', ,],
      id: 10022,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10022.png',
      types: ['dragon', 'ice'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'grass: 0.5x',
        'rock: 2x',
        'steel: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 125, name: 'HP' },
        { stat: 170, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 120, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'kyurem-white') {
    const data = {
      name: 'kyurem-white',
      abilities: ['turboblaze', ,],
      id: 10023,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10023.png',
      types: ['dragon', 'ice'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'grass: 0.5x',
        'rock: 2x',
        'steel: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 125, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 170, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'keldeo-ordinary') {
    const data = {
      name: 'keldeo-ordinary',
      abilities: ['justified', ,],
      id: 647,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/647.png',
      types: ['water', 'fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'electric: 2x',
        'fairy: 2x',
        'fire: 0.5x',
        'flying: 2x',
        'grass: 2x',
        'ice: 0.5x',
        'psychic: 2x',
        'rock: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 91, name: 'HP' },
        { stat: 72, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 129, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 108, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'keldeo-resolute') {
    const data = {
      name: 'keldeo-resolute',
      abilities: ['justified', ,],
      id: 10024,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10024.png',
      types: ['water', 'fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'electric: 2x',
        'fairy: 2x',
        'fire: 0.5x',
        'flying: 2x',
        'grass: 2x',
        'ice: 0.5x',
        'psychic: 2x',
        'rock: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 91, name: 'HP' },
        { stat: 72, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 129, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 108, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'meloetta-aria') {
    const data = {
      name: 'meloetta-aria',
      abilities: ['serene-grace', ,],
      id: 648,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/648.png',
      types: ['normal', 'psychic'],
      weaknesses: ['bug: 2x', 'dark: 2x', 'ghost: 0x', 'psychic: 0.5x'],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 77, name: 'ATT' },
        { stat: 77, name: 'DEF' },
        { stat: 128, name: 'SPA' },
        { stat: 128, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'meloetta-pirouette') {
    const data = {
      name: 'meloetta-pirouette',
      abilities: ['serene-grace', ,],
      id: 10018,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10018.png',
      types: ['normal', 'fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'flying: 2x',
        'ghost: 0x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 128, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 77, name: 'SPA' },
        { stat: 77, name: 'SPD' },
        { stat: 128, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'genesect') {
    const data = {
      name: 'genesect',
      abilities: ['download', ,],
      id: 649,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/649.png',
      types: ['bug', 'steel'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fire: 4x',
        'grass: 0.25x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 71, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 120, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 99, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'chespin') {
    const data = {
      name: 'chespin',
      abilities: ['overgrow', 'bulletproof'],
      id: 650,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/650.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 56, name: 'HP' },
        { stat: 61, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 48, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 38, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'quilladin') {
    const data = {
      name: 'quilladin',
      abilities: ['overgrow', 'bulletproof'],
      id: 651,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/651.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 61, name: 'HP' },
        { stat: 78, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 56, name: 'SPA' },
        { stat: 58, name: 'SPD' },
        { stat: 57, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'chesnaught') {
    const data = {
      name: 'chesnaught',
      abilities: ['overgrow', 'bulletproof'],
      id: 652,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/652.png',
      types: ['grass', 'fighting'],
      weaknesses: [
        'dark: 0.5x',
        'electric: 0.5x',
        'fairy: 2x',
        'fire: 2x',
        'flying: 4x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'psychic: 2x',
        'rock: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 88, name: 'HP' },
        { stat: 107, name: 'ATT' },
        { stat: 122, name: 'DEF' },
        { stat: 74, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 64, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'fennekin') {
    const data = {
      name: 'fennekin',
      abilities: ['blaze', 'magician'],
      id: 653,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/653.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 62, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'braixen') {
    const data = {
      name: 'braixen',
      abilities: ['blaze', 'magician'],
      id: 654,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/654.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 59, name: 'HP' },
        { stat: 59, name: 'ATT' },
        { stat: 58, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 73, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'delphox') {
    const data = {
      name: 'delphox',
      abilities: ['blaze', 'magician'],
      id: 655,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/655.png',
      types: ['fire', 'psychic'],
      weaknesses: [
        'dark: 2x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'psychic: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 69, name: 'ATT' },
        { stat: 72, name: 'DEF' },
        { stat: 114, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 104, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'froakie') {
    const data = {
      name: 'froakie',
      abilities: ['torrent', 'protean'],
      id: 656,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/656.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 41, name: 'HP' },
        { stat: 56, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 62, name: 'SPA' },
        { stat: 44, name: 'SPD' },
        { stat: 71, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'frogadier') {
    const data = {
      name: 'frogadier',
      abilities: ['torrent', 'protean'],
      id: 657,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/657.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 54, name: 'HP' },
        { stat: 63, name: 'ATT' },
        { stat: 52, name: 'DEF' },
        { stat: 83, name: 'SPA' },
        { stat: 56, name: 'SPD' },
        { stat: 97, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'greninja') {
    const data = {
      name: 'greninja',
      abilities: ['torrent', 'protean'],
      id: 658,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png',
      types: ['water', 'dark'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'electric: 2x',
        'fairy: 2x',
        'fighting: 2x',
        'fire: 0.5x',
        'ghost: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'psychic: 0x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 72, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 67, name: 'DEF' },
        { stat: 103, name: 'SPA' },
        { stat: 71, name: 'SPD' },
        { stat: 122, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'bunnelby') {
    const data = {
      name: 'bunnelby',
      abilities: ['pickup', 'cheek-pouch', 'huge-power'],
      id: 659,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/659.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 38, name: 'HP' },
        { stat: 36, name: 'ATT' },
        { stat: 38, name: 'DEF' },
        { stat: 32, name: 'SPA' },
        { stat: 36, name: 'SPD' },
        { stat: 57, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'diggersby') {
    const data = {
      name: 'diggersby',
      abilities: ['pickup', 'cheek-pouch', 'huge-power'],
      id: 660,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/660.png',
      types: ['normal', 'ground'],
      weaknesses: [
        'electric: 0x',
        'fighting: 2x',
        'ghost: 0x',
        'grass: 2x',
        'ice: 2x',
        'poison: 0.5x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 85, name: 'HP' },
        { stat: 56, name: 'ATT' },
        { stat: 77, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 77, name: 'SPD' },
        { stat: 78, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'fletchling') {
    const data = {
      name: 'fletchling',
      abilities: ['big-pecks', 'gale-wings'],
      id: 661,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/661.png',
      types: ['normal', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 43, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 38, name: 'SPD' },
        { stat: 62, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'fletchinder') {
    const data = {
      name: 'fletchinder',
      abilities: ['flame-body', 'gale-wings'],
      id: 662,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/662.png',
      types: ['fire', 'flying'],
      weaknesses: [
        'bug: 0.25x',
        'electric: 2x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'grass: 0.25x',
        'ground: 0x',
        'rock: 4x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 62, name: 'HP' },
        { stat: 73, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 56, name: 'SPA' },
        { stat: 52, name: 'SPD' },
        { stat: 84, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'talonflame') {
    const data = {
      name: 'talonflame',
      abilities: ['flame-body', 'gale-wings'],
      id: 663,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/663.png',
      types: ['fire', 'flying'],
      weaknesses: [
        'bug: 0.25x',
        'electric: 2x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'grass: 0.25x',
        'ground: 0x',
        'rock: 4x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 78, name: 'HP' },
        { stat: 81, name: 'ATT' },
        { stat: 71, name: 'DEF' },
        { stat: 74, name: 'SPA' },
        { stat: 69, name: 'SPD' },
        { stat: 126, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'scatterbug') {
    const data = {
      name: 'scatterbug',
      abilities: ['shield-dust', 'compound-eyes', 'friend-guard'],
      id: 664,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/664.png',
      types: ['bug'],
      weaknesses: [
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 38, name: 'HP' },
        { stat: 35, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 27, name: 'SPA' },
        { stat: 25, name: 'SPD' },
        { stat: 35, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'spewpa') {
    const data = {
      name: 'spewpa',
      abilities: ['shed-skin', 'friend-guard'],
      id: 665,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/665.png',
      types: ['bug'],
      weaknesses: [
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 22, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 27, name: 'SPA' },
        { stat: 30, name: 'SPD' },
        { stat: 29, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'vivillon') {
    const data = {
      name: 'vivillon',
      abilities: ['shield-dust', 'compound-eyes', 'friend-guard'],
      id: 666,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/666.png',
      types: ['bug', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 2x',
        'rock: 4x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 52, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 89, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'litleo') {
    const data = {
      name: 'litleo',
      abilities: ['rivalry', 'unnerve', 'moxie'],
      id: 667,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/667.png',
      types: ['fire', 'normal'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 2x',
        'fire: 0.5x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 62, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 58, name: 'DEF' },
        { stat: 73, name: 'SPA' },
        { stat: 54, name: 'SPD' },
        { stat: 72, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'pyroar') {
    const data = {
      name: 'pyroar',
      abilities: ['rivalry', 'unnerve', 'moxie'],
      id: 668,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/668.png',
      types: ['fire', 'normal'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 2x',
        'fire: 0.5x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 86, name: 'HP' },
        { stat: 68, name: 'ATT' },
        { stat: 72, name: 'DEF' },
        { stat: 109, name: 'SPA' },
        { stat: 66, name: 'SPD' },
        { stat: 106, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'flabebe') {
    const data = {
      name: 'flabebe',
      abilities: ['flower-veil', 'symbiosis'],
      id: 669,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/669.png',
      types: ['fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'fighting: 0.5x',
        'poison: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 44, name: 'HP' },
        { stat: 38, name: 'ATT' },
        { stat: 39, name: 'DEF' },
        { stat: 61, name: 'SPA' },
        { stat: 79, name: 'SPD' },
        { stat: 42, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'floette') {
    const data = {
      name: 'floette',
      abilities: ['flower-veil', 'symbiosis'],
      id: 670,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/670.png',
      types: ['fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'fighting: 0.5x',
        'poison: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 54, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 47, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 98, name: 'SPD' },
        { stat: 52, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'florges') {
    const data = {
      name: 'florges',
      abilities: ['flower-veil', 'symbiosis'],
      id: 671,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/671.png',
      types: ['fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'fighting: 0.5x',
        'poison: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 78, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 68, name: 'DEF' },
        { stat: 112, name: 'SPA' },
        { stat: 154, name: 'SPD' },
        { stat: 75, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'skiddo') {
    const data = {
      name: 'skiddo',
      abilities: ['sap-sipper', 'grass-pelt'],
      id: 672,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/672.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 66, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 48, name: 'DEF' },
        { stat: 62, name: 'SPA' },
        { stat: 57, name: 'SPD' },
        { stat: 52, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gogoat') {
    const data = {
      name: 'gogoat',
      abilities: ['sap-sipper', 'grass-pelt'],
      id: 673,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/673.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 123, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 62, name: 'DEF' },
        { stat: 97, name: 'SPA' },
        { stat: 81, name: 'SPD' },
        { stat: 68, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'pancham') {
    const data = {
      name: 'pancham',
      abilities: ['iron-fist', 'mold-breaker', 'scrappy'],
      id: 674,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/674.png',
      types: ['fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'flying: 2x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 67, name: 'HP' },
        { stat: 82, name: 'ATT' },
        { stat: 62, name: 'DEF' },
        { stat: 46, name: 'SPA' },
        { stat: 48, name: 'SPD' },
        { stat: 43, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'pangoro') {
    const data = {
      name: 'pangoro',
      abilities: ['iron-fist', 'mold-breaker', 'scrappy'],
      id: 675,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/675.png',
      types: ['fighting', 'dark'],
      weaknesses: [
        'dark: 0.25x',
        'fairy: 4x',
        'fighting: 2x',
        'flying: 2x',
        'ghost: 0.5x',
        'psychic: 0x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 95, name: 'HP' },
        { stat: 124, name: 'ATT' },
        { stat: 78, name: 'DEF' },
        { stat: 69, name: 'SPA' },
        { stat: 71, name: 'SPD' },
        { stat: 58, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'furfrou') {
    const data = {
      name: 'furfrou',
      abilities: ['fur-coat', ,],
      id: 676,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/676.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 102, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'espurr') {
    const data = {
      name: 'espurr',
      abilities: ['keen-eye', 'infiltrator', 'own-tempo'],
      id: 677,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/677.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 62, name: 'HP' },
        { stat: 48, name: 'ATT' },
        { stat: 54, name: 'DEF' },
        { stat: 63, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 68, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'meowstic-male') {
    const data = {
      name: 'meowstic-male',
      abilities: ['keen-eye', 'infiltrator', 'prankster'],
      id: 678,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/678.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 74, name: 'HP' },
        { stat: 48, name: 'ATT' },
        { stat: 76, name: 'DEF' },
        { stat: 83, name: 'SPA' },
        { stat: 81, name: 'SPD' },
        { stat: 104, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'meowstic-female') {
    const data = {
      name: 'meowstic-female',
      abilities: ['keen-eye', 'infiltrator', 'competitive'],
      id: 10025,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10025.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 74, name: 'HP' },
        { stat: 48, name: 'ATT' },
        { stat: 76, name: 'DEF' },
        { stat: 83, name: 'SPA' },
        { stat: 81, name: 'SPD' },
        { stat: 104, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'honedge') {
    const data = {
      name: 'honedge',
      abilities: ['no-guard', ,],
      id: 679,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/679.png',
      types: ['steel', 'ghost'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 2x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fighting: 0x',
        'fire: 2x',
        'flying: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 37, name: 'SPD' },
        { stat: 28, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'doublade') {
    const data = {
      name: 'doublade',
      abilities: ['no-guard', ,],
      id: 680,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/680.png',
      types: ['steel', 'ghost'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 2x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fighting: 0x',
        'fire: 2x',
        'flying: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 59, name: 'HP' },
        { stat: 110, name: 'ATT' },
        { stat: 150, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 49, name: 'SPD' },
        { stat: 35, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'aegislash-shield') {
    const data = {
      name: 'aegislash-shield',
      abilities: ['stance-change', ,],
      id: 681,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/681.png',
      types: ['steel', 'ghost'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 2x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fighting: 0x',
        'fire: 2x',
        'flying: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 140, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 140, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'aegislash-blade') {
    const data = {
      name: 'aegislash-blade',
      abilities: ['stance-change', ,],
      id: 10026,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10026.png',
      types: ['steel', 'ghost'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 2x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fighting: 0x',
        'fire: 2x',
        'flying: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 140, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 140, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'spritzee') {
    const data = {
      name: 'spritzee',
      abilities: ['healer', 'aroma-veil'],
      id: 682,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/682.png',
      types: ['fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'fighting: 0.5x',
        'poison: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 78, name: 'HP' },
        { stat: 52, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 63, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 23, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'aromatisse') {
    const data = {
      name: 'aromatisse',
      abilities: ['healer', 'aroma-veil'],
      id: 683,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/683.png',
      types: ['fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'fighting: 0.5x',
        'poison: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 101, name: 'HP' },
        { stat: 72, name: 'ATT' },
        { stat: 72, name: 'DEF' },
        { stat: 99, name: 'SPA' },
        { stat: 89, name: 'SPD' },
        { stat: 29, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'swirlix') {
    const data = {
      name: 'swirlix',
      abilities: ['sweet-veil', 'unburden'],
      id: 684,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/684.png',
      types: ['fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'fighting: 0.5x',
        'poison: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 62, name: 'HP' },
        { stat: 48, name: 'ATT' },
        { stat: 66, name: 'DEF' },
        { stat: 59, name: 'SPA' },
        { stat: 57, name: 'SPD' },
        { stat: 49, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'slurpuff') {
    const data = {
      name: 'slurpuff',
      abilities: ['sweet-veil', 'unburden'],
      id: 685,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/685.png',
      types: ['fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'fighting: 0.5x',
        'poison: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 82, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 86, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 72, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'inkay') {
    const data = {
      name: 'inkay',
      abilities: ['contrary', 'suction-cups', 'infiltrator'],
      id: 686,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/686.png',
      types: ['dark', 'psychic'],
      weaknesses: ['bug: 4x', 'fairy: 2x', 'psychic: 0x'],
      stats: [
        { stat: 53, name: 'HP' },
        { stat: 54, name: 'ATT' },
        { stat: 53, name: 'DEF' },
        { stat: 37, name: 'SPA' },
        { stat: 46, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'malamar') {
    const data = {
      name: 'malamar',
      abilities: ['contrary', 'suction-cups', 'infiltrator'],
      id: 687,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/687.png',
      types: ['dark', 'psychic'],
      weaknesses: ['bug: 4x', 'fairy: 2x', 'psychic: 0x'],
      stats: [
        { stat: 86, name: 'HP' },
        { stat: 92, name: 'ATT' },
        { stat: 88, name: 'DEF' },
        { stat: 68, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 73, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'binacle') {
    const data = {
      name: 'binacle',
      abilities: ['tough-claws', 'sniper', 'pickpocket'],
      id: 688,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/688.png',
      types: ['rock', 'water'],
      weaknesses: [
        'electric: 2x',
        'fighting: 2x',
        'fire: 0.25x',
        'flying: 0.5x',
        'grass: 4x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 42, name: 'HP' },
        { stat: 52, name: 'ATT' },
        { stat: 67, name: 'DEF' },
        { stat: 39, name: 'SPA' },
        { stat: 56, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'barbaracle') {
    const data = {
      name: 'barbaracle',
      abilities: ['tough-claws', 'sniper', 'pickpocket'],
      id: 689,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/689.png',
      types: ['rock', 'water'],
      weaknesses: [
        'electric: 2x',
        'fighting: 2x',
        'fire: 0.25x',
        'flying: 0.5x',
        'grass: 4x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 72, name: 'HP' },
        { stat: 105, name: 'ATT' },
        { stat: 115, name: 'DEF' },
        { stat: 54, name: 'SPA' },
        { stat: 86, name: 'SPD' },
        { stat: 68, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'skrelp') {
    const data = {
      name: 'skrelp',
      abilities: ['poison-point', 'poison-touch', 'adaptability'],
      id: 690,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/690.png',
      types: ['poison', 'water'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'poison: 0.5x',
        'psychic: 2x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'dragalge') {
    const data = {
      name: 'dragalge',
      abilities: ['poison-point', 'poison-touch', 'adaptability'],
      id: 691,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/691.png',
      types: ['poison', 'dragon'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 2x',
        'electric: 0.5x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'grass: 0.25x',
        'ground: 2x',
        'ice: 2x',
        'poison: 0.5x',
        'psychic: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 97, name: 'SPA' },
        { stat: 123, name: 'SPD' },
        { stat: 44, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'clauncher') {
    const data = {
      name: 'clauncher',
      abilities: ['mega-launcher', ,],
      id: 692,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/692.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 53, name: 'ATT' },
        { stat: 62, name: 'DEF' },
        { stat: 58, name: 'SPA' },
        { stat: 63, name: 'SPD' },
        { stat: 44, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'clawitzer') {
    const data = {
      name: 'clawitzer',
      abilities: ['mega-launcher', ,],
      id: 693,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/693.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 71, name: 'HP' },
        { stat: 73, name: 'ATT' },
        { stat: 88, name: 'DEF' },
        { stat: 120, name: 'SPA' },
        { stat: 89, name: 'SPD' },
        { stat: 59, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'helioptile') {
    const data = {
      name: 'helioptile',
      abilities: ['dry-skin', 'sand-veil', 'solar-power'],
      id: 694,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/694.png',
      types: ['electric', 'normal'],
      weaknesses: [
        'electric: 0.5x',
        'fighting: 2x',
        'flying: 0.5x',
        'ghost: 0x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 44, name: 'HP' },
        { stat: 38, name: 'ATT' },
        { stat: 33, name: 'DEF' },
        { stat: 61, name: 'SPA' },
        { stat: 43, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'heliolisk') {
    const data = {
      name: 'heliolisk',
      abilities: ['dry-skin', 'sand-veil', 'solar-power'],
      id: 695,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/695.png',
      types: ['electric', 'normal'],
      weaknesses: [
        'electric: 0.5x',
        'fighting: 2x',
        'flying: 0.5x',
        'ghost: 0x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 62, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 52, name: 'DEF' },
        { stat: 109, name: 'SPA' },
        { stat: 94, name: 'SPD' },
        { stat: 109, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tyrunt') {
    const data = {
      name: 'tyrunt',
      abilities: ['strong-jaw', 'sturdy'],
      id: 696,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/696.png',
      types: ['rock', 'dragon'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'fire: 0.25x',
        'flying: 0.5x',
        'ground: 2x',
        'ice: 2x',
        'normal: 0.5x',
        'poison: 0.5x',
        'steel: 2x',
      ],
      stats: [
        { stat: 58, name: 'HP' },
        { stat: 89, name: 'ATT' },
        { stat: 77, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 48, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tyrantrum') {
    const data = {
      name: 'tyrantrum',
      abilities: ['strong-jaw', 'rock-head'],
      id: 697,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/697.png',
      types: ['rock', 'dragon'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'fire: 0.25x',
        'flying: 0.5x',
        'ground: 2x',
        'ice: 2x',
        'normal: 0.5x',
        'poison: 0.5x',
        'steel: 2x',
      ],
      stats: [
        { stat: 82, name: 'HP' },
        { stat: 121, name: 'ATT' },
        { stat: 119, name: 'DEF' },
        { stat: 69, name: 'SPA' },
        { stat: 59, name: 'SPD' },
        { stat: 71, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'amaura') {
    const data = {
      name: 'amaura',
      abilities: ['refrigerate', 'snow-warning'],
      id: 698,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/698.png',
      types: ['rock', 'ice'],
      weaknesses: [
        'fighting: 4x',
        'flying: 0.5x',
        'grass: 2x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0.5x',
        'rock: 2x',
        'steel: 4x',
        'water: 2x',
      ],
      stats: [
        { stat: 77, name: 'HP' },
        { stat: 59, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 67, name: 'SPA' },
        { stat: 63, name: 'SPD' },
        { stat: 46, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'aurorus') {
    const data = {
      name: 'aurorus',
      abilities: ['refrigerate', 'snow-warning'],
      id: 699,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/699.png',
      types: ['rock', 'ice'],
      weaknesses: [
        'fighting: 4x',
        'flying: 0.5x',
        'grass: 2x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0.5x',
        'rock: 2x',
        'steel: 4x',
        'water: 2x',
      ],
      stats: [
        { stat: 123, name: 'HP' },
        { stat: 77, name: 'ATT' },
        { stat: 72, name: 'DEF' },
        { stat: 99, name: 'SPA' },
        { stat: 92, name: 'SPD' },
        { stat: 58, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sylveon') {
    const data = {
      name: 'sylveon',
      abilities: ['cute-charm', 'pixilate'],
      id: 700,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/700.png',
      types: ['fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'fighting: 0.5x',
        'poison: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 95, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 130, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'hawlucha') {
    const data = {
      name: 'hawlucha',
      abilities: ['limber', 'unburden', 'mold-breaker'],
      id: 701,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/701.png',
      types: ['fighting', 'flying'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 0.5x',
        'electric: 2x',
        'fairy: 2x',
        'fighting: 0.5x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'psychic: 2x',
      ],
      stats: [
        { stat: 78, name: 'HP' },
        { stat: 92, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 74, name: 'SPA' },
        { stat: 63, name: 'SPD' },
        { stat: 118, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'dedenne') {
    const data = {
      name: 'dedenne',
      abilities: ['cheek-pouch', 'pickup', 'plus'],
      id: 702,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/702.png',
      types: ['electric', 'fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'electric: 0.5x',
        'fighting: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'poison: 2x',
      ],
      stats: [
        { stat: 67, name: 'HP' },
        { stat: 58, name: 'ATT' },
        { stat: 57, name: 'DEF' },
        { stat: 81, name: 'SPA' },
        { stat: 67, name: 'SPD' },
        { stat: 101, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'carbink') {
    const data = {
      name: 'carbink',
      abilities: ['clear-body', 'sturdy'],
      id: 703,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/703.png',
      types: ['rock', 'fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 2x',
        'ground: 2x',
        'normal: 0.5x',
        'steel: 4x',
        'water: 2x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 150, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 150, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'goomy') {
    const data = {
      name: 'goomy',
      abilities: ['sap-sipper', 'hydration', 'gooey'],
      id: 704,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/704.png',
      types: ['dragon'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ice: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 35, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sliggoo') {
    const data = {
      name: 'sliggoo',
      abilities: ['sap-sipper', 'hydration', 'gooey'],
      id: 705,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/705.png',
      types: ['dragon'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ice: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 68, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 53, name: 'DEF' },
        { stat: 83, name: 'SPA' },
        { stat: 113, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'goodra') {
    const data = {
      name: 'goodra',
      abilities: ['sap-sipper', 'hydration', 'gooey'],
      id: 706,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/706.png',
      types: ['dragon'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ice: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 150, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'klefki') {
    const data = {
      name: 'klefki',
      abilities: ['prankster', 'magician'],
      id: 707,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/707.png',
      types: ['steel', 'fairy'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 0.5x',
        'dragon: 0x',
        'fairy: 0.5x',
        'fire: 2x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 57, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 91, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 87, name: 'SPD' },
        { stat: 75, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'phantump') {
    const data = {
      name: 'phantump',
      abilities: ['natural-cure', 'frisk', 'harvest'],
      id: 708,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/708.png',
      types: ['ghost', 'grass'],
      weaknesses: [
        'dark: 2x',
        'electric: 0.5x',
        'fighting: 0x',
        'fire: 2x',
        'flying: 2x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'normal: 0x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 43, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 48, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 38, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'trevenant') {
    const data = {
      name: 'trevenant',
      abilities: ['natural-cure', 'frisk', 'harvest'],
      id: 709,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/709.png',
      types: ['ghost', 'grass'],
      weaknesses: [
        'dark: 2x',
        'electric: 0.5x',
        'fighting: 0x',
        'fire: 2x',
        'flying: 2x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'normal: 0x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 85, name: 'HP' },
        { stat: 110, name: 'ATT' },
        { stat: 76, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 82, name: 'SPD' },
        { stat: 56, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'pumpkaboo-average') {
    const data = {
      name: 'pumpkaboo-average',
      abilities: ['pickup', 'frisk', 'insomnia'],
      id: 710,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/710.png',
      types: ['ghost', 'grass'],
      weaknesses: [
        'dark: 2x',
        'electric: 0.5x',
        'fighting: 0x',
        'fire: 2x',
        'flying: 2x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'normal: 0x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 49, name: 'HP' },
        { stat: 66, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 44, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 51, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gourgeist-average') {
    const data = {
      name: 'gourgeist-average',
      abilities: ['pickup', 'frisk', 'insomnia'],
      id: 711,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/711.png',
      types: ['ghost', 'grass'],
      weaknesses: [
        'dark: 2x',
        'electric: 0.5x',
        'fighting: 0x',
        'fire: 2x',
        'flying: 2x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'normal: 0x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 122, name: 'DEF' },
        { stat: 58, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 84, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'bergmite') {
    const data = {
      name: 'bergmite',
      abilities: ['own-tempo', 'ice-body', 'sturdy'],
      id: 712,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/712.png',
      types: ['ice'],
      weaknesses: [
        'fighting: 2x',
        'fire: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 69, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 32, name: 'SPA' },
        { stat: 35, name: 'SPD' },
        { stat: 28, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'avalugg') {
    const data = {
      name: 'avalugg',
      abilities: ['own-tempo', 'ice-body', 'sturdy'],
      id: 713,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/713.png',
      types: ['ice'],
      weaknesses: [
        'fighting: 2x',
        'fire: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 95, name: 'HP' },
        { stat: 117, name: 'ATT' },
        { stat: 184, name: 'DEF' },
        { stat: 44, name: 'SPA' },
        { stat: 46, name: 'SPD' },
        { stat: 28, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'noibat') {
    const data = {
      name: 'noibat',
      abilities: ['frisk', 'infiltrator', 'telepathy'],
      id: 714,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/714.png',
      types: ['flying', 'dragon'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 2x',
        'fairy: 2x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 4x',
        'rock: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 30, name: 'ATT' },
        { stat: 35, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'noivern') {
    const data = {
      name: 'noivern',
      abilities: ['frisk', 'infiltrator', 'telepathy'],
      id: 715,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/715.png',
      types: ['flying', 'dragon'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 2x',
        'fairy: 2x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 4x',
        'rock: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 85, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 97, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 123, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'xerneas') {
    const data = {
      name: 'xerneas',
      abilities: ['fairy-aura', ,],
      id: 716,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/716.png',
      types: ['fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'fighting: 0.5x',
        'poison: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 126, name: 'HP' },
        { stat: 131, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 131, name: 'SPA' },
        { stat: 98, name: 'SPD' },
        { stat: 99, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'yveltal') {
    const data = {
      name: 'yveltal',
      abilities: ['dark-aura', ,],
      id: 717,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/717.png',
      types: ['dark', 'flying'],
      weaknesses: [
        'dark: 0.5x',
        'electric: 2x',
        'fairy: 2x',
        'ghost: 0.5x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'psychic: 0x',
        'rock: 2x',
      ],
      stats: [
        { stat: 126, name: 'HP' },
        { stat: 131, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 131, name: 'SPA' },
        { stat: 98, name: 'SPD' },
        { stat: 99, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'zygarde-50') {
    const data = {
      name: 'zygarde-50',
      abilities: ['aura-break', ,],
      id: 718,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/718.png',
      types: ['dragon', 'ground'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0x',
        'fairy: 2x',
        'fire: 0.5x',
        'ice: 4x',
        'poison: 0.5x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 108, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 121, name: 'DEF' },
        { stat: 81, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'zygarde-10') {
    const data = {
      name: 'zygarde-10',
      abilities: ['aura-break', ,],
      id: 10181,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10181.png',
      types: ['dragon', 'ground'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0x',
        'fairy: 2x',
        'fire: 0.5x',
        'ice: 4x',
        'poison: 0.5x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 54, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 71, name: 'DEF' },
        { stat: 61, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 115, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'zygarde-complete') {
    const data = {
      name: 'zygarde-complete',
      abilities: ['power-construct', ,],
      id: 10120,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10120.png',
      types: ['dragon', 'ground'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0x',
        'fairy: 2x',
        'fire: 0.5x',
        'ice: 4x',
        'poison: 0.5x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 216, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 121, name: 'DEF' },
        { stat: 91, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'diancie') {
    const data = {
      name: 'diancie',
      abilities: ['clear-body', ,],
      id: 719,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/719.png',
      types: ['rock', 'fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 2x',
        'ground: 2x',
        'normal: 0.5x',
        'steel: 4x',
        'water: 2x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 150, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 150, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'diancie-mega') {
    const data = {
      name: 'diancie-mega',
      abilities: ['magic-bounce', ,],
      id: 10075,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10075.png',
      types: ['rock', 'fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 2x',
        'ground: 2x',
        'normal: 0.5x',
        'steel: 4x',
        'water: 2x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 160, name: 'ATT' },
        { stat: 110, name: 'DEF' },
        { stat: 160, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 110, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'hoopa') {
    const data = {
      name: 'hoopa',
      abilities: ['magician', ,],
      id: 720,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/720.png',
      types: ['psychic', 'ghost'],
      weaknesses: [
        'dark: 4x',
        'fighting: 0x',
        'ghost: 4x',
        'normal: 0x',
        'poison: 0.5x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 110, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 150, name: 'SPA' },
        { stat: 130, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'hoopa-unbound') {
    const data = {
      name: 'hoopa-unbound',
      abilities: ['magician', ,],
      id: 10086,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10086.png',
      types: ['psychic', 'dark'],
      weaknesses: ['bug: 4x', 'fairy: 2x', 'psychic: 0x'],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 160, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 170, name: 'SPA' },
        { stat: 130, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'volcanion') {
    const data = {
      name: 'volcanion',
      abilities: ['water-absorb', ,],
      id: 721,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/721.png',
      types: ['fire', 'water'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fairy: 0.5x',
        'fire: 0.25x',
        'ground: 2x',
        'ice: 0.25x',
        'rock: 2x',
        'steel: 0.25x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 110, name: 'ATT' },
        { stat: 120, name: 'DEF' },
        { stat: 130, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'rowlet') {
    const data = {
      name: 'rowlet',
      abilities: ['overgrow', 'long-reach'],
      id: 722,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/722.png',
      types: ['grass', 'flying'],
      weaknesses: [
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 4x',
        'poison: 2x',
        'rock: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 68, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 42, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'dartrix') {
    const data = {
      name: 'dartrix',
      abilities: ['overgrow', 'long-reach'],
      id: 723,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/723.png',
      types: ['grass', 'flying'],
      weaknesses: [
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ground: 0x',
        'ice: 4x',
        'poison: 2x',
        'rock: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 78, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 52, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'decidueye') {
    const data = {
      name: 'decidueye',
      abilities: ['overgrow', 'long-reach'],
      id: 724,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/724.png',
      types: ['grass', 'ghost'],
      weaknesses: [
        'dark: 2x',
        'electric: 0.5x',
        'fighting: 0x',
        'fire: 2x',
        'flying: 2x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'normal: 0x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 78, name: 'HP' },
        { stat: 107, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'litten') {
    const data = {
      name: 'litten',
      abilities: ['blaze', 'intimidate'],
      id: 725,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/725.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'torracat') {
    const data = {
      name: 'torracat',
      abilities: ['blaze', 'intimidate'],
      id: 726,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/726.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'incineroar') {
    const data = {
      name: 'incineroar',
      abilities: ['blaze', 'intimidate'],
      id: 727,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/727.png',
      types: ['fire', 'dark'],
      weaknesses: [
        'dark: 0.5x',
        'fighting: 2x',
        'fire: 0.5x',
        'ghost: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'psychic: 0x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 95, name: 'HP' },
        { stat: 115, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'popplio') {
    const data = {
      name: 'popplio',
      abilities: ['torrent', 'liquid-voice'],
      id: 728,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/728.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 54, name: 'ATT' },
        { stat: 54, name: 'DEF' },
        { stat: 66, name: 'SPA' },
        { stat: 56, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'brionne') {
    const data = {
      name: 'brionne',
      abilities: ['torrent', 'liquid-voice'],
      id: 729,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/729.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 69, name: 'ATT' },
        { stat: 69, name: 'DEF' },
        { stat: 91, name: 'SPA' },
        { stat: 81, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'primarina') {
    const data = {
      name: 'primarina',
      abilities: ['torrent', 'liquid-voice'],
      id: 730,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/730.png',
      types: ['water', 'fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'electric: 2x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 74, name: 'ATT' },
        { stat: 74, name: 'DEF' },
        { stat: 126, name: 'SPA' },
        { stat: 116, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'pikipek') {
    const data = {
      name: 'pikipek',
      abilities: ['keen-eye', 'skill-link', 'pickup'],
      id: 731,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/731.png',
      types: ['normal', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 35, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 30, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 30, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'trumbeak') {
    const data = {
      name: 'trumbeak',
      abilities: ['keen-eye', 'skill-link', 'pickup'],
      id: 732,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/732.png',
      types: ['normal', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 75, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'toucannon') {
    const data = {
      name: 'toucannon',
      abilities: ['keen-eye', 'skill-link', 'sheer-force'],
      id: 733,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/733.png',
      types: ['normal', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'yungoos') {
    const data = {
      name: 'yungoos',
      abilities: ['stakeout', 'strong-jaw', 'adaptability'],
      id: 734,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/734.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 48, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 30, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 30, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gumshoos') {
    const data = {
      name: 'gumshoos',
      abilities: ['stakeout', 'strong-jaw', 'adaptability'],
      id: 735,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/735.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 88, name: 'HP' },
        { stat: 110, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'grubbin') {
    const data = {
      name: 'grubbin',
      abilities: ['swarm', ,],
      id: 736,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/736.png',
      types: ['bug'],
      weaknesses: [
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 47, name: 'HP' },
        { stat: 62, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 46, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'charjabug') {
    const data = {
      name: 'charjabug',
      abilities: ['battery', ,],
      id: 737,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/737.png',
      types: ['bug', 'electric'],
      weaknesses: [
        'electric: 0.5x',
        'fighting: 0.5x',
        'fire: 2x',
        'grass: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 57, name: 'HP' },
        { stat: 82, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 36, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'vikavolt') {
    const data = {
      name: 'vikavolt',
      abilities: ['levitate', ,],
      id: 738,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/738.png',
      types: ['bug', 'electric'],
      weaknesses: [
        'electric: 0.5x',
        'fighting: 0.5x',
        'fire: 2x',
        'grass: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 77, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 145, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 43, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'crabrawler') {
    const data = {
      name: 'crabrawler',
      abilities: ['hyper-cutter', 'iron-fist', 'anger-point'],
      id: 739,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/739.png',
      types: ['fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'flying: 2x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 47, name: 'HP' },
        { stat: 82, name: 'ATT' },
        { stat: 57, name: 'DEF' },
        { stat: 42, name: 'SPA' },
        { stat: 47, name: 'SPD' },
        { stat: 63, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'crabominable') {
    const data = {
      name: 'crabominable',
      abilities: ['hyper-cutter', 'iron-fist', 'anger-point'],
      id: 740,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/740.png',
      types: ['fighting', 'ice'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 2x',
        'ice: 0.5x',
        'psychic: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 97, name: 'HP' },
        { stat: 132, name: 'ATT' },
        { stat: 77, name: 'DEF' },
        { stat: 62, name: 'SPA' },
        { stat: 67, name: 'SPD' },
        { stat: 43, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'oricorio-baile') {
    const data = {
      name: 'oricorio-baile',
      abilities: ['dancer', ,],
      id: 741,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/741.png',
      types: ['fire', 'flying'],
      weaknesses: [
        'bug: 0.25x',
        'electric: 2x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'grass: 0.25x',
        'ground: 0x',
        'rock: 4x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 98, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 93, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'oricorio-pom-pom') {
    const data = {
      name: 'oricorio-pom-pom',
      abilities: ['dancer', ,],
      id: 10123,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10123.png',
      types: ['electric', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'fighting: 0.5x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 98, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 93, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'oricorio-pau') {
    const data = {
      name: 'oricorio-pau',
      abilities: ['dancer', ,],
      id: 10124,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10124.png',
      types: ['psychic', 'flying'],
      weaknesses: [
        'dark: 2x',
        'electric: 2x',
        'fighting: 0.25x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'psychic: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 98, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 93, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'oricorio-sensu') {
    const data = {
      name: 'oricorio-sensu',
      abilities: ['dancer', ,],
      id: 10125,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10125.png',
      types: ['ghost', 'flying'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 2x',
        'electric: 2x',
        'fighting: 0x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'normal: 0x',
        'poison: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 98, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 93, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cutiefly') {
    const data = {
      name: 'cutiefly',
      abilities: ['honey-gather', 'shield-dust', 'sweet-veil'],
      id: 742,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/742.png',
      types: ['bug', 'fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'poison: 2x',
        'rock: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 84, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'ribombee') {
    const data = {
      name: 'ribombee',
      abilities: ['honey-gather', 'shield-dust', 'sweet-veil'],
      id: 743,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/743.png',
      types: ['bug', 'fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'poison: 2x',
        'rock: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 124, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'rockruff') {
    const data = {
      name: 'rockruff',
      abilities: ['keen-eye', 'vital-spirit', 'steadfast'],
      id: 744,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/744.png',
      types: ['rock'],
      weaknesses: [
        'fighting: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 2x',
        'ground: 2x',
        'normal: 0.5x',
        'poison: 0.5x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'lycanroc-midday') {
    const data = {
      name: 'lycanroc-midday',
      abilities: ['keen-eye', 'sand-rush', 'steadfast'],
      id: 745,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/745.png',
      types: ['rock'],
      weaknesses: [
        'fighting: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 2x',
        'ground: 2x',
        'normal: 0.5x',
        'poison: 0.5x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 115, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 112, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'lycanroc-midnight') {
    const data = {
      name: 'lycanroc-midnight',
      abilities: ['keen-eye', 'vital-spirit', 'no-guard'],
      id: 10126,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10126.png',
      types: ['rock'],
      weaknesses: [
        'fighting: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 2x',
        'ground: 2x',
        'normal: 0.5x',
        'poison: 0.5x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 85, name: 'HP' },
        { stat: 115, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 82, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'lycanroc-dusk') {
    const data = {
      name: 'lycanroc-dusk',
      abilities: ['tough-claws', ,],
      id: 10152,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10152.png',
      types: ['rock'],
      weaknesses: [
        'fighting: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 2x',
        'ground: 2x',
        'normal: 0.5x',
        'poison: 0.5x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 117, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 110, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'wishiwashi-solo') {
    const data = {
      name: 'wishiwashi-solo',
      abilities: ['schooling', ,],
      id: 746,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/746.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 20, name: 'ATT' },
        { stat: 20, name: 'DEF' },
        { stat: 25, name: 'SPA' },
        { stat: 25, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'wishiwashi-school') {
    const data = {
      name: 'wishiwashi-school',
      abilities: ['schooling', ,],
      id: 10127,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10127.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 140, name: 'ATT' },
        { stat: 130, name: 'DEF' },
        { stat: 140, name: 'SPA' },
        { stat: 135, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mareanie') {
    const data = {
      name: 'mareanie',
      abilities: ['merciless', 'limber', 'regenerator'],
      id: 747,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/747.png',
      types: ['poison', 'water'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'poison: 0.5x',
        'psychic: 2x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 53, name: 'ATT' },
        { stat: 62, name: 'DEF' },
        { stat: 43, name: 'SPA' },
        { stat: 52, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'toxapex') {
    const data = {
      name: 'toxapex',
      abilities: ['merciless', 'limber', 'regenerator'],
      id: 748,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/748.png',
      types: ['poison', 'water'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'poison: 0.5x',
        'psychic: 2x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 63, name: 'ATT' },
        { stat: 152, name: 'DEF' },
        { stat: 53, name: 'SPA' },
        { stat: 142, name: 'SPD' },
        { stat: 35, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mudbray') {
    const data = {
      name: 'mudbray',
      abilities: ['own-tempo', 'stamina', 'inner-focus'],
      id: 749,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/749.png',
      types: ['ground'],
      weaknesses: [
        'electric: 0x',
        'grass: 2x',
        'ice: 2x',
        'poison: 0.5x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mudsdale') {
    const data = {
      name: 'mudsdale',
      abilities: ['own-tempo', 'stamina', 'inner-focus'],
      id: 750,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/750.png',
      types: ['ground'],
      weaknesses: [
        'electric: 0x',
        'grass: 2x',
        'ice: 2x',
        'poison: 0.5x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 125, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 35, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'dewpider') {
    const data = {
      name: 'dewpider',
      abilities: ['water-bubble', 'water-absorb'],
      id: 751,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/751.png',
      types: ['water', 'bug'],
      weaknesses: [
        'electric: 2x',
        'fighting: 0.5x',
        'flying: 2x',
        'ground: 0.5x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 38, name: 'HP' },
        { stat: 40, name: 'ATT' },
        { stat: 52, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 72, name: 'SPD' },
        { stat: 27, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'araquanid') {
    const data = {
      name: 'araquanid',
      abilities: ['water-bubble', 'water-absorb'],
      id: 752,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/752.png',
      types: ['water', 'bug'],
      weaknesses: [
        'electric: 2x',
        'fighting: 0.5x',
        'flying: 2x',
        'ground: 0.5x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 68, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 92, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 132, name: 'SPD' },
        { stat: 42, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'fomantis') {
    const data = {
      name: 'fomantis',
      abilities: ['leaf-guard', 'contrary'],
      id: 753,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/753.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 35, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 35, name: 'SPD' },
        { stat: 35, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'lurantis') {
    const data = {
      name: 'lurantis',
      abilities: ['leaf-guard', 'contrary'],
      id: 754,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/754.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 105, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'morelull') {
    const data = {
      name: 'morelull',
      abilities: ['illuminate', 'effect-spore', 'rain-dish'],
      id: 755,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/755.png',
      types: ['grass', 'fairy'],
      weaknesses: [
        'dark: 0.5x',
        'dragon: 0x',
        'electric: 0.5x',
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 4x',
        'steel: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 35, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 15, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'shiinotic') {
    const data = {
      name: 'shiinotic',
      abilities: ['illuminate', 'effect-spore', 'rain-dish'],
      id: 756,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/756.png',
      types: ['grass', 'fairy'],
      weaknesses: [
        'dark: 0.5x',
        'dragon: 0x',
        'electric: 0.5x',
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 4x',
        'steel: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'salandit') {
    const data = {
      name: 'salandit',
      abilities: ['corrosion', 'oblivious'],
      id: 757,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/757.png',
      types: ['poison', 'fire'],
      weaknesses: [
        'bug: 0.25x',
        'fairy: 0.25x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'grass: 0.25x',
        'ground: 4x',
        'ice: 0.5x',
        'poison: 0.5x',
        'psychic: 2x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 48, name: 'HP' },
        { stat: 44, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 71, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 77, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'salazzle') {
    const data = {
      name: 'salazzle',
      abilities: ['corrosion', 'oblivious'],
      id: 758,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/758.png',
      types: ['poison', 'fire'],
      weaknesses: [
        'bug: 0.25x',
        'fairy: 0.25x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'grass: 0.25x',
        'ground: 4x',
        'ice: 0.5x',
        'poison: 0.5x',
        'psychic: 2x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 68, name: 'HP' },
        { stat: 64, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 111, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 117, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'stufful') {
    const data = {
      name: 'stufful',
      abilities: ['fluffy', 'klutz', 'cute-charm'],
      id: 759,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/759.png',
      types: ['normal', 'fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'flying: 2x',
        'ghost: 0x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'bewear') {
    const data = {
      name: 'bewear',
      abilities: ['fluffy', 'klutz', 'unnerve'],
      id: 760,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/760.png',
      types: ['normal', 'fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'flying: 2x',
        'ghost: 0x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 120, name: 'HP' },
        { stat: 125, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'bounsweet') {
    const data = {
      name: 'bounsweet',
      abilities: ['leaf-guard', 'oblivious', 'sweet-veil'],
      id: 761,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/761.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 42, name: 'HP' },
        { stat: 30, name: 'ATT' },
        { stat: 38, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 38, name: 'SPD' },
        { stat: 32, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'steenee') {
    const data = {
      name: 'steenee',
      abilities: ['leaf-guard', 'oblivious', 'sweet-veil'],
      id: 762,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/762.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 52, name: 'HP' },
        { stat: 40, name: 'ATT' },
        { stat: 48, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 48, name: 'SPD' },
        { stat: 62, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tsareena') {
    const data = {
      name: 'tsareena',
      abilities: ['leaf-guard', 'queenly-majesty', 'sweet-veil'],
      id: 763,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/763.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 72, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 98, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 98, name: 'SPD' },
        { stat: 72, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'comfey') {
    const data = {
      name: 'comfey',
      abilities: ['flower-veil', 'triage', 'natural-cure'],
      id: 764,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/764.png',
      types: ['fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'fighting: 0.5x',
        'poison: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 51, name: 'HP' },
        { stat: 52, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 82, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'oranguru') {
    const data = {
      name: 'oranguru',
      abilities: ['inner-focus', 'telepathy', 'symbiosis'],
      id: 765,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/765.png',
      types: ['normal', 'psychic'],
      weaknesses: ['bug: 2x', 'dark: 2x', 'ghost: 0x', 'psychic: 0.5x'],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'passimian') {
    const data = {
      name: 'passimian',
      abilities: ['receiver', 'defiant'],
      id: 766,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/766.png',
      types: ['fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'flying: 2x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'wimpod') {
    const data = {
      name: 'wimpod',
      abilities: ['wimp-out', ,],
      id: 767,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/767.png',
      types: ['bug', 'water'],
      weaknesses: [
        'electric: 2x',
        'fighting: 0.5x',
        'flying: 2x',
        'ground: 0.5x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 25, name: 'HP' },
        { stat: 35, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 20, name: 'SPA' },
        { stat: 30, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'golisopod') {
    const data = {
      name: 'golisopod',
      abilities: ['emergency-exit', ,],
      id: 768,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/768.png',
      types: ['bug', 'water'],
      weaknesses: [
        'electric: 2x',
        'fighting: 0.5x',
        'flying: 2x',
        'ground: 0.5x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 125, name: 'ATT' },
        { stat: 140, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sandygast') {
    const data = {
      name: 'sandygast',
      abilities: ['water-compaction', 'sand-veil'],
      id: 769,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/769.png',
      types: ['ghost', 'ground'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'electric: 0x',
        'fighting: 0x',
        'ghost: 2x',
        'grass: 2x',
        'ice: 2x',
        'normal: 0x',
        'poison: 0.25x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 15, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'palossand') {
    const data = {
      name: 'palossand',
      abilities: ['water-compaction', 'sand-veil'],
      id: 770,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/770.png',
      types: ['ghost', 'ground'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'electric: 0x',
        'fighting: 0x',
        'ghost: 2x',
        'grass: 2x',
        'ice: 2x',
        'normal: 0x',
        'poison: 0.25x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 85, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 110, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 35, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'pyukumuku') {
    const data = {
      name: 'pyukumuku',
      abilities: ['innards-out', 'unaware'],
      id: 771,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/771.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 130, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 130, name: 'SPD' },
        { stat: 5, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'type-null') {
    const data = {
      name: 'type-null',
      abilities: ['battle-armor', ,],
      id: 772,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/772.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 95, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 59, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'silvally') {
    const data = {
      name: 'silvally',
      abilities: ['rks-system', ,],
      id: 773,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/773.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 95, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'minior-red-meteor') {
    const data = {
      name: 'minior-red-meteor',
      abilities: ['shields-down', ,],
      id: 774,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/774.png',
      types: ['rock', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'normal: 0.5x',
        'poison: 0.5x',
        'rock: 2x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'komala') {
    const data = {
      name: 'komala',
      abilities: ['comatose', ,],
      id: 775,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/775.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 115, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'turtonator') {
    const data = {
      name: 'turtonator',
      abilities: ['shell-armor', ,],
      id: 776,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/776.png',
      types: ['fire', 'dragon'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 2x',
        'electric: 0.5x',
        'fire: 0.25x',
        'grass: 0.25x',
        'ground: 2x',
        'rock: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 78, name: 'ATT' },
        { stat: 135, name: 'DEF' },
        { stat: 91, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 36, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'togedemaru') {
    const data = {
      name: 'togedemaru',
      abilities: ['iron-barbs', 'lightning-rod', 'sturdy'],
      id: 777,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/777.png',
      types: ['electric', 'steel'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'electric: 0.5x',
        'fairy: 0.5x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 0.25x',
        'grass: 0.5x',
        'ground: 4x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'steel: 0.25x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 98, name: 'ATT' },
        { stat: 63, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 73, name: 'SPD' },
        { stat: 96, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mimikyu-disguised') {
    const data = {
      name: 'mimikyu-disguised',
      abilities: ['disguise', ,],
      id: 778,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/778.png',
      types: ['ghost', 'fairy'],
      weaknesses: [
        'bug: 0.25x',
        'dragon: 0x',
        'fighting: 0x',
        'ghost: 2x',
        'normal: 0x',
        'steel: 2x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 96, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'bruxish') {
    const data = {
      name: 'bruxish',
      abilities: ['dazzling', 'strong-jaw', 'wonder-skin'],
      id: 779,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/779.png',
      types: ['water', 'psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'electric: 2x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'ghost: 2x',
        'grass: 2x',
        'ice: 0.5x',
        'psychic: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 68, name: 'HP' },
        { stat: 105, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 92, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'drampa') {
    const data = {
      name: 'drampa',
      abilities: ['berserk', 'sap-sipper', 'cloud-nine'],
      id: 780,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/780.png',
      types: ['normal', 'dragon'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'fire: 0.5x',
        'ghost: 0x',
        'grass: 0.5x',
        'ice: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 78, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 135, name: 'SPA' },
        { stat: 91, name: 'SPD' },
        { stat: 36, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'dhelmise') {
    const data = {
      name: 'dhelmise',
      abilities: ['steelworker', ,],
      id: 781,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/781.png',
      types: ['ghost', 'grass'],
      weaknesses: [
        'dark: 2x',
        'electric: 0.5x',
        'fighting: 0x',
        'fire: 2x',
        'flying: 2x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'normal: 0x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 131, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 86, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'jangmo-o') {
    const data = {
      name: 'jangmo-o',
      abilities: ['bulletproof', 'soundproof', 'overcoat'],
      id: 782,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/782.png',
      types: ['dragon'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ice: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'hakamo-o') {
    const data = {
      name: 'hakamo-o',
      abilities: ['bulletproof', 'soundproof', 'overcoat'],
      id: 783,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/783.png',
      types: ['dragon', 'fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 4x',
        'fire: 0.5x',
        'flying: 2x',
        'grass: 0.5x',
        'ice: 2x',
        'psychic: 2x',
        'rock: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'kommo-o') {
    const data = {
      name: 'kommo-o',
      abilities: ['bulletproof', 'soundproof', 'overcoat'],
      id: 784,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/784.png',
      types: ['dragon', 'fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 4x',
        'fire: 0.5x',
        'flying: 2x',
        'grass: 0.5x',
        'ice: 2x',
        'psychic: 2x',
        'rock: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 110, name: 'ATT' },
        { stat: 125, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tapu-koko') {
    const data = {
      name: 'tapu-koko',
      abilities: ['electric-surge', 'telepathy'],
      id: 785,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/785.png',
      types: ['electric', 'fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'electric: 0.5x',
        'fighting: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'poison: 2x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 115, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 130, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tapu-lele') {
    const data = {
      name: 'tapu-lele',
      abilities: ['psychic-surge', 'telepathy'],
      id: 786,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/786.png',
      types: ['psychic', 'fairy'],
      weaknesses: [
        'dragon: 0x',
        'fighting: 0.25x',
        'ghost: 2x',
        'poison: 2x',
        'psychic: 0.5x',
        'steel: 2x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 130, name: 'SPA' },
        { stat: 115, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tapu-bulu') {
    const data = {
      name: 'tapu-bulu',
      abilities: ['grassy-surge', 'telepathy'],
      id: 787,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/787.png',
      types: ['grass', 'fairy'],
      weaknesses: [
        'dark: 0.5x',
        'dragon: 0x',
        'electric: 0.5x',
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 4x',
        'steel: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 130, name: 'ATT' },
        { stat: 115, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 75, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tapu-fini') {
    const data = {
      name: 'tapu-fini',
      abilities: ['misty-surge', 'telepathy'],
      id: 788,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/788.png',
      types: ['water', 'fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'electric: 2x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 115, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 130, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cosmog') {
    const data = {
      name: 'cosmog',
      abilities: ['unaware', ,],
      id: 789,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/789.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 43, name: 'HP' },
        { stat: 29, name: 'ATT' },
        { stat: 31, name: 'DEF' },
        { stat: 29, name: 'SPA' },
        { stat: 31, name: 'SPD' },
        { stat: 37, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cosmoem') {
    const data = {
      name: 'cosmoem',
      abilities: ['sturdy', ,],
      id: 790,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/790.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 43, name: 'HP' },
        { stat: 29, name: 'ATT' },
        { stat: 131, name: 'DEF' },
        { stat: 29, name: 'SPA' },
        { stat: 131, name: 'SPD' },
        { stat: 37, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'solgaleo') {
    const data = {
      name: 'solgaleo',
      abilities: ['full-metal-body', ,],
      id: 791,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/791.png',
      types: ['psychic', 'steel'],
      weaknesses: [
        'dark: 2x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fire: 2x',
        'flying: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.25x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 137, name: 'HP' },
        { stat: 137, name: 'ATT' },
        { stat: 107, name: 'DEF' },
        { stat: 113, name: 'SPA' },
        { stat: 89, name: 'SPD' },
        { stat: 97, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'lunala') {
    const data = {
      name: 'lunala',
      abilities: ['shadow-shield', ,],
      id: 792,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/792.png',
      types: ['psychic', 'ghost'],
      weaknesses: [
        'dark: 4x',
        'fighting: 0x',
        'ghost: 4x',
        'normal: 0x',
        'poison: 0.5x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 137, name: 'HP' },
        { stat: 113, name: 'ATT' },
        { stat: 89, name: 'DEF' },
        { stat: 137, name: 'SPA' },
        { stat: 107, name: 'SPD' },
        { stat: 97, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'nihilego') {
    const data = {
      name: 'nihilego',
      abilities: ['beast-boost', ,],
      id: 793,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/793.png',
      types: ['rock', 'poison'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'flying: 0.5x',
        'ground: 4x',
        'normal: 0.5x',
        'poison: 0.25x',
        'psychic: 2x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 109, name: 'HP' },
        { stat: 53, name: 'ATT' },
        { stat: 47, name: 'DEF' },
        { stat: 127, name: 'SPA' },
        { stat: 131, name: 'SPD' },
        { stat: 103, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'buzzwole') {
    const data = {
      name: 'buzzwole',
      abilities: ['beast-boost', ,],
      id: 794,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/794.png',
      types: ['bug', 'fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 4x',
        'grass: 0.5x',
        'ground: 0.5x',
        'psychic: 2x',
      ],
      stats: [
        { stat: 107, name: 'HP' },
        { stat: 139, name: 'ATT' },
        { stat: 139, name: 'DEF' },
        { stat: 53, name: 'SPA' },
        { stat: 53, name: 'SPD' },
        { stat: 79, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'pheromosa') {
    const data = {
      name: 'pheromosa',
      abilities: ['beast-boost', ,],
      id: 795,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/795.png',
      types: ['bug', 'fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 4x',
        'grass: 0.5x',
        'ground: 0.5x',
        'psychic: 2x',
      ],
      stats: [
        { stat: 71, name: 'HP' },
        { stat: 137, name: 'ATT' },
        { stat: 37, name: 'DEF' },
        { stat: 137, name: 'SPA' },
        { stat: 37, name: 'SPD' },
        { stat: 151, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'xurkitree') {
    const data = {
      name: 'xurkitree',
      abilities: ['beast-boost', ,],
      id: 796,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/796.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 83, name: 'HP' },
        { stat: 89, name: 'ATT' },
        { stat: 71, name: 'DEF' },
        { stat: 173, name: 'SPA' },
        { stat: 71, name: 'SPD' },
        { stat: 83, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'celesteela') {
    const data = {
      name: 'celesteela',
      abilities: ['beast-boost', ,],
      id: 797,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/797.png',
      types: ['steel', 'flying'],
      weaknesses: [
        'bug: 0.25x',
        'dragon: 0.5x',
        'electric: 2x',
        'fairy: 0.5x',
        'fire: 2x',
        'flying: 0.5x',
        'grass: 0.25x',
        'ground: 0x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 97, name: 'HP' },
        { stat: 101, name: 'ATT' },
        { stat: 103, name: 'DEF' },
        { stat: 107, name: 'SPA' },
        { stat: 101, name: 'SPD' },
        { stat: 61, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'kartana') {
    const data = {
      name: 'kartana',
      abilities: ['beast-boost', ,],
      id: 798,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/798.png',
      types: ['grass', 'steel'],
      weaknesses: [
        'dragon: 0.5x',
        'electric: 0.5x',
        'fairy: 0.5x',
        'fighting: 2x',
        'fire: 4x',
        'grass: 0.25x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 59, name: 'HP' },
        { stat: 181, name: 'ATT' },
        { stat: 131, name: 'DEF' },
        { stat: 59, name: 'SPA' },
        { stat: 31, name: 'SPD' },
        { stat: 109, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'guzzlord') {
    const data = {
      name: 'guzzlord',
      abilities: ['beast-boost', ,],
      id: 799,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/799.png',
      types: ['dark', 'dragon'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 4x',
        'fighting: 2x',
        'fire: 0.5x',
        'ghost: 0.5x',
        'grass: 0.5x',
        'ice: 2x',
        'psychic: 0x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 223, name: 'HP' },
        { stat: 101, name: 'ATT' },
        { stat: 53, name: 'DEF' },
        { stat: 97, name: 'SPA' },
        { stat: 53, name: 'SPD' },
        { stat: 43, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'necrozma') {
    const data = {
      name: 'necrozma',
      abilities: ['prism-armor', ,],
      id: 800,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/800.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 97, name: 'HP' },
        { stat: 107, name: 'ATT' },
        { stat: 101, name: 'DEF' },
        { stat: 127, name: 'SPA' },
        { stat: 89, name: 'SPD' },
        { stat: 79, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'necrozma-dusk') {
    const data = {
      name: 'necrozma-dusk',
      abilities: ['prism-armor', ,],
      id: 10155,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10155.png',
      types: ['psychic', 'steel'],
      weaknesses: [
        'dark: 2x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fire: 2x',
        'flying: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.25x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 97, name: 'HP' },
        { stat: 157, name: 'ATT' },
        { stat: 127, name: 'DEF' },
        { stat: 113, name: 'SPA' },
        { stat: 109, name: 'SPD' },
        { stat: 77, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'necrozma-dawn') {
    const data = {
      name: 'necrozma-dawn',
      abilities: ['prism-armor', ,],
      id: 10156,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10156.png',
      types: ['psychic', 'ghost'],
      weaknesses: [
        'dark: 4x',
        'fighting: 0x',
        'ghost: 4x',
        'normal: 0x',
        'poison: 0.5x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 97, name: 'HP' },
        { stat: 113, name: 'ATT' },
        { stat: 109, name: 'DEF' },
        { stat: 157, name: 'SPA' },
        { stat: 127, name: 'SPD' },
        { stat: 77, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'necrozma-ultra') {
    const data = {
      name: 'necrozma-ultra',
      abilities: ['neuroforce', ,],
      id: 10157,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10157.png',
      types: ['psychic', 'dragon'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ice: 2x',
        'psychic: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 97, name: 'HP' },
        { stat: 167, name: 'ATT' },
        { stat: 97, name: 'DEF' },
        { stat: 167, name: 'SPA' },
        { stat: 97, name: 'SPD' },
        { stat: 129, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'magearna') {
    const data = {
      name: 'magearna',
      abilities: ['soul-heart', ,],
      id: 801,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/801.png',
      types: ['steel', 'fairy'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 0.5x',
        'dragon: 0x',
        'fairy: 0.5x',
        'fire: 2x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 115, name: 'DEF' },
        { stat: 130, name: 'SPA' },
        { stat: 115, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'marshadow') {
    const data = {
      name: 'marshadow',
      abilities: ['technician', ,],
      id: 802,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/802.png',
      types: ['fighting', 'ghost'],
      weaknesses: [
        'bug: 0.25x',
        'fairy: 2x',
        'fighting: 0x',
        'flying: 2x',
        'ghost: 2x',
        'normal: 0x',
        'poison: 0.5x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 125, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 125, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'poipole') {
    const data = {
      name: 'poipole',
      abilities: ['beast-boost', ,],
      id: 803,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/803.png',
      types: ['poison'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'poison: 0.5x',
        'psychic: 2x',
      ],
      stats: [
        { stat: 67, name: 'HP' },
        { stat: 73, name: 'ATT' },
        { stat: 67, name: 'DEF' },
        { stat: 73, name: 'SPA' },
        { stat: 67, name: 'SPD' },
        { stat: 73, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'naganadel') {
    const data = {
      name: 'naganadel',
      abilities: ['beast-boost', ,],
      id: 804,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/804.png',
      types: ['poison', 'dragon'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 2x',
        'electric: 0.5x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'grass: 0.25x',
        'ground: 2x',
        'ice: 2x',
        'poison: 0.5x',
        'psychic: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 73, name: 'HP' },
        { stat: 73, name: 'ATT' },
        { stat: 73, name: 'DEF' },
        { stat: 127, name: 'SPA' },
        { stat: 73, name: 'SPD' },
        { stat: 121, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'stakataka') {
    const data = {
      name: 'stakataka',
      abilities: ['beast-boost', ,],
      id: 805,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/805.png',
      types: ['rock', 'steel'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fighting: 4x',
        'flying: 0.25x',
        'ground: 4x',
        'ice: 0.5x',
        'normal: 0.25x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 61, name: 'HP' },
        { stat: 131, name: 'ATT' },
        { stat: 211, name: 'DEF' },
        { stat: 53, name: 'SPA' },
        { stat: 101, name: 'SPD' },
        { stat: 13, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'blacephalon') {
    const data = {
      name: 'blacephalon',
      abilities: ['beast-boost', ,],
      id: 806,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/806.png',
      types: ['fire', 'ghost'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 2x',
        'fairy: 0.5x',
        'fighting: 0x',
        'fire: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0x',
        'poison: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 53, name: 'HP' },
        { stat: 127, name: 'ATT' },
        { stat: 53, name: 'DEF' },
        { stat: 151, name: 'SPA' },
        { stat: 79, name: 'SPD' },
        { stat: 107, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'zeraora') {
    const data = {
      name: 'zeraora',
      abilities: ['volt-absorb', ,],
      id: 807,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/807.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 88, name: 'HP' },
        { stat: 112, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 102, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 143, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'meltan') {
    const data = {
      name: 'meltan',
      abilities: ['magnet-pull', ,],
      id: 808,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/808.png',
      types: ['steel'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 46, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 35, name: 'SPD' },
        { stat: 34, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'melmetal') {
    const data = {
      name: 'melmetal',
      abilities: ['iron-fist', ,],
      id: 809,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/809.png',
      types: ['steel'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 135, name: 'HP' },
        { stat: 143, name: 'ATT' },
        { stat: 143, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 34, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'grookey') {
    const data = {
      name: 'grookey',
      abilities: ['overgrow', 'grassy-surge'],
      id: 810,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/810.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'thwackey') {
    const data = {
      name: 'thwackey',
      abilities: ['overgrow', 'grassy-surge'],
      id: 811,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/811.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'rillaboom') {
    const data = {
      name: 'rillaboom',
      abilities: ['overgrow', 'grassy-surge'],
      id: 812,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/812.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 125, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'scorbunny') {
    const data = {
      name: 'scorbunny',
      abilities: ['blaze', 'libero'],
      id: 813,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/813.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 71, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 69, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'raboot') {
    const data = {
      name: 'raboot',
      abilities: ['blaze', 'libero'],
      id: 814,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/814.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 86, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 94, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cinderace') {
    const data = {
      name: 'cinderace',
      abilities: ['blaze', 'libero'],
      id: 815,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/815.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 116, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 119, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sobble') {
    const data = {
      name: 'sobble',
      abilities: ['torrent', 'sniper'],
      id: 816,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/816.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 40, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'drizzile') {
    const data = {
      name: 'drizzile',
      abilities: ['torrent', 'sniper'],
      id: 817,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/817.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'inteleon') {
    const data = {
      name: 'inteleon',
      abilities: ['torrent', 'sniper'],
      id: 818,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/818.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 120, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'skwovet') {
    const data = {
      name: 'skwovet',
      abilities: ['cheek-pouch', 'gluttony'],
      id: 819,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/819.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 35, name: 'SPD' },
        { stat: 25, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'greedent') {
    const data = {
      name: 'greedent',
      abilities: ['cheek-pouch', 'gluttony'],
      id: 820,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/820.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 120, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 20, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'rookidee') {
    const data = {
      name: 'rookidee',
      abilities: ['keen-eye', 'unnerve', 'big-pecks'],
      id: 821,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/821.png',
      types: ['flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fighting: 0.5x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 38, name: 'HP' },
        { stat: 47, name: 'ATT' },
        { stat: 35, name: 'DEF' },
        { stat: 33, name: 'SPA' },
        { stat: 35, name: 'SPD' },
        { stat: 57, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'corvisquire') {
    const data = {
      name: 'corvisquire',
      abilities: ['keen-eye', 'unnerve', 'big-pecks'],
      id: 822,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/822.png',
      types: ['flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'fighting: 0.5x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 68, name: 'HP' },
        { stat: 67, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 43, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 77, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'corviknight') {
    const data = {
      name: 'corviknight',
      abilities: ['pressure', 'unnerve', 'mirror-armor'],
      id: 823,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/823.png',
      types: ['flying', 'steel'],
      weaknesses: [
        'bug: 0.25x',
        'dragon: 0.5x',
        'electric: 2x',
        'fairy: 0.5x',
        'fire: 2x',
        'flying: 0.5x',
        'grass: 0.25x',
        'ground: 0x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 98, name: 'HP' },
        { stat: 87, name: 'ATT' },
        { stat: 105, name: 'DEF' },
        { stat: 53, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 67, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'blipbug') {
    const data = {
      name: 'blipbug',
      abilities: ['swarm', 'compound-eyes', 'telepathy'],
      id: 824,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/824.png',
      types: ['bug'],
      weaknesses: [
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 25, name: 'HP' },
        { stat: 20, name: 'ATT' },
        { stat: 20, name: 'DEF' },
        { stat: 25, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'dottler') {
    const data = {
      name: 'dottler',
      abilities: ['swarm', 'compound-eyes', 'telepathy'],
      id: 825,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/825.png',
      types: ['bug', 'psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'psychic: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 35, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'orbeetle') {
    const data = {
      name: 'orbeetle',
      abilities: ['swarm', 'frisk', 'telepathy'],
      id: 826,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/826.png',
      types: ['bug', 'psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'psychic: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 110, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 120, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'nickit') {
    const data = {
      name: 'nickit',
      abilities: ['run-away', 'unburden', 'stakeout'],
      id: 827,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/827.png',
      types: ['dark'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'ghost: 0.5x',
        'psychic: 0x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 28, name: 'ATT' },
        { stat: 28, name: 'DEF' },
        { stat: 47, name: 'SPA' },
        { stat: 52, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'thievul') {
    const data = {
      name: 'thievul',
      abilities: ['run-away', 'unburden', 'stakeout'],
      id: 828,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/828.png',
      types: ['dark'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'ghost: 0.5x',
        'psychic: 0x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 58, name: 'ATT' },
        { stat: 58, name: 'DEF' },
        { stat: 87, name: 'SPA' },
        { stat: 92, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gossifleur') {
    const data = {
      name: 'gossifleur',
      abilities: ['cotton-down', 'regenerator', 'effect-spore'],
      id: 829,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/829.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 40, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 10, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'eldegoss') {
    const data = {
      name: 'eldegoss',
      abilities: ['cotton-down', 'regenerator', 'effect-spore'],
      id: 830,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/830.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 120, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'wooloo') {
    const data = {
      name: 'wooloo',
      abilities: ['fluffy', 'run-away', 'bulletproof'],
      id: 831,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/831.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 42, name: 'HP' },
        { stat: 40, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 48, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'dubwool') {
    const data = {
      name: 'dubwool',
      abilities: ['fluffy', 'steadfast', 'bulletproof'],
      id: 832,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/832.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 72, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 88, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'chewtle') {
    const data = {
      name: 'chewtle',
      abilities: ['strong-jaw', 'shell-armor', 'swift-swim'],
      id: 833,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/833.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 64, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 38, name: 'SPA' },
        { stat: 38, name: 'SPD' },
        { stat: 44, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'drednaw') {
    const data = {
      name: 'drednaw',
      abilities: ['strong-jaw', 'shell-armor', 'swift-swim'],
      id: 834,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/834.png',
      types: ['water', 'rock'],
      weaknesses: [
        'electric: 2x',
        'fighting: 2x',
        'fire: 0.25x',
        'flying: 0.5x',
        'grass: 4x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 115, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 48, name: 'SPA' },
        { stat: 68, name: 'SPD' },
        { stat: 74, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'yamper') {
    const data = {
      name: 'yamper',
      abilities: ['ball-fetch', 'rattled'],
      id: 835,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/835.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 59, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 26, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'boltund') {
    const data = {
      name: 'boltund',
      abilities: ['strong-jaw', 'competitive'],
      id: 836,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/836.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 69, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 121, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'rolycoly') {
    const data = {
      name: 'rolycoly',
      abilities: ['steam-engine', 'heatproof', 'flash-fire'],
      id: 837,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/837.png',
      types: ['rock'],
      weaknesses: [
        'fighting: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 2x',
        'ground: 2x',
        'normal: 0.5x',
        'poison: 0.5x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 30, name: 'HP' },
        { stat: 40, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'carkol') {
    const data = {
      name: 'carkol',
      abilities: ['steam-engine', 'flame-body', 'flash-fire'],
      id: 838,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/838.png',
      types: ['rock', 'fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 2x',
        'fire: 0.25x',
        'flying: 0.5x',
        'ground: 4x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0.5x',
        'rock: 2x',
        'water: 4x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'coalossal') {
    const data = {
      name: 'coalossal',
      abilities: ['steam-engine', 'flame-body', 'flash-fire'],
      id: 839,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/839.png',
      types: ['rock', 'fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 2x',
        'fire: 0.25x',
        'flying: 0.5x',
        'ground: 4x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0.5x',
        'rock: 2x',
        'water: 4x',
      ],
      stats: [
        { stat: 110, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 120, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'applin') {
    const data = {
      name: 'applin',
      abilities: ['ripen', 'gluttony', 'bulletproof'],
      id: 840,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/840.png',
      types: ['grass', 'dragon'],
      weaknesses: [
        'bug: 2x',
        'dragon: 2x',
        'electric: 0.25x',
        'fairy: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ground: 0.5x',
        'ice: 4x',
        'poison: 2x',
        'water: 0.25x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 40, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 20, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'flapple') {
    const data = {
      name: 'flapple',
      abilities: ['ripen', 'gluttony', 'hustle'],
      id: 841,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/841.png',
      types: ['grass', 'dragon'],
      weaknesses: [
        'bug: 2x',
        'dragon: 2x',
        'electric: 0.25x',
        'fairy: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ground: 0.5x',
        'ice: 4x',
        'poison: 2x',
        'water: 0.25x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 110, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'appletun') {
    const data = {
      name: 'appletun',
      abilities: ['ripen', 'gluttony', 'thick-fat'],
      id: 842,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/842.png',
      types: ['grass', 'dragon'],
      weaknesses: [
        'bug: 2x',
        'dragon: 2x',
        'electric: 0.25x',
        'fairy: 2x',
        'flying: 2x',
        'grass: 0.25x',
        'ground: 0.5x',
        'ice: 4x',
        'poison: 2x',
        'water: 0.25x',
      ],
      stats: [
        { stat: 110, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'silicobra') {
    const data = {
      name: 'silicobra',
      abilities: ['sand-spit', 'shed-skin', 'sand-veil'],
      id: 843,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/843.png',
      types: ['ground'],
      weaknesses: [
        'electric: 0x',
        'grass: 2x',
        'ice: 2x',
        'poison: 0.5x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 52, name: 'HP' },
        { stat: 57, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 46, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sandaconda') {
    const data = {
      name: 'sandaconda',
      abilities: ['sand-spit', 'shed-skin', 'sand-veil'],
      id: 844,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/844.png',
      types: ['ground'],
      weaknesses: [
        'electric: 0x',
        'grass: 2x',
        'ice: 2x',
        'poison: 0.5x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 72, name: 'HP' },
        { stat: 107, name: 'ATT' },
        { stat: 125, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 71, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cramorant') {
    const data = {
      name: 'cramorant',
      abilities: ['gulp-missile', ,],
      id: 845,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/845.png',
      types: ['flying', 'water'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 4x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'ground: 0x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'arrokuda') {
    const data = {
      name: 'arrokuda',
      abilities: ['swift-swim', 'propeller-tail'],
      id: 846,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/846.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 41, name: 'HP' },
        { stat: 63, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 30, name: 'SPD' },
        { stat: 66, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'barraskewda') {
    const data = {
      name: 'barraskewda',
      abilities: ['swift-swim', 'propeller-tail'],
      id: 847,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/847.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 61, name: 'HP' },
        { stat: 123, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 136, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'toxel') {
    const data = {
      name: 'toxel',
      abilities: ['rattled', 'static', 'klutz'],
      id: 848,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/848.png',
      types: ['electric', 'poison'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 4x',
        'poison: 0.5x',
        'psychic: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 38, name: 'ATT' },
        { stat: 35, name: 'DEF' },
        { stat: 54, name: 'SPA' },
        { stat: 35, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'toxtricity-amped') {
    const data = {
      name: 'toxtricity-amped',
      abilities: ['punk-rock', 'plus', 'technician'],
      id: 849,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/849.png',
      types: ['electric', 'poison'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 4x',
        'poison: 0.5x',
        'psychic: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 98, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 114, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 75, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'toxtricity-low-key') {
    const data = {
      name: 'toxtricity-low-key',
      abilities: ['punk-rock', 'minus', 'technician'],
      id: 10184,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10184.png',
      types: ['electric', 'poison'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 4x',
        'poison: 0.5x',
        'psychic: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 98, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 114, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 75, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sizzlipede') {
    const data = {
      name: 'sizzlipede',
      abilities: ['flash-fire', 'white-smoke', 'flame-body'],
      id: 850,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/850.png',
      types: ['fire', 'bug'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'flying: 2x',
        'grass: 0.25x',
        'ice: 0.5x',
        'rock: 4x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'centiskorch') {
    const data = {
      name: 'centiskorch',
      abilities: ['flash-fire', 'white-smoke', 'flame-body'],
      id: 851,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/851.png',
      types: ['fire', 'bug'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 0.5x',
        'flying: 2x',
        'grass: 0.25x',
        'ice: 0.5x',
        'rock: 4x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 115, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'clobbopus') {
    const data = {
      name: 'clobbopus',
      abilities: ['limber', 'technician'],
      id: 852,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/852.png',
      types: ['fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'flying: 2x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 68, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 32, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'grapploct') {
    const data = {
      name: 'grapploct',
      abilities: ['limber', 'technician'],
      id: 853,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/853.png',
      types: ['fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'flying: 2x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 118, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 42, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sinistea') {
    const data = {
      name: 'sinistea',
      abilities: ['weak-armor', 'cursed-body'],
      id: 854,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/854.png',
      types: ['ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'fighting: 0x',
        'ghost: 2x',
        'normal: 0x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 74, name: 'SPA' },
        { stat: 54, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'polteageist') {
    const data = {
      name: 'polteageist',
      abilities: ['weak-armor', 'cursed-body'],
      id: 855,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/855.png',
      types: ['ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'fighting: 0x',
        'ghost: 2x',
        'normal: 0x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 134, name: 'SPA' },
        { stat: 114, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'hatenna') {
    const data = {
      name: 'hatenna',
      abilities: ['healer', 'anticipation', 'magic-bounce'],
      id: 856,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/856.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 42, name: 'HP' },
        { stat: 30, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 56, name: 'SPA' },
        { stat: 53, name: 'SPD' },
        { stat: 39, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'hattrem') {
    const data = {
      name: 'hattrem',
      abilities: ['healer', 'anticipation', 'magic-bounce'],
      id: 857,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/857.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 57, name: 'HP' },
        { stat: 40, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 86, name: 'SPA' },
        { stat: 73, name: 'SPD' },
        { stat: 49, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'hatterene') {
    const data = {
      name: 'hatterene',
      abilities: ['healer', 'anticipation', 'magic-bounce'],
      id: 858,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/858.png',
      types: ['psychic', 'fairy'],
      weaknesses: [
        'dragon: 0x',
        'fighting: 0.25x',
        'ghost: 2x',
        'poison: 2x',
        'psychic: 0.5x',
        'steel: 2x',
      ],
      stats: [
        { stat: 57, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 136, name: 'SPA' },
        { stat: 103, name: 'SPD' },
        { stat: 29, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'impidimp') {
    const data = {
      name: 'impidimp',
      abilities: ['prankster', 'frisk', 'pickpocket'],
      id: 859,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/859.png',
      types: ['dark', 'fairy'],
      weaknesses: [
        'dark: 0.25x',
        'dragon: 0x',
        'fairy: 2x',
        'ghost: 0.5x',
        'poison: 2x',
        'psychic: 0x',
        'steel: 2x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 30, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'morgrem') {
    const data = {
      name: 'morgrem',
      abilities: ['prankster', 'frisk', 'pickpocket'],
      id: 860,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/860.png',
      types: ['dark', 'fairy'],
      weaknesses: [
        'dark: 0.25x',
        'dragon: 0x',
        'fairy: 2x',
        'ghost: 0.5x',
        'poison: 2x',
        'psychic: 0x',
        'steel: 2x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'grimmsnarl') {
    const data = {
      name: 'grimmsnarl',
      abilities: ['prankster', 'frisk', 'pickpocket'],
      id: 861,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/861.png',
      types: ['dark', 'fairy'],
      weaknesses: [
        'dark: 0.25x',
        'dragon: 0x',
        'fairy: 2x',
        'ghost: 0.5x',
        'poison: 2x',
        'psychic: 0x',
        'steel: 2x',
      ],
      stats: [
        { stat: 95, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'obstagoon') {
    const data = {
      name: 'obstagoon',
      abilities: ['reckless', 'guts', 'defiant'],
      id: 862,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/862.png',
      types: ['dark', 'normal'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 4x',
        'ghost: 0x',
        'psychic: 0x',
      ],
      stats: [
        { stat: 93, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 101, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 81, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'perrserker') {
    const data = {
      name: 'perrserker',
      abilities: ['battle-armor', 'tough-claws', 'steely-spirit'],
      id: 863,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/863.png',
      types: ['steel'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 110, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cursola') {
    const data = {
      name: 'cursola',
      abilities: ['weak-armor', 'perish-body'],
      id: 864,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/864.png',
      types: ['ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'fighting: 0x',
        'ghost: 2x',
        'normal: 0x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 145, name: 'SPA' },
        { stat: 130, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sirfetchd') {
    const data = {
      name: 'sirfetchd',
      abilities: ['steadfast', 'scrappy'],
      id: 865,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/865.png',
      types: ['fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'flying: 2x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 62, name: 'HP' },
        { stat: 135, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 68, name: 'SPA' },
        { stat: 82, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mr-rime') {
    const data = {
      name: 'mr-rime',
      abilities: ['tangled-feet', 'screen-cleaner', 'ice-body'],
      id: 866,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/866.png',
      types: ['ice', 'psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fire: 2x',
        'ghost: 2x',
        'ice: 0.5x',
        'psychic: 0.5x',
        'rock: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'runerigus') {
    const data = {
      name: 'runerigus',
      abilities: ['wandering-spirit', ,],
      id: 867,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/867.png',
      types: ['ground', 'ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'electric: 0x',
        'fighting: 0x',
        'ghost: 2x',
        'grass: 2x',
        'ice: 2x',
        'normal: 0x',
        'poison: 0.25x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 58, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 145, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'milcery') {
    const data = {
      name: 'milcery',
      abilities: ['sweet-veil', 'aroma-veil'],
      id: 868,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/868.png',
      types: ['fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'fighting: 0.5x',
        'poison: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 40, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 61, name: 'SPD' },
        { stat: 34, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'alcremie') {
    const data = {
      name: 'alcremie',
      abilities: ['sweet-veil', 'aroma-veil'],
      id: 869,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/869.png',
      types: ['fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'fighting: 0.5x',
        'poison: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 121, name: 'SPD' },
        { stat: 64, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'falinks') {
    const data = {
      name: 'falinks',
      abilities: ['battle-armor', 'defiant'],
      id: 870,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/870.png',
      types: ['fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'flying: 2x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 75, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'pincurchin') {
    const data = {
      name: 'pincurchin',
      abilities: ['lightning-rod', 'electric-surge'],
      id: 871,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/871.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 48, name: 'HP' },
        { stat: 101, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 91, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 15, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'snom') {
    const data = {
      name: 'snom',
      abilities: ['shield-dust', 'ice-scales'],
      id: 872,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/872.png',
      types: ['ice', 'bug'],
      weaknesses: [
        'fire: 4x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 0.5x',
        'rock: 4x',
        'steel: 2x',
      ],
      stats: [
        { stat: 30, name: 'HP' },
        { stat: 25, name: 'ATT' },
        { stat: 35, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 30, name: 'SPD' },
        { stat: 20, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'frosmoth') {
    const data = {
      name: 'frosmoth',
      abilities: ['shield-dust', 'ice-scales'],
      id: 873,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/873.png',
      types: ['ice', 'bug'],
      weaknesses: [
        'fire: 4x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 0.5x',
        'rock: 4x',
        'steel: 2x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'stonjourner') {
    const data = {
      name: 'stonjourner',
      abilities: ['power-spot', ,],
      id: 874,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/874.png',
      types: ['rock'],
      weaknesses: [
        'fighting: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 2x',
        'ground: 2x',
        'normal: 0.5x',
        'poison: 0.5x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 125, name: 'ATT' },
        { stat: 135, name: 'DEF' },
        { stat: 20, name: 'SPA' },
        { stat: 20, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'eiscue-ice') {
    const data = {
      name: 'eiscue-ice',
      abilities: ['ice-face', ,],
      id: 875,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/875.png',
      types: ['ice'],
      weaknesses: [
        'fighting: 2x',
        'fire: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 110, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'indeedee-male') {
    const data = {
      name: 'indeedee-male',
      abilities: ['inner-focus', 'synchronize', 'psychic-surge'],
      id: 876,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/876.png',
      types: ['psychic', 'normal'],
      weaknesses: ['bug: 2x', 'dark: 2x', 'ghost: 0x', 'psychic: 0.5x'],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'indeedee-female') {
    const data = {
      name: 'indeedee-female',
      abilities: ['own-tempo', 'synchronize', 'psychic-surge'],
      id: 10186,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10186.png',
      types: ['psychic', 'normal'],
      weaknesses: ['bug: 2x', 'dark: 2x', 'ghost: 0x', 'psychic: 0.5x'],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'morpeko-full-belly') {
    const data = {
      name: 'morpeko-full-belly',
      abilities: ['hunger-switch', ,],
      id: 877,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/877.png',
      types: ['electric', 'dark'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'electric: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'flying: 0.5x',
        'ghost: 0.5x',
        'ground: 2x',
        'psychic: 0x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 58, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 58, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 58, name: 'SPD' },
        { stat: 97, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cufant') {
    const data = {
      name: 'cufant',
      abilities: ['sheer-force', 'heavy-metal'],
      id: 878,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/878.png',
      types: ['steel'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 72, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 49, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 49, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'copperajah') {
    const data = {
      name: 'copperajah',
      abilities: ['sheer-force', 'heavy-metal'],
      id: 879,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/879.png',
      types: ['steel'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 122, name: 'HP' },
        { stat: 130, name: 'ATT' },
        { stat: 69, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 69, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'dracozolt') {
    const data = {
      name: 'dracozolt',
      abilities: ['volt-absorb', 'hustle', 'sand-rush'],
      id: 880,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/880.png',
      types: ['electric', 'dragon'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0.25x',
        'fairy: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 2x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 75, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'arctozolt') {
    const data = {
      name: 'arctozolt',
      abilities: ['volt-absorb', 'static', 'slush-rush'],
      id: 881,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/881.png',
      types: ['electric', 'ice'],
      weaknesses: [
        'electric: 0.5x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'dracovish') {
    const data = {
      name: 'dracovish',
      abilities: ['water-absorb', 'strong-jaw', 'sand-rush'],
      id: 882,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/882.png',
      types: ['water', 'dragon'],
      weaknesses: [
        'dragon: 2x',
        'fairy: 2x',
        'fire: 0.25x',
        'steel: 0.5x',
        'water: 0.25x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 75, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'arctovish') {
    const data = {
      name: 'arctovish',
      abilities: ['water-absorb', 'ice-body', 'slush-rush'],
      id: 883,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/883.png',
      types: ['water', 'ice'],
      weaknesses: [
        'electric: 2x',
        'fighting: 2x',
        'grass: 2x',
        'ice: 0.25x',
        'rock: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'duraludon') {
    const data = {
      name: 'duraludon',
      abilities: ['light-metal', 'heavy-metal', 'stalwart'],
      id: 884,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/884.png',
      types: ['steel', 'dragon'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 0.5x',
        'fighting: 2x',
        'flying: 0.5x',
        'grass: 0.25x',
        'ground: 2x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 115, name: 'DEF' },
        { stat: 120, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'dreepy') {
    const data = {
      name: 'dreepy',
      abilities: ['clear-body', 'infiltrator', 'cursed-body'],
      id: 885,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/885.png',
      types: ['dragon', 'ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fighting: 0x',
        'fire: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ice: 2x',
        'normal: 0x',
        'poison: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 28, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 30, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 30, name: 'SPD' },
        { stat: 82, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'drakloak') {
    const data = {
      name: 'drakloak',
      abilities: ['clear-body', 'infiltrator', 'cursed-body'],
      id: 886,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/886.png',
      types: ['dragon', 'ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fighting: 0x',
        'fire: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ice: 2x',
        'normal: 0x',
        'poison: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 68, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 102, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'dragapult') {
    const data = {
      name: 'dragapult',
      abilities: ['clear-body', 'infiltrator', 'cursed-body'],
      id: 887,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/887.png',
      types: ['dragon', 'ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fighting: 0x',
        'fire: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ice: 2x',
        'normal: 0x',
        'poison: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 88, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 142, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'zacian') {
    const data = {
      name: 'zacian',
      abilities: ['intrepid-sword', ,],
      id: 888,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/888.png',
      types: ['fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'fighting: 0.5x',
        'poison: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 92, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 115, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 115, name: 'SPD' },
        { stat: 138, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'zacian-crowned') {
    const data = {
      name: 'zacian-crowned',
      abilities: ['intrepid-sword', ,],
      id: 10188,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10188.png',
      types: ['fairy', 'steel'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 0.5x',
        'dragon: 0x',
        'fairy: 0.5x',
        'fire: 2x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 92, name: 'HP' },
        { stat: 150, name: 'ATT' },
        { stat: 115, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 115, name: 'SPD' },
        { stat: 148, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'zamazenta') {
    const data = {
      name: 'zamazenta',
      abilities: ['dauntless-shield', ,],
      id: 889,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/889.png',
      types: ['fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'flying: 2x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 92, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 115, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 115, name: 'SPD' },
        { stat: 138, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'zamazenta-crowned') {
    const data = {
      name: 'zamazenta-crowned',
      abilities: ['dauntless-shield', ,],
      id: 10189,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10189.png',
      types: ['fighting', 'steel'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 0.5x',
        'dragon: 0.5x',
        'fighting: 2x',
        'fire: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'rock: 0.25x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 92, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 140, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 140, name: 'SPD' },
        { stat: 128, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'eternatus') {
    const data = {
      name: 'eternatus',
      abilities: ['pressure', ,],
      id: 890,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/890.png',
      types: ['poison', 'dragon'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 2x',
        'electric: 0.5x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'grass: 0.25x',
        'ground: 2x',
        'ice: 2x',
        'poison: 0.5x',
        'psychic: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 140, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 145, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 130, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'kubfu') {
    const data = {
      name: 'kubfu',
      abilities: ['inner-focus', ,],
      id: 891,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/891.png',
      types: ['fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'flying: 2x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 53, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 72, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'urshifu-single-strike') {
    const data = {
      name: 'urshifu-single-strike',
      abilities: ['unseen-fist', ,],
      id: 892,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/892.png',
      types: ['fighting', 'dark'],
      weaknesses: [
        'dark: 0.25x',
        'fairy: 4x',
        'fighting: 2x',
        'flying: 2x',
        'ghost: 0.5x',
        'psychic: 0x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 130, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 63, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 97, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'urshifu-rapid-strike') {
    const data = {
      name: 'urshifu-rapid-strike',
      abilities: ['unseen-fist', ,],
      id: 10191,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10191.png',
      types: ['fighting', 'water'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'electric: 2x',
        'fairy: 2x',
        'fire: 0.5x',
        'flying: 2x',
        'grass: 2x',
        'ice: 0.5x',
        'psychic: 2x',
        'rock: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 130, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 63, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 97, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'zarude') {
    const data = {
      name: 'zarude',
      abilities: ['leaf-guard', ,],
      id: 893,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/893.png',
      types: ['dark', 'grass'],
      weaknesses: [
        'bug: 4x',
        'dark: 0.5x',
        'electric: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 2x',
        'ghost: 0.5x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'psychic: 0x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 105, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 105, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 105, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'regieleki') {
    const data = {
      name: 'regieleki',
      abilities: ['transistor', ,],
      id: 894,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/894.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 200, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'regidrago') {
    const data = {
      name: 'regidrago',
      abilities: ['dragons-maw', ,],
      id: 895,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/895.png',
      types: ['dragon'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ice: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 200, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'glastrier') {
    const data = {
      name: 'glastrier',
      abilities: ['chilling-neigh', ,],
      id: 896,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/896.png',
      types: ['ice'],
      weaknesses: [
        'fighting: 2x',
        'fire: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 145, name: 'ATT' },
        { stat: 130, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'spectrier') {
    const data = {
      name: 'spectrier',
      abilities: ['grim-neigh', ,],
      id: 897,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/897.png',
      types: ['ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'fighting: 0x',
        'ghost: 2x',
        'normal: 0x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 145, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 130, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'calyrex') {
    const data = {
      name: 'calyrex',
      abilities: ['unnerve', ,],
      id: 898,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/898.png',
      types: ['psychic', 'grass'],
      weaknesses: [
        'bug: 4x',
        'dark: 2x',
        'electric: 0.5x',
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'psychic: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'calyrex-ice') {
    const data = {
      name: 'calyrex-ice',
      abilities: ['as-one-glastrier', ,],
      id: 10193,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10193.png',
      types: ['psychic', 'ice'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fire: 2x',
        'ghost: 2x',
        'ice: 0.5x',
        'psychic: 0.5x',
        'rock: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 165, name: 'ATT' },
        { stat: 150, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 130, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'calyrex-shadow') {
    const data = {
      name: 'calyrex-shadow',
      abilities: ['as-one-spectrier', ,],
      id: 10194,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10194.png',
      types: ['psychic', 'ghost'],
      weaknesses: [
        'dark: 4x',
        'fighting: 0x',
        'ghost: 4x',
        'normal: 0x',
        'poison: 0.5x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 165, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 150, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sprigatito') {
    const data = {
      name: 'sprigatito',
      abilities: ['overgrow', 'protean'],
      id: 906,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/906.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 61, name: 'ATT' },
        { stat: 54, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'floragato') {
    const data = {
      name: 'floragato',
      abilities: ['overgrow', 'protean'],
      id: 907,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/907.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 61, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 63, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 63, name: 'SPD' },
        { stat: 83, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'meowscarada') {
    const data = {
      name: 'meowscarada',
      abilities: ['overgrow', 'protean'],
      id: 908,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/908.png',
      types: ['grass', 'dark'],
      weaknesses: [
        'bug: 4x',
        'dark: 0.5x',
        'electric: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 2x',
        'ghost: 0.5x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'psychic: 0x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 76, name: 'HP' },
        { stat: 110, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 81, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 123, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'fuecoco') {
    const data = {
      name: 'fuecoco',
      abilities: ['blaze', 'unaware'],
      id: 909,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/909.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 67, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 59, name: 'DEF' },
        { stat: 63, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 36, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'crocalor') {
    const data = {
      name: 'crocalor',
      abilities: ['blaze', 'unaware'],
      id: 910,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/910.png',
      types: ['fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 81, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 78, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 58, name: 'SPD' },
        { stat: 49, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'skeledirge') {
    const data = {
      name: 'skeledirge',
      abilities: ['blaze', 'unaware'],
      id: 911,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/911.png',
      types: ['fire', 'ghost'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 2x',
        'fairy: 0.5x',
        'fighting: 0x',
        'fire: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0x',
        'poison: 0.5x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 104, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 66, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'quaxly') {
    const data = {
      name: 'quaxly',
      abilities: ['torrent', 'moxie'],
      id: 912,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/912.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'quaxwell') {
    const data = {
      name: 'quaxwell',
      abilities: ['torrent', 'moxie'],
      id: 913,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/913.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'quaquaval') {
    const data = {
      name: 'quaquaval',
      abilities: ['torrent', 'moxie'],
      id: 914,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/914.png',
      types: ['water', 'fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'electric: 2x',
        'fairy: 2x',
        'fire: 0.5x',
        'flying: 2x',
        'grass: 2x',
        'ice: 0.5x',
        'psychic: 2x',
        'rock: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 85, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'lechonk') {
    const data = {
      name: 'lechonk',
      abilities: ['aroma-veil', 'gluttony', 'thick-fat'],
      id: 915,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/915.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 54, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 35, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'oinkologne') {
    const data = {
      name: 'oinkologne',
      abilities: ['lingering-aroma', 'gluttony', 'thick-fat'],
      id: 916,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/916.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 110, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 59, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'oinkologne-female') {
    const data = {
      name: 'oinkologne-female',
      abilities: ['aroma-veil', 'gluttony', 'thick-fat'],
      id: 10254,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10254.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 115, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 59, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tarountula') {
    const data = {
      name: 'tarountula',
      abilities: ['insomnia', 'stakeout'],
      id: 917,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/917.png',
      types: ['bug'],
      weaknesses: [
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 35, name: 'HP' },
        { stat: 41, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 29, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 20, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'spidops') {
    const data = {
      name: 'spidops',
      abilities: ['insomnia', 'stakeout'],
      id: 918,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/918.png',
      types: ['bug'],
      weaknesses: [
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 79, name: 'ATT' },
        { stat: 92, name: 'DEF' },
        { stat: 52, name: 'SPA' },
        { stat: 86, name: 'SPD' },
        { stat: 35, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'nymble') {
    const data = {
      name: 'nymble',
      abilities: ['swarm', 'tinted-lens'],
      id: 919,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/919.png',
      types: ['bug'],
      weaknesses: [
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 33, name: 'HP' },
        { stat: 46, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 21, name: 'SPA' },
        { stat: 25, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'lokix') {
    const data = {
      name: 'lokix',
      abilities: ['swarm', 'tinted-lens'],
      id: 920,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/920.png',
      types: ['bug', 'dark'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'fairy: 2x',
        'fire: 2x',
        'flying: 2x',
        'ghost: 0.5x',
        'grass: 0.5x',
        'ground: 0.5x',
        'psychic: 0x',
        'rock: 2x',
      ],
      stats: [
        { stat: 71, name: 'HP' },
        { stat: 102, name: 'ATT' },
        { stat: 78, name: 'DEF' },
        { stat: 52, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 92, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'rellor') {
    const data = {
      name: 'rellor',
      abilities: ['compound-eyes', 'shed-skin'],
      id: 953,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/953.png',
      types: ['bug'],
      weaknesses: [
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 41, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 31, name: 'SPA' },
        { stat: 58, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'rabsca') {
    const data = {
      name: 'rabsca',
      abilities: ['synchronize', 'telepathy'],
      id: 954,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/954.png',
      types: ['bug', 'psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.25x',
        'fire: 2x',
        'flying: 2x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'psychic: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 115, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'greavard') {
    const data = {
      name: 'greavard',
      abilities: ['pickup', 'fluffy'],
      id: 971,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/971.png',
      types: ['ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'fighting: 0x',
        'ghost: 2x',
        'normal: 0x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 61, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 34, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'houndstone') {
    const data = {
      name: 'houndstone',
      abilities: ['sand-rush', 'fluffy'],
      id: 972,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/972.png',
      types: ['ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'fighting: 0x',
        'ghost: 2x',
        'normal: 0x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 72, name: 'HP' },
        { stat: 101, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 97, name: 'SPD' },
        { stat: 68, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'flittle') {
    const data = {
      name: 'flittle',
      abilities: ['anticipation', 'frisk', 'speed-boost'],
      id: 955,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/955.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 30, name: 'HP' },
        { stat: 35, name: 'ATT' },
        { stat: 30, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 30, name: 'SPD' },
        { stat: 75, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'espathra') {
    const data = {
      name: 'espathra',
      abilities: ['opportunist', 'frisk', 'speed-boost'],
      id: 956,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/956.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 95, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 101, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 105, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'farigiraf') {
    const data = {
      name: 'farigiraf',
      abilities: ['cud-chew', 'armor-tail', 'sap-sipper'],
      id: 981,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/981.png',
      types: ['normal', 'psychic'],
      weaknesses: ['bug: 2x', 'dark: 2x', 'ghost: 0x', 'psychic: 0.5x'],
      stats: [
        { stat: 120, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'wiglett') {
    const data = {
      name: 'wiglett',
      abilities: ['gooey', 'rattled', 'sand-veil'],
      id: 960,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/960.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 10, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 25, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 25, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'wugtrio') {
    const data = {
      name: 'wugtrio',
      abilities: ['gooey', 'rattled', 'sand-veil'],
      id: 961,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/961.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 35, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 50, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 120, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'dondozo') {
    const data = {
      name: 'dondozo',
      abilities: ['unaware', 'oblivious', 'water-veil'],
      id: 977,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/977.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 150, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 115, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 35, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'veluza') {
    const data = {
      name: 'veluza',
      abilities: ['mold-breaker', 'sharpness'],
      id: 976,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/976.png',
      types: ['water', 'psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'electric: 2x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'ghost: 2x',
        'grass: 2x',
        'ice: 0.5x',
        'psychic: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 102, name: 'ATT' },
        { stat: 73, name: 'DEF' },
        { stat: 78, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'finizen') {
    const data = {
      name: 'finizen',
      abilities: ['water-veil', 'water-veil'],
      id: 963,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/963.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 75, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'palafin') {
    const data = {
      name: 'palafin',
      abilities: ['zero-to-hero', 'zero-to-hero'],
      id: 964,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/964.png',
      types: ['water'],
      weaknesses: [
        'electric: 2x',
        'fire: 0.5x',
        'grass: 2x',
        'ice: 0.5x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 72, name: 'DEF' },
        { stat: 53, name: 'SPA' },
        { stat: 62, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'smoliv') {
    const data = {
      name: 'smoliv',
      abilities: ['early-bird', 'harvest'],
      id: 928,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/928.png',
      types: ['grass', 'normal'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 41, name: 'HP' },
        { stat: 35, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 58, name: 'SPA' },
        { stat: 51, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'dolliv') {
    const data = {
      name: 'dolliv',
      abilities: ['early-bird', 'harvest'],
      id: 929,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/929.png',
      types: ['grass', 'normal'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 52, name: 'HP' },
        { stat: 53, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 78, name: 'SPA' },
        { stat: 78, name: 'SPD' },
        { stat: 33, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'arboliva') {
    const data = {
      name: 'arboliva',
      abilities: ['seed-sower', 'harvest'],
      id: 930,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/930.png',
      types: ['grass', 'normal'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 78, name: 'HP' },
        { stat: 69, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 109, name: 'SPD' },
        { stat: 39, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'capsakid') {
    const data = {
      name: 'capsakid',
      abilities: ['chlorophyll', 'insomnia', 'klutz'],
      id: 951,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/951.png',
      types: ['grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fire: 2x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 62, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 62, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'scovillain') {
    const data = {
      name: 'scovillain',
      abilities: ['chlorophyll', 'insomnia', 'moody'],
      id: 952,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/952.png',
      types: ['grass', 'fire'],
      weaknesses: [
        'electric: 0.5x',
        'fairy: 0.5x',
        'flying: 2x',
        'grass: 0.25x',
        'poison: 2x',
        'rock: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 108, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 108, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 75, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tadbulb') {
    const data = {
      name: 'tadbulb',
      abilities: ['own-tempo', 'static', 'damp'],
      id: 938,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/938.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 61, name: 'HP' },
        { stat: 31, name: 'ATT' },
        { stat: 41, name: 'DEF' },
        { stat: 59, name: 'SPA' },
        { stat: 35, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'bellibolt') {
    const data = {
      name: 'bellibolt',
      abilities: ['electromorphosis', 'static', 'damp'],
      id: 939,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/939.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 109, name: 'HP' },
        { stat: 64, name: 'ATT' },
        { stat: 91, name: 'DEF' },
        { stat: 103, name: 'SPA' },
        { stat: 83, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'varoom') {
    const data = {
      name: 'varoom',
      abilities: ['overcoat', 'slow-start'],
      id: 965,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/965.png',
      types: ['steel', 'poison'],
      weaknesses: [
        'bug: 0.25x',
        'dragon: 0.5x',
        'fairy: 0.25x',
        'fire: 2x',
        'flying: 0.5x',
        'grass: 0.25x',
        'ground: 4x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 63, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 47, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'revavroom') {
    const data = {
      name: 'revavroom',
      abilities: ['overcoat', 'filter'],
      id: 966,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/966.png',
      types: ['steel', 'poison'],
      weaknesses: [
        'bug: 0.25x',
        'dragon: 0.5x',
        'fairy: 0.25x',
        'fire: 2x',
        'flying: 0.5x',
        'grass: 0.25x',
        'ground: 4x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 119, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 54, name: 'SPA' },
        { stat: 67, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'orthworm') {
    const data = {
      name: 'orthworm',
      abilities: ['earth-eater', 'sand-veil'],
      id: 968,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/968.png',
      types: ['steel'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 145, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tandemaus') {
    const data = {
      name: 'tandemaus',
      abilities: ['run-away', 'pickup', 'own-tempo'],
      id: 924,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/924.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 75, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'maushold') {
    const data = {
      name: 'maushold',
      abilities: ['friend-guard', 'cheek-pouch', 'technician'],
      id: 925,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/925.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 74, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 111, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cetoddle') {
    const data = {
      name: 'cetoddle',
      abilities: ['thick-fat', 'snow-cloak', 'sheer-force'],
      id: 974,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/974.png',
      types: ['ice'],
      weaknesses: [
        'fighting: 2x',
        'fire: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 108, name: 'HP' },
        { stat: 68, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 43, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cetitan') {
    const data = {
      name: 'cetitan',
      abilities: ['thick-fat', 'slush-rush', 'sheer-force'],
      id: 975,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/975.png',
      types: ['ice'],
      weaknesses: [
        'fighting: 2x',
        'fire: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 170, name: 'HP' },
        { stat: 113, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 73, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'frigibax') {
    const data = {
      name: 'frigibax',
      abilities: ['thermal-exchange', 'ice-body'],
      id: 996,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/996.png',
      types: ['dragon', 'ice'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'grass: 0.5x',
        'rock: 2x',
        'steel: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'arctibax') {
    const data = {
      name: 'arctibax',
      abilities: ['thermal-exchange', 'ice-body'],
      id: 997,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/997.png',
      types: ['dragon', 'ice'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'grass: 0.5x',
        'rock: 2x',
        'steel: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 66, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 62, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'baxcalibur') {
    const data = {
      name: 'baxcalibur',
      abilities: ['thermal-exchange', 'ice-body'],
      id: 998,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/998.png',
      types: ['dragon', 'ice'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'grass: 0.5x',
        'rock: 2x',
        'steel: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 115, name: 'HP' },
        { stat: 145, name: 'ATT' },
        { stat: 92, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 86, name: 'SPD' },
        { stat: 87, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tatsugiri') {
    const data = {
      name: 'tatsugiri',
      abilities: ['commander', 'storm-drain'],
      id: 978,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/978.png',
      types: ['dragon', 'water'],
      weaknesses: [
        'dragon: 2x',
        'fairy: 2x',
        'fire: 0.25x',
        'steel: 0.5x',
        'water: 0.25x',
      ],
      stats: [
        { stat: 68, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 120, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 82, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cyclizar') {
    const data = {
      name: 'cyclizar',
      abilities: ['shed-skin', 'regenerator'],
      id: 967,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/967.png',
      types: ['dragon', 'normal'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'fire: 0.5x',
        'ghost: 0x',
        'grass: 0.5x',
        'ice: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 121, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'pawmi') {
    const data = {
      name: 'pawmi',
      abilities: ['static', 'natural-cure', 'iron-fist'],
      id: 921,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/921.png',
      types: ['electric'],
      weaknesses: [
        'electric: 0.5x',
        'flying: 0.5x',
        'ground: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 20, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 25, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'pawmo') {
    const data = {
      name: 'pawmo',
      abilities: ['volt-absorb', 'natural-cure', 'iron-fist'],
      id: 922,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/922.png',
      types: ['electric', 'fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'electric: 0.5x',
        'fairy: 2x',
        'ground: 2x',
        'psychic: 2x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 40, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'pawmot') {
    const data = {
      name: 'pawmot',
      abilities: ['volt-absorb', 'natural-cure', 'iron-fist'],
      id: 923,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/923.png',
      types: ['electric', 'fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'electric: 0.5x',
        'fairy: 2x',
        'ground: 2x',
        'psychic: 2x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 115, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 105, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'wattrel') {
    const data = {
      name: 'wattrel',
      abilities: ['wind-power', 'volt-absorb', 'competitive'],
      id: 940,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/940.png',
      types: ['electric', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'fighting: 0.5x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 40, name: 'ATT' },
        { stat: 35, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'kilowattrel') {
    const data = {
      name: 'kilowattrel',
      abilities: ['wind-power', 'volt-absorb', 'competitive'],
      id: 941,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/941.png',
      types: ['electric', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'fighting: 0.5x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 125, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'bombirdier') {
    const data = {
      name: 'bombirdier',
      abilities: ['big-pecks', 'keen-eye', 'rocky-payload'],
      id: 962,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/962.png',
      types: ['flying', 'dark'],
      weaknesses: [
        'dark: 0.5x',
        'electric: 2x',
        'fairy: 2x',
        'ghost: 0.5x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'psychic: 0x',
        'rock: 2x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 103, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 82, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'squawkabilly') {
    const data = {
      name: 'squawkabilly',
      abilities: ['intimidate', 'hustle', 'guts'],
      id: 931,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/931.png',
      types: ['normal', 'flying'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 2x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'rock: 2x',
      ],
      stats: [
        { stat: 82, name: 'HP' },
        { stat: 96, name: 'ATT' },
        { stat: 51, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 51, name: 'SPD' },
        { stat: 92, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'flamigo') {
    const data = {
      name: 'flamigo',
      abilities: ['scrappy', 'tangled-feet', 'costar'],
      id: 973,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/973.png',
      types: ['flying', 'fighting'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 0.5x',
        'electric: 2x',
        'fairy: 2x',
        'fighting: 0.5x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'psychic: 2x',
      ],
      stats: [
        { stat: 82, name: 'HP' },
        { stat: 115, name: 'ATT' },
        { stat: 74, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 64, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'klawf') {
    const data = {
      name: 'klawf',
      abilities: ['anger-shell', 'shell-armor', 'regenerator'],
      id: 950,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/950.png',
      types: ['rock'],
      weaknesses: [
        'fighting: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 2x',
        'ground: 2x',
        'normal: 0.5x',
        'poison: 0.5x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 115, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 75, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'nacli') {
    const data = {
      name: 'nacli',
      abilities: ['purifying-salt', 'sturdy', 'clear-body'],
      id: 932,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/932.png',
      types: ['rock'],
      weaknesses: [
        'fighting: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 2x',
        'ground: 2x',
        'normal: 0.5x',
        'poison: 0.5x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 75, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 35, name: 'SPD' },
        { stat: 25, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'naclstack') {
    const data = {
      name: 'naclstack',
      abilities: ['purifying-salt', 'sturdy', 'clear-body'],
      id: 933,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/933.png',
      types: ['rock'],
      weaknesses: [
        'fighting: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 2x',
        'ground: 2x',
        'normal: 0.5x',
        'poison: 0.5x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 35, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'garganacl') {
    const data = {
      name: 'garganacl',
      abilities: ['purifying-salt', 'sturdy', 'clear-body'],
      id: 934,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/934.png',
      types: ['rock'],
      weaknesses: [
        'fighting: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 2x',
        'ground: 2x',
        'normal: 0.5x',
        'poison: 0.5x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 130, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 35, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'glimmet') {
    const data = {
      name: 'glimmet',
      abilities: ['toxic-debris', 'corrosion'],
      id: 969,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/969.png',
      types: ['rock', 'poison'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'flying: 0.5x',
        'ground: 4x',
        'normal: 0.5x',
        'poison: 0.25x',
        'psychic: 2x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 48, name: 'HP' },
        { stat: 35, name: 'ATT' },
        { stat: 42, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'glimmora') {
    const data = {
      name: 'glimmora',
      abilities: ['toxic-debris', 'corrosion'],
      id: 970,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/970.png',
      types: ['rock', 'poison'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'flying: 0.5x',
        'ground: 4x',
        'normal: 0.5x',
        'poison: 0.25x',
        'psychic: 2x',
        'steel: 2x',
        'water: 2x',
      ],
      stats: [
        { stat: 83, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 130, name: 'SPA' },
        { stat: 81, name: 'SPD' },
        { stat: 86, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'shroodle') {
    const data = {
      name: 'shroodle',
      abilities: ['unburden', 'pickpocket', 'prankster'],
      id: 944,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/944.png',
      types: ['poison', 'normal'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 2x',
        'poison: 0.5x',
        'psychic: 2x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 35, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 35, name: 'SPD' },
        { stat: 75, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'grafaiai') {
    const data = {
      name: 'grafaiai',
      abilities: ['unburden', 'poison-touch', 'prankster'],
      id: 945,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/945.png',
      types: ['poison', 'normal'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'ghost: 0x',
        'grass: 0.5x',
        'ground: 2x',
        'poison: 0.5x',
        'psychic: 2x',
      ],
      stats: [
        { stat: 63, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 72, name: 'SPD' },
        { stat: 110, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'fidough') {
    const data = {
      name: 'fidough',
      abilities: ['own-tempo', 'klutz'],
      id: 926,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/926.png',
      types: ['fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'fighting: 0.5x',
        'poison: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 37, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'dachsbun') {
    const data = {
      name: 'dachsbun',
      abilities: ['well-baked-body', 'aroma-veil'],
      id: 927,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/927.png',
      types: ['fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'fighting: 0.5x',
        'poison: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 57, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 115, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'maschiff') {
    const data = {
      name: 'maschiff',
      abilities: ['intimidate', 'run-away', 'stakeout'],
      id: 942,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/942.png',
      types: ['dark'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'ghost: 0.5x',
        'psychic: 0x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 78, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 51, name: 'SPD' },
        { stat: 51, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mabosstiff') {
    const data = {
      name: 'mabosstiff',
      abilities: ['intimidate', 'guard-dog', 'stakeout'],
      id: 943,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/943.png',
      types: ['dark'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'ghost: 0.5x',
        'psychic: 0x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'bramblin') {
    const data = {
      name: 'bramblin',
      abilities: ['wind-rider', 'infiltrator'],
      id: 946,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/946.png',
      types: ['grass', 'ghost'],
      weaknesses: [
        'dark: 2x',
        'electric: 0.5x',
        'fighting: 0x',
        'fire: 2x',
        'flying: 2x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'normal: 0x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 40, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 30, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 35, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'brambleghast') {
    const data = {
      name: 'brambleghast',
      abilities: ['wind-rider', 'infiltrator'],
      id: 947,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/947.png',
      types: ['grass', 'ghost'],
      weaknesses: [
        'dark: 2x',
        'electric: 0.5x',
        'fighting: 0x',
        'fire: 2x',
        'flying: 2x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'normal: 0x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 115, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gimmighoul') {
    const data = {
      name: 'gimmighoul',
      abilities: ['rattled', 'rattled'],
      id: 999,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/999.png',
      types: ['ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'fighting: 0x',
        'ghost: 2x',
        'normal: 0x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 30, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 10, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gimmighoul-roaming') {
    const data = {
      name: 'gimmighoul-roaming',
      abilities: ['run-away', 'run-away'],
      id: 10263,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10263.png',
      types: ['ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'fighting: 0x',
        'ghost: 2x',
        'normal: 0x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 45, name: 'HP' },
        { stat: 30, name: 'ATT' },
        { stat: 25, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gholdengo') {
    const data = {
      name: 'gholdengo',
      abilities: ['good-as-gold', 'good-as-gold'],
      id: 1000,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1000.png',
      types: ['steel', 'ghost'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 2x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fighting: 0x',
        'fire: 2x',
        'flying: 0.5x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 87, name: 'HP' },
        { stat: 60, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 133, name: 'SPA' },
        { stat: 91, name: 'SPD' },
        { stat: 84, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'great-tusk') {
    const data = {
      name: 'great-tusk',
      abilities: ['protosynthesis', 'protosynthesis'],
      id: 984,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/984.png',
      types: ['ground', 'fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'electric: 0x',
        'fairy: 2x',
        'flying: 2x',
        'grass: 2x',
        'ice: 2x',
        'poison: 0.5x',
        'psychic: 2x',
        'rock: 0.25x',
        'water: 2x',
      ],
      stats: [
        { stat: 115, name: 'HP' },
        { stat: 131, name: 'ATT' },
        { stat: 131, name: 'DEF' },
        { stat: 53, name: 'SPA' },
        { stat: 53, name: 'SPD' },
        { stat: 87, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'scream-tail') {
    const data = {
      name: 'scream-tail',
      abilities: ['protosynthesis', 'protosynthesis'],
      id: 985,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/985.png',
      types: ['fairy', 'psychic'],
      weaknesses: [
        'dragon: 0x',
        'fighting: 0.25x',
        'ghost: 2x',
        'poison: 2x',
        'psychic: 0.5x',
        'steel: 2x',
      ],
      stats: [
        { stat: 115, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 99, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 115, name: 'SPD' },
        { stat: 111, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'brute-bonnet') {
    const data = {
      name: 'brute-bonnet',
      abilities: ['protosynthesis', 'protosynthesis'],
      id: 986,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/986.png',
      types: ['grass', 'dark'],
      weaknesses: [
        'bug: 4x',
        'dark: 0.5x',
        'electric: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 2x',
        'ghost: 0.5x',
        'grass: 0.5x',
        'ground: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'psychic: 0x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 111, name: 'HP' },
        { stat: 127, name: 'ATT' },
        { stat: 99, name: 'DEF' },
        { stat: 79, name: 'SPA' },
        { stat: 99, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'flutter-mane') {
    const data = {
      name: 'flutter-mane',
      abilities: ['protosynthesis', 'protosynthesis'],
      id: 987,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/987.png',
      types: ['ghost', 'fairy'],
      weaknesses: [
        'bug: 0.25x',
        'dragon: 0x',
        'fighting: 0x',
        'ghost: 2x',
        'normal: 0x',
        'steel: 2x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 135, name: 'SPA' },
        { stat: 135, name: 'SPD' },
        { stat: 135, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'slither-wing') {
    const data = {
      name: 'slither-wing',
      abilities: ['protosynthesis', 'protosynthesis'],
      id: 988,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/988.png',
      types: ['bug', 'fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 0.5x',
        'fire: 2x',
        'flying: 4x',
        'grass: 0.5x',
        'ground: 0.5x',
        'psychic: 2x',
      ],
      stats: [
        { stat: 85, name: 'HP' },
        { stat: 135, name: 'ATT' },
        { stat: 79, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 81, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sandy-shocks') {
    const data = {
      name: 'sandy-shocks',
      abilities: ['protosynthesis', 'protosynthesis'],
      id: 989,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/989.png',
      types: ['electric', 'ground'],
      weaknesses: [
        'electric: 0x',
        'flying: 0.5x',
        'grass: 2x',
        'ground: 2x',
        'ice: 2x',
        'poison: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 85, name: 'HP' },
        { stat: 81, name: 'ATT' },
        { stat: 97, name: 'DEF' },
        { stat: 121, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 101, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'iron-treads') {
    const data = {
      name: 'iron-treads',
      abilities: ['quark-drive', 'quark-drive'],
      id: 990,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/990.png',
      types: ['ground', 'steel'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'electric: 0x',
        'fairy: 0.5x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 0.5x',
        'ground: 2x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.25x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 112, name: 'ATT' },
        { stat: 120, name: 'DEF' },
        { stat: 72, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 106, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'iron-bundle') {
    const data = {
      name: 'iron-bundle',
      abilities: ['quark-drive', 'quark-drive'],
      id: 991,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/991.png',
      types: ['ice', 'water'],
      weaknesses: [
        'electric: 2x',
        'fighting: 2x',
        'grass: 2x',
        'ice: 0.25x',
        'rock: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 56, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 114, name: 'DEF' },
        { stat: 124, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 136, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'iron-hands') {
    const data = {
      name: 'iron-hands',
      abilities: ['quark-drive', 'quark-drive'],
      id: 992,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/992.png',
      types: ['fighting', 'electric'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'electric: 0.5x',
        'fairy: 2x',
        'ground: 2x',
        'psychic: 2x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 154, name: 'HP' },
        { stat: 140, name: 'ATT' },
        { stat: 108, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 68, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'iron-jugulis') {
    const data = {
      name: 'iron-jugulis',
      abilities: ['quark-drive', 'quark-drive'],
      id: 993,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/993.png',
      types: ['dark', 'flying'],
      weaknesses: [
        'dark: 0.5x',
        'electric: 2x',
        'fairy: 2x',
        'ghost: 0.5x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'psychic: 0x',
        'rock: 2x',
      ],
      stats: [
        { stat: 94, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 86, name: 'DEF' },
        { stat: 122, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 108, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'iron-moth') {
    const data = {
      name: 'iron-moth',
      abilities: ['quark-drive', 'quark-drive'],
      id: 994,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/994.png',
      types: ['fire', 'poison'],
      weaknesses: [
        'bug: 0.25x',
        'fairy: 0.25x',
        'fighting: 0.5x',
        'fire: 0.5x',
        'grass: 0.25x',
        'ground: 4x',
        'ice: 0.5x',
        'poison: 0.5x',
        'psychic: 2x',
        'rock: 2x',
        'steel: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 140, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 110, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'iron-thorns') {
    const data = {
      name: 'iron-thorns',
      abilities: ['quark-drive', 'quark-drive'],
      id: 995,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/995.png',
      types: ['rock', 'electric'],
      weaknesses: [
        'electric: 0.5x',
        'fighting: 2x',
        'fire: 0.5x',
        'flying: 0.25x',
        'grass: 2x',
        'ground: 4x',
        'normal: 0.5x',
        'poison: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 134, name: 'ATT' },
        { stat: 110, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 84, name: 'SPD' },
        { stat: 72, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'frigibax') {
    const data = {
      name: 'frigibax',
      abilities: ['thermal-exchange', 'ice-body'],
      id: 996,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/996.png',
      types: ['dragon', 'ice'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'grass: 0.5x',
        'rock: 2x',
        'steel: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'arctibax') {
    const data = {
      name: 'arctibax',
      abilities: ['thermal-exchange', 'ice-body'],
      id: 997,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/997.png',
      types: ['dragon', 'ice'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'grass: 0.5x',
        'rock: 2x',
        'steel: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 66, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 62, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'baxcalibur') {
    const data = {
      name: 'baxcalibur',
      abilities: ['thermal-exchange', 'ice-body'],
      id: 998,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/998.png',
      types: ['dragon', 'ice'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 2x',
        'fighting: 2x',
        'grass: 0.5x',
        'rock: 2x',
        'steel: 2x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 115, name: 'HP' },
        { stat: 145, name: 'ATT' },
        { stat: 92, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 86, name: 'SPD' },
        { stat: 87, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tatsugiri') {
    const data = {
      name: 'tatsugiri',
      abilities: ['commander', 'storm-drain'],
      id: 978,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/978.png',
      types: ['dragon', 'water'],
      weaknesses: [
        'dragon: 2x',
        'fairy: 2x',
        'fire: 0.25x',
        'steel: 0.5x',
        'water: 0.25x',
      ],
      stats: [
        { stat: 68, name: 'HP' },
        { stat: 50, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 120, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 82, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'koraidon') {
    const data = {
      name: 'koraidon',
      abilities: ['orichalcum-pulse', 'orichalcum-pulse'],
      id: 1007,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1007.png',
      types: ['fighting', 'dragon'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 2x',
        'electric: 0.5x',
        'fairy: 4x',
        'fire: 0.5x',
        'flying: 2x',
        'grass: 0.5x',
        'ice: 2x',
        'psychic: 2x',
        'rock: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 135, name: 'ATT' },
        { stat: 115, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 135, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'miraidon') {
    const data = {
      name: 'miraidon',
      abilities: ['hadron-engine', 'hadron-engine'],
      id: 1008,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1008.png',
      types: ['electric', 'dragon'],
      weaknesses: [
        'dragon: 2x',
        'electric: 0.25x',
        'fairy: 2x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 2x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 135, name: 'SPA' },
        { stat: 115, name: 'SPD' },
        { stat: 135, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'meowth-galar') {
    const data = {
      name: 'meowth-galar',
      abilities: ['pickup', 'tough-claws', 'unnerve'],
      id: 10161,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10161.png',
      types: ['steel'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fighting: 2x',
        'fire: 2x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.5x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'ponyta-galar') {
    const data = {
      name: 'ponyta-galar',
      abilities: ['run-away', 'pastel-veil', 'anticipation'],
      id: 10162,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10162.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'rapidash-galar') {
    const data = {
      name: 'rapidash-galar',
      abilities: ['run-away', 'pastel-veil', 'anticipation'],
      id: 10163,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10163.png',
      types: ['psychic', 'fairy'],
      weaknesses: [
        'dragon: 0x',
        'fighting: 0.25x',
        'ghost: 2x',
        'poison: 2x',
        'psychic: 0.5x',
        'steel: 2x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 105, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'slowpoke-galar') {
    const data = {
      name: 'slowpoke-galar',
      abilities: ['gluttony', 'own-tempo', 'regenerator'],
      id: 10164,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10164.png',
      types: ['psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fighting: 0.5x',
        'ghost: 2x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 15, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'slowbro-galar') {
    const data = {
      name: 'slowbro-galar',
      abilities: ['quick-draw', 'own-tempo', 'regenerator'],
      id: 10165,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10165.png',
      types: ['poison', 'psychic'],
      weaknesses: [
        'dark: 2x',
        'fairy: 0.5x',
        'fighting: 0.25x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 95, name: 'HP' },
        { stat: 100, name: 'ATT' },
        { stat: 95, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'slowking-galar') {
    const data = {
      name: 'slowking-galar',
      abilities: ['curious-medicine', 'own-tempo', 'regenerator'],
      id: 10172,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10172.png',
      types: ['poison', 'psychic'],
      weaknesses: [
        'dark: 2x',
        'fairy: 0.5x',
        'fighting: 0.25x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 95, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'farfetchd-galar') {
    const data = {
      name: 'farfetchd-galar',
      abilities: ['steadfast', 'scrappy'],
      id: 10166,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10166.png',
      types: ['fighting'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'fairy: 2x',
        'flying: 2x',
        'psychic: 2x',
        'rock: 0.5x',
      ],
      stats: [
        { stat: 52, name: 'HP' },
        { stat: 95, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 58, name: 'SPA' },
        { stat: 62, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'weezing-galar') {
    const data = {
      name: 'weezing-galar',
      abilities: ['levitate', 'neutralizing-gas', 'misty-surge'],
      id: 10167,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10167.png',
      types: ['poison', 'fairy'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 0.5x',
        'dragon: 0x',
        'fairy: 0.5x',
        'fighting: 0.25x',
        'grass: 0.5x',
        'ground: 2x',
        'psychic: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 120, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mr-mime-galar') {
    const data = {
      name: 'mr-mime-galar',
      abilities: ['vital-spirit', 'screen-cleaner', 'ice-body'],
      id: 10168,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10168.png',
      types: ['ice', 'psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'fire: 2x',
        'ghost: 2x',
        'ice: 0.5x',
        'psychic: 0.5x',
        'rock: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'articuno-galar') {
    const data = {
      name: 'articuno-galar',
      abilities: ['competitive', ,],
      id: 10169,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10169.png',
      types: ['psychic', 'flying'],
      weaknesses: [
        'dark: 2x',
        'electric: 2x',
        'fighting: 0.25x',
        'ghost: 2x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'psychic: 0.5x',
        'rock: 2x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'zapdos-galar') {
    const data = {
      name: 'zapdos-galar',
      abilities: ['defiant', ,],
      id: 10170,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10170.png',
      types: ['fighting', 'flying'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 0.5x',
        'electric: 2x',
        'fairy: 2x',
        'fighting: 0.5x',
        'flying: 2x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'psychic: 2x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 125, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'moltres-galar') {
    const data = {
      name: 'moltres-galar',
      abilities: ['berserk', ,],
      id: 10171,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10171.png',
      types: ['dark', 'flying'],
      weaknesses: [
        'dark: 0.5x',
        'electric: 2x',
        'fairy: 2x',
        'ghost: 0.5x',
        'grass: 0.5x',
        'ground: 0x',
        'ice: 2x',
        'psychic: 0x',
        'rock: 2x',
      ],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 85, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 125, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'corsola-galar') {
    const data = {
      name: 'corsola-galar',
      abilities: ['weak-armor', 'cursed-body'],
      id: 10173,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10173.png',
      types: ['ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'fighting: 0x',
        'ghost: 2x',
        'normal: 0x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 100, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'zigzagoon-galar') {
    const data = {
      name: 'zigzagoon-galar',
      abilities: ['pickup', 'gluttony', 'quick-feet'],
      id: 10174,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10174.png',
      types: ['dark', 'normal'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 4x',
        'ghost: 0x',
        'psychic: 0x',
      ],
      stats: [
        { stat: 38, name: 'HP' },
        { stat: 30, name: 'ATT' },
        { stat: 41, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 41, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'linoone-galar') {
    const data = {
      name: 'linoone-galar',
      abilities: ['pickup', 'gluttony', 'quick-feet'],
      id: 10175,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10175.png',
      types: ['dark', 'normal'],
      weaknesses: [
        'bug: 2x',
        'dark: 0.5x',
        'fairy: 2x',
        'fighting: 4x',
        'ghost: 0x',
        'psychic: 0x',
      ],
      stats: [
        { stat: 78, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 61, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 61, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'darumaka-galar') {
    const data = {
      name: 'darumaka-galar',
      abilities: ['hustle', 'inner-focus'],
      id: 10176,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10176.png',
      types: ['ice'],
      weaknesses: [
        'fighting: 2x',
        'fire: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 90, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 15, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'darmanitan-galar-standard') {
    const data = {
      name: 'darmanitan-galar-standard',
      abilities: ['gorilla-tactics', 'zen-mode'],
      id: 10177,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10177.png',
      types: ['ice'],
      weaknesses: [
        'fighting: 2x',
        'fire: 2x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 2x',
      ],
      stats: [
        { stat: 105, name: 'HP' },
        { stat: 140, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'darmanitan-galar-zen') {
    const data = {
      name: 'darmanitan-galar-zen',
      abilities: ['gorilla-tactics', 'zen-mode'],
      id: 10178,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10178.png',
      types: ['ice', 'fire'],
      weaknesses: [
        'bug: 0.5x',
        'fairy: 0.5x',
        'fighting: 2x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.25x',
        'rock: 4x',
        'water: 2x',
      ],
      stats: [
        { stat: 105, name: 'HP' },
        { stat: 160, name: 'ATT' },
        { stat: 55, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 135, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'yamask-galar') {
    const data = {
      name: 'yamask-galar',
      abilities: ['wandering-spirit', ,],
      id: 10179,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10179.png',
      types: ['ground', 'ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'electric: 0x',
        'fighting: 0x',
        'ghost: 2x',
        'grass: 2x',
        'ice: 2x',
        'normal: 0x',
        'poison: 0.25x',
        'rock: 0.5x',
        'water: 2x',
      ],
      stats: [
        { stat: 38, name: 'HP' },
        { stat: 55, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else {
    const data = {
      name: 'wooper',
      abilities: ['damp', 'water-absorb', 'unaware'],
      id: 10179,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10179.png',
      types: ['water', 'ground'],
      weaknesses: [
        'electric: 0x',
        'fire: 0.5x',
        'grass: 4x',
        'poison: 0.5x',
        'rock: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 45, name: 'ATT' },
        { stat: 45, name: 'DEF' },
        { stat: 25, name: 'SPA' },
        { stat: 25, name: 'SPD' },
        { stat: 15, name: 'SPE' },
      ],
    };
    return data;
  }
}
