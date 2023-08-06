import React, { useContext } from "react";
import { CartContext } from "../context/Context";
import SingleProduct from "../components/SingleProduct";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      {
        <div className="product-container">
          {cart.map((ele, index) => {
            return (
              <>
                <SingleProduct key={ele.id} product={ele} />
                
              </>
            );
          })}
        </div>
      }
      <div className="cart_details">
        <h3>Products in cart: {cart.length}</h3>
        <p>
          Total: &#x20B9;
          <span className="bold">
            {cart.reduce((acc, curr) => acc + Number(curr.price), 0)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Cart;
