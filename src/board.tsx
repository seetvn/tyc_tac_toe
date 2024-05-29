import React, { useState } from 'react';
import Squares from './squares';

interface Props {
    boardLength: number;
    boardArray: string[];
    setBoardArray: React.Dispatch<React.SetStateAction<string[]>>; // State updater function for boardArray
    currentPlayer: number;
    setCurrentPlayer: React.Dispatch<React.SetStateAction<number>>; // State updater function for boardArray

}

function Board({ boardLength, boardArray, setBoardArray, currentPlayer, setCurrentPlayer }: Props) {
    //allows the box to be filled
    const fillAndCheck = (index: number) => {
        if (!boardArray[index]) {
            const nextBoardArray = [...boardArray]; // Create a copy of the original array
            nextBoardArray[index] = currentPlayer === 1 ? 'X' : 'Y';
            setBoardArray(nextBoardArray); // Update the boardArray state with the new array
            setCurrentPlayer(currentPlayer === 1 ? 0 : 1);
            
        } else {
            console.log(boardArray);
        }
    };

    // renders board
    const renderSquares = () => {
        const squares = [];
        for (let i = 0; i < boardLength ** 2; i++) {
            if (i % boardLength === 0) {
                squares.push(<div className="board-row"></div>);
            }
            squares.push(<Squares isFilled={() => fillAndCheck(i)} value={boardArray[i]} />);
        }
        return squares;
    };

    

    return (
        <div className="board">
            {renderSquares()}
        </div>
    );
}

export default Board;
