import React from 'react';
import './App.css';
import Game from './components/Game.jsx'

function App() {
  return (
    <>
    <h1 className='text'>Привет</h1>
    <p className='text'>Поиграем в крестики- нолики</p>
    <Game />
    </>
  )
}

export default App;
