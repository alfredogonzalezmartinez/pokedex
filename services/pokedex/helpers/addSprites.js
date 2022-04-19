import projectPokemon from '../../projectPokemon'

export const addSprites = (entry) => {
  entry.varieties = entry.varieties.map(variety => {
    variety.forms = variety.forms.map(form => {
      form.sprites = projectPokemon.getPokemonHomeSprites({
        formName: form.formName,
        formOrder: form.formOrder - 1,
        genderRate: entry.genderRate,
        hasGenderDifferences: entry.hasGenderDifferences,
        isGigantamax: form.formName === 'Gigantamax Form',
        isMega: form.isMega,
        number: entry.entryNumber,
      })
      return form
    })
    return variety
  })
  return entry
}
