import { useState, useEffect } from "react";
import productsData from "../Data/products.json";
import React from "react";
import Register from "../component/register";
import Gif1 from "../data/img.home/necklace.webp";
import Gif2 from "../data/img.home/earrings.webp";
import Gif3 from "../data/img.home/rings.webp";
import Gif4 from "../data/img.home/bracelets.webp";
import Gif5 from "../data/img.home/blue-sapphire-pendants.webp";
import Gif6 from "../data/img.home/necklaces.jpg";
import wedding from "../data/img.home/wedding.webp";
import engagement from "../data/img.home/engagement.webp";
import jan from "../data/img.home/january.jpg";
import feb from "../data/img.home/february.jpg";
import mar from "../data/img.home/march.jpg";
import apr from "../data/img.home/april.jpg";
import may from "../data/img.home/may.jpg";
import jun from "../data/img.home/june.jpg";
import jul from "../data/img.home/july.jpg";
import aug from "../data/img.home/august.jpg";
import sep from "../data/img.home/september.jpg";
import oct from "../data/img.home/october.jpg";
import nov from "../data/img.home/november.jpg";
import dec from "../data/img.home/december.jpg";
import green from "../data/img.home/green-ring.webp";
import purple from "../data/img.home/purple-ring.webp";
import ruby from "../data/img.home/ruby-ring.webp";
import trust1 from "../data/img.home/trust01.png";
import trust2 from "../data/img.home/trust02.png";
import trust3 from "../data/img.home/trust03.png";
import trust4 from "../data/img.home/trust04.png";
import trust5 from "../data/img.home/trust05.png";
import trust6 from "../data/img.home/trust06.png";
import trust7 from "../data/img.home/trust07.png";
import channel01 from "../Data/img.home/channel01.svg";
import channel02 from "../Data/img.home/channel02.svg";
import channel03 from "../Data/img.home/channel03.jpg";
import interveiw1 from "../Data/img.home/thumbnail01.webp";
import interveiw2 from "../Data/img.home/thumbnail02.webp";
import interveiw3 from "../Data/img.home/thumbnail03.webp";
import Review1 from "../Data/img.home/review01.webp";
import Review2 from "../Data/img.home/review02.webp";
import Review3 from "../Data/img.home/review03.webp";
import Reviewr from "../Data/img.home/reviewrate.jpg";
import Footer from "../component/footer.jsx";
import ImageSlider from "../component/Imageslider.jsx";
import Cards from "../component/favcard.jsx";

const Home = () => {
  const [favorite, setfavorite] = useState([]);

  useEffect(() => {
    // filter only rings
    const filtered = productsData.filter((p) => p.categorie === "favorite");
    setfavorite(filtered);
  }, []);

  const [great, setgreat] = useState([]);

  useEffect(() => {
    // filter only rings
    const filtered = productsData.filter((p) => p.grade === "great");
    setgreat(filtered);
  }, []);

  useEffect(() => {
    const storedFavorite = localStorage.getItem("favorite");
    if (storedFavorite) {
      setfavorite(JSON.parse(storedFavorite));
    } else {
      const filtered = productsData.filter((p) => p.categorie === "favorite");
      setfavorite(filtered);
      localStorage.setItem("favorite", JSON.stringify(filtered));
    }
  }, []);

  useEffect(() => {
    const storedGreat = localStorage.getItem("great");
    if (storedGreat) {
      setgreat(JSON.parse(storedGreat));
    } else {
      const filtered = productsData.filter((p) => p.grade === "great");
      setgreat(filtered);
      localStorage.setItem("great", JSON.stringify(filtered));
    }
  }, []);

  return (
    <>
      <div className="flex flex-col items-center w-screen justify-center">
        {/* <div><Register /></div> */}
        <ImageSlider />
        {/*this cointains the award  */}
        <div className="flex flex-col m-5 items-center w-screen">
          <h1 className="mt-5 text-2xl">Award & Accolades</h1>
          <div className="flex align-middle gap-8 justify-center w-screen px-20 mt-10">
            <img
              src="./src/Data/img.home/award-01.webp"
              className="h-[100px] "
              alt="inc 5000"
            />
            <img
              src="./src/Data/img.home/award-02.webp"
              className="h-[100px] "
              alt=" 5 year champ"
            />
            <img
              src="./src/Data/img.home/award-03.webp"
              className="h-[100px] "
              alt="costomer award"
            />
            <img
              src="./src/Data/img.home/award-07.webp"
              className="h-[100px] "
              alt="costomer award"
            />
            <img
              src="./src/Data/img.home/award-08.webp"
              className="h-[100px] "
              alt="costomer award"
            />
            <img
              src="./src/Data/img.home/award-04.webp"
              className="h-[100px] "
              alt="circle of Excellance"
            />
            <img
              src="./src/Data/img.home/award-05.webp"
              className="h-[100px] "
              alt="circle of Excellance"
            />
            <img
              src="./src/Data/img.home/award-06.webp"
              className="h-[100px] "
              alt="circle of Excellance"
            />
          </div>

          {/* This most type of items  */}
          <div className="mt-5">
            <div className="flex justify-center items-center mb-2.5 gap-5  ">
              <div className="flex flex-col items-center  text-gray-600">
                <img
                  src="./src/Data/img.home/lab-biamond.webp"
                  alt="Lab-daimond Jewllery"
                  className="h-[202px] w-[202PX] "
                />
                Lab-Daimond Jewllery
              </div>
              <div className="flex flex-col items-center  text-gray-600">
                <img
                  src="./src/Data/img.home/lab-gemstones.webp"
                  alt="Lab-gemstone Jewllery"
                  className="h-[202px] w-[202PX] "
                />
                Lab-Gemstone Jewllery
              </div>
              <div className="flex flex-col items-center  text-gray-600">
                <img
                  src="./src/Data/img.home/natural-diamond.webp"
                  alt="Natural-daimond-Jewllery"
                  className="h-[202px] w-[202PX] "
                />
                Natural-Daimond Jewllery
              </div>
              <div className="flex flex-col items-center  text-gray-600">
                <img
                  src="./src/Data/img.home/natural-gemstone.webp"
                  alt="Natural-gemstone-Jewllery"
                  className="h-[202px] w-[202PX] "
                />
                Natural-Gemstone Jewllery
              </div>
              <div className="flex flex-col items-center  text-gray-600">
                <img
                  src="./src/Data/img.home/pearl-jewellery.webp"
                  alt="Pearl Jewllery"
                  className="h-[202px] w-[202PX] "
                />
                Pearl Jewllery
              </div>
              <div className="flex flex-col items-center  text-gray-600">
                <img
                  src="./src/Data/img.home/mangalsutra-banner.webp"
                  alt="Mangalsutra"
                  className="h-[202px] w-[202PX] "
                />
                Mangalsutra
              </div>
            </div>
          </div>

          {/* This cointain side and video of home */}
          <div className=" flex align-middle w-screen  mt-20 items-center ">
            <div className="w-2/4">
              <video
                autoPlay
                muted
                loop
                src="./src/Data/videos/home-vid.mp4"
              ></video>
            </div>
            <div className="bg-gray-200 flex flex-col w-2/4 items-center p-17   ">
              <h1 className="text-3xl text-gray-600 mt-4">
                Handcrafted To Meet Your Vision
              </h1>
              <h2 className="text-xl mt-4 text-gray-600">
                By Skilled Artisans & Craftsmen
              </h2>
              <span className="text-lg tracking-widest">
                with a life time acquired skills,our master Jewellers breathe
                life into these precious gemstones-just for you!
              </span>
            </div>
          </div>

          {/* This cointains the Loved items  */}
          <h1 className="text-3xl font-semibold mt-10">Most Loved On Angara</h1>
          <div className="mt-6 mb-10">
            <Cards products={favorite} />
          </div>

          {/* this contains the gift */}
          <span className="text-2xl tracking-wider font-semibold my-10 ">
            Gift That Say It All
          </span>
          <div className="my-10 flex justify-center align-middle items-center gap-5 ">
            <div className="flex flex-col items-center text-gray-600 text-lg h-50 hover:underline  ">
              <img src={Gif1} alt="" className="h-50 hover:scale-105 " />
              <p > below 25,000</p>
            </div>
            <div className="flex flex-col items-center text-gray-600 text-lg h-50 hover:underline ">
              <img src={Gif2} alt="" className="h-50 hover:scale-105 " />
              <p > 25,000 - 50,000</p>
            </div>
            <div className="flex flex-col items-center text-gray-600 text-lg h-50 hover:underline ">
              <img src={Gif3} alt="" className="h-50 hover:scale-105 " />
              <p > 50,000 - 1,00,000</p>
            </div>
            <div className="flex flex-col items-center text-gray-600 text-lg h-50 hover:underline ">
              <img src={Gif4} alt="" className="h-50 hover:scale-105 " />
              <p > Above 1,00,000</p>
            </div>
            <div className="flex flex-col items-center text-gray-600 text-lg h-50 hover:underline ">
              <img src={Gif5} alt="" className="h-50 hover:scale-105 " />
              <p > Birthday Gifts</p>
            </div>
            <div className="flex flex-col items-center text-gray-600 text-lg h-50 hover:underline ">
              <img src={Gif6} alt="" className="h-50 hover:scale-105 " />
              <p >Anniversary Gifts</p>
            </div>
          </div>
          {/* this is for occassion */}
          <span className="text-2xl tracking-wider font-semibold mt-20 my-10">
            Forever Starts Here
          </span>
          <div className="flex justify-around gap-5 items-center">
            <div className="flex flex-col gap-3 text-gray-600 text-xl items-center">
              <img src={wedding} alt="" className="h-140" /> Wedding Jewellery
            </div>
            <div className="flex flex-col gap-3 text-gray-600 text-xl items-center">
              <img src={engagement} alt="" className="h-140" />
              Wedding Jewellery
            </div>
          </div>
          {/*this is for birth option */}
          <span className="text-2xl tracking-wider font-semibold my-10 ">
            Make Birthdays More Colourful
          </span>
          <div className="flex justify-evenly align-middle items-center">
            <div className="flex flex-col items-center hover:underline decoration-orange-400  hover:scale-105 ">
              <img src={jan} alt="" />
              January
            </div>
            <div className="flex flex-col items-center hover:underline decoration-orange-400  hover:scale-105 ">
              <img src={feb} alt="" />
              February
            </div>
            <div className="flex flex-col items-center hover:underline decoration-orange-400  hover:scale-105 ">
              <img src={mar} alt="" />
              March
            </div>
            <div className="flex flex-col items-center hover:underline decoration-orange-400  hover:scale-105 ">
              <img src={apr} alt="" />
              April
            </div>
            <div className="flex flex-col items-center hover:underline decoration-orange-400  hover:scale-105 ">
              <img src={may} alt="" />
              May
            </div>
            <div className="flex flex-col items-center hover:underline decoration-orange-400  hover:scale-105 ">
              <img src={jun} alt="" />
              June
            </div>
            <div className="flex flex-col items-center hover:underline decoration-orange-400  hover:scale-105 ">
              <img src={jul} alt="" />
              July
            </div>
            <div className="flex flex-col items-center hover:underline decoration-orange-400  hover:scale-105 ">
              <img src={aug} alt="" />
              August
            </div>
            <div className="flex flex-col items-center hover:underline decoration-orange-400  hover:scale-105 ">
              <img src={sep} alt="" />
              September
            </div>
            <div className="flex flex-col items-center hover:underline decoration-orange-400  hover:scale-105 ">
              <img src={oct} alt="" />
              October
            </div>
            <div className="flex flex-col items-center hover:underline decoration-orange-400  hover:scale-105 ">
              <img src={nov} alt="" />
              November
            </div>
            <div className="flex flex-col items-center hover:underline decoration-orange-400  hover:scale-105 ">
              <img src={dec} alt="" />
              December
            </div>
          </div>
          {/*Best items of creator */}
          <span className="text-2xl tracking-wider font-semibold my-10 ">
            Curated by Our Master Jewellers
          </span>
          <div className="flex justify-around gap-5 items-center">
            <div className="flex flex-col gap-3 text-gray-600 text-xl items-center ">
              <img src={green} alt="" />
              Emrald Jewellery
            </div>
            <div className="flex flex-col gap-3 text-gray-600 text-xl items-center ">
              <img src={purple} alt="" />
              Gardens At Twillight Collection
            </div>
            <div className="flex flex-col gap-3 text-gray-600 text-xl items-center ">
              <img src={ruby} alt="" />
              Ruby Ring
            </div>
          </div>
          {/* This is angara trusts side */}
          <span className="text-2xl tracking-wider font-semibold mt-20 my-10 ">
            The Angara Trust Journey
          </span>
          <div className="flex justify-around gap-24 items-center">
            <div className="flex flex-col gap-5 text-gray-600 text-xs font-medium mt-5 items-center">
              <img src={trust1} className="h-24 w-24 " alt="" />
              USA's #1 online Jeweller
            </div>
            <div className="flex flex-col gap-5 text-gray-600 text-xs font-medium mt-5 items-center">
              <img src={trust2} className="h-24 w-24 " alt="" />
              BIS HallMark
            </div>
            <div className="flex flex-col gap-5 text-gray-600 text-xs font-medium mt-5 items-center">
              <img src={trust3} className="h-24 w-24 " alt="" />
              Angara Certified
            </div>
            <div className="flex flex-col gap-5 text-gray-600 text-xs font-medium mt-5 items-center">
              <img src={trust4} className="h-24 w-24 " alt="" />
              Rated 4.7/5 Globally
            </div>
            <div className="flex flex-col gap-5 text-gray-600 text-xs font-medium mt-5 items-center">
              <img src={trust5} className="h-24 w-24 " alt="" />
              15 Days Returns
            </div>
            <div className="flex flex-col gap-5 text-gray-600 text-xs font-medium mt-5 items-center">
              <img src={trust6} className="h-24 w-24 " alt="" />
              lifetime Exchange & buy back
            </div>
            <div className="flex flex-col gap-5 text-gray-600 text-xs font-medium mt-5 items-center">
              <img src={trust7} className="h-24 w-24 " alt="" />
              Ethical Source
            </div>
          </div>
          {/* this is angara interview */}
          <span className="text-2xl tracking-wider font-semibold mt-20 my-10">
            Featured In
          </span>
          <div className="flex justify-around gap-10 items-center ">
            <div className="flex flex-col gap-2 items-start w-110 text-xs">
              <a href="https://www.youtube.com/watch?v=OjUJhIkXBhw">
                <img
                  src={interveiw1}
                  className="h-90 cursor-pointer w-100"
                  alt="interview"
                />
              </a>
              <img src={channel01} className="h-10" alt="channel-logo" />
              How did a spark of tradition, a meeting with Ratan Tata, and a
              love for coloured gemstones shape Angara into a $100M global
              brand? Watch Ankur & Aditi Daga...
              <button className="underline mt-6 w-full cursor-pointer text-sm tracking-wider font-semibold">
                Watch Out
              </button>
            </div>
            <div className="flex flex-col gap-2 items-start w-110 text-xs">
              <a href="youtube.com/watch?v=_Xx0hxNuug8&embeds_referring_euri=https%3A%2F%2Fwww.angara.com%2Fin-en&source_ve_path=MjM4NTE">
                <img
                  src={interveiw2}
                  className="h-90 cursor-pointer w-100"
                  alt="interview"
                />
              </a>
              <img src={channel02} className="h-9" alt="channel-logo" />
              Coloured gemstones embody cultural significance and carry deeper
              meaning. Angara is bringing back this segment of the jewellery
              industry with...
              <button className="underline mt-6 w-full cursor-pointer text-sm tracking-wider font-semibold">
                Watch Out
              </button>
            </div>
            <div className="flex flex-col gap-2 items-start w-110 text-xs">
              <a href="youtube.com/watch?v=18XiqLpjuDM&embeds_referring_euri=https%3A%2F%2Fwww.angara.com%2Fin-en&source_ve_path=MjM4NTE">
                <img
                  src={interveiw3}
                  className="h-90 cursor-pointer w-100"
                  alt="interview"
                />
              </a>
              <img src={channel03} className="h-7" alt="channel-logo" />A couple
              from Jaipur quietly built one of America's most trusted diamond
              jewellery brands
              <button className="underline mt-6 w-full  cursor-pointer text-sm tracking-wider font-semibold ">
                Watch Out
              </button>
            </div>
          </div>
          {/*Reviews of clients */}
          <span className="text-2xl tracking-wider font-semibold mt-20 my-10">
            Your Words, Not Ours
          </span>
          <div className=" flex items-start gap-5 justify-around ">
            <div className="flex w-120  h-120 flex-col gap-3 text-gray-600 text-lg items-center bg-gray-50 p-15">
              <img src={Review1} className="h-29 w-29" alt="review-img" />
              Absolutly beautiful...
              <img src={Reviewr} className="h-12" alt="rates" />I was given this
              ring in yellow gold by my husband today for my birthday.and it...
              <p className="font-semibold">Rebecca D.</p>
            </div>
            <div className="flex w-120  h-120 flex-col gap-3 text-gray-600 text-lg items-center bg-gray-50 p-15">
              <img src={Review2} className="h-29 w-29" alt="review-img" />
              Emrald Necklace...
              <img src={Reviewr} className="h-12" alt="rates" />
              Got this for my girlfriend for her birthday and it's absolutely
              beautiful. She I... <p className="font-semibold">Zackary C.</p>
            </div>
            <div className="flex w-120  h-120 flex-col gap-3 text-gray-600 text-lg items-center bg-gray-50 p-15">
              <img src={Review3} className="h-29 w-29" alt="review-img" />
              Exquisite gift for my granddaughter's 18th birthday..
              <img src={Reviewr} className="h-12" alt="rates" />
              The Fresh pearl is absolutely beautiful,flawless and has a
              beautiful sheen... <p className="font-semibold">Nancy J.</p>
            </div>
          </div>
          {/*This is second look section*/}
          <span className="text-2xl tracking-wider font-semibold mt-20 my-10">
            Need a Second Look?
          </span>
          <div className="flex justify-around items-center align-middle">
            <div>
              <div className="mt-6 mb-10">
                <Cards products={great} />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start mx-60 gap-4 justify-center align-middle ">
            <span className="font-semibold tracking-normal text-lg">
              Celebrate Life's Precious Moments With Colour
            </span>
            <p className="text-gray-800  tracking-normal ">
              At Angara, we believe that colour brings out the best in people,
              and our mission is to bring more of it to the world. In ancient
              Sanskrit, Angara means “the fire within.” We love how it captures
              the power of the colour that burns inside our gemstones, as well
              as the fire of imagination that inspires you to create jewellery
              with colours that reflect you. Whether you're celebrating a
              relationship, career milestone or simply looking for a medium of
              self-expression, at Angara, you can create for yourself a
              colourful sparkler that tells your story in the most unique way.
            </p>
            <span className="font-semibold tracking-normal text-lg">
              Exceptional Craftsmanship and Quality
            </span>
            <p className="text-gray-800  tracking-normal ">
              Our legacy in gemstone cutting and polishing, and experience in
              design and manufacturing enables us to create fine jewellery
              that's superior in every way. When you place an order with us, you
              can trust our master jewellers to handcraft your piece with
              trained precision, hand-selecting each gemstone and using
              materials of only the finest quality.
            </p>
            <span className="font-semibold tracking-normal text-lg">
              Discover the Power of Gemstones
            </span>
            <p className="text-gray-800  tracking-normal ">
              Gemstones aren't just style statements, they are also believed to
              carry incredible power and healing energies. While amethyst is
              said to bring a sense of calmness and balance to your life,
              emerald can open your heart to love and promote emotional healing.
              Whereas, ruby is considered to be a gem that ignites love and
              passion. If you find yourself intrigued by gemstones and their
              properties, Angara's collection has several exquisite options for
              you. Whether you choose pieces for their alleged power and
              benefits or for their beauty, these are sure to become the MVPs of
              your jewel box.
            </p>
            <span className="font-semibold tracking-normal text-lg">
              Create Your Dream Jewellery Piece With Angara
            </span>
            <div className="text-gray-800  tracking-normal ">
              Your jewellery is an expression of who you are. That's why every
              sparkler you wear, or gift, should be nothing short of a
              masterpiece, customised to reflect you or the one you love! At our
              online jewellery store, you can effortlessly personalise the piece
              you like in just a few easy steps. Simply choose the carat weight,
              metal and stone quality to bring to life a sparkler that's
              uniquely you. Whether you choose a diamond ring a pearl strand or
              a pair of gold earrings dressed with your favourite coloured
              gemstone, our designs are sure to fetch you tons of compliments!
              So, don't wait anymore. Go ahead, explore our collection of best
              online jewellery right away and treat yourself or a loved one to a
              new jewellery piece.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
