import { Link } from "react-router-dom";
import { useState } from "react";
import callicon from "./assets/callicon.svg";
import FavirateIcon from "./assets/non-fav.svg";
import SearchIcon from "./assets/SearchIcon.svg";
import ShoppingbagIcon from "./assets/ShoppingbagIcon.svg";
import Usericon from "./assets/Usericon.svg";
import angara from "./assets/angara.svg";
import RubyD from "/img/Ruby.webp";

const Navbar = () => {
  const [isHoveredR, setIsHoveredR] = useState(false);
  const [isHoveredN, setIsHoveredN] = useState(false);
  const [isHoveredM, setIsHoveredM] = useState(false);
  const [isHoveredE, setIsHoveredE] = useState(false);
  const [isHoveredB, setIsHoveredB] = useState(false);
  const [isHoveredG, setIsHoveredG] = useState(false);
  return (
    <div className="shadow-[0_0_25px_rgba(0,0,0,0.15)]">
      <div className="bg-black text-white p-2 m-0 text-xs flex justify-center items-center ">
        <p>Free Shipping | Free 15-Day Return</p>
      </div>
      <div className="flex-col justify-between pb-1 items-center pt-3 ml-10 mr-10 ">
        <div className="flex justify-between items-center mb-10">
          {/* Contact */}
          <div className="flex gap-2 items-center">
            <img src={callicon} alt="call" className="h-4 font-bold" />
            <a
              href="tel:+919001001313"
              className="text-xs font-medium text-gray-700 hover:underline"
            >
              +91-900-100-1313
            </a>
          </div>

          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <img
                src={angara}
                alt="logo"
                className="h-12 ml-50"
                width="172"
                height="51"
              />
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3 ">
            <div className="flex justify-center items-center overflow-hidden rounded-xl">
              <img
                src={SearchIcon}
                alt="search"
                className="h-10 bg-gray-100 p-2 w-8"
              />
              <input
                type="search"
                className="bg-gray-100 rounded p-2 h-10 text-sm"
                placeholder="Search..."
              />
            </div>
            <Link to="Register">
              <img
                src={Usericon}
                alt="user"
                className="h-7 cursor-pointer"
                height="24"
                width="24"
              />
            </Link>
            <Link to="/Favorites">
              <img
                src={FavirateIcon}
                alt="favorite"
                className="h-7 cursor-pointer"
                height="24"
                width="24"
              />
            </Link>
            <Link to="/cart">
              <img
                src={ShoppingbagIcon}
                alt="bag"
                className="h-7"
                height="24"
                width="24"
              />
            </Link>
          </div>
        </div>

        {/* Menu */}
        <div className="flex justify-center p-1.5">
          <ul className="flex items-center justify-evenly gap-20">
            <li
              className="relative pb-4" // <-- make the parent relative
              onMouseEnter={() => setIsHoveredR(true)}
              onMouseLeave={() => setIsHoveredR(false)}
            >
              <Link
                to="/rings"
                className="cursor-pointer text-sm hover:underline hover:text-yellow-600 pb-2"
              >
                RINGS
              </Link>
            </li>

            <li
              className="relative pb-4"
              onMouseEnter={() => setIsHoveredN(true)}
              onMouseLeave={() => setIsHoveredN(false)}
            >
              <Link
                to="/necklaces"
                className="cursor-pointer text-sm hover:underline hover:text-yellow-600 pb-2"
              >
                NECKLACES
              </Link>
            </li>
            <li
              className="relative pb-4"
              onMouseEnter={() => setIsHoveredM(true)}
              onMouseLeave={() => setIsHoveredM(false)}
            >
              <Link
                to="/mangalsutra"
                className="cursor-pointer text-sm hover:underline hover:text-yellow-600 pb-2"
              >
                MANGALSUTRA
              </Link>
            </li>
            <li
              className="relative pb-4"
              onMouseEnter={() => setIsHoveredE(true)}
              onMouseLeave={() => setIsHoveredE(false)}
            >
              <Link
                to="/earrings"
                className="cursor-pointer text-sm hover:underline hover:text-yellow-600 pb-2"
              >
                EARRINGS
              </Link>
            </li>
            <li
              className="relative pb-4"
              onMouseEnter={() => setIsHoveredB(true)}
              onMouseLeave={() => setIsHoveredB(false)}
            >
              <Link
                to="/bracelets"
                className="cursor-pointer text-sm hover:underline hover:text-yellow-600 pb-2"
              >
                BRACELETS
              </Link>
            </li>
            <li
              className="relative pb-4"
              onMouseEnter={() => setIsHoveredG(true)}
              onMouseLeave={() => setIsHoveredG(false)}
            >
              <Link
                to="/gifts"
                className="cursor-pointer text-sm hover:underline hover:text-yellow-600 pb-2"
              >
                GIFTS
              </Link>
            </li>
          </ul>
        </div>

        {isHoveredR && (
          <div
            className="fixed top-45 px-30 py-10 left-0 right-0 rounded-md bg-white text-black"
            onMouseEnter={() => setIsHoveredR(true)}
            onMouseLeave={() => setIsHoveredR(false)}
          >
            <div className="flex justify-evenly pb-2.5 items-center">
              {/* Natural Gemstone Rings */}
              <div className="pr-20 shadow-[2px_0_0_0_rgba(0,0,0,0.5)] w-1/6">
                <h3 className=" text-lg font-semibold">
                  NATURAL GEMSTONE RINGS
                </h3>
                <ul className="p-2.5 flex flex-col gap-2 text-black font-bold space-y-1">
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Ruby Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Emerald Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Blue Sapphire Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Yellow Sapphire Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Pink Sapphire Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Amethyst Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    London Blue Topaz Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Aquamarine Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Citrine Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Garnet Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Morganite Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Peridot Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Opal Rings
                  </li>
                </ul>
                <button className="bg-transparent border-0 hover:underline duration-500 hover:text-orange-500">
                  Explore All
                </button>
              </div>
              {/* Natural & Lab Diamond */}
              <div className="pr-20 shadow-[2px_0_0_0_rgba(0,0,0,0.5)] h-full w-1/6">
                <div>
                  <h3 className="mt-12 text-lg font-semibold">
                    NATURAL DIAMOND RINGS
                  </h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Diamond Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Black Diamond Rings
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 hover:underline duration-500 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
                <div>
                  <h3 className="mt-12 text-lg font-semibold">
                    LAB-GROWN RINGS
                  </h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" /> Lab Diamond
                      Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" /> Lab Emerald
                      Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" /> Lab Blue
                      Sapphire Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" /> Lab Ruby Rings
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 hover:underline duration-500 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
              </div>
              {/* Pearl & Style Rings */}
              <div className="pr-20 shadow-[2px_0_0_0_rgba(0,0,0,0.5)] w-1/6">
                <div>
                  <h3 className="mt-12 text-lg font-semibold">PEARL RINGS</h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Freshwater Pearl Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      South Sea Pearl Rings
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 underline text-orange-400 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
                <div>
                  <h3 className="mt-12 text-lg font-semibold">
                    RINGS BY STYLE
                  </h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Halo Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Classic Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Side Stone Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Solitaire Rings
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 hover:underline duration-500 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
              </div>
              {/* Metal & Price */}
              <div className="pr-20 shadow-[2px_0_0_0_rgba(0,0,0,0.5)] w-1/6">
                <div>
                  <h3 className="mt-12 text-lg font-semibold">
                    RINGS BY METAL PURITY
                  </h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      14K Yellow Gold
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      14K White Gold
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      14K Rose Gold
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      18K Yellow Gold
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      18K White Gold
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      18K Rose Gold
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 hover:underline duration-500 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
                <div>
                  <h3 className="mt-12 text-lg font-semibold">
                    RINGS BY PRICE RANGE
                  </h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      ₹10,000 - ₹25,000
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      ₹25,000 - ₹50,000
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      ₹50,000 - ₹1,00,000
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      ₹1,00,000 - ₹2,00,000
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Above ₹2,00,000
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 underline text-orange-400 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {isHoveredN && (
          <div
            className="fixed top-45 px-30 py-10 left-0 right-0 rounded-md  bg-white text-black"
            onMouseEnter={() => setIsHoveredR(true)}
            onMouseLeave={() => setIsHoveredR(false)}
          >
            <div className="flex justify-evenly items-center">
              {/* Natural Gemstone Rings */}
              <div className="pr-20 shadow-[2px_0_0_0_rgba(0,0,0,0.5)] w-1/6">
                <h3 className=" text-lg font-semibold">
                  NATURAL GEMSTONE RINGS
                </h3>
                <ul className="p-2.5 flex flex-col gap-2 text-black font-bold space-y-1">
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Ruby Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Emerald Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Blue Sapphire Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Yellow Sapphire Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Pink Sapphire Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Amethyst Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    London Blue Topaz Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Aquamarine Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Citrine Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Garnet Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Morganite Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Peridot Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Opal Rings
                  </li>
                </ul>
                <button className="bg-transparent border-0 hover:underline duration-500 hover:text-orange-500">
                  Explore All
                </button>
              </div>
              {/* Natural & Lab Diamond */}
              <div className="pr-20 shadow-[2px_0_0_0_rgba(0,0,0,0.5)] h-full w-1/6">
                <div>
                  <h3 className="mt-12 text-lg font-semibold">
                    NATURAL DIAMOND RINGS
                  </h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Diamond Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Black Diamond Rings
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 hover:underline duration-500 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
                <div>
                  <h3 className="mt-12 text-lg font-semibold">
                    LAB-GROWN RINGS
                  </h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" /> Lab Diamond
                      Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" /> Lab Emerald
                      Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" /> Lab Blue
                      Sapphire Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" /> Lab Ruby Rings
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 hover:underline duration-500 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
              </div>
              {/* Pearl & Style Rings */}
              <div className="pr-20 shadow-[2px_0_0_0_rgba(0,0,0,0.5)] w-1/6">
                <div>
                  <h3 className="mt-12 text-lg font-semibold">PEARL RINGS</h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Freshwater Pearl Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      South Sea Pearl Rings
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 underline text-orange-400 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
                <div>
                  <h3 className="mt-12 text-lg font-semibold">
                    RINGS BY STYLE
                  </h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Halo Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Classic Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Side Stone Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Solitaire Rings
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 hover:underline duration-500 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
              </div>
              {/* Metal & Price */}
              <div className="pr-20 shadow-[2px_0_0_0_rgba(0,0,0,0.5)] w-1/6">
                <div>
                  <h3 className="mt-12 text-lg font-semibold">
                    RINGS BY METAL PURITY
                  </h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      14K Yellow Gold
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      14K White Gold
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      14K Rose Gold
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      18K Yellow Gold
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      18K White Gold
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      18K Rose Gold
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 hover:underline duration-500 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
                <div>
                  <h3 className="mt-12 text-lg font-semibold">
                    RINGS BY PRICE RANGE
                  </h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      ₹10,000 - ₹25,000
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      ₹25,000 - ₹50,000
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      ₹50,000 - ₹1,00,000
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      ₹1,00,000 - ₹2,00,000
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Above ₹2,00,000
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 underline text-orange-400 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {isHoveredM && (
          <div
            className="fixed top-45 px-30 py-10 left-0 right-0 rounded-md  bg-white text-black"
            onMouseEnter={() => setIsHoveredR(true)}
            onMouseLeave={() => setIsHoveredR(false)}
          >
            <div className="flex justify-evenly items-center">
              {/* Natural Gemstone Rings */}
              <div className="pr-20 shadow-[2px_0_0_0_rgba(0,0,0,0.5)] w-1/6">
                <h3 className=" text-lg font-semibold">
                  NATURAL GEMSTONE RINGS
                </h3>
                <ul className="p-2.5 flex flex-col gap-2 text-black font-bold space-y-1">
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Ruby Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Emerald Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Blue Sapphire Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Yellow Sapphire Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Pink Sapphire Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Amethyst Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    London Blue Topaz Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Aquamarine Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Citrine Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Garnet Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Morganite Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Peridot Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Opal Rings
                  </li>
                </ul>
                <button className="bg-transparent border-0 hover:underline duration-500 hover:text-orange-500">
                  Explore All
                </button>
              </div>
              {/* Natural & Lab Diamond */}
              <div className="pr-20 shadow-[2px_0_0_0_rgba(0,0,0,0.5)] h-full w-1/6">
                <div>
                  <h3 className="mt-12 text-lg font-semibold">
                    NATURAL DIAMOND RINGS
                  </h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Diamond Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Black Diamond Rings
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 hover:underline duration-500 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
                <div>
                  <h3 className="mt-12 text-lg font-semibold">
                    LAB-GROWN RINGS
                  </h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" /> Lab Diamond
                      Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" /> Lab Emerald
                      Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" /> Lab Blue
                      Sapphire Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" /> Lab Ruby Rings
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 hover:underline duration-500 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
              </div>
              {/* Pearl & Style Rings */}
              <div className="pr-20 shadow-[2px_0_0_0_rgba(0,0,0,0.5)] w-1/6">
                <div>
                  <h3 className="mt-12 text-lg font-semibold">PEARL RINGS</h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Freshwater Pearl Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      South Sea Pearl Rings
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 underline text-orange-400 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
                <div>
                  <h3 className="mt-12 text-lg font-semibold">
                    RINGS BY STYLE
                  </h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Halo Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Classic Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Side Stone Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Solitaire Rings
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 hover:underline duration-500 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
              </div>
              {/* Metal & Price */}
              <div className="pr-20 shadow-[2px_0_0_0_rgba(0,0,0,0.5)] w-1/6">
                <div>
                  <h3 className="mt-12 text-lg font-semibold">
                    RINGS BY METAL PURITY
                  </h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      14K Yellow Gold
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      14K White Gold
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      14K Rose Gold
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      18K Yellow Gold
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      18K White Gold
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      18K Rose Gold
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 hover:underline duration-500 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
                <div>
                  <h3 className="mt-12 text-lg font-semibold">
                    RINGS BY PRICE RANGE
                  </h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      ₹10,000 - ₹25,000
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      ₹25,000 - ₹50,000
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      ₹50,000 - ₹1,00,000
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      ₹1,00,000 - ₹2,00,000
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Above ₹2,00,000
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 underline text-orange-400 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {isHoveredE && (
          <div
            className="fixed top-45 px-30 py-10 left-0 right-0 rounded-md  bg-white text-black"
            onMouseEnter={() => setIsHoveredR(true)}
            onMouseLeave={() => setIsHoveredR(false)}
          >
            <div className="flex justify-evenly items-center">
              {/* Natural Gemstone Rings */}
              <div className="pr-20 shadow-[2px_0_0_0_rgba(0,0,0,0.5)] w-1/6">
                <h3 className=" text-lg font-semibold">
                  NATURAL GEMSTONE RINGS
                </h3>
                <ul className="p-2.5 flex flex-col gap-2 text-black font-bold space-y-1">
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Ruby Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Emerald Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Blue Sapphire Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Yellow Sapphire Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Pink Sapphire Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Amethyst Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    London Blue Topaz Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Aquamarine Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Citrine Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Garnet Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Morganite Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Peridot Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Opal Rings
                  </li>
                </ul>
                <button className="bg-transparent border-0 hover:underline duration-500 hover:text-orange-500">
                  Explore All
                </button>
              </div>
              {/* Natural & Lab Diamond */}
              <div className="pr-20 shadow-[2px_0_0_0_rgba(0,0,0,0.5)] w-1/6">
                <div>
                  <h3 className="mt-12 text-lg font-semibold">
                    NATURAL DIAMOND RINGS
                  </h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Diamond Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Black Diamond Rings
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 hover:underline duration-500 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
                <div>
                  <h3 className="mt-12 text-lg font-semibold">
                    LAB-GROWN RINGS
                  </h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" /> Lab Diamond
                      Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" /> Lab Emerald
                      Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" /> Lab Blue
                      Sapphire Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" /> Lab Ruby Rings
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 hover:underline duration-500 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
              </div>
              {/* Pearl & Style Rings */}
              <div className="pr-20 shadow-[2px_0_0_0_rgba(0,0,0,0.5)] w-1/6">
                <div>
                  <h3 className="mt-12 text-lg font-semibold">PEARL RINGS</h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Freshwater Pearl Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      South Sea Pearl Rings
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 underline text-orange-400 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
                <div>
                  <h3 className="mt-12 text-lg font-semibold">
                    RINGS BY STYLE
                  </h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Halo Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Classic Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Side Stone Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Solitaire Rings
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 hover:underline duration-500 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
              </div>
              {/* Metal & Price */}
              <div className="pr-20 shadow-[2px_0_0_0_rgba(0,0,0,0.5)] w-1/6  ">
                <div>
                  <h3 className="mt-12 text-lg font-semibold">
                    RINGS BY METAL PURITY
                  </h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      14K Yellow Gold
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      14K White Gold
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      14K Rose Gold
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      18K Yellow Gold
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      18K White Gold
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      18K Rose Gold
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 hover:underline duration-500 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
                <div>
                  <h3 className="mt-12 text-lg font-semibold">
                    RINGS BY PRICE RANGE
                  </h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      ₹10,000 - ₹25,000
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      ₹25,000 - ₹50,000
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      ₹50,000 - ₹1,00,000
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      ₹1,00,000 - ₹2,00,000
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Above ₹2,00,000
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 underline text-orange-400 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {isHoveredB && (
          <div
            className="fixed top-45 px-30 py-10 left-0 right-0 rounded-md  bg-white text-black"
            onMouseEnter={() => setIsHoveredR(true)}
            onMouseLeave={() => setIsHoveredR(false)}
          >
            <div className="flex justify-evenly items-center">
              {/* Natural Gemstone Rings */}
              <div className="pr-20 shadow-[2px_0_0_0_rgba(0,0,0,0.5)] w-1/6">
                <h3 className=" text-lg font-semibold">
                  NATURAL GEMSTONE RINGS
                </h3>
                <ul className="p-2.5 flex flex-col gap-2 text-black font-bold space-y-1">
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Ruby Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Emerald Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Blue Sapphire Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Yellow Sapphire Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Pink Sapphire Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Amethyst Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    London Blue Topaz Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Aquamarine Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Citrine Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Garnet Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Morganite Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Peridot Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Opal Rings
                  </li>
                </ul>
                <button className="bg-transparent border-0 hover:underline duration-500 hover:text-orange-500">
                  Explore All
                </button>
              </div>
              {/* Natural & Lab Diamond */}
              <div className="pr-20 shadow-[2px_0_0_0_rgba(0,0,0,0.5)] w-1/6">
                <div>
                  <h3 className="mt-12 text-lg font-semibold">
                    NATURAL DIAMOND RINGS
                  </h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Diamond Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Black Diamond Rings
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 hover:underline duration-500 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
                <div>
                  <h3 className="mt-12 text-lg font-semibold">
                    LAB-GROWN RINGS
                  </h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" /> Lab Diamond
                      Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" /> Lab Emerald
                      Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" /> Lab Blue
                      Sapphire Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" /> Lab Ruby Rings
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 hover:underline duration-500 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
              </div>
              {/* Pearl & Style Rings */}
              <div className="pr-20 shadow-[2px_0_0_0_rgba(0,0,0,0.5)] w-1/6">
                <div>
                  <h3 className="mt-12 text-lg font-semibold">PEARL RINGS</h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Freshwater Pearl Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      South Sea Pearl Rings
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 underline text-orange-400 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
                <div>
                  <h3 className="mt-12 text-lg font-semibold">
                    RINGS BY STYLE
                  </h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Halo Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Classic Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Side Stone Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Solitaire Rings
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 hover:underline duration-500 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
              </div>
              {/* Metal & Price */}
              <div className="pr-20 shadow-[2px_0_0_0_rgba(0,0,0,0.5)] w-1/6">
                <div>
                  <h3 className="mt-12 text-lg font-semibold">
                    RINGS BY METAL PURITY
                  </h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      14K Yellow Gold
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      14K White Gold
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      14K Rose Gold
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      18K Yellow Gold
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      18K White Gold
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      18K Rose Gold
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 hover:underline duration-500 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
                <div>
                  <h3 className="mt-12 text-lg font-semibold">
                    RINGS BY PRICE RANGE
                  </h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      ₹10,000 - ₹25,000
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      ₹25,000 - ₹50,000
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      ₹50,000 - ₹1,00,000
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      ₹1,00,000 - ₹2,00,000
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Above ₹2,00,000
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 underline text-orange-400 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {isHoveredG && (
          <div
            className="fixed top-45 px-30 py-10 left-0 right-0 rounded-md bg-white text-black"
            onMouseEnter={() => setIsHoveredR(true)}
            onMouseLeave={() => setIsHoveredR(false)}
          >
            <div className="flex justify-evenly items-center">
              {/* Natural Gemstone Rings */}
              <div className="pr-20 shadow-[2px_0_0_0_rgba(0,0,0,0.5)] w-1/6">
                <h3 className=" text-lg font-semibold">
                  NATURAL GEMSTONE RINGS
                </h3>
                <ul className="p-2.5 flex flex-col gap-2 text-black font-bold space-y-1">
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Ruby Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Emerald Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Blue Sapphire Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Yellow Sapphire Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Pink Sapphire Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Amethyst Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    London Blue Topaz Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Aquamarine Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Citrine Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Garnet Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Morganite Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Peridot Rings
                  </li>
                  <li className=" flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                    {" "}
                    <img src={RubyD} className="h-4" alt="" />
                    Opal Rings
                  </li>
                </ul>
                <button className="bg-transparent border-0 hover:underline duration-500 hover:text-orange-500">
                  Explore All
                </button>
              </div>
              {/* Natural & Lab Diamond */}
              <div className="pr-20 shadow-[2px_0_0_0_rgba(0,0,0,0.5)] w-1/6">
                <div>
                  <h3 className="mt-12 text-lg font-semibold">
                    NATURAL DIAMOND RINGS
                  </h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Diamond Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Black Diamond Rings
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 hover:underline duration-500 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
                <div>
                  <h3 className="mt-12 text-lg font-semibold">
                    LAB-GROWN RINGS
                  </h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" /> Lab Diamond
                      Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" /> Lab Emerald
                      Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" /> Lab Blue
                      Sapphire Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" /> Lab Ruby Rings
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 hover:underline duration-500 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
              </div>
              {/* Pearl & Style Rings */}
              <div className="pr-20 shadow-[2px_0_0_0_rgba(0,0,0,0.5)] w-1/6">
                <div>
                  <h3 className="mt-12 text-lg font-semibold">PEARL RINGS</h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Freshwater Pearl Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      South Sea Pearl Rings
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 underline text-orange-400 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
                <div>
                  <h3 className="mt-12 text-lg font-semibold">
                    RINGS BY STYLE
                  </h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Halo Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Classic Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Side Stone Rings
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Solitaire Rings
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 hover:underline duration-500 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
              </div>
              {/* Metal & Price */}
              <div className="pr-20 shadow-[2px_0_0_0_rgba(0,0,0,0.5)] w-1/6">
                <div>
                  <h3 className="mt-12 text-lg font-semibold">
                    RINGS BY METAL PURITY
                  </h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      14K Yellow Gold
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      14K White Gold
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      14K Rose Gold
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      18K Yellow Gold
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      18K White Gold
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      18K Rose Gold
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 hover:underline duration-500 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
                <div>
                  <h3 className="mt-12 text-lg font-semibold">
                    RINGS BY PRICE RANGE
                  </h3>
                  <ul className="p-2.5 text-black font-bold space-y-1">
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      ₹10,000 - ₹25,000
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      ₹25,000 - ₹50,000
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      ₹50,000 - ₹1,00,000
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      ₹1,00,000 - ₹2,00,000
                    </li>
                    <li className="flex gap-5 text-[15px] hover:underline cursor-pointer font-normal hover:text-orange-600 duration-200">
                      {" "}
                      <img src={RubyD} className="h-4" alt="" />
                      Above ₹2,00,000
                    </li>
                  </ul>
                  <button className="bg-transparent border-0 underline text-orange-400 hover:text-orange-500">
                    Explore All
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
