import React, { useEffect } from "react";

function TrendingGames(gamesList) {
  useEffect(() => {
    console.log("gamesList", gamesList);
  }, []);
  return (
    <div className="hidden md:block lg:block mt-4">
      <h1 className="text-[30px] font-bol mb-2">Trending Games</h1>
      <div className="md:grid lg:grid-cols-4">
        {gamesList.gamesList.map(
          (item, index) =>
            index < 4 && (
              //   Single Game item div mapped many times
              <div className="group hover:scale-105 transition-all duration-200 align-left mx-1  bg-[#d1d5db] dark:bg-[#25242477] rounded-lg">
                <div>
                  <img
                    src={item.background_image}
                    className="h-[270px] object-cover rounded-lg"
                  />
                  <h3 className="text-[20px] p-1">{item.name}</h3>
                </div>
                {/* Extra div */}
                {/* <div className="opacity-0 group-hover:opacity-100">
                  <button className="bg-blue-700 text-white font-bold py-1 px-3 rounded-xl">
                    Get Now
                  </button>
                </div> */}
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default TrendingGames;
