import React from 'react'

const Buttons = ({value, setSquareValue}) => {
  return (
   <button className='sqr-btn' onClick={setSquareValue}>{value}</button>
  )
}

export default Buttons