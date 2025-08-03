import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Search from './components/Search'

function App() {

  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <main>
          <Search />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
