import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/footer";
import star from "../assets/star.svg";
import compare from "../assets/compare.png";
import gemstone from "../Data/Detail.img/Qulity.webp";
import cartat from "../Data/Detail.img/carat-weight.webp";
import metalrosegold from "../Data/Detail.img/metal-rose-Gold.webp";
import metalgold from "../Data/Detail.img/metal-gold.webp";
import metalsilver from "../Data/Detail.img/metal-silver.webp";
import IGI from "../Data/Detail.img/IGI.webp";
import SGL from "../Data/Detail.img/SGL.webp";
import fav from "../component/assets/non-fav.svg";
import trust2 from "../data/img.home/trust02.png";
import trust3 from "../data/img.home/trust03.png";
import trust4 from "../data/img.home/trust04.png";
import trust5 from "../data/img.home/trust05.png";
import trust6 from "../data/img.home/trust06.png";
import add from "../component/assets/add.svg";
import sub from "../component/assets/sub.svg";
import Infinite from "../component/infinite.jsx";
import products from "../Data/products.json"; // ✅ Product list
import vogue from "../assets/inftslider/VOUGE.svg";
import Economic from "../assets/inftslider/Economic.svg";
import india from "../assets/inftslider/indiatoday.svg";
import cnbc from "../assets/inftslider/CNBC.svg";
import retail from "../assets/inftslider/Retail.svg";
import news from "../assets/inftslider/news18.svg";
import refine from "../assets/inftslider/Rifinary.svg";
import forbos from "../assets/inftslider/forbse.svg";
import hello from "../assets/inftslider/hello.svg";
import austrelia from "../assets/inftslider/Australia.svg";
import by from "../assets/inftslider/byrdie.svg";
import knot from "../assets/inftslider/knot.svg";
import prevent from "../assets/inftslider/prevention.svg";
import mideum from "../assets/inftslider/Medium.svg";
import { motion, AnimatePresence } from "framer-motion";

function PDetail() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const [isOpenB, setIsOpenB] = useState(false);
  const handleClick1 = () => {
    setIsOpenB(!isOpenB);
  };
  const [isOpenM, setIsOpenM] = useState(false);
  const handleClick2 = () => {
    setIsOpenM(!isOpenM);
  };
  const [Review, setReview] = useState(false);
  const openner = () => {
    setReview(!Review);
  };
  const [Question, setQuestion] = useState(false);
  const Qopenner = () => {
    setQuestion(!Question);
  };
  // const [productDetail, setProductDetail] = useState(null);

  // // ✅ Load product detail from localStorage
  // useEffect(() => {
  //   const saved = localStorage.getItem("productDetail");
  //   if (saved) {
  //     const parsed = JSON.parse(saved);
  //     const foundProduct = products.find((p) => p.id === parsed.id);
  //     if (foundProduct) setProductDetail(foundProduct);
  //   }
  // }, []);

  // if (!productDetail) {
  //   return (
  //     <div className="p-5 text-center text-gray-500">
  //       No product selected yet.
  //     </div>
  //   );
  // }

  const submited = () => {
    alert("The Review had been succesfully registered");
  };

  return (
    <div className=" flex flex-col items-center px-80 w-screen ">
      <div>
        <span className="flex items-start">
          HOME / JEWELLERY / Product.name
        </span>
        <div className="flex flex-col justify-center items-center align-middle">
          <div className="flex justify-center align-middle items-center px-60 w-screen">
            <div className="w-8/12">
              <img src="react" alt="this has to fill space by images" />
            </div>
            <div className="w-4/12">
              {/*This is name of the product */}
              <span>
                Emerald-Cut London Blue Topaz Solitaire Pendant with Diamond
              </span>
              {/*This is review */}
              <div className="flex align-middle items-center">
                <img src={star} className="h-5" alt="" />
                <img src={star} className="h-5" alt="" />
                <img src={star} className="h-5" alt="" />
                <img src={star} className="h-5" alt="" />
                <img src={star} className="h-5" alt="" />
                <span className="shadow-[0_2px_0_0_rgba(0,0,0,1)] ml-3">
                  (0) Reviews
                </span>
              </div>
              {/*This is for Mrp */}
              <div className="flex items-end mt-2">
                <span className="text-2xl mr-2">₹39,468</span>
                <span className="text-xl text-gray-600 line-through mr-2">
                  ₹41,545
                </span>
                <span className="text-sm text-gray-600">
                  (MRP incl. of all taxes)
                </span>
              </div>
              {/* this is dicount option */}
              <div className="text-green-600 mt-2 text-sm ">
                Exclusive Offer:Flat 5% Off
              </div>
              {/*This is filter of light */}
              <div className="flex mt-5 flex-col">
                {/*THis is types and diffrent qalities */}
                <div className="flex flex-col  shadow-[0_0_0_1px_rgba(0,0,0,0.25)] p-5">
                  <div className="flex justify-between">
                    <span>GemStone Quality : as product</span>
                    <div className="flex gap-2">
                      <button>
                        <img src={compare} alt="compare" className="h-5" />
                      </button>
                      <p className="text-sm">Compare</p>
                    </div>
                  </div>
                  <div className="flex gap-7 items-center mt-5">
                    <div className="flex flex-col items-center  text-gray-600 cursor-pointer">
                      <img
                        src={gemstone}
                        className="h-11 shadow-[0_0_0_1px_rgba(0,0,0,0.10)] p-2"
                        alt=""
                      />
                      <p className="text-xs">F-G VS</p>
                    </div>
                    <div className="flex flex-col items-center  text-gray-600 cursor-pointer">
                      <img
                        src={gemstone}
                        className="h-11 shadow-[0_0_0_1px_rgba(0,0,0,0.10)] p-2"
                        alt=""
                      />
                      <p className="text-xs">E VVS</p>
                    </div>
                    <div className="flex flex-col items-center  text-gray-600 cursor-pointer">
                      <img
                        src={gemstone}
                        className="h-11 shadow-[0_0_0_1px_rgba(0,0,0,0.10)] p-2"
                        alt=""
                      />
                      <p className="text-xs">D VVS</p>
                    </div>
                  </div>
                </div>
                {/*This is Total Carat */}
                <div className="flex flex-col shadow-[0_0_0_1px_rgba(0,0,0,0.25)] p-5">
                  <div className="flex justify-between">
                    <span>
                      Total carat Weight: <>1 carats</>
                    </span>
                    <div className="flex gap-2">
                      <button>
                        <img src={compare} alt="compare" className="h-5" />
                      </button>
                      <p className="text-sm">Compare</p>
                    </div>
                  </div>
                  {/*This is sub img  */}
                  <div className="flex gap-7 items-center mt-5">
                    <div className="flex flex-col items-center  text-gray-600 cursor-pointer ">
                      <img
                        src={cartat}
                        className="flex  h-16 focus:shadow-[0_0_0_1px_rgba(0,0,0,0.5)] shadow-[0_0_0_1px_rgba(0,0,0,0.10)] gap-5 p-2"
                        alt="carat 1"
                      />
                      <p className="text-sm">1 CTS</p>
                    </div>
                    <div className="flex flex-col items-center  text-gray-600 cursor-pointer ">
                      <img
                        src={cartat}
                        className="flex  h-16 focus:shadow-[0_0_0_1px_rgba(0,0,0,0.5)] shadow-[0_0_0_1px_rgba(0,0,0,0.10)] gap-5 p-2"
                        alt="carat 3"
                      />
                      <p className="text-sm">3 CTS</p>
                    </div>
                    <div className="flex flex-col items-center  text-gray-600 cursor-pointer ">
                      <img
                        src={cartat}
                        className="flex  h-16 focus:shadow-[0_0_0_1px_rgba(0,0,0,0.5)] shadow-[0_0_0_1px_rgba(0,0,0,0.10)] gap-5 p-2"
                        alt="carat 5"
                      />
                      <p className="text-sm">5 CTS</p>
                    </div>
                    <div className="flex flex-col items-center  text-gray-600 cursor-pointer ">
                      <img
                        src={cartat}
                        className="flex  h-16 focus:shadow-[0_0_0_1px_rgba(0,0,0,0.5)] shadow-[0_0_0_1px_rgba(0,0,0,0.10)] gap-5 p-2"
                        alt="carat 7"
                      />
                      <p className="text-sm">7 CTS</p>
                    </div>
                  </div>
                </div>
                {/*This is Metal Type */}
                <div className="flex flex-col shadow-[0_0_0_1px_rgba(0,0,0,0.25)] p-5">
                  <div className="flex justify-between">
                    <span>
                      Metal Type :<>14K Yellow Gold</>
                    </span>
                    <div className="flex gap-2">
                      <button>
                        <img src={compare} alt="compare" className="h-5" />
                      </button>
                      <p className="text-sm">Compare</p>
                    </div>
                  </div>
                  <div className="flex gap-7 items-center mt-5">
                    <div className="flex flex-col items-center  text-gray-600 cursor-pointer">
                      <img
                        className="flex  h-12 focus:shadow-[0_0_0_1px_rgba(0,0,0,0.5)] shadow-[0_0_0_1px_rgba(0,0,0,0.10)] gap-5 p-2"
                        src={metalsilver}
                        alt=""
                      />
                      <p className="text-sm">White Glod</p>
                    </div>
                    <div className="flex flex-col items-center  text-gray-600 cursor-pointer">
                      <img
                        className="flex  h-12 focus:shadow-[0_0_0_1px_rgba(0,0,0,0.5)] shadow-[0_0_0_1px_rgba(0,0,0,0.10)] gap-5 p-2"
                        src={metalgold}
                        alt=""
                      />
                      <p className="text-sm">Yellow Gold</p>
                    </div>
                    <div className="flex flex-col items-center  text-gray-600 cursor-pointer">
                      <img
                        className="flex  h-12 focus:shadow-[0_0_0_1px_rgba(0,0,0,0.5)] shadow-[0_0_0_1px_rgba(0,0,0,0.10)] gap-5 p-2"
                        src={metalrosegold}
                        alt=""
                      />
                      <p className="text-sm">Rose Gold</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <span className="font-normal ">CERTIFICATE ADD ONS</span>
                <div className="flex gap-5 mt-2">
                  <div className="flex shadow-[0_0_0_1px_rgba(0,0,0,0.25)] p-2 gap-5">
                    <div className="flex ">
                      <input type="radio" name="IGI" />
                      <img src={IGI} className="h-12" alt="" />
                    </div>
                    <div>
                      <p className="font-semibold">+₹1,000</p>
                      <p className="font-semibold">+3 days</p>
                    </div>
                  </div>
                  <div className="flex shadow-[0_0_0_1px_rgba(0,0,0,0.25)] p-2 gap-5">
                    <div className="flex ">
                      <input type="radio" name="SGL" />
                      <img src={SGL} className="h-12" alt="" />
                    </div>
                    <div>
                      <p className="font-semibold">+₹500</p>
                      <p className="font-semibold">+1 days</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*This is button section*/}
              <div className="flex justify-between gap-10 mt-5 items-center hover:underline">
                <button className="shadow-[0_0_0_1px_rgba(0,0,0,1)] hover:shadow-[0_0_0_2px_rgba(0,0,0,1)] p-3">
                  <img src={fav} alt="" />
                </button>
                <div className="flex justify-between w-xl bg-black p-2 gap-20 ">
                  <div className="flex justify-between items-center text-white">
                    <span className="text-xl flex font-semibold items-center text-[20px] p-2">
                      ₹1,10,994
                      <p className="line-through text-[10px]">₹1,16,836</p>
                    </span>
                  </div>
                  <p className="font-bold text-lg pt-2 text-white ">
                    ADD TO BAG
                  </p>
                </div>
              </div>
              {/*This is some info*/}
              <span className="flex justify-center mt-5 gap-1 text-sm">
                Order <p className="text-yellow-700 font-medium text-sm">Now</p>
                and get it by
                <p className="text-yellow-700 font-medium text-sm">
                  Web,24th Sept
                </p>
              </span>
              {/* This is Archivement */}
              <div className="flex ">
                <div className="flex flex-col gap-5 text-gray-600 text-xs font-medium mt-5 ">
                  <img
                    src={trust2}
                    className="h-10 w-10 rounded-xl bg-gray-700 border-gray-700"
                    alt=""
                  />
                  <p className="text-black flex justify-center items-center align-middle">
                    BIS HallMark
                  </p>
                </div>
                <div className="flex flex-col gap-5 text-gray-600 text-xs font-medium mt-5 ">
                  <img
                    src={trust3}
                    className="h-10 w-10 rounded-xl bg-gray-700 border-gray-700"
                    alt=""
                  />
                  <p className="text-black flex justify-center items-center align-middle">
                    Angara Certified
                  </p>
                </div>
                <div className="flex flex-col gap-5 text-gray-600 text-xs font-medium mt-5 ">
                  <img
                    src={trust4}
                    className="h-10 w-10 rounded-xl bg-gray-700 border-gray-700"
                    alt=""
                  />
                  <p className="text-black flex justify-center items-center align-middle">
                    Rated 4.7/5 Globally
                  </p>
                </div>
                <div className="flex flex-col gap-5 text-gray-600 text-xs font-medium mt-5 ">
                  <img
                    src={trust6}
                    className="h-10 w-10 rounded-xl bg-gray-700 border-gray-700"
                    alt=""
                  />
                  <p className="text-black flex justify-center items-center align-middle">
                    15 Days Returns
                  </p>
                </div>
                <div className="flex flex-col gap-5 text-gray-600 text-xs font-medium mt-5 ">
                  <img
                    src={trust5}
                    className="h-10 w-10 rounded-xl bg-gray-700 border-gray-700"
                    alt=""
                  />
                  <p className="text-black flex justify-center items-center align-middle">
                    lifetime Exchange & buy back
                  </p>
                </div>
                <div></div>
              </div>
              <div className="flex justify-between items-center gap-15 mt-3 mb- ml-3 p-4 bg-gray-100 font-[rubik] shadow-[0_0_0_1px_rgba(0,0,0,0.5)]">
                <p className=" text-gray-700">Product Detail</p>
                <img
                  src={isOpen ? sub : add}
                  alt="toggle"
                  className="cursor-pointer w-5 h-5"
                  onClick={handleClick}
                />
              </div>
              {/* Yeh content sirf tab dikhega jab isOpen true hoga */}
              {isOpen && (
                <div className="ml-6 text-gray-600 flex flex-col gap-2 shadow-[0_1px_0_rgba(0,0,0,0.1)]">
                  <span className="text-sm">
                    This 14kt white gold tennis bracelet looks classic with a
                    distinctive edge. It is embellished with glittering
                    lab-grown diamonds that are secured in a unique prong
                    setting.
                  </span>
                </div>
              )}
              <div className="flex justify-between items-center gap-15  mb- ml-3 p-4 bg-gray-100 font-[rubik] shadow-[0_0_0_1px_rgba(0,0,0,0.5)]">
                <p className=" text-gray-700">Price Break Up</p>
                <img
                  src={isOpenB ? sub : add}
                  alt="toggle"
                  className="cursor-pointer w-5 h-5"
                  onClick={handleClick1}
                />
              </div>
              {/* Yeh content sirf tab dikhega jab isOpen true hoga */}
              {isOpenB && (
                <div className="ml-6 text-gray-600 flex flex-col gap-2 shadow-[0_1px_0_rgba(0,0,0,0.1)]">
                  <span className="text-sm">
                    This 14kt white gold tennis bracelet looks classic with a
                    distinctive edge. It is embellished with glittering
                    lab-grown diamonds that are secured in a unique prong
                    setting.
                  </span>
                </div>
              )}
              <div className="flex justify-between items-center gap-15 mb- ml-3 p-4 bg-gray-100 font-[rubik] shadow-[0_0_0_1px_rgba(0,0,0,0.5)]">
                <p className=" text-gray-700">Manufacturer & Origin</p>
                <img
                  src={isOpenM ? sub : add}
                  alt="toggle"
                  className="cursor-pointer w-5 h-5"
                  onClick={handleClick2}
                />
              </div>
              {/* Yeh content sirf tab dikhega jab isOpen true hoga */}
              {isOpenM && (
                <div className="ml-6 text-gray-600 flex flex-col gap-2 shadow-[0_1px_0_rgba(0,0,0,0.1)]">
                  <span className="text-sm">
                    This 14kt white gold tennis bracelet looks classic with a
                    distinctive edge. It is embellished with glittering
                    lab-grown diamonds that are secured in a unique prong
                    setting.
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="headcss mb-5">
            YOU MAY ALSO LIKE
            <span> we have to make it </span>
          </div>

          <div
            className="relative max-w-[100rem] p-6 overflow-hidden"
            onMouseOver={(e) =>
              (e.currentTarget.querySelector(
                ".marquee"
              ).style.animationPlayState = "paused")
            }
            onMouseOut={(e) =>
              (e.currentTarget.querySelector(
                ".marquee"
              ).style.animationPlayState = "running")
            }
          >
            <span className="headcss mb-15">Featured In</span>
            <div className="pointer-events-none absolute top-0 left-0 h-full w-50 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="pointer-events-none absolute top-0 right-0 h-full w-50 bg-gradient-to-l from-white to-transparent z-10"></div>
            <Link to="/AngaraNews">
              <div className="flex gap-20 marquee">
                <img className="h-8" src={vogue} alt="" />
                <img className="h-8" src={Economic} alt="" />
                <img className="h-8" src={india} alt="" />
                <img className="h-8" src={cnbc} alt="" />
                <img className="h-8" src={retail} alt="" />
                <img className="h-8" src={news} alt="" />
                <img className="h-8" src={refine} alt="" />
                <img className="h-8" src={forbos} alt="" />
                <img className="h-8" src={hello} alt="" />
                <img className="h-8" src={austrelia} alt="" />
                <img className="h-8" src={by} alt="" />
                <img className="h-8" src={knot} alt="" />
                <img className="h-8" src={prevent} alt="" />
                <img className="h-8" src={mideum} alt="" />
                <img className="h-8" src={vogue} alt="" />
                <img className="h-8" src={Economic} alt="" />
                <img className="h-8" src={india} alt="" />
                <img className="h-8" src={cnbc} alt="" />
                <img className="h-8" src={retail} alt="" />
                <img className="h-8" src={news} alt="" />
                <img className="h-8" src={refine} alt="" />
                <img className="h-8" src={forbos} alt="" />
                <img className="h-8" src={hello} alt="" />
                <img className="h-8" src={austrelia} alt="" />
                <img className="h-8" src={by} alt="" />
                <img className="h-8" src={knot} alt="" />
                <img className="h-8" src={prevent} alt="" />
                <img className="h-8" src={mideum} alt="" />
              </div>
            </Link>
          </div>
          {/* Question no. */}
          <div className="flex flex-col p-10 justify-around items-center">
            <span className="headcss">Verified Customer Reviews</span>
            <div className="flex p-10 justify-around items-center">
              <div className="flex align-middle h-5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
              <span>2 Reviews</span>
            </div>
            <button
              className="font-light hover:shadow-[0_0_0_1px_rgba(0,0,0,1)] shadow-[0_0_0_1px_rgba(0,0,0,0.25)] px-10 my-5 py-2"
              onClick={openner}
            >
              Write A Review
            </button>
            {Review && (
              <motion.form
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="w-[85rem] shadow-[0_0_15px_0_rgba(0,0,0,0.25)] p-6"
              >
                <div className="flex gap-5 flex-col">
                  <span className="font-light text-gray-700">
                    WRITE A REVIEW
                  </span>
                  <span className="font-light text-gray-700 text-[15px]">
                    * Indicates a required field
                  </span>
                  <div className="flex items-center gap-2">
                    <span>Score:</span>
                    <img src={star} className="h-4" alt="stars" />
                    <img src={star} className="h-4" alt="stars" />
                    <img src={star} className="h-4" alt="stars" />
                    <img src={star} className="h-4" alt="stars" />
                    <img src={star} className="h-4" alt="stars" />
                  </div>
                  {/*Input of title */}
                  <div className="flex flex-col gap-2">
                    <span className="font-light text-gray-700">*Title:</span>
                    <input
                      placeholder="Enter Title Here"
                      className="border p-3"
                      required
                    ></input>
                  </div>
                  {/*input of review */}
                  <div className="flex flex-col gap-2">
                    <span className="font-light text-gray-700">*Review:</span>
                    <input
                      placeholder="Enter Review Here"
                      className="border p-5"
                      required
                    ></input>
                  </div>
                  {/*User name and Email */}
                  <div className="flex justify-between gap-4 items-center">
                    <div className="flex flex-col gap-2 w-1/2">
                      <span className="font-light text-gray-700">
                        *Use your name:
                      </span>
                      <input
                        placeholder="Enter Title Here"
                        className="border p-2"
                        required
                      ></input>
                    </div>
                    <div className="flex flex-col w-1/2 gap-2">
                      <span className="font-light text-gray-700">*Email:</span>
                      <input
                        placeholder="Enter Title Here"
                        className="border p-2"
                        type="Email"
                        required
                      ></input>
                    </div>
                  </div>
                  <button
                    className="bg-black text-white w-1/6 p-2 font-bold tracking-widest"
                    type="submit"
                    onClick={submited}
                  >
                    Post
                  </button>
                </div>
              </motion.form>
            )}

            <button
              className="font-light hover:shadow-[0_0_0_1px_rgba(0,0,0,1)] shadow-[0_0_0_1px_rgba(0,0,0,0.25)] px-10 my-5 py-2"
              onClick={Qopenner}
            >
              Ask A Question
            </button>
            {Question && (
              <motion.form
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="w-[85rem] shadow-[0_0_15px_0_rgba(0,0,0,0.25)] p-6"
              >
                <div className="flex gap-5 flex-col">
                  <span className="font-light text-gray-700">
                    ASK A QUESTION
                  </span>
                  <span className="font-light text-gray-700 text-[15px]">
                    * Indicates a required field
                  </span>
                  {/*Input of Question */}
                  <div className="flex flex-col gap-2">
                    <span className="font-light text-gray-700">*Question:</span>
                    <input
                      placeholder="Enter Question Here"
                      className="border p-3"
                      required
                    ></input>
                  </div>
                  {/*User name and Email */}
                  <div className="flex justify-between gap-4 items-center">
                    <div className="flex flex-col gap-2 w-1/2">
                      <span className="font-light text-gray-700">
                        *Use your name:
                      </span>
                      <input
                        placeholder="Enter Title Here"
                        className="border p-2"
                        required
                      ></input>
                    </div>
                    <div className="flex flex-col w-1/2 gap-2">
                      <span className="font-light text-gray-700">*Email:</span>
                      <input
                        placeholder="Enter Title Here"
                        className="border p-2"
                        type="Email"
                        required
                      ></input>
                    </div>
                  </div>
                  <button
                    className="bg-black text-white w-1/6 p-2 font-bold tracking-widest"
                    type="submit"
                    onClick={submited}
                  >
                    Post
                  </button>
                </div>
              </motion.form>
            )}
          </div>

          <div className="flex flex-col justify-start w-[99rem]">
            <span className="shadow-[0_1px_0_0_rgba(0,0,0,0.25)] font-semibold text-lg p-4">Reviews</span>
          </div>
          <div className="recently-viewd">recentlyviewed</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default PDetail;
