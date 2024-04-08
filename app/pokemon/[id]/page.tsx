import { ReturnTypeMatchup } from '@/components/getPokemon';
import ReturnPokemonIndividual from '@/components/getPokemonIndividual';
import ViewModeIndividual from '@/components/viewButtonIndividual';

export async function generateStaticParams() {
  return [
    { id: 'tinkatuff' },
    { id: 'pignite' },
    { id: 'stunfisk' },
    { id: 'roselia' },
    { id: 'poliwhirl' },
    { id: 'lickitung' },
    { id: 'ditto' },
    { id: 'staryu' },
    { id: 'wingull' },
    { id: 'plusle' },
    { id: 'vulpix' },
    { id: 'sunflora' },
    { id: 'wartortle' },
    { id: 'heatmor' },
    { id: 'whirlipede' },
    { id: 'delibird' },
    { id: 'loudred' },
    { id: 'impidimp' },
    { id: 'dragonair' },
    { id: 'murkrow' },
    { id: 'cherrim' },
    { id: 'clefairy' },
    { id: 'poipole' },
    { id: 'pawniard' },
    { id: 'lumineon' },
    { id: 'dustox' },
    { id: 'shellos' },
    { id: 'chingling' },
    { id: 'glimmet' },
    { id: 'gastly' },
    { id: 'silvally-flying' },
    { id: 'volbeat' },
    { id: 'anorith' },
    { id: 'cufant' },
    { id: 'morgrem' },
    { id: 'mienfoo' },
    { id: 'minun' },
    { id: 'lunatone' },
    { id: 'vulpix-alola' },
    { id: 'wormadam-plant' },
    { id: 'klang' },
    { id: 'spinda' },
    { id: 'raticate-alola' },
    { id: 'vibrava' },
    { id: 'flittle' },
    { id: 'frogadier' },
    { id: 'grotle' },
    { id: 'grookey' },
    { id: 'grovyle' },
    { id: 'quilladin' },
    { id: 'metang' },
    { id: 'mareanie' },
    { id: 'steenee' },
    { id: 'cacnea' },
    { id: 'pichu' },
    { id: 'tynamo' },
    { id: 'silvally-bug' },
    { id: 'shellder' },
    { id: 'nosepass' },
    { id: 'dewgong' },
    { id: 'gumshoos' },
    { id: 'lombre' },
    { id: 'pineco' },
    { id: 'staravia' },
    { id: 'vespiquen' },
    { id: 'seviper' },
    { id: 'krokorok' },
    { id: 'quaxwell' },
    { id: 'emolga' },
    { id: 'lopunny' },
    { id: 'lampent' },
    { id: 'ariados' },
    { id: 'ponyta-galar' },
    { id: 'voltorb' },
    { id: 'mawile' },
    { id: 'pikachu' },
    { id: 'fletchinder' },
    { id: 'eldegoss' },
    { id: 'kubfu' },
    { id: 'spidops' },
    { id: 'palpitoad' },
    { id: 'amaura' },
    { id: 'salandit' },
    { id: 'wooloo' },
    { id: 'hippopotas' },
    { id: 'drilbur' },
    { id: 'sudowoodo' },
    { id: 'bronzor' },
    { id: 'floragato' },
    { id: 'herdier' },
    { id: 'honedge' },
    { id: 'riolu' },
    { id: 'larvesta' },
    { id: 'wattrel' },
    { id: 'phione' },
    { id: 'furfrou' },
    { id: 'ivysaur' },
    { id: 'castform' },
    { id: 'carkol' },
    { id: 'tentacool' },
    { id: 'eelektrik' },
    { id: 'golett' },
    { id: 'yanma' },
    { id: 'gimmighoul' },
    { id: 'dratini' },
    { id: 'kirlia' },
    { id: 'wormadam-trash' },
    { id: 'mightyena' },
    { id: 'pyukumuku' },
    { id: 'marshtomp' },
    { id: 'swirlix' },
    { id: 'illumise' },
    { id: 'farfetchd-galar' },
    { id: 'togedemaru' },
    { id: 'wiglett' },
    { id: 'wynaut' },
    { id: 'vanillite' },
  ];
}

const types = [
  'normal',
  'fire',
  'water',
  'electric',
  'grass',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'psychic',
  'bug',
  'rock',
  'ghost',
  'dragon',
  'dark',
  'steel',
  'fairy',
];

export default function PokemonPage({ params }: { params: { id: string } }) {
  const pokemonName = params.id;
  return (
    <ViewModeIndividual pokemon={pokemonName}>
      <div className='type-relations-list-view mt-4 mb-4'>
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
        <div className='type-matchup-data-container'>
          <ReturnTypeMatchup pokemon={pokemonName} />
        </div>
      </div>
    </ViewModeIndividual>
  );
}
