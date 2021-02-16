import '../Card/Card.css'

export default function Card({ name, species, image }) {
  return (
    <section className="Card">
      <strong> {name} </strong>
      {species === 'Human' ? '👩🏽' : '🧟‍♀️'}
      <p>{<img className="img" src={image} alt="" width="200px" />}</p>
    </section>
  )
}
