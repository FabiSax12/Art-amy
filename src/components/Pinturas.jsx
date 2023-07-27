import "./Pinturas.css"
import data from "../data/Pinturas.json"
import PinturaCard from './PinturaCard'

const Pinturas = () => {
  return (
    <section className="pinturas__container">
      <span className="pinturas__titulo">Conoce mis <b>Trabajos</b></span>
      <div className="pinturas__grid_container">
        {data.Pinturas.map((i, idx) => (
          <PinturaCard
            key={idx}
            imagen={`./src/assets/Pinturas/${i.imagen}`}
            titulo={i.titulo}
          />
        ))}
      </div>
    </section>
  )
}

export default Pinturas