import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sheild from "../assets/sheild.svg";
import right from "../assets/right.svg";
import productsData from "../Data/products.json";
import ShopperD from "../component/Shoppingdetail.jsx";
import { useCart } from "../CartContext.jsx";
import Cards from "../component/Favcard.jsx";


const Shoppingbag = () => {
  const { cartItems } = useCart();
  const [favorite, setFavorite] = useState([]);
  useEffect(() => {
    // filter only rings
    const filtered = productsData.filter((p) => p.categorie === "favorite");
    setFavorite(filtered);
  }, []);

  // Calculate subtotal dynamically
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Example discount: 50% of subtotal if you want to simulate
  const productDiscount = subtotal * 0.05;

  // Order total
  const orderTotal = subtotal - productDiscount;

  return (
    <div className="flex flex-col justify-center items-center bg-gray-50">
      <h1 className="headcss">Secure Shopping Bag</h1>
      {cartItems.length === 0 ? (
        <div className="h-full flex flex-col items-center w-full">
          <div className=" flex w-full items-center justify-center">
            <h1 className="text-3xl font-semibold mt-10 ">
              Most Loved On Angara
            </h1>
            <Link to="">
              <button className="pl-[20rem]">view more jewellery</button>
            </Link>
          </div>
          <div className="mt-6 mb-10">
            <Cards products={favorite} />
          </div>
        </div>
      ) : (
        <div className="flex justify-between gap-5 p-5 m-5 w-[85rem]">
          {/* Left side: Cart Items */}
          <div className="flex flex-col bg-white w-2/3 shadow-[0_0_15px_0_rgba(0,0,0,0.25)] border border-gray-400 gap-3">
            {cartItems.map((product) => (
              <ShopperD key={product.id} product={product} />
            ))}
          </div>

          {/* Right side: Order Summary */}
          <div className="flex flex-col gap-4 w-[25rem]">
            {/* Offer Code */}
            <div className="p-4 w-full shadow-[0_0_15px_0_rgba(0,0,0,0.25)] bg-white border border-gray-400">
              <h1 className="font-semibold text-gray-700 text-xl pb-3">
                Offer Code
              </h1>
              <div className="flex gap-5">
                <input
                  type="text"
                  placeholder="ENTER COUPON CODE"
                  className="border p-2 pr-20"
                />{" "}
                <button className="border px-4">Apply</button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="p-4 w-full shadow-[0_0_15px_0_rgba(0,0,0,0.25)] border border-gray-400 bg-white">
              <div className="shadow-[0_1px_0_0_rgba(0,0,0,0.5)] pb-1">
                <span className="mb-4 font-semibold text-lg tracking-wider text-gray-800">
                  Order Summary
                </span>
                <div className="flex justify-between mb-2">
                  <span>SubTotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Product Discount</span>
                  <span className="text-green-500">
                    -${productDiscount.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping, after 2 day</span>
                  <span className="text-green-500">Free</span>
                </div>
              </div>
              <div className="flex p-2 justify-between">
                <span className="text-lg font-semibold">
                  Order Total{" "}
                  <span className="font-normal text-[14px]">
                    {"(including GST)"}
                  </span>
                </span>
                <span className="font-semibold text-lg">
                  ${orderTotal.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Secure Checkout Button */}
            <span className="flex justify-evenly items-center bg-black p-3">
              <img src={sheild} alt="" />
              <button className="font-medium text-white">Secure Checkout</button>
              <img src={right} alt="" />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shoppingbag;
