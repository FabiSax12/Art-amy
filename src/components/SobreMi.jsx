import "./SobreMi.css"

const SobreMi = () => {
  return (
    <section className="sobremi__container" id="sobreMi">
      <div className="sobremi__img">
        <img src="/Amy-selfie.PNG" alt="Foto de Perfil" />
      </div>
      <article className="sobremi__texto">
        <h2 className="sobremi__texto_titulo">¡Hola, soy <b>Amy</b>!</h2>
        <h3 className="sobremi__texto_subtitulo">Bienvenidos a mi galería de arte</h3>
        <p className="sobremi__texto_parrafo">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa doloremque, 
          accusamus iste architecto officia unde nam voluptas molestiae, quaerat ratione reprehenderit, 
          dolore eos! Temporibus non consequatur aliquid explicabo impedit dignissimos.
        </p>
      </article>
      
    </section>
  )
}

export default SobreMi