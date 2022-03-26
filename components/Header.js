import Image from 'next/image'
import Link from 'next/link'

import Searcher from '../components/Searcher'

import logo from '../public/pokeball.svg'

const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row justify-center sm:justify-between place-content-center p-3 bg-pokedex text-md text-white mb-3'>
      <Link href="/">
        <a className='flex justify-center items-center gap-2 p-2'>
          <Image src={logo} alt='logo' height={40} width={40}/>
          <h1 className='text-5xl font-bold'>Pokédex</h1>
        </a>
      </Link>
      <Searcher/>
    </header>
  )
}

export default Header
