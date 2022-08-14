import React, { useState } from "react";
import { BsCaretDown } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { AdminNavOptions } from "../assets/static/navBarData";
import Profile from "../assets/images/profile.jpeg";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <>
      <div
        className={` ${
          toggle ? "w-full large:w-96" : "-translate-x-full  w-0"
        } duration-500 absolute h-screen w-96 bg-zinc-50 flex flex-col justify-between`}
      >
        <button
          onClick={handleToggle}
          className={` ${
            !toggle
              ? "  -right-20  border-zinc-600"
              : "right-6 text-sm  border-orange-600"
          }  duration-500 absolute top-6 border-2 h-14 w-14 font-extralight uppercase`}
        >
          {toggle ? "Close" : "Menu"}
        </button>
        <div className="mt-56  overflow-x-hidden">
          <Menu />
        </div>
        <div className=" h-28 px-14 mt-10">
        <div className="flex justify-start gap-3">
          <div className="h-14 w-14">
            <img
              src={Profile}
              className="border-2 border-orange-400 h-full w-full rounded-full object-top  object-cover "
              alt=""
            />
          </div>
          <div className="h-14 flex flex-col justify-start items-start uppercase font-extralight">
            <p className="text-lg ">Nischal Timalsina</p>
            <p className="text-sm">ID: 12345678SAU</p>
          </div>
        </div>
        <button className="font-extralight px-3 ml-14 text-red-500">Log Out</button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

const Menu = () => {
  return (
    <ul className="space-y-  ">
      {AdminNavOptions.map((nav) => (
        <li key={nav.id} className="">
          <div className="flex items-center py-2 px-16 font-extralight hover:font-light hover:bg-zinc-200 ">
            <NavLink
              className={({ isActive }) =>
                [
                  ` flex items-center justify-between w-full tracking-widest `,
                  isActive ? " text-orange-600 ease-linear duration-300 " : " ",
                ]
                  .filter(Boolean)
                  .join(" ")
              }
              to={nav.url}
            >
              {nav.label}
            </NavLink>
            {nav.subNav && <Button array={nav} />}
          </div>
          <ul
            id={`${nav.label}`}
            className="hidden leading-8 h-0 -translate-y-full duration-300 overflow-hidden "
          >
            {nav.subNav &&
              nav.subNav.map((subnav, idx) => (
                <li
                  key={idx}
                  className={` first-of-type:mt-3 last-of-type:mb-3 ml-20 px-3 font-extralight hover:font-light hover:bg-zinc-200`}
                >
                  <NavLink
                    className={({ isActive }) =>
                      [
                        `  tracking-widest `,
                        isActive
                          ? " text-orange-600 ease-linear duration-300 "
                          : " ",
                      ]
                        .filter(Boolean)
                        .join(" ")
                    }
                    to={subnav.url}
                  >
                    {subnav.label}
                  </NavLink>
                </li>
              ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

const Button = ({ array }) => {
  const element = document.querySelector(`#${array.label}`);

  const showDrop = () => {
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden", "h-0", "-translate-y-full");
      element.classList.add("h-");
    } else {
      element.classList.add("hidden", "h-0");
    }
  };
  return (
    <button className="w-full flex justify-end" onClick={showDrop}>
      <BsCaretDown />
    </button>
  );
};
