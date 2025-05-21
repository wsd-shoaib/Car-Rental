import "./About.css";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { FaTimes } from "react-icons/fa";
import React, { useState } from "react";

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => setIsVideoPlaying(true);
  const handleVideoClose = () => setIsVideoPlaying(false);

  return (
    <div className="about-area" id="about">
      <h1 className="about-title">About Car Rental</h1>

      <div className="both-side-area">
        {/* Left Side */}
        <div className="left-side">
          <div>
            <p>
              We are a leading car rental service provider offering premium and
              budget-friendly vehicles for all your travel needs. Whether you're
              planning a short trip, airport transfer, or luxury experience — we
              have the perfect car for you.
            </p>
            <p>
              With a fleet of well-maintained vehicles and professional support,
              we ensure your ride is safe, reliable, and comfortable.
            </p>
            <button className="about-btn">
              <a href="#booking"> Get Started</a>
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="right-side">
          {!isVideoPlaying && (
            <div className="video-area" onClick={handleVideoPlay}>
              <img src="assets/videoImgae.jpg" alt="video thumbnail" />
              <span className="video-icon">
                <SiGoogledisplayandvideo360 className="icon" />
              </span>
            </div>
          )}
        </div>
      </div>

      {isVideoPlaying && (
        <div className="About-Video-series">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/sIH0OYwudj4?si=Rbp8e_45eHVzmBhx"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <span onClick={handleVideoClose}>
            <FaTimes />
          </span>
        </div>
      )}
    </div>
  );
};

export default About;
