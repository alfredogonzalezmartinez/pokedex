const Searcher = () => {
  const id = 'searcher'
  const label = 'Search'
  const type = 'search'

  return (
    <div className='flex justify-center gap-2 p-2 items-center'>
      <label htmlFor={id} className='font-medium text-xl'>{label}</label>{' '}
      <input type={type} id={id} className='text-black rounded-md px-2 py-1 focus:outline-none focus:ring focus:ring-black/30' />
    </div>
  )
}

export default Searcher
