import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar__logo_container">
        <img src="./src/assets/ArtamyBG.png" alt="Logo" className="navbar__logo_img"/>
        <span className="navbar__logo_nombre">Amy <br/> Perez</span>
      </div>
      <div className="navbar__buttons">
        <button className="navbar__sobremi" >Sobre Mi</button>
        <button className="navbar__pinturas">Pinturas</button>
        <button className="navbar__contacto">Contacto</button>
      </div>
    </div>
  )
}

export default Navbar