import React from "react";
import Aword from "../component/aword.jsx";
import poster from "../Data/Detail.img/poster-news.webp";
import Featuredin from "../component/featuredin.jsx";
import indiatoday from "../assets/inftslider/indiatoday.svg";
import Economic from "../assets/inftslider/Economic.svg";
import CNBC from "../assets/inftslider/CNBC.svg";
import Retail from "../assets/inftslider/Retail.svg";
import News18 from "../assets/inftslider/news18.svg";
import Vougue from "../assets/inftslider/VOUGE,svg"

const News = () => {
  return (
    <div className="flex flex-col justify-center items-center align-middle">
      <img src={poster} alt="" className="w-full" />
      <h1 className="headcss">Our Recognitions</h1>
      <Aword />
      <h1 className="headcss">Featured In</h1>
      <Featuredin />
      {/*This is 1 prove*/}
      <div className="bg-gray-200 flex justify-evenly gap-10 w-full p-20 my-10">
        <img src={indiatoday} alt="" className="h-10" />
        <img src={Economic} alt="" className="h-10" />
        <img src={CNBC} alt="" className="h-10" />
        <img src={Retail} alt="" className="h-10" />
        <img src={News18} alt="" className="h-10" />
      </div>
      <div className="grid grid-cols-4 mx-60">
        <div className="p-2 flex flex-col gap-5 justify-center align-middle shadow-[0_0_1px_rgba(0,0,0,0.5)]">
          <img src={indiatoday} alt="" className="h-10" />
          <p className="text-gary-600">
            The $100M US jewellery giant Angara enters India with AI-led
            customisation and a mastery of 300years.
          </p>
          <button className="underline font-semibold text-gray-600">
            READ MORE
          </button>
        </div>
        <div className="p-2 flex flex-col gap-5 justify-center align-middle shadow-[0_0_1px_rgba(0,0,0,0.5)]">
          <img src={CNBC} alt="" className="h-10" />
          <p className="text-gary-600">
            India could contribute around 22% of global revenue in gemstone
            jewellery industry and the company aims to scale rapidly with plans
            for further expansion by 2030
          </p>
          <button className="underline font-semibold text-gray-600">
            READ MORE
          </button>
        </div>
        <div className="p-2 flex flex-col gap-5 justify-center align-middle shadow-[0_0_1px_rgba(0,0,0,0.5)]">
          <img src={Retail} alt="" className="h-10" />
          <p className="text-gary-600">
            Angara enters India, targeting Rs 1,000 crore by 2030 with
            gemstone-led, omnichannel growth.
          </p>
          <button className="underline font-semibold text-gray-600">
            READ MORE
          </button>
        </div>
        <div className="p-2 flex flex-col gap-5 justify-center align-middle shadow-[0_0_1px_rgba(0,0,0,0.5)]">
          <img src={News18} alt="" className="h-10" />
          <p className="text-gary-600">
            Akshaya Tritiya 2025: New traditions emerge as Gen Z chooses
            gemstones and platinum jewellery with personal, versatile choices.
          </p>
          <button className="underline font-semibold text-gray-600">
            READ MORE
          </button>
        </div>

      </div>
      {/*This is 1 prove*/}
      <div className="bg-gray-200 flex justify-evenly gap-10 w-full p-20 my-10">
        <img src={Vougue} alt="" className="h-10" />
        <img src={Economic} alt="" className="h-10" />
        <img src={CNBC} alt="" className="h-10" />
        <img src={Retail} alt="" className="h-10" />
        <img src={News18} alt="" className="h-10" />
      </div>
    </div>
  );
};

export default News;
