import pokeApi from '../pokeApi'

import { formatPokemonName, formatTypes, getEnglishName } from './helpers/formatters'

export const getPokemonForm = async (name) => {
  const {
    form_names: formNames,
    form_order: formOrder,
    is_battle_only: isBattleOnly,
    is_default: isDefault,
    is_mega: isMega,
    names,
    types,
  } = await pokeApi.getPokemonForm(name)

  const form = {
    formName: getEnglishName(formNames),
    formOrder,
    isBattleOnly,
    isDefault,
    isMega,
    name: formatPokemonName(getEnglishName(names, name)),
    types: formatTypes(types),
  }

  return form
}
