import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { IoMdHome } from "react-icons/io";
import { RiTimeLine } from "react-icons/ri";
import { FaChartLine } from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "bg-[#244d3f] text-white" : ""
          }
        >
          <IoMdHome />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/timeline"}
          className={({ isActive }) =>
            isActive ? "bg-[#244d3f] text-white" : ""
          }
        >
          <RiTimeLine />
          TimeLine
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/stars"}
          className={({ isActive }) =>
            isActive ? "bg-[#244d3f] text-white" : ""
          }
        >
          <FaChartLine />
          Stars
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm fixed w-full top-0 ">
      <div className="navbar container mx-auto ">
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl" to="/">
            <img src={logo} alt="Website Logo" />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
