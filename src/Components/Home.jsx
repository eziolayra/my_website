import React from 'react'
import Navbar from './Navbar'
import bannerbackground from '../Asset/home-banner-background.png';
import bannerImage from "../Asset/home-banner-image.png";
import { FiArrowRight } from 'react-icons/fi';


const Home = () => {
  return (
    <div className='home-container'>
      <Navbar/>
      <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
          <img src={bannerbackground} alt=""/>
        </div>
        <div className='home-text-section'>
          <h1 className='primary-heading'>
            We Deliver Food Fresh
          </h1>
          <p className='primary-text'>
            Healthy switcher chef do all the prep work,like peeding, chopping and marinating, so you can cook  fresh food
          </p>
          <button className='secondary-button'>
            Order Now<FiArrowRight/>
          </button>
        </div>
        <div className='home-image-container'>
          <img src={bannerImage} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Home
