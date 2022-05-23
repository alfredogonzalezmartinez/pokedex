import { formatPokemonName } from '../../../services/pokedex/helpers/formatters'

import Colum from '../Colum'
import NavButton from './NavButton'

const EntryNav = ({ next, prev }) => {
  const prevTag = formatPokemonName(prev)
  const nextTag = formatPokemonName(next)

  return (
    <nav className='py-1 flex flex-wrap sm:justify-center sm:gap-8 w-min sm:w-fit mx-auto px-8 rounded-md mb-2'>
      <Colum>
        {prev && <NavButton type='prev' tag={prevTag} href={`/${prev}`} />}
      </Colum>
      <Colum>
        {next && <NavButton type='next' tag={nextTag} href={`/${next}`} />}
      </Colum>
    </nav>
  )
}

export default EntryNav
