import React, { useState } from 'react'


export default function GameBoard({ onSelectSqaure, board }) {



    // const [selectedPlayerSymbol, setPlayerSymbol] = useState(initialGameBoard);

    // function handleSquareBox(rowIndex,colIndex) {
    //     setPlayerSymbol((prevs) => {
    //         const updatedBoard = [...prevs.map(innerArray=>[...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = playerSymbol;
    //         return updatedBoard;
    //     })
    //     onSelectSqaure();
    // }

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) =>
                <li key={rowIndex}>
                    <ol>
                        {row.map((colValue, colIndex) =>
                            <li key={colIndex}>
                                <button onClick={() => onSelectSqaure(rowIndex, colIndex)} disabled={colValue && true}>{colValue}</button>
                            </li>
                        )}
                    </ol>
                </li>
            )}
        </ol>
    )
}
