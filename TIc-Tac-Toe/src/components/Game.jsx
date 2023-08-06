import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [xNext, setXNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);

  const currSquares = history[history.length - 1];
  // console.log(currSquares)

  function handleGame(squares) {
    setHistory([...history, squares])
    setXNext(pre => !pre)
  }

  function handleNewGame(newGame){
    setHistory([...history, newGame])
  }

  return (
    <>
      <div>
        <Board
          xNext={xNext}
          square={currSquares}
          onPlay={handleGame}
          onNewGame={handleNewGame}
        />
      </div>
    </>
  );
};

export default Game;
