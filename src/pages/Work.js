import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "./Work.css";

const Work = () => {

  const { t } = useTranslation();

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
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 13.5L3 14.375C3 15.8247 4.17525 17 5.625 17L14.375 17C15.8247 17 17 15.8247 17 14.375L17 13.5M13.5 10L10 13.5M10 13.5L6.5 10M10 13.5L10 3" stroke="#374151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
            </div>
          </section>
          <div className='display-right'>
            <span className='cyan'></span>
            <span className='yellow'></span>
            <span className='magenta'></span>
          </div>

        </section>
      <ul>
        <li>
          <Link to="unibuzz">{t('project-1')}</Link>
        </li>
        <li>
          <Link to="sip">{t('project-2')}</Link>
        </li>
        <li>
          <Link to="esports">{t('project-3')}</Link>
        </li>
      </ul>
      <Outlet /> {/* This is where nested project routes will be rendered */}
    </div>
  );
};

export default Work;