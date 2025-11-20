import React from "react";
import { useState } from "react";
import poster from "../Data/Detail.img/poster-news.webp";
import Newyork from "../assets/inftslider/newyork.webp";
import asia from "../assets/inftslider/asia.png";
import indaiR from "../assets/inftslider/indairetailer.png";
import Tech from "../assets/inftslider/Techcricle.png";
import Zindagi from "../assets/inftslider/zindagi.png";
import angar from "../assets/inftslider/thelist.png";
import bride from "../assets/inftslider/bridetoday.png";
import actor01 from "../assets/inftslider/actor-01.png";
import actor02 from "../assets/inftslider/actor-02.png";
import actor03 from "../assets/inftslider/actor-03.png";
import actor04 from "../assets/inftslider/actor-04.png";
import actor05 from "../assets/inftslider/actor-05.png";
import actor06 from "../assets/inftslider/actor-06.png";
import actor07 from "../assets/inftslider/actor-07.png";
import actor08 from "../assets/inftslider/actor-08.png";
import GQ from "../assets/inftslider/GQ.svg";
import Bazzar from "../assets/inftslider/bazzar.svg";
import buzzfed from "../assets/inftslider/buzzfeeds.svg";
import forbus from "../assets/inftslider/forbse.svg";
import knot from "../assets/inftslider/knot.svg";
import finance from "../assets/inftslider/financilatimes.svg";
import WJS from "../assets/inftslider/WJS.svg";
import fortune from "../assets/inftslider/fortune.svg";
import TZR from "../assets/inftslider/TZR.svg";
import womenshealth from "../assets/inftslider/womenhealth.svg";
import comma from "../assets/inftslider/comma.svg";
import femina from "../assets/inftslider/femina.svg";
import indiatoday from "../assets/inftslider/indiatoday.svg";
import Economic from "../assets/inftslider/Economic.svg";
import CNBC from "../assets/inftslider/CNBC.svg";
import Retail from "../assets/inftslider/Retail.svg";
import News18 from "../assets/inftslider/news18.svg";
import Vougue from "../assets/inftslider/VOUGE.svg";
import Refine from "../assets/inftslider/Rifinary.svg";
import Featuredin from "../component/featuredin.jsx";
import Footer from "../component/footer.jsx";
import Aword from "../component/aword.jsx";

const News = () => {
  const [ishover, setishover] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const [isOpena, setIsOpena] = useState(false);
  const handleClicka = () => {
    setIsOpena(!isOpena);
  };
  const [isOpens, setIsOpens] = useState(false);
  const handleClicks = () => {
    setIsOpens(!isOpens);
  };
  const [isOpend, setIsOpend] = useState(false);
  const handleClickd = () => {
    setIsOpend(!isOpend);
  };
  const [isOpenf, setIsOpenf] = useState(false);
  const handleClickf = () => {
    setIsOpenf(!isOpenf);
  };
  const [isOpeng, setIsOpeng] = useState(false);
  const handleClickg = () => {
    setIsOpeng(!isOpeng);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="shadow-[0_0_1px_rgba(0,0,0,0.25)]">
        <img src={poster} alt="" className="w-full" />
        <h1 className="headcss">Our Recognitions</h1>
        <Aword />
        <h1 className="headcss">Featured In</h1>
        <Featuredin />

        {/* This is 1 prove */}
        <div className="bg-gray-200 flex justify-evenly gap-10 w-full p-10 my-10">
          <img src={indiatoday} alt="" className="h-10" />
          <img src={Economic} alt="" className="h-10" />
          <img src={CNBC} alt="" className="h-10" />
          <img src={Retail} alt="" className="h-10" />
          <img src={News18} alt="" className="h-10" />
        </div>
        <div className="grid grid-cols-4 mx-60">
          <div className="p-2 flex flex-col gap-5 justify-center items-center shadow-[0_0_1px_rgba(0,0,0,0.5)]">
            <img src={indiatoday} alt="" className="h-10" />
            <p className="text-gray-600">
              The $100M US jewellery giant Angara enters India with AI-led
              customisation and a mastery of 300 years.
            </p>
            <button className="underline font-semibold text-gray-600">
              <a href="https://www.indiatoday.in/pr-newswire?rkey=20250424EN68673&filter=4315">
                READ MORE
              </a>
            </button>
          </div>
          <div className="p-2 flex flex-col gap-5 justify-center items-center shadow-[0_0_1px_rgba(0,0,0,0.5)]">
            <img src={CNBC} alt="" className="h-10" />
            <p className="text-gray-600">
              India could contribute around 22% of global revenue in gemstone
              jewellery industry and the company aims to scale rapidly with
              plans for further expansion by 2030
            </p>
            <button className="underline font-semibold text-gray-600">
              <a href="https://www.youtube.com/watch?si=485Hcftg1z0WFy7_&v=fKYHsBuzGBU&feature=youtu.be">
                READ MORE
              </a>
            </button>
          </div>
          <div className="p-2 flex flex-col gap-5 justify-center items-center shadow-[0_0_1px_rgba(0,0,0,0.5)]">
            <img src={Retail} alt="" className="h-10" />
            <p className="text-gray-600">
              Angara enters India, targeting Rs 1,000 crore by 2030 with
              gemstone-led, omnichannel growth.
            </p>
            <button className="underline font-semibold text-gray-600">
              <a href="https://retail.economictimes.indiatimes.com/news/apparel-fashion/jewellery/">
                READ MORE
              </a>
            </button>
          </div>
          <div className="p-2 flex flex-col gap-5 justify-center items-center shadow-[0_0_1px_rgba(0,0,0,0.5)]">
            <img src={News18} alt="" className="h-10" />
            <p className="text-gray-600">
              Akshaya Tritiya 2025: New traditions emerge as Gen Z chooses
              gemstones and platinum jewellery with personal, versatile choices.
            </p>
            <button className="underline font-semibold text-gray-600">
              <a href="https://www.news18.com/lifestyle/akshaya-tritiya-2025-how-gen-z-gemstones-and-new-traditions-are-shaping-jewellery-choices-9315765.html">
                READ MORE
              </a>
            </button>
          </div>
        </div>

        {/* This is 2 prove */}
        <div className="bg-gray-200 flex justify-evenly gap-10 w-full p-10 my-10">
          <img src={Vougue} alt="" className="h-10" />
          <img src={Refine} alt="" className="h-10" />
          <img src={Newyork} alt="" className="h-10" />
          <img src={GQ} alt="" className="h-10" />
          <img src={Bazzar} alt="" className="h-10" />
        </div>
        <div className="grid grid-cols-4 mx-60">
          <div className="p-2 flex flex-col justify-between items-center shadow-[0_0_1px_rgba(0,0,0,0.5)]">
            <img src={Newyork} alt="" className="h-7 mb-10 w-60 mt-5" />
            <p className="text-gray-600">
              The $100M US jewellery giant Angara enters India with AI-led
              customisation and a mastery of 300 years.
            </p>
            <button className="underline font-semibold text-gray-600">
              <a href="https://www.indiatoday.in/pr-newswire?rkey=20250424EN68673&filter=4315">
                READ MORE
              </a>
            </button>
          </div>
          <div className="p-2 flex flex-col justify-between items-center shadow-[0_0_1px_rgba(0,0,0,0.5)]">
            <img src={forbus} alt="" className="h-7 mb-10 mt-4 w-60" />
            <p className="text-gray-600">
              India could contribute around 22% of global revenue in gemstone
              jewellery industry and the company aims to scale rapidly with
              plans for further expansion by 2030
            </p>
            <button className="underline font-semibold text-gray-600">
              <a href="https://www.youtube.com/watch?si=485Hcftg1z0WFy7_&v=fKYHsBuzGBU&feature=youtu.be">
                READ MORE
              </a>
            </button>
          </div>
          <div className="p-2 flex flex-col justify-between items-center shadow-[0_0_1px_rgba(0,0,0,0.5)]">
            <img src={knot} alt="" className="h-7 mb-10 mt-4 w-60" />
            <p className="text-gray-600">
              Angara enters India, targeting Rs 1,000 crore by 2030 with
              gemstone-led, omnichannel growth.
            </p>
            <button className="underline font-semibold text-gray-600">
              <a href="https://retail.economictimes.indiatimes.com/news/apparel-fashion/jewellery/">
                READ MORE
              </a>
            </button>
          </div>
          <div className="p-2 flex flex-col gap-5 justify-center items-center shadow-[0_0_1px_rgba(0,0,0,0.5)]">
            <img src={Refine} alt="" className="h-20" />
            <p className="text-gray-600">
              Akshaya Tritiya 2025: New traditions emerge as Gen Z chooses
              gemstones and platinum jewellery with personal, versatile choices.
            </p>
            <button className="underline font-semibold text-gray-600">
              <a href="https://www.news18.com/lifestyle/akshaya-tritiya-2025-how-gen-z-gemstones-and-new-traditions-are-shaping-jewellery-choices-9315765.html">
                READ MORE
              </a>
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start mt-20 gap-10">
          <div className="w-[40rem]">
            <div className="mb-5 flex gap-9">
              <div className="bg-gray-200">
                <img src={Vougue} className="h-20 w-[12rem] p-5" alt="" />
              </div>
              <div>
                <p>
                  Coloured gemstones and lab-grown diamonds are rising trends in
                  expressive, sustainable engagement rings.
                </p>
                <button className="underline font-semibold text-gray-600">
                  <a href="https://www.voguearabia.com/article/planning-to-propose-this-summer-heres-how-to-plan-one">
                    Read more
                  </a>
                </button>
              </div>
            </div>
            <div className="mb-5 flex gap-9">
              <div className="bg-gray-200">
                <img src={buzzfed} className="h-20 w-[12rem] p-5" alt="" />
              </div>
              <div>
                <p>
                  Coloured gemstones and lab-grown diamonds are rising trends in
                  expressive, sustainable engagement rings.
                </p>
                <button className="underline font-semibold text-gray-600">
                  <a href="">Read more</a>
                </button>
              </div>
            </div>
            <div className="mb-5 flex gap-9">
              <div className="bg-gray-200">
                <img src={finance} className="h-20 w-[12rem] p-5" alt="" />
              </div>
              <div>
                <p>
                  Coloured gemstones and lab-grown diamonds are rising trends in
                  expressive, sustainable engagement rings.
                </p>
                <button className="underline font-semibold text-gray-600">
                  <a href="https://www.ft.com/content/2290571b-08ae-4e77-bcd1-8b7099e50086">
                    Read more
                  </a>
                </button>
              </div>
            </div>
            <div className="mb-5 flex gap-9">
              <div className="bg-gray-200">
                <img src={WJS} className="h-20 w-[12rem] p-5" alt="" />
              </div>
              <div>
                <p>
                  Coloured gemstones and lab-grown diamonds are rising trends in
                  expressive, sustainable engagement rings.
                </p>
                <button className="underline font-semibold text-gray-600">
                  <a href="https://www.wsj.com/style/fashion/white-diamonds-lose-cachet-colored-engagement-rings-a-guide-801dd761?mod=style_lead_story">
                    Read more
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="w-[40rem]">
            <div className="mb-5 flex gap-9">
              <div className="bg-gray-200">
                <img src={fortune} className="h-20 w-[12rem] p-5" alt="" />
              </div>
              <div>
                <p>
                  Coloured gemstones and lab-grown diamonds are rising trends in
                  expressive, sustainable engagement rings.
                </p>
                <button className="underline font-semibold text-gray-600">
                  <a href="https://fortune.com/2024/06/05/lab-grown-diamonds-price-sunk-6-percent/">
                    Read more
                  </a>
                </button>
              </div>
            </div>
            <div className="mb-5 flex gap-9">
              <div className="bg-gray-200">
                <img src={TZR} className="h-20 w-[12rem] p-5" alt="" />
              </div>
              <div>
                <p>
                  Coloured gemstones and lab-grown diamonds are rising trends in
                  expressive, sustainable engagement rings.
                </p>
                <button className="underline font-semibold text-gray-600">
                  <a href="https://www.thezoereport.com/fashion/green-color-trend">
                    Read more
                  </a>
                </button>
              </div>
            </div>
            <div className="mb-5 flex gap-9">
              <div className="bg-gray-200">
                <img src={womenshealth} className="h-20 w-[12rem] p-5" alt="" />
              </div>
              <div>
                <p>
                  Coloured gemstones and lab-grown diamonds are rising trends in
                  expressive, sustainable engagement rings.
                </p>
                <button className="underline font-semibold text-gray-600">
                  <a href="https://www.cnbctv18.com/business/us-jewellery-brand-angara-enters-indian-market-with-customisable-designs-19594398.htm">
                    Read more
                  </a>
                </button>
              </div>
            </div>
            <div className="mb-5 flex gap-9">
              <div className="bg-gray-200">
                <img src={CNBC} className="h-20 w-[12rem] p-5" alt="" />
              </div>
              <div>
                <p>
                  Coloured gemstones and lab-grown diamonds are rising trends in
                  expressive, sustainable engagement rings.
                </p>
                <button className="underline font-semibold text-gray-600">
                  <a href="">Read more</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* This is 3 prove */}
        <div
          className="bg-gray-100 flex justify-between gap-10 w-full my-10 p-10 text-center"
          onMouseEnter={() => setishover(true)}
          onMouseLeave={() => setishover(false)}
        >
          <img src={comma} alt="" className="h-10" />
          {ishover && (
            <div className="flex justify-center flex-col">
              <button>{"<<"}</button>
            </div>
          )}
          <div class="p-16 text-center">
            <p class="text-lg">
              Everything is so gorgeous, modern, and sleekly designed. My heart
              says 'yes, yes' to their necklaces, earrings and bracelets
            </p>
            <p class="text-sm font-semibold mt-6">-PJ Gach, SPY</p>
          </div>
          {ishover && (
            <div className="flex justify-center flex-col">
              <button>{">>"}</button>
            </div>
          )}
          <img src={comma} alt="" className="h-10" />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start mt-20 gap-10">
          <div className="w-[40rem]">
            <div className="mb-5 flex gap-9">
              <div className="bg-gray-200">
                <img src={angar} className="h-20 w-[15rem] px-2" alt="" />
              </div>
              <div>
                <p>
                  Coloured gemstones and lab-grown diamonds are rising trends in
                  expressive, sustainable engagement rings.
                </p>
                <button className="underline font-semibold text-gray-600">
                  <a href="https://www.indianjeweller.in/Indian-Jewellery-News/15583/angara-to-launch-first-india-store-by-2026,-eyes-rs-1,000-cr-revenue-by-2030">
                    Read more
                  </a>
                </button>
              </div>
            </div>
            <div className="mb-5 flex gap-9">
              <div className="bg-gray-200">
                <img src={asia} className="w-[15rem] pt-6 p-2" alt="" />
              </div>
              <div>
                <p>
                  Coloured gemstones and lab-grown diamonds are rising trends in
                  expressive, sustainable engagement rings.
                </p>
                <button className="underline font-semibold text-gray-600">
                  <a href="https://www.lifestyleasia.com/ind/whats-on/events-whats-on/rakhi-gift-ideas-for-sister-bags-jewellery-accessories/">
                    Read more
                  </a>
                </button>
              </div>
            </div>
            <div className="mb-5 flex gap-9">
              <div className="bg-gray-200">
                <img src={Tech} className="pt-5 w-[15rem] p-2" alt="" />
              </div>
              <div>
                <p>
                  Coloured gemstones and lab-grown diamonds are rising trends in
                  expressive, sustainable engagement rings.
                </p>
                <button className="underline font-semibold text-gray-600">
                  <a href="https://www.techcircle.in/2025/07/25/how-this-jeweller-is-using-digital-tech-to-bring-bespoke-back-to-jewellery">
                    Read more
                  </a>
                </button>
              </div>
            </div>
            <div className="mb-5 flex gap-9">
              <div className="bg-gray-200">
                <img src={femina} className="h-20 w-[12rem] p-2" alt="" />
              </div>
              <div>
                <p>
                  Coloured gemstones and lab-grown diamonds are rising trends in
                  expressive, sustainable engagement rings.
                </p>
                <button className="underline font-semibold text-gray-600">
                  <a href="https://www.femina.in/relationships/friends-and-family/looking-for-last-minute-raksha-bandhan-gifts-heres-what-you-can-buy-rn-287663.html">
                    Read more
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="w-[40rem]">
            <div className="mb-5 flex gap-9">
              <div className="bg-gray-200">
                <img src={indaiR} className="pt-6 w-[15rem] p-2" alt="" />
              </div>
              <div>
                <p>
                  Coloured gemstones and lab-grown diamonds are rising trends in
                  expressive, sustainable engagement rings.
                </p>
                <button className="underline font-semibold text-gray-600">
                  <a href="https://www.indianretailer.com/interview/retail-people/new-commerce/us-based-fine-jewelry-brand-angara-launch-first-india-store?__cf_chl_tk=7xipAO1YgeXC_vfcm8kgCuPCyfZOUV_m6y.j.48qplk-1753346725-1.0.1.1-ZvyveEyk1CuOJUtjxNfTZ2sN9X.z4aRhXLI1BTLsV6U">
                    Read more
                  </a>
                </button>
              </div>
            </div>
            <div className="mb-5 flex gap-9">
              <div className="bg-gray-200">
                <img src={Zindagi} className="pt-6 w-[15rem] p-2" alt="" />
              </div>
              <div>
                <p>
                  Coloured gemstones and lab-grown diamonds are rising trends in
                  expressive, sustainable engagement rings.
                </p>
                <button className="underline font-semibold text-gray-600">
                  <a href="https://www.herzindagi.com/society-culture/friendship-day-gift-ideas-unique-options-to-make-your-bestie-feel-valued-article-1037129">
                    Read more
                  </a>
                </button>
              </div>
            </div>
            <div className="mb-5 flex gap-9">
              <div className="bg-gray-200">
                <img src={News18} className="h-20 w-[15rem] px-2 pb-3" alt="" />
              </div>
              <div>
                <p>
                  Coloured gemstones and lab-grown diamonds are rising trends in
                  expressive, sustainable engagement rings.
                </p>
                <button className="underline font-semibold text-gray-600">
                  <a href="https://www.news18.com/lifestyle/rakshabandhan-gifting-guide-2025-must-haves-for-this-season-9477047.html">
                    Read more
                  </a>
                </button>
              </div>
            </div>
            <div className="mb-5 flex gap-9">
              <div className="bg-gray-200">
                <img src={bride} className="h-20 w-[15rem] " alt="" />
              </div>
              <div>
                <p>
                  Coloured gemstones and lab-grown diamonds are rising trends in
                  expressive, sustainable engagement rings.
                </p>
                <button className="underline font-semibold text-gray-600">
                  <a href="https://www.bridestoday.in/accessories/story/the-jewellery-you-should-buy-with-your-first-salary-because-you-deserve-it-1245457-2025-07-16">
                    Read more
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*ON RED CARPET*/}
        <h1 className="headcss">On the Red Carpet</h1>
        <div className="mb-20">
          <div className="flex justify-center items-center gap-5 my-10 mb-20">
            <div className="text-center">
              <img src={actor01} alt="Carrie Underwood on red carpet" />
              <p className="text-[13px] mt-2">
                Carrie Underwood at the 2022
                <button onClick={handleClick}>...</button>{" "}
                {isOpen && "Country Music Awards"}
              </p>
            </div>
            <div className="text-center">
              <img src={actor02} alt="Zuri Hall on red carpet" />
              <p className="text-[13px] mt-2">
                Zuri Hall at the 2023 SAG Awards
              </p>
            </div>
            <div className="text-center">
              <img src={actor03} alt="Meg Donnelly on red carpet" />
              <p className="text-[13px] mt-2">
                Meg Donnelly at the Season 3 Premiere
                <button onClick={handleClicka}>...</button>{" "}
                {isOpena && "of High School Musical"}
              </p>
            </div>
            <div className="text-center">
              <img src={actor04} alt="Natasha Rothwell on red carpet" />
              <p className="text-[13px] mt-2">
                Natasha Rothwell at the 2022 Emmy
                <button onClick={handleClicks}>...</button>{" "}
                {isOpens && "Awards"}
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-5 my-10">
            <div className="text-center">
              <img src={actor05} alt="Serayah on red carpet" />
              <p className="text-[13px] mt-2">
                Serayah at the 2023 Grammy Awards
              </p>
            </div>
            <div className="text-center">
              <img src={actor06} alt="Carrie Underwood on red carpet" />
              <p className="text-[13px] mt-2">
                Carrie Underwood at the 2022 BMI
                <button onClick={handleClickd}>...</button>{" "}
                {isOpend && "Country Awards"}
              </p>
            </div>
            <div className="text-center">
              <img src={actor07} alt="Milauna Jackson on red carpet" />
              <p className="text-[13px] mt-2">
                Milauna Jackson at the 2022 Toronto
                <button onClick={handleClickf}>...</button>{" "}
                {isOpenf && "Film Festival"}
              </p>
            </div>
            <div className="text-center">
              <img src={actor08} alt="Natalie Morales on red carpet" />
              <p className="text-[13px] mt-2">
                Natalie Morales at the 2022 Toronto Film
                <button onClick={handleClickg}>...</button>{" "}
                {isOpeng && " Festival"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default News;
