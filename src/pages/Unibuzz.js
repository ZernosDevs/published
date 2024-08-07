import React from 'react';
import './Unibuzz.css';
import Sipbanner from '../resources/sipbanner.png';
import Approach from '../resources/approach.png';
import TargetUser from '../resources/target user.png';
import Stats from '../resources/stats.png';
import Conbini from '../resources/conbini.png';
import Requests from '../resources/requests.png'

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
            <h5>Timeline: April 2024 - June 2024</h5>
            
        </div>
        <div className='case-p'>
          <h2>Overview</h2>
          <p>In South Korea, online alcohol sales are heavily regulated, with delivery currently banned. However, recent policy changes now allow consumers to order online for pick-up at select convenience stores. A client by the name of Mr. Lee, a liquor store owner, plans to launch a platform for online alcohol purchases and delivery, anticipating future policy shifts. 
          </p>
          <p>
          Sip at Home is an online marketplace(Ecommerce) for all types of alcoholic beverages. It lets you choose your drink based on type, ingredient, and most importantly taste. As the sole product designer of this project, I was hired as a freelancer to handle everything from logo creation to user experience research and responsive web design. </p>

          <p>*For the sake of international viewers, all figures and designs have been translated from Korean to English*</p>
          
        </div>
        <div className='case-p'>
          <h2>Problem</h2>
          <p>The strict regulations on online alcohol sales and the prohibition of delivery in South Korea limits the business potential of liquor store owners and consumer convenience. Users are frustrated by the inability to have alcohol delivered, relying instead on physical store visits or inconvenient pick-up options. Existing solutions around the restrictions, like online ordering for in-store pick-up, failed to meet the growing demand for home delivery. My task was to design a platform ready to launch once the delivery ban is lifted which would help position my client at the forefront of the market. </p>
        </div>
        <div className='case-p'>
          <h2>Objective</h2>
          <p>My primary objective was to create a seamless and convenient online alcohol purchasing experience for users, ensuring easy access and delivery once regulations allowed. For the business, the goal was to establish a leading market position and form strategic partnerships with liquor stores nationwide for distribution and sales. I aimed to complete the platform within three months, divided into phases of user research, design development, and final prototyping. Success would be measured by user count and satisfaction, the number of partnerships secured, and the platform’s readiness for launch. </p>
        </div>   
      </div>
      <div className='approach-bg'>
        <img src = { Approach }></img>
      </div>
      <div className='case-study'>
        <div className='case-p'>
          <h2>Approach</h2> 
          <p>Through a simple yet effective design process, I approached this task by understanding the scope of the project, conducting user research, preparing user journeys and sitemaps, designing the final UI and ultimately testing the product through usability tests and prototypes. If the stakeholders would like to change any part of the product I go back and redesign any components. </p>
          <h3>Project Overview</h3>
        </div>
        <div className='img-container'>
          <img src = { TargetUser }></img> 
        </div>
        <div className='case-p'>
          <h4>Understanding the User</h4> 
          <p>Every digital product has a specific audience to target and focus on. In the case of Sip at Home, the target user happens to be every adult who is legally allowed to drink and has access to the internet. This means the age group ranges from 18 years and above, with no specific preference on gender and race, although some cultures have banned the consumption of alcohol. </p>
          <h5 className='emphasis'>Create a product that is inclusive, neutral, and appealing to a wide demographic.</h5>
        </div>
        <div className='case-p'>
          <h4>Understanding the Business</h4> 
        </div>
        <div className='img-container'>
          <img src = { Stats }></img>
          <h6>Quarterly transaction value of online food and beverages sales in South Korea from the 1st quarter of 2017 to the 1st quarter of 2024, Statista (2024)</h6> 
        </div>
        <div className='case-p'>
          <p>The online food and beverage market in South Korea has experienced remarkable growth, driven by an increasing preference for convenience and technological advancements. Home delivery services have become particularly popular due to the busy lifestyles of South Koreans and the rapid adoption of mobile technology. Although alcohol can be purchased online, it must be picked up at one of the following covenience stores in the country. </p>
        </div>
        <div className='img-container'>
          <img src = { Conbini }></img>
          <h6>Online alcohol sales are dominated by physical store visits or pickup services provided by convenience store chains.</h6> 
        </div>
        <div className='case-p'>
          <h5 className='emphasis'>An app dedicated to online alcohol home delivery has the potential to become an instant-hit</h5>
        </div>
        <div className='img-container'>
          <img src = { Requests }></img>
          <h6>Business requests from the stakeholders</h6> 
        </div>
        <div className='case-p'>
          <p>Just like any other project, a client or stakeholder will demand certain requests or features to be carried out during the development process. My client requested several key features for the platform: a filter option for the drink catalog based on type, ingredient, and taste; product labels indicating country of origin, rating, and seller count; validation of business requests through both quantitative and qualitative user research; and a responsive design to facilitate future mobile application development. </p>
        </div>
        <div className='case-p'>
          <h3>User Research</h3>
          <p>
          Based on my understanding of the target user and the business requirements, I conducted two methods of research to test initial hypothesis and get a better insight into what the users would think of the product’s features.  
          </p>
        </div>
      </div>
    </>
  );
};

export default Unibuzz;