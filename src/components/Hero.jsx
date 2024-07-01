import React from "react";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.jpg";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="w-full bg-center bg-cover z-20 bg-black h-[900px] bg-background-hero">
      <div className="max-w-[1300px] my-20 mx-auto">
        <div className="grid lg:grid-cols-2 place-items-center gap-4 px-8">
          <div className="text-white z-20">
            <img src={hero1} alt="hero1" width={500} />
            <h1 className="font-semibold text-2xl">SEJAK 2015</h1>
            <p className="text-xl">
              CW Coffee Menyajikan #KopiTerbaik & sajian lezat untuk semua
              kalangan Sejuta rasa untuk #BerbagiSemangat Bukan #KedaiKopi biasa
              Mampir & jadi #SahabatSejatiku
            </p>
            <button className="bg-[#0A225E] mt-10 px-10 py-3 rounded-lg hover:bg-[#32323D]">
              READ MORE
            </button>
            <div className="flex gap-8 mt-20 cursor-pointer">
              <div className="flex gap-2 hover:text-[#DBA50F]">
                <FaInstagram size={20} />
                <span>INSTAGRAM</span>
              </div>
              <div className="flex gap-2 hover:text-[#DBA50F]">
                <FaFacebook size={20} />
                <span>FACEBOOK</span>
              </div>
            </div>
          </div>
          <img
            src={hero2}
            alt="hero2"
            width={500}
            className="mt-20 rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
