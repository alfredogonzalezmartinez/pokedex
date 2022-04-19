import pokeApi from '../pokeApi'

import { getPokemonSpeciesVariety } from './getPokemonSpeciesVariety'

import { addSprites } from './helpers/addSprites'
import { checkHasGenderDifferences } from './helpers/checkers'
import { getEnglishGenus } from './helpers/formatters'

import { memorize } from '../utils/memorize'
import { filterVarieties } from './helpers/filters'

const getEntry = async (name) => {
  const {
    gender_rate: genderRate,
    genera,
    has_gender_differences: hasGenderDifferences,
    id: entryNumber,
    varieties: varietiesList,
  } = await pokeApi.getPokemonSpecies(name)

  const varieties = await Promise.all(
    filterVarieties(varietiesList, name).map(({ pokemon }) => getPokemonSpeciesVariety(pokemon.name))
  )

  const entry = {
    entryNumber,
    genderRate,
    genus: getEnglishGenus(genera),
    hasGenderDifferences: checkHasGenderDifferences({ name, hasGenderDifferences }),
    name,
    varieties,
  }

  const entryWithSprites = addSprites(entry)

  return entryWithSprites
}

const getEntryFromCache = memorize(getEntry)

export const getPokedexEntry = async (name) => {
  const entry = await getEntryFromCache(name)
  return entry
}
