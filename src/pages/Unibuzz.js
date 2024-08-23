import React, { useEffect } from 'react';
import './Unibuzz.css';
import UnibuzzBanner from '../resources/unibuzz/unibuzz-banner.png';
import UnibuzzProblem from '../resources/unibuzz/unibuzz-problem.png'
import UnibuzzObjective from '../resources/unibuzz/unibuzz-objective.png'
import UnibuzzApproach from '../resources/unibuzz/unibuzz-agile.png';
import UnibuzzInterview from '../resources/unibuzz/unibuzz-interview.png'
import UnibuzzSystem from '../resources/unibuzz/unibuzz-system.png'
import UnibuzzFlow from '../resources/unibuzz/unibuzz-flow.png'
import FinalUI from '../resources/finalui.png';
import OldProto2 from '../resources/old-filter-prototype2.gif'
import OldFilter from '../resources/old-filter.png';
import NewFilter from '../resources/new-filter.png';
import NewProto from '../resources/new-filter-prototype.gif';
import FinalProto from '../resources/final-proto2.gif'
import ScrollProgress from '../components/ScrollProgress';
import { useOutletContext } from 'react-router-dom';
import Slider from '../components/Slider';
import SliderReverse from '../components/SliderReverse';




const Unibuzz = () => {

  const { locoScroll } = useOutletContext();
  return (
    <main className='fade-in'>
      <ScrollProgress color="#FDA5AF" />
      <div className='lead-banner'>
        <img src = { UnibuzzBanner } loading='eager'></img>
      </div> 
      <div className='case-study'>
        <div className='overview'>
            <h5>Role: Lead Designer</h5>
            <h5>Responsibility: Responsive Web and Mobile App design</h5>
            <h5>Timeline: May 2022 - Present</h5>
        </div>
        <section className='baby'>
        <div className='case-p'>
          <h2>Overview</h2>
          <p>Unibuzz is a social network platform for university students that helps with all university related matters from peer networking, online messaging, forums for academic and non-academic purposes, and more. Its goal is to revolutionize university life for the 235 million students across 30,000 universities globally. 
          </p>
          <span className='space'></span>
          <p>
          As the lead designer of this massive startup project I worked closely with the stakeholders to deliver designs and prototypes for responsive web and mobile application. A large part of my responsibilities also included being involved in other sectors of the team such as marketing, development, and administration. </p>      
        </div>
        </section>
        <section className='baby'>
        <div className='case-p'>
          <h2>Problem</h2>
          <div className='img-container'>
            <img className= 'width-1200' src = { UnibuzzProblem } style= {{ boxShadow: '0px 6px 15px -2px rgba(16, 24, 40, 0.08), 0px 6px 15px -2px rgba(16, 24, 40, 0.08)'}}></img>
          </div>
          <p>Many students face significant challenges when navigating the transition to university life, including the high cost of professional counseling services and the difficulty of finding authentic, firsthand information about universities and career paths. They often rely on scattered information from various online sources, leading to frustration and inefficiency in managing academic and social interactions. Additionally, students struggle to balance their personal and university lives, often lacking a clear distinction between the two, which can lead to confusion and missed opportunities. The market is overcrowded with numerous unfocused platforms, and no single solution effectively addresses the needs of university life.</p>
        </div>
        </section>
        <section className='baby'>
        <div className='case-p'>
          <h2>Objective</h2>
          <div className='img-container'>
            <img className= 'width-1200' src = { UnibuzzObjective } style= {{ boxShadow: '0px 6px 15px -2px rgba(16, 24, 40, 0.08), 0px 6px 15px -2px rgba(16, 24, 40, 0.08)'}}></img>
          </div>
          <p>As a UX/Product Designer, my objective with Unibuzz is to design a platform that meets the unique needs of university students and faculty. My primary focus is on designing a user experience that minimizes the need for multiple apps, and facilitates both academic and non-academic interactions. From a business standpoint, my goal is to drive user engagement and retention through thoughtful design, helping to establish Unibuzz as the preferred platform in the educational sector. To achieve this, I have to deliver high fidelity designs and prototypes for the eventual January 2025 launch. After launch, success will be measured by user engagement metrics, retention rates, and positive feedback on the user experience.</p>
        </div>
        </section>
        <section className='parent'>  
          <div className='case-p'>
            <h2>Approach</h2> 
            <p>
            In developing Unibuzz, our approach is rooted in Agile UX principles. Design and user experience are iteratively refined through continuous feedback and collaboration. Feedback from each iteration will directly inform adjustments and improvements, allowing me to remain responsive to user needs and business goals. Throughout the process, cross-functional collaboration with development, marketing, and design teams will ensure that design decisions align with technical feasibility and project timelines.</p>
          </div>
        </section>   
      </div>
      <div className='banner'>
        <img src = { UnibuzzApproach } ></img>
      </div>
      <div className='case-study'>
        <section className='parent'>
          <div className='unibuzz-case'>
            <h3 className='step-title'>UX RESEARCH</h3>
            <h4 className='section-title'>Target User Interview</h4> 
            <span className='space'></span>
          </div>
          <section className='child'>
            <div className='img-container'>
              <img className= 'width-1200' src = { UnibuzzInterview } style= {{ boxShadow: '0px 6px 15px -2px rgba(16, 24, 40, 0.08), 0px 6px 15px -2px rgba(16, 24, 40, 0.08)'}}></img> 
            </div>
            <div className='case-p'>
              <p >Every digital product has a specific audience to target and focus on. In the case of Sip at Home, the target user happens to be every adult who is legally allowed to drink and has access to the internet. This means the age group ranges from 18 years and above, with no specific preference on gender, occupation, or location within South Korea. </p>
            </div>
          </section>
          <section className='child'>
          <div className='unibuzz-case'>
            <h3 className='step-title'>Product Architecture</h3>
            <h4 className='section-title'>User Journey Flows</h4> 
            <span className='space'></span>
          </div>
            <div className='img-container'>
              <img className= 'width-1200' src = { UnibuzzFlow } style= {{ boxShadow: '0px 6px 15px -2px rgba(16, 24, 40, 0.08), 0px 6px 15px -2px rgba(16, 24, 40, 0.08)'}}></img> 
            </div>
            <div className='case-p'>
              <p >Every digital product has a specific audience to target and focus on. In the case of Sip at Home, the target user happens to be every adult who is legally allowed to drink and has access to the internet. This means the age group ranges from 18 years and above, with no specific preference on gender, occupation, or location within South Korea. </p>
            </div>
          </section>
          <section className='child'>
          <div className='unibuzz-case'>
            <h3 className='step-title'>Design System</h3>
            <h4 className='section-title'>Visual Identity</h4> 
            <span className='space'></span>
          </div>
            <div className='img-container'>
              <img className= 'width-1200' src = { UnibuzzSystem } style= {{ boxShadow: '0px 6px 15px -2px rgba(16, 24, 40, 0.08), 0px 6px 15px -2px rgba(16, 24, 40, 0.08)'}}></img> 
            </div>
            <div className='case-p'>
              <p >Every digital product has a specific audience to target and focus on. In the case of Sip at Home, the target user happens to be every adult who is legally allowed to drink and has access to the internet. This means the age group ranges from 18 years and above, with no specific preference on gender, occupation, or location within South Korea. </p>
            </div>
          </section>
          <section className='child'>
          <div className='unibuzz-case'>
            <h3 className='step-title'>High Fidelity & Prototype</h3>
            <h4 className='section-title'>Design Showcase</h4> 
          </div>
          </section>
        </section>
      </div> 
      <Slider locoScroll={locoScroll} />
      <SliderReverse locoScroll={locoScroll} />
    </main>
  );
};

export default Unibuzz;