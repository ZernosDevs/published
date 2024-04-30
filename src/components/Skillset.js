import React, { useEffect, useRef, useState } from 'react';
import './Skillset.css';
import Figma from'../images/figma.png'
import Zeplin from'../images/zeplin.png'
import Chromatic from'../images/chromatic.png'
import Illustrator from'../images/illustrator.png'
import Javascript from'../images/javascript.png'
import Photoshop from'../images/photoshop.png'
import Pro from'../images/pro.png'
import Effects from'../images/effects.png'
import Html from'../images/html.png'
import Css from'../images/css.png'
import Reactcon from'../images/react.png'
import Github from'../images/github.png'
import { useTranslation } from 'react-i18next';

function Skillset() {
  const { t, i18n } = useTranslation();
  const isJapanese = i18n.language.startsWith('ja');
  const titleClass = isJapanese ? 'title-jp1' : 'title-en1';
  const skillText = isJapanese ? 'skilltext-jp' : 'skilltext-en';

  const frameRef = useRef(null); // Reference to the frame for observation
  const [isAnimated, setIsAnimated] = useState(false); // State to track if the animation has occurred

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimated) {
            entry.target.classList.add('animate-in'); // Apply animation class
            setIsAnimated(true); // Set the state to prevent re-animation
            observer.unobserve(entry.target); // Unobserve to prevent re-triggering
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in view
      }
    );

    if (frameRef.current) {
      observer.observe(frameRef.current); // Start observing the frame
    }

    return () => {
      if (frameRef.current) {
        observer.unobserve(frameRef.current); // Cleanup observer
      }
    };
  }, [isAnimated]); // Depend on isAnimated to prevent re-triggering
    return (
      <div className='skillset-layout' >
        <div className='skillset-title' >
        <h2 className={ titleClass }>{t('skillset')}</h2>
        <div className='underline'></div>
        </div>
        <div className='frame' ref={frameRef}>
            <div className='content-left'>
                <div className='column'>
                    <img className='img-1' src={ Figma } alt='figma'></img>
                    <img className='img-4' src={ Illustrator } alt='illustrator'></img>
                    <img className='img-2' src={ Zeplin } alt='zeplin'></img>
                    <img className='img-3' src={ Chromatic } alt='chromatic'></img>
                    
                </div>
                <div className='column'>
                    <img className='img-5' src={ Photoshop } alt='photoshop'></img>
                    <img className='img-7' src={ Pro } alt='pro'></img>
                    <img className='img-8' src={ Effects } alt='effects'></img>
                </div> 
                <div className='column'>
                    <img className='img-9' src={ Html } alt='html'></img>
                    <img className='img-10' src={ Css } alt='css'></img>
                    <img className='img-11' src={ Javascript } alt='javascript'></img>
                    <img className='img-12' src={ Reactcon } alt='react'></img>
                    <img className='img-13' src={ Github } alt='github'></img>
                </div>   
            </div>
            <div className='content-right'>
                <h1 className={ skillText }>{t('skill-text')}</h1>
            </div>
        </div>

      </div>
      
    );
  }
export default Skillset;