import React, { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "./Work.css";
import Video from "../resources/stock video.mp4";


const Work = () => {

  const { t } = useTranslation();
  
  useEffect(() => {
    const projectLinks = document.querySelectorAll('.project-link');

    projectLinks.forEach(link => {
      const video = link.querySelector('.hover-video');

      const playVideo = () => video.play();
      const pauseVideo = () => {
        video.pause();
      };
      const replayVideo = () => {
        video.currentTime = 0;
        video.play();
      };

      link.addEventListener('mouseenter', playVideo);
      link.addEventListener('mouseleave', pauseVideo);
      video.addEventListener('ended', replayVideo);

      // Clean up the event listeners on component unmount
      return () => {
        link.removeEventListener('mouseenter', playVideo);
        link.removeEventListener('mouseleave', pauseVideo);
        video.removeEventListener('ended', replayVideo);
      };
    });
  }, []); 

  return (
      <div className='work-layout'>
        <section className='display'>
          <section className='display-left'>
            <div className='main-display-text'>
                <h1>Robin Park</h1>
                <h2>UX/Product Designer</h2>
            </div>
            <div className='sub-display-text'>
                <h3>I design and oversee end-to-end product development for <b>startups</b> and <b>young companies</b></h3>
                <a href='/resume.pdf'className='download' download>Download Resume
                  <svg className='download-icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 13.5L3 14.375C3 15.8247 4.17525 17 5.625 17L14.375 17C15.8247 17 17 15.8247 17 14.375L17 13.5M13.5 10L10 13.5M10 13.5L6.5 10M10 13.5L10 3" stroke="#374151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
            </div>
          </section>
          < div className='display-right'>
            <span className='cyan'></span>
            <span className='purple'></span>
            <span className='magenta'></span>
          </div>
        </section>
        <div className='line-divider'></div>
        <section className='projects'>
          <div className='title-container'>
            <h2>Project Case Study</h2>
          </div>
          <div className='project-list'>
            <div className='project-row'>
              <NavLink to="unibuzz" className='project-link'>
              <div className='project-container'>
                <div className='project-image'>
                <video className='hover-video' muted>
                  <source src= {Video}  type="video/mp4" />
                  'Your browser does not support the video tag.'
                </video>
                </div>
                <div className='project-text'>
                  <div className='title-row'>
                    <h4>{t('project-1')}</h4>
                    <h5>Date:2023-2024</h5>
                  </div>
                  <p className='project-desc'>Project description goes here feel free to edit as you like hello world lorem ipsum</p>
                </div>
              </div>
              </NavLink>
              <NavLink to="sip" className='project-link'>
              <div className='project-container'>
                <div className='project-image'>
                <video className='hover-video' muted>
                  <source src= {Video}  type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                </div>
                <div className='project-text'>
                  <div className='title-row'>
                    <h4>Project Title</h4>
                    <h5>Date:2023-2024</h5>
                  </div>
                  <p className='project-desc'>Project description goes here feel free to edit as you like hello world lorem ipsum</p>
                </div>
              </div>
              </NavLink>
            </div>
            <div className='project-row'>
              <NavLink to="esports" className='project-link'>
              <div className='project-container'>
                <div className='project-image'>
                <video className='hover-video' muted>
                  <source src= {Video}  type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                </div>
                <div className='project-text'>
                  <div className='title-row'>
                    <h4>Project Title</h4>
                    <h5>Date:2023-2024</h5>
                  </div>
                  <p className='project-desc'>Project description goes here feel free to edit as you like hello world lorem ipsum</p>
                </div>
              </div>
              </NavLink>
              <div className='project-link'>
                <div className='project-container'>
                  <div className='project-image'>
                  <video className='hover-video' muted>
                    <source src= {Video}  type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  </div>
                  <div className='project-text'>
                    <div className='title-row'>
                      <h4>Project Title</h4>
                      <h5>Date:2023-2024</h5>
                    </div>
                    <p className='project-desc'>Project description goes here feel free to edit as you like hello world lorem ipsum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <Outlet /> {/* This is where nested project routes will be rendered */}
        </section>
        <div className='line-divider'></div>
      </div>
  );
};

export default Work;