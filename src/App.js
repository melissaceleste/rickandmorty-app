import Header from './components/Header'
import Navigation from './components/Navigation'
import Page0 from './components/Page0'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import React, { useState } from 'react'
import './styles/_base.css'

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

function App() {
  const [currentPage, setCurrentPage] = useState('Page0')

  return (
    <div className="App">
      <Header />
      <Page0 hidden={currentPage !== 'Page0'} title="Page0" />
      <Page1 hidden={currentPage !== 'Page1'} title="Page1" />
      <Page2 hidden={currentPage !== 'Page2'} title="Page2" />
      <Page3 hidden={currentPage !== 'Page3'} title="Page3" />
      <Navigation onNavigate={setCurrentPage} />
    </div>
  )
}

export default App
