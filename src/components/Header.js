import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import LanguageToggle from './LanguageToggle';
import DefaultMenu from '../resources/default-menu.png';
import CheckedMenu from '../resources/checked-menu.png';
import HoveredMenu from '../resources/hovered-menu.png';


const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState( DefaultMenu); // Default state

  const toggleMenu = () => { 
    setMenuOpen(!menuOpen);
    setImageSrc(menuOpen ? DefaultMenu : CheckedMenu); // Toggle image on click
  };

  const handleMouseEnter = () => {
    if (!menuOpen) {
      setImageSrc(HoveredMenu);
    }
  };

  const handleMouseLeave = () => {
    if (!menuOpen) {
      setImageSrc( DefaultMenu);
    }
  };
  
  return (
    <header>
      <Link to ="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="44" viewBox="0 0 41 44" fill="none">
          <path d="M17.5855 41V15.5958C21.2702 15.1422 28.6396 15.5958 28.6396 21.0396C28.6396 27.8443 -5.21717 28.2979 3.40617 11.3996C12.0295 -5.49875 39.1728 3.40406 38.9992 14.5751C38.8603 23.5119 38.9413 35.9154 38.9992 41L24.0096 30.2259" stroke="#4B5563" stroke-width="3" stroke-linecap="round"/>
        </svg>
      </Link>
      <nav >
        <LanguageToggle />
        <div className={`links ${menuOpen ? 'open' : ''}`}>
          <div className='link'><NavLink to ="/" activeClassName="active">Work</NavLink></div>
          <div className='link'><NavLink to ="about">About Me</NavLink></div>
          <div className='link'><a href='#'>Dribbble</a></div>
          <div className='link'><a href='#'>LinkedIn</a></div>
        </div>
        <div className='hamburger' onClick={toggleMenu} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img src={imageSrc} alt="Menu" />
        </div>
      </nav>
    </header>
  );
};

export default Header;