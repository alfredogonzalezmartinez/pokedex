import { capitalize } from '../../../services/utils/capitalize'

const VarietySelector = ({ varietiesList = [], handleVariety }) => (
  <select
    onChange={({ target }) => handleVariety(target.value)}
    className='text-gray-500 font-medium text- min-w-full border-2 border-gray-400 focus:outline-none rounded-md px-2 py-0.5'
  >
    {varietiesList.map(({ id, tag }) => (
      <option key={id} value={id} className='font-medium text-gray-600'>
        {capitalize(tag)}
      </option>
    ))}
  </select>
)

export default VarietySelector
