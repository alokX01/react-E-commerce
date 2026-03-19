import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../utils/productContext";
import Loading from "./Loading";
import Nav from "./Nav";

const Home = () => {
  // Context se products state read kar rahe hain.
  const [products] = useContext(ProductContext);

  // URL se optional category param milta hai (example: /category/jewelery).
  const { category } = useParams();

  // Jab tak data proper array me na aaye, loading UI dikhana safe hai.
  if (!products || !Array.isArray(products)) {
    return <Loading />;
  }

  // Agar category route me hai to filtered list, warna full list.
  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  return (
    <>
      <Nav />

      {/* Left side nav fixed hai, isliye content ko margin-left diya gaya hai. */}
      <div className="ml-[15%] w-[85%] p-5 pt-[2%] flex flex-wrap gap-5 overflow-x-hidden overflow-y-auto">
        {filteredProducts.map((p, i) => (
          <Link to={`/details/${p.id}`} key={i} className="w-[18%] min-w-[200px]">
            <div className="card p-5 border bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-gray-200 h-[30vh] flex flex-col justify-center items-center overflow-hidden">
              {/* Product image ko background-image style se render kiya gaya hai. */}
              <div
                className="w-full h-[80%] bg-no-repeat hover:scale-110 transition-transform duration-300 bg-contain bg-center rounded"
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              ></div>

              {/* Title chhota rakha gaya hai taaki card layout break na ho. */}
              <h1 className="hover:text-blue-400 font-semibold text-zinc-800 mb-2 text-sm text-center mt-2 line-clamp-2">
                {p.title}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
