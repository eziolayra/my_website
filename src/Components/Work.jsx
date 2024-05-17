import React from 'react';
import PickMeals from '../Asset/pick-meals-image.png';
import ChooseMeals from '../Asset/choose-image.png';
import DeliveryMeals from '../Asset/delivery-image.png';

const Work = () => {
  const workInfodata = [
    {
        image:PickMeals,
        title:"Pick Me",
        text: "pick order bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla "
    },
    {
        image:ChooseMeals,
        title:"Choose How often",
        text: "Choose order bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla "
    },
    {
        image:DeliveryMeals,
        title:"fastam fast delivery",
        text: "Order delivery fastam fast bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla "
    },
  ]  
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Work</p>
            <h1 className='primary-heading'>How It Works</h1>
            <p className='primary-text'> It Works like Work Work Work Work Work Everybody Work WorkWork WorkWork WorkWork WorkWork WorkWork WorkWork WorkWork WorkWork Work</p>
        </div>
        <div className='work-section-bottom'>
            {workInfodata.map((data, index) => (
                <div key={index} className='work-section-info'>
                    <div className='info-boxes-img-container'>
                        <img src={data.image} alt=''/>
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Work