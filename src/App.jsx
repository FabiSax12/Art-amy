import './App.css'
import Header from './components/Header'
import Pintura from './components/Pintura'

function App() {
  return (
    <>
      <Header />
      <section className='pinturas'>
        <Pintura
          imagen="./src/assets/VanGohg.jpg"
          titulo="Pintura Anime"
        />
        <Pintura
          imagen="./src/assets/VanGohg.jpg" 
          titulo="Paisaje"
        />
        <Pintura
          imagen="./src/assets/VanGohg.jpg"
          titulo="Firulais"
        />
        
      </section>
    </>
  )
}

export default App
