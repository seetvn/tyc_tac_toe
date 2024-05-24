import React from 'react';
import Squares from './squares';

interface Props {
    boardLength: number;

}

function Board({ boardLength }: Props) {
    const renderSquares = () => {
        const squares = [];
        for (let i = 0; i < boardLength ** 2; i++) {
            if (i % boardLength == 0){
                squares.push( <div className="board-row"> </div>)
            }
            squares.push(<Squares key={i} isFilled={() => {console.log('default value')}} value="X" />); // Replace 'X' with the desired value
        }
        return squares;
    };

    return (
        <div className="board">
            {renderSquares()}
        </div>
    );
}
export default Board
  