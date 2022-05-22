import { DEFAULT_NUMBER_OF_CARD_TO_LOAD } from '../../PokemonCardDisplay'

const DEFAULT_NUMBER_OF_PRELOAD_CARD = 0

export const getFirstNextCardsUrl = (numberOfPreloadCards, numberOfCardsToLoad) => {
  const offset = numberOfPreloadCards > 0
    ? numberOfPreloadCards
    : DEFAULT_NUMBER_OF_PRELOAD_CARD

  const limit = numberOfCardsToLoad > 0
    ? numberOfCardsToLoad
    : DEFAULT_NUMBER_OF_CARD_TO_LOAD

  const firstNextCardsUrl = `/api/pokemon-cards?offset=${offset}&limit=${limit}`

  return firstNextCardsUrl
}
