import React from 'react';
import './Footer.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faLinkedin, faDiscord, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  FooterNeuron  from '../images/ContactNeuron.png'
import { useTranslation } from 'react-i18next';

library.add( faTwitter, faFontAwesome)

function Footer() {

  const { t, i18n } = useTranslation();
  const isJapanese = i18n.language.startsWith('ja');
  const titleClass = isJapanese ? 'title-jp4' : 'title-en4';
  const contactClass = isJapanese ? 'contact-jp' : 'contact-en';

  return (
    <div className='footer-layout'>
      <div id='contacts' style={{ width:'3px', height: '15vh' }}></div>
      <div className='contacts-title' >
        <h2 className={titleClass}>{t('contact')}</h2>
        <div className='underline'></div>
      </div>
      <div className='contacts-container'> 
          <div className='contact-form'>
            <h1 className={contactClass}>{t('phone')}</h1>
            <h2>+82 10-4773-2619</h2>
          </div>
          <div className='contact-form margin-add'>
            <h1 className={contactClass}>{t('email')}</h1>
            <h2>park.joohyun@outlook.com</h2>
          </div>
          <div className='contact-form margin-add'>
            <h1 className={contactClass}>{t('socials')}</h1>
            <div className='social-container'> 
              <a href='https://www.linkedin.com/in/robinpark-designs' target='_blank' rel="noreferrer"> <FontAwesomeIcon icon={faLinkedin} size="3x" /> </a>
              < a href='https://discordapp.com/users/534246926842069076' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faDiscord} size="3x" /> </a>
              <a href='https://twitter.com/Zernos_Park' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faTwitter} size="3x" /></a>
            </div>
          </div>
      </div>
      <div className='footer-image'>
        <img src={ FooterNeuron } alt ='footer-cell'></img>
      </div>
    </div>
  );
}

export default Footer;