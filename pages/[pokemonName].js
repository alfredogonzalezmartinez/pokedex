import pokedex from '../services/pokedex'

import PokedexEntry from '../components/PokedexEntry'

export default function Pokemon ({ next, pokemon, prev }) {
  const { name } = pokemon
  return (
    <PokedexEntry
      key={name}
      pokemon={pokemon}
      next={next}
      prev={prev}
    />
  )
}

export async function getStaticPaths () {
  const pokemonList = await pokedex.getPokemonSpeciesList()
  const paths = pokemonList.map((pokemonName) => ({ params: { pokemonName } }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps (context) {
  const { pokemonName } = context.params
  const pokemon = await pokedex.getPokedexEntry(pokemonName)

  const pokemonList = await pokedex.getPokemonSpeciesList()
  const index = pokemonList.findIndex(name => name === pokemonName)
  const prev = pokemonList[index - 1] ?? false
  const next = pokemonList[index + 1] ?? false

  return {
    props: {
      next,
      pokemon,
      prev,
    },
  }
}
