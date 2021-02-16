import '../Card/Card.css'
import React, { useState } from 'react'

export default function Card({ name, species, image, status, gender, origin }) {
  const [isTextVisible, setIsTextVisible] = useState(false)
  // const [areCharactersVisible, setAreCharactersVisible] = useState(false)

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

      <div class="buttons">
        <button
          className="button"
          onClick={event => {
            event.stopPropagation()
            setIsTextVisible(!isTextVisible)
          }}
          class="blob-btn"
        >
          more information!
          <span class="blob-btn__inner">
            <span class="blob-btn__blobs">
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
            </span>
          </span>
        </button>
        <br />

        <svg className="svg" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                result="blur"
                stdDeviation="10"
              ></feGaussianBlur>
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                result="goo"
              ></feColorMatrix>
              <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
            </filter>
          </defs>
        </svg>
      </div>
      {/* 
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
      </button> */}

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
