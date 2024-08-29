export default function returnMons(e: string) {
  if (e == 'marshadow') {
    const data = {
      name: 'marshadow',
      abilities: ['technician'],
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
  } else if (e == 'zygarde-complete') {
    const data = {
      name: 'zygarde-complete',
      abilities: ['power-construct'],
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
  } else if (e == 'eternatus') {
    const data = {
      name: 'eternatus',
      abilities: ['pressure'],
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
  } else if (e == 'mewtwo-mega-x') {
    const data = {
      name: 'mewtwo-mega-x',
      abilities: ['steadfast'],
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
  } else if (e == 'kyogre') {
    const data = {
      name: 'kyogre',
      abilities: ['drizzle'],
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
  } else if (e == 'shaymin-sky') {
    const data = {
      name: 'shaymin-sky',
      abilities: ['serene-grace'],
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
  } else if (e == 'arceus-poison') {
    const data = {
      name: 'arceus',
      abilities: ['multitype'],
      id: 493,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png',
      types: ['poison'],
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
  } else if (e == 'kyurem-white') {
    const data = {
      name: 'kyurem-white',
      abilities: ['turboblaze'],
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
  } else if (e == 'basculegion-male') {
    const data = {
      name: 'basculegion-male',
      abilities: ['swift-swim', 'adaptability', 'mold-breaker'],
      id: 902,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/902.png',
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
        { stat: 120, name: 'HP' },
        { stat: 112, name: 'ATT' },
        { stat: 65, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 78, name: 'SPE' },
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
  } else if (e == 'calyrex-ice') {
    const data = {
      name: 'calyrex-ice',
      abilities: ['as-one-glastrier'],
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
  } else if (e == 'zamazenta-crowned') {
    const data = {
      name: 'zamazenta-crowned',
      abilities: ['dauntless-shield'],
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
  } else if (e == 'solgaleo') {
    const data = {
      name: 'solgaleo',
      abilities: ['full-metal-body'],
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
  } else if (e == 'melmetal') {
    const data = {
      name: 'melmetal',
      abilities: ['iron-fist'],
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
  } else if (e == 'ting-lu') {
    const data = {
      name: 'ting-lu',
      abilities: ['vessel-of-ruin', 'vessel-of-ruin'],
      id: 1003,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1003.png',
      types: ['dark', 'ground'],
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
        { stat: 155, name: 'HP' },
        { stat: 110, name: 'ATT' },
        { stat: 125, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'enamorus-incarnate') {
    const data = {
      name: 'enamorus-incarnate',
      abilities: ['cute-charm', 'contrary'],
      id: 905,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/905.png',
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
        { stat: 74, name: 'HP' },
        { stat: 115, name: 'ATT' },
        { stat: 70, name: 'DEF' },
        { stat: 135, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 106, name: 'SPE' },
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
  } else if (e == 'clodsire') {
    const data = {
      name: 'clodsire',
      abilities: ['poison-point', 'water-absorb', 'unaware'],
      id: 980,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/980.png',
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
        { stat: 130, name: 'HP' },
        { stat: 75, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 20, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'annihilape') {
    const data = {
      name: 'annihilape',
      abilities: ['vital-spirit', 'inner-focus', 'defiant'],
      id: 979,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/979.png',
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
        { stat: 110, name: 'HP' },
        { stat: 115, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 90, name: 'SPE' },
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
  } else if (e == 'arceus-grass') {
    const data = {
      name: 'arceus',
      abilities: ['multitype'],
      id: 493,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png',
      types: ['grass'],
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
  } else if (e == 'deoxys-normal') {
    const data = {
      name: 'deoxys-normal',
      abilities: ['pressure'],
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
  } else if (e == 'kangaskhan-mega') {
    const data = {
      name: 'kangaskhan-mega',
      abilities: ['parental-bond'],
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
  } else if (e == 'walking-wake') {
    const data = {
      name: 'walking-wake',
      abilities: ['protosynthesis', 'protosynthesis'],
      id: 1009,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1009.png',
      types: ['water', 'dragon'],
      weaknesses: [
        'dragon: 2x',
        'fairy: 2x',
        'fire: 0.25x',
        'steel: 0.5x',
        'water: 0.25x',
      ],
      stats: [
        { stat: 99, name: 'HP' },
        { stat: 83, name: 'ATT' },
        { stat: 91, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 83, name: 'SPD' },
        { stat: 109, name: 'SPE' },
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
  } else if (e == 'sableye-mega') {
    const data = {
      name: 'sableye-mega',
      abilities: ['magic-bounce'],
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
  } else if (e == 'rotom-heat') {
    const data = {
      name: 'rotom-heat',
      abilities: ['levitate'],
      id: 10008,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10008.png',
      types: ['electric', 'fire'],
      weaknesses: [
        'bug: 0.5x',
        'electric: 0.5x',
        'fairy: 0.5x',
        'fire: 0.5x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 4x',
        'ice: 0.5x',
        'rock: 2x',
        'steel: 0.25x',
        'water: 2x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 107, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 107, name: 'SPD' },
        { stat: 86, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'naganadel') {
    const data = {
      name: 'naganadel',
      abilities: ['beast-boost'],
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
  } else if (e == 'diancie') {
    const data = {
      name: 'diancie',
      abilities: ['clear-body'],
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
  } else if (e == 'arceus-dragon') {
    const data = {
      name: 'arceus',
      abilities: ['multitype'],
      id: 493,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png',
      types: ['dragon'],
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
  } else if (e == 'stakataka') {
    const data = {
      name: 'stakataka',
      abilities: ['beast-boost'],
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
  } else if (e == 'dhelmise') {
    const data = {
      name: 'dhelmise',
      abilities: ['steelworker'],
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
  } else if (e == 'shedinja') {
    const data = {
      name: 'shedinja',
      abilities: ['wonder-guard'],
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
  } else if (e == 'rayquaza') {
    const data = {
      name: 'rayquaza',
      abilities: ['air-lock'],
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
  } else if (e == 'arceus-fairy') {
    const data = {
      name: 'arceus',
      abilities: ['multitype'],
      id: 493,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png',
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
        { stat: 120, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 120, name: 'DEF' },
        { stat: 120, name: 'SPA' },
        { stat: 120, name: 'SPD' },
        { stat: 120, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'zacian') {
    const data = {
      name: 'zacian',
      abilities: ['intrepid-sword'],
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
  } else if (e == 'magearna') {
    const data = {
      name: 'magearna',
      abilities: ['soul-heart'],
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
  } else if (e == 'arceus-steel') {
    const data = {
      name: 'arceus',
      abilities: ['multitype'],
      id: 493,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png',
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
        { stat: 120, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 120, name: 'DEF' },
        { stat: 120, name: 'SPA' },
        { stat: 120, name: 'SPD' },
        { stat: 120, name: 'SPE' },
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
  } else if (e == 'arceus-dark') {
    const data = {
      name: 'arceus',
      abilities: ['multitype'],
      id: 493,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png',
      types: ['dark'],
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
  } else if (e == 'groudon') {
    const data = {
      name: 'groudon',
      abilities: ['drought'],
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
  } else if (e == 'arceus-bug') {
    const data = {
      name: 'arceus',
      abilities: ['multitype'],
      id: 493,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png',
      types: ['bug'],
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
  } else if (e == 'giratina-origin') {
    const data = {
      name: 'giratina-origin',
      abilities: ['levitate'],
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
  } else if (e == 'genesect') {
    const data = {
      name: 'genesect',
      abilities: ['download'],
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
  } else if (e == 'pheromosa') {
    const data = {
      name: 'pheromosa',
      abilities: ['beast-boost'],
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
  } else if (e == 'terapagos') {
    const data = {
      name: 'terapagos',
      abilities: ['tera-shift'],
      id: 1024,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1024.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 90, name: 'HP' },
        { stat: 65, name: 'ATT' },
        { stat: 85, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 60, name: 'SPE' },
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
  } else if (e == 'kyurem-black') {
    const data = {
      name: 'kyurem-black',
      abilities: ['teravolt'],
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
  } else if (e == 'kingambit') {
    const data = {
      name: 'kingambit',
      abilities: ['defiant', 'supreme-overlord', 'pressure'],
      id: 983,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/983.png',
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
        { stat: 100, name: 'HP' },
        { stat: 135, name: 'ATT' },
        { stat: 120, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gouging-fire') {
    const data = {
      name: 'gouging-fire',
      abilities: ['protosynthesis'],
      id: 1020,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1020.png',
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
        { stat: 105, name: 'HP' },
        { stat: 115, name: 'ATT' },
        { stat: 121, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 93, name: 'SPD' },
        { stat: 91, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'landorus-therian') {
    const data = {
      name: 'landorus-therian',
      abilities: ['intimidate'],
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
  } else if (e == 'iron-valiant') {
    const data = {
      name: 'iron-valiant',
      abilities: ['quark-drive', 'quark-drive'],
      id: 1006,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1006.png',
      types: ['fairy', 'fighting'],
      weaknesses: [
        'bug: 0.25x',
        'dark: 0.25x',
        'dragon: 0x',
        'fairy: 2x',
        'fighting: 0.5x',
        'flying: 2x',
        'poison: 2x',
        'psychic: 2x',
        'rock: 0.5x',
        'steel: 2x',
      ],
      stats: [
        { stat: 74, name: 'HP' },
        { stat: 130, name: 'ATT' },
        { stat: 90, name: 'DEF' },
        { stat: 120, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 116, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'pecharunt') {
    const data = {
      name: 'pecharunt',
      abilities: ['poison-puppeteer'],
      id: 1025,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1025.png',
      types: ['poison', 'ghost'],
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
        { stat: 88, name: 'HP' },
        { stat: 88, name: 'ATT' },
        { stat: 160, name: 'DEF' },
        { stat: 88, name: 'SPA' },
        { stat: 88, name: 'SPD' },
        { stat: 88, name: 'SPE' },
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
  } else if (e == 'chi-yu') {
    const data = {
      name: 'chi-yu',
      abilities: ['beads-of-ruin', 'beads-of-ruin'],
      id: 1004,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1004.png',
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
        { stat: 55, name: 'HP' },
        { stat: 80, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 135, name: 'SPA' },
        { stat: 120, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'diancie-mega') {
    const data = {
      name: 'diancie-mega',
      abilities: ['magic-bounce'],
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
  } else if (e == 'charizard-mega-y') {
    const data = {
      name: 'charizard-mega-y',
      abilities: ['drought'],
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
  } else if (e == 'sneasler') {
    const data = {
      name: 'sneasler',
      abilities: ['pressure', 'unburden', 'poison-touch'],
      id: 903,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/903.png',
      types: ['fighting', 'poison'],
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
        { stat: 80, name: 'HP' },
        { stat: 130, name: 'ATT' },
        { stat: 60, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 120, name: 'SPE' },
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
  } else if (e == 'arceus-water') {
    const data = {
      name: 'arceus',
      abilities: ['multitype'],
      id: 493,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png',
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
        { stat: 120, name: 'HP' },
        { stat: 120, name: 'ATT' },
        { stat: 120, name: 'DEF' },
        { stat: 120, name: 'SPA' },
        { stat: 120, name: 'SPD' },
        { stat: 120, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'ursaluna-bloodmoon') {
    const data = {
      name: 'ursaluna-bloodmoon',
      abilities: ['minds-eye'],
      id: 10272,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10272.png',
      types: ['ground', 'normal'],
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
        { stat: 113, name: 'HP' },
        { stat: 70, name: 'ATT' },
        { stat: 120, name: 'DEF' },
        { stat: 135, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 52, name: 'SPE' },
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
  } else if (e == 'slowbro-mega') {
    const data = {
      name: 'slowbro-mega',
      abilities: ['shell-armor'],
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
  } else if (e == 'regieleki') {
    const data = {
      name: 'regieleki',
      abilities: ['transistor'],
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
  } else if (e == 'iron-boulder') {
    const data = {
      name: 'iron-boulder',
      abilities: ['quark-drive'],
      id: 1022,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1022.png',
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
        { stat: 120, name: 'ATT' },
        { stat: 80, name: 'DEF' },
        { stat: 68, name: 'SPA' },
        { stat: 108, name: 'SPD' },
        { stat: 124, name: 'SPE' },
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
  } else if (e == 'iron-leaves') {
    const data = {
      name: 'iron-leaves',
      abilities: ['quark-drive', 'quark-drive'],
      id: 1010,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1010.png',
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
        { stat: 90, name: 'HP' },
        { stat: 130, name: 'ATT' },
        { stat: 88, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 108, name: 'SPD' },
        { stat: 104, name: 'SPE' },
      ],
    };
    return data;
  } else {
    const data = {
      name: 'iron-leaves',
      abilities: ['quark-drive', 'quark-drive'],
      id: 1010,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1010.png',
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
        { stat: 90, name: 'HP' },
        { stat: 130, name: 'ATT' },
        { stat: 88, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 108, name: 'SPD' },
        { stat: 104, name: 'SPE' },
      ],
    };
    return data;
  }
}
