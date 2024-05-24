import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Squares from './squares';
import Board from './board';

function App() {
  const [currState, setState] = useState(0);

  const clickButton = (decrease:boolean) => {
    if (decrease) {
        setState(prevState => prevState - 1); // Use functional update to access previous state
    } else {
        setState(prevState => prevState + 1); // Use functional update to access previous state
    }
    return true
};

  return (
    <div className="App">
      <header className="App-header">
        <div> 
        <button onClick={()=> clickButton(true)}> Increase board {currState} </button>
        <button onClick={()=> clickButton(false)}> Decrease board {currState} </button>
      </div>
      <div>
        <Board boardLength={currState}></Board>
      
      </div>
      </header>
    
    </div>

  );
}

export default App;
