import SectionTitle from './SectionTitle'

const HeightWeightSection = ({ height, weight }) => (
  <div className='flex'>
    <section className='w-1/2'>
      <SectionTitle title='Height' />
      <p>{height} m</p>
    </section>
    <section className='w-1/2'>
      <SectionTitle title='Weight' />
      <p>{weight} kg</p>
    </section>
  </div>
)

export default HeightWeightSection
