import React from "react";
import { useState } from "react";
import add from "/src/component/assets/add.svg";
import sub from "/src/component/assets/sub.svg";

const Filters = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      
    }
  };

  const [isopenJ, setIsopenJ] = useState(false);
  const handleclickJ = () => {
    setIsopenJ(!isopenJ);
  };

  const [isOpenP, setIsOpenP] = useState(false);
  const handleClickP = () => {
    setIsOpenP(!isOpenP);
  };

  const [isOpenW, setIsOpenW] = useState(false);
  const handleClickW = () => {
    setIsOpenW(!isOpenW);
  };

  const [isOpenC, setIsOpenC] = useState(false);
  const handleClickC = () => {
    setIsOpenC(!isOpenC);
  };

  const [isOpenG, setIsOpenG] = useState(false);
  const handleClickG = () => {
    setIsOpenG(!isOpenG);
  };

  const [isOpenS, setIsOpenS] = useState(false);
  const handleClickS = () => {
    setIsOpenS(!isOpenS);
  };
  return (
    <>
      <div className="m-5 ml-1">
        <h2 className="text-2xl">Filters</h2>

        <div className="cursor-pointer flex justify-between items-center gap-15 mt-6 mb-6 ml-3 pb-4 font-[rubik] shadow-[0_1px_0_rgba(0,0,0,0.1)] ">
          <p className="font-extralight text-gray-700">Jewellery Types</p>
          <img
            src={isopenJ ? sub : add}
            alt="toggle"
            className="w-5 h-5"
            onClick={handleclickJ}
          />
        </div>
        {isopenJ && (
          <div className="ml-6 text-gray-600 flex flex-col gap-2 shadow-[0_1px_0_rgba(0,0,0,0.1)] ">
            <label className="font-thin font-[rubik] text-sm">
              <input type="checkbox" value="RING" className="mr-2" />
              RINGS
            </label>
            <label className="font-thin font-[rubik] text-sm ">
              <input type="checkbox" value="NECKLACES" className="mr-2" />
              NECKLACES
            </label>
            <label className="font-thin font-[rubik] text-sm">
              <input type="checkbox" value="MANGALSUTRAS" className="mr-2" />
              MANGALSUTRAS
            </label>
            <label className="font-thin font-[rubik] text-sm">
              <input type="checkbox" value="EARRINGS" className="mr-2" />
              EARRINGS
            </label>
            <label className="font-thin font-[rubik] text-sm ">
              <input type="checkbox" value="BRACELETS" className="mr-2" />
              BRACELETS
            </label>
          </div>
        )}

        {/* Price Range Section */}
        <div className="cursor-pointer flex justify-between items-center gap-15 mt-3 mb-6 ml-3 pb-4 font-[rubik] shadow-[0_1px_0_rgba(0,0,0,0.1)] ">
          <p className=" text-gray-700">Price Range</p>
          <img
            src={isOpen ? sub : add}
            alt="toggle"
            className="w-5 h-5"
            onClick={handleClick}
          />
        </div>

        {/* Yeh content sirf tab dikhega jab isOpen true hoga */}
        {isOpen && (
          <div className="ml-6 text-gray-600 flex flex-col gap-2 shadow-[0_1px_0_rgba(0,0,0,0.1)]">
            <label className="font-medium">
              <input type="checkbox" value="10000-20000" className="mr-2" />
              10,000-20,000
            </label>
            <label className="font-medium">
              <input type="checkbox" value="20001-30000" className="mr-2" />
              20,000-30,000
            </label>
            <label className="font-medium">
              <input type="checkbox" value="30001-40000" className="mr-2" />
              30,000-40,000
            </label>
            <label className="font-medium">
              <input type="checkbox" value="40001-50000" className="mr-2" />
              40,000-50,000
            </label>
          </div>
        )}

        <div className="cursor-pointer flex justify-between items-center gap-15 mt-3 mb-6 ml-3 pb-4 font-[rubik] shadow-[0_1px_0_rgba(0,0,0,0.1)] ">
          <p className=" text-gray-700">Metal Purity</p>
          <img
            src={isOpenP ? sub : add}
            alt="toggle"
            className="w-5 h-5"
            onClick={handleClickP}
          />
        </div>

        {isOpenP && (
          <div className="ml-6 text-gray-600 flex flex-col gap-2 shadow-[0_1px_0_rgba(0,0,0,0.1)]">
            <label className="font-thin font-[rubik] text-sm">
              <input type="checkbox" value="RING" className="mr-2" />
              14K Yellow gold
            </label>
            <label className="font-thin font-[rubik] text-sm ">
              <input type="checkbox" value="NECKLACES" className="mr-2" />
              14K white gold
            </label>
            <label className="font-thin font-[rubik] text-sm">
              <input type="checkbox" value="MANGALSUTRAS" className="mr-2" />
              14K rose gold
            </label>
            <label className="font-thin font-[rubik] text-sm">
              <input type="checkbox" value="EARRINGS" className="mr-2" />
              18K Yellow gold
            </label>
            <label className="font-thin font-[rubik] text-sm ">
              <input type="checkbox" value="BRACELETS" className="mr-2" />
              18K white gold
            </label>
            <label className="font-thin font-[rubik] text-sm ">
              <input type="checkbox" value="BRACELETS" className="mr-2" />
              18K rose gold
            </label>
          </div>
        )}

        <div className="cursor-pointer flex justify-between items-center gap-15 mt-3 mb-6 ml-3  pb-4 font-[rubik] shadow-[0_1px_0_rgba(0,0,0,0.1)] ">
          <p className=" text-gray-700">Metal Weight</p>
          <img
            src={isOpenP ? sub : add}
            alt="toggle"
            className="w-5 h-5"
            onClick={handleClickW}
          />
        </div>

        {isOpenW && (
          <div className="ml-6 text-gray-600 flex flex-col gap-2 shadow-[0_1px_0_rgba(0,0,0,0.1)]">
            <label className="font-thin font-[rubik] text-sm">
              <input type="checkbox" value="RING" className="mr-2" />
              Below 2 Grams
            </label>
            <label className="font-thin font-[rubik] text-sm ">
              <input type="checkbox" value="NECKLACES" className="mr-2" />
              2-4 Grams
            </label>
            <label className="font-thin font-[rubik] text-sm">
              <input type="checkbox" value="MANGALSUTRAS" className="mr-2" />
              4-6 Grams
            </label>
            <label className="font-thin font-[rubik] text-sm">
              <input type="checkbox" value="EARRINGS" className="mr-2" />
              6-8 Grams
            </label>
            <label className="font-thin font-[rubik] text-sm ">
              <input type="checkbox" value="BRACELETS" className="mr-2" />
              8-10 Grams
            </label>
            <label className="font-thin font-[rubik] text-sm ">
              <input type="checkbox" value="BRACELETS" className="mr-2" />
              10-20 Grams
            </label>
          </div>
        )}

        <div className="cursor-pointer flex justify-between items-center gap-15 mt-3 mb-6 ml-3  pb-4 font-[rubik] shadow-[0_1px_0_rgba(0,0,0,0.1)] ">
          <p className=" text-gray-700">Carat Weight</p>
          <img
            src={isOpenC ? sub : add}
            alt="toggle"
            className="w-5 h-5"
            onClick={handleClickC}
          />
        </div>

        {isOpenC && (
          <div className="ml-6 text-gray-600 flex flex-col gap-2 shadow-[0_1px_0_rgba(0,0,0,0.1)]">
            <label className="font-thin font-[rubik] text-sm">
              <input type="checkbox" value="RING" className="mr-2" />
              0.01 - 0.50
            </label>
            <label className="font-thin font-[rubik] text-sm ">
              <input type="checkbox" value="NECKLACES" className="mr-2" />
              0.51 - 1.00
            </label>
            <label className="font-thin font-[rubik] text-sm">
              <input type="checkbox" value="MANGALSUTRAS" className="mr-2" />
              1.01 - 1.50
            </label>
            <label className="font-thin font-[rubik] text-sm">
              <input type="checkbox" value="EARRINGS" className="mr-2" />
              1.51 - 3.00
            </label>
            <label className="font-thin font-[rubik] text-sm ">
              <input type="checkbox" value="BRACELETS" className="mr-2" />
              Over 3.01
            </label>
          </div>
        )}

        <div className="cursor-pointer flex justify-between items-center gap-15 mt-3 mb-6 ml-3  pb-4 font-[rubik] shadow-[0_1px_0_rgba(0,0,0,0.1)] ">
          <p className=" text-gray-700">Gemstone</p>
          <img
            src={isOpenG ? sub : add}
            alt="toggle"
            className="w-5 h-5"
            onClick={handleClickG}
          />
        </div>

        {isOpenG && (
          <div className="ml-6 text-gray-600 flex flex-col gap-2 shadow-[0_1px_0_rgba(0,0,0,0.1)]">
            <label className="font-thin font-[rubik] text-sm">
              <input type="checkbox" value="RING" className="mr-2" />
              Amethyst
            </label>
            <label className="font-thin font-[rubik] text-sm ">
              <input type="checkbox" value="NECKLACES" className="mr-2" />
              Aquamarine
            </label>
            <label className="font-thin font-[rubik] text-sm">
              <input type="checkbox" value="MANGALSUTRAS" className="mr-2" />
              Black Onyx
            </label>
            <label className="font-thin font-[rubik] text-sm">
              <input type="checkbox" value="EARRINGS" className="mr-2" />
              Blue Sapphire
            </label>
            <label className="font-thin font-[rubik] text-sm ">
              <input type="checkbox" value="BRACELETS" className="mr-2" />
              Citrine
            </label>
            <label className="font-thin font-[rubik] text-sm ">
              <input type="checkbox" value="BRACELETS" className="mr-2" />
              Emerald
            </label>
          </div>
        )}

        <div className="cursor-pointer flex justify-between items-center gap-15 mt-3 mb-6 ml-3  pb-4 font-[rubik] shadow-[0_1px_0_rgba(0,0,0,0.1)] ">
          <p className=" text-gray-700">Gemstone Shape</p>
          <img
            src={isOpenS ? sub : add}
            alt="toggle"
            className="w-5 h-5"
            onClick={handleClickS}
          />
        </div>

        {isOpenS && (
          <div className="ml-6 text-gray-600 flex flex-col gap-2 shadow-[0_1px_0_rgba(0,0,0,0.1)]">
            <label className="font-thin font-[rubik] text-sm">
              <input type="checkbox" value="RING" className="mr-2" />
              Asscher
            </label>
            <label className="font-thin font-[rubik] text-sm ">
              <input type="checkbox" value="NECKLACES" className="mr-2" />
              Baguette
            </label>
            <label className="font-thin font-[rubik] text-sm">
              <input type="checkbox" value="MANGALSUTRAS" className="mr-2" />
              Cushion
            </label>
            <label className="font-thin font-[rubik] text-sm">
              <input type="checkbox" value="EARRINGS" className="mr-2" />
              Cushion Rectangular
            </label>
            <label className="font-thin font-[rubik] text-sm ">
              <input type="checkbox" value="BRACELETS" className="mr-2" />
              Emerald Cut
            </label>
            <label className="font-thin font-[rubik] text-sm ">
              <input type="checkbox" value="BRACELETS" className="mr-2" />
              Heart
            </label>
          </div>
        )}
      </div>
    </>
  );
};

export default Filters;
