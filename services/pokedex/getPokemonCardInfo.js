import { getPokedexEntry } from './getPokedexEntry'

export const getPokemonCardInfo = async (name) => {
  const entry = await getPokedexEntry(name)
  const number = entry.entryNumber
  const sprite = entry.varieties[0].forms[0].sprites.default
  const types = entry.varieties[0].forms[0].types

  const pokemonCardInfo = {
    name,
    number,
    sprite,
    types,
  }

  return pokemonCardInfo
}
