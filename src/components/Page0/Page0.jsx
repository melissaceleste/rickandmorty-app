import '../Page0/Page0.css'
import Card from '../Card/Card'
import data from '../../rickandmortyapi.json'
// import React, { useState } from 'react'

export default function Page0({ title, hidden }) {
  return (
    <section hidden={hidden} className="Page0">
      {title}

      {data.results.map(character => (
        <Card
          key={character.id}
          name={character.name}
          species={character.species}
          image={character.image}
          status={character.status}
          gender={character.gender}
          origin={character.origin.name}
        />
      ))}
    </section>
  )
}
