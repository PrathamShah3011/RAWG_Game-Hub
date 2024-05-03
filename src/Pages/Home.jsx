import React, { useEffect, useState } from "react";
import GenreList from "../Components/GenreList";
import GlobalAPI from "../Services/GlobalAPI";
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";

function Home() {
  //gamesList
  useEffect(() => {
    getAllGamesList();
  }, []);

  const [gamesList, setGamesList] = useState([]);
  const randomBanner = Math.floor(Math.random() * gamesList.length);

  const getAllGamesList = async () => {
    try {
      const resp = await GlobalAPI.getAllGames;
      setGamesList(resp.data.results);
      //   console.log("GameList", gamesList);
    } catch (error) {
      console.log(error);
    }

    // GlobalAPI.getAllGames.then((resp) => {
    //   //   console.log(resp.data.results);
    //   setGamesList(resp.data.results);
    // });
  };
  return (
    <div className="dark:text-white grid grid-cols-4 px-8">
      <div className="hidden md:block">
        <GenreList />
      </div>
      <div className=" col-span-4 md:col-span-3 w-full">
        {/* {console.log("return", gamesList)} */}
        {gamesList.length > 0 ? (
          <div>
            <Banner gameBanner={gamesList[randomBanner]} />
            <TrendingGames gamesList={gamesList} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
