import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import callicon from "./assets/callicon.svg";
import FavirateIcon from "./assets/non-fav.svg";
import SearchIcon from "./assets/SearchIcon.svg";
import ShoppingbagIcon from "./assets/ShoppingbagIcon.svg";
import Usericon from "./assets/Usericon.svg";
import angara from "./assets/angara.svg";
import Rdropdown from "./dropddown/Rdropdown.jsx";
import Ndropdown from "./dropddown/Ndropdown.jsx";
import Mdropdown from "./dropddown/Mdropdown.jsx";
import Edropdown from "./dropddown/Edropdown.jsx";
import Bdropdown from "./dropddown/Bdropdown.jsx";
import Gdropdown from "./dropddown/Gdropdown.jsx";

const Navbar = () => {
  const [isHoveredR, setIsHoveredR] = useState(false);
  useEffect(() => {
    if (isHoveredR) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isHoveredR]);
  const [isHoveredN, setIsHoveredN] = useState(false);
  useEffect(() => {
    if (isHoveredN) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isHoveredN]);
  const [isHoveredM, setIsHoveredM] = useState(false);
  useEffect(() => {
    if (isHoveredM) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isHoveredM]);
  const [isHoveredE, setIsHoveredE] = useState(false);
  useEffect(() => {
    if (isHoveredE) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isHoveredE]);
  const [isHoveredB, setIsHoveredB] = useState(false);
  useEffect(() => {
    if (isHoveredB) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isHoveredB]);
  const [isHoveredG, setIsHoveredG] = useState(false);
  useEffect(() => {
    if (isHoveredG) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isHoveredG]);

  return (
    <div className="shadow-[0_0_25px_rgba(0,0,0,0.15)] w-full">
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
        <div>
          {isHoveredR && (
            <div
              className="fixed top-45 px-30 py-10 left-0 right-0 rounded-md bg-white text-black"
              onMouseEnter={() => setIsHoveredR(true)}
              onMouseLeave={() => setIsHoveredR(false)}
            >
              <Rdropdown />
            </div>
          )}
          {isHoveredN && (
            <div
              className="fixed top-45 px-30 py-10 left-0 right-0 rounded-md  bg-white text-black"
              onMouseEnter={() => setIsHoveredN(true)}
              onMouseLeave={() => setIsHoveredN(false)}
            >
              <Ndropdown />
            </div>
          )}
          {isHoveredM && (
            <div
              className="fixed top-45 px-30 py-10 left-0 right-0 rounded-md  bg-white text-black"
              onMouseEnter={() => setIsHoveredM(true)}
              onMouseLeave={() => setIsHoveredM(false)}
            >
              <Mdropdown />
            </div>
          )}
          {isHoveredE && (
            <div
              className="fixed top-45 px-30 py-10 left-0 right-0 rounded-md  bg-white text-black"
              onMouseEnter={() => setIsHoveredE(true)}
              onMouseLeave={() => setIsHoveredE(false)}
            >
              <Edropdown />
            </div>
          )}
          {isHoveredB && (
            <div
              className="fixed top-45 px-30 py-10 left-0 right-0 rounded-md  bg-white text-black"
              onMouseEnter={() => setIsHoveredB(true)}
              onMouseLeave={() => setIsHoveredB(false)}
            >
              <Bdropdown />
            </div>
          )}
          {isHoveredG && (
            <div
              className="fixed top-45 px-30 py-10 left-0 right-0 rounded-md bg-white text-black"
              onMouseEnter={() => setIsHoveredG(true)}
              onMouseLeave={() => setIsHoveredG(false)}
            >
              <Gdropdown />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
