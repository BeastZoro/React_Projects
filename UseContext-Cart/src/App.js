import { BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import React from "react";
import Header from "./components/Header";
// import Home from "./Pages/Home";
// import Cart from "./components/Cart";
// import ProductView from "./components/ProductView";
import Pages from "./Pages/Pages";

function App() {

  // const location = useLocation()

  return (
    <BrowserRouter>
      <Header />
      <Pages />  
    </BrowserRouter>
   
  );
}

export default App;
