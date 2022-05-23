import { capitalize } from '../../services/utils/capitalize'

import SectionTitle from './SectionTitle'

const AbilitiesSection = ({ abilities = [{ ability: 'unknown', isHidden: false }] }) => {
  const title = abilities.length === 1 ? 'Ability' : 'Abilities'
  return (
    <section>
      <SectionTitle title={title} />
      <ul>
        {abilities.map(({ ability, isHidden }) =>
          <li key={ability}>
            {capitalize(ability)} {isHidden && '(Hidden)'}
          </li>
        )}
      </ul>
    </section>
  )
}
export default AbilitiesSection
