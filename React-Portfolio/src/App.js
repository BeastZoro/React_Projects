import { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import {Routes, Route} from 'react-router-dom'
import About from './pages/about/About';
import MainComp from './components/main/MainComp';

function App() {

  const [ham, setHam] = useState(true)
  

  const handleHam = () =>{
    setHam(preHam => !preHam)
  }

  return (
    <div className="App main">
      {
        <p onClick={handleHam}>
          {ham ? <i className="hamburger fa-solid fa-bars d-xl-none"></i> : <i className="hamburger fa-solid fa-xmark d-xl-none"></i>}
        </p>
      }
      
      <Sidebar hamburger={ham}/>
  
      
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>   
        
        <MainComp />
    </div>
  );
}

export default App;
