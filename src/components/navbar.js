import React from "react";
import logo from "../images/logo.png";
import video from "../images/ban_video.mp4";

const Navbar = () => {
  return (
    <div className="relative">
      {/* Navbar for small screens */}
      <div className="sm:hidden">
        <div className="flex lg:justify-between  justify-center items-center  text-white absolute w-full ">
          <img src={logo} alt="Logo" className="h-12" />
          <button className="text-white">
            {/* Add your mobile menu button/icon here */}
          </button>
        </div>
        <div className="video-size">
          <video
            width="100%"
            height="auto"
            autoPlay
            loop
            muted
            className="w-full"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Additional mobile menu content goes here */}
      </div>

      {/* Navbar for medium and larger screens */}
      <div className="hidden sm:block">
        <div className="relative">
          <div className="">
            <video
              width="100%"
              height="auto"
              autoPlay
              loop
              muted
              className="w-full"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="flex justify-around text-white absolute top-0 left-0 right-0 ">
            <div>
              <ul className="flex gap-4 py-3">
                <li>About Us</li>
                <li>Hotel Resorts</li>
                <li>Village Fair</li>
              </ul>
            </div>
            <div>
              <img src={logo} alt="Logo" className="h-16" />
            </div>
            <div>
              <ul className="flex gap-4 py-3">
                <li>Other Venture</li>
                <li>Wedding</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
