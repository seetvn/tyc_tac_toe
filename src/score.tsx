import React, {useState} from 'react';

interface Props{
    boardArray: string[];
    setBoardArray: React.Dispatch<React.SetStateAction<string[]>>; // State updater function for boardArray
    currentPlayer: number;
}

function Score({boardArray, setBoardArray, currentPlayer}: Props){
    var final;

    const checkBoard = (board: string[]): string | null => {
        const n = Math.sqrt(board.length);
        console.log(n);
    
        const checkLine = (line: string[]): string | null => {
            const first = line[0];
            if (first === '') {
                // console.log("==trig===");
                return null;
            }
            for (const cell of line) {
                // console.log("+++"+cell+"+++");
                if (cell !== first){
                    return null;
                }
                else{
                    console.log("something");
                }
            }
            console.log("match: "+first);
            return first;
        };
    
        // Check rows
        for (let i = 0; i < n; i++) {
            const row = board.slice(i * n, (i + 1) * n);
            const result = checkLine(row);
            if (result) return result;
        }
    
        // Check columns
        for (let i = 0; i < n; i++) {
            const column = [];
            for (let j = 0; j < n; j++) {
                column.push(board[j * n + i]);
            }
            const result = checkLine(column);
            if (result) return result;
        }
    
        // Check main diagonal
        const mainDiagonal = [];
        for (let i = 0; i < n; i++) {
            mainDiagonal.push(board[i * n + i]);
        }
        const resultMainDiagonal = checkLine(mainDiagonal);
        if (resultMainDiagonal) return resultMainDiagonal;
    
        // Check anti-diagonal
        const antiDiagonal = [];
        for (let i = 0; i < n; i++) {
            antiDiagonal.push(board[i * n + (n - i - 1)]);
        }
        const resultAntiDiagonal = checkLine(antiDiagonal);
        if (resultAntiDiagonal) return resultAntiDiagonal;
    
        return null;
    };
    var result = checkBoard(boardArray);
    console.log("======= " + result);
    if (result != null){
        final = result + " got Chicken dinner";
        // const initialBoard = new Array(boardArray.length).fill(result);
        // setBoardArray(initialBoard);

        
    }
    else{
        final = null;
    }

    return <h1> {final}</h1>

}

export default Score;