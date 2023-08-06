import { useState } from "react";
import Quotes from "./components/Quotes";


function App() {

  const [randomColor, setRandomColor] = useState()

  const handleColorChange = (color) => {
    setRandomColor(color)
    console.log(color)
  }
  return (
    <div className="App" style={{backgroundColor : randomColor}}>
     <Quotes randomColor={randomColor} colorChange={handleColorChange}/>
    </div>
  );
}

export default App;
