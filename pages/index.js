import PokemonCardsDisplay from '../components/PokemonCardDisplay'

import pokedex from '../services/pokedex'

const NUMBER_OF_PRERENDERED_CARDS = 60

export default function Home ({ firstPokemonCards = [] }) {
  return (
    <PokemonCardsDisplay firstCards={firstPokemonCards} />
  )
}

export async function getStaticProps () {
  const speciesList = await pokedex.getPokemonSpeciesList({ limit: NUMBER_OF_PRERENDERED_CARDS })
  const firstPokemonCards = await Promise.all(speciesList.map(name => pokedex.getPokemonCardInfo(name)))

  return {
    props: {
      firstPokemonCards,
    },
  }
}
