import React from "react";
import Profile from "../Asset/profile.png";
import { AiFillStar } from "react-icons/ai";

const Review = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Review</p>
        <h1 className="primary-text">What Are You Saying</h1>
        <p className="primary-text">
          Client says bla bla bla han tan han tan bla bla bla han tan han tanbla
          bla bla han tan han tanbla bla bla han tan han tan
        </p>
      </div>
      <div className="review-section-wrapper">
        <div className="review-section-bottom">
          <img src={Profile} alt="" className="review-profile" />
          <p>Bigli girake me bhig aai kete he muj ko hawa hawai</p>
          <div className="reviews-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>NoName</h2>
        </div>
        <div className="review-section-bottom">
          <img src={Profile} alt="" className="review-profile" />
          <p>Bigli girake me bhig aai kete he muj ko hawa hawai</p>
          <div className="reviews-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>NoEye</h2>
        </div>
        <div className="review-section-bottom">
          <img src={Profile} alt="" className="review-profile" />
          <p>Bigli girake me bhig aai kete he muj ko hawa hawai</p>
          <div className="reviews-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>NoNose</h2>
        </div>
        <div className="review-section-bottom">
          <img src={Profile} alt="" className="review-profile" />
          <p>Bigli girake me bhig aai kete he muj ko hawa hawai</p>
          <div className="reviews-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>NoFace</h2>
        </div>
      </div>
    </div>
  );
};

export default Review;
