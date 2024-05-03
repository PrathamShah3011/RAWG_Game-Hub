import React, { useEffect } from "react";

function Banner(gameBanner) {
  useEffect(() => {
    console.log("gameBanner", gameBanner);
  }, []);

  return (
    <div className="relative ">
      <div className="absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full ">
        <h2 className="text-[24px] text-white font-bold">
          {gameBanner.gameBanner.name}
        </h2>
        <button className="text-white font-bold bg-blue-700 py-1 px-3 rounded-xl">
          Get Now
        </button>
      </div>
      <img
        src={gameBanner.gameBanner.background_image}
        className="md:h-[320px] w-full  rounded-xl"
      />
    </div>
  );
}

export default Banner;
