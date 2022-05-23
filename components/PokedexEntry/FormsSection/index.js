import SectionTitle from '../SectionTitle'
import FormCard from './FormCard'

const FormsSection = ({ forms }) => {
  return (
    <section>
      <SectionTitle title='Forms' />
      <div className='flex flex-wrap justify-center gap-4'>
        {
          forms.map(({ name, sprites, types }) =>
            <FormCard key={name} name={name} sprites={sprites} types={types} />)
        }
      </div>
    </section>
  )
}

export default FormsSection
