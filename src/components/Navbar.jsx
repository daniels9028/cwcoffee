import React from "react";
import logo from "../assets/cw_logo.png";

const Navbar = () => {
  return (
    <div className="w-full bg-[#0A225E] fixed z-50 top-0 left-0 navbar">
      <div className="max-w-[1300px] flex justify-between items-center h-24 mx-auto px-8">
        <img src={logo} alt="cw_logo" width={150} />
        <ul className="flex gap-20 text-white tracking-tight relative text-[15px] font-semibold">
          <li className="hover:text-[#DBA50F] hover:list-disc hover:underline">
            <a href="">HOME</a>
          </li>
          <li className="hover:text-[#DBA50F] hover:list-disc hover:underline">
            <a href="">ABOUT US</a>
          </li>
          <li className="hover:text-[#DBA50F] hover:list-disc hover:underline">
            <a href="">OUR MENU</a>
          </li>
          <li className="hover:text-[#DBA50F] hover:list-disc hover:underline">
            <a href="">OUTLET</a>
          </li>
          <li className="hover:text-[#DBA50F] hover:list-disc hover:underline">
            <a href="">ARTICLE</a>
          </li>
          <li className="hover:text-[#DBA50F] hover:list-disc hover:underline">
            <a href="">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
