import { capitalize } from '../../../services/utils/capitalize'

import VarietySelector from './VarietySelector'

const EntryHeader = ({ entryNumber, genus, handleVariety, speciesName, varietiesList }) => (
  <header>
    <h2 className='text-4xl font-bold flex justify-center gap-3'>
      {capitalize(speciesName)}
      <span className=' text-gray-400'>#{entryNumber}</span>
    </h2>
    <p className='text-center text-2xl font-semibold text-gray-500'>{genus}</p>
    {varietiesList.length > 1 &&
      <section className='py-2'>
        <VarietySelector varietiesList={varietiesList} handleVariety={handleVariety} />
      </section>
    }
  </header>
)

export default EntryHeader
