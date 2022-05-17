import pokeApi from '../pokeApi'

const DEFAULT_OPTIONS = {
  offset: 0,
  limit: 898,
}

export const getPokemonSpeciesList = async (options = DEFAULT_OPTIONS) => {
  const { results } = await pokeApi.getPokemonSpeciesList(options)

  const pokemonSpeciesList = results.map(({ name }) => name)

  return pokemonSpeciesList
}
