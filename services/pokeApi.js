const BASE = 'https://pokeapi.co/api/v2'

export const getPokemon = async (id) => {
  if (typeof id !== 'string' && typeof id !== 'number') return null
  const url = `${BASE}/pokemon/${id}`
  try {
    const pokemon = await (await fetch(url)).json()
    if (pokemon.name === 'nidoran-f') pokemon.name = 'Nidoran♀'
    if (pokemon.name === 'nidoran-m') pokemon.name = 'Nidoran♂'
    return pokemon
  } catch (error) {
    return null
  }
}

export const getAllPokemon = async (options = { offset: 0, limit: Number.MAX_SAFE_INTEGER }) => {
  const offset = options?.offset
  const limit = options?.limit
  const url = `${BASE}/pokemon?offset=${offset}&limit=${limit}`
  try {
    const pokemonRequest = await (await fetch(url)).json()
    const pokemonList = await Promise.all(
      pokemonRequest.results.map(pokemon => getPokemon(pokemon.name))
    )
    return pokemonList
  } catch (error) {
    return []
  }
}

const pokeApi = {
  getAllPokemon,
  getPokemon,
}

export default pokeApi
