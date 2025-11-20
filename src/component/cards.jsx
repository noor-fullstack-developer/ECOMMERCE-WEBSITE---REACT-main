import { useState } from "react";
import { Link } from "react-router-dom";
import nonFavirateIcon from "./assets/non-fav.svg";
import FavirateIcon from "./assets/fav.svg";

const Cards = ({ products = [] }) => {
  const [currentpage, setcurrentpage] = useState(1);
  const postperpage = 4;

  const totalPages = Math.ceil(products.length / postperpage);
  const lastPostIndex = currentpage * postperpage;
  const firstpageindx = lastPostIndex - postperpage;
  const currentpost = products.slice(firstpageindx, lastPostIndex);

  // ✅ Favorites in localStorage
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("favorites");
        return saved ? JSON.parse(saved) : {};
      } catch {
      return {};
    }
  });

  const toggleFavorite = (id) => {
    const key = String(id);
    setFavorites((prev) => {
      const updated = { ...prev, [key]: !prev[key] };
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {currentpost.length === 0 ? (
          <p className="col-span-4 text-center text-gray-500">
            No products available
          </p>
        ) : (
          currentpost.map((record) => (
            <div
              className="hover:shadow-gray-500 hover:shadow-lg p-5 gap-2.5"
              key={record.id}
            >
              {/* Favorite Button */}
              <button
                className="flex justify-end"
                onClick={() => toggleFavorite(record.id)}
              >
                {favorites[String(record.id)] ? (
                  <img src={FavirateIcon} alt="favorite" className="h-7" />
                ) : (
                  <img
                    src={nonFavirateIcon}
                    alt="nonfavorite"
                    className="h-7"
                  />
                )}
              </button>
              <Link to={`/Detail/${record.id}`}>
                <div>
                  <img
                    src={record.image}
                    alt={record.name || "item"}
                    height="300"
                    width="300"
                  />
                  <p>Description: {record.description}</p>
                  <span className="font-normal underline text-sm">
                    Amount: <span>₹ {record.price}</span>
                  </span>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-5 pt-10">
        <button
          onClick={() => setcurrentpage((p) => p - 1)}
          disabled={currentpage === 1}
          className="px-4 py-0 bg-gradient-to-r from-red-200 to-indigo-100 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="rounded bg-gradient-to-r from-indigo-200 via-gray-50 to-indigo-200">
          Page {currentpage} of {totalPages}
        </span>
        <button
          onClick={() => setcurrentpage((p) => p + 1)}
          disabled={currentpage === totalPages}
          className="px-4 py-0 bg-gradient-to-l from-red-200 to-indigo-100 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Cards;
