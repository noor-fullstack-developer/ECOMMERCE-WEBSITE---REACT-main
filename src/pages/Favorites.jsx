import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import nonFavirateIcon from "../component/assets/non-fav.svg";
import FavirateIcon from "../component/assets/fav.svg";
import products from "../Data/products.json";
import nonfav from "../assets/nonfav.png";

const Favorites = () => {
  const [favorites, setFavorites] = useState({});

  //  Load favorites from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  //  Toggle favorite state
  const toggleFavorite = (id, name, price, material) => {
    const key = String(id);
    setFavorites((prev) => {
      const updated = { ...prev, [key]: !prev[key] };
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };

  //  Show only liked products
  const likedProducts = products.filter((p) => favorites[String(p.id)]);

  return (
    <div className="p-5 flex flex-col px-80">
      <h2 className="text-2xl font-bold mb-5">
        My WatchList({likedProducts.length})
      </h2>

      {likedProducts.length === 0 ? (
        <div className="flex justify-center items-center align-middle">
          <img src={nonfav} alt="" className="h-[40rem] w-[40rem]" />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {likedProducts.map((record) => (
            <div
              key={record.id}
              className="hover:shadow-gray-500 hover:shadow-lg p-5 gap-2.5"
            >
              {/* Toggle like */}
              <button
                className="flex justify-end"
                onClick={() =>
                  toggleFavorite(
                    record.id,
                    record.name,
                    record.price,
                    record.material
                  )
                }
              >
                {favorites[String(record.id)] ? (
                  <img
                    src={FavirateIcon}
                    alt="favorite"
                    className="h-7 cursor-pointer"
                    height="24"
                    width="24"
                  />
                ) : (
                  <img
                    src={nonFavirateIcon}
                    alt="nonfavorite"
                    className="h-7 cursor-pointer"
                    height="24"
                    width="24"
                  />
                )}
              </button>

              <Link to="/Detail">
                <img
                  src={record.image}
                  alt={record.name || "item"}
                  height="300"
                  width="300"
                />
                <p className="mt-2 font-semibold">{record.name}</p>
                <span className="font-normal underline text-sm">
                  Amount: <span>₹ {record.price}</span>
                </span>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
