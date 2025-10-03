import { useState, useEffect } from "react";
import poster from "../Data/img.home/blue-sapphirebanner.webp";
import productsData from "../Data/products.json";
import Favcard from "../component/favcard.jsx";
import Cards from "../component/cards";
import Footer from "../component/footer.jsx";
import Filters from "../component/filters";

function Gifts() {
  const [gifts, setGifts] = useState([]); // all gifts
  const [filteredGifts, setFilteredGifts] = useState([]); // filtered by price
  const [selectedRanges, setSelectedRanges] = useState([]); // for filter
  const [great, setGreat] = useState([]); // for second look

  // Load gifts
  useEffect(() => {
    // You can filter only certain category if needed
    setGifts(productsData);
    setFilteredGifts(productsData);
  }, []);

  // Filter by selected price ranges
  useEffect(() => {
    if (selectedRanges.length === 0) {
      setFilteredGifts(gifts);
      return;
    }
    const updated = gifts.filter((p) =>
      selectedRanges.some((range) => {
        const [min, max] = range.split("-").map(Number);
        return p.price >= min && p.price <= max;
      })
    );
    setFilteredGifts(updated);
  }, [selectedRanges, gifts]);

  // Great products for "Need a Second Look?"
  useEffect(() => {
    const filtered = productsData.filter((p) => p.grade === "great");
    setGreat(filtered);
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col w-full max-w-[1440px] mt-8">
          {/* Poster */}
          <img src={poster} alt="poster" className="w-full h-auto rounded-lg" />

          {/* Breadcrumb */}
          <div className="bg-gray-200 px-4 py-3 mt-4 rounded-2xl">
            <span className="text-xs text-gray-700 flex flex-wrap">
              Home / Jewellery / Gifts
            </span>
          </div>

          {/* Section */}
          <div className="flex flex-col justify-center items-center mb-5 p-6 shadow-sm shadow-gray-300 mt-4 rounded-lg">
            <h1 className="text-2xl text-center">Gifts</h1>
            <p className="mt-4 text-gray-400 text-center">
              Drape a piece of luxury around your finger with handcrafted gifts
              from Angara.
            </p>
            <div className="flex justify-center w-full mt-1 text-gray-600">
              <button className="underline text-sm cursor-pointer">
                Read More
              </button>
            </div>
          </div>

          {/* Filters + Products */}
          <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-lg mt-6">
            {/* Filters */}
            <div className="w-full lg:w-1/4 p-4 border-b lg:border-b-0 lg:border-r border-gray-200">
              <Filters onFilterChange={setSelectedRanges} />
            </div>

            {/* Products */}
            <div className="w-full lg:w-3/4 p-6">
              <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-4">
                <span className="text-xl">
                  {filteredGifts.length} Customized Gifts
                </span>
                <div className="flex items-center mt-2 sm:mt-0 bg-gradient-to-l from-gray-300 to-lime-400 p-1 rounded-3xl">
                  <span className="text-lg m-1">Sort:</span>
                  <select className="pr-4 font-medium cursor-pointer focus:outline-none text-sm">
                    <option value="price|asc">Low-High price</option>
                    <option value="price|desc">High-Low price</option>
                  </select>
                </div>
              </div>

              {/* Cards */}
              <Cards products={filteredGifts} />
            </div>
          </div>

          {/* Favcard Section */}
          <h2 className="text-2xl font-semibold text-center mt-12 mb-6">
            Need a Second Look?
          </h2>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <Favcard products={great} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gifts;
