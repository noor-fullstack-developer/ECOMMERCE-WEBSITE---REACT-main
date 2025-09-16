import React from "react";
import channel01 from "../Data/img.home/channel01.svg";
import channel02 from "../Data/img.home/channel02.svg";
import channel03 from "../Data/img.home/channel03.jpg";
import interveiw1 from "../Data/img.home/thumbnail01.webp";
import interveiw2 from "../Data/img.home/thumbnail02.webp";
import interveiw3 from "../Data/img.home/thumbnail03.webp";

const Featuredin = () => {
  return (
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
        How did a spark of tradition, a meeting with Ratan Tata, and a love for
        coloured gemstones shape Angara into a $100M global brand? Watch Ankur &
        Aditi Daga...
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
        meaning. Angara is bringing back this segment of the jewellery industry
        with...
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
        <img src={channel03} className="h-7" alt="channel-logo" />A couple from
        Jaipur quietly built one of America's most trusted diamond jewellery
        brands
        <button className="underline mt-6 w-full  cursor-pointer text-sm tracking-wider font-semibold ">
          Watch Out
        </button>
      </div>
    </div>
  );
};

export default Featuredin;
