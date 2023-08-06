import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Context from './context/Context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
);




















// import React, { useContext } from 'react'
// import { CartContext } from '../context/Context'

// const SingleProduct = ({product}) => {

//     const {cart, setCart} = useContext(CartContext)
//     return (
//         <div className='products'>
//             <img src={product.image} alt={product.name} />
//             <div className='product_desc'>
//                 <p>{product.name}</p>
//                 <p>{product.price}</p>
//             </div>
//             {cart.includes(product) ? (
//                 <button className='add_cart' onClick={() => setCart(cart.filter(c => c.id !== product.id))}>Remove from Cart</button>
//             ) : (
//                 <button className='add_cart' onClick={() => setCart([...cart, product])}>Add to Cart</button>
//             )}
//         </div>
//     )
// }

// export default SingleProduct

// import React, { useContext, useState } from 'react'
// import { faker } from '@faker-js/faker';
// import SingleProduct from './SingleProduct';
// import { CartContext } from '../context/Context';


// faker.seed(100)

// const Home = () => {
//     const productArray = [...Array(20)].map(() => ({
//         id: faker.string.uuid(),
//         name: faker.commerce.productName(),
//         price: faker.commerce.price(),
//         image: faker.image.avatar()
//     }));

//     const [products, setProducts] = useState(productArray)

//     return (
//         <div className='product-container'>
//             {products.map((prod) => {
//                 return (
//                     <SingleProduct key={prod.id} product={prod} />
//                 )
//             })}
//         </div>
//     )
// }

// export default Home

// import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
// import { CartContext } from '../context/Context'

// const Header = () => {

//     const {cart} = useContext(CartContext);

//   return (
//     <div>
//         <span className='title'>React Context API</span>
//         <ul className='nav'>
//             <li>
//                 <Link to="/">Home Page</Link>
//             </li>
//             <li>
//                 <Link to="/cart">Cart Page({cart.length})</Link>
//             </li>
//         </ul>
//     </div>
//   )
// }

// export default Header

// import React, { useContext, useEffect, useState } from 'react'
// import SingleProduct from './SingleProduct'
// import { CartContext } from '../context/Context'

// const Cart = () => {
//     const [total, setTotal] = useState()

//     const {cart} = useContext(CartContext)

//     useEffect(() =>{
//         setTotal(cart.reduce((acc,curr) => acc + Number(curr.price),0))
//     },[cart])
//   return (
//     <div>
//         <p className='cart_total'>Total : {total}</p>

//         <div className='product-container'>
//             {cart.map((product) =>{
//                 return(
//                     <SingleProduct key={product.id} product={product}/>
//                 )
//             })}
//         </div>
//     </div>
//   )
// }

// export default Cart