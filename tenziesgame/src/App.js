import { useEffect, useState } from "react";
import Dice from "./components/dice";
import { nanoid } from "nanoid";
import ReactConfetti from "react-confetti";

function App() {
  // state to hold the array of dices
  const [dices, setDices] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false)

  useEffect(() =>{
    const allHold = dices.every(dice => dice.isHeld === true)
    const firstValue = dices[0].value;
    const allDiceValues = dices.every(dice => dice.value === firstValue)

    if(allHold && allDiceValues){
      setTenzies(true)
      
    }
  },[dices])

  function generateNewDice() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  // function to create new Dices with random numbers
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDice());
    }
    return newDice;
  }

  // function to reset the dices to random numbers if teh game is not over 
  function rollDice() {
    if(!tenzies){
      setDices((preDice) =>
        preDice.map((dice) => {
          return dice.isHeld ? dice : generateNewDice();
        })
      );
    } else {
      setTenzies(false)
      setDices(allNewDice())
    }
  }

  // function to change the isHeld to true on click of the dice
  function holdDice(id) {
    setDices((preDices) =>
      preDices.map((dice) => {
        return dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice;
      })
    );
  }

  const diceElements = dices.map((dice) => (
    <Dice
      key={dice.id}
      value={dice.value}
      isHeld={dice.isHeld}
      holdDice={() => holdDice(dice.id)}
    />
  ));

  return (
    <main className="App">
      {tenzies && <ReactConfetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>

      {tenzies && <h1>You've Won</h1>}
      <div className="dice-contain">{diceElements}</div>
      <button className="dice-btn" onClick={rollDice}>
        {tenzies ? "New Game" : "Roll Dice"}
      </button>
    </main>
  );
}

export default App;
