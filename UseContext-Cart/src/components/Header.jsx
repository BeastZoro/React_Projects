import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/Context";

const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <h1 className="title">UseContext API in React</h1>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart({cart.length})</Link>
        </li>
        <li>
          <Link to="/">Categories</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
