import React, { useState } from "react";
import logo3 from "../images/Screenshot from 2024-02-03 13-27-56.png";

export default function Elecomp() {
  const [showFullText, setShowFullText] = useState(false);

  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div>
      <div className="flex flex-row justify-around my-24 flex-wrap md:items-center lg:px-2 px-8 lg:py-24">
        <div>
          <div className="lg:pt-24 pt-6">
            <img src={logo3} alt="Logo" />
          </div>
        </div>
        <div className="flex flex-col lg:w-1/2 w-full text-white justify-center items-center">
          <p>About</p>
          <h1>Chokhi Dhani Group</h1>
          <p className="py-6">
            {showFullText ? (
              <>
                Established in 1990, Chokhi Dhani is an Indian hospitality brand
                that offers some of the best resorts and best hotels, along with
                exquisite resorts in various cities across the country. Our
                commitment to promote our rich heritage and hospitality extends
                beyond borders, as we also offer exceptional fine-dining
                experiences in renowned locations like Dubai and London. Known
                for its immersive Rajasthani-themed experiences, traditional
                food, music, dance, and other cultural activities, one can
                experience the essence of Rajasthan at Chokhi Dhani Resort,
                golden grandeur of royal India at the Palace Hotel, Jaisalmer
                and the list goes on...... At Chokhi Dhani Group, we hold a
                deep-rooted commitment to preserving and promoting India's rich
                cultural heritage. Our extensive community of talented artists
                and artisans forms the backbone of our efforts. Through
                immersive experiences and captivating performances, we strive to
                share the beauty and diversity of Indian traditions with the
                world. Over the last few decades, Chokhi Dhani has expanded its
                horizons, venturing into the realm of handicrafts and
                ready-to-eat delicacies.eatables with its footprint in India and
                beyond. With our commitment to heritage and dedication to
                promoting Indian traditions, Chokhi Dhani has become a trusted
                name in the hospitality industry with one of the best hotels and
                other parts of the country. Whether you seek luxurious
                accommodations, cultural experiences, or delectable cuisine,
                Chokhi Dhani promises an unforgettable journey into the richness
                of India's cultural heritage.
              </>
            ) : (
              <>
                Established in 1990, Chokhi Dhani is an Indian hospitality brand
                that offers some of the best resorts and best hotels, along with
                exquisite resorts in various cities across the country. Our
                commitment to promote our rich heritage and hospitality extends
                beyond borders, as we also offer exceptional fine-dining
                experiences in renowned locations like Dubai and London. Known
                for its immersive Rajasthani-themed experiences, traditional
                food, music, dance, and other cultural activities, one can
                experience the essence of Rajasthan at Chokhi Dhani Resort,
                golden grandeur of royal India at the Palace Hotel, Jaisalmer
                and the list goes on......
                {/* Show a portion of the text with an ellipsis */}
                <span>... </span>
              </>
            )}
          </p>
          <button
            onClick={toggleFullText}
            className="btn warning bg-black lg:w-1/3 w-full "
          >
            {showFullText ? "Read Less" : "Read More"}
          </button>
        </div>
        <div>
          <div className="lg:pt-24 pt-6">
            <img src={logo3} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
