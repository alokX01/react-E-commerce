import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Create from "./components/Create";
import Details from "./components/Details";
import Edit from "./components/Edit";
import Home from "./components/Home";

const App = () => {
  // useLocation se current URL ka path aur query-string milti hai.
  const { search, pathname } = useLocation();

  return (
    <div className="w-screen h-screen flex">
      {/* Jab user home page par nahi ho tab quick Home link dikhate hain. */}
      {(pathname !== "/" || search.length > 0) && (
        <Link
          to="/"
          className="text-gray-700 font-bold absolute right-4 top-4 hover:underline"
        >
          Home
        </Link>
      )}

      {/* Yahan app ke saare routes define hain. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/category/:category" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
