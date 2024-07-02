import { outlets } from "../constants";

import React from "react";

const Outlet = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-8">
      <div className="flex pt-20 md:flex-row flex-col">
        <div className="lg:w-1/4">
          <div className="flex flex-col items-center">
            <h1 className="font-[500] text-black text-center text-[55px] leading-none outlet">
              OUT <br />
              OUTLET
            </h1>
            <button className="mt-10 bg-[#0A225E] w-[140px] tracking-[2px] px-6 py-3 text-white rounded-md hover:bg-[#32323D] outlet">
              VIEW ALL
            </button>
          </div>
        </div>
        <div className="lg:w-3/4 md:mt-0 mt-10">
          <div className="grid md:grid-cols-3 place-items-center gap-4">
            {/* <OwlCarousel className="owl-theme" loop margin={10} nav> */}
            {outlets.map((outlet, index) => (
              <div className="w-full h-full" key={index}>
                <div className="flex justify-center items-center relative ">
                  <img
                    src={outlet.img}
                    alt={outlet.name}
                    className="rounded-full h-32 w-32"
                  />
                  <div className="absolute top-0 left-16 bg-white rounded-full py-2 px-1 navbar">
                    <span className="font-[500]">{outlet.year}</span>
                  </div>
                </div>
                <div className="text-wrap mt-5 text-center outlet">
                  <h2 className="text-[#0A225E] text-[30px]">{outlet.name}</h2>
                  <p className="text-[#6c6c6c] text-lg lowercase">
                    {outlet.address}
                  </p>
                </div>
              </div>
            ))}
            {/* </OwlCarousel> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outlet;
