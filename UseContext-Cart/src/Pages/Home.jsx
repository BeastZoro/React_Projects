import React, { useContext, useEffect } from "react";
import SingleProduct from '../components/SingleProduct'
// import { Link } from "react-router-dom";
import { ProductContext } from "../context/Context";

const Home = () => {
  const { product, updateProduct } = useContext(ProductContext);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/");
      const data = await response.json();
      // console.log(data.products);
      updateProduct(data.products);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="product-container">
      {product.map((prod, index) => {
        return <SingleProduct key={index} product={prod} />;
      })}
    </div>
  );
};

export default Home;
