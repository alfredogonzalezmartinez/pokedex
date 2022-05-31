import pokeApi from '../pokeApi'
import { getPokemonForm } from './getPokemonForm'
import { filterForms } from './helpers/filters'
import { formatAbilities, formatStats } from './helpers/formatters'

export const getPokemonSpeciesVariety = async (name) => {
  const {
    abilities,
    forms: formsList,
    height,
    id,
    is_default: isDefault,
    stats,
    weight,
  } = await pokeApi.getPokemon(name)

  const forms = await Promise.all(
    filterForms(formsList, name).map(({ name }) => getPokemonForm(name))
  )

  const variety = {
    abilities: formatAbilities(abilities),
    forms,
    height,
    id,
    isDefault,
    name,
    stats: formatStats(stats),
    weight,
  }

  return variety
}
