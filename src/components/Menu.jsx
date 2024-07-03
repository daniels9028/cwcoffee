import React from "react";
import { menus } from "../constants";

const Menu = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-20">
      <div className="px-4 w-full">
        <div className="rounded-xl bg-[#dedede] pb-20">
          <div className="flex justify-center items-center">
            <button className="rounded-md text-4xl bg-[#DBA50F] -mt-7 cursor-default px-4 py-2 text-white navbar tracking-wider">
              OUR MENUS
            </button>
          </div>
          <ul className="flex lg:gap-12 text-[#6c6c6c] text-lg navbar justify-center items-center mt-20">
            <button className="px-4 py-2 hover:bg-[#DBA50F] rounded-lg hover:text-white transition-colors duration-100">
              ALL
            </button>
            <button className="px-4 py-2 hover:bg-[#DBA50F] rounded-lg hover:text-white transition-colors duration-100">
              COFFEE
            </button>
            <button className="px-4 py-2 hover:bg-[#DBA50F] rounded-lg hover:text-white transition-colors duration-100">
              NON COFFEE
            </button>
            <button className="px-4 py-2 hover:bg-[#DBA50F] rounded-lg hover:text-white transition-colors duration-100">
              FOOD
            </button>
            <button className="px-4 py-2 hover:bg-[#DBA50F] rounded-lg hover:text-white transition-colors duration-100">
              STACK
            </button>
          </ul>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-items-center gap-8 mx-10 mt-10">
            {menus.map((menu, index) => (
              <div className="max-w-sm overflow-hidden h-full" key={index}>
                <img
                  src={menu.img}
                  alt={menu.name}
                  className="bg-cover w-60 h-60 rounded-xl"
                />
                <div className="flex justify-center items-center -mt-12">
                  <div className="rounded-xl flex-col flex text-center bg-white w-48 h-48 p-8">
                    <h2 className="font-[550] uppercase text-2xl outlet">
                      {menu.name}
                    </h2>
                    <span className="mt-2 navbar text-md">
                      {menu.description}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
