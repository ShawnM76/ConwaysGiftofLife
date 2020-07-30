import React from 'react';
import './App.css';
import Game from './components/game.js';
// import mp3 from './music/chillMusic.mp3';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <audio src={mp3} controls autoPlay /> */}
        <Game />
      </header>
    </div>
  );
}

export default App;
