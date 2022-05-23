import { capitalize } from '../../../services/utils/capitalize'

import Link from 'next/link'

import Arrow from '../../Arrow'

const DEFAULT_HREF = '#'
const DEFAULT_TAG = '(no tag)'
const DEFAULT_TYPE = 'next'

const BUTTON_SETINGS = {
  next: {
    arrowStyles: 'right-8 group-hover:translate-x-1',
    arrowType: 'right',
    buttonStyles: 'sm:hover:translate-x-4',
    title: 'Next entry',
  },
  prev: {
    arrowType: 'left',
    arrowStyles: 'left-8 group-hover:-translate-x-1',
    buttonStyles: 'sm:hover:-translate-x-4',
    title: 'Previous entry',
  },
}

const NavButton = ({ href = DEFAULT_HREF, tag = DEFAULT_TAG, type = DEFAULT_TYPE }) => {
  const { arrowStyles, arrowType, buttonStyles, title } = BUTTON_SETINGS[type] ?? BUTTON_SETINGS[DEFAULT_TYPE]

  return (
    <Link href={href}>
      <a title={title} className={`${buttonStyles} transform ease-in sm:duration-500 text-lg hover:text-xl sm:hover:text-lg text-center text-white font-semibold bg-redPokedex w-full py-2 rounded-md inline-block relative my-1 group`}>
        <span className={`${arrowStyles} absolute top-1/2 -translate-y-1/2 sm:group-hover:translate-x-0`}>
          <Arrow type={arrowType} size="4" color='white' />
        </span>
        {capitalize(tag)}
      </a>
    </Link>
  )
}

export default NavButton
