import { capitalize } from '../services/utils/capitalize'
import { formatPokemonName } from '../services/pokedex/helpers/formatters'

import ImageWithBackground from './ImageWithBackground'
import PokemonTypeBadge from './PokemonTypeBadge'

import substitute from '../public/substitute.png'

const PokemonCard = ({ name = 'substitute', number = 0, sprite = substitute, types = ['unknown'] }) => {
  const formatedName = capitalize(formatPokemonName(name))

  return (
    <article className='p-4 border-solid border  border-gray-300  rounded-lg bg-white'>
      <ImageWithBackground
        src={sprite}
        alt={`${formatedName} sprite`}
      />
      <h2 className='text-4xl font-semibold flex justify-between my-2'>
        {formatedName}
        <span className='text-2xl text-gray-400'>#{number}</span>
      </h2>
      <p className='flex justify-start gap-2'>
        {types.map((type) => <PokemonTypeBadge key={type} type={type} />)}
      </p>
    </article>
  )
}

export default PokemonCard
