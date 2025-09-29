import React from 'react'
import Jokes from './Components/Jokes'
import './main.css'
import './App.css'

const App = () => {
  return (
    <div>
      <div className='app'>
        <img src= 'fav.png' alt="fav" />
        <h1>Joke App</h1>
        <Jokes/>
      </div>
    </div>
  )
}

export default App
