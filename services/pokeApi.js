const BASE = 'https://pokeapi.co/api/v2'

const get = async (endpoint = '', options = { id: null, offset: 0, limit: Number.MAX_SAFE_INTEGER }) => {
  if (typeof endpoint !== 'string') return null
  let url = `${BASE}/${endpoint}`

  if (options?.id) {
    const { id } = options
    if (typeof id !== 'string' && typeof id !== 'number') return null
    url = `${url}/${id}`
  } else {
    const offset = options?.offset && typeof options.offset === 'number' && options.offset > 0
      ? options.offset
      : 0
    const limit = options?.limit && typeof options.limit === 'number' && options.limit > 0
      ? options.limit
      : Number.MAX_SAFE_INTEGER
    url = `${url}?offset=${offset}&limit=${limit}`
  }

  try {
    const data = await (await fetch(url)).json()
    return data
  } catch (error) {
    console.error(error)
    return null
  }
}

export const getAbility = async (id) => get('ability', { id })

export const getAbilityList = async (options = { offset: 0, limit: Number.MAX_SAFE_INTEGER }) => {
  const offset = options?.offset
  const limit = options?.limit
  return await get('ability', { offset, limit })
}

export const getEvolutionChain = async (id) => get('evolution-chain', { id })

export const getPokemon = async (id) => get('pokemon', { id })

export const getPokemonForm = async (id) => get('pokemon-form', { id })

export const getPokemonList = async (options = { offset: 0, limit: Number.MAX_SAFE_INTEGER }) => {
  const offset = options?.offset
  const limit = options?.limit
  return await get('pokemon', { offset, limit })
}

export const getPokemonSpecies = async (id) => get('pokemon-species', { id })

export const getPokemonSpeciesList = async (options = { offset: 0, limit: Number.MAX_SAFE_INTEGER }) => {
  const offset = options?.offset
  const limit = options?.limit
  return await get('pokemon-species', { offset, limit })
}

const pokeApi = {
  getAbility,
  getAbilityList,
  getEvolutionChain,
  getPokemon,
  getPokemonForm,
  getPokemonList,
  getPokemonSpecies,
  getPokemonSpeciesList,
}

export default pokeApi
