import Arrow from '../../Arrow'

const SLIDER_BUTTON_POSTION = {
  left: 'left-0.5',
  right: 'right-0.5',
}

const SliderButton = ({ prev = false, clickhandler = () => {} }) => {
  const [type, position, title] = prev
    ? ['left', SLIDER_BUTTON_POSTION.left, 'Previous sprite']
    : ['right', SLIDER_BUTTON_POSTION.right, 'Next sprite']

  return (
    <button
      className={`${position} absolute top-1/2 -translate-y-1/2 bg-gray-700/30 hover:bg-gray-700/50 h-8 w-8 rounded-full`}
      onClick={clickhandler}
      title={title}
    >
      <Arrow type={type} color='white' />
    </button>
  )
}

export default SliderButton
