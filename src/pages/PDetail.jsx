import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../component/footer";
import Angarnewslink from "../component/angarnewslink.jsx";
import star from "../assets/star.svg";
import products from "../Data/products.json";
import Favcard from "../component/favcard.jsx";
import Reviewform from "../component/reviewform.jsx";
import Questionform from "../component/Questionform.jsx";
import Deatails from "../component/Detail.jsx";
import image from "../Data/img/earring-01.png" 

function PDetail() {
  const { id } = useParams(); // get product id from URL
  const product = products.find((p) => p.id === parseInt(id));

  const [Recent, setRecent] = useState([]);
  useEffect(() => {
    const filtered = products.filter((p) => p.recent === "trues");
    setRecent(filtered);
  }, []);

  if (!product) return <div>Product not found!</div>; // Handle invalid ID

  return (
    <div className="flex flex-col items-center px-80 w-screen">
      <div>
        <span className="flex items-start">
          HOME / JEWELLERY / {product.name.toUpperCase()}
        </span>
        <div className="flex flex-col justify-center items-center align-middle">
          {/* Pass the product as a prop */}
          <Deatails product={product} />

          <div className="headcss mb-5">
            YOU MAY ALSO LIKE
            <span> we have to make it </span>
          </div>

          <div
            className="relative max-w-[100rem] p-6 overflow-hidden"
            onMouseOver={(e) =>
              (e.currentTarget.querySelector(".marquee").style.animationPlayState =
                "paused")
            }
            onMouseOut={(e) =>
              (e.currentTarget.querySelector(".marquee").style.animationPlayState =
                "running")
            }
          >
            <span className="headcss mb-15">Featured In</span>
            <div className="pointer-events-none absolute top-0 left-0 h-full w-50 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="pointer-events-none absolute top-0 right-0 h-full w-50 bg-gradient-to-l from-white to-transparent z-10"></div>
            <Angarnewslink />
          </div>

          {/* Customer Reviews Section */}
          <div className="flex flex-col p-10 justify-around items-center">
            <span className="headcss">Verified Customer Reviews</span>
            <div className="flex p-10 justify-around items-center">
              <div className="flex align-middle h-5">
                <img src={star} alt="star" className="h-6" />
              </div>
              <span>0 Reviews</span>
            </div>

            {/* Review & Question Forms */}
            <Reviewform productId={product.id} />
            <Questionform productId={product.id} />
          </div>

          {/* Recently Viewed */}
          <div className="flex flex-col justify-start w-[99rem]">
            <span className="shadow-[0_1px_0_0_rgba(0,0,0,0.25)] font-semibold text-lg p-4">
              Reviews
            </span>
          </div>
          <div className="flex flex-col justify-start w-[85rem]">
            <span className="headcss">Recently Viewed</span>
            <Favcard products={Recent} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default PDetail;
