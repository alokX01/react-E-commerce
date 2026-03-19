import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { ProductContext } from "../utils/productContext";

const Nav = () => {
  const [products] = useContext(ProductContext);

  // Sabhi products se categories nikal kar unique list bana rahe hain.
  let distinct_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];

  return (
    <>
      <nav className="w-[15%] h-screen bg-gray-50 flex flex-col items-center pt-6 shadow-md fixed">
        {/* Logo click karte hi user home par chala jata hai. */}
        <Link to="/" className="mb-6">
          <img
            src={logo}
            alt="Home Logo"
            className="h-12 w-auto cursor-pointer hover:scale-105 transition-all duration-300"
          />
        </Link>

        {/* Naya product create page par bhejne wala CTA button. */}
        <Link
          to="/create"
          className="w-[80%] text-center px-4 py-2 mb-4 rounded-xl font-semibold
                     bg-gradient-to-r from-[#1E3A8A] via-[#4338CA] to-[#8B5CF6]
                     text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Add New Product
        </Link>

        <hr className="my-4 w-[80%] border-gray-300" />

        <h1 className="text-2xl mb-4 w-[80%] font-bold text-gray-800 text-center">
          Category Filter
        </h1>

        {/* Har category par click karne se route `/category/:name` hit hota hai. */}
        <div className="w-[80%] flex flex-col items-center">
          {distinct_category.map((c, i) => (
            <Link
              key={i}
              to={`/category/${c}`}
              className="w-full flex items-center justify-start mb-3 px-3 py-2 rounded-lg font-medium
                         bg-gray-100 text-gray-800 shadow hover:bg-gradient-to-r from-[#1E3A8A] via-[#4338CA] to-[#8B5CF6]
                         hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <span className="rounded-full w-3 h-3 bg-blue-300 mr-3"></span>
              {c}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Nav;
