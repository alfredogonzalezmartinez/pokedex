import pokeApi from '../pokeApi'

export const getPokemonSpeciesList = async () => {
  const { results } = await pokeApi.getPokemonSpeciesList({ offset: 0, limit: 898 })

  const pokemonSpeciesList = results.map(({ name }) => name)

  return pokemonSpeciesList
}
