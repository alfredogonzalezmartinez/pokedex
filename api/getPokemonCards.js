import pokedex from '../services/pokedex'

const DEFAULT_LIMIT = 20
const DEFAULT_OFFSET = 0
const MIN_OFFSET = 0

const ROOT_URL = process.env.ROOT_URL || 'http://localhost:3000'
const POKEMON_CARDS_API_URL = `${ROOT_URL}/api/pokemon-cards`

let allPokemonList = null

export const getPokemonCards = async (options = { offset: DEFAULT_OFFSET, limit: DEFAULT_LIMIT }) => {
  const offsetAsNumber = (Number(options?.offset))
  const limitAsNumber = (Number(options?.limit))

  const offset = !Number.isNaN(offsetAsNumber)
    ? offsetAsNumber
    : DEFAULT_OFFSET

  const limit = !Number.isNaN(limitAsNumber)
    ? limitAsNumber
    : DEFAULT_LIMIT

  if (!allPokemonList) allPokemonList = await pokedex.getPokemonSpeciesList()

  const nextOffset = offset + limit

  const pokemonList = allPokemonList.slice(offset, nextOffset)

  const results = await Promise.all(pokemonList.map(name => pokedex.getPokemonCardInfo(name)))

  const count = allPokemonList.length

  const previousLimit = nextOffset - limit < limit
    ? nextOffset - limit
    : limit

  const previousOffset = offset - limit >= MIN_OFFSET
    ? offset - limit
    : MIN_OFFSET

  const next = nextOffset <= count
    ? `${POKEMON_CARDS_API_URL}?offset=${nextOffset}&limit=${limit}`
    : null

  const previous = offset + limit > limit
    ? `${POKEMON_CARDS_API_URL}?offset=${previousOffset}&limit=${previousLimit}`
    : null

  return {
    count,
    next,
    previous,
    results,
  }
}
