import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Players from "./components/Players"
import Logs from "./components/Logs";
import { WINNING_COMBINATIONS } from "./winning-combinations"
import GameOver from "./components/GameOver";


function driveAcrivePlayer(gameTruns) {
  let currentPlayerSymbol = "X";
  if (gameTruns.length > 0 && gameTruns[0].playerSymbol === "X") {
    currentPlayerSymbol = "O";
  }
  return currentPlayerSymbol;
}

function driveGameBoard(gameTruns) {
  let gameBoard = [...initialGameBoard.map(array => [...array])];
  for (const trun of gameTruns) {
    const { square, playerSymbol } = trun;
    const { row, col } = square;
    gameBoard[row][col] = playerSymbol;
  }
  return gameBoard;
}

function driveWinner(WINNING_COMBINATIONS, gameBoard, playerName) {
  console.log(playerName);
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquarePlayerSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquarePlayerSymbol = gameBoard[combination[1].row][combination[1].column];
    const thridSquarePlayerSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquarePlayerSymbol &&
      firstSquarePlayerSymbol === secondSquarePlayerSymbol &&
      firstSquarePlayerSymbol === thridSquarePlayerSymbol) {
      winner = playerName[firstSquarePlayerSymbol];
    }
  }
  return winner;
}

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


function App() {
  // const [activePlayer, setActivePlayer] = useState("x");
  let initialName = {
    X: "Player 1",
    O: "Player 2"
  }
  const [playerNmae, setplayerName] = useState(initialName);
  const [gameTruns, setGameTrun] = useState([]);

  let activePlayer = driveAcrivePlayer(gameTruns);
  let gameBoard = driveGameBoard(gameTruns);
  let winner = driveWinner(WINNING_COMBINATIONS, gameBoard, playerNmae);


  function handleSelectSquareBox(rowIndex, colIndex) {

    // setActivePlayer((prevs) => prevs === "x" ? "o" : "x");    

    setGameTrun((prevTrun) => {

      // let currentPlayerSymbol = "x";
      // if (prevTrun.length > 0 && prevTrun[0].playerSymbol === "x") {
      //   currentPlayerSymbol = "o";
      // }

      let currentPlayerSymbol = driveAcrivePlayer(prevTrun);
      const updatedTrun = [{ square: { row: rowIndex, col: colIndex }, playerSymbol: currentPlayerSymbol }, ...prevTrun];
      return updatedTrun;
    });

  }

  function handleRematch() {
    setGameTrun([]);
  }

  function handlePlayerName(symbol, name) {
    setplayerName(prevs => {
      return { ...prevs, [symbol]: name }
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Players name="Player 1" symbol="X" isActive={activePlayer === "X"} onSetPlayerName={handlePlayerName} />
          <Players name="Player 2" symbol="O" isActive={activePlayer === "O"} onSetPlayerName={handlePlayerName} />
        </ol>
        {(winner || gameTruns.length === 9) && <GameOver winner={winner} onRematch={handleRematch} />}
        <GameBoard board={gameBoard} onSelectSqaure={handleSelectSquareBox} />
      </div>
      <Logs truns={gameTruns} />
    </main>
  )
}

export default App
