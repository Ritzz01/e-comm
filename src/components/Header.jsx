import React from "react";
import image from "../img/image";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="top bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Link to="/home">
          {" "}
          {/* This handles the navigation */}
          <img
            src={image.logo}
            className="h-10 w-10 rounded-lg cursor-pointer"
            alt="Logo"
          />
        </Link>
        <span className="text-lg font-medium">MyApp</span>
      </div>

      {/* Search Bar */}
      <div className="search flex items-center bg-gray-700 rounded-md px-2">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-white p-2 outline-none  w-200"
        />
        <SearchIcon className="cursor-pointer" />
      </div>

      {/* Navigation Links */}
      <div className="nav flex gap-4">
        <div className=" text-center cursor-pointer hover:text-gray-300">
        <Link to="/">
          <h1>Signned</h1>
          <h2 className="text-sm font-semibold"> Signout</h2>
        </Link>
        </div>
        <div className=" text-center cursor-pointer hover:text-gray-300">
          <h1>Returns</h1>
          <h2 className="text-sm font-semibold">Orders</h2>
        </div>
        <div className=" text-center cursor-pointer hover:text-gray-300">
          <h1>Your</h1>
          <h2 className="text-sm font-semibold">Account</h2>
        </div>
        <div className=" text-center cursor-pointer hover:text-gray-300 ">
          <Link to="/checkout">
            <ShoppingBasketIcon />

            <span className="basket ml-3 text-sm font-semibold">{basket?.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
