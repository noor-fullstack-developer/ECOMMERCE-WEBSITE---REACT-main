import React from "react";
import sheild from "../assets/sheild.svg"
import right from "../assets/right.svg"
const Shoppers = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="p-4 w-full shadow-[0_0_15px_0_rgba(0,0,0,0.25)] bg-white border border-gray-400">
        <h1 className="font-semibold text-gray-700 text-xl pb-3">Offer Code</h1>
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="ENTER COUPON CODE"
            className="border p-2 pr-20"
          />{" "}
          <button className="border px-4">Apply</button>
        </div>
      </div>
      <div className="p-4 w-full shadow-[0_0_15px_0_rgba(0,0,0,0.25)] border border-gray-400 bg-white">
        <div className="shadow-[0_1px_0_0_rgba(0,0,0,0.5)] pb-1">
          <span className="mb-4 font-semibold text-lg tracking-wider text-gray-800">
            Order Summary
          </span>
          <div className="flex justify-between mb-2">
            <span>SubTotal</span>
            <span>$22,000</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Product Discount</span>
            <span className="text-green-500">-$11,000</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping,after 2 day</span>
            <span className="text-green-500">Free</span>
          </div>
        </div>
        <div className="flex p-2 justify-between">
          <span className="text-lg font-semibold">
            Order Total{" "}
            <span className="font-normal text-[14px]">{"(including GST)"}</span>
          </span>
          <span className="font-semibold text-lg">$12,000</span>
        </div>
      </div>
      <button className="flex justify-evenly items-center bg-black p-3"><img src={sheild} alt="" /><span className="font-medium text-white">Secure Checkout</span><img src={right} alt="" /></button>
    </div>
  );
};

export default Shoppers;
