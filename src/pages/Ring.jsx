import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import poster from "../component/assets/poster.webp";
import productsData from "../Data/products.json";
import Cards from "../component/cards";
import Filters from "../component/filters";
import Register from "../component/register";
import Cart from "./Cart";

function Ring() {
  const [Ring, setRing] = useState([]);

  useEffect(() => {
    // filter only rings
    const filtered = productsData.filter((p) => p.category === "rings");
    setRing(filtered);
  }, []);

  const [Isvisible, setIsvisible] = useState(false);

  const paravisible = () => {
    setIsvisible(!Isvisible);
  };

  return (
    <div className="flex  justify-center items-center">
      <div className="flex flex-col align-middle mt-8 pt-4 pr-8 pl-8 pb-4 ">
        {/* Poster */}
        <img src={poster} alt="poster" className="w-full h-[268px]" />

        {/* Breadcrumb */}
        <div className="text-grayscale-700 font-normal truncate bg-grayscale-300 px-4 py-3">
          <span
            title="Rings"
            className="flex text-[10px] pt-3 pb-3 pl-4 pr-4 bg-gray-50 rounded-2xl"
          >
            Home / Jewellery / Rings
          </span>
        </div>

        {/* Section */}
        <div className="flex flex-col justify-center items-center mb-5 p-6 shadow-gray-300 shadow-sm pt-4 mt-4">
          <h1 className="text-2xl flex justify-center items-center">Rings</h1>
          <p className="flex justify-center items-center mt-4 text-gray-400">
            Drape a piece of luxury around your finger with handcrafted rings
            from Angara. Whether you're a fan of
          </p>
          {Isvisible && (
            <p className="flex justify-center items-center text-gray-400">
              this will show on click
            </p>
          )}
          <div className="flex justify-center w-full mt-1 text-gray-600">
            <button
              className="underline text-sm cursor-pointer"
              onClick={paravisible}
            >
              Read More
            </button>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-0 m-0 w-full flex felx-col">
          <div className="w-1/4">
            <Filters />
          </div>
          <div className="w-5/4">
            <div className="flex justify-between align-middle">
              <div className="flex align-middle">
                <span className="text-xl">{Ring.length} Custom Rings</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1.2em"
                  height="1.5em"
                  color="#0019"
                  fill="none"
                >
                  <circle cx="12" cy="12" r="10" stroke="currentColor"></circle>
                  <path
                    d="M9.5 9.5C9.5 8.11929 10.6193 7 12 7C13.3807 7 14.5 8.11929 14.5 9.5C14.5 10.3569 14.0689 11.1131 13.4117 11.5636C12.7283 12.0319 12 12.6716 12 13.5"
                    stroke="currentColor"
                  ></path>
                  <path d="M12.0001 17H12.009" stroke="currentColor"></path>
                </svg>
              </div>
              <div className="flex bg-gradient-to-l from-gray-300 to-lime-400 border-none p-1 rounded-3xl">
                <span className="text-lg m-1">sort:</span>
                <select
                  className="pr-4 font-medium cursor-pointer focus:outline-0 text-sm"
                  name=""
                  id=""
                >
                  <option
                    value="price|asc"
                    className="bg-black rounded text-white"
                  >
                    Low-High price
                  </option>
                  <option
                    value="price|desc"
                    className="bg-black rounded text-white"
                  >
                    High-Low price
                  </option>
                </select>
              </div>
            </div>
            <div className="p-6">
              <Cards products={Ring} /> {/* ✅ Pass only rings */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ring;
