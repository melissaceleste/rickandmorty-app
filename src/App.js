import data from './rickandmortyapi.json'
import Card from './components/Card'
import './styles/_base.css'

function App() {
  return (
    <div className="App">
      hello world
      {data.results.map(character => (
        <Card
          key={character.id}
          name={character.name}
          species={character.species}
          image={character.image}
        />
      ))}
    </div>
  )
}

export default App
