const HOME_SPRITE_BASE = 'https://projectpokemon.org/images/sprites-models/homeimg/poke_capture'

const SUBTITUTE_SPRITE = 'https://projectpokemon.org/home/uploads/monthly_2021_02/large.27374.png.fc08587dc50c952e213994f292457ae2.png'

const DEFAULT_SPRITES = {
  default: SUBTITUTE_SPRITE,
  defaultShiny: SUBTITUTE_SPRITE,
  female: SUBTITUTE_SPRITE,
  femaleShiny: SUBTITUTE_SPRITE,
}

const getPokemonHomeSpriteUrl = (
  pokemon = {
    formOrder: 0,
    gender: 'both',
    isGigantamax: false,
    isShiny: false,
    number: 0,
  }
) => {
  if (!pokemon?.number || pokemon.number < 1) return SUBTITUTE_SPRITE

  const number = pokemon.number.toString().padStart(4, '0')

  const formOrder = pokemon?.formOrder && pokemon.formOrder > 0
    ? (pokemon.formOrder).toString().padStart(3, '0')
    : '000'

  const GENDER = {
    both: 'mf',
    female: 'fd',
    femaleOnly: 'fo',
    genderless: 'uk',
    male: 'md',
    maleOnly: 'mo',
  }

  const gender = pokemon?.gender && Object.keys(GENDER).includes(pokemon.gender)
    ? GENDER[pokemon.gender]
    : GENDER.both

  const gigantamax = pokemon?.isGigantamax
    ? 'g'
    : 'n'

  const shiny = pokemon?.isShiny
    ? 'r'
    : 'n'

  const url = `${HOME_SPRITE_BASE}_${number}_${formOrder}_${gender}_${gigantamax}_00000000_f_${shiny}.png`

  return url
}

const getPokemonHomeSprites = (
  pokemon = {
    formName: '',
    formOrder: 0,
    genderRate: 4,
    hasGenderDifferences: true,
    isGigantamax: false,
    isMega: false,
    number: 0,
  }
) => {
  if (!pokemon?.number || pokemon.number < 1) return DEFAULT_SPRITES

  const formName = `${pokemon?.formName ?? ''}`.toLowerCase()

  const formOrder = pokemon?.formOrder

  const genderRate = pokemon.genderRate >= -1 && pokemon.genderRate <= 8
    ? pokemon.genderRate.toString()
    : '4'
  const hasGenderDifferences = !!pokemon?.hasGenderDifferences

  const isGigantamax = !!pokemon?.isGigantamax

  const isMega = !!pokemon?.isMega

  const number = pokemon.number

  const pokemonData = {
    formOrder,
    isGigantamax,
    isShiny: false,
    number,
  }

  const sprites = { }

  if (formName === 'female' || formName === 'male') {
    const GENDER_BY_FORM = {
      female: 'femaleOnly',
      male: 'maleOnly',
    }

    pokemonData.gender = GENDER_BY_FORM[formName]

    sprites.default = getPokemonHomeSpriteUrl({ ...pokemonData })
    sprites.defaultShiny = getPokemonHomeSpriteUrl({ ...pokemonData, isShiny: true })

    return sprites
  }

  if (!hasGenderDifferences || isGigantamax || isMega) {
    const getGender = (genderRate) => {
      if (genderRate === '-1') return 'genderless'
      if (genderRate === '0') return 'maleOnly'
      if (genderRate === '8') return 'femaleOnly'
      return 'both'
    }

    pokemonData.gender = getGender(genderRate)

    sprites.default = getPokemonHomeSpriteUrl({ ...pokemonData })
    sprites.defaultShiny = getPokemonHomeSpriteUrl({ ...pokemonData, isShiny: true })

    return sprites
  }

  sprites.default = getPokemonHomeSpriteUrl({ ...pokemonData, gender: 'male' })
  sprites.defaultShiny = getPokemonHomeSpriteUrl({ ...pokemonData, gender: 'male', isShiny: true })
  sprites.female = getPokemonHomeSpriteUrl({ ...pokemonData, gender: 'female' })
  sprites.femaleShiny = getPokemonHomeSpriteUrl({ ...pokemonData, gender: 'female', isShiny: true })

  return sprites
}

const projectPokemon = {
  getPokemonHomeSprites,
}

export default projectPokemon
