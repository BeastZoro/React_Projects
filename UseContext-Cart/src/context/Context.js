import React, { createContext, useContext, useState } from 'react'

export const CartContext = createContext();
export const ProductContext = createContext();

const Context = ({ children }) => {

    const [product, setProduct] = useState([]);
    const updateProduct = (newValue) => {
        setProduct(newValue)
    }

    const [cart, setCart] = useState([])
    const updateCart = (newValue) => {
        setCart(newValue)
    }

    return (
        <ProductContext.Provider value={{ product, updateProduct }}>
            <CartContext.Provider value={{ cart, updateCart }}>
                {children}
            </CartContext.Provider>
        </ProductContext.Provider>
    )
}

export default Context