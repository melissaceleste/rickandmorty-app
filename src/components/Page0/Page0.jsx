import '../Page0/Page0.css'
import SmallCard from '../SmallCard/SmallCard'

// import { ReactComponent as Liked } from '@fortawesome/fontawesome-free/svgs/solid/heart.svg'

export default function Page0({ hidden, currywurst }) {
  // const liked = <Liked />

  return (
    <section hidden={hidden} className="Page0">
      <div class="buttons">
        <button className="button" class="blob-btn">
          show me the most voted
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

      {currywurst.map(character => (
        <SmallCard image={character.image} name={character.name} />
      ))}
    </section>
  )
}
