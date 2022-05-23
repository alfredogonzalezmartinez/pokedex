import pokedex from '../services/pokedex'

const DEFAULT_LIMIT = 20
const DEFAULT_OFFSET = 0
const MIN_OFFSET = 0

const POKEMON_CARDS_API_ENDPOINT = '/api/pokemon-cards'

let allPokemonList = null

export const getPokemonCards = async (options = { offset: DEFAULT_OFFSET, limit: DEFAULT_LIMIT, url: POKEMON_CARDS_API_ENDPOINT }) => {
  if (!allPokemonList) allPokemonList = await pokedex.getPokemonSpeciesList()

  const offsetAsNumber = Number(options.offset)
  const limitAsNumber = Number(options.limit)

  const offset = Number.isNaN(offsetAsNumber)
    ? DEFAULT_OFFSET
    : offsetAsNumber

  const limit = Number.isNaN(limitAsNumber) || limitAsNumber <= 0
    ? DEFAULT_LIMIT
    : limitAsNumber

  const url = options.url
    ? `${options.url}${POKEMON_CARDS_API_ENDPOINT}`
    : POKEMON_CARDS_API_ENDPOINT

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
    ? `${url}?offset=${nextOffset}&limit=${limit}`
    : null

  const previous = offset + limit > limit
    ? `${url}?offset=${previousOffset}&limit=${previousLimit}`
    : null

  return {
    count,
    next,
    previous,
    results,
  }
}
