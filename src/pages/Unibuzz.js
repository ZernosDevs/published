import React from 'react';
import './Unibuzz.css';
import Sipbanner from '../resources/sipbanner.png';
const Unibuzz = () => {
  return (
    <>
      <div className='banner'>
        <img src = { Sipbanner }></img>
      </div>
      <div className='case-study'>
        <div className='overview'>
          <h5>Role: Product Designer (Responsive Web)</h5>
          <h5>Responsibility: End to end UI UX design</h5>
          <h5>Timeline: April 2024 - Present</h5>
        </div> 
        <div className='case-p'>
          <h2>Overview</h2>
          <p>Sip at Home is an online marketplace(Ecommerce) for all types of alcoholic beverages. It lets you choose your drink based on type, ingredient, and most importantly taste. As the sole product designer of this project, I was responsible for conducting UX research and creating responsive web designs. This is a freelance request from an entrepreneur looking to break into the alcoholic beverage online market. </p>
        </div>
      </div>
    </>
  );
};

export default Unibuzz;