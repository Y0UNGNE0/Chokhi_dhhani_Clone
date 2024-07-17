import React, { useState } from "react";
import logo1 from "../images/Chokha-Punjab-min.png";
import logo2 from "../images/Pink-Pearl-min.png";
import logo3 from "../images/Rigid-min.png";

import arr from "../images/arrow-left.svg";
import arr2 from "../images/arrow-right.svg";

const data = [
  {
    id: 1,
    image: logo1,
    title: "Chokhi Dhani Group",
    about:
      "Founded in 2011, Chokha Punjab was founded with a vision to bring Punjabi culinary masterpieces and culture under one roof. It presents a captivating Punjabi theme village, offering local delicacies, folk music, bhangra and much more. Chokha Punjab authentically reflects the true essence of Punjabi culture, recreating the ambiance reminiscent of traditional Pind villages. Founded in 2011, Chokha Punjab was founded with a vision to bring Punjabi culinary masterpieces and culture under one roof. It presents a captivating Punjabi theme village, offering local delicacies, folk music, bhangra and much more. Chokha Punjab authentically reflects the true essence of Punjabi culture, recreating the ambiance reminiscent of traditional Pind villages. ",
  },
  {
    id: 2,
    image: logo3,
    title: "Dhani Interprise",
    about:
      "Punjabi culinary masterpieces and culture under one roof. It presents a captivating Punjabi theme village, offering local delicacies, folk music, bhangra and much more. Chokha Punjab authentically reflects the true essence of Punjabi culture, recreating the ambiance reminiscent of traditional Pind villages. Founded in 2011, Chokha Punjab was founded with a vision to bring Punjabi culinary masterpieces and culture under one roof. It presents a captivating Punjabi theme village, offering local delicacies, folk music, bhangra and much more. Chokha Punjab authentically reflects the true essence of Punjabi culture, recreating the ambiance reminiscent of traditional Pind villages. ",
  },
  {
    id: 3,
    image: logo2,
    title: "Another Item",
    about:
      "In 2022, Chokhi Dhani introduced Indian Stores in Karama, Sharjah and Al Seef UAE, a one-stop destination to purchase Indian gourmet delectables ranging from Ready-To-Eat Vegetable Curries and Combo, to everyday eatables like Pickles, Jams, and Chutneys and an array of Indian Street Food LIVE counters. The store also consists of a wide range of traditional Indian handicrafts from ‘Kalagram’.lture, recreating the ambiance reminiscent of traditional Pind villages. ",
  },
  {
    id: 4,
    image: logo3,
    title: "Yet Another Item",
    about:
      "Founded Chokha Punjab was founded with a vision to bring Punjabi culinary masterpieces and culture under one roof. It presents a captivating Punjabi theme village, offering local delicacies, folk music, bhangra and much more. Chokha Punjab authentically reflects the true essence of Punjabi culture, recreating the ambiance reminiscent of traditional Pind villages.  Founded in 2011, Chokha Punjab was founded with a vision to bring Punjabi culinary masterpieces and culture under one roof. It presents a captivating Punjabi theme village, offering local delicacies, folk music, bhangra and much more. Chokha Punjab authentically reflects the true essence of Punjabi culture, recreating the ambiance reminiscent of traditional Pind villages. ",
  },
  {
    id: 2,
    image: logo2,
    title: "Group of Same",
    about:
      "Chokha Punjab was founded with a vision to bring Punjabi culinary masterpieces and culture under one roof. It presents a captivating Punjabi theme village, offering local delicacies, folk music, bhangra and much more. Chokha Punjab authentically reflects the true essence of Punjabi culture, recreating the ambiance reminiscent of traditional Pind villages. Founded in 2011, Chokha Punjab was founded with a vision to bring Punjabi culinary masterpieces and culture under one roof. It presents a captivating Punjabi theme village, offering local delicacies, folk music, bhangra and much more. Chokha Punjab authentically reflects the true essence of Punjabi culture, recreating the ambiance reminiscent of traditional Pind villages. ",
  },
  {
    id: 2,
    image: logo1,
    title: "Rajsthani Khadi",
    about:
      "masterpieces and culture under one roof. It presents a captivating Punjabi theme village, offering local delicacies, folk music, bhangra and much more. Chokha Punjab authentically reflects the true essence of Punjabi culture, recreating the ambiance reminiscent of traditional Pind villages. Founded in 2011, Chokha Punjab was founded with a vision to bring Punjabi culinary masterpieces and culture under one roof. It presents a captivating Punjabi theme village, offering local delicacies, folk music, bhangra and much more. Chokha Punjab authentically reflects the true essence of Punjabi culture, recreating the ambiance reminiscent of traditional Pind villages. ",
  },
  {
    id: 2,
    image: logo3,
    title: "Mewadi Raja",
    about:
      "It presents a captivating Punjabi theme village, offering local delicacies, folk music, bhangra and much more. Chokha Punjab authentically reflects the true essence of Punjabi culture, recreating the ambiance reminiscent of traditional Pind villages. Founded in 2011, Chokha Punjab was founded with a vision to bring Punjabi culinary masterpieces and culture under one roof. It presents a captivating Punjabi theme village, offering local delicacies, folk music, bhangra and much more. Chokha Punjab authentically reflects the true essence of Punjabi culture, recreating the ambiance reminiscent of traditional Pind villages. ",
  },
  {
    id: 2,
    image: logo2,
    title: "New Rajasthan",
    about:
      "Punjabi culinary masterpieces and culture under one roof. It presents a captivating Punjabi theme village, offering local delicacies, folk music, bhangra and much more. Chokha Punjab authentically reflects the true essence of Punjabi culture, recreating the ambiance reminiscent of traditional Pind villages. Founded in 2011, Chokha Punjab was founded with a vision to bring Punjabi culinary masterpieces and culture under one roof. It presents a captivating Punjabi theme village, offering local delicacies, folk music, bhangra and much more. Chokha Punjab authentically reflects the true essence of Punjabi culture, recreating the ambiance reminiscent of traditional Pind villages. ",
  },
];

const FiftyCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullText, setShowFullText] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : data.length - 1
    );
    setShowFullText(false); // Reset showFullText when changing items
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < data.length - 1 ? prevIndex + 1 : 0
    );
    setShowFullText(false); // Reset showFullText when changing items
  };

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div>
      <div className="flex flex-row flex-wrap justify-center px-8 py-12">
        <div className="lg:w-1/2 w-full p-4 flex flex-row gap-3">
          <div className="self-center justify-center">
            <button
              className="text-white h-16 self-center justify-center"
              onClick={handlePrev}
            >
              <img src={arr} alt="arrow" />
            </button>
          </div>
          <div>
            <img
              src={data[currentIndex].image}
              alt="Logo"
              className="lg:p-8 md:p-16"
            />
          </div>
          <div className="self-center justify-center">
            <button
              className="text-white h-16 self-center justify-center"
              onClick={handleNext}
            >
              <img src={arr2} alt="arrow" />
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 w-full items-center justify-center self-center lg:p-8">
          <div>
            <div className="flex flex-col text-white text-left">
              <p className="text-left text-yellow-400">OTHER VENTURE</p>
              <h1 className="text-left">{data[currentIndex].title}</h1>
              <p className="text-left pb-6">
                {showFullText
                  ? data[currentIndex].about
                  : `${data[currentIndex].about.slice(0, 380)}...`}
              </p>
              <button
                className="btn warning bg-black lg:w-1/3 w-2/3  py-2"
                onClick={toggleFullText}
              >
                {showFullText ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiftyCard;
