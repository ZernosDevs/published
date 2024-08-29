import React, { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';
import "./Work.css";
import Resume from '../resources/robinpark_resume.pdf';
import Kongomi from '../resources/kongomi.mp4';
import SipVid from '../resources/sipvid.mp4';
import UniVid from '../resources/unibuzzvid.mp4';
import EsportsVid from '../resources/esportsvid.mp4';

const Work = () => {

  const { t } = useTranslation();

  useEffect(() => {
    const projectLinks = document.querySelectorAll('.project-link');
    let debounceTimeout;

    projectLinks.forEach(link => {
      const video = link.querySelector('.hover-video');

      const handleMouseEnter = () => {
        // Increase size of the link
        link.style.transform = 'scale(1.03)';
        link.style.transition = 'transform 0.3s ease';

        // Play video after a short delay
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
          video.play().catch(error => {
            console.error('Play request was interrupted:', error);
          });
        }, 100);
      };

      const handleMouseLeave = () => {
        // Reset size of the link
        link.style.transform = 'scale(1)';

        // Pause video immediately
        clearTimeout(debounceTimeout);
        video.pause();
      };

      const replayVideo = () => {
        video.currentTime = 0;
        video.play();
      };

      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
      video.addEventListener('ended', replayVideo);

      // Clean up the event listeners on component unmount
      return () => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
        video.removeEventListener('ended', replayVideo);
        clearTimeout(debounceTimeout);
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
                <h3>
                  <Trans i18nKey="sub-display-text">
                  I design and oversee end-to-end product development for <b>startups</b> and <b>young companies</b>
                  </Trans>
                </h3>
                <a href={Resume} className='download' download>{t('download')}
                  <svg className='download-icon' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 13.5L3 14.375C3 15.8247 4.17525 17 5.625 17L14.375 17C15.8247 17 17 15.8247 17 14.375L17 13.5M13.5 10L10 13.5M10 13.5L6.5 10M10 13.5L10 3" stroke="#374151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
            </div>
          </section>
          <div className='display-right'>
            <span className='cyan'></span>
            <span className='purple'></span>
            <span className='magenta'></span>
          </div>
        </section>
        <div className='line-divider'></div>
        <section className='projects'>
          <div className='title-container'>
            <h2>{t('section-title')}</h2>
          </div>
          <div className='project-list'>
            <div className='project-row'>
              <NavLink to="unibuzz" className='project-link'>
              <div className='project-container'>
                <div className='project-image'>
                <video className='hover-video' muted aria-label="Unibuzz project video">
                  <source src= {UniVid}  type="video/mp4" />
                  'Your browser does not support the video tag.'
                </video>
                </div>
                <div className='project-text'>
                  <div className='title-row'>
                    <h4>Unibuzz</h4>
                    <h5> {t('project-date')}</h5>
                  </div>
                  <p className='project-desc'> {t('project-desc1')}</p>
                </div>
              </div>
              </NavLink>
              <NavLink to="sip" className='project-link'>
              <div className='project-container'>
                <div className='project-image'>
                <video className='hover-video' muted aria-label="Sip at Home project video">
                  <source src= {SipVid}  type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                </div>
                <div className='project-text'>
                  <div className='title-row'>
                    <h4>Sip at Home</h4>
                    <h5>2024/04 - 2024/06</h5>
                  </div>
                  <p className='project-desc'>{t('project-desc2')}</p>
                </div>
              </div>
              </NavLink>
            </div>
            <div className='project-row'>
              <NavLink to="esports" className='project-link'>
              <div className='project-container'>
                <div className='project-image'>
                <video className='hover-video' muted aria-label="Esportsmaestro project video">
                  <source src= {EsportsVid}  type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                </div>
                <div className='project-text'>
                  <div className='title-row'>
                    <h4>Esportsmaestro</h4>
                    <h5>2021/03 - 2021/09</h5>
                  </div>
                  <p className='project-desc'>{t('project-desc3')}</p>
                </div>
              </div>
              </NavLink>
              <div className='project-link'>
                <div className='project-container'>
                  <div className='project-image'>
                  <video className='hover-video' muted aria-label="Kongomi project video">
                    <source src= {Kongomi}  type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  </div>
                  <div className='project-text'>
                    <div className='title-row'>
                      <h4>Kongomi</h4>
                      <h5>2023/05 - 2023/06</h5>
                    </div>
                    <p className='project-desc'>{t('project-desc4')}</p>
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
