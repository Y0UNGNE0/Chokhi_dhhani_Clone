import React from "react";
import logo3 from "../images/Screenshot from 2024-02-05 15-27-58.png";
import logo4 from "../images/Chokha-Punjab-min.png";
import logo5 from "../images/Screenshot from 2024-02-05 16-46-26.png";
import logo6 from "../images/Screenshot from 2024-02-05 19-04-39.png";

export default function worldOf() {
  return (
    <div>
      {" "}
      <div className="flex flex-col items-center justify-center flex-wrap pb-8">
        <div>
          {" "}
          <div>
            {/* <p className=" text-yellow-400 text-white">OUR HOTELS & RESORTS</p> */}
          </div>
          <div>
            <h1 className="text-white">World of Chokhi Dhani</h1>
          </div>
          <div className="self-center lg:mlSevenE sm:mlSevenD pb-10 ">
            {" "}
            <img src={logo3} alt="Logo" />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-6  flex-wrap px-6">
        <div>
          <div className="flex flex-row gap-3 ">
            <div>
              {" "}
              <img src={logo4} alt="Logo" className="rounded-full w-16 h-16" />
            </div>
            <div className="flex flex-col ">
              <div>
                {" "}
                <h2 className="text-white text-left">World of Chokhi Dhani</h2>
              </div>
              <div>
                {" "}
                <p className="  text-white text-left underline">
                  chokhidhanidubai
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="py-6 w-full">
            {" "}
            <img src={logo5} alt="Logo" className="imgSize" />
          </div>{" "}
        </div>
        <div>
          <div className="flex flex-row gap-3 ">
            <div>
              {" "}
              <img src={logo4} alt="Logo" className="rounded-full w-16 h-16" />
            </div>
            <div className="flex flex-col ">
              <div>
                {" "}
                <h2 className="text-white text-left">World of Chokhi Dhani</h2>
              </div>
              <div>
                {" "}
                <p className="  text-white text-left underline">
                  chokhidhanidubai
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="py-6 w-full">
            {" "}
            <img src={logo6} alt="Logo" className="imgSize" />
          </div>{" "}
        </div>{" "}
        <div>
          <div className="flex flex-row gap-3 ">
            <div>
              {" "}
              <img src={logo4} alt="Logo" className="rounded-full w-16 h-16" />
            </div>
            <div className="flex flex-col ">
              <div>
                {" "}
                <h2 className="text-white text-left">World of Chokhi Dhani</h2>
              </div>
              <div>
                {" "}
                <p className="  text-white text-left underline">
                  chokhidhanidubai
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="py-6 w-full">
            {" "}
            <img src={logo5} alt="Logo" className="imgSize" />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
