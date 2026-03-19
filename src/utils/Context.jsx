import React, { useEffect, useState } from "react";
import axios from "./Axios";
import { ProductContext } from "./productContext";

const Context = (props) => {
  const [products, setProducts] = useState(() => {
    // App reload hone par localStorage se previous products wapas lane ki koshish.
    const savedProducts = localStorage.getItem("products");

    try {
      return savedProducts ? JSON.parse(savedProducts) : [];
    } catch (error) {
      console.log("localStorage parse error:", error);
      return [];
    }
  });

  // Jab bhi products state change ho, localStorage me latest copy save kar do.
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // FakeStore API se initial products lane ka helper function.
  const getProducts = async () => {
    try {
      const { data } = await axios("/products");
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Agar localStorage empty ya invalid ho to API se initial products load karo.
    const savedProducts = localStorage.getItem("products");
    let parsedProducts = [];

    if (savedProducts) {
      try {
        parsedProducts = JSON.parse(savedProducts);
      } catch (error) {
        console.log("localStorage parse error:", error);
      }
    }

    if (!Array.isArray(parsedProducts) || parsedProducts.length === 0) {
      getProducts();
    }
  }, []);

  return (
    // value me [products, setproducts] pass karne se consumer component read + update dono kar sakta hai.
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;
