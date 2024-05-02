import React, { useEffect, useRef } from 'react';
import './Projects.css';
import UnibuzzDesktop from '../images/unibuzz_desktop.png';
import UnibuzzTablet from '../images/unibuzz_tablet.png';
import UnibuzzMobile from '../images/unibuzz_mobile.png';
import EsportDesktop from '../images/esport_desktop.png';
import EsportTablet from '../images/esport_tablet.png';
import EsportMobile from '../images/esport_mobile.png';
import SipDesktop from '../images/sip_desktop.png';
import SipTablet from '../images/sip_tablet.png';
import SipMobile from '../images/sip_mobile.png';
import LinkedImageDesktop from './LinkedImageDesktop';
import LinkedImageTablet from './LinkedImageTablet';
import LinkedImageMobile from './LinkedImageMobile';
import { useTranslation } from 'react-i18next';

function Projects() {
  const columnRefs = useRef([]);
  const { t, i18n } = useTranslation();
  const isJapanese = i18n.language.startsWith('ja');
  const titleClass = isJapanese ? 'title-jp2' : 'title-en2';
  const projectText = isJapanese ? 'project-text-jp' : 'project-text-en';
  const projectLabel = isJapanese ? 'label-en' : 'label-jp';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in'); // Apply animation class
            observer.unobserve(entry.target); // Prevent re-triggering
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in view
      }
    );

    columnRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref); // Start observing each column
      }
    });

    return () => {
      columnRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref); // Cleanup observer
        }
      });
    };
  }, []); // Run once when the component mounts
  return (
    <div className='project-layout' >
      <div id='projects' style={{ width:'3px', height: '15vh' }}></div>
      <div className='title-container' >
        <h2 className={titleClass}>{t('project')}</h2>
        <div className='underline2'></div>
      </div>
      <div className='container'>
        < div className='columns' ref={(el) => (columnRefs.current[0] = el)} >
          <LinkedImageDesktop
                thumbnailSrc={UnibuzzDesktop}
                fullImageSrc={UnibuzzDesktop}
                captionText="View enlarged image"
                altText="unibuzz desktop"
                />
          
          <LinkedImageTablet
                thumbnailSrc={UnibuzzTablet}
                fullImageSrc={UnibuzzTablet}
                captionText="View enlarged image"
                altText="unibuzz tablet" 
                />
                
          <LinkedImageMobile
                thumbnailSrc={UnibuzzMobile}
                fullImageSrc={UnibuzzMobile}
                captionText="View enlarged image"
                altText="unibuzz mobile" />
        </div> 
        <div className='columns single-title' ref={(el) => (columnRefs.current[1] = el)}>
          <div className='holders'>
            <h1>Unibuzz</h1>
            <h2 className={projectLabel}>{t('project-label1')}
            </h2>
          </div>
        </div>
        <div className='columns' ref={(el) => (columnRefs.current[2] = el)}> 
          <p className={ projectText }>{t('proText1')}</p>
        </div>
        <div className='columns project-image' ref={(el) => (columnRefs.current[3] = el)}>
        <LinkedImageDesktop
                thumbnailSrc={EsportDesktop}
                fullImageSrc={EsportDesktop}
                captionText="View enlarged image"
                altText="esport desktop"
                />
          <LinkedImageTablet
                thumbnailSrc={ EsportTablet }
                fullImageSrc={ EsportTablet }
                captionText="View enlarged image"
                altText="esport Tablet"
                />
          <LinkedImageMobile
                thumbnailSrc={ EsportMobile }
                fullImageSrc={ EsportMobile }
                captionText="View enlarged image"
                altText="esport mobile"
                />
        </div> 
        <div className='columns single-title' ref={(el) => (columnRefs.current[4] = el)}>
          <div className='holders'>
            <h1>Esportsmaestro</h1>
            <h2 className={projectLabel}>{t('project-label2')}
            </h2>
          </div>
        </div>
        <div className='columns' ref={(el) => (columnRefs.current[5] = el)}>
        <p className={ projectText }>{t('proText2')}</p>
        </div>
        <div className='columns project-image' ref={(el) => (columnRefs.current[6] = el)}>
        <LinkedImageDesktop
                thumbnailSrc={SipDesktop}
                fullImageSrc={SipDesktop}
                captionText="View enlarged image"
                altText="esport desktop"
                />
          <LinkedImageTablet
                thumbnailSrc={ SipTablet }
                fullImageSrc={ SipTablet }
                captionText="View enlarged image"
                altText="esport Tablet"
                />
          <LinkedImageMobile
                thumbnailSrc={ SipMobile }
                fullImageSrc={ SipMobile }
                captionText="View enlarged image"
                altText="esport mobile"
                />
        </div> 
        <div className='columns single-title' ref={(el) => (columnRefs.current[7] = el)}>
          <div className='holders'>
            <h1>Sip at Home</h1>
            <h2 className={projectLabel}>{t('project-label3')}
            </h2>
          </div>
        </div>
        <div className='columns' ref={(el) => (columnRefs.current[8] = el)}>
        <p className={ projectText }>{t('proText3')}</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;