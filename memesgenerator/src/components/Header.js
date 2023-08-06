import React from 'react'
import TrollFace from '../images/TrollFace.png'

const Header = () => {
  return (
    <header>
        <nav>
            <img src={TrollFace} className='logo-img'/>
            <h1>Meme Generator</h1>
        </nav>
    </header>
  )
}

export default Header