import { useState } from "react";
import { Link } from "react-router-dom";
import nonFavirateIcon from "./assets/non-fav.svg";
import FavirateIcon from "./assets/fav.svg";

const Cards = ({ products = [] }) => {
  const [currentpage, setcurrentpage] = useState(1);
  const postperpage = 5;

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
  const toggleFavorite = (id, name, material) => {
    const key = String(id); // make sure it's always a string
    setFavorites((prev) => {
      const updated = { ...prev, [key]: !prev[key] };
      localStorage.setItem("favorites", JSON.stringify(updated));

      if (updated[key]) {
        console.log(
          `the product ${name}${id} with ${material} has been liked `
        );
      } else {
        console.log(
          `the product ${name}${id} with ${material} has been unliked `
        );
      }
      return updated;
    });
  };

  return (
    <div className="flex justify-between items-center mt-5 ">
      <button
        className="hover:border p-2 mr-2"
        onClick={handlePrev}
        disabled={currentpage === 1}
      >
        {"<"}
      </button>

      <div className="grid grid-cols-5 gap-4">
        {currentpost.map((record) => (
          <div
            className="hover:shadow-gray-500 hover:shadow-md p-2 h-[300px] w-[210px] gap-2.5"
            key={record.id}
          >
            <Link to={`/Detail/${record.id}${record.name}`}>
              <div>
                <img
                  src={record.image}
                  alt={record.name}
                  height="200px"
                  width="200px"
                />
                <br />
                <p>{record.name}</p>
                <div className="font-normal underline flex justify-between items-center text-sm">
                  <span>Amount: ₹ {record.price}</span>
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
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <button
        className="hover:border p-2 ml-2"
        onClick={handleNext}
        disabled={currentpage === totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Cards;
