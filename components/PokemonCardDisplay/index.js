import { useCallback, useRef, useState } from 'react'

import Link from 'next/link'
import PokemonCard from '../PokemonCard'
import LoadingIndicator from '../LoadingIndicator'

import { getFirstNextCardsUrl } from './helpers/getFirstNextCardsUrl'

export const DEFAULT_NUMBER_OF_CARD_TO_LOAD = 60

const PokemonCardsDisplay = ({ firstCards = [], load = DEFAULT_NUMBER_OF_CARD_TO_LOAD }) => {
  const preloadCards = Array.isArray(firstCards) ? firstCards : []

  const [pokemonCards, setPokemonCards] = useState(preloadCards)
  const [nextCardsUrl, setNextCardsUrl] = useState(getFirstNextCardsUrl(preloadCards.length, load))
  const [isLoading, setIsLoading] = useState(false)

  const observer = useRef()

  const lastCardElementRef = useCallback(async (node) => {
    if (isLoading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(async ([entry]) => {
      if (entry.isIntersecting && nextCardsUrl) {
        setIsLoading(true)
        const { next, results: newCards } = await (await fetch(nextCardsUrl)).json()
        setNextCardsUrl(next)
        setPokemonCards(prevCards => prevCards.concat(newCards))
        setIsLoading(false)
      }
    })
    if (node) observer.current.observe(node)
  }, [nextCardsUrl, isLoading])

  return (
    <section className=''>
      <ol className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 p-2 max-w-fit mx-auto'>
        {pokemonCards.map(({ name, number, sprite, types }, index) =>
          <li key={number} className="transform hover:-translate-y-1 ease-out duration-200 w-72">
            <Link href={`/${name}`}>
              {index === pokemonCards.length - 1
                ? <a ref={lastCardElementRef}><PokemonCard name={name} number={number} sprite={sprite} types={types} /></a>
                : <a><PokemonCard name={name} number={number} sprite={sprite} types={types} /></a>
              }
            </Link>
          </li>
        )}
      </ol>
      {isLoading && <LoadingIndicator />}
    </section>
  )
}
export default PokemonCardsDisplay
