import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="justify-between py-2 hidden md:flex">
      <div className="flex gap-3">
        {["Man", "Women", "Children", "Accessories"].map((item, index) => (
          <Link className="font-semibold">{item}</Link>
        ))}
      </div>
      <div className="font-semibold text-lg">AZ-STORE</div>
      <div className="flex gap-3">
        {["Homepage", "About", "Contact", "Stores"].map((item, index) => (
          <Link className="font-semibold">{item}</Link>
        ))}

        <SearchIcon />
        <PersonOutlineOutlinedIcon />
        <FavoriteBorderOutlinedIcon />
        <div>
        <ShoppingCartOutlinedIcon />
        <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
