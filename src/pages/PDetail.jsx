import React, { useState, useEffect } from "react";
import Footer from "../component/footer";
import star from "../assets/star.svg";
import compare from "../assets/compare.png";
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
              {/*THis is types and diffrent qalities */}
              <div className="flex flex-col shadow-[0_0_0_1px_rgba(0,0,0,0.25)] p-5">
                <div className="flex justify-between">
                  <span>GemStone Quality : as product</span>
                  <div className="flex gap-2">
                    <button>
                      <img src={compare} alt="compare" className="h-5" />
                    </button>
                    <p className="text-sm">Compare</p>
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
