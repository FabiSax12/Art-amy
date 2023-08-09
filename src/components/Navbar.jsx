import "./Navbar.css"
import { HiMenu } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"
import { useState } from "react"

const Navbar = () => {
  const [navState, setNavState] = useState(false)

  return (
    <header className="navbar__container">
      <div className="navbar__logo_container">
        <img src="/ArtamyBG.png" alt="Logo" className="navbar__logo_img"/>
        <span className="navbar__logo_nombre">Art  amy</span>
      </div>
      <nav className={`navbar__buttons ${navState ? "opened" : "closed"}`}>
        <AiOutlineClose onClick={() => setNavState(false)}/>
        <a className="navbar__sobremi"  href="#">Sobre Mi</a>
        <a className="navbar__pinturas" href="#carrusel">Pinturas</a>
        <a className="navbar__contacto" href="#contacto">Contacto</a>
      </nav>
      <HiMenu onClick={() => setNavState(true)}/>
    </header>
  )
}

export default Navbar