import React from 'react'

const Dice = ({value, isHeld, holdDice}) => {
    // console.log(value)
  return (
    <div className={isHeld ? "dice hold" : "dice"} onClick={holdDice}>
        <h2 className='dice-value'>{value}</h2>
    </div>
  )
}

export default Dice