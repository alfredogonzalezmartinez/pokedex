import Header from './Header'

const Layout = ({ children }) => (
  <>
    <Header />
    <main className='max-w-screen-2xl min-w-min mx-auto p-2'>
      {children}
    </main>
  </>
)

export default Layout
