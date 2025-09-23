import React from "react";
import {useEffect, useState } from "react";
import product from "../Data/products.json"
import down from "../assets/down.svg";
import tick from "../assets/tick.svg";
import braslet from "../Data/img/braslet-02.png";

const ShopperD = () => {
  const [Open, setOpen] = useState(true);
  const handleclick = () => {
    setOpen(!Open);
  };

  return (
    <>
      <div className="flex flex-col p-5 w-1/5">
        <img src={braslet} alt="prouct" className="h-30 w-30" />
        <div className="flex  mt-5">
          <button className="hover:underline border rounded text-sm m-1 p-0.5 text-gray-800 cursor-pointer">
            Edit
          </button>
          <button className="hover:underline border rounded text-sm m-1 p-0.5 text-gray-800 cursor-pointer">
            Remove
          </button>
        </div>
        <button className="hover:underline border rounded text-sm m-1 p-0.5 text-gray-800 cursor-pointer">
          Move Watchlist
        </button>
      </div>
      <div className="flex flex-col p-5 justify-start w-3/5">
        <span className="mt-4 mb-2  text-gray-400 text-sm">SKU: LSB0463D</span>
        <span className="font-semibold mb-2">Name of the product</span>
        <span className=" font-medium">
          $12,000{" "}
          <span className="line-through font-normal text-gray-700">
            $22,000
          </span>
        </span>
        <span className="text-sm pb-2 mt-2 shadow-[0_1px_0_0_rgba(0,0,0,0.15)]">
          QTY:{" "}
          <select name="1" id="1" className="px-2 border rounded">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </span>
        <button
          onClick={handleclick}
          className="mt-1 flex justify-between shadow-[0_1px_0_0_rgba(0,0,0,0.25)]"
        >
          Details <img src={down} alt="arrow" className="h-6 " />
        </button>
        {Open && (
          <div className="p-2 bg-gray-100 flex flex-col gap-2 shadow-[0_1px_0_0_rgba(0,0,0,0.25)]">
            <span className="font-semibold ">Product Details</span>
            <div className="flex justify-between text-gray-700 text-sm ">
              <span>Gemstone</span>
              <span>F-G VS</span>
            </div>
            <div className="flex justify-between text-gray-700 text-sm ">
              <span>Metal Weight</span>
              <span>1 Carats</span>
            </div>
            <div className="flex justify-between text-gray-700 text-sm ">
              <span>Metal Type</span>
              <span>14K Yellow Gold</span>
            </div>
          </div>
        )}
        <div>
          <span className="font-light flex">
            <img src={tick} alt="" className="h-6" />
            You Saved <span className="text-yellow-600">₹5,226</span> on this
            product
          </span>
        </div>
      </div>
    </>
  );
};

export default ShopperD;
