import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../utils/productContext";
import axios from "../utils/Axios";
import Loading from "./Loading";

const Details = () => {
  const [products, setproducts] = useContext(ProductContext);
  const navigate = useNavigate();

  // Detail page me sirf ek selected product ka state rakhte hain.
  const [product, setProduct] = useState(null);

  // Route se product id milti hai: /details/:id
  const { id } = useParams();

  useEffect(() => {
    // Fallback API call: agar context me product na mile to single product fetch kar lo.
    const getSingleProduct = async () => {
      try {
        const { data } = await axios.get(`/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (products && products.length > 0) {
      const localProduct = products.find((p) => p.id == id);

      if (localProduct) {
        setProduct(localProduct);
        return;
      }
    }

    getSingleProduct();
  }, [id, products]);

  if (!product) return <Loading />;

  const productDeleteHandler = (id) => {
    // Current list me se selected id hata do.
    const FilteredProducts = products.filter((p) => p.id !== id);

    // Context update + persistent storage update.
    setproducts(FilteredProducts);
    localStorage.setItem("products", JSON.stringify(FilteredProducts));

    // Delete ke baad user ko home par bhej dete hain.
    navigate("/");
  };

  return (
    <div className="w-[70%] p-[8%] flex justify-between items-start m-auto h-full gap-8">
      <div className="relative w-[40%] h-[80%] overflow-hidden rounded-2xl shadow-md">
        <img
          className="w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-105"
          src={product.image}
          alt={product.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
      </div>

      <div className="content w-[50%] flex flex-col">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.title}</h1>
        <h3 className="text-2xl text-gray-600 mb-5 capitalize">{product.category}</h3>
        <h2 className="text-2xl font-semibold text-red-500 mb-5">&#x20B9; {product.price}</h2>
        <p className="mb-5 text-gray-700 text-sm">{product.description}</p>

        {/* Edit aur Delete dono actions detail page par diye gaye hain. */}
        <div className="flex gap-4 mt-2">
          <Link
            to={`/edit/${product.id}`}
            className="px-4 py-2 rounded-xl bg-blue-600 text-white shadow-md
                       hover:bg-blue-700 hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            Edit
          </Link>

          <button
            onClick={() => productDeleteHandler(product.id)}
            className="px-4 py-2 rounded-xl bg-red-500 text-white shadow-md
                       hover:bg-red-600 hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
