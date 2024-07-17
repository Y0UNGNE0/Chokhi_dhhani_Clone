import React from "react";
import logo3 from "../images/Screenshot from 2024-02-05 15-27-58.png";
import logo4 from "../images/ZDA_3301.avif";

export default function ourHotels() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div>
        {" "}
        <div>
          <p className=" text-yellow-400 text-white">OUR HOTELS & RESORTS</p>
        </div>
        <div>
          <h1 className="text-white">An unforgettable experience</h1>
        </div>
        <div className="self-center items-center justify-center text-center  w-full mlSeven">
          {" "}
          <img src={logo3} alt="Logo" />
        </div>
      </div>
      <div className="py-4 ">
        <img src={logo4} alt="Logo" className="p-4" />
      </div>

      <div></div>
    </div>
  );
}
