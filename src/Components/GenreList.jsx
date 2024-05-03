import React, { useEffect, useState } from "react";
import GlobalAPI from "../Services/GlobalAPI";

function GenreList() {
  useEffect(() => {
    getGenreList();
  }, []);

  const [GenreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const getGenreList = () => {
    GlobalAPI.getGenreList.then((resp) => {
      //   console.log(resp.data.results);
      setGenreList(resp.data.results);
    });
  };

  return (
    <div className="">
      <h2 className="text-[35px] font-bold">Genres</h2>
      {GenreList.map((item, index) => (
        // <div className="flex items-center mb-2 p-1 gap-2 cursor-pointer hover:bg-gray-300  dark:hover:text-black p-2 rounded-lg">
        <div
          onClick={() => setActiveIndex(index)}
          key={item.id}
          className={`flex items-center mb-2 mr-2 gap-2 cursor-pointer hover:bg-gray-300  hover:dark:bg-gray-600 p-2 rounded-lg group
          ${activeIndex == index ? "bg-gray-300 dark:bg-gray-600" : null}`} //p-2
        >
          <img
            src={item.image_background}
            className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all-ease-out duration-200 ease-in-out
            ${activeIndex == index ? "scale-105" : null}`}
          />
          <h3
            className={`text-[18px] group-hover:font-bold transition-all-ease-out duration-200
          ${activeIndex == index ? "font-bold" : null}`}
          >
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default GenreList;
