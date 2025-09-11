import { Link } from "react-router-dom";
import callicon from "./assets/callicon.svg";
import FavirateIcon from "./assets/non-fav.svg";
import SearchIcon from "./assets/SearchIcon.svg";
import ShoppingbagIcon from "./assets/ShoppingbagIcon.svg";
import Usericon from "./assets/Usericon.svg";
import angara from "./assets/angara.svg";

const Navbar = () => {
  return (
    <>
      <div className="bg-black text-white p-2 m-0 text-xs flex justify-center items-center">
        <p>Free Shipping | Free 15-Day Return</p>
      </div>
      <div className="flex-col justify-between items-center pt-3 ml-10 mr-10">
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
            <img
              src={Usericon}
              alt="user"
              className="h-7 cursor-pointer"
              height="24"
              width="24"
            />
            <Link to="/cart">
              <img
                src={FavirateIcon}
                alt="favorite"
                className="h-7 cursor-pointer"
                height="24"
                width="24"
              />
            </Link>
            <img
              src={ShoppingbagIcon}
              alt="bag"
              className="h-7"
              height="24"
              width="24"
            />
          </div>
        </div>

        {/* Menu */}
        <div className="flex justify-center p-1.5 mb-4">
          <ul className="flex items-center justify-evenly gap-20">
            <li>
              <Link
                to="/rings"
                className="cursor-pointer text-sm hover:underline hover:text-yellow-600"
              >
                RINGS
              </Link>
            </li>
            <li>
              <Link
                to="/necklaces"
                className="cursor-pointer text-sm hover:underline hover:text-yellow-600"
              >
                NECKLACES
              </Link>
            </li>
            <li>
              <Link
                to="/mangalsutra"
                className="cursor-pointer text-sm hover:underline hover:text-yellow-600"
              >
                MANGALSUTRA
              </Link>
            </li>
            <li>
              <Link
                to="/earrings"
                className="cursor-pointer text-sm hover:underline hover:text-yellow-600"
              >
                EARRINGS
              </Link>
            </li>
            <li>
              <Link
                to="/bracelets"
                className="cursor-pointer text-sm hover:underline hover:text-yellow-600"
              >
                BRACELETS
              </Link>
            </li>
            <li>
              <Link
                to="/gifts"
                className="cursor-pointer text-sm hover:underline hover:text-yellow-600"
              >
                GIFTS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
