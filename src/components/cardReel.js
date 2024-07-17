import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import video1 from "../images/2.mp4";
import video2 from "../images/v7.mp4";
import video3 from "../images/v15.mp4";

export default function CardReel() {
  const videos = [
    video1,
    video1,
    video2,
    video1,
    video3,
    video1,
    video2,
    video3,
    video1,
    video1,
    video2,
    video1,
  ];

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    gap: 3,
    responsive: [
      {
        breakpoint: 3100, // for laptops and larger screens
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 600, // for mobile and smaller screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1200, // for mobile and smaller screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div key={index} className="lg:w-1/7 w-full gap-4 mr-8">
            <video
              width="100%"
              height="auto"
              autoPlay
              loop
              muted
              className="pr-8"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </Slider>
    </div>
  );
}
