const BASE = 'https://pokeapi.co/api/v2'

export const getPokemon = async (id) => {
  if (typeof id !== 'string' && typeof id !== 'number') return null
  const url = `${BASE}/pokemon/${id}`
  try {
    const pokemon = await (await fetch(url)).json()
    if (pokemon.name === 'nidoran-f') pokemon.species.name = 'Nidoran♀'
    if (pokemon.name === 'nidoran-m') pokemon.species.name = 'Nidoran♂'
    return pokemon
  } catch (error) {
    return null
  }
}

export const getAllPokemon = async (options = { offset: 0, limit: Number.MAX_SAFE_INTEGER }) => {
  const offset = options?.offset && typeof options.offset === 'number' && options.offset > 0
    ? options.offset - 1
    : 0
  const limit = options?.limit && typeof options.limit === 'number' && options.limit > 0
    ? offset + options.limit
    : Number.MAX_SAFE_INTEGER
  const url = `${BASE}/pokedex/1/`
  try {
    const nationalPokedex = await (await fetch(url)).json()
    const pokemonList = await Promise.all(
      nationalPokedex
        .pokemon_entries
        .slice(offset, limit)
        .map(({ entry_number: id }) => getPokemon(id))
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
