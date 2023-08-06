import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import ProductView from './ProductView'

const Pages = () => {
    const location = useLocation()
  return (
    <div>
        <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product_details/:name" element={<ProductView />}/>
      </Routes> 
    </div>
  )
}

export default Pages