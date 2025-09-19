import Meta from "./assets/meta.svg";
import twitter from "./assets/twitter.svg";
import youtube from "./assets/youtube.svg";
import pinterest from "./assets/pinterest.svg";
import instagram from "./assets/instagram.svg";
import phone from "./assets/callIcon.svg";
import email from "./assets/email.svg";
import mg from "./assets/mg.svg";
import location from "./assets/location.svg";
import bhim from "../Data/img.home/BHIM-upi.png";
import Master from "../Data/img.home/Mastercard-Logo.png";
import Rupay from "../Data/img.home/Rupay.png";
import Upi from "../Data/img.home/UPI.png";
import Visa from "../Data/img.home/Visa.png";
import ind from "../Data/img.home/ind.png";

const Footer = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col items-center">
        {/* Offer Text */}
        <div className="text-xl font-semibold mb-2 ">
          Get <span className="text-amber-500 font-bold text-xl">5% off</span>{" "}
          on your first order
        </div>

        {/* Phone Input */}
        <div className="flex border rounded mb-2">
          <input
            type="number"
            placeholder="+91 Phone Number*"
            className="p-4 w-60 outline-none"
          />
          <button className="bg-black text-white px-6 py-4">Sign Up</button>
        </div>

        {/* Privacy Policy */}
        <div className="text-gray-700 text-sm">
          Your privacy matters. For detail, see our{" "}
          <span className="underline cursor-pointer">Privacy Policy.</span>
        </div>

        {/* Social Links */}
        <div className="flex m-5 items-center">
          <p className="text-[17px] pr-2">Follow us :</p>
          <a href="https://meta.com">
            <img src={Meta} alt="meta" className="pr-3 h-6" />
          </a>
          <a href="https://twitter.com">
            <img src={twitter} alt="twitter" className="pr-3 h-6" />
          </a>
          <a href="https://youtube.com">
            <img src={youtube} alt="youtube" className="pr-3 h-6" />
          </a>
          <a href="https://pinterest.com">
            <img src={pinterest} alt="pinterest" className="pr-3 h-6" />
          </a>
          <a href="https://instagram.com">
            <img src={instagram} alt="instagram" className="pr-3 h-6" />
          </a>
        </div>

        {/* Footer Sections */}
        <div className="flex flex-wrap justify-between py-10 px-72 items-start w-full bg-[#f5f5f6] gap-10">
          {/* Assistance */}
          <div>
            <span className="font-semibold text-lg text-black">Assistance</span>
            <ul className="font-light">
              <li className="mt-3 hover:underline">15-days Returns</li>
              <li className="mt-3 hover:underline">Resizing Policy</li>
              <li className="mt-3 hover:underline">
                Lifetime Exchange Buy back
              </li>
              <li className="mt-3 hover:underline">Cancellation Policy</li>
              <li className="mt-3 hover:underline">Track Your Order</li>
              <li className="mt-3 hover:underline">FAQs</li>
              <li className="pt-5 hover:underline flex gap-2 items-center">
                <img src={phone} className="h-5" alt="phone" />
                +91-900-100-1313
              </li>
              <li className="pt-5 hover:underline flex gap-2 items-center">
                <img src={email} className="h-5" alt="email" />
                Email Us
              </li>
              <li className="pt-5 hover:underline flex gap-2 items-center">
                <img src={mg} className="h-5" alt="whatsapp" />
                Chat on WhatsApp
              </li>
              <li className="pt-5 hover:underline flex gap-2 items-start">
                <img src={location} className="h-5 mt-1" alt="location" />
                <span>
                  Angara Jewels Pvt.Ltd. <br />
                  2nd Floor, A-28, Vidyalaya <br />
                  Marg, Tilak Nagar, Jaipur-302004
                </span>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <span className="font-semibold text-lg text-black">ABOUT US</span>
            <ul className="font-light">
              <li className="mt-3 hover:underline">Our Story</li>
              <li className="mt-3 hover:underline">Angara Blog</li>
              <li className="mt-3 hover:underline">Angara In The Press</li>
            </ul>

            <span className="block mt-6 font-semibold text-lg text-black">
              CERTIFICATES
            </span>
            <ul className="font-light">
              <li className="mt-3 hover:underline">BIS Hallmarking</li>
              <li className="mt-3 hover:underline">IGI Certificate</li>
              <li className="mt-3 hover:underline">SGL Certificate</li>
            </ul>
          </div>

          {/* Experience */}
          <div>
            <span className="font-semibold text-lg text-black">
              EXPERIENCE ANGARA
            </span>
            <ul className="font-light">
              <li className="mt-3 hover:underline">The Angara Difference</li>
              <li className="mt-3 hover:underline">Free Shipping</li>
              <li className="mt-3 hover:underline">Payment Options</li>
              <li className="mt-3 hover:underline">Gold Rate</li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <span className="font-semibold text-lg text-black">SHOP</span>
            <ul className="font-light">
              <li className="mt-3 hover:underline">Diamond Rings</li>
              <li className="mt-3 hover:underline">Lab Grown Emerald Rings</li>
              <li className="mt-3 hover:underline">
                Lab Grown Blue Sapphire Rings
              </li>
              <li className="mt-3 hover:underline">Blue Sapphire Pendants</li>
              <li className="mt-3 hover:underline">
                Lab Grown Diamond Jewellery
              </li>
              <li className="mt-3 hover:underline">Amethyst Jewellery</li>
              <li className="mt-3 hover:underline">Aquamarine Jewellery</li>
              <li className="mt-3 hover:underline">Engagement Rings</li>
              <li className="mt-3 hover:underline">Initials Pendants</li>
              <li className="mt-3 hover:underline">Birthstone Jewellery</li>
              <li className="mt-3 hover:underline">Hoop Earrings</li>
              <li className="mt-3 hover:underline">Solitaire Rings</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-10">
          <img src={Visa} className="h-16 pt-5 pb-5 my-5" alt="paymentoption" />
          <img
            src={Master}
            className="h-16 pt-5 pb-5 my-5"
            alt="paymentoption"
          />
          <img
            src={Rupay}
            className="h-16 pt-5 pb-5 my-5"
            alt="paymentoption"
          />
          <img src={Upi} className="h-16 pt-5 pb-5 my-5" alt="paymentoption" />
          <img src={bhim} className="h-16 pt-5 pb-5 my-5" alt="paymentoption" />
        </div>
        <div className="flex justify-between items-center align-middle px-5 py-1  bg-[#f5f5f6] w-screen">
          <div className="flex gap-5 p-2">
            <img src={ind} className="h-5 rounded" alt="" />
            <p className="hover:underline cursor-pointer">INDIA</p>
          </div>
          <span className="text-gray-700 ">
            © 2025 Angara Jewels Private Limited All Rights Reserved. |
            Accessibility | Privacy Policy | T&C | Corporate
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
