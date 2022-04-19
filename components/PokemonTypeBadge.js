import { capitalize } from '../services/utils/capitalize'

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
  unknown: 'bg-unknown',
  water: 'bg-water',
}

const PokemonTypeBadge = ({ type }) => {
  if (!BACKGROUND[type]) type = 'unknown'
  return (
    <span className={`text-white ${BACKGROUND[type]} rounded-md py-0.5 px-5 `}>
      {type === 'unknown'
        ? '???'
        : capitalize(type)
      }
    </span>
  )
}

export default PokemonTypeBadge
