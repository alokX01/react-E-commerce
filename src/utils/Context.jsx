import React, { useEffect, useState } from "react";
import axios from "./Axios";
import { ProductContext } from "./productContext";

const Context = (props) => {
  const [products, setproducts] = useState(() => {
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
    console.log("Updated products in context:", products);
  }, [products]);

  // FakeStore API se initial products lane ka helper function.
  const getproducts = async () => {
    try {
      const { data } = await axios("/products");
      setproducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Agar localStorage me data already hai to API fetch skip kar rahe hain.
    const savedProducts = localStorage.getItem("products");
    if (!savedProducts) {
      getproducts();
    }
  }, []);

  return (
    // value me [products, setproducts] pass karne se consumer component read + update dono kar sakta hai.
    <ProductContext.Provider value={[products, setproducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;
