const VARIETIES_TO_FILTER = {
  eevee: [
    'eevee-starter',
  ],
  greninja: [
    'greninja-battle-bond',
  ],
  pikachu: [
    'pikachu-rock-star',
    'pikachu-belle',
    'pikachu-pop-star',
    'pikachu-phd',
    'pikachu-libre',
    'pikachu-cosplay',
    'pikachu-original-cap',
    'pikachu-hoenn-cap',
    'pikachu-sinnoh-cap',
    'pikachu-unova-cap',
    'pikachu-kalos-cap',
    'pikachu-alola-cap',
    'pikachu-partner-cap',
    'pikachu-starter',
    'pikachu-world-cap',
  ],
}

const filterVarietiesBySpecies = (varietiesList, speciesName) => VARIETIES_TO_FILTER[speciesName]
  ? varietiesList.filter(({ pokemon }) => !VARIETIES_TO_FILTER[speciesName].includes(pokemon.name))
  : varietiesList

const filterTotenVarieties = (varietiesList) => varietiesList.filter(({ pokemon }) => !pokemon.name.includes('-totem'))

export const filterVarieties = (varietiesList, speciesName) => {
  let fiteredVarietiesList = filterTotenVarieties(varietiesList)
  fiteredVarietiesList = filterVarietiesBySpecies(fiteredVarietiesList, speciesName)
  return fiteredVarietiesList
}

const FORMS_TO_FILTER = {
  arceus: ['arceus-unknown'],
}

const filterFormsByVariety = (formsList, varietyName) => FORMS_TO_FILTER[varietyName]
  ? formsList.filter(({ name }) => !FORMS_TO_FILTER[varietyName].includes(name))
  : formsList

export const filterForms = (formsList, varietyName) => {
  const filteredFormsList = filterFormsByVariety(formsList, varietyName)
  return filteredFormsList
}
