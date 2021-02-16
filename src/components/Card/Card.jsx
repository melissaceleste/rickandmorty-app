import '../Card/Card.css'
import React, { useState } from 'react'

export default function Card({ name, species, image, status, gender, origin }) {
  const [isTextVisible, setIsTextVisible] = useState(false)

  const Human = (
    <img
      src="../../../public/human.png"
      width="50px"
      height="50px"
      alt="human"
    />
  )
  const Alien = (
    <img
      src="../../../public/alien.png"
      width="50px"
      height="50px"
      alt="alien"
    />
  )

  return (
    <section className="Card">
      <strong> {name} </strong>
      {species === 'Human' ? Human : Alien}
      <p>{<img className="img" src={image} alt="" width="200px" />}</p>

      <button
        className="button"
        onClick={event => {
          event.stopPropagation()
          setIsTextVisible(!isTextVisible)
        }}
      >
        <img
          src="../../../public/button_down.svg"
          width="10px"
          height="10px"
          alt="show more information"
        />
      </button>
      <section hidden={!isTextVisible}>
        <ul className="ul">
          <li>status: {status}</li>
          <li> gender: {gender} </li>
          <li> origin: {origin} </li>
        </ul>
      </section>
    </section>
  )
}
