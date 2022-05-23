import { useState } from 'react'

import { formatPokemonName } from '../../services/pokedex/helpers/formatters'

import AbilitiesSection from './AbilitiesSection'
import BaseStatsSection from './BaseStatsSection'
import Colum from './Colum'
import EntryHeader from './EntryHeader'
import GenderSection from './GenderSection'
import HeightWeightSection from './HeightWeightSection'
import SpritesSlider from './SpritesSlider'
import TypesSection from './TypesSection'
import FormsSection from './FormsSection'
import EntriesNav from './EntriesNav'

import SUBSTITUTE_SPRITE from '../../public/substitute.png'

const SUBSTITUTE = {
  entryNumber: 0,
  genderRate: -1,
  genus: 'Pokémon Substitute',
  name: 'Substitute',
  varieties: [
    {
      abilities: [{ ability: 'unknown', isHidden: false }],
      forms: [{
        formName: '',
        name: 'Substitute',
        sprites: { default: SUBSTITUTE_SPRITE },
        types: ['unknown'],
      }],
      height: 10,
      name: 'Substitute',
      stats: {
        attack: 0,
        defense: 0,
        hp: 0,
        specialAttack: 0,
        specialDefense: 0,
        speed: 0,
      },
      weight: 10,
    },
  ],
}
const PokedexEntry = ({ pokemon = SUBSTITUTE, next, prev }) => {
  const entryNumber = pokemon?.entryNumber ?? SUBSTITUTE.entryNumber
  const genus = pokemon?.genus ?? SUBSTITUTE.genus
  const speciesName = pokemon?.name ?? SUBSTITUTE.name
  const genderRate = pokemon?.genderRate ?? SUBSTITUTE.genderRate
  const varieties = pokemon?.varieties ?? SUBSTITUTE.varieties

  const varietiesList = varieties.map(({ name, forms }) => ({ id: name, tag: forms[0].name }))

  let femalePercentage = genderRate === -1
    ? null
    : genderRate / 8 * 100

  const [variety, setVariety] = useState(varieties[0])
  const abilities = variety.abilities
  const height = variety.height / 10
  const weight = variety.weight / 10
  const stats = variety.stats
  const forms = variety.forms
  const mainForm = forms[0]
  const formName = mainForm.formName.toLowerCase()
  const types = mainForm.types
  const sprites = mainForm.sprites

  if (formName === 'female') femalePercentage = 100
  else if (formName === 'male') femalePercentage = 0

  const handleVariety = (varietyName) => {
    setVariety(varieties.find(({ name }) => name === varietyName))
  }

  return (
    <>
      <EntriesNav next={next} prev={prev} />
      <article className='grid place-content-center bg-white rounded-md py-5 px-8 w-min mx-auto'>
        <EntryHeader
          entryNumber={entryNumber}
          genus={genus}
          handleVariety={handleVariety}
          speciesName={formatPokemonName(speciesName)}
          varietiesList={varietiesList}
        />
        <div className='py-2 sm:flex sm:justify-center sm:gap-8'>
          <Colum>
            <SpritesSlider key={mainForm.name} pokemonFormName={mainForm.name} sprites={sprites} />
            <GenderSection femalePercentage={femalePercentage} />
            <HeightWeightSection height={height} weight={weight} />
          </Colum>
          <Colum>
            <TypesSection types={types} />
            <BaseStatsSection stats={stats} />
            <AbilitiesSection abilities={abilities} />
          </Colum>
        </div>
        {forms.length > 1 && <FormsSection forms={forms} />}
      </article>
    </>
  )
}

export default PokedexEntry
