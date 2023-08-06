import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "@splidejs/react-splide/css";
import { CartContext } from "../context/Context";

const ProductView = () => {
  const params = useParams();

  const [productView, setProductView] = useState([]);
  const {cart, updateCart} = useContext(CartContext);

  const fetchProducts = async (id) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/${params.name}`
      );
      const data = await response.json();
      setProductView(data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(productView)
  const images = productView.images;
  const mapped_images =
    images &&
    images.map((img, index) => (
      <SplideSlide key={index}>
        <img src={img} alt={productView.title} />
      </SplideSlide>
    ));

  return (
    <>
      <div className="product_view_wrapper">
        <div className="product_images_wrapper">
          <Splide
            options={{
              perPage: 1,
              arrows: true,
              pagination: false,
              drag: "free",
              gap: "5rem",
            }}
          >
            {mapped_images}
          </Splide>
        </div>

        <div className="product_details">
          <p>{productView.brand} {productView.title}</p>
          <p> &#x20B9; {productView.price}</p>
        </div>
        <p className="product_desc">{productView.description}</p>

        <button className="add_cart" onClick={() =>updateCart([...cart, productView])}>Add to Cart</button>
      </div>
    </>
  );
};

export default ProductView;
