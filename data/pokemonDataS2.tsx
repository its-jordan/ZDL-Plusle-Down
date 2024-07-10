export default function returnMons(e: string) {
  if (e == 'abomasnow') {
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
        { stat: 92, name: 'ATK' },
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
      abilities: ['snow-warning'],
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
        { stat: 132, name: 'ATK' },
        { stat: 105, name: 'DEF' },
        { stat: 132, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 30, name: 'SPE' },
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
        { stat: 130, name: 'ATK' },
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
      abilities: ['magic-bounce'],
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
        { stat: 150, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 115, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 115, name: 'SPE' },
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
        { stat: 70, name: 'ATK' },
        { stat: 40, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 145, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'aegislash-shield') {
    const data = {
      name: 'aegislash-shield',
      abilities: ['stance-change'],
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
        { stat: 50, name: 'ATK' },
        { stat: 140, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 140, name: 'SPD' },
        { stat: 60, name: 'SPE' },
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
        { stat: 105, name: 'ATK' },
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
      abilities: ['tough-claws'],
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
        { stat: 135, name: 'ATK' },
        { stat: 85, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 150, name: 'SPE' },
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
        { stat: 110, name: 'ATK' },
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
      abilities: ['filter'],
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
        { stat: 140, name: 'ATK' },
        { stat: 230, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 50, name: 'SPE' },
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
        { stat: 50, name: 'ATK' },
        { stat: 45, name: 'DEF' },
        { stat: 135, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 120, name: 'SPE' },
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
        { stat: 60, name: 'ATK' },
        { stat: 75, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 121, name: 'SPD' },
        { stat: 64, name: 'SPE' },
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
        { stat: 75, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 65, name: 'SPE' },
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
        { stat: 70, name: 'ATK' },
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
      abilities: ['pixilate'],
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
        { stat: 110, name: 'ATK' },
        { stat: 110, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 80, name: 'SPE' },
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
        { stat: 100, name: 'ATK' },
        { stat: 66, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 66, name: 'SPD' },
        { stat: 115, name: 'SPE' },
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
        { stat: 85, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 30, name: 'SPE' },
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
        { stat: 75, name: 'ATK' },
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
      abilities: ['mold-breaker'],
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
        { stat: 95, name: 'ATK' },
        { stat: 105, name: 'DEF' },
        { stat: 165, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 45, name: 'SPE' },
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
        { stat: 85, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 30, name: 'SPE' },
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
        { stat: 70, name: 'ATK' },
        { stat: 92, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 132, name: 'SPD' },
        { stat: 42, name: 'SPE' },
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
        { stat: 95, name: 'ATK' },
        { stat: 69, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 79, name: 'SPD' },
        { stat: 80, name: 'SPE' },
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
        { stat: 69, name: 'ATK' },
        { stat: 90, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 109, name: 'SPD' },
        { stat: 39, name: 'SPE' },
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
        { stat: 110, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'arcanine-hisui') {
    const data = {
      name: 'arcanine-hisui',
      abilities: ['intimidate', 'flash-fire', 'rock-head'],
      id: 10230,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10230.png',
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
        { stat: 95, name: 'HP' },
        { stat: 115, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'archaludon') {
    const data = {
      name: 'archaludon',
      abilities: ['stamina', 'sturdy', 'stalwart'],
      id: 1018,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1018.png',
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
        { stat: 90, name: 'HP' },
        { stat: 105, name: 'ATK' },
        { stat: 130, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'archeops') {
    const data = {
      name: 'archeops',
      abilities: ['defeatist'],
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
        { stat: 140, name: 'ATK' },
        { stat: 65, name: 'DEF' },
        { stat: 112, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 110, name: 'SPE' },
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
        { stat: 90, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 55, name: 'SPE' },
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
        { stat: 100, name: 'ATK' },
        { stat: 90, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 55, name: 'SPE' },
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
        { stat: 90, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'armaldo') {
    const data = {
      name: 'armaldo',
      abilities: ['bATKle-armor', 'swift-swim'],
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
        { stat: 125, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'armarouge') {
    const data = {
      name: 'armarouge',
      abilities: ['flash-fire', 'weak-armor'],
      id: 936,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/936.png',
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
        { stat: 85, name: 'HP' },
        { stat: 60, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 75, name: 'SPE' },
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
        { stat: 72, name: 'ATK' },
        { stat: 72, name: 'DEF' },
        { stat: 99, name: 'SPA' },
        { stat: 89, name: 'SPD' },
        { stat: 29, name: 'SPE' },
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
        { stat: 85, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 125, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'articuno-galar') {
    const data = {
      name: 'articuno-galar',
      abilities: ['competitive'],
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
        { stat: 85, name: 'ATK' },
        { stat: 85, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 95, name: 'SPE' },
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
        { stat: 60, name: 'ATK' },
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
      abilities: ['healer'],
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
        { stat: 60, name: 'ATK' },
        { stat: 126, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 126, name: 'SPD' },
        { stat: 50, name: 'SPE' },
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
        { stat: 77, name: 'ATK' },
        { stat: 72, name: 'DEF' },
        { stat: 99, name: 'SPA' },
        { stat: 92, name: 'SPD' },
        { stat: 58, name: 'SPE' },
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
        { stat: 117, name: 'ATK' },
        { stat: 184, name: 'DEF' },
        { stat: 44, name: 'SPA' },
        { stat: 46, name: 'SPD' },
        { stat: 28, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'avalugg-hisui') {
    const data = {
      name: 'avalugg-hisui',
      abilities: ['strong-jaw', 'ice-body', 'sturdy'],
      id: 10243,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10243.png',
      types: ['ice', 'rock'],
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
        { stat: 95, name: 'HP' },
        { stat: 127, name: 'ATK' },
        { stat: 184, name: 'DEF' },
        { stat: 34, name: 'SPA' },
        { stat: 36, name: 'SPD' },
        { stat: 38, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'azelf') {
    const data = {
      name: 'azelf',
      abilities: ['levitate'],
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
        { stat: 125, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 115, name: 'SPE' },
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
        { stat: 50, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 50, name: 'SPE' },
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
        { stat: 115, name: 'ATK' },
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
      abilities: ['prankster'],
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
        { stat: 165, name: 'ATK' },
        { stat: 75, name: 'DEF' },
        { stat: 93, name: 'SPA' },
        { stat: 83, name: 'SPD' },
        { stat: 75, name: 'SPE' },
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
        { stat: 105, name: 'ATK' },
        { stat: 115, name: 'DEF' },
        { stat: 54, name: 'SPA' },
        { stat: 86, name: 'SPD' },
        { stat: 68, name: 'SPE' },
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
        { stat: 123, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 136, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'basculegion-female') {
    const data = {
      name: 'basculegion-female',
      abilities: ['swift-swim', 'adaptability', 'mold-breaker'],
      id: 10248,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10248.png',
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
        { stat: 92, name: 'ATK' },
        { stat: 65, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 78, name: 'SPE' },
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
        { stat: 112, name: 'ATK' },
        { stat: 65, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 78, name: 'SPE' },
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
        { stat: 92, name: 'ATK' },
        { stat: 65, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 98, name: 'SPE' },
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
        { stat: 52, name: 'ATK' },
        { stat: 168, name: 'DEF' },
        { stat: 47, name: 'SPA' },
        { stat: 138, name: 'SPD' },
        { stat: 30, name: 'SPE' },
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
        { stat: 145, name: 'ATK' },
        { stat: 92, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 86, name: 'SPD' },
        { stat: 87, name: 'SPE' },
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
        { stat: 130, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 50, name: 'SPE' },
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
        { stat: 70, name: 'ATK' },
        { stat: 50, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 65, name: 'SPE' },
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
        { stat: 90, name: 'ATK' },
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
      abilities: ['adaptability'],
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
        { stat: 150, name: 'ATK' },
        { stat: 40, name: 'DEF' },
        { stat: 15, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 145, name: 'SPE' },
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
        { stat: 75, name: 'ATK' },
        { stat: 75, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 40, name: 'SPE' },
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
        { stat: 64, name: 'ATK' },
        { stat: 91, name: 'DEF' },
        { stat: 103, name: 'SPA' },
        { stat: 83, name: 'SPD' },
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
        { stat: 80, name: 'ATK' },
        { stat: 95, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 100, name: 'SPD' },
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
        { stat: 125, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 60, name: 'SPE' },
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
        { stat: 85, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 71, name: 'SPE' },
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
        { stat: 125, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'blacephalon') {
    const data = {
      name: 'blacephalon',
      abilities: ['beast-boost'],
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
        { stat: 127, name: 'ATK' },
        { stat: 53, name: 'DEF' },
        { stat: 151, name: 'SPA' },
        { stat: 79, name: 'SPD' },
        { stat: 107, name: 'SPE' },
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
        { stat: 83, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 78, name: 'SPE' },
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
        { stat: 120, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 80, name: 'SPE' },
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
        { stat: 10, name: 'ATK' },
        { stat: 10, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 135, name: 'SPD' },
        { stat: 55, name: 'SPE' },
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
        { stat: 90, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 121, name: 'SPE' },
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
        { stat: 103, name: 'ATK' },
        { stat: 85, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 82, name: 'SPE' },
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
        { stat: 110, name: 'ATK' },
        { stat: 95, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 55, name: 'SPE' },
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
        { stat: 115, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 90, name: 'SPE' },
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
        { stat: 123, name: 'ATK' },
        { stat: 75, name: 'DEF' },
        { stat: 57, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'braviary-hisui') {
    const data = {
      name: 'braviary-hisui',
      abilities: ['keen-eye', 'sheer-force', 'tinted-lens'],
      id: 10240,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10240.png',
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
        { stat: 110, name: 'HP' },
        { stat: 83, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 112, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 65, name: 'SPE' },
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
        { stat: 130, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 70, name: 'SPE' },
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
        { stat: 89, name: 'ATK' },
        { stat: 116, name: 'DEF' },
        { stat: 79, name: 'SPA' },
        { stat: 116, name: 'SPD' },
        { stat: 33, name: 'SPE' },
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
        { stat: 127, name: 'ATK' },
        { stat: 99, name: 'DEF' },
        { stat: 79, name: 'SPA' },
        { stat: 99, name: 'SPD' },
        { stat: 55, name: 'SPE' },
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
        { stat: 105, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 92, name: 'SPE' },
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
        { stat: 45, name: 'ATK' },
        { stat: 50, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'buzzwole') {
    const data = {
      name: 'buzzwole',
      abilities: ['beast-boost'],
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
        { stat: 139, name: 'ATK' },
        { stat: 139, name: 'DEF' },
        { stat: 53, name: 'SPA' },
        { stat: 53, name: 'SPD' },
        { stat: 79, name: 'SPE' },
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
        { stat: 115, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 115, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'calyrex') {
    const data = {
      name: 'calyrex',
      abilities: ['unnerve'],
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
        { stat: 80, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 80, name: 'SPE' },
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
        { stat: 100, name: 'ATK' },
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
      abilities: ['sheer-force'],
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
        { stat: 120, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 145, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 20, name: 'SPE' },
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
        { stat: 50, name: 'ATK' },
        { stat: 150, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 150, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'carnivine') {
    const data = {
      name: 'carnivine',
      abilities: ['levitate'],
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
        { stat: 100, name: 'ATK' },
        { stat: 72, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 72, name: 'SPD' },
        { stat: 46, name: 'SPE' },
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
        { stat: 108, name: 'ATK' },
        { stat: 133, name: 'DEF' },
        { stat: 83, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 32, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'castform') {
    const data = {
      name: 'castform',
      abilities: ['forecast'],
      id: 351,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/351.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 70, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'celebi') {
    const data = {
      name: 'celebi',
      abilities: ['natural-cure'],
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
        { stat: 100, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'celesteela') {
    const data = {
      name: 'celesteela',
      abilities: ['beast-boost'],
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
        { stat: 101, name: 'ATK' },
        { stat: 103, name: 'DEF' },
        { stat: 107, name: 'SPA' },
        { stat: 101, name: 'SPD' },
        { stat: 61, name: 'SPE' },
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
        { stat: 115, name: 'ATK' },
        { stat: 65, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'ceruledge') {
    const data = {
      name: 'ceruledge',
      abilities: ['flash-fire', 'weak-armor'],
      id: 937,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/937.png',
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
        { stat: 75, name: 'HP' },
        { stat: 125, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 85, name: 'SPE' },
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
        { stat: 113, name: 'ATK' },
        { stat: 65, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 73, name: 'SPE' },
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
        { stat: 55, name: 'ATK' },
        { stat: 90, name: 'DEF' },
        { stat: 145, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 80, name: 'SPE' },
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
        { stat: 5, name: 'ATK' },
        { stat: 5, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 50, name: 'SPE' },
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
        { stat: 84, name: 'ATK' },
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
      abilities: ['tough-claws'],
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
        { stat: 130, name: 'ATK' },
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
        { stat: 104, name: 'ATK' },
        { stat: 78, name: 'DEF' },
        { stat: 159, name: 'SPA' },
        { stat: 115, name: 'SPD' },
        { stat: 100, name: 'SPE' },
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
        { stat: 65, name: 'ATK' },
        { stat: 45, name: 'DEF' },
        { stat: 92, name: 'SPA' },
        { stat: 42, name: 'SPD' },
        { stat: 91, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cherrim') {
    const data = {
      name: 'cherrim',
      abilities: ['flower-gift'],
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
        { stat: 60, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 87, name: 'SPA' },
        { stat: 78, name: 'SPD' },
        { stat: 85, name: 'SPE' },
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
        { stat: 107, name: 'ATK' },
        { stat: 122, name: 'DEF' },
        { stat: 74, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 64, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'chimecho') {
    const data = {
      name: 'chimecho',
      abilities: ['levitate'],
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
        { stat: 50, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 65, name: 'SPE' },
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
        { stat: 95, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 115, name: 'SPE' },
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
        { stat: 116, name: 'ATK' },
        { stat: 75, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 119, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'clawitzer') {
    const data = {
      name: 'clawitzer',
      abilities: ['mega-launcher'],
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
        { stat: 73, name: 'ATK' },
        { stat: 88, name: 'DEF' },
        { stat: 120, name: 'SPA' },
        { stat: 89, name: 'SPD' },
        { stat: 59, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'claydol') {
    const data = {
      name: 'claydol',
      abilities: ['levitate'],
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
        { stat: 70, name: 'ATK' },
        { stat: 105, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 120, name: 'SPD' },
        { stat: 75, name: 'SPE' },
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
        { stat: 70, name: 'ATK' },
        { stat: 73, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 60, name: 'SPE' },
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
        { stat: 75, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 20, name: 'SPE' },
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
        { stat: 95, name: 'ATK' },
        { stat: 180, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 70, name: 'SPE' },
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
        { stat: 80, name: 'ATK' },
        { stat: 120, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cobalion') {
    const data = {
      name: 'cobalion',
      abilities: ['justified'],
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
        { stat: 90, name: 'ATK' },
        { stat: 129, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 72, name: 'SPD' },
        { stat: 108, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cofagrigus') {
    const data = {
      name: 'cofagrigus',
      abilities: ['mummy'],
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
        { stat: 50, name: 'ATK' },
        { stat: 145, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 30, name: 'SPE' },
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
        { stat: 52, name: 'ATK' },
        { stat: 90, name: 'DEF' },
        { stat: 82, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 100, name: 'SPE' },
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
        { stat: 140, name: 'ATK' },
        { stat: 95, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 45, name: 'SPE' },
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
        { stat: 130, name: 'ATK' },
        { stat: 69, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 69, name: 'SPD' },
        { stat: 30, name: 'SPE' },
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
        { stat: 55, name: 'ATK' },
        { stat: 95, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 35, name: 'SPE' },
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
        { stat: 55, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 30, name: 'SPE' },
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
        { stat: 87, name: 'ATK' },
        { stat: 105, name: 'DEF' },
        { stat: 53, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 67, name: 'SPE' },
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
        { stat: 132, name: 'ATK' },
        { stat: 77, name: 'DEF' },
        { stat: 62, name: 'SPA' },
        { stat: 67, name: 'SPD' },
        { stat: 43, name: 'SPE' },
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
        { stat: 81, name: 'ATK' },
        { stat: 97, name: 'DEF' },
        { stat: 81, name: 'SPA' },
        { stat: 107, name: 'SPD' },
        { stat: 43, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cramorant') {
    const data = {
      name: 'cramorant',
      abilities: ['gulp-missile'],
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
        { stat: 85, name: 'ATK' },
        { stat: 55, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 85, name: 'SPE' },
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
        { stat: 120, name: 'ATK' },
        { stat: 85, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cresselia') {
    const data = {
      name: 'cresselia',
      abilities: ['levitate'],
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
        { stat: 70, name: 'ATK' },
        { stat: 110, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 120, name: 'SPD' },
        { stat: 85, name: 'SPE' },
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
        { stat: 90, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 130, name: 'SPE' },
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
        { stat: 105, name: 'ATK' },
        { stat: 125, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'cryogonal') {
    const data = {
      name: 'cryogonal',
      abilities: ['levitate'],
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
        { stat: 50, name: 'ATK' },
        { stat: 50, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 135, name: 'SPD' },
        { stat: 105, name: 'SPE' },
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
        { stat: 95, name: 'ATK' },
        { stat: 50, name: 'DEF' },
        { stat: 145, name: 'SPA' },
        { stat: 130, name: 'SPD' },
        { stat: 30, name: 'SPE' },
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
        { stat: 95, name: 'ATK' },
        { stat: 65, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 121, name: 'SPE' },
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
        { stat: 80, name: 'ATK' },
        { stat: 115, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'darkrai') {
    const data = {
      name: 'darkrai',
      abilities: ['bad-dreams'],
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
        { stat: 90, name: 'ATK' },
        { stat: 90, name: 'DEF' },
        { stat: 135, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 125, name: 'SPE' },
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
        { stat: 140, name: 'ATK' },
        { stat: 55, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 95, name: 'SPE' },
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
        { stat: 107, name: 'ATK' },
        { stat: 75, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'decidueye-hisui') {
    const data = {
      name: 'decidueye-hisui',
      abilities: ['overgrow', 'scrappy'],
      id: 10244,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10244.png',
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
        { stat: 112, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 60, name: 'SPE' },
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
        { stat: 58, name: 'ATK' },
        { stat: 57, name: 'DEF' },
        { stat: 81, name: 'SPA' },
        { stat: 67, name: 'SPD' },
        { stat: 101, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'delcATKy') {
    const data = {
      name: 'delcATKy',
      abilities: ['cute-charm', 'normalize', 'wonder-skin'],
      id: 301,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/301.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 70, name: 'HP' },
        { stat: 65, name: 'ATK' },
        { stat: 65, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 90, name: 'SPE' },
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
        { stat: 55, name: 'ATK' },
        { stat: 45, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 75, name: 'SPE' },
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
        { stat: 69, name: 'ATK' },
        { stat: 72, name: 'DEF' },
        { stat: 114, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 104, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'deoxys-defense') {
    const data = {
      name: 'deoxys-defense',
      abilities: ['pressure'],
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
        { stat: 70, name: 'ATK' },
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
      abilities: ['pressure'],
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
        { stat: 95, name: 'ATK' },
        { stat: 90, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 180, name: 'SPE' },
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
        { stat: 70, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 70, name: 'SPE' },
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
        { stat: 131, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 86, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 40, name: 'SPE' },
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
        { stat: 100, name: 'ATK' },
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
        { stat: 160, name: 'ATK' },
        { stat: 110, name: 'DEF' },
        { stat: 160, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 110, name: 'SPE' },
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
        { stat: 56, name: 'ATK' },
        { stat: 77, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 77, name: 'SPD' },
        { stat: 78, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'dipplin') {
    const data = {
      name: 'dipplin',
      abilities: ['supersweet-syrup', 'gluttony', 'sticky-hold'],
      id: 1011,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1011.png',
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
        { stat: 80, name: 'HP' },
        { stat: 80, name: 'ATK' },
        { stat: 110, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 40, name: 'SPE' },
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
        { stat: 48, name: 'ATK' },
        { stat: 48, name: 'DEF' },
        { stat: 48, name: 'SPA' },
        { stat: 48, name: 'SPD' },
        { stat: 48, name: 'SPE' },
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
        { stat: 110, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 110, name: 'SPE' },
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
        { stat: 100, name: 'ATK' },
        { stat: 115, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 35, name: 'SPE' },
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
        { stat: 120, name: 'ATK' },
        { stat: 120, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'doublade') {
    const data = {
      name: 'doublade',
      abilities: ['no-guard'],
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
        { stat: 110, name: 'ATK' },
        { stat: 150, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 49, name: 'SPD' },
        { stat: 35, name: 'SPE' },
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
        { stat: 100, name: 'ATK' },
        { stat: 90, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 75, name: 'SPE' },
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
        { stat: 75, name: 'ATK' },
        { stat: 90, name: 'DEF' },
        { stat: 97, name: 'SPA' },
        { stat: 123, name: 'SPD' },
        { stat: 44, name: 'SPE' },
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
        { stat: 134, name: 'ATK' },
        { stat: 95, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 80, name: 'SPE' },
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
        { stat: 60, name: 'ATK' },
        { stat: 85, name: 'DEF' },
        { stat: 135, name: 'SPA' },
        { stat: 91, name: 'SPD' },
        { stat: 36, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'drapion') {
    const data = {
      name: 'drapion',
      abilities: ['bATKle-armor', 'sniper', 'keen-eye'],
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
        { stat: 90, name: 'ATK' },
        { stat: 110, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 95, name: 'SPE' },
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
        { stat: 115, name: 'ATK' },
        { stat: 90, name: 'DEF' },
        { stat: 48, name: 'SPA' },
        { stat: 68, name: 'SPD' },
        { stat: 74, name: 'SPE' },
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
        { stat: 80, name: 'ATK' },
        { stat: 44, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 54, name: 'SPD' },
        { stat: 80, name: 'SPE' },
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
        { stat: 120, name: 'ATK' },
        { stat: 90, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 90, name: 'SPD' },
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
        { stat: 80, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 88, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'dudunsparce') {
    const data = {
      name: 'dudunsparce',
      abilities: ['serene-grace', 'run-away', 'rATKled'],
      id: 982,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/982.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 125, name: 'HP' },
        { stat: 100, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 55, name: 'SPE' },
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
        { stat: 100, name: 'ATK' },
        { stat: 50, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 120, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'dugtrio-alola') {
    const data = {
      name: 'dugtrio-alola',
      abilities: ['sand-veil', 'tangling-hair', 'sand-force'],
      id: 10106,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10106.png',
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
        { stat: 35, name: 'HP' },
        { stat: 100, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 110, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'dunsparce') {
    const data = {
      name: 'dunsparce',
      abilities: ['serene-grace', 'run-away', 'rATKled'],
      id: 206,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/206.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 70, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 45, name: 'SPE' },
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
        { stat: 95, name: 'ATK' },
        { stat: 115, name: 'DEF' },
        { stat: 120, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 85, name: 'SPE' },
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
        { stat: 109, name: 'ATK' },
        { stat: 112, name: 'DEF' },
        { stat: 48, name: 'SPA' },
        { stat: 48, name: 'SPD' },
        { stat: 109, name: 'SPE' },
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
        { stat: 100, name: 'ATK' },
        { stat: 135, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 135, name: 'SPD' },
        { stat: 45, name: 'SPE' },
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
        { stat: 50, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'eelektross') {
    const data = {
      name: 'eelektross',
      abilities: ['levitate'],
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
        { stat: 115, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'eiscue-ice') {
    const data = {
      name: 'eiscue-ice',
      abilities: ['ice-face'],
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
        { stat: 80, name: 'ATK' },
        { stat: 110, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 50, name: 'SPE' },
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
        { stat: 50, name: 'ATK' },
        { stat: 90, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 120, name: 'SPD' },
        { stat: 60, name: 'SPE' },
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
        { stat: 123, name: 'ATK' },
        { stat: 67, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 95, name: 'SPE' },
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
        { stat: 50, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 150, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'electrode-hisui') {
    const data = {
      name: 'electrode-hisui',
      abilities: ['soundproof', 'static', 'aftermath'],
      id: 10232,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10232.png',
      types: ['electric', 'grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.25x',
        'fire: 2x',
        'grass: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 50, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 150, name: 'SPE' },
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
        { stat: 123, name: 'ATK' },
        { stat: 65, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 65, name: 'SPE' },
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
        { stat: 75, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 103, name: 'SPE' },
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
        { stat: 86, name: 'ATK' },
        { stat: 88, name: 'DEF' },
        { stat: 111, name: 'SPA' },
        { stat: 101, name: 'SPD' },
        { stat: 60, name: 'SPE' },
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
        { stat: 115, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 135, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 106, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'enamorus-therian') {
    const data = {
      name: 'enamorus-therian',
      abilities: ['overcoat'],
      id: 10249,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10249.png',
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
        { stat: 115, name: 'ATK' },
        { stat: 110, name: 'DEF' },
        { stat: 135, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 46, name: 'SPE' },
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
        { stat: 115, name: 'ATK' },
        { stat: 85, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 100, name: 'SPE' },
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
        { stat: 135, name: 'ATK' },
        { stat: 105, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 20, name: 'SPE' },
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
        { stat: 65, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 130, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 110, name: 'SPE' },
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
        { stat: 135, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 88, name: 'SPE' },
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
        { stat: 95, name: 'ATK' },
        { stat: 85, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'exeggutor-alola') {
    const data = {
      name: 'exeggutor-alola',
      abilities: ['frisk', 'harvest'],
      id: 10114,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10114.png',
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
        { stat: 95, name: 'HP' },
        { stat: 105, name: 'ATK' },
        { stat: 85, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 45, name: 'SPE' },
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
        { stat: 91, name: 'ATK' },
        { stat: 63, name: 'DEF' },
        { stat: 91, name: 'SPA' },
        { stat: 73, name: 'SPD' },
        { stat: 68, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'falinks') {
    const data = {
      name: 'falinks',
      abilities: ['bATKle-armor', 'defiant'],
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
        { stat: 100, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 75, name: 'SPE' },
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
        { stat: 90, name: 'ATK' },
        { stat: 55, name: 'DEF' },
        { stat: 58, name: 'SPA' },
        { stat: 62, name: 'SPD' },
        { stat: 60, name: 'SPE' },
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
        { stat: 90, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 60, name: 'SPE' },
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
        { stat: 90, name: 'ATK' },
        { stat: 65, name: 'DEF' },
        { stat: 61, name: 'SPA' },
        { stat: 61, name: 'SPD' },
        { stat: 100, name: 'SPE' },
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
        { stat: 105, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 79, name: 'SPA' },
        { stat: 83, name: 'SPD' },
        { stat: 78, name: 'SPE' },
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
        { stat: 94, name: 'ATK' },
        { stat: 131, name: 'DEF' },
        { stat: 54, name: 'SPA' },
        { stat: 116, name: 'SPD' },
        { stat: 20, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'fezandipiti') {
    const data = {
      name: 'fezandipiti',
      abilities: ['toxic-chain', 'technician'],
      id: 1016,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1016.png',
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
        { stat: 88, name: 'HP' },
        { stat: 91, name: 'ATK' },
        { stat: 82, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 125, name: 'SPD' },
        { stat: 99, name: 'SPE' },
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
        { stat: 115, name: 'ATK' },
        { stat: 74, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 64, name: 'SPD' },
        { stat: 90, name: 'SPE' },
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
        { stat: 110, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 70, name: 'SPE' },
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
        { stat: 130, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 65, name: 'SPE' },
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
        { stat: 105, name: 'ATK' },
        { stat: 55, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 115, name: 'SPE' },
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
        { stat: 65, name: 'ATK' },
        { stat: 68, name: 'DEF' },
        { stat: 112, name: 'SPA' },
        { stat: 154, name: 'SPD' },
        { stat: 75, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'flygon') {
    const data = {
      name: 'flygon',
      abilities: ['levitate'],
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
        { stat: 100, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 100, name: 'SPE' },
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
        { stat: 90, name: 'ATK' },
        { stat: 140, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 40, name: 'SPE' },
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
        { stat: 80, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 110, name: 'SPE' },
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
        { stat: 65, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'furfrou') {
    const data = {
      name: 'furfrou',
      abilities: ['fur-coat'],
      id: 676,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/676.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 80, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 102, name: 'SPE' },
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
        { stat: 76, name: 'ATK' },
        { stat: 64, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 55, name: 'SPD' },
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
        { stat: 125, name: 'ATK' },
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
      abilities: ['inner-focus'],
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
        { stat: 165, name: 'ATK' },
        { stat: 95, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 115, name: 'SPD' },
        { stat: 110, name: 'SPE' },
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
        { stat: 77, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 97, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 108, name: 'SPE' },
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
        { stat: 95, name: 'ATK' },
        { stat: 82, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 82, name: 'SPD' },
        { stat: 75, name: 'SPE' },
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
        { stat: 130, name: 'ATK' },
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
      abilities: ['sand-force'],
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
        { stat: 170, name: 'ATK' },
        { stat: 115, name: 'DEF' },
        { stat: 120, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 92, name: 'SPE' },
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
        { stat: 65, name: 'ATK' },
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
      abilities: ['pixilate'],
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
        { stat: 85, name: 'ATK' },
        { stat: 65, name: 'DEF' },
        { stat: 165, name: 'SPA' },
        { stat: 135, name: 'SPD' },
        { stat: 100, name: 'SPE' },
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
        { stat: 100, name: 'ATK' },
        { stat: 130, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 35, name: 'SPE' },
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
        { stat: 83, name: 'ATK' },
        { stat: 68, name: 'DEF' },
        { stat: 92, name: 'SPA' },
        { stat: 82, name: 'SPD' },
        { stat: 39, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gengar') {
    const data = {
      name: 'gengar',
      abilities: ['cursed-body'],
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
        { stat: 65, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 130, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 110, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gholdengo') {
    const data = {
      name: 'gholdengo',
      abilities: ['good-as-gold'],
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
        { stat: 60, name: 'ATK' },
        { stat: 95, name: 'DEF' },
        { stat: 133, name: 'SPA' },
        { stat: 91, name: 'SPD' },
        { stat: 84, name: 'SPE' },
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
        { stat: 135, name: 'ATK' },
        { stat: 130, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 25, name: 'SPE' },
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
        { stat: 60, name: 'ATK' },
        { stat: 110, name: 'DEF' },
        { stat: 130, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 65, name: 'SPE' },
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
        { stat: 80, name: 'ATK' },
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
      abilities: ['refrigerate'],
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
        { stat: 120, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 120, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'glastrier') {
    const data = {
      name: 'glastrier',
      abilities: ['chilling-neigh'],
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
        { stat: 145, name: 'ATK' },
        { stat: 130, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 30, name: 'SPE' },
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
        { stat: 75, name: 'ATK' },
        { stat: 105, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 85, name: 'SPE' },
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
        { stat: 55, name: 'ATK' },
        { stat: 90, name: 'DEF' },
        { stat: 130, name: 'SPA' },
        { stat: 81, name: 'SPD' },
        { stat: 86, name: 'SPE' },
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
        { stat: 95, name: 'ATK' },
        { stat: 125, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 95, name: 'SPE' },
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
        { stat: 100, name: 'ATK' },
        { stat: 62, name: 'DEF' },
        { stat: 97, name: 'SPA' },
        { stat: 81, name: 'SPD' },
        { stat: 68, name: 'SPE' },
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
        { stat: 82, name: 'ATK' },
        { stat: 78, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 85, name: 'SPE' },
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
        { stat: 120, name: 'ATK' },
        { stat: 130, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'golem-alola') {
    const data = {
      name: 'golem-alola',
      abilities: ['magnet-pull', 'sturdy', 'galvanize'],
      id: 10111,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10111.png',
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
        { stat: 80, name: 'HP' },
        { stat: 120, name: 'ATK' },
        { stat: 130, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'golisopod') {
    const data = {
      name: 'golisopod',
      abilities: ['emergency-exit'],
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
        { stat: 125, name: 'ATK' },
        { stat: 140, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 40, name: 'SPE' },
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
        { stat: 124, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 55, name: 'SPE' },
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
        { stat: 100, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 150, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'goodra-hisui') {
    const data = {
      name: 'goodra-hisui',
      abilities: ['sap-sipper', 'shell-armor', 'gooey'],
      id: 10242,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10242.png',
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
        { stat: 80, name: 'HP' },
        { stat: 100, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 150, name: 'SPD' },
        { stat: 60, name: 'SPE' },
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
        { stat: 84, name: 'ATK' },
        { stat: 105, name: 'DEF' },
        { stat: 114, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 52, name: 'SPE' },
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
        { stat: 55, name: 'ATK' },
        { stat: 95, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 65, name: 'SPE' },
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
        { stat: 90, name: 'ATK' },
        { stat: 122, name: 'DEF' },
        { stat: 58, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 84, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gourgeist-small') {
    const data = {
      name: 'gourgeist-small',
      abilities: ['pickup', 'frisk', 'insomnia'],
      id: 10030,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10030.png',
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
        { stat: 55, name: 'HP' },
        { stat: 85, name: 'ATK' },
        { stat: 122, name: 'DEF' },
        { stat: 58, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 99, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gourgeist-large') {
    const data = {
      name: 'gourgeist-large',
      abilities: ['pickup', 'frisk', 'insomnia'],
      id: 10031,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10031.png',
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
        { stat: 75, name: 'HP' },
        { stat: 95, name: 'ATK' },
        { stat: 122, name: 'DEF' },
        { stat: 58, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 69, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'gourgeist-super') {
    const data = {
      name: 'gourgeist-super',
      abilities: ['pickup', 'frisk', 'insomnia'],
      id: 10032,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10032.png',
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
        { stat: 100, name: 'ATK' },
        { stat: 122, name: 'DEF' },
        { stat: 58, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 54, name: 'SPE' },
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
        { stat: 95, name: 'ATK' },
        { stat: 65, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 72, name: 'SPD' },
        { stat: 110, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'granbull') {
    const data = {
      name: 'granbull',
      abilities: ['intimidate', 'quick-feet', 'rATKled'],
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
        { stat: 120, name: 'ATK' },
        { stat: 75, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 45, name: 'SPE' },
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
        { stat: 118, name: 'ATK' },
        { stat: 90, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 42, name: 'SPE' },
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
        { stat: 131, name: 'ATK' },
        { stat: 131, name: 'DEF' },
        { stat: 53, name: 'SPA' },
        { stat: 53, name: 'SPD' },
        { stat: 87, name: 'SPE' },
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
        { stat: 95, name: 'ATK' },
        { stat: 95, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 20, name: 'SPE' },
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
        { stat: 95, name: 'ATK' },
        { stat: 67, name: 'DEF' },
        { stat: 103, name: 'SPA' },
        { stat: 71, name: 'SPD' },
        { stat: 122, name: 'SPE' },
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
        { stat: 120, name: 'ATK' },
        { stat: 65, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 75, name: 'SPD' },
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
        { stat: 45, name: 'ATK' },
        { stat: 65, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 80, name: 'SPE' },
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
        { stat: 110, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'guzzlord') {
    const data = {
      name: 'guzzlord',
      abilities: ['beast-boost'],
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
        { stat: 101, name: 'ATK' },
        { stat: 53, name: 'DEF' },
        { stat: 97, name: 'SPA' },
        { stat: 53, name: 'SPD' },
        { stat: 43, name: 'SPE' },
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
        { stat: 125, name: 'ATK' },
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
      abilities: ['mold-breaker'],
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
        { stat: 155, name: 'ATK' },
        { stat: 109, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 130, name: 'SPD' },
        { stat: 81, name: 'SPE' },
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
        { stat: 120, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'hATKerene') {
    const data = {
      name: 'hATKerene',
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
        { stat: 90, name: 'ATK' },
        { stat: 95, name: 'DEF' },
        { stat: 136, name: 'SPA' },
        { stat: 103, name: 'SPD' },
        { stat: 29, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'haunter') {
    const data = {
      name: 'haunter',
      abilities: ['levitate'],
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
        { stat: 50, name: 'ATK' },
        { stat: 45, name: 'DEF' },
        { stat: 115, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 95, name: 'SPE' },
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
        { stat: 92, name: 'ATK' },
        { stat: 75, name: 'DEF' },
        { stat: 74, name: 'SPA' },
        { stat: 63, name: 'SPD' },
        { stat: 118, name: 'SPE' },
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
        { stat: 147, name: 'ATK' },
        { stat: 90, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 97, name: 'SPE' },
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
        { stat: 97, name: 'ATK' },
        { stat: 66, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 66, name: 'SPD' },
        { stat: 65, name: 'SPE' },
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
        { stat: 90, name: 'ATK' },
        { stat: 106, name: 'DEF' },
        { stat: 130, name: 'SPA' },
        { stat: 106, name: 'SPD' },
        { stat: 77, name: 'SPE' },
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
        { stat: 55, name: 'ATK' },
        { stat: 52, name: 'DEF' },
        { stat: 109, name: 'SPA' },
        { stat: 94, name: 'SPD' },
        { stat: 109, name: 'SPE' },
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
        { stat: 125, name: 'ATK' },
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
      abilities: ['skill-link'],
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
        { stat: 185, name: 'ATK' },
        { stat: 115, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 75, name: 'SPE' },
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
        { stat: 112, name: 'ATK' },
        { stat: 118, name: 'DEF' },
        { stat: 68, name: 'SPA' },
        { stat: 72, name: 'SPD' },
        { stat: 47, name: 'SPE' },
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
        { stat: 105, name: 'ATK' },
        { stat: 79, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 76, name: 'SPE' },
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
        { stat: 120, name: 'ATK' },
        { stat: 53, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 87, name: 'SPE' },
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
        { stat: 95, name: 'ATK' },
        { stat: 95, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 70, name: 'SPE' },
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
        { stat: 125, name: 'ATK' },
        { stat: 52, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 52, name: 'SPD' },
        { stat: 71, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'hoopa') {
    const data = {
      name: 'hoopa',
      abilities: ['magician'],
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
        { stat: 110, name: 'ATK' },
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
      abilities: ['magician'],
      id: 10086,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10086.png',
      types: ['psychic', 'dark'],
      weaknesses: ['bug: 4x', 'fairy: 2x', 'psychic: 0x'],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 160, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 170, name: 'SPA' },
        { stat: 130, name: 'SPD' },
        { stat: 80, name: 'SPE' },
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
        { stat: 90, name: 'ATK' },
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
      abilities: ['solar-power'],
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
        { stat: 90, name: 'ATK' },
        { stat: 90, name: 'DEF' },
        { stat: 140, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 115, name: 'SPE' },
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
        { stat: 101, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 97, name: 'SPD' },
        { stat: 68, name: 'SPE' },
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
        { stat: 104, name: 'ATK' },
        { stat: 105, name: 'DEF' },
        { stat: 94, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 52, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'hydrapple') {
    const data = {
      name: 'hydrapple',
      abilities: ['supersweet-syrup', 'regenerator', 'sticky-hold'],
      id: 1019,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1019.png',
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
        { stat: 106, name: 'HP' },
        { stat: 80, name: 'ATK' },
        { stat: 110, name: 'DEF' },
        { stat: 120, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 44, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'hydreigon') {
    const data = {
      name: 'hydreigon',
      abilities: ['levitate'],
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
        { stat: 105, name: 'ATK' },
        { stat: 90, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 98, name: 'SPE' },
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
        { stat: 73, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 73, name: 'SPA' },
        { stat: 115, name: 'SPD' },
        { stat: 67, name: 'SPE' },
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
        { stat: 47, name: 'ATK' },
        { stat: 75, name: 'DEF' },
        { stat: 73, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 85, name: 'SPE' },
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
        { stat: 115, name: 'ATK' },
        { stat: 90, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 60, name: 'SPE' },
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
        { stat: 65, name: 'ATK' },
        { stat: 55, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 95, name: 'SPE' },
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
        { stat: 104, name: 'ATK' },
        { stat: 71, name: 'DEF' },
        { stat: 104, name: 'SPA' },
        { stat: 71, name: 'SPD' },
        { stat: 108, name: 'SPE' },
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
        { stat: 85, name: 'ATK' },
        { stat: 65, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 120, name: 'SPE' },
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
        { stat: 120, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 68, name: 'SPA' },
        { stat: 108, name: 'SPD' },
        { stat: 124, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'iron-crown') {
    const data = {
      name: 'iron-crown',
      abilities: ['quark-drive'],
      id: 1023,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1023.png',
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
        { stat: 90, name: 'HP' },
        { stat: 72, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 122, name: 'SPA' },
        { stat: 108, name: 'SPD' },
        { stat: 98, name: 'SPE' },
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
        { stat: 140, name: 'ATK' },
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
        { stat: 80, name: 'ATK' },
        { stat: 86, name: 'DEF' },
        { stat: 122, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 108, name: 'SPE' },
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
        { stat: 130, name: 'ATK' },
        { stat: 88, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 108, name: 'SPD' },
        { stat: 104, name: 'SPE' },
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
        { stat: 70, name: 'ATK' },
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
        { stat: 134, name: 'ATK' },
        { stat: 110, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 84, name: 'SPD' },
        { stat: 72, name: 'SPE' },
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
        { stat: 112, name: 'ATK' },
        { stat: 120, name: 'DEF' },
        { stat: 72, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 106, name: 'SPE' },
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
        { stat: 60, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'jirachi') {
    const data = {
      name: 'jirachi',
      abilities: ['serene-grace'],
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
        { stat: 100, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 100, name: 'SPE' },
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
        { stat: 65, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 130, name: 'SPE' },
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
        { stat: 55, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 110, name: 'SPE' },
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
        { stat: 50, name: 'ATK' },
        { stat: 35, name: 'DEF' },
        { stat: 115, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 95, name: 'SPE' },
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
        { stat: 35, name: 'ATK' },
        { stat: 30, name: 'DEF' },
        { stat: 120, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 105, name: 'SPE' },
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
        { stat: 95, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'kartana') {
    const data = {
      name: 'kartana',
      abilities: ['beast-boost'],
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
        { stat: 181, name: 'ATK' },
        { stat: 131, name: 'DEF' },
        { stat: 59, name: 'SPA' },
        { stat: 31, name: 'SPD' },
        { stat: 109, name: 'SPE' },
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
        { stat: 90, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 120, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'keldeo-ordinary') {
    const data = {
      name: 'keldeo-ordinary',
      abilities: ['justified'],
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
        { stat: 72, name: 'ATK' },
        { stat: 90, name: 'DEF' },
        { stat: 129, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 108, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'kilowATKrel') {
    const data = {
      name: 'kilowATKrel',
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
        { stat: 70, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 125, name: 'SPE' },
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
        { stat: 135, name: 'ATK' },
        { stat: 120, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 50, name: 'SPE' },
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
        { stat: 95, name: 'ATK' },
        { stat: 95, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 85, name: 'SPE' },
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
        { stat: 130, name: 'ATK' },
        { stat: 115, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 75, name: 'SPE' },
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
        { stat: 100, name: 'ATK' },
        { stat: 115, name: 'DEF' },
        { stat: 35, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 75, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'kleavor') {
    const data = {
      name: 'kleavor',
      abilities: ['swarm', 'sheer-force', 'sharpness'],
      id: 900,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/900.png',
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
        { stat: 135, name: 'ATK' },
        { stat: 95, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 85, name: 'SPE' },
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
        { stat: 80, name: 'ATK' },
        { stat: 91, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 87, name: 'SPD' },
        { stat: 75, name: 'SPE' },
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
        { stat: 100, name: 'ATK' },
        { stat: 115, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'komala') {
    const data = {
      name: 'komala',
      abilities: ['comatose'],
      id: 775,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/775.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 115, name: 'ATK' },
        { stat: 65, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 95, name: 'SPD' },
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
        { stat: 110, name: 'ATK' },
        { stat: 125, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 85, name: 'SPE' },
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
        { stat: 85, name: 'ATK' },
        { stat: 51, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 51, name: 'SPD' },
        { stat: 65, name: 'SPE' },
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
        { stat: 117, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 92, name: 'SPE' },
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
        { stat: 145, name: 'ATK' },
        { stat: 90, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 91, name: 'SPE' },
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
        { stat: 58, name: 'ATK' },
        { stat: 58, name: 'DEF' },
        { stat: 76, name: 'SPA' },
        { stat: 76, name: 'SPD' },
        { stat: 67, name: 'SPE' },
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
        { stat: 85, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'latias') {
    const data = {
      name: 'latias',
      abilities: ['levitate'],
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
        { stat: 80, name: 'ATK' },
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
      abilities: ['levitate'],
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
        { stat: 100, name: 'ATK' },
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
      abilities: ['levitate'],
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
        { stat: 90, name: 'ATK' },
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
      abilities: ['levitate'],
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
        { stat: 130, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 160, name: 'SPA' },
        { stat: 120, name: 'SPD' },
        { stat: 110, name: 'SPE' },
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
        { stat: 110, name: 'ATK' },
        { stat: 130, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 95, name: 'SPE' },
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
        { stat: 103, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 92, name: 'SPE' },
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
        { stat: 35, name: 'ATK' },
        { stat: 50, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 85, name: 'SPE' },
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
        { stat: 85, name: 'ATK' },
        { stat: 95, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 50, name: 'SPE' },
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
        { stat: 88, name: 'ATK' },
        { stat: 50, name: 'DEF' },
        { stat: 88, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 106, name: 'SPE' },
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
        { stat: 60, name: 'ATK' },
        { stat: 75, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'lilligant-hisui') {
    const data = {
      name: 'lilligant-hisui',
      abilities: ['chlorophyll', 'hustle', 'leaf-guard'],
      id: 10237,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10237.png',
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
        { stat: 70, name: 'HP' },
        { stat: 105, name: 'ATK' },
        { stat: 75, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 105, name: 'SPE' },
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
        { stat: 70, name: 'ATK' },
        { stat: 61, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 61, name: 'SPD' },
        { stat: 100, name: 'SPE' },
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
        { stat: 102, name: 'ATK' },
        { stat: 78, name: 'DEF' },
        { stat: 52, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 92, name: 'SPE' },
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
        { stat: 76, name: 'ATK' },
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
      abilities: ['scrappy'],
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
        { stat: 136, name: 'ATK' },
        { stat: 94, name: 'DEF' },
        { stat: 54, name: 'SPA' },
        { stat: 96, name: 'SPD' },
        { stat: 135, name: 'SPE' },
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
        { stat: 110, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 115, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 90, name: 'SPE' },
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
        { stat: 70, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 70, name: 'SPE' },
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
        { stat: 69, name: 'ATK' },
        { stat: 76, name: 'DEF' },
        { stat: 69, name: 'SPA' },
        { stat: 86, name: 'SPD' },
        { stat: 91, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'lunatone') {
    const data = {
      name: 'lunatone',
      abilities: ['levitate'],
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
        { stat: 55, name: 'ATK' },
        { stat: 65, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 70, name: 'SPE' },
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
        { stat: 105, name: 'ATK' },
        { stat: 90, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 45, name: 'SPE' },
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
        { stat: 30, name: 'ATK' },
        { stat: 55, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 97, name: 'SPE' },
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
        { stat: 120, name: 'ATK' },
        { stat: 79, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 79, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'lycanroc-dusk') {
    const data = {
      name: 'lycanroc-dusk',
      abilities: ['tough-claws'],
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
        { stat: 117, name: 'ATK' },
        { stat: 65, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 110, name: 'SPE' },
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
        { stat: 115, name: 'ATK' },
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
        { stat: 115, name: 'ATK' },
        { stat: 75, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 82, name: 'SPE' },
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
        { stat: 120, name: 'ATK' },
        { stat: 90, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 85, name: 'SPE' },
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
        { stat: 130, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 55, name: 'SPE' },
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
        { stat: 50, name: 'ATK' },
        { stat: 120, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 30, name: 'SPE' },
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
        { stat: 95, name: 'ATK' },
        { stat: 67, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 83, name: 'SPE' },
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
        { stat: 60, name: 'ATK' },
        { stat: 95, name: 'DEF' },
        { stat: 120, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 70, name: 'SPE' },
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
        { stat: 70, name: 'ATK' },
        { stat: 115, name: 'DEF' },
        { stat: 130, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 60, name: 'SPE' },
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
        { stat: 92, name: 'ATK' },
        { stat: 88, name: 'DEF' },
        { stat: 68, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 73, name: 'SPE' },
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
        { stat: 130, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 80, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'manaphy') {
    const data = {
      name: 'manaphy',
      abilities: ['hydration'],
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
        { stat: 100, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 100, name: 'SPE' },
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
        { stat: 65, name: 'ATK' },
        { stat: 105, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 80, name: 'SPE' },
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
        { stat: 75, name: 'ATK' },
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
      abilities: ['intimidate'],
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
        { stat: 75, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 135, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 135, name: 'SPE' },
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
        { stat: 40, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 140, name: 'SPD' },
        { stat: 70, name: 'SPE' },
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
        { stat: 86, name: 'ATK' },
        { stat: 67, name: 'DEF' },
        { stat: 106, name: 'SPA' },
        { stat: 67, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'marowak') {
    const data = {
      name: 'marowak',
      abilities: ['rock-head', 'lightning-rod', 'bATKle-armor'],
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
        { stat: 80, name: 'ATK' },
        { stat: 110, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'marowak-alola') {
    const data = {
      name: 'marowak-alola',
      abilities: ['cursed-body', 'lightning-rod', 'rock-head'],
      id: 10115,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10115.png',
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
        { stat: 60, name: 'HP' },
        { stat: 80, name: 'ATK' },
        { stat: 110, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 45, name: 'SPE' },
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
        { stat: 60, name: 'ATK' },
        { stat: 62, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 82, name: 'SPD' },
        { stat: 80, name: 'SPE' },
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
        { stat: 75, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 111, name: 'SPE' },
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
        { stat: 85, name: 'ATK' },
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
      abilities: ['huge-power'],
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
        { stat: 105, name: 'ATK' },
        { stat: 125, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 50, name: 'SPE' },
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
        { stat: 60, name: 'ATK' },
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
      abilities: ['pure-power'],
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
        { stat: 100, name: 'ATK' },
        { stat: 85, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 100, name: 'SPE' },
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
        { stat: 82, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 83, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 80, name: 'SPE' },
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
        { stat: 143, name: 'ATK' },
        { stat: 143, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 34, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'meloetta-aria') {
    const data = {
      name: 'meloetta-aria',
      abilities: ['serene-grace'],
      id: 648,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/648.png',
      types: ['normal', 'psychic'],
      weaknesses: ['bug: 2x', 'dark: 2x', 'ghost: 0x', 'psychic: 0.5x'],
      stats: [
        { stat: 100, name: 'HP' },
        { stat: 77, name: 'ATK' },
        { stat: 77, name: 'DEF' },
        { stat: 128, name: 'SPA' },
        { stat: 128, name: 'SPD' },
        { stat: 90, name: 'SPE' },
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
        { stat: 110, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 81, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 123, name: 'SPE' },
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
        { stat: 48, name: 'ATK' },
        { stat: 76, name: 'DEF' },
        { stat: 83, name: 'SPA' },
        { stat: 81, name: 'SPD' },
        { stat: 104, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mesprit') {
    const data = {
      name: 'mesprit',
      abilities: ['levitate'],
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
        { stat: 105, name: 'ATK' },
        { stat: 105, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 80, name: 'SPE' },
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
        { stat: 135, name: 'ATK' },
        { stat: 130, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mew') {
    const data = {
      name: 'mew',
      abilities: ['synchronize'],
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
        { stat: 100, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 100, name: 'SPE' },
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
        { stat: 125, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 105, name: 'SPE' },
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
        { stat: 90, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 70, name: 'SPE' },
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
        { stat: 60, name: 'ATK' },
        { stat: 79, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 125, name: 'SPD' },
        { stat: 81, name: 'SPE' },
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
        { stat: 80, name: 'ATK' },
        { stat: 105, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mimikyu-disguised') {
    const data = {
      name: 'mimikyu-disguised',
      abilities: ['disguise'],
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
        { stat: 90, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 96, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'minior-red-meteor') {
    const data = {
      name: 'minior-red-meteor',
      abilities: ['shields-down'],
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
        { stat: 60, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 60, name: 'SPE' },
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
        { stat: 40, name: 'ATK' },
        { stat: 50, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'mismagius') {
    const data = {
      name: 'mismagius',
      abilities: ['levitate'],
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
        { stat: 60, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 105, name: 'SPE' },
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
        { stat: 100, name: 'ATK' },
        { stat: 90, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'morpeko-full-belly') {
    const data = {
      name: 'morpeko-full-belly',
      abilities: ['hunger-switch'],
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
        { stat: 95, name: 'ATK' },
        { stat: 58, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 58, name: 'SPD' },
        { stat: 97, name: 'SPE' },
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
        { stat: 94, name: 'ATK' },
        { stat: 50, name: 'DEF' },
        { stat: 94, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 66, name: 'SPE' },
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
        { stat: 45, name: 'ATK' },
        { stat: 65, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 120, name: 'SPD' },
        { stat: 90, name: 'SPE' },
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
        { stat: 85, name: 'ATK' },
        { stat: 75, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 70, name: 'SPE' },
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
        { stat: 125, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 35, name: 'SPE' },
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
        { stat: 105, name: 'ATK' },
        { stat: 75, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'muk-alola') {
    const data = {
      name: 'muk-alola',
      abilities: ['poison-touch', 'gluttony', 'power-of-alchemy'],
      id: 10113,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10113.png',
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
        { stat: 105, name: 'HP' },
        { stat: 105, name: 'ATK' },
        { stat: 75, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'munkidori') {
    const data = {
      name: 'munkidori',
      abilities: ['toxic-chain', 'frisk'],
      id: 1015,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1015.png',
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
        { stat: 88, name: 'HP' },
        { stat: 75, name: 'ATK' },
        { stat: 66, name: 'DEF' },
        { stat: 130, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 106, name: 'SPE' },
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
        { stat: 55, name: 'ATK' },
        { stat: 85, name: 'DEF' },
        { stat: 107, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 29, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'necrozma') {
    const data = {
      name: 'necrozma',
      abilities: ['prism-armor'],
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
        { stat: 107, name: 'ATK' },
        { stat: 101, name: 'DEF' },
        { stat: 127, name: 'SPA' },
        { stat: 89, name: 'SPD' },
        { stat: 79, name: 'SPE' },
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
        { stat: 102, name: 'ATK' },
        { stat: 77, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 85, name: 'SPE' },
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
        { stat: 92, name: 'ATK' },
        { stat: 87, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 76, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'nihilego') {
    const data = {
      name: 'nihilego',
      abilities: ['beast-boost'],
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
        { stat: 53, name: 'ATK' },
        { stat: 47, name: 'DEF' },
        { stat: 127, name: 'SPA' },
        { stat: 131, name: 'SPD' },
        { stat: 103, name: 'SPE' },
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
        { stat: 76, name: 'ATK' },
        { stat: 75, name: 'DEF' },
        { stat: 81, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'ninetales-alola') {
    const data = {
      name: 'ninetales-alola',
      abilities: ['snow-cloak', 'snow-warning'],
      id: 10104,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10104.png',
      types: ['ice', 'fairy'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 0.5x',
        'dragon: 0x',
        'fire: 2x',
        'ice: 0.5x',
        'poison: 2x',
        'rock: 2x',
        'steel: 4x',
      ],
      stats: [
        { stat: 73, name: 'HP' },
        { stat: 67, name: 'ATK' },
        { stat: 75, name: 'DEF' },
        { stat: 81, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 109, name: 'SPE' },
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
        { stat: 90, name: 'ATK' },
        { stat: 45, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 160, name: 'SPE' },
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
        { stat: 50, name: 'ATK' },
        { stat: 50, name: 'DEF' },
        { stat: 86, name: 'SPA' },
        { stat: 96, name: 'SPD' },
        { stat: 70, name: 'SPE' },
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
        { stat: 70, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 97, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 123, name: 'SPE' },
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
        { stat: 90, name: 'ATK' },
        { stat: 101, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 81, name: 'SPD' },
        { stat: 95, name: 'SPE' },
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
        { stat: 105, name: 'ATK' },
        { stat: 75, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'ogerpon') {
    const data = {
      name: 'ogerpon',
      abilities: ['defiant'],
      id: 1017,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1017.png',
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
        { stat: 120, name: 'ATK' },
        { stat: 84, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 96, name: 'SPD' },
        { stat: 110, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'ogerpon-cornerstone-mask') {
    const data = {
      name: 'ogerpon-cornerstone-mask',
      abilities: ['sturdy'],
      id: 10275,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10275.png',
      types: ['grass', 'rock'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.5x',
        'fighting: 2x',
        'ice: 2x',
        'normal: 0.5x',
        'steel: 2x',
      ],
      stats: [
        { stat: 80, name: 'HP' },
        { stat: 120, name: 'ATK' },
        { stat: 84, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 96, name: 'SPD' },
        { stat: 110, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'ogerpon-hearthflame-mask') {
    const data = {
      name: 'ogerpon-hearthflame-mask',
      abilities: ['mold-breaker'],
      id: 10274,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10274.png',
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
        { stat: 80, name: 'HP' },
        { stat: 120, name: 'ATK' },
        { stat: 84, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 96, name: 'SPD' },
        { stat: 110, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'ogerpon-wellspring-mask') {
    const data = {
      name: 'ogerpon-wellspring-mask',
      abilities: ['water-absorb'],
      id: 10273,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10273.png',
      types: ['grass', 'water'],
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
        { stat: 120, name: 'ATK' },
        { stat: 84, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 96, name: 'SPD' },
        { stat: 110, name: 'SPE' },
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
        { stat: 100, name: 'ATK' },
        { stat: 75, name: 'DEF' },
        { stat: 59, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'okidogi') {
    const data = {
      name: 'okidogi',
      abilities: ['toxic-chain', 'guard-dog'],
      id: 1014,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1014.png',
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
        { stat: 88, name: 'HP' },
        { stat: 128, name: 'ATK' },
        { stat: 115, name: 'DEF' },
        { stat: 58, name: 'SPA' },
        { stat: 86, name: 'SPD' },
        { stat: 80, name: 'SPE' },
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
        { stat: 60, name: 'ATK' },
        { stat: 125, name: 'DEF' },
        { stat: 115, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 55, name: 'SPE' },
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
        { stat: 60, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 60, name: 'SPE' },
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
        { stat: 45, name: 'ATK' },
        { stat: 110, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 120, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'oricorio-baile') {
    const data = {
      name: 'oricorio-baile',
      abilities: ['dancer'],
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
        { stat: 70, name: 'ATK' },
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
      abilities: ['dancer'],
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
        { stat: 70, name: 'ATK' },
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
      abilities: ['dancer'],
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
        { stat: 70, name: 'ATK' },
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
      abilities: ['dancer'],
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
        { stat: 70, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 98, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 93, name: 'SPE' },
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
        { stat: 85, name: 'ATK' },
        { stat: 145, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'overqwil') {
    const data = {
      name: 'overqwil',
      abilities: ['poison-point', 'swift-swim', 'intimidate'],
      id: 904,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/904.png',
      types: ['dark', 'poison'],
      weaknesses: [
        'dark: 0.5x',
        'ghost: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'poison: 0.5x',
        'psychic: 0x',
      ],
      stats: [
        { stat: 85, name: 'HP' },
        { stat: 115, name: 'ATK' },
        { stat: 95, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 85, name: 'SPE' },
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
        { stat: 45, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 95, name: 'SPE' },
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
        { stat: 70, name: 'ATK' },
        { stat: 72, name: 'DEF' },
        { stat: 53, name: 'SPA' },
        { stat: 62, name: 'SPD' },
        { stat: 100, name: 'SPE' },
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
        { stat: 75, name: 'ATK' },
        { stat: 110, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 35, name: 'SPE' },
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
        { stat: 124, name: 'ATK' },
        { stat: 78, name: 'DEF' },
        { stat: 69, name: 'SPA' },
        { stat: 71, name: 'SPD' },
        { stat: 58, name: 'SPE' },
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
        { stat: 95, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 30, name: 'SPE' },
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
        { stat: 120, name: 'ATK' },
        { stat: 90, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 80, name: 'SPE' },
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
        { stat: 115, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 105, name: 'SPE' },
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
        { stat: 88, name: 'ATK' },
        { stat: 160, name: 'DEF' },
        { stat: 88, name: 'SPA' },
        { stat: 88, name: 'SPD' },
        { stat: 88, name: 'SPE' },
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
        { stat: 50, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'perrserker') {
    const data = {
      name: 'perrserker',
      abilities: ['bATKle-armor', 'tough-claws', 'steely-spirit'],
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
        { stat: 110, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 50, name: 'SPE' },
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
        { stat: 70, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 115, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'persian-alola') {
    const data = {
      name: 'persian-alola',
      abilities: ['fur-coat', 'technician', 'rATKled'],
      id: 10108,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10108.png',
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
        { stat: 60, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 115, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'phione') {
    const data = {
      name: 'phione',
      abilities: ['hydration'],
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
        { stat: 80, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 80, name: 'SPE' },
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
        { stat: 80, name: 'ATK' },
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
      abilities: ['no-guard'],
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
        { stat: 80, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 135, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 121, name: 'SPE' },
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
        { stat: 100, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 50, name: 'SPE' },
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
        { stat: 101, name: 'ATK' },
        { stat: 95, name: 'DEF' },
        { stat: 91, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 15, name: 'SPE' },
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
        { stat: 125, name: 'ATK' },
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
      abilities: ['aerilate'],
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
        { stat: 155, name: 'ATK' },
        { stat: 120, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 105, name: 'SPE' },
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
        { stat: 50, name: 'ATK' },
        { stat: 40, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 95, name: 'SPE' },
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
        { stat: 75, name: 'ATK' },
        { stat: 75, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 70, name: 'SPE' },
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
        { stat: 95, name: 'ATK' },
        { stat: 95, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 70, name: 'SPE' },
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
        { stat: 65, name: 'ATK' },
        { stat: 65, name: 'DEF' },
        { stat: 134, name: 'SPA' },
        { stat: 114, name: 'SPD' },
        { stat: 70, name: 'SPE' },
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
        { stat: 80, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 135, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 90, name: 'SPE' },
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
        { stat: 80, name: 'ATK' },
        { stat: 90, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 60, name: 'SPE' },
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
        { stat: 74, name: 'ATK' },
        { stat: 74, name: 'DEF' },
        { stat: 126, name: 'SPA' },
        { stat: 116, name: 'SPD' },
        { stat: 60, name: 'SPE' },
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
        { stat: 105, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 95, name: 'SPE' },
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
        { stat: 55, name: 'ATK' },
        { stat: 145, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 150, name: 'SPD' },
        { stat: 40, name: 'SPE' },
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
        { stat: 82, name: 'ATK' },
        { stat: 64, name: 'DEF' },
        { stat: 64, name: 'SPA' },
        { stat: 59, name: 'SPD' },
        { stat: 112, name: 'SPE' },
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
        { stat: 68, name: 'ATK' },
        { stat: 72, name: 'DEF' },
        { stat: 109, name: 'SPA' },
        { stat: 66, name: 'SPD' },
        { stat: 106, name: 'SPE' },
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
        { stat: 60, name: 'ATK' },
        { stat: 130, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 130, name: 'SPD' },
        { stat: 5, name: 'SPE' },
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
        { stat: 85, name: 'ATK' },
        { stat: 85, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 35, name: 'SPE' },
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
        { stat: 120, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 85, name: 'SPE' },
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
        { stat: 95, name: 'ATK' },
        { stat: 85, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'qwilfish-hisui') {
    const data = {
      name: 'qwilfish-hisui',
      abilities: ['poison-point', 'swift-swim', 'intimidate'],
      id: 10234,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10234.png',
      types: ['dark', 'poison'],
      weaknesses: [
        'dark: 0.5x',
        'ghost: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'poison: 0.5x',
        'psychic: 0x',
      ],
      stats: [
        { stat: 65, name: 'HP' },
        { stat: 95, name: 'ATK' },
        { stat: 85, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 85, name: 'SPE' },
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
        { stat: 50, name: 'ATK' },
        { stat: 85, name: 'DEF' },
        { stat: 115, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'raging-bolt') {
    const data = {
      name: 'raging-bolt',
      abilities: ['protosynthesis'],
      id: 1021,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1021.png',
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
        { stat: 125, name: 'HP' },
        { stat: 73, name: 'ATK' },
        { stat: 91, name: 'DEF' },
        { stat: 137, name: 'SPA' },
        { stat: 89, name: 'SPD' },
        { stat: 75, name: 'SPE' },
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
        { stat: 90, name: 'ATK' },
        { stat: 55, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 110, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'raichu-alola') {
    const data = {
      name: 'raichu-alola',
      abilities: ['surge-surfer'],
      id: 10100,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10100.png',
      types: ['electric', 'psychic'],
      weaknesses: [
        'bug: 2x',
        'dark: 2x',
        'electric: 0.5x',
        'fighting: 0.5x',
        'flying: 0.5x',
        'ghost: 2x',
        'ground: 2x',
        'psychic: 0.5x',
        'steel: 0.5x',
      ],
      stats: [
        { stat: 60, name: 'HP' },
        { stat: 85, name: 'ATK' },
        { stat: 50, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 110, name: 'SPE' },
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
        { stat: 85, name: 'ATK' },
        { stat: 75, name: 'DEF' },
        { stat: 115, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 115, name: 'SPE' },
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
        { stat: 165, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 58, name: 'SPE' },
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
        { stat: 100, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 105, name: 'SPE' },
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
        { stat: 100, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 105, name: 'SPE' },
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
        { stat: 81, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 97, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'raticate-alola') {
    const data = {
      name: 'raticate-alola',
      abilities: ['gluttony', 'hustle', 'thick-fat'],
      id: 10092,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10092.png',
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
        { stat: 75, name: 'HP' },
        { stat: 71, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 77, name: 'SPE' },
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
        { stat: 50, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 200, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'regidrago') {
    const data = {
      name: 'regidrago',
      abilities: ['dragons-maw'],
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
        { stat: 100, name: 'ATK' },
        { stat: 50, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 80, name: 'SPE' },
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
        { stat: 100, name: 'ATK' },
        { stat: 50, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 200, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'regigigas') {
    const data = {
      name: 'regigigas',
      abilities: ['slow-start'],
      id: 486,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/486.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 110, name: 'HP' },
        { stat: 160, name: 'ATK' },
        { stat: 110, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 100, name: 'SPE' },
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
        { stat: 100, name: 'ATK' },
        { stat: 200, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 100, name: 'SPD' },
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
        { stat: 75, name: 'ATK' },
        { stat: 150, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 150, name: 'SPD' },
        { stat: 50, name: 'SPE' },
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
        { stat: 90, name: 'ATK' },
        { stat: 130, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 55, name: 'SPE' },
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
        { stat: 65, name: 'ATK' },
        { stat: 75, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 30, name: 'SPE' },
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
        { stat: 119, name: 'ATK' },
        { stat: 90, name: 'DEF' },
        { stat: 54, name: 'SPA' },
        { stat: 67, name: 'SPD' },
        { stat: 90, name: 'SPE' },
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
        { stat: 130, name: 'ATK' },
        { stat: 120, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 40, name: 'SPE' },
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
        { stat: 140, name: 'ATK' },
        { stat: 130, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 40, name: 'SPE' },
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
        { stat: 55, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 124, name: 'SPE' },
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
        { stat: 125, name: 'ATK' },
        { stat: 90, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'roaring-moon') {
    const data = {
      name: 'roaring-moon',
      abilities: ['protosynthesis', 'protosynthesis'],
      id: 1005,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1005.png',
      types: ['dragon', 'dark'],
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
        { stat: 105, name: 'HP' },
        { stat: 139, name: 'ATK' },
        { stat: 71, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 101, name: 'SPD' },
        { stat: 119, name: 'SPE' },
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
        { stat: 70, name: 'ATK' },
        { stat: 65, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 90, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'rotom') {
    const data = {
      name: 'rotom',
      abilities: ['levitate'],
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
        { stat: 50, name: 'ATK' },
        { stat: 77, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 77, name: 'SPD' },
        { stat: 91, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'rotom-fan') {
    const data = {
      name: 'rotom-fan',
      abilities: ['levitate'],
      id: 10011,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10011.png',
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
        { stat: 50, name: 'HP' },
        { stat: 65, name: 'ATK' },
        { stat: 107, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 107, name: 'SPD' },
        { stat: 86, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'rotom-frost') {
    const data = {
      name: 'rotom-frost',
      abilities: ['levitate'],
      id: 10010,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10010.png',
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
        { stat: 50, name: 'HP' },
        { stat: 65, name: 'ATK' },
        { stat: 107, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 107, name: 'SPD' },
        { stat: 86, name: 'SPE' },
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
        { stat: 65, name: 'ATK' },
        { stat: 107, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 107, name: 'SPD' },
        { stat: 86, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'rotom-mow') {
    const data = {
      name: 'rotom-mow',
      abilities: ['levitate'],
      id: 10012,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10012.png',
      types: ['electric', 'grass'],
      weaknesses: [
        'bug: 2x',
        'electric: 0.25x',
        'fire: 2x',
        'grass: 0.5x',
        'ice: 2x',
        'poison: 2x',
        'steel: 0.5x',
        'water: 0.5x',
      ],
      stats: [
        { stat: 50, name: 'HP' },
        { stat: 65, name: 'ATK' },
        { stat: 107, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 107, name: 'SPD' },
        { stat: 86, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'rotom-wash') {
    const data = {
      name: 'rotom-wash',
      abilities: ['levitate'],
      id: 10009,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10009.png',
      types: ['electric', 'water'],
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
        { stat: 50, name: 'HP' },
        { stat: 65, name: 'ATK' },
        { stat: 107, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 107, name: 'SPD' },
        { stat: 86, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'runerigus') {
    const data = {
      name: 'runerigus',
      abilities: ['wandering-spirit'],
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
        { stat: 95, name: 'ATK' },
        { stat: 145, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 30, name: 'SPE' },
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
        { stat: 75, name: 'ATK' },
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
        { stat: 85, name: 'ATK' },
        { stat: 125, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 115, name: 'SPD' },
        { stat: 20, name: 'SPE' },
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
        { stat: 135, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 100, name: 'SPE' },
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
        { stat: 64, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 111, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 117, name: 'SPE' },
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
        { stat: 100, name: 'ATK' },
        { stat: 85, name: 'DEF' },
        { stat: 108, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'samurott-hisui') {
    const data = {
      name: 'samurott-hisui',
      abilities: ['torrent', 'sharpness'],
      id: 10236,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10236.png',
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
        { stat: 90, name: 'HP' },
        { stat: 108, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 85, name: 'SPE' },
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
        { stat: 107, name: 'ATK' },
        { stat: 125, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 71, name: 'SPE' },
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
        { stat: 100, name: 'ATK' },
        { stat: 110, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 65, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sandslash-alola') {
    const data = {
      name: 'sandslash-alola',
      abilities: ['snow-cloak', 'slush-rush'],
      id: 10102,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10102.png',
      types: ['ice', 'steel'],
      weaknesses: [
        'bug: 0.5x',
        'dragon: 0.5x',
        'fairy: 0.5x',
        'fighting: 4x',
        'fire: 4x',
        'flying: 0.5x',
        'grass: 0.5x',
        'ground: 2x',
        'ice: 0.25x',
        'normal: 0.5x',
        'poison: 0x',
        'psychic: 0.5x',
      ],
      stats: [
        { stat: 75, name: 'HP' },
        { stat: 100, name: 'ATK' },
        { stat: 120, name: 'DEF' },
        { stat: 25, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 65, name: 'SPE' },
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
        { stat: 81, name: 'ATK' },
        { stat: 97, name: 'DEF' },
        { stat: 121, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 101, name: 'SPE' },
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
        { stat: 125, name: 'ATK' },
        { stat: 75, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 85, name: 'SPE' },
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
        { stat: 100, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 70, name: 'SPD' },
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
        { stat: 85, name: 'ATK' },
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
      abilities: ['lightning-rod'],
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
        { stat: 110, name: 'ATK' },
        { stat: 75, name: 'DEF' },
        { stat: 145, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 145, name: 'SPE' },
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
        { stat: 130, name: 'ATK' },
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
      abilities: ['technician'],
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
        { stat: 150, name: 'ATK' },
        { stat: 140, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 75, name: 'SPE' },
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
        { stat: 100, name: 'ATK' },
        { stat: 89, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 69, name: 'SPD' },
        { stat: 112, name: 'SPE' },
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
        { stat: 108, name: 'ATK' },
        { stat: 65, name: 'DEF' },
        { stat: 108, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 75, name: 'SPE' },
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
        { stat: 90, name: 'ATK' },
        { stat: 115, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 115, name: 'SPD' },
        { stat: 58, name: 'SPE' },
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
        { stat: 65, name: 'ATK' },
        { stat: 99, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 115, name: 'SPD' },
        { stat: 111, name: 'SPE' },
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
        { stat: 110, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 105, name: 'SPE' },
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
        { stat: 92, name: 'ATK' },
        { stat: 65, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 68, name: 'SPE' },
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
        { stat: 95, name: 'ATK' },
        { stat: 75, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 74, name: 'SPE' },
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
        { stat: 75, name: 'ATK' },
        { stat: 95, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 113, name: 'SPE' },
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
        { stat: 100, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 60, name: 'SPD' },
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
        { stat: 120, name: 'ATK' },
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
      abilities: ['strong-jaw'],
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
        { stat: 140, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 105, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'shaymin-land') {
    const data = {
      name: 'shaymin-land',
      abilities: ['natural-cure'],
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
        { stat: 100, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 100, name: 'SPE' },
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
        { stat: 90, name: 'ATK' },
        { stat: 45, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 30, name: 'SPD' },
        { stat: 40, name: 'SPE' },
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
        { stat: 100, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 80, name: 'SPE' },
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
        { stat: 45, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 30, name: 'SPE' },
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
        { stat: 10, name: 'ATK' },
        { stat: 230, name: 'DEF' },
        { stat: 10, name: 'SPA' },
        { stat: 230, name: 'SPD' },
        { stat: 5, name: 'SPE' },
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
        { stat: 58, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 103, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 97, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'silvally') {
    const data = {
      name: 'silvally',
      abilities: ['rks-system'],
      id: 773,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/773.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 95, name: 'HP' },
        { stat: 95, name: 'ATK' },
        { stat: 95, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 95, name: 'SPE' },
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
        { stat: 98, name: 'ATK' },
        { stat: 63, name: 'DEF' },
        { stat: 98, name: 'SPA' },
        { stat: 63, name: 'SPD' },
        { stat: 101, name: 'SPE' },
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
        { stat: 98, name: 'ATK' },
        { stat: 63, name: 'DEF' },
        { stat: 98, name: 'SPA' },
        { stat: 63, name: 'SPD' },
        { stat: 101, name: 'SPE' },
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
        { stat: 98, name: 'ATK' },
        { stat: 63, name: 'DEF' },
        { stat: 98, name: 'SPA' },
        { stat: 63, name: 'SPD' },
        { stat: 101, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sinistcha') {
    const data = {
      name: 'sinistcha',
      abilities: ['hospitality', 'heatproof'],
      id: 1013,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1013.png',
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
        { stat: 71, name: 'HP' },
        { stat: 60, name: 'ATK' },
        { stat: 106, name: 'DEF' },
        { stat: 121, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 70, name: 'SPE' },
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
        { stat: 135, name: 'ATK' },
        { stat: 95, name: 'DEF' },
        { stat: 68, name: 'SPA' },
        { stat: 82, name: 'SPD' },
        { stat: 65, name: 'SPE' },
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
        { stat: 80, name: 'ATK' },
        { stat: 140, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 70, name: 'SPE' },
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
        { stat: 75, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 66, name: 'SPE' },
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
        { stat: 93, name: 'ATK' },
        { stat: 67, name: 'DEF' },
        { stat: 71, name: 'SPA' },
        { stat: 61, name: 'SPD' },
        { stat: 84, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'slaking') {
    const data = {
      name: 'slaking',
      abilities: ['truant'],
      id: 289,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/289.png',
      types: ['normal'],
      weaknesses: ['fighting: 2x', 'ghost: 0x'],
      stats: [
        { stat: 150, name: 'HP' },
        { stat: 160, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 100, name: 'SPE' },
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
        { stat: 135, name: 'ATK' },
        { stat: 79, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 81, name: 'SPE' },
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
        { stat: 75, name: 'ATK' },
        { stat: 110, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 30, name: 'SPE' },
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
        { stat: 100, name: 'ATK' },
        { stat: 95, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 30, name: 'SPE' },
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
        { stat: 75, name: 'ATK' },
        { stat: 180, name: 'DEF' },
        { stat: 130, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 30, name: 'SPE' },
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
        { stat: 75, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 110, name: 'SPD' },
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
        { stat: 65, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 30, name: 'SPE' },
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
        { stat: 80, name: 'ATK' },
        { stat: 86, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 72, name: 'SPE' },
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
        { stat: 20, name: 'ATK' },
        { stat: 35, name: 'DEF' },
        { stat: 20, name: 'SPA' },
        { stat: 45, name: 'SPD' },
        { stat: 75, name: 'SPE' },
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
        { stat: 130, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 120, name: 'SPE' },
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
        { stat: 110, name: 'ATK' },
        { stat: 65, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'solrock') {
    const data = {
      name: 'solrock',
      abilities: ['levitate'],
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
        { stat: 95, name: 'ATK' },
        { stat: 85, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 70, name: 'SPE' },
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
        { stat: 79, name: 'ATK' },
        { stat: 92, name: 'DEF' },
        { stat: 52, name: 'SPA' },
        { stat: 86, name: 'SPD' },
        { stat: 35, name: 'SPE' },
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
        { stat: 60, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 60, name: 'SPE' },
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
        { stat: 92, name: 'ATK' },
        { stat: 108, name: 'DEF' },
        { stat: 92, name: 'SPA' },
        { stat: 108, name: 'SPD' },
        { stat: 35, name: 'SPE' },
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
        { stat: 96, name: 'ATK' },
        { stat: 51, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 51, name: 'SPD' },
        { stat: 92, name: 'SPE' },
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
        { stat: 131, name: 'ATK' },
        { stat: 211, name: 'DEF' },
        { stat: 53, name: 'SPA' },
        { stat: 101, name: 'SPD' },
        { stat: 13, name: 'SPE' },
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
        { stat: 120, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 100, name: 'SPE' },
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
        { stat: 75, name: 'ATK' },
        { stat: 85, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 115, name: 'SPE' },
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
        { stat: 85, name: 'ATK' },
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
      abilities: ['sand-force'],
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
        { stat: 125, name: 'ATK' },
        { stat: 230, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 30, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'stonjourner') {
    const data = {
      name: 'stonjourner',
      abilities: ['power-spot'],
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
        { stat: 125, name: 'ATK' },
        { stat: 135, name: 'DEF' },
        { stat: 20, name: 'SPA' },
        { stat: 20, name: 'SPD' },
        { stat: 70, name: 'SPE' },
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
        { stat: 110, name: 'ATK' },
        { stat: 90, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 80, name: 'SPE' },
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
        { stat: 66, name: 'ATK' },
        { stat: 84, name: 'DEF' },
        { stat: 81, name: 'SPA' },
        { stat: 99, name: 'SPD' },
        { stat: 32, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'stunfisk-galar') {
    const data = {
      name: 'stunfisk-galar',
      abilities: ['mimicry'],
      id: 10180,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10180.png',
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
        { stat: 109, name: 'HP' },
        { stat: 81, name: 'ATK' },
        { stat: 99, name: 'DEF' },
        { stat: 66, name: 'SPA' },
        { stat: 84, name: 'SPD' },
        { stat: 32, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'sudowoodo') {
    const data = {
      name: 'sudowoodo',
      abilities: ['sturdy', 'rock-head', 'rATKled'],
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
        { stat: 100, name: 'ATK' },
        { stat: 115, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 30, name: 'SPE' },
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
        { stat: 75, name: 'ATK' },
        { stat: 115, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 115, name: 'SPD' },
        { stat: 85, name: 'SPE' },
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
        { stat: 75, name: 'ATK' },
        { stat: 55, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 30, name: 'SPE' },
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
        { stat: 73, name: 'ATK' },
        { stat: 83, name: 'DEF' },
        { stat: 73, name: 'SPA' },
        { stat: 83, name: 'SPD' },
        { stat: 55, name: 'SPE' },
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
        { stat: 110, name: 'ATK' },
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
      abilities: ['swift-swim'],
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
        { stat: 150, name: 'ATK' },
        { stat: 110, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 110, name: 'SPD' },
        { stat: 70, name: 'SPE' },
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
        { stat: 87, name: 'ATK' },
        { stat: 63, name: 'DEF' },
        { stat: 87, name: 'SPA' },
        { stat: 63, name: 'SPD' },
        { stat: 98, name: 'SPE' },
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
        { stat: 85, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 125, name: 'SPE' },
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
        { stat: 57, name: 'ATK' },
        { stat: 55, name: 'DEF' },
        { stat: 77, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 114, name: 'SPE' },
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
        { stat: 65, name: 'ATK' },
        { stat: 65, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 130, name: 'SPD' },
        { stat: 60, name: 'SPE' },
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
        { stat: 81, name: 'ATK' },
        { stat: 71, name: 'DEF' },
        { stat: 74, name: 'SPA' },
        { stat: 69, name: 'SPD' },
        { stat: 126, name: 'SPE' },
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
        { stat: 100, name: 'ATK' },
        { stat: 125, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 50, name: 'SPE' },
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
        { stat: 130, name: 'ATK' },
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
        { stat: 75, name: 'ATK' },
        { stat: 115, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 130, name: 'SPD' },
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
        { stat: 115, name: 'ATK' },
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
        { stat: 85, name: 'ATK' },
        { stat: 75, name: 'DEF' },
        { stat: 130, name: 'SPA' },
        { stat: 115, name: 'SPD' },
        { stat: 95, name: 'SPE' },
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
        { stat: 50, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 120, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 82, name: 'SPE' },
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
        { stat: 100, name: 'ATK' },
        { stat: 95, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 110, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tauros-paldea-aqua-breed') {
    const data = {
      name: 'tauros-paldea-aqua-breed',
      abilities: ['intimidate', 'anger-point', 'cud-chew'],
      id: 10252,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10252.png',
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
        { stat: 75, name: 'HP' },
        { stat: 110, name: 'ATK' },
        { stat: 105, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tauros-paldea-blaze-breed') {
    const data = {
      name: 'tauros-paldea-blaze-breed',
      abilities: ['intimidate', 'anger-point', 'cud-chew'],
      id: 10251,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10251.png',
      types: ['fighting', 'fire'],
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
        { stat: 75, name: 'HP' },
        { stat: 110, name: 'ATK' },
        { stat: 105, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tauros-paldea-combat-breed') {
    const data = {
      name: 'tauros-paldea-combat-breed',
      abilities: ['intimidate', 'anger-point', 'cud-chew'],
      id: 10250,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10250.png',
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
        { stat: 110, name: 'ATK' },
        { stat: 105, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 100, name: 'SPE' },
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
        { stat: 70, name: 'ATK' },
        { stat: 65, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 120, name: 'SPD' },
        { stat: 100, name: 'SPE' },
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
        { stat: 65, name: 'ATK' },
        { stat: 85, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 60, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'terrakion') {
    const data = {
      name: 'terrakion',
      abilities: ['justified'],
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
        { stat: 129, name: 'ATK' },
        { stat: 90, name: 'DEF' },
        { stat: 72, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 108, name: 'SPE' },
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
        { stat: 58, name: 'ATK' },
        { stat: 58, name: 'DEF' },
        { stat: 87, name: 'SPA' },
        { stat: 92, name: 'SPD' },
        { stat: 90, name: 'SPE' },
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
        { stat: 100, name: 'ATK' },
        { stat: 85, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 45, name: 'SPE' },
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
        { stat: 115, name: 'ATK' },
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
      abilities: ['volt-absorb'],
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
        { stat: 105, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 145, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 101, name: 'SPE' },
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
        { stat: 110, name: 'ATK' },
        { stat: 125, name: 'DEF' },
        { stat: 55, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'tinkaton') {
    const data = {
      name: 'tinkaton',
      abilities: ['mold-breaker', 'own-tempo', 'pickpocket'],
      id: 959,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/959.png',
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
        { stat: 85, name: 'HP' },
        { stat: 75, name: 'ATK' },
        { stat: 77, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 94, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'toedscruel') {
    const data = {
      name: 'toedscruel',
      abilities: ['mycelium-might', 'mycelium-might'],
      id: 949,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/949.png',
      types: ['ground', 'grass'],
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
        { stat: 80, name: 'HP' },
        { stat: 70, name: 'ATK' },
        { stat: 65, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 120, name: 'SPD' },
        { stat: 100, name: 'SPE' },
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
        { stat: 98, name: 'ATK' },
        { stat: 63, name: 'DEF' },
        { stat: 40, name: 'SPA' },
        { stat: 73, name: 'SPD' },
        { stat: 96, name: 'SPE' },
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
        { stat: 50, name: 'ATK' },
        { stat: 95, name: 'DEF' },
        { stat: 120, name: 'SPA' },
        { stat: 115, name: 'SPD' },
        { stat: 80, name: 'SPE' },
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
        { stat: 85, name: 'ATK' },
        { stat: 140, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 20, name: 'SPE' },
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
        { stat: 115, name: 'ATK' },
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
      abilities: ['regenerator'],
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
        { stat: 100, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 121, name: 'SPE' },
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
        { stat: 109, name: 'ATK' },
        { stat: 105, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 56, name: 'SPE' },
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
        { stat: 120, name: 'ATK' },
        { stat: 75, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 60, name: 'SPE' },
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
        { stat: 63, name: 'ATK' },
        { stat: 152, name: 'DEF' },
        { stat: 53, name: 'SPA' },
        { stat: 142, name: 'SPD' },
        { stat: 35, name: 'SPE' },
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
        { stat: 106, name: 'ATK' },
        { stat: 65, name: 'DEF' },
        { stat: 86, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 85, name: 'SPE' },
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
        { stat: 98, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 114, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 75, name: 'SPE' },
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
        { stat: 110, name: 'ATK' },
        { stat: 76, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 82, name: 'SPD' },
        { stat: 56, name: 'SPE' },
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
        { stat: 68, name: 'ATK' },
        { stat: 83, name: 'DEF' },
        { stat: 72, name: 'SPA' },
        { stat: 87, name: 'SPD' },
        { stat: 51, name: 'SPE' },
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
        { stat: 120, name: 'ATK' },
        { stat: 98, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 98, name: 'SPD' },
        { stat: 72, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'turtonator') {
    const data = {
      name: 'turtonator',
      abilities: ['shell-armor'],
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
        { stat: 78, name: 'ATK' },
        { stat: 135, name: 'DEF' },
        { stat: 91, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 36, name: 'SPE' },
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
        { stat: 84, name: 'ATK' },
        { stat: 78, name: 'DEF' },
        { stat: 109, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'typhlosion-hisui') {
    const data = {
      name: 'typhlosion-hisui',
      abilities: ['blaze', 'frisk'],
      id: 10233,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10233.png',
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
        { stat: 73, name: 'HP' },
        { stat: 84, name: 'ATK' },
        { stat: 78, name: 'DEF' },
        { stat: 119, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 95, name: 'SPE' },
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
        { stat: 134, name: 'ATK' },
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
      abilities: ['sand-stream'],
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
        { stat: 164, name: 'ATK' },
        { stat: 150, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 120, name: 'SPD' },
        { stat: 71, name: 'SPE' },
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
        { stat: 121, name: 'ATK' },
        { stat: 119, name: 'DEF' },
        { stat: 69, name: 'SPA' },
        { stat: 59, name: 'SPD' },
        { stat: 71, name: 'SPE' },
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
        { stat: 65, name: 'ATK' },
        { stat: 110, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 130, name: 'SPD' },
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
        { stat: 115, name: 'ATK' },
        { stat: 80, name: 'DEF' },
        { stat: 65, name: 'SPA' },
        { stat: 55, name: 'SPD' },
        { stat: 93, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'unown') {
    const data = {
      name: 'unown',
      abilities: ['levitate'],
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
        { stat: 72, name: 'ATK' },
        { stat: 48, name: 'DEF' },
        { stat: 72, name: 'SPA' },
        { stat: 48, name: 'SPD' },
        { stat: 48, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'ursaluna') {
    const data = {
      name: 'ursaluna',
      abilities: ['guts', 'bulletproof', 'unnerve'],
      id: 901,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/901.png',
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
        { stat: 130, name: 'HP' },
        { stat: 140, name: 'ATK' },
        { stat: 105, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 50, name: 'SPE' },
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
        { stat: 130, name: 'ATK' },
        { stat: 75, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'urshifu-rapid-strike') {
    const data = {
      name: 'urshifu-rapid-strike',
      abilities: ['unseen-fist'],
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
        { stat: 130, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 63, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 97, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'uxie') {
    const data = {
      name: 'uxie',
      abilities: ['levitate'],
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
        { stat: 75, name: 'ATK' },
        { stat: 130, name: 'DEF' },
        { stat: 75, name: 'SPA' },
        { stat: 130, name: 'SPD' },
        { stat: 95, name: 'SPE' },
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
        { stat: 95, name: 'ATK' },
        { stat: 85, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 79, name: 'SPE' },
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
        { stat: 65, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 65, name: 'SPE' },
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
        { stat: 102, name: 'ATK' },
        { stat: 73, name: 'DEF' },
        { stat: 78, name: 'SPA' },
        { stat: 65, name: 'SPD' },
        { stat: 70, name: 'SPE' },
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
        { stat: 65, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 90, name: 'SPE' },
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
        { stat: 82, name: 'ATK' },
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
      abilities: ['thick-fat'],
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
        { stat: 100, name: 'ATK' },
        { stat: 123, name: 'DEF' },
        { stat: 122, name: 'SPA' },
        { stat: 120, name: 'SPD' },
        { stat: 80, name: 'SPE' },
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
        { stat: 80, name: 'ATK' },
        { stat: 102, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 102, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'victini') {
    const data = {
      name: 'victini',
      abilities: ['victory-star'],
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
        { stat: 100, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 100, name: 'SPD' },
        { stat: 100, name: 'SPE' },
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
        { stat: 105, name: 'ATK' },
        { stat: 65, name: 'DEF' },
        { stat: 100, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 70, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'vikavolt') {
    const data = {
      name: 'vikavolt',
      abilities: ['levitate'],
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
        { stat: 70, name: 'ATK' },
        { stat: 90, name: 'DEF' },
        { stat: 145, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 43, name: 'SPE' },
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
        { stat: 80, name: 'ATK' },
        { stat: 85, name: 'DEF' },
        { stat: 110, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 50, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'virizion') {
    const data = {
      name: 'virizion',
      abilities: ['justified'],
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
        { stat: 90, name: 'ATK' },
        { stat: 72, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 129, name: 'SPD' },
        { stat: 108, name: 'SPE' },
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
        { stat: 52, name: 'ATK' },
        { stat: 50, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 89, name: 'SPE' },
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
        { stat: 73, name: 'ATK' },
        { stat: 75, name: 'DEF' },
        { stat: 47, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 85, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'volcanion') {
    const data = {
      name: 'volcanion',
      abilities: ['water-absorb'],
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
        { stat: 110, name: 'ATK' },
        { stat: 120, name: 'DEF' },
        { stat: 130, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 70, name: 'SPE' },
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
        { stat: 60, name: 'ATK' },
        { stat: 65, name: 'DEF' },
        { stat: 135, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 100, name: 'SPE' },
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
        { stat: 90, name: 'ATK' },
        { stat: 45, name: 'DEF' },
        { stat: 90, name: 'SPA' },
        { stat: 45, name: 'SPD' },
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
        { stat: 83, name: 'ATK' },
        { stat: 91, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 83, name: 'SPD' },
        { stat: 109, name: 'SPE' },
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
        { stat: 80, name: 'ATK' },
        { stat: 90, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 65, name: 'SPE' },
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
        { stat: 85, name: 'ATK' },
        { stat: 69, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 69, name: 'SPD' },
        { stat: 77, name: 'SPE' },
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
        { stat: 120, name: 'ATK' },
        { stat: 65, name: 'DEF' },
        { stat: 45, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 125, name: 'SPE' },
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
        { stat: 90, name: 'ATK' },
        { stat: 120, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 60, name: 'SPE' },
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
        { stat: 90, name: 'ATK' },
        { stat: 120, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 60, name: 'SPE' },
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
        { stat: 67, name: 'ATK' },
        { stat: 85, name: 'DEF' },
        { stat: 77, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 116, name: 'SPE' },
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
        { stat: 78, name: 'ATK' },
        { stat: 73, name: 'DEF' },
        { stat: 76, name: 'SPA' },
        { stat: 71, name: 'SPD' },
        { stat: 60, name: 'SPE' },
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
        { stat: 70, name: 'ATK' },
        { stat: 45, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 50, name: 'SPD' },
        { stat: 45, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'wishiwashi-solo') {
    const data = {
      name: 'wishiwashi-solo',
      abilities: ['schooling'],
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
        { stat: 20, name: 'ATK' },
        { stat: 20, name: 'DEF' },
        { stat: 25, name: 'SPA' },
        { stat: 25, name: 'SPD' },
        { stat: 40, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'wo-chien') {
    const data = {
      name: 'wo-chien',
      abilities: ['tablets-of-ruin', 'tablets-of-ruin'],
      id: 1001,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1001.png',
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
        { stat: 85, name: 'HP' },
        { stat: 85, name: 'ATK' },
        { stat: 100, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 135, name: 'SPD' },
        { stat: 70, name: 'SPE' },
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
        { stat: 33, name: 'ATK' },
        { stat: 58, name: 'DEF' },
        { stat: 33, name: 'SPA' },
        { stat: 58, name: 'SPD' },
        { stat: 33, name: 'SPE' },
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
        { stat: 59, name: 'ATK' },
        { stat: 85, name: 'DEF' },
        { stat: 79, name: 'SPA' },
        { stat: 105, name: 'SPD' },
        { stat: 36, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'wormadam-sandy') {
    const data = {
      name: 'wormadam-sandy',
      abilities: ['anticipation', 'overcoat'],
      id: 10004,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10004.png',
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
        { stat: 60, name: 'HP' },
        { stat: 79, name: 'ATK' },
        { stat: 105, name: 'DEF' },
        { stat: 59, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 36, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'wormadam-trash') {
    const data = {
      name: 'wormadam-trash',
      abilities: ['anticipation', 'overcoat'],
      id: 10005,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10005.png',
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
        { stat: 60, name: 'HP' },
        { stat: 69, name: 'ATK' },
        { stat: 95, name: 'DEF' },
        { stat: 69, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 36, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'wugtrio') {
    const data = {
      name: 'wugtrio',
      abilities: ['gooey', 'rATKled', 'sand-veil'],
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
        { stat: 100, name: 'ATK' },
        { stat: 50, name: 'DEF' },
        { stat: 50, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 120, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'wyrdeer') {
    const data = {
      name: 'wyrdeer',
      abilities: ['intimidate', 'frisk', 'sap-sipper'],
      id: 899,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/899.png',
      types: ['normal', 'psychic'],
      weaknesses: ['bug: 2x', 'dark: 2x', 'ghost: 0x', 'psychic: 0.5x'],
      stats: [
        { stat: 103, name: 'HP' },
        { stat: 105, name: 'ATK' },
        { stat: 72, name: 'DEF' },
        { stat: 105, name: 'SPA' },
        { stat: 75, name: 'SPD' },
        { stat: 65, name: 'SPE' },
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
        { stat: 75, name: 'ATK' },
        { stat: 70, name: 'DEF' },
        { stat: 95, name: 'SPA' },
        { stat: 70, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'xurkitree') {
    const data = {
      name: 'xurkitree',
      abilities: ['beast-boost'],
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
        { stat: 89, name: 'ATK' },
        { stat: 71, name: 'DEF' },
        { stat: 173, name: 'SPA' },
        { stat: 71, name: 'SPD' },
        { stat: 83, name: 'SPE' },
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
        { stat: 76, name: 'ATK' },
        { stat: 86, name: 'DEF' },
        { stat: 116, name: 'SPA' },
        { stat: 56, name: 'SPD' },
        { stat: 95, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'zamazenta') {
    const data = {
      name: 'zamazenta',
      abilities: ['dauntless-shield'],
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
        { stat: 120, name: 'ATK' },
        { stat: 115, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 115, name: 'SPD' },
        { stat: 138, name: 'SPE' },
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
        { stat: 115, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 60, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 90, name: 'SPE' },
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
        { stat: 90, name: 'ATK' },
        { stat: 85, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'zapdos-galar') {
    const data = {
      name: 'zapdos-galar',
      abilities: ['defiant'],
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
        { stat: 125, name: 'ATK' },
        { stat: 90, name: 'DEF' },
        { stat: 85, name: 'SPA' },
        { stat: 90, name: 'SPD' },
        { stat: 100, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'zarude') {
    const data = {
      name: 'zarude',
      abilities: ['leaf-guard'],
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
        { stat: 120, name: 'ATK' },
        { stat: 105, name: 'DEF' },
        { stat: 70, name: 'SPA' },
        { stat: 95, name: 'SPD' },
        { stat: 105, name: 'SPE' },
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
        { stat: 100, name: 'ATK' },
        { stat: 63, name: 'DEF' },
        { stat: 80, name: 'SPA' },
        { stat: 63, name: 'SPD' },
        { stat: 116, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'zeraora') {
    const data = {
      name: 'zeraora',
      abilities: ['volt-absorb'],
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
        { stat: 112, name: 'ATK' },
        { stat: 75, name: 'DEF' },
        { stat: 102, name: 'SPA' },
        { stat: 80, name: 'SPD' },
        { stat: 143, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'zoroark') {
    const data = {
      name: 'zoroark',
      abilities: ['illusion'],
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
        { stat: 105, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 120, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 105, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'zoroark-hisui') {
    const data = {
      name: 'zoroark-hisui',
      abilities: ['illusion'],
      id: 10239,
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10239.png',
      types: ['normal', 'ghost'],
      weaknesses: [
        'bug: 0.5x',
        'dark: 2x',
        'fighting: 0x',
        'ghost: 0x',
        'normal: 0x',
        'poison: 0.5x',
      ],
      stats: [
        { stat: 55, name: 'HP' },
        { stat: 100, name: 'ATK' },
        { stat: 60, name: 'DEF' },
        { stat: 125, name: 'SPA' },
        { stat: 60, name: 'SPD' },
        { stat: 110, name: 'SPE' },
      ],
    };
    return data;
  } else if (e == 'zygarde-10') {
    const data = {
      name: 'zygarde-10',
      abilities: ['aura-break'],
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
        { stat: 100, name: 'ATK' },
        { stat: 71, name: 'DEF' },
        { stat: 61, name: 'SPA' },
        { stat: 85, name: 'SPD' },
        { stat: 115, name: 'SPE' },
      ],
    };
    return data;
  } else {
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
        { stat: 45, name: 'ATK' },
        { stat: 35, name: 'DEF' },
        { stat: 30, name: 'SPA' },
        { stat: 40, name: 'SPD' },
        { stat: 55, name: 'SPE' },
      ],
    };
    return data;
  }
}
