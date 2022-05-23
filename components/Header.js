import Image from 'next/image'
import Link from 'next/link'

import Searcher from '../components/Searcher'

import logo from '../public/pokeball.svg'

const Header = () => {
  return (
    <header className='py-2 px-5 bg-redPokedex text-white min-w-min'>
      <div className='flex flex-col justify-center sm:flex-row sm:justify-between max-w-screen-2xl mx-auto'>
        <Link href="/">
          <a className='flex justify-center items-center gap-2 p-2'>
            <Image src={logo} alt='logo' height={40} width={40} />
            <h1 className='text-5xl font-bold'>Pokédex</h1>
          </a>
        </Link>
        <Searcher />
      </div>
    </header>
  )
}

export default Header
