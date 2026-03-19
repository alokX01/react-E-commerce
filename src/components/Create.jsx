import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ProductContext } from "../utils/productContext";

const Create = () => {
  const navigate = useNavigate();
  const [products, setproducts] = useContext(ProductContext);

  // Form ke har field ka alag state = controlled inputs pattern.
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();

    // Basic client-side validation.
    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      toast.error("Sabhi fields ko sahi tarike se bhariye.");
      return;
    }

    // naya product object bana kar existing array me push karna (immutable way).
    const product = {
      id: nanoid(),
      image,
      title,
      category,
      price,
      description,
    };

    const updatedProducts = [...(products || []), product];

    setproducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    console.log("New Product Added", updatedProducts);
    toast.success("Product added successfully");

    // save hone ke turant baad home par redirect.
    navigate("/");
  };

  return (
    <form
      onSubmit={AddProductHandler}
      className="p-[5%] flex flex-col items-center w-screen h-screen"
    >
      <h1 className="text-3xl w-1/2 font-semibold text-gray-700 mb-5">Add New Product</h1>

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
        className="px-5 py-2 rounded-xl
               bg-indigo-500 hover:bg-indigo-600
               text-white font-semibold shadow-md hover:shadow-lg
               transition-all duration-300 ease-in-out"
      >
        + Add New Product
      </button>
    </form>
  );
};

export default Create;
