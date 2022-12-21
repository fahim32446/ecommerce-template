import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";

const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className="container mx-auto max-w-7xl p-2 md:p-0 mb-5">
      <div className="justify-between py-4 hidden md:flex">
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
          <div className="relative cursor-pointer" onClick={()=>setOpen(!open)}>
            <ShoppingCartOutlinedIcon />
            <span className="font-semibold absolute left-5 bottom-3 text-blue-500">0</span>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
