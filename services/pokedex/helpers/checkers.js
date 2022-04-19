export const checkHasGenderDifferences = (pokemon = { name: '', hasGenderDifferences: false }) => {
  const name = pokemon?.name ?? ''
  const hasGenderDifferences = pokemon?.hasGenderDifferences ?? false

  const POKEMON_WITH_GENDER_DIFFERENCES = [
    'eevee',
  ]

  return POKEMON_WITH_GENDER_DIFFERENCES.includes(name) || hasGenderDifferences
}
