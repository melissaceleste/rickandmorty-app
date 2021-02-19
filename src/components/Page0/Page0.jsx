import '../Page0/Page0.css'
import Card from '../Card/Card'

export default function Page0({ title, hidden, currywurst }) {
  return (
    <section hidden={hidden} className="Page0">
      {title}

      {currywurst.map(character => (
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
