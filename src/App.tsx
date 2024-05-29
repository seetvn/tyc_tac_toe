import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Squares from './squares';
import Board from './board';

function App() {
  const [currState, setState] = useState(0);

  const [currBoard, setBoard] = useState(new Array(currState**2))
  
  const[currPlayer, setCurrentPlayer] = useState(0);

  const clickButton = (decrease:boolean) => {
    if (decrease && currState != 0) {
        setState(prevState => prevState - 1); // Use functional update to access previous state
        setBoard(currBoard.fill(''));
    } else {
        setState(prevState => prevState + 1); // Use functional update to access previous state
        setBoard(currBoard.fill(''));
    }
    
};

  return (
    <div className="App">
      <header className="App-header">
        <div> 
        <button onClick={()=> clickButton(true)}> Decrease board {currState} </button>
        <button onClick={()=> clickButton(false)}> Increase board {currState} </button>
      </div>
      <div>
        <Board boardLength={currState} boardArray={currBoard} setBoardArray={setBoard} currentPlayer={currPlayer} setCurrentPlayer={setCurrentPlayer}></Board>
      
      </div>
      </header>
    
    </div>

  );
}

export default App;
