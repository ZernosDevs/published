import React, { useState, useEffect } from 'react';
import './About.css';
import Figma from '../resources/figma.png';
import Illustrator from '../resources/illustrator.png';
import Photoshop from '../resources/photoshop.png';
import Zeplin from '../resources/zeplin.png';
import Chromatic from '../resources/chromatic.png';
import HTML from '../resources/html.png';
import CSS from '../resources/css.png';
import Javascript from '../resources/javascript.png';
import Reactlogo from '../resources/react.png';
import Github from '../resources/github.png';
import ProfilePic from '../resources/profile test 2.png';
import ProfilePic2 from '../resources/profilepic-2.jpg';
import ProfilePic3 from '../resources/profilepic-3.jpg';
import ProfilePic4 from '../resources/profilepic-4.jpg';
import ProfilePic5 from '../resources/profilepic-5.jpg';

const About = () => {
  
  return (
    <div className='about-layout'>
      <div className='profile-frame1'>
        <div className='profile-image'>
          <img src={ProfilePic} alt='Profile Pic 1' className='profile-pic' />
          <img src={ProfilePic2} alt='Profile Pic 2' className='profile-pic' />
          <img src={ProfilePic3} alt='Profile Pic 3' className='profile-pic' />
          <img src={ProfilePic4} alt='Profile Pic 4' className='profile-pic' />
          <img src={ProfilePic5} alt='Profile Pic 5' className='profile-pic' />
        </div>
        <div className='text-frame'>
          <h3>Hello my name is Robin!</h3>
          <div className='text-container'>
            <p>I've been a ux/product designer for the past three years, mainly helping startups and entrepreneurs bring their ideas to life! </p>
            <p>I also worked as a frontend developer for a design school and dabbled in Esports coaching. To make it more shocking, I did my education in biological science, completing my bachelor's degree in Japan.</p>
            <p>How did a former biology student, Esports coach, and frontend developer get into digital product design? I've always had a passion for artistic creation since I was young but never truly realized it until after exploring multiple different interests. Not too long ago, a colleague of mine in the Esports scene had plans to create a website together. We both had no experience and didn't know where to start, so I took design classes and taught myself all the necessary skills to be able to design, plan, and code the website from scratch. From then on, I had a feeling that I would be fulfilled doing this type of work for the foreseeable future. This feeling would be the thing that cemented my career in product design. </p>
          </div>
        </div>
      </div>
      <div className='skillset'>
        <h3> My Skillset</h3>
        <div className='text-container'>
            <div className='skill-logo'>
              <img src={Figma} alt='Figma'></img>
              <img src={Illustrator} alt='Illustrator'></img>
              <img src={Photoshop} alt='Photoshop'></img>
              <img src={Zeplin} alt='Zeplin'></img>
              <img src={Chromatic} alt='Chromatic'></img>
            </div>
            <p className='bullet'> &#x2022; &nbsp;  Expert at Figma: responsive design, prototyping, design systems, variables/tokens, modes, and currently awaiting the Figma AI feature! I keep up with all the latest updates and utilize the newest features!</p>
            <p className='bullet'> &#x2022; &nbsp;  Skilled at Adobe Illustrator for handling vector based media, and Adobe Photoshop for editing and embellishing images. For designer-developer collaboration I have experience using zeplin and chromatic. </p>
            <div className='skill-logo'>
              <img src={HTML} alt='HTML'></img>
              <img src={CSS} alt='CSS'></img>
              <img src={Javascript} alt='Javascript'></img>
              <img src={Reactlogo} alt='React'></img>
              <img src={Github} alt='Github'></img>
            </div>
            <p className='bullet'>&#x2022; &nbsp;  Frontend development: HTML5, CSS3, Javascript, React. I can code static websites from scratch, and prefer to utilize vanilla javascript or pure CSS for most tasks.    </p>
            <p className='bullet'> &#x2022; &nbsp;  This portfolio site was designed, coded, and launched on the public web domain by yours truly.  </p>
        </div>
      </div>
      <div className='values'>
        <h3> My Values </h3>
        <div className='text-container'>
            <p className='bullet'>&#x2022; &nbsp;  I take my work very seriously. It is very important to me to have a complete understanding of a task before I can start designing. This means understanding the business needs, user needs, stakeholder requirements, product goals and more. If I can have a full understanding of a project, I can truly shine and deliver.</p>
            <p className='bullet'>&#x2022; &nbsp;  One of my biggest fears is not meeting the expectations of those who work with me. I would never let a job go unfinished, as that would sabotage the team's operations. The work comes first before anything else.   </p>
            <p className='bullet'>&#x2022; &nbsp;  I like taking the initiative almost all the time. It sometimes puts me in an uncomfortable spot but I know that if I get through the uncomfortable experience it will become a moment of growth.  </p>
        </div>
      </div>
    </div>
  );
};

export default About;
