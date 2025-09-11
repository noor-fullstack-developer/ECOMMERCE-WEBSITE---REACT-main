import { useState, useEffect } from "react";

import poster04 from "../Data/img.home/poster04.png";
import poster01 from "../Data/img.home/poster01.png";
import poster02 from "../Data/img.home/poster02.png";
import poster03 from "../Data/img.home/poster03.png";

const sliders = [poster04, poster01, poster02, poster03];

const AutoCarousel = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % sliders.length);
        setFade(true);
      }, 300); // fade out duration
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-auto">
      <img
        src={sliders[index]}
        alt={`Slide ${index + 1}`}
        className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-50"}`}
      />
    </div>
  );
};

export default AutoCarousel;
