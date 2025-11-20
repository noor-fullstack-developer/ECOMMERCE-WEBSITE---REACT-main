import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext.jsx";
import products from "../Data/products.json";
import nonFavirateIcon from "./assets/non-fav.svg";
import FavirateIcon from "./assets/fav.svg";
import star from "../assets/star.svg";
import add from "./assets/add.svg";
import sub from "./assets/sub.svg";

const Image = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));
  if (!product) return <div>Product not found!</div>;

  const [Recent, setRecent] = useState([]);
  useEffect(() => {
    const filtered = products.filter((p) => p.recent === "trues");
    setRecent(filtered);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenB, setIsOpenB] = useState(false);
  const [isOpenM, setIsOpenM] = useState(false);

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

  const [zoomed, setZoomed] = useState({
    a: false,
    b: false,
    c: false,
    d: false,
  });

  const handleZoom = (img) => {
    // Reset all zooms
    setZoomed({
      a: false,
      b: false,
      c: false,
      d: false,
      [img]: !zoomed[img], // toggle clicked image
    });
  };

  const imageClass = (isZoomed) =>
    `h-1/2 w-1/2 cursor-zoom-in transition-transform duration-300 ease-in-out ${
      isZoomed ? "scale-150  cursor-zoom-out" : ""
    }`;

  return (
    <div className="flex justify-center align-middle px-60 w-screen">
      <div className="w-8/12 flex overflow--hidden h-[60rem] flex-wrap ">
        <img
          className={imageClass(zoomed.a)}
          onClick={() => handleZoom("a")}
          src={product.image}
          alt={product.name}
        />
        <img
          className={imageClass(zoomed.b)}
          onClick={() => handleZoom("b")}
          src={product.image1}
          alt="TRUST ANGARA"
        />
        <img
          className={imageClass(zoomed.c)}
          onClick={() => handleZoom("c")}
          src={product.image2}
          alt="CERTIFICATE"
        />
        <img
          className={imageClass(zoomed.d)}
          onClick={() => handleZoom("d")}
          src={product.image3}
          alt="TRUST ANGARA"
        />
      </div>

      <div className="w-4/12">
        <span className="font-semibold text-xl">
          {product.name.toUpperCase()}
        </span>

        <div className="flex align-middle items-center">
          <img src={star} className="h-6 mt-3" alt="star" />
          <span className="shadow-[0_2px_0_0_rgba(0,0,0,1)] ml-3">
            (0) Reviews
          </span>
        </div>

        <div className="flex items-end mt-2">
          <span className="text-2xl mr-2">{product.price}</span>
          <span className="text-xl text-gray-600 line-through mr-2">
            {product.oldprice}
          </span>
          <span className="text-sm text-gray-600">
            (MRP incl. of all taxes)
          </span>
        </div>

        <div className="text-green-600 mt-2 text-sm">
          Exclusive Offer:Flat 5% Off
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-10 mt-5 items-center hover:underline">
          <button
            className="shadow-[0_0_0_1px_rgba(0,0,0,1)] hover:shadow-[0_0_0_2px_rgba(0,0,0,1)] p-3"
            onClick={() => toggleFavorite(product.id)}
          >
            {favorites[String(product.id)] ? (
              <img src={FavirateIcon} alt="favorite" className="h-7" />
            ) : (
              <img src={nonFavirateIcon} alt="nonfavorite" className="h-7" />
            )}
          </button>

          <button
            className="flex justify-between items-center bg-black text-white w-full p-3 cursor-pointer"
            onClick={() => {
              addToCart(product); // add to cart
              navigate("/cart"); // navigate to cart page
            }}
          >
            <span className="text-xl font-semibold">
              ₹{product.price}
              <span className="line-through text-sm ml-1">
                {product.oldprice}
              </span>
            </span>
            <span className="font-bold">ADD TO BAG</span>
          </button>
        </div>

        {/* Product details toggle */}
        <div className="flex justify-between items-center gap-15 mt-3 mb- ml-3 p-4 bg-gray-100 font-[rubik] shadow-[0_0_0_1px_rgba(0,0,0,0.5)]">
          <p className="text-gray-700">Product Detail</p>
          <img
            src={isOpen ? sub : add}
            alt="toggle"
            className="cursor-pointer w-5 h-5"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        {isOpen && (
          <div className="ml-6 text-gray-600 flex flex-col gap-2 shadow-[0_1px_0_rgba(0,0,0,0.1)]">
            <span className="text-sm">
              This 14kt white gold tennis bracelet looks classic with a
              distinctive edge. It is embellished with glittering lab-grown
              diamonds that are secured in a unique prong setting.
            </span>
          </div>
        )}

        {/* Price Breakup toggle */}
        <div className="flex justify-between items-center gap-15 mb- ml-3 p-4 bg-gray-100 font-[rubik] shadow-[0_0_0_1px_rgba(0,0,0,0.5)]">
          <p className="text-gray-700">Price Break Up</p>
          <img
            src={isOpenB ? sub : add}
            alt="toggle"
            className="cursor-pointer w-5 h-5"
            onClick={() => setIsOpenB(!isOpenB)}
          />
        </div>
        {isOpenB && (
          <div className="ml-6 text-gray-600 flex flex-col gap-2 shadow-[0_1px_0_rgba(0,0,0,0.1)]">
            <span className="text-sm">
              Price details for the selected product variant.
            </span>
          </div>
        )}

        {/* Manufacturer toggle */}
        <div className="flex justify-between items-center gap-15 mb- ml-3 p-4 bg-gray-100 font-[rubik] shadow-[0_0_0_1px_rgba(0,0,0,0.5)]">
          <p className="text-gray-700">Manufacturer & Origin</p>
          <img
            src={isOpenM ? sub : add}
            alt="toggle"
            className="cursor-pointer w-5 h-5"
            onClick={() => setIsOpenM(!isOpenM)}
          />
        </div>
        {isOpenM && (
          <div className="ml-6 text-gray-600 flex flex-col gap-2 shadow-[0_1px_0_rgba(0,0,0,0.1)]">
            <span className="text-sm">
              Manufacturer details and origin info.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Image;
