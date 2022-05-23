import { useState } from 'react'

import ImageWithBackground from '../../ImageWithBackground'
import SliderButton from './SliderButton'
import SliderGenderIndicator from './SliderGenderIndicator'

import SUBSTITUTE_SPRITE from '../../../public/substitute.png'

const SpritesSlider = ({ sprites = { default: SUBSTITUTE_SPRITE }, pokemonFormName = '' }) => {
  const spritesList = Object.entries(sprites).map(([form, url], index) => ({ form, url, index }))
  const [curentSprite, setCurentSprite] = useState(spritesList[0])
  const { form, url } = curentSprite

  const clamp = (index) => {
    if (index < 0) return spritesList.length - 1
    if (index >= spritesList.length) return 0
    return index
  }

  const handleNextSprite = () => {
    setCurentSprite(({ index }) => spritesList[clamp(index + 1)])
  }

  const handlePreviousSprite = () => {
    setCurentSprite(({ index }) => spritesList[clamp(index - 1)])
  }

  return (
    <section className='relative'>
      <ImageWithBackground
        src={url}
        alt={`${pokemonFormName} ${form} sprite`}
        width={300}
        height={300}
      />
      {
        spritesList.length > 1 &&
          <>
            <SliderButton prev clickhandler={handlePreviousSprite} />
            <SliderButton clickhandler={handleNextSprite} />
          </>
      }
      {
        spritesList.length > 2 &&
          <SliderGenderIndicator gender={form.includes('female') ? 'female' : 'male'} />
      }
    </section>
  )
}

export default SpritesSlider
