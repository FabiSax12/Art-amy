import "../scss/styles.scss"
import * as bootstrap from "bootstrap"
import "./Carrusel.css"

const Carrussel = () => {
  return (
    <section id="carrusel" className="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carrusel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carrusel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carrusel" data-bs-slide-to="2" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carrusel" data-bs-slide-to="3" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carrusel" data-bs-slide-to="4" aria-label="Slide 6"></button>
        <button type="button" data-bs-target="#carrusel" data-bs-slide-to="5" aria-label="Slide 7"></button>
        <button type="button" data-bs-target="#carrusel" data-bs-slide-to="6" aria-label="Slide 8"></button>
        <button type="button" data-bs-target="#carrusel" data-bs-slide-to="7" aria-label="Slide 9"></button>
        <button type="button" data-bs-target="#carrusel" data-bs-slide-to="8" aria-label="Slide 10"></button>
        <button type="button" data-bs-target="#carrusel" data-bs-slide-to="9" aria-label="Slide 11"></button>
        <button type="button" data-bs-target="#carrusel" data-bs-slide-to="10" aria-label="Slide 12"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./src/assets/Pinturas/IMG-20230710-WA0006.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="./src/assets/Pinturas/IMG-20230710-WA0007.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="./src/assets/Pinturas/IMG-20230710-WA0008.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="./src/assets/Pinturas/IMG-20230710-WA0009.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="./src/assets/Pinturas/IMG-20230710-WA0010.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="./src/assets/Pinturas/IMG-20230710-WA0011.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="./src/assets/Pinturas/IMG-20230710-WA0012.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="./src/assets/Pinturas/IMG-20230710-WA0013.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="./src/assets/Pinturas/IMG-20230710-WA0014.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="./src/assets/Pinturas/IMG-20230710-WA0015.jpg" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src="./src/assets/Pinturas/IMG-20230710-WA0016.jpg" className="d-block w-100" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carrusel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carrusel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </section>
  )
}

export default Carrussel