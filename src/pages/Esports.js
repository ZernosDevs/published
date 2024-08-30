import React from 'react';
import './Esports.css';
import EsportsBanner from '../resources/esports/esports-banner.png';
import EsportsApproach from '../resources/esports/esports-approach.png';
import EsportsProblem from '../resources/esports/esports-problem2.png';
import EsportsProblem2 from '../resources/esports/esports-problem.png';
import EsportsUser from '../resources/esports/esports-user.png';
import EsportsInterview from '../resources/esports/esports-interview.png';
import EsportsPersona from '../resources/esports/esports-persona.png';
import EsportsSitemap from '../resources/esports/esports-sitemap.png';
import EsportsFlow from '../resources/esports/esports-flow.png';
import EsportsWireframe from '../resources/esports/esports-wireframe.png';
import EsportsElements from '../resources/esports/esports-elements.png';
import EsportsUI from '../resources/esports/esports-final.png';
import EsportsProto from '../resources/esports/esports-proto.gif';
import { Trans, useTranslation } from 'react-i18next';

const Esports = () => {
  const { t } = useTranslation();

  return (
    <main className="fade-in">
      <div className='lead-banner'>
        <img src={EsportsBanner} alt="Esportsmaestro platform banner" loading='eager' />
      </div>
      <div className='case-study'>
        <div className='overview'>
          <h5>{t('esports.role')}</h5>
          <h5>{t('esports.responsibility')}</h5>
          <h5>{t('esports.timeline')}</h5>
        </div>
        <section className='baby'>
          <div className='case-p'>
            <h2>{t('esports.overviewTitle')}</h2>
            <p>{t('esports.overviewText')}</p>
          </div>
        </section>
        <section className='baby'>
          <div className='case-p'>
            <h2>{t('esports.problemTitle')}</h2>
            <p>{t('esports.problemText')}</p>
          </div>
          <div className='img-container'>
            <img className='width-1200' src={EsportsProblem} alt="Job recruitment notices on Twitter by Esports talent" loading="lazy" />
            <h6>{t('esports.problemImageCaption')}</h6>
          </div>
        </section>
        <section className='baby'>
          <div className='case-p'>
            <h2>{t('esports.objectiveTitle')}</h2>
            <p>{t('esports.objectiveText')}</p>
          </div>
        </section>
        <section className='parent'>
          <div className='case-p'>
            <h2>{t('esports.approachTitle')}</h2>
            <p>{t('esports.approachText')}</p>
            <span className='space'></span>
            <ul>
              <li>{t('esports.approachSteps.step1')}</li>
              <li>{t('esports.approachSteps.step2')}</li>
              <li>{t('esports.approachSteps.step3')}</li>
              <li>{t('esports.approachSteps.step4')}</li>
            </ul>
          </div>
        </section>
      </div>
      <div className='banner'>
        <img src={EsportsApproach} alt="Approach overview for Esportsmaestro project" loading="lazy" />
      </div>
      <div className='case-study'>
        <section className='child'>
          <div className='esports-case'>
            <h3 className='step-title'>{t('esports.discoveryTitle')}</h3>
            <h4 className='section-title'>{t('esports.targetUserTitle')}</h4>
            <span className='space'></span>
          </div>
          <div className='case-p'>
            <p>{t('esports.targetUserText')}</p>
            <span className='space'></span>
            <span className='space'></span>
            <span className='space'></span>
          </div>
          <div className='img-container'>
            <img className='width-800' src={EsportsUser} alt="Esports professionals and gaming community" loading="lazy" />
            <span className='space'></span>
            <h6>{t('esports.targetUserImageCaption')}</h6>
          </div>
          <div className='case-p'>
            <h5 className='emphasis'>{t('esports.designEmphasis')}</h5>
          </div>
        </section>
        <section className='child'>
          <div className='esports-case'>
            <h3 className='step-title'>{t('esports.discoveryTitle')}</h3>
            <h4 className='section-title'>{t('esports.userResearchTitle')}</h4>
            <span className='space'></span>
          </div>
          <div className='case-p'>
            <p>{t('esports.userResearchText')}</p>
            <span className='space'></span>
            <span className='space'></span>
            <span className='space'></span>
          </div>
          <div className='img-container'>
            <img className='width-1200' src={EsportsInterview} alt="User interviews with Esports professionals" loading="lazy" />
            <span className='space'></span>
          </div>
          <div className='case-p'>
            <p>{t('esports.userResearchChallenges')}</p>
          </div>
          <div className='img-container'>
            <img className='width-1200' src={EsportsProblem2} alt="Challenges faced by Esports professionals job hunting on social media" loading="lazy" />
          </div>
          <div className='case-p'>
            <h5 className='emphasis'>{t('esports.userResearchChallenges')}</h5>
          </div>
        </section>
        <section className='child'>
          <div className='esports-case'>
            <h3 className='step-title'>{t('esports.definePhaseTitle')}</h3>
            <h4 className='section-title'>{t('esports.userPersonaTitle')}</h4>
            <span className='space'></span>
          </div>
          <div className='img-container'>
            <img className='width-1200' src={EsportsPersona} alt="User persona for Esportsmaestro, Tim" loading="lazy" />
            <span className='space'></span>
          </div>
          <div className='case-p'>
            <p><b>{t('esports.userPersonaTitle')}</b></p>
            <span className='space'></span>
            <p>{t('esports.userPersonaText')}</p>
          </div>
        </section>
        <section className='child'>
          <div className='esports-case'>
            <h3 className='step-title'>{t('esports.definePhaseTitle')}</h3>
            <h4 className='section-title'>{t('esports.visualSitemapTitle')}</h4>
            <span className='space'></span>
          </div>
          <div className='img-container'>
            <span className='space'></span>
            <span className='space'></span>
            <img className='width-800' src={EsportsSitemap} alt="Visual sitemap of Esportsmaestro platform" loading="lazy" />
            <span className='space'></span>
            <span className='space'></span>
            <span className='space'></span>
          </div>
          <div className='case-p'>
            <p>{t('esports.visualSitemapText')}</p>
          </div>
        </section>
        <section className='child'>
          <div className='esports-case'>
            <h3 className='step-title'>{t('esports.definePhaseTitle')}</h3>
            <h4 className='section-title'>{t('esports.userJourneyFlowTitle')}</h4>
            <span className='space'></span>
          </div>
          <div className='img-container'>
            <span className='space'></span>
            <img className='width-1200' src={EsportsFlow} alt="User journey flow for Esportsmaestro platform" loading="lazy" />
            <span className='space'></span>
          </div>
          <div className='case-p'>
            <p>{t('esports.userJourneyFlowText')}</p>
          </div>
        </section>
        <section className='child'>
          <div className='esports-case'>
            <h3 className='step-title'>{t('esports.ideationTitle')}</h3>
            <h4 className='section-title'>{t('esports.midFidelityWireframesTitle')}</h4>
            <span className='space'></span>
          </div>
          <div className='img-container'>
            <span className='space'></span>
            <img className='width-1200' src={EsportsWireframe} alt="Mid-fidelity wireframes for Esportsmaestro platform" loading="lazy" />
            <span className='space'></span>
          </div>
          <div className='case-p'>
            <p>{t('esports.midFidelityWireframesText')}</p>
          </div>
        </section>
        <section className='baby'>
          <div className='esports-case'>
            <h3 className='step-title'>{t('esports.ideationTitle')}</h3>
            <h4 className='section-title'>{t('esports.uiElementsTitle')}</h4>
            <span className='space'></span>
          </div>
          <div className='case-p'>
            <p>{t('esports.uiElementsText')}</p>
          </div>
          <div className='img-container'>
            <span className='space'></span>
            <img className='width-1200' src={EsportsElements} alt="UI elements and design foundations for Esportsmaestro" loading="lazy" />
            <span className='space'></span>
          </div>
        </section>
        <section className='child'>
          <div className='esports-case'>
            <h3 className='step-title'>{t('esports.designsTitle')}</h3>
            <h4 className='section-title'>{t('esports.finalDesignsTitle')}</h4>
            <span className='space'></span>
          </div>
          <div className='case-p'>
            <p>{t('esports.finalDesignsText')}</p>
          </div>
        </section>
      </div>
      <div className='lead-banner'>
        <img src={EsportsUI} alt="Final UI designs for Esportsmaestro" loading="lazy" />
      </div>
      <div className='case-study'>
        <section className='child'>
          <div className='esports-case'>
            <h3 className='step-title'>{t('esports.designsTitle')}</h3>
            <h4 className='section-title'>{t('esports.prototypeTitle')}</h4>
            <span className='space'></span>
          </div>
          <div className='img-container'>
            <img className='width-1200' src={EsportsProto} alt="Responsive prototype of Esportsmaestro platform" loading="lazy" />
            <h6 style={{ margin: '0px' }}>{t('esports.prototypeText1')}</h6>
            <span className='space'></span>
            <span className='space'></span>
          </div>
          <div className='case-p'>
            <p>{t('esports.prototypeText2')}</p>
          </div>
        </section>
        <section className='child'>
          <div className='esports-case'>
            <h3 className='step-title'>{t('esports.conclusionTitle')}</h3>
            <h4 className='section-title'>{t('esports.finalThoughtsTitle')}</h4>
            <span className='space'></span>
          </div>
          <div className='case-p'>
            <p>{t('esports.finalThoughtsText')}</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Esports;
