import React, { useState, useEffect } from "react";
import Footer from "../component/footer";
import star from "../assets/star.svg";
import compare from "../assets/compare.png";
import gemstone from "../Data/Detail.img/Qulity.webp";
import cartat from "../Data/Detail.img/carat-weight.webp";
import metalrosegold from "../Data/Detail.img/metal-rose-Gold.webp";
import metalgold from "../Data/Detail.img/metal-gold.webp";
import metalsilver from "../Data/Detail.img/metal-silver.webp";
import products from "../Data/products.json"; // ✅ Product list

function PDetail() {
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
                <span className="text-2xl mr-2">₹39,468</span>{" "}
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
              <div className="flex mt-5 flex-col">
                {/*THis is types and diffrent qalities */}
                <div className="flex justify-between shadow-[0_0_0_1px_rgba(0,0,0,0.25)] p-5">
                  <span>GemStone Quality : as product</span>
                  <div className="flex gap-2">
                    <button>
                      <img src={compare} alt="compare" className="h-5" />
                    </button>
                    <p className="text-sm">Compare</p>
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
                      />{" "}
                      1 cts{" "}
                    </div>
                    <div className="flex flex-col items-center  text-gray-600 cursor-pointer ">
                      <img
                        src={cartat}
                        className="flex  h-16 focus:shadow-[0_0_0_1px_rgba(0,0,0,0.5)] shadow-[0_0_0_1px_rgba(0,0,0,0.10)] gap-5 p-2"
                        alt="carat 3"
                      />{" "}
                      3 cts{" "}
                    </div>
                    <div className="flex flex-col items-center  text-gray-600 cursor-pointer ">
                      <img
                        src={cartat}
                        className="flex  h-16 focus:shadow-[0_0_0_1px_rgba(0,0,0,0.5)] shadow-[0_0_0_1px_rgba(0,0,0,0.10)] gap-5 p-2"
                        alt="carat 5"
                      />{" "}
                      5 cts
                    </div>
                    <div className="flex flex-col items-center  text-gray-600 cursor-pointer ">
                      <img
                        src={cartat}
                        className="flex  h-16 focus:shadow-[0_0_0_1px_rgba(0,0,0,0.5)] shadow-[0_0_0_1px_rgba(0,0,0,0.10)] gap-5 p-2"
                        alt="carat 7"
                      />{" "}
                      7 cts
                    </div>
                  </div>
                </div>
                {/*This is Metal Type */}
                <div className="flex flex-col shadow-[0_0_0_1px_rgba(0,0,0,0.25)] p-5">
                  <div className="flex justify-between">
                    <span>
                      Metal Type :<p>14K Yellow Gold</p>
                    </span>
                    <div className="flex gap-2">
                      <button>
                        <img src={compare} alt="compare" className="h-5" />
                      </button>
                      <p className="text-sm">Compare</p>
                    </div>
                  </div>
                  <div className="flex gap-7 items-center mt-5">
                    <div className="flex flex-col items-center  text-gray-600 cursor-pointer"><img className="flex  h-12 focus:shadow-[0_0_0_1px_rgba(0,0,0,0.5)] shadow-[0_0_0_1px_rgba(0,0,0,0.10)] gap-5 p-2" src={metalsilver} alt="" /><p>White Glod</div>
                    <div className="flex flex-col items-center  text-gray-600 cursor-pointer"><img className="flex  h-12 focus:shadow-[0_0_0_1px_rgba(0,0,0,0.5)] shadow-[0_0_0_1px_rgba(0,0,0,0.10)] gap-5 p-2" src={metalgold} alt="" /><p>Yellow Gold</div>
                    <div className="flex flex-col items-center  text-gray-600 cursor-pointer"><img className="flex  h-12 focus:shadow-[0_0_0_1px_rgba(0,0,0,0.5)] shadow-[0_0_0_1px_rgba(0,0,0,0.10)] gap-5 p-2" src={metalrosegold} alt="" /><p></p>Rose Gold</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="You-May-Also-Like">YOU MAY ALSO LIKE</div>
          <div className="feacheredin">Feacered in</div>
          <div className="verfied-review">verified review</div>
          <div className="review">reviews</div>
          <div className="recently-viewd">recentlyviewed</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default PDetail;
