import React, { useContext, useEffect } from "react";
import { useState } from "react";
import logo from "../assets/react.svg";
import { HiOutlineMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    (theme === "light"
      ? () => {
          {
            setTheme("light");
            localStorage.setItem("theme", "light");
          }
        }
      : () => {
          {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
          }
        })();
  }, [theme]);

  return (
    <div className="flex  p-3 items-center">
      <img src={logo} width={40} height={40} />
      <div className="flex p-3 bg-slate-200 w-full items-center mx-5 rounded-full">
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          className="pl-2 bg-transparent outline-none w-full "
        />
      </div>
      <div
        onClick={() => {
          theme === "light" ? setTheme("dark") : setTheme("light");
        }}
      >
        {theme === "light" ? (
          <HiMoon className="text-[40px] bg-slate-200 text-black rounded-full p-1 cursor-pointer" />
        ) : (
          <HiSun className="text-[40px] bg-black text-slate-200 rounded-full p-1 cursor-pointer" />
        )}
      </div>
    </div>
  );
}

export default Header;
