import SectionTitle from '../SectionTitle'
import StatRow from './StatRow'

const DEFAULT_STATS = {
  hp: 0,
  attack: 0,
  defense: 0,
  specialAttack: 0,
  specialDefense: 0,
  speed: 0,
}
const BaseStatsSection = ({ stats = DEFAULT_STATS }) => {
  const hp = stats?.hp ?? DEFAULT_STATS.hp
  const attack = stats?.attack ?? DEFAULT_STATS.attack
  const defense = stats?.defense ?? DEFAULT_STATS.defense
  const specialAttack = stats?.specialAttack ?? DEFAULT_STATS.specialAttack
  const specialDefense = stats?.specialDefense ?? DEFAULT_STATS.specialDefense
  const speed = stats?.speed ?? DEFAULT_STATS.speed

  return (
    <section>
      <SectionTitle title='Base stats' />
      <table>
        <tbody>
          <StatRow stat='hp' value={hp} />
          <StatRow stat='attack' value={attack} />
          <StatRow stat='defense' value={defense} />
          <StatRow stat='specialAttack' value={specialAttack} />
          <StatRow stat='specialDefense' value={specialDefense} />
          <StatRow stat='speed' value={speed} />
        </tbody>
      </table>
    </section>
  )
}

export default BaseStatsSection
