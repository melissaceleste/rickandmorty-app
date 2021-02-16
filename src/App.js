import data from './rickandmortyapi.json'
import Card from './components/Card'
import './styles/_base.css'

function Header() {
  return <header className="Header"> RICK & MORTY</header>
}
/* 
function ShowCharacterButton() {
  const [areCharactersVisible, setAreCharactersVisible] = useState(false)

  return (
    <>
      <div class="buttons">
        <button
          onClick={() => setAreCharactersVisible(!areCharactersVisible)}
          class="blob-btn"
        >
          Show all characters!
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

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
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
    </>
  )
} */

function Navigation({ onNavigate }) {
  return (
    <nav className="Navigation">
      <button className="Navigation__button" onClick={() => onNavigate('one')}>
        1
      </button>
      <button className="Navigation__button" onClick={() => onNavigate('two')}>
        2
      </button>
      <button
        className="Navigation__button"
        onClick={() => onNavigate('three')}
      >
        3
      </button>
      <button className="Navigation__button" onClick={() => onNavigate('four')}>
        4
      </button>
    </nav>
  )
}

function App() {
  return (
    <div className="App">
      <Header />

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

      <Navigation />
    </div>
  )
}

export default App
