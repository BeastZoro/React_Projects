import React, { useState } from "react";
import Buttons from "./Sqaures";
import Confetti from "react-confetti";

const Board = ({ xNext, square, onPlay, onNewGame }) => {
  // const [square, setSquare] = useState(Array(9).fill(null));
  // const [xNext, setXNext] = useState(true);

  function handleClick(i) {
    if (square[i] || calcWinner(square)) {
      return;
    }
    const array = square.slice();
    xNext ? (array[i] = "X") : (array[i] = "O");
    onPlay(array);
  }

  function calcWinner(square) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
  }

  const winner = calcWinner(square);
  const isSquareNull = square.every((ele) => ele != null);
  let gameStatus;

  if (winner) {
    gameStatus = `Player ${winner} wins`;
  } else {
    isSquareNull
      ? (gameStatus = "Match Draw")
      : (gameStatus = `Player ${xNext ? "X" : "O"} turn`);
  }

  const handleNewGame = () => {
    const newArray = square.slice();
    const newGame = newArray.map((ele) => (ele = null));
    onNewGame(newGame);
  };

  return (
    <>
      <main>
        <h1>Tic - Tac - Toe</h1>
        {winner && <Confetti />}
        <div className="board-row">
          <Buttons value={square[0]} setSquareValue={() => handleClick(0)} />
          <Buttons value={square[1]} setSquareValue={() => handleClick(1)} />
          <Buttons value={square[2]} setSquareValue={() => handleClick(2)} />
        </div>

        <div className="board-row">
          <Buttons value={square[3]} setSquareValue={() => handleClick(3)} />
          <Buttons value={square[4]} setSquareValue={() => handleClick(4)} />
          <Buttons value={square[5]} setSquareValue={() => handleClick(5)} />
        </div>

        <div className="board-row">
          <Buttons value={square[6]} setSquareValue={() => handleClick(6)} />
          <Buttons value={square[7]} setSquareValue={() => handleClick(7)} />
          <Buttons value={square[8]} setSquareValue={() => handleClick(8)} />
        </div>
        <p>{gameStatus}</p>

        {(winner || isSquareNull) && (
          <button className="newgame-btn" onClick={handleNewGame}>
            New Game
          </button>
        )}
      </main>
    </>
  );
};

export default Board;
