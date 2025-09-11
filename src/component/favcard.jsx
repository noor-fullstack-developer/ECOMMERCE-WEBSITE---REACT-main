import { useState, useEffect } from "react";
import nonFavirateIcon from "./assets/non-fav.svg";
import FavirateIcon from "./assets/fav.svg";

const Cards = ({ products }) => {
  const [currentpage, setcurrentpage] = useState(1);
  const postperpage = 4;

  const lastPostIndex = currentpage * postperpage;
  const firstpageindx = lastPostIndex - postperpage;
  const currentpost = products.slice(firstpageindx, lastPostIndex);

  const totalPages = Math.ceil(products.length / postperpage);

  const handlePrev = () => {
    if (currentpage > 1) setcurrentpage(currentpage - 1);
  };

  const handleNext = () => {
    if (currentpage < totalPages) setcurrentpage(currentpage + 1);
  };

  // ✅ Load favorites from localStorage when component mounts
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : {};
  });

  // ✅ Toggle favorite and save back to localStorage
  const toggleFavorite = (id) => {
    const key = String(id); // make sure it's always a string
    setFavorites((prev) => {
      const updated = { ...prev, [key]: !prev[key] };
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className="flex justify-between items-center mt-5">
      <button onClick={handlePrev} disabled={currentpage === 1}>
        {"<"}
      </button>

      <div className="grid grid-cols-4 gap-4">
        {currentpost.map((record) => (
          <div
            className="hover:shadow-gray-500 hover:shadow-lg p-5 gap-2.5"
            key={record.id}
          >
            <button
              className="flex justify-end"
              onClick={() => toggleFavorite(record.id)}
            >
              {favorites[String(record.id)] ? (
                <img
                  src={FavirateIcon}
                  alt="favorite"
                  className="h-7"
                  height="24"
                  width="24"
                />
              ) : (
                <img
                  src={nonFavirateIcon}
                  alt="nonfavorite"
                  className="h-7"
                  height="24"
                  width="24"
                />
              )}
            </button>

            <img src={record.image} alt="items" height="300px" width="300px" />
            <br />

            <span className="font-normal underline text-sm">
              Amount: <span>₹ {record.price}</span>
            </span>
          </div>
        ))}
      </div>

      <button onClick={handleNext} disabled={currentpage === totalPages}>
        {">"}
      </button>
    </div>
  );
};

export default Cards;
