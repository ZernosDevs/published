import React from 'react';
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
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className='about-layout'>
      <div className='profile-frame1'>
        <div className='profile-image'>
          <img src={ProfilePic} alt={t('about-layout.profile-frame1.profile-image.alt1')} className='profile-pic' loading='lazy' />
          <img src={ProfilePic2} alt={t('about-layout.profile-frame1.profile-image.alt2')} className='profile-pic' loading='lazy' />
          <img src={ProfilePic3} alt={t('about-layout.profile-frame1.profile-image.alt3')} className='profile-pic' loading='lazy' />
          <img src={ProfilePic4} alt={t('about-layout.profile-frame1.profile-image.alt4')} className='profile-pic' loading='lazy' />
          <img src={ProfilePic5} alt={t('about-layout.profile-frame1.profile-image.alt5')} className='profile-pic' loading='lazy' />
        </div>
        <div className='text-frame'>
          <h3>{t('about-layout.profile-frame1.text-frame.greeting')}</h3>
          <div className='text-container'>
            {t('about-layout.profile-frame1.text-frame.introduction', { returnObjects: true }).map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>
      </div>
      <div className='skillset'>
        <h3>{t('about-layout.skillset.title')}</h3>
        <div className='text-container'>
          <div className='skill-logo'>
            <img src={Figma} alt='Figma' loading='lazy' />
            <img src={Illustrator} alt='Illustrator' loading='lazy' />
            <img src={Photoshop} alt='Photoshop' loading='lazy' />
            <img src={Zeplin} alt='Zeplin' loading='lazy' />
            <img src={Chromatic} alt='Chromatic' loading='lazy' />
          </div>
          {t('about-layout.skillset.skills.descriptions', { returnObjects: true }).map((description, index) => (
            <p className='bullet' key={index}>{description}</p>
          ))}
          <div className='skill-logo'>
            <img src={HTML} alt='HTML' loading='lazy' />
            <img src={CSS} alt='CSS' loading='lazy' />
            <img src={Javascript} alt='Javascript' loading='lazy' />
            <img src={Reactlogo} alt='React' loading='lazy' />
            <img src={Github} alt='Github' loading='lazy' />
          </div>
        </div>
      </div>
      <div className='values'>
        <h3>{t('about-layout.values.title')}</h3>
        <div className='text-container'>
          {t('about-layout.values.descriptions', { returnObjects: true }).map((description, index) => (
            <p className='bullet' key={index}>{description}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;