import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ProductContext } from "../utils/productContext";

const Edit = () => {
  const navigate = useNavigate();
  const [products, setproducts] = useContext(ProductContext);
  const { id } = useParams();

  // Controlled form states (edit screen me current values pre-fill hongi).
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Route id ke basis par existing product find karke form fields fill karte hain.
    if (products && id) {
      const existingProduct = products.find((p) => p.id.toString() === id);

      if (existingProduct) {
        settitle(existingProduct.title);
        setimage(existingProduct.image);
        setcategory(existingProduct.category);
        setprice(existingProduct.price);
        setdescription(existingProduct.description);
        setLoading(false);
      } else {
        // Invalid id ho to user ko safe route par bhej do.
        toast.error("Product not found!");
        navigate("/");
      }
    }
  }, [id, products, navigate]);

  const UpdateProductHandler = (e) => {
    e.preventDefault();

    // Basic form validation.
    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 2 ||
      !price ||
      Number(price) <= 0 ||
      description.trim().length < 5
    ) {
      toast.error("Please fill all fields correctly!");
      return;
    }

    // Updated product object create karke old array me replace karte hain.
    const updatedProduct = {
      id,
      image,
      title,
      category,
      price,
      description,
    };

    const updatedProducts = products.map((p) =>
      p.id.toString() === id ? updatedProduct : p
    );

    setproducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    toast.success("Product updated successfully!");
    navigate("/");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading product...
      </div>
    );
  }

  return (
    <form
      onSubmit={UpdateProductHandler}
      className="p-[5%] flex flex-col items-center w-screen min-h-screen"
    >
      <h1 className="text-3xl w-1/2 font-semibold text-gray-700 mb-5">
        Edit Product
      </h1>

      <input
        type="url"
        placeholder="Image link"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setimage(e.target.value)}
        value={image}
      />

      <input
        type="text"
        placeholder="Title"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />

      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="Category"
          className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="Price"
          className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>

      <textarea
        onChange={(e) => setdescription(e.target.value)}
        placeholder="Enter product description here..."
        value={description}
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        rows="10"
      ></textarea>

      <button
        type="submit"
        className="px-5 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
      >
        Update Product
      </button>
    </form>
  );
};

export default Edit;
