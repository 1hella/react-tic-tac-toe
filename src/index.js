import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'

const gameStyles = {
  backgroundColor: 'salmon',
  margin: 10,
  padding: 20
}

const Board = () => {}

const Game = () => {
  return (
    <div style={gameStyles}>
      Game
    </div>
  );
};

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)