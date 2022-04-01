import ImageWithBackground from './ImageWithBackground'
import PokemonTypeBadge from './PokemonTypeBadge'

import defaultImage from '../public/default.png'

const PokemonCard = ({ name = '', number = 0, sprite = defaultImage, types = [] }) => {
  return (
    <article className='p-4 border-solid border  border-gray-300  rounded-lg bg-white'>
      <ImageWithBackground
        src={sprite}
        alt={`${name} sprite`}
      />
      <h2 className='text-4xl capitalize font-semibold flex justify-between my-2'>
        {name}
        <span className='text-2xl text-gray-400'>#{number}</span>
      </h2>
      <p className='flex justify-start gap-2'>
        {types.map((type) => <PokemonTypeBadge key={type} type={type}/>)}
      </p>
    </article>
  )
}

export default PokemonCard
