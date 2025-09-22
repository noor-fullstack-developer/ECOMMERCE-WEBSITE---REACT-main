import { useState } from "react";
import React from "react";
import products from "../Data/products.json";
import { div } from "framer-motion/client";
import ShopperD from "../component/shoppingdetail";
import Shoppers from "../component/rightshoppingdetail";

const Shoppingbag = () => {


  return (
    <div className="flex flex-col justify-center align-middle items-center bg-gray-50">
      <h1 className="headcss">Secure Shopping Bag</h1>
      <div className="flex justify-between gap-5 p-5 m-5 w-[85rem] ">
        <div className="flex bg-white w-2/3 shadow-[0_0_15px_0_rgba(0,0,0,0.25)] border border-gray-400">
          <ShopperD />
        </div>
          <Shoppers />
      </div>
    </div>
  );
};

export default Shoppingbag;
