import PokemonTypeBadge from '../../PokemonTypeBadge'
import SpritesSlider from '../SpritesSlider'
const FormCard = ({ name, sprites, types }) => {
  return (
    <article className='w-60 sm:w-40 p-2 bg-black/10 border border-gray-200 rounded-md'>
      <SpritesSlider key={name} pokemonFormName={name} sprites={sprites} />
      <h4 className='text-center font-medium py-1'>{name}</h4>
      <div className='text-xs flex justify-center gap-0.5'>
        {types.map(type => <PokemonTypeBadge key={type} type={type} />)}
      </div>
    </article>
  )
}

export default FormCard
