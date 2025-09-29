import React from 'react'
import Jokes from './Components/Jokes'
import './main.css'
import './App.css'
import favimg from '../src/assets/fav.png'

const App = () => {
  return (
    <div>
      <div className='app'>
        <img src= {favimg} alt="fav" />
        <h1>Joke App</h1>
        <Jokes/>
      </div>
    </div>
  )
}

export default App
