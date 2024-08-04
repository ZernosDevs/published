import React from 'react';
import './About.css';
import Figma from '../resources/figma.png'
import Illustrator from '../resources/illustrator.png'
import Photoshop from '../resources/photoshop.png'
import Zeplin from '../resources/zeplin.png'
import Chromatic from '../resources/chromatic.png'
import HTML from '../resources/html.png'
import CSS from '../resources/css.png'
import Javascript from '../resources/javascript.png'
import Reactlogo from '../resources/react.png'
import Github from '../resources/github.png'


const About = () => {
  return (
    <div className='about-layout'>
      <div className='profile-frame1'>
        <div className='profile-image'>
          <img></img>
        </div>
        <div className='text-frame'>
          <h3>Hello my name is Robin!</h3>
          <div className='text-container'>
            <p>I’ve been a ux/product designer for the past three years, mainly helping startups and entrepreneurs bring their ideas to life! </p>
            <p>I also worked as a frontend developer for a design school and dabbled in esports coaching. To make it more shocking, I did my education in biological science, completing my bachelor’s degree in Japan.</p>
            <p>How did a former biology student, esports coach, and frontend developer get into ui/ux design? I’ve always had a passion for artistic creation since I was young but never truly realized it until after dabbling myself in multiple different interests. It was not too long until a colleage of mine in the esports scene asked me to create a website together. We both had no experience and didnt know where to start, so I took design classes and self-taught myself all the necessary skills for creating outstanding and user intutitive products. From then on, I really enjoyed the work and finally felt fulfilled. This feeling would be the thing that would cement my career in product design. </p>
          </div>
        </div>
      </div>
      <div className='skillset'>
        <h3> My Skillset</h3>
        <div className='text-container'>
            <div className='skill-logo'>
              <img src= { Figma }></img>
              <img src= { Illustrator }></img>
              <img src= { Photoshop }></img>
              <img src= { Zeplin }></img>
              <img src= { Chromatic }></img>
            </div>
            <p className='bullet'> &#x2022; &nbsp;  3 Years of experience with Figma: expert at responsive design, prototyping, design system, variables, modes, and currently awaiting the Figma AI feature!</p>
            <div className='skill-logo'>
              <img src= { HTML }></img>
              <img src= { CSS }></img>
              <img src= { Javascript }></img>
              <img src= { Reactlogo }></img>
              <img src= { Github }></img>
            </div>
            <p className='bullet'>&#x2022; &nbsp;  Frontend development, html css javascript react. I can create static websites from scratch with coding. </p>
            <p className='bullet'> &#x2022; &nbsp;  Startup co-founder: I have a strong understanding of business, marketing, product design and management. As I am leading my own company with my co-founders I have to know everything it takes to keep the business together and growing. </p>
        </div>
      </div>
      <div className='values'>
        <h3> My Values </h3>
        <div className='text-container'>
            <p className='bullet'>&#x2022; &nbsp;  I take my work very seriously. I need to have a complete understanding of a task before I can start designing. This means understanding the user needs, business needs,client requirements, product vision and more. If I can have a full understanding of a project, I can truly shine and deliver.</p>
            <p className='bullet'>&#x2022; &nbsp;  I will never leave a task unfinished. If I must work more than 12 hours a day unpaid to meet a deadline, I will not hesitate to do so. I would never want to dissapoint the people who work with me, hence I carry a very strong sense of responsibility.</p>
            <p className='bullet'>&#x2022; &nbsp;  I like taking the initiative almost all the time. It sometimes puts me in an uncomfortable spot but I know that if I get through the uncomfortable experience it will stop being uncomfortable and more of a lesson to me. </p>
        </div>
      </div>
      <div className='profile-frame2'>
          <h4>Let's Help Each Other Out!</h4>
      </div>
    </div>
  );
};

export default About;