const DEFAULT_COLOR = 'black'
const DEFAULT_SIZE = 2
const DEFAULT_TYPE = 'right'

const ARROW_COLORS = {
  black: 'border-black',
  white: 'border-white',
}

const ARROW_SIZES = {
  2: 'w-2 h-2',
  4: 'w-4 h-4',
}

const ARROW_TYPES = {
  left: 'border-b-2 border-l-2 rotate-45',
  right: 'border-t-2 border-r-2 rotate-45',
}

const Arrow = ({ type = DEFAULT_TYPE, size = DEFAULT_SIZE, color = DEFAULT_COLOR }) => {
  const arrowColor = ARROW_COLORS[color] ?? ARROW_COLORS[DEFAULT_COLOR]
  const arrowSize = ARROW_SIZES[size] ?? ARROW_SIZES[DEFAULT_SIZE]
  const arrowType = ARROW_TYPES[type] ?? ARROW_TYPES[DEFAULT_TYPE]
  return (
    <span className='relative'>
      <span className={`${arrowColor} ${arrowSize} ${arrowType} inline-block absolute top-1/2 -translate-y-1/2 -translate-x-1/2`}></span>
    </span>
  )
}

export default Arrow
