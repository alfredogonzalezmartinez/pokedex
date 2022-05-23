import SectionTitle from './SectionTitle'

const GenderSection = ({ femalePercentage }) => (
  <section>
    <SectionTitle title='Gender' />
    <div>
      {femalePercentage === null
        ? <span>Unknown</span>
        : <>
          {femalePercentage > 0 && <span className="inline-block w-1/2">Female: {femalePercentage} %</span>}
          {femalePercentage < 100 && <span className="inline-block w-1/2">Male: {100 - femalePercentage} %</span>}
        </>
      }
    </div>
  </section>
)

export default GenderSection
