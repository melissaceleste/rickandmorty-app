import Header from './components/Header'
import Navigation from './components/Navigation'
import Page0 from './components/Page0'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import React, { useState, useEffect } from 'react'
import './styles/_base.css'

export default function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getAllCharacters()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function getAllCharacters(url = 'https://rickandmortyapi.com/api/character') {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setCharacters(oldState => [...oldState, ...data.results])

        const nextUrl = data.info.next
        nextUrl && getAllCharacters(nextUrl)
      })
  }

  const [currentPage, setCurrentPage] = useState('Page0')

  return (
    <div className="App">
      <Header />
      <Page0 currywurst={characters} hidden={currentPage !== 'Page0'} />
      <Page1
        currywurst={characters}
        hidden={currentPage !== 'Page1'}
        title="Character Search"
      />
      <Page2 hidden={currentPage !== 'Page2'} title="Page2" />
      <Page3 hidden={currentPage !== 'Page3'} title="Page3" />
      <Navigation onNavigate={setCurrentPage} />
    </div>
  )
}
