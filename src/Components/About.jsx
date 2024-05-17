import React from "react";
import AboutBackGround from '../Asset/about-background.png'
import AboutBackGroundImage from '../Asset/about-background-image.png' 
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () =>{
    return (
      <div className="about-section-container">
        <div className="about-background-image-container">
          <img src={AboutBackGround} alt="" />
        </div>
        <div className="about-section-image-container">
          <img src={AboutBackGroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
          <p className="primary-subheading">About</p>
          <h1 className="primary-heading">
            Food Is An Important Part Of A Balanced Diet
          </h1>
          <p className="primary-text">
            guf is guf, guf gaf guf guf guf gaf guf gufguf gaf guf gufguf gaf
            guf gufguf gaf guf guf
          </p>
          <p className="primary-text">
            I repete once again, guf gaf guf guf guf gaf guf gufguf gaf guf gufguf gaf
            guf gufguf gaf guf guf
          </p>
          <div className="about-buttons-container">
            <button className="secondary-button">Learn More</button>
            <button className="watch-video-button"><BsFillPlayCircleFill/>Watch Video</button>
          </div>
        </div>
      </div>
    );
}

export default About;