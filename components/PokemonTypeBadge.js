const BACKGROUND = {
  bug: 'bg-bug',
  dark: 'bg-dark',
  dragon: 'bg-dragon',
  electric: 'bg-electric',
  fairy: 'bg-fairy',
  fighting: 'bg-fighting',
  fire: 'bg-fire',
  flying: 'bg-flying',
  ghost: 'bg-ghost',
  grass: 'bg-grass',
  ground: 'bg-ground',
  ice: 'bg-ice',
  normal: 'bg-normal',
  poison: 'bg-poison',
  psychic: 'bg-psychic',
  rock: 'bg-rock',
  steel: 'bg-steel',
  water: 'bg-water',
}

const PokemonTypeBadge = ({ type }) => (
  <span className={`text-white text-sm capitalize ${BACKGROUND[type]} rounded-md py-0.5 px-5 `}>
    {type}
  </span>
)

export default PokemonTypeBadge
