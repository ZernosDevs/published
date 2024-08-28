import React from 'react';
import './Footer.css'
import Youtube from '../resources/youtube.png';
import Linkedin from '../resources/linkedin.png';
import Dribbble from '../resources/dribbble.png';
import Instagram from '../resources/instagram.png';
import X from '../resources/x.png';

const Footer = () => {
  return (
    <footer>
      <div className='profile-frame2'>
          <h4>Let's Work Together!</h4>
      </div>
      <div className='socials'>
        <a  target='_blank' href='https://www.linkedin.com/in/robinpark-designs/'><div className='media-icon'><img src={Linkedin} ></img></div></a>
        <a  target='_blank' href='https://dribbble.com/robindesignsjp'><div className='media-icon'><img src={Dribbble} ></img></div></a>
        <a  target='_blank' href='https://www.instagram.com/robindesignsjp/'><div className='media-icon'><img src={Instagram} ></img></div></a>
      </div>
      <h3>Email: park.joohyun@outlook.com</h3>
    </footer>
  );
};

export default Footer;