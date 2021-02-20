import '../Page0/Page0.css'
import SmallCard from '../SmallCard/SmallCard'

// import { ReactComponent as Liked } from '@fortawesome/fontawesome-free/svgs/solid/heart.svg'

export default function Page0({ hidden, currywurst }) {
  // const liked = <Liked />

  return (
    <section hidden={hidden} className="Page0">
      {currywurst.map(character => (
        <SmallCard
          likeCharacter={character.isLiked}
          image={character.image}
          name={character.name}
        />
      ))}
    </section>
  )
}
