import data from './rickandmortyapi.json'
import Card from './components/Card'
import './styles/_base.css'

function Header() {
  return <header className="Header"> RICK & MORTY</header>
}

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
