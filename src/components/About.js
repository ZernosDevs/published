import React, { useEffect, useRef } from 'react';
import './About.css';
import Dev from '../images/dev.png';
import Esport from '../images/esport.png';
import Neuro from '../images/neuro.png';
import { useTranslation } from 'react-i18next';


function About() {
  const { t, i18n } = useTranslation();
  const isJapanese = i18n.language.startsWith('ja');
  const titleClass = isJapanese ? 'title-jp' : 'title-en';
  const stepClass = isJapanese ? 'step-jp' : 'step-en';
  const pastClass = isJapanese ? 'past-jp' : 'past-en';
  const dateClass = isJapanese ? 'date-jp' : 'date-en';
  const placeClass = isJapanese ? 'place-jp' : 'place-en';
  const aboutText = isJapanese ? 'about-text-jp' : 'about-text-en';
  
  const sectionRefs = useRef([]); // Array of section references for observation

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in'); 
            observer.unobserve(entry.target); 
          }
        });
      },
      {
        threshold: 0.7, // Trigger when 50% of the element is in view
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [i18n.language]); 

  return (
    <div className='about-layout' >
      <div id='background' style={{ width:'3px', height: '15vh' }}></div>
      <div className='about-title'  >
        <h2 className={ titleClass }>{t('about')}</h2>
        <div className='underline'></div>
      </div>
      <h1 className={ stepClass } ref={(el) => (sectionRefs.current[1] = el)}>{t('about-intro')}</h1>
      <div className='section-content'>
        <div className='background-content' ref={(el) => (sectionRefs.current[2] = el)}>
          <div className='section-text text-1'>
            <div className='job'>
              <div className='indicator' style={{backgroundColor: '#10B981' }}></div>
              <h4 className={ pastClass }>{t('past1')}</h4>
            </div>
            <h5 className={ dateClass } >{t('date1')}</h5>
            <h6 className={ placeClass }>{t('place1')}</h6>
          </div>
          <div className='section-image image-1'>
            <figure class="circle-container">
                <a href="https://elifesciences.org/articles/81418#content" target='_blank' rel="noreferrer">
                    <img src={ Neuro } alt="Neuro"></img>
                </a>
                <figcaption>View my published paper</figcaption>
            </figure>
          </div>
        </div >
        <div className='background-content2' ref={(el) => (sectionRefs.current[3] = el)}>
          <div className='section-image image-2'>
            <figure class="circle-container">
                <a href="https://www.youtube.com/@zernos8368" target='_blank' rel="noreferrer">
                    <img src={ Esport } alt="Esport"></img>
                </a>
                <figcaption>View my esports coaching youtube channel</figcaption>
            </figure>
          </div>
          <div className='section-text text-2'>
            <div className='job'>
              <div className='indicator' style={{backgroundColor: '#7C3AED' }}></div>
              <h4 className={ pastClass }>{t('past2')}</h4>
            </div>
            <h5 className={ dateClass }>{t('date2')}</h5>
            <h6 className={ placeClass }>{t('place2-1')}</h6>
            <h6 className={ placeClass }>{t('place2-2')}</h6>
          </div>
        </div >
        <div className='background-content' ref={(el) => (sectionRefs.current[4] = el)}>
          <div className='section-text text-3'>
            <div className='job'>
            <div className='indicator' style={{backgroundColor: '#B45309' }}></div>
            <h4 className={ pastClass }>{t('past3')}</h4>
            </div>
            <h5 className={ dateClass }>{t('date3')}</h5>
            <h6 className={ placeClass }>{t('place3')}</h6>
          </div>
          <div className='section-image image-3'>
            <figure class="circle-container">
                <a href="https://www.nanumschool.com/" target='_blank' rel="noreferrer">
                    <img src={ Dev } alt="Dev"></img>
                </a>
                <figcaption>View the company I worked at</figcaption>
            </figure>
          </div>
        </div >
        <p className={ aboutText }>{t('about-text')}</p> 
      </div> 
    </div>

  );
}

export default About;