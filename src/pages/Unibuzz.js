import React from 'react';
import './Unibuzz.css';
import UnibuzzBanner from '../resources/unibuzz/unibuzz-banner.png';
import UnibuzzProblem from '../resources/unibuzz/unibuzz-problem.png'
import UnibuzzObjective from '../resources/unibuzz/unibuzz-objective.png'
import UnibuzzApproach from '../resources/unibuzz/unibuzz-agile.png';
import UnibuzzInterview from '../resources/unibuzz/unibuzz-interview.png'
import UnibuzzSystem from '../resources/unibuzz/unibuzz-system.png'
import UnibuzzFlow from '../resources/unibuzz/unibuzz-flow.png'
import Slider from '../components/Slider';
import SliderReverse from '../components/SliderReverse';
import UnibuzzProto from '../resources/unibuzz/unibuzz-proto-final.gif'
import UnibuzzTokens from '../resources/unibuzz/unibuzz-tokens.png'
import UnibuzzMode from '../resources/unibuzz/unibuzz-modes.mp4'
import { Trans, useTranslation } from 'react-i18next';

const Unibuzz = () => {
  const { t } = useTranslation();

  return (
    <main className='fade-in'>
      <div className='lead-banner'>
        <img src={UnibuzzBanner} alt="Unibuzz project banner" loading='eager' />
      </div> 
      <div className='case-study'>
        <div className='overview'>
            <h5>{t('unibuzz-role')}</h5>
            <h5>{t('unibuzz-responsibility')}</h5>
            <h5>{t('unibuzz-timeline')}</h5>
        </div>
        <section className='baby'>
          <div className='case-p'>
            <h2>{t('overview')}</h2>
            <p>{t('unibuzz-overview-1')}</p>
            <span className='space'></span>
            <p>{t('unibuzz-overview-2')}</p>      
          </div>
        </section>
        <section className='baby'>
          <div className='case-p'>
            <h2>{t('problem')}</h2>
            <div className='img-container'>
              <img className='width-1200' src={UnibuzzProblem} alt="Unibuzz problem statement image" style={{ boxShadow: '0px 6px 15px -2px rgba(16, 24, 40, 0.08), 0px 6px 15px -2px rgba(16, 24, 40, 0.08)' }} loading="lazy" />
            </div>
            <p>{t('unibuzz-problem')}</p>
          </div>
        </section>
        <section className='baby'>
          <div className='case-p'>
            <h2>{t('objective')}</h2>
            <div className='img-container'>
              <img className='width-1200' src={UnibuzzObjective} alt="Unibuzz project objective image" style={{ boxShadow: '0px 6px 15px -2px rgba(16, 24, 40, 0.08), 0px 6px 15px -2px rgba(16, 24, 40, 0.08)' }} loading="lazy" />
            </div>
            <p>{t('unibuzz-objective')}</p>
          </div>
        </section>
        <section className='parent'>  
          <div className='case-p'>
            <h2>{t('approach')}</h2> 
            <p>{t('unibuzz-approach')}</p>
          </div>
        </section>   
      </div>
      <div className='banner'>
        <img src={UnibuzzApproach} alt="Unibuzz approach image" loading="lazy" />
      </div>
      <div className='case-study'>
        <section className='parent'>
          <div className='unibuzz-case'>
            <h3 className='step-title'>{t('unibuzz-step-title1')}</h3>
            <h4 className='section-title'>{t('unibuzz-section-title1')}</h4> 
            <span className='space'></span>
          </div>
          <section className='child'>
            <div className='img-container'>
              <img className='width-1200' src={UnibuzzInterview} alt="Unibuzz target user interview image" style={{ boxShadow: '0px 6px 15px -2px rgba(16, 24, 40, 0.08), 0px 6px 15px -2px rgba(16, 24, 40, 0.08)' }} loading="lazy" />
            </div>
            <div className='case-p'>
              <p>{t('unibuzz-research')}</p>
            </div>
          </section>
          <section className='child'>
            <div className='unibuzz-case'>
              <h3 className='step-title'>{t('unibuzz-step-title2')}</h3>
              <h4 className='section-title'>{t('unibuzz-section-title2')}</h4> 
              <span className='space'></span>
            </div>
            <div className='img-container'>
              <img className='width-1200' src={UnibuzzFlow} alt="Unibuzz user journey flow image" style={{ boxShadow: '0px 6px 15px -2px rgba(16, 24, 40, 0.08), 0px 6px 15px -2px rgba(16, 24, 40, 0.08)' }} loading="lazy" />
            </div>
            <div className='case-p'>
              <p>{t('unibuzz-flow')}</p>
            </div>
          </section>
          <section className='child'>
            <div className='unibuzz-case'>
              <h3 className='step-title'>{t('unibuzz-step-title3')}</h3>
              <h4 className='section-title'>{t('unibuzz-section-title3')}</h4> 
              <span className='space'></span>
            </div>
            <div className='img-container'>
              <img className='width-1200' src={UnibuzzSystem} alt="Unibuzz design system visual identity image" style={{ boxShadow: '0px 6px 15px -2px rgba(16, 24, 40, 0.08), 0px 6px 15px -2px rgba(16, 24, 40, 0.08)' }} loading="lazy" />
            </div>
            <div className='case-p'>
              <p>{t('unibuzz-system')}</p>
            </div>
          </section>
          <section className='child'>
            <div className='unibuzz-case'>
              <h3 className='step-title'>{t('unibuzz-step-title4')}</h3>
              <h4 className='section-title'>{t('unibuzz-section-title4')}</h4> 
            </div>
          </section>
        </section>
      </div> 
      <Slider />
      <SliderReverse  />
      <div className='case-study'>
        <section className='child'>
          <div className='img-container'>
            <img className='width-1200' src={UnibuzzProto} alt="Unibuzz high fidelity prototype" loading="lazy" />
            <h6>{t('unibuzz-image-text1')}</h6>
          </div>
        </section>
        <section className='child'>
          <div className='unibuzz-case'>
            <h3 className='step-title'>{t('unibuzz-step-title5')}</h3>
            <h4 className='section-title'>{t('unibuzz-section-title5')}</h4> 
            <span className='space'></span>
          </div>
          <div className='img-container'>
            <img className='width-1200' src={UnibuzzTokens} alt="Unibuzz design tokens image" style={{ boxShadow: '0px 6px 15px -2px rgba(16, 24, 40, 0.08), 0px 6px 15px -2px rgba(16, 24, 40, 0.08)' }} loading="lazy" />
          </div>
          <div className='video-container'>
            <video autoPlay loop muted className="video-content" aria-label="Unibuzz design mode video">
              <source src={UnibuzzMode} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='case-p'>
            <p>{t('unibuzz-tokens')}</p>
          </div>
        </section>
        <section className='child'>
          <div className='unibuzz-case'>
            <h3 className='step-title'>{t('unibuzz-step-title6')}</h3>
            <h4 className='section-title'>{t('unibuzz-section-title6')}</h4> 
            <span className='space'></span>
          </div>
          <div className='case-p'>
            <p>{t('unibuzz-thoughts')}</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Unibuzz;
