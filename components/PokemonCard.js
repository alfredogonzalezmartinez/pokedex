import Image from 'next/image'

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

const PokemonCard = ({ pokemon }) => {
  return (
    <article className='capitalize p-4 border-solid border  border-gray-300  rounded-lg bg-white'>
      <div className='flex justify-center bg-gray-100 rounded-lg p-4 drop-shadow-md'>
        <Image
          src={pokemon.sprites.other.home.front_default}
          alt={`${pokemon.name} sprite`}
          width={200}
          height={200}
        />
      </div>
      <h2 className='text-4xl flex justify-between my-2'>
        {pokemon.name}
        <span className='text-2xl text-gray-400'>#{pokemon.id}</span>
      </h2>
      <p className='flex justify-start gap-2'>
        {pokemon.types.map(({ type, slot }) =>
          <span key={slot} className={`text-white ${BACKGROUND[type.name]} rounded-md px-3 text-sm`}>
            {type.name}
          </span>
        )}
      </p>
    </article>
  )
}

export default PokemonCard
