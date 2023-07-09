import React from 'react'
import "./Pintura.css"


const Pintura = ({ imagen, titulo }) => {
  return (
    <div className="pintura__container">
      <img className='pintura__img' src={imagen}></img>
      <h3 className="pintura__title">{titulo}</h3>
    </div>
  )
}

export default Pintura