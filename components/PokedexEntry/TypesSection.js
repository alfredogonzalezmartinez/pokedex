import PokemonTypeBadge from '../PokemonTypeBadge'
import SectionTitle from './SectionTitle'

const TypesSection = ({ types = [] }) => {
  const title = types.length === 1 ? 'Type' : 'Types'
  return (
    <section>
      <SectionTitle title={title} />
      <p className='flex justify-start gap-2'>
        {types.map(type => <PokemonTypeBadge key={type} type={type} />)}
      </p>
    </section>
  )
}

export default TypesSection
