import React, { useEffect, useRef, useState } from 'react';
import './Header.css';
import logo from '../images/logo.png';
import { useTranslation } from 'react-i18next';
import { GB, JP, UK } from 'country-flag-icons/react/3x2'

function Header() {
  const { t, i18n } = useTranslation();
  const isJapanese = i18n.language.startsWith('ja');
  const navClass = isJapanese ? 'nav-jp' : 'nav-right';
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  
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
        threshold: 0.1, // Trigger when 50% of the element is in view
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
  }, [isAnimated]);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <header className='main-header' ref={frameRef} id='head'>
      <div>
        <nav className="nav-left">
          <a href='#home'>
            <img className='logo' src={logo} alt='logo' />
          </a>
        </nav>

        <nav className='nav-center'>
          <p></p>
        </nav>
        <nav className={`nav-right ${menuOpen ? 'open' : ''}`}> 
          <div className='language show-desktop'>
            <button onClick={() => changeLanguage('en')}><GB title="English" className="flag"/></button>
            <p className='divider'>/</p>
            <button onClick={() => changeLanguage('ja')}><JP title="English" className="flag"/></button>
          </div>
          <a className={ navClass } href="#background">{t('background')}</a>
          <a className={ navClass } href="#projects">{t('projects')}</a>
          <a className={ navClass } href="#workflow">{t('workflow')}</a>
          <a className={ navClass } href="#contacts">{t('contacts')}</a>
        </nav>
        <div className='language show-tablet'>
            <button onClick={() => changeLanguage('en')}><GB title="English" className="flag"/></button>
            <p className='divider'>/</p>
            <button onClick={() => changeLanguage('ja')}><JP title="English" className="flag"/></button>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
            <span />
            <span />
            <span />
        </div>
        
      </div>
      {menuOpen && (
      <ul className='menu'>
      <li className='submenu'>
        <a className={ navClass } href="#background">{t('background')}</a>
      </li>
      <li className='submenu'>
        <a className={ navClass } href="#projects">{t('projects')}</a>
      </li>
      <li className='submenu'>
        <a className={ navClass } href="#workflow">{t('workflow')}</a>
      </li>
      <li className='submenu'>
        <a className={ navClass } href="#contacts">{t('contacts')}</a>
      </li>
    </ul> )}
    </header>
    
  </>
  );
}
export default Header;
