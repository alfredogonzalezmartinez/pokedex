const HIGHEST_STAT_VALUE = 255

const BACKGROUND = {
  0: 'bg-red-400',
  60: 'bg-orange-400',
  70: 'bg-amber-400',
  80: 'bg-yellow-400',
  90: 'bg-lime-400',
  110: 'bg-green-400',
  140: 'bg-emerald-400',
  180: 'bg-teal-400',
}

const sortedBackgroundKeys = Object.keys(BACKGROUND).sort((x, y) => y - x)

const StatBar = ({ value }) => {
  if (value > HIGHEST_STAT_VALUE) value = HIGHEST_STAT_VALUE
  else if (value < 0) value = 0

  const backgroundKey = sortedBackgroundKeys.find(key => key <= value)
  const barWidth = { width: `${value * 100 / HIGHEST_STAT_VALUE}%` }

  return (
    <div className='h-3 w-full inline-block'>
      <div
        className={`${BACKGROUND[backgroundKey]} h-3 rounded-sm`}
        style={barWidth}
      />
    </div>
  )
}

export default StatBar
