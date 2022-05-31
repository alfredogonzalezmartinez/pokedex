export const formatAbilities = (abilities) => abilities.map(
  ({ ability, is_hidden: isHidden }) => ({ ability: ability.name, isHidden })
)

export const formatKebabCaseToCamelcase = (kebabCase) => {
  const [fist, ...rest] = kebabCase.split('-')
  const camelCase = [fist, ...(rest.map(word => word[0].toUpperCase() + word.slice(1)))].join('')
  return camelCase
}

export const formatPokemonName = (name = '') => {
  if (typeof name !== 'string') return name

  const POKEMON_NAMES = {
    flabebe: 'flabébé',
    'nidoran-f': 'nidoran♀',
    'nidoran-m': 'nidoran♂',
  }

  return POKEMON_NAMES[name.toLowerCase()] ?? name
}

export const formatStats = (stats) => stats.reduce(
  (object, { base_stat: base, stat }) => {
    object[formatKebabCaseToCamelcase(stat.name)] = base
    return object
  }, {}
)

export const formatTypes = (types) => types.map(({ type }) => type.name)

const isEnglishLanguage = ({ language }) => language.name === 'en'

export const getEnglishGenus = (genera) => genera.find(isEnglishLanguage)?.genus

export const getEnglishName = (list = [], defaultName = '') => {
  const english = list.find(isEnglishLanguage)
  return english?.name ?? defaultName
}
