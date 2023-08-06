import React, { useContext } from "react";
import { CartContext } from "../context/Context";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const SingleProduct = ({ product }) => {
  const params = useParams();

  const { cart, updateCart } = useContext(CartContext);
  return (
    <>
      {
        <div className="products">
          <div className="prod_image_container">
            <Link to={"/product_details/" + product.id}>
              <img src={product.thumbnail} alt={product.title} />
            </Link>
          </div>
          <div className="product_desc">
            <p>{product.title}</p>
            <p> &#x20B9; {product.price}</p>
          </div>
          {cart.includes(product) ? (
            <div className="cart_actions">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
          ) : (
            <button
              className="add_cart"
              onClick={() => updateCart([...cart, product])}
            >
              Add to cart
            </button>
          )}
         
        </div>
      }
    </>
  );
};

export default SingleProduct;

// <Splide
//   options={{
//     perPage: 1,
//     arrows: true,
//     pagination: true,
//     drag: "free",
//   }}
// >
//   {product.images.map((img, index) => {
//     return (
//       <SplideSlide key={index}>

//       </SplideSlide>
//     );
//   })}
// </Splide>


// <button
//               className="add_cart"
//               onClick={() =>
//                 updateCart(cart.filter((c) => c.id !== product.id))
//               }
//             >
//               Remove to cart
//             </button>