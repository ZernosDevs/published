import React, { useEffect, useRef } from 'react';
import './Workflow.css';
import LinkedImage from './LinkedImage';
import ProjectOutline from '../images/project_outline.PNG';
import Brainstorm from '../images/brainstorm.png';
import Valueprop from '../images/valueprop.png';
import Swot from '../images/swot.png';
import Competitive from '../images/competitive.png';
import Survey from '../images/survey.png';
import Sketch from '../images/sketch.png';
import Sitemap from '../images/sitemap.png';
import Wireframe from '../images/wireframe.png';
import System from '../images/system.png';
import Batch from '../images/batch.png';
import Components from '../images/components.png';
import Media from '../images/media.png';
import Lowfi from '../images/low-fi.png';
import Static from '../images/static.png';
import Prototype from '../images/prototype2.gif';
import Version from '../images/version.png';
import ZeplinScreen from '../images/zeplinscreen.png';
import DevWork from '../images/devwork.png';
import Flowchart from '../images/flowchat.png';
import { useTranslation } from 'react-i18next';

function Workflow() {
  const { t, i18n } = useTranslation();
  const isJapanese = i18n.language.startsWith('ja');
  const titleClass = isJapanese ? 'title-jp3' : 'title-en3';
  const workflowIntro = isJapanese ? 'intro-jp' : 'intro-en';
  const slideTitle = isJapanese ? 'slide-title-jp' : 'slide-title-en'
  const subtextTitle = isJapanese ? 'subtext-title-jp' : 'subtext-title-en';
  const subtextPar = isJapanese ? 'sub-text-jp' : 'sub-text-en'


  const slideRefs = useRef([]); // Array of references for observing each slide

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in'); // Apply animation class
            observer.unobserve(entry.target); // Unobserve to prevent re-triggering
          }
        });
      },
      {
        threshold: 0.25, // Trigger when 25% of the `slide` is in view
      }
    );

    // Observe each `slide`
    slideRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      slideRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref); // Cleanup observer
        }
      });
    };
  }, []); // Only run once when the component mounts
  return (
  <div className='workflow-wrap' >
    <div id='workflow' style={{ width:'3px', height: '15vh' }}></div>
    <div className='workflow-title' >
        <h2 className={titleClass}>{t('workflow')}</h2>
        <div className='underline'></div>
    </div>
    <h1 className={ workflowIntro } ref={(el) => (slideRefs.current[0] = el)}>{t('workflow-intro')}</h1>
    <div className='workflow-layout'>
      <div className='slider'>
        <div className='slide' ref={(el) => (slideRefs.current[1] = el)}>
          <h1 className={ slideTitle } >{t('slide-1')}</h1>
          <div className='slide-content'>
            <div className='sub-content'>
              <div className='sub-img'>
              <LinkedImage
                thumbnailSrc={ProjectOutline}
                fullImageSrc={ProjectOutline}
                captionText="View enlarged image"
                altText="Project Outline"
              />
              </div>
              <div className='sub-text'>
                <h2 className={ subtextTitle } >{t('subtext-title1')}</h2>
                <p className= {subtextPar}>{t('subtext-1')}</p>
              </div>
            </div>
          </div>
          <div className='slide-content'>
            <div className='sub-content'>
              <div className='sub-text'>
                <h2 className={ subtextTitle }>{t('subtext-title2')}</h2>
                <p className= {subtextPar}>{t('subtext-2')}</p>
              </div>
              <div className='sub-img'>
              <LinkedImage
                thumbnailSrc={Brainstorm}
                fullImageSrc={Brainstorm}
                captionText="View enlarged image"
                altText="Brainstorm"
              />
              </div>
            </div>
          </div>
        </div>
        <div className='slide' ref={(el) => (slideRefs.current[2] = el)}>
          <h1 className={slideTitle}>{t('slide-2')}</h1>
          <div className='slide-content'>
            <div className='sub-content'>
              <div className='sub-img'>
              <LinkedImage
                thumbnailSrc={Valueprop}
                fullImageSrc={Valueprop}
                captionText="View enlarged image"
                altText="Valueprop"
              />
              </div>
              <div className='sub-text'>
                <h2 className={subtextTitle}>{t('subtext-title3')} </h2>
                <p className={ subtextPar}>{t('subtext-3')}</p>
              </div>
            </div>
          </div>
          <div className='slide-content'>
            <div className='sub-content'>
              <div className='sub-text'>
                <h2 className={subtextTitle}>{t('subtext-title4')} </h2>
                <p className={ subtextPar}>{t('subtext-4')}</p>
              </div>
              <div className='sub-img'>
              <LinkedImage
                thumbnailSrc={Swot}
                fullImageSrc={Swot}
                captionText="View enlarged image"
                altText="Swot"
              />
              </div>
            </div>
          </div>
          <div className='slide-content'>
            <div className='sub-content'>
              <div className='sub-img'>
              <LinkedImage
                thumbnailSrc={Competitive}
                fullImageSrc={Competitive}
                captionText="View enlarged image"
                altText="Competitive"
              />
              </div>
              <div className='sub-text'>
                <h2 className={subtextTitle}>{t('subtext-title5')} </h2>
                <p className={ subtextPar}>{t('subtext-5')}</p>
              </div>
            </div>
          </div>
          <div className='slide-content'>
            <div className='sub-content'>
              <div className='sub-text'>
                <h2 className={subtextTitle}>{t('subtext-title6')} </h2>
                <p className={ subtextPar}>{t('subtext-6')}</p>
              </div>
              <div className='sub-img'>
              <LinkedImage
                thumbnailSrc={Survey}
                fullImageSrc={Survey}
                captionText="View enlarged image"
                altText="Survey"
              />
              </div>
            </div>
          </div>
        </div>
        <div className='slide' ref={(el) => (slideRefs.current[3] = el)}>
        <h1 className={slideTitle}>{t('slide-3')}</h1>
          <div className='slide-content'>
            <div className='sub-content'>
              <div className='sub-img'>
              <LinkedImage
                thumbnailSrc={Sketch}
                fullImageSrc={Sketch}
                captionText="View enlarged image"
                altText="Sketch"
              />
              </div>
              <div className='sub-text'>
                <h2 className={subtextTitle}>{t('subtext-title7')} </h2>
                <p className={ subtextPar}>{t('subtext-7')}</p>
              </div>
            </div>
          </div> 
          <div className='slide-content'>
            <div className='sub-content'>
              <div className='sub-text'>
                <h2 className={subtextTitle}>{t('subtext-title8')} </h2>
                <p className={ subtextPar}>{t('subtext-8')}</p>
              </div>
              <div className='sub-img'>
              <LinkedImage
                thumbnailSrc={Sitemap}
                fullImageSrc={Sitemap}
                captionText="View enlarged image"
                altText="Sitemap"
              />
              </div>
            </div>
          </div>
          <div className='slide-content'>
            <div className='sub-content'>
              <div className='sub-img'>
              <LinkedImage
                thumbnailSrc={Flowchart}
                fullImageSrc={Flowchart}
                captionText="View enlarged image"
                altText="Flowchart"
              />
              </div>
              <div className='sub-text'>
                <h2 className={subtextTitle}>{t('subtext-title9')} </h2>
                <p className={ subtextPar}>{t('subtext-9')}</p>
              </div>
            </div>
          </div>
          <div className='slide-content'>
            <div className='sub-content'>
              <div className='sub-text'>
                <h2 className={subtextTitle}>{t('subtext-title10')} </h2>
                <p className={ subtextPar}>{t('subtext-10')}</p>
              </div>
              <div className='sub-img'>
              <LinkedImage
                thumbnailSrc={Wireframe}
                fullImageSrc={Wireframe}
                captionText="View enlarged image"
                altText="Wireframe"
              />
              </div>
            </div>
          </div>
        </div>
        <div className='slide' ref={(el) => (slideRefs.current[4] = el)}>
        <h1 className={slideTitle}>{t('slide-4')}</h1>
          <div className='slide-content'>
            <div className='sub-content2'>
              <div className='sub-img'>
                <a href='https://www.figma.com/file/KyRpf9gQ6PFF7vN59uE6u5/Design-System?type=design&node-id=0%3A1&mode=design&t=WR4fnnF48BKKQHOi-1'><img src = { System } alt='System'></img></a>
                <figcaption>Click to go to my Design System URL!</figcaption>
              </div>
              <div className='sub-text2'>
                <h2 className={subtextTitle}>{t('subtext-title11')} </h2>
                <p className={ subtextPar}>{t('subtext-11')}  </p>
                <a href='https://www.figma.com/file/KyRpf9gQ6PFF7vN59uE6u5/Design-System?type=design&node-id=0%3A1&mode=design&t=WR4fnnF48BKKQHOi-1' target='_blank' rel="noreferrer">Design System URL</a>
              </div>
            </div>
          </div>
          <div className='slide-content'>
            <div className='sub-content'>
              <div className='sub-text'>
                <h2 className={subtextTitle}>{t('subtext-title12')} </h2>
                <p className={ subtextPar}>{t('subtext-12')}</p>
              </div>
              <div className='sub-img'>
              <LinkedImage
                thumbnailSrc={Batch}
                fullImageSrc={Batch}
                captionText="View enlarged image"
                altText="Batch"
              />
              </div>
            </div>
          </div>
        </div>
        <div className='slide' ref={(el) => (slideRefs.current[5] = el)}>
          <h1 className={slideTitle}>{t('slide-5')}</h1>
          <div className='slide-content'>
            <div className='sub-content'>
              <div className='sub-img'>
              <LinkedImage
                thumbnailSrc={Components}
                fullImageSrc={Components}
                captionText="View enlarged image"
                altText="Components"
              />
              </div>
              <div className='sub-text'>
                <h2 className={subtextTitle}>{t('subtext-title13')} </h2>
                <p className={ subtextPar}>{t('subtext-13')}</p>
              </div>
            </div>
          </div> 
          <div className='slide-content'>
            <div className='sub-content'>
              <div className='sub-text'>
                <h2 className={subtextTitle}>{t('subtext-title14')} </h2>
                <p className={ subtextPar}>{t('subtext-14')}</p>
              </div>
              <div className='sub-img'>
              <LinkedImage
                thumbnailSrc={Media}
                fullImageSrc={Media}
                captionText="View enlarged image"
                altText="Media"
              />
              </div>
            </div>
          </div>
          <div className='slide-content'>
            <div className='sub-content'>
              <div className='sub-img'>
              <LinkedImage
                thumbnailSrc={Lowfi}
                fullImageSrc={Lowfi}
                captionText="View enlarged image"
                altText="Lowfi"
              />
              </div>
              <div className='sub-text'>
                <h2 className={subtextTitle}>{t('subtext-title15')} </h2>
                <p className={ subtextPar}>{t('subtext-15')}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='slide' ref={(el) => (slideRefs.current[6] = el)}>
          <h1 className={slideTitle}>{t('slide-6')}</h1>
          <div className='slide-content'>
            <div className='sub-content'>
              <div className='sub-img'>
              <LinkedImage
                thumbnailSrc={Static}
                fullImageSrc={Static}
                captionText="View enlarged image"
                altText="Static"
              />
              </div>
              <div className='sub-text'>
                <h2 className={subtextTitle}>{t('subtext-title16')} </h2>
                <p className={ subtextPar}>{t('subtext-16')}</p>
              </div>
            </div>
          </div> 
          <div className='slide-content'>
            <div className='sub-content'>
              <div className='sub-text'>
                <h2 className={subtextTitle}>{t('subtext-title17')} </h2>
                <p className={ subtextPar}>{t('subtext-17')}</p>
              </div>
              <div className='sub-img'>
              <LinkedImage
                thumbnailSrc={Prototype}
                fullImageSrc={Prototype}
                captionText="View enlarged image"
                altText="Prototype"
              />
              </div>
            </div>
          </div>
          <div className='slide-content'>
            <div className='sub-content'>
              <div className='sub-img'>
              <LinkedImage
                thumbnailSrc={Version}
                fullImageSrc={Version}
                captionText="View enlarged image"
                altText="Version"
              />
              </div>
              <div className='sub-text'>
                <h2 className={subtextTitle}>{t('subtext-title18')} </h2>
                <p className={ subtextPar}>{t('subtext-18')}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='slide' ref={(el) => (slideRefs.current[7] = el)}>
          <h1 className={slideTitle}>{t('slide-7')}</h1>
          <div className='slide-content'>
            <div className='sub-content'>
              <div className='sub-img'>
              <LinkedImage
                thumbnailSrc={ZeplinScreen}
                fullImageSrc={ZeplinScreen}
                captionText="View enlarged image"
                altText="Zeplinscreen"
              />
              </div>
              <div className='sub-text'>
                <h2 className={subtextTitle}>{t('subtext-title19')} </h2>
                <p className={ subtextPar}>{t('subtext-19')}</p>
              </div>
            </div>
          </div> 
          <div className='slide-content'>
            <div className='sub-content'>
              <div className='sub-text'>
                <h2 className={subtextTitle}>{t('subtext-title20')} </h2>
                <p className={ subtextPar}>{t('subtext-20')}</p>
              </div>
              <div className='sub-img'>
              <LinkedImage
                thumbnailSrc={DevWork}
                fullImageSrc={DevWork}
                captionText="View enlarged image"
                altText="Devwork"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Workflow;