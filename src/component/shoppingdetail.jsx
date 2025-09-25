import React, { useState } from "react";
import { Link } from "react-router-dom";
import down from "../assets/down.svg";
import tick from "../assets/tick.svg";
import { useCart } from "../CartContext";
import nonFavirateIcon from "./assets/non-fav.svg";
import FavirateIcon from "./assets/fav.svg";

const ShopperD = ({ product }) => {
  const [Open, setOpen] = useState(true);
  const { removeFromCart, updateQuantity } = useCart();

  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("favorites");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleFavorite = (id) => {
    const key = String(id);
    setFavorites((prev) => {
      const updated = { ...prev, [key]: !prev[key] };
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };

  if (!product) return null;

  const handleClick = () => setOpen(!Open);

  return (
    <div className="flex shadow-[0_0_0_1px_rgba(0,0,0,0.25)]">
      <div className="flex flex-col p-5 w-1/5">
        <img src={product.image} alt={product.name} className="h-30 w-30" />
        <div className="flex mt-5">
          <button className="hover:underline border rounded text-sm m-1 p-0.5 text-gray-800 cursor-pointer">
            <Link to="/Detail/id:">Edit</Link>
          </button>
          <button
            onClick={() => removeFromCart(product.id)}
            className="hover:underline border rounded text-sm m-1 p-0.5 text-gray-800 cursor-pointer"
          >
            Remove
          </button>
        </div>
        <button
          onClick={() => toggleFavorite(record.id)}
          className="hover:underline border rounded text-sm m-1 p-0.5 text-gray-800 cursor-pointer"
        >
          move to watchlist
        </button>
      </div>

      <div className="flex flex-col p-5 justify-start w-3/5">
        <span className="mt-4 mb-2 text-gray-400 text-sm">
          SKU: {product.sku || "LSB0463D"}
        </span>
        <span className="font-semibold mb-2">{product.name}</span>
        <span className="font-medium">
          ₹{product.price * product.quantity}{" "}
          <span className="line-through font-normal text-gray-700">
            ₹{product.oldprice}
          </span>
        </span>
        <span className="text-sm pb-2 mt-2 shadow-[0_1px_0_0_rgba(0,0,0,0.15)]">
          QTY:{" "}
          <select
            value={product.quantity}
            onChange={(e) => updateQuantity(product.id, e.target.value)}
            className="px-2 border rounded"
          >
            {[...Array(10).keys()].map((n) => (
              <option key={n + 1} value={n + 1}>
                {n + 1}
              </option>
            ))}
          </select>
        </span>
        <button
          onClick={handleClick}
          className="mt-1 flex justify-between shadow-[0_1px_0_0_rgba(0,0,0,0.25)]"
        >
          Details <img src={down} alt="arrow" className="h-6" />
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
            You Saved <span className="text-yellow-600"> $ 5,226 .</span>on {product.name}
            product
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShopperD;
