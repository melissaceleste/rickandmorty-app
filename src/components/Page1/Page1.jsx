import '../Page1/Page1.css'
import Card from '../Card/Card'
import React, { useState } from 'react'

export default function Page1({ title, hidden, currywurst }) {
  const [filteredSpecies, setFilteredSpecies] = useState('all')
  const [filteredAliveStatus, setAliveStatus] = useState('all')
  const [userInput, setUserInput] = React.useState('')

  return (
    <section hidden={hidden} className="Page1">
      {title}

      <section className="filter_container">
        <div>
          <p className="filter_container_heading"> Species </p>

          <button
            onClick={() => setFilteredSpecies('Human')}
            disabled={filteredSpecies === 'Human'}
          >
            Humans
          </button>
          <button
            onClick={() => setFilteredSpecies('Alien')}
            disabled={filteredSpecies === 'Alien'}
          >
            Aliens
          </button>
          <button
            onClick={() => setFilteredSpecies('all')}
            disabled={filteredSpecies === 'all'}
          >
            All
          </button>
        </div>

        <div>
          <p className="filter_container_heading"> Live-Status </p>

          <button
            onClick={() => setAliveStatus('Alive')}
            disabled={filteredAliveStatus === 'Alive'}
          >
            Alive
          </button>
          <button
            onClick={() => setAliveStatus('Dead')}
            disabled={filteredAliveStatus === 'Dead'}
          >
            Dead
          </button>
          <button
            onClick={() => setAliveStatus('all')}
            disabled={filteredAliveStatus === 'all'}
          >
            All
          </button>
        </div>
        <div>
          <p className="filter_container_heading"> Search for name </p>
          <input
            className="filter_input"
            value={userInput}
            onChange={event => setUserInput(event.target.value)}
            placeholder="Filter name"
          />
          {/* bei der Eingabe des Users, soll sich der Buchstabe des Users, bei den Namen der Charaktere verfärben
          - 
           */}
        </div>
      </section>
      <p className="filter_container_heading"> Reset Results </p>

      {currywurst
        .filter(
          character =>
            filteredSpecies === 'all' || character.species === filteredSpecies
        )
        .filter(
          character =>
            filteredAliveStatus === 'all' ||
            character.status === filteredAliveStatus
        )
        .filter(character =>
          character.name.toLowerCase().includes(userInput.toLowerCase())
        )
        .map(character => (
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
/*  {currywurst.map(character => (
        <Card
          key={character.id}
          name={character.name}
          species={character.species}
          image={character.image}
          status={character.status}
          gender={character.gender}
          origin={character.origin.name}
        />
      ))} */
