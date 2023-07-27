import './App.css'
import "./scss/styles.scss"
import * as bootstrap from "bootstrap"
import Navbar from './components/Navbar'
import SobreMi from './components/SobreMi'
import Pinturas from './components/Pinturas'
import Carrussel from './components/Carrussel'

function App() {
  return (
    <>
      <Navbar />
      <SobreMi />
      <Carrussel />
    </>
  )
}

export default App
