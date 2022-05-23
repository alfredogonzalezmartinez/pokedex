import StatBar from './StatBar'

const STATS = {
  hp: { abbr: 'HP', fullName: 'Hit Points' },
  attack: { fullName: 'Attack' },
  defense: { fullName: 'Defense' },
  specialAttack: { abbr: 'Sp. Atk', fullName: 'Special Attack' },
  specialDefense: { abbr: 'Sp. Def', fullName: 'Special Defense' },
  speed: { fullName: 'Speed' },
}

const StatRow = ({ stat, value }) => {
  const { abbr, fullName } = STATS[stat] ?? STATS.hp
  return (
    <tr>
      <th className='font-medium w-16 text-left'>
        {abbr
          ? <abbr className='no-underline' title={fullName}>{abbr}</abbr>
          : fullName
        }
      </th>
      <td className='w-44 flex items-center'>
        <span className='w-10 text-right inline-block pr-1'>{value}</span>
        <StatBar value={value} />
      </td>
    </tr>
  )
}

export default StatRow
