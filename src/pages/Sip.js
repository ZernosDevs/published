import React from 'react';
import './Sip.css';
import Sipbanner from '../resources/sipbanner.png';
import Approach from '../resources/approach.png';
import TargetUser from '../resources/target user.png';
import Stats from '../resources/stats.png';
import Conbini from '../resources/conbini.png';
import Requests from '../resources/requests.png'
import SurveyData from '../resources/survey-data.png';
import SurveyInsight from '../resources/survey-insight.png';
import UserInterview from '../resources/user-interview.png';
import Persona from '../resources/persona.png';
import MVPDefine from '../resources/mvp-features.png';
import Sitemap from '../resources/sitemap.png';
import Journey  from '../resources/user-journey.png';
import Filter from '../resources/filter.png'
import Wireframe from '../resources/wireframe.png';
import StyleGuide from '../resources/style-guide.png';
import DesignSystem from '../resources/design-system.png';
import FinalUI from '../resources/finalui.png';
import OldProto2 from '../resources/old-filter-prototype2.gif'
import OldFilter from '../resources/old-filter.png';
import NewFilter from '../resources/new-filter.png';
import NewProto from '../resources/new-filter-prototype.gif';
import FinalProto from '../resources/final-proto2.gif'
import { Trans, useTranslation } from 'react-i18next';

const Sip = () => {

  const { t } = useTranslation();

  return (
    <main className='fade-in'>
      <div className='lead-banner'>
        <img src={Sipbanner} loading='eager' alt="Sip banner"></img>
      </div> 
      <div className='case-study'>
        <div className='overview'>
            <h5>{t('sip-role')}</h5>
            <h5>{t('sip-responsibility')}</h5>
            <h5>{t('sip-timeline')}</h5>
        </div>
        <section className='baby'>
        <div className='case-p'>
          <h2>{t('overview')}</h2>
          <p>{t('sip-overview1')}</p>
          <span className='space'></span>
          <p>{t('sip-overview2')}</p>
          <span className='space'></span>
          <p><i>{t('sip-overview3')}</i></p>
          
        </div>
        </section>
        <section className='baby'>
        <div className='case-p'>
          <h2>{t('problem')}</h2>
          <p>{t('sip-problem1')}</p>
        </div>
        </section>
        <section className='baby'>
        <div className='case-p'>
          <h2>{t('objective')}</h2>
          <p>{t('sip-objective1')}</p>
        </div>
        </section>
        <section className='parent'>  
          <div className='case-p'>
            <h2>{t('approach')}</h2> 
            <p>{t('sip-approach1')}</p>
          </div>
        </section>   
      </div>
      <div className='banner'>
        <img src={Approach} alt="Approach" loading="lazy"></img>
      </div>
      <div className='case-study'>
        <section className='parent'>
          <div className='case-p'>
            <h3>{t('sip-title1')}</h3>
          </div>
          <section className='child'>
            <div className='img-container'>
              <img className='width-800' src={TargetUser} alt="Target User" loading="lazy"></img> 
            </div>
            <div className='case-p'>
              <h4>{t('sip-subtitle1')}</h4> 
              <p>{t('sip-content1')}</p>
            </div>
            <div className='case-p'>
              <span className='space'></span>
              <span className='space'></span>
              <h5 className='emphasis'>{t('sip-content2')}</h5>
            </div>
          </section>
          <section className='child'>
            <div className='case-p'>
              <h4>{t('sip-subtitle2')}</h4> 
            </div>
            <div className='img-container'>
              <img className='width-800' src={Stats} alt="Stats" loading="lazy"></img>
              <h6>{t('sip-imagetext1')}</h6> 
            </div>
            <div className='img-container'>
              <img className='width-800' src={Conbini} alt="Conbini" loading="lazy"></img>
              <h6>{t('sip-imagetext2')}</h6> 
            </div>
            <div className='case-p'>
              <p>{t('sip-content3')}</p>
            </div>
            <div className='case-p'>
              <span className='space'></span>
              <span className='space'></span>
              <h5 className='emphasis'>{t('sip-content4')}</h5>
            </div>
          </section>
          <section className='child'>
            <div className='case-p'>
              <h4>{t('sip-subtitle3')}</h4> 
              <span className='space'></span>
              <span className='space'></span>
            </div>
            <div className='img-container'>
              <img src={Requests} alt="Business Requests" loading="lazy"></img> 
            </div>
            <div className='case-p'>
              <span className='space'></span>
              <p>{t('sip-content5')}</p>
              <span className='space'></span>
              <p>{t('sip-content6')}</p>
            </div>
          </section>
        </section>
        <section className='parent'>
          <section className='baby'>
            <div className='case-p'>
              <h3>{t('sip-title2')}</h3>
            </div>
          </section>
          <section className='child'>
            <div className='case-p'>
              <h4>{t('sip-subtitle4')}</h4>
              <p>{t('sip-content7')}</p>
              <span className='space'></span>
              <p><b>{t('survey.scope')}</b> {t('survey.description')}</p>
            </div>
            <div className='img-container'>
              <img className='width-1200' src={SurveyData} alt="Survey Data" loading="lazy"></img>
            </div>
            <div className='img-container'>
              <img className='width-1200' src={SurveyInsight} alt="Survey Insight" loading="lazy"></img>
            </div>
            <div className='case-p'>
              <p><b>{t('findings.title')}</b> {t('findings.description')}</p>
              <br />
              <ul>
                <li>{t('findings.list.point1')}</li>
                <br />
                <li>{t('findings.list.point2')}</li>
                <br />
                <li>{t('findings.list.point3')}</li>
                <br />
                <li>{t('findings.list.point4')}</li>
                <br />
                <li>{t('findings.list.point5')}</li>
              </ul>
            </div>
          </section>
          <section className="child">
            <div className="case-p">
              <h4>{t('qualitativeResearch.title')}</h4>
              <p>
                <b>{t('qualitativeResearch.scope.title')}</b> {t('qualitativeResearch.scope.description')}
              </p>
            </div>
            <div className="img-container">
              <img className="width-1200" src={UserInterview} alt="User Interview" loading="lazy" />
            </div>
            <div className="case-p">
              <p>
                <b>{t('qualitativeResearch.keyFindings.title')}</b>
                <ul>
                  <br />
                  <li>{t('qualitativeResearch.keyFindings.list.point1')}</li>
                  <br />
                  <li>{t('qualitativeResearch.keyFindings.list.point2')}</li>
                  <br />
                  <li>{t('qualitativeResearch.keyFindings.list.point3')}</li>
                  <br />
                  <li>{t('qualitativeResearch.keyFindings.list.point4')}</li>
                  <br />
                </ul>
              </p>
            </div>
            <div className="case-p">
              <span className="space"></span>
              <span className="space"></span>
              <h5 className="emphasis">{t('qualitativeResearch.highlight')}</h5>
            </div>
          </section>
          <section className="child">
            <div className="case-p">
              <h4>{t('userPersona.title')}</h4>
            </div>
            <div className="img-container">
              <img className="width-1200" src={Persona} alt="Persona" loading="lazy" />
            </div>
            <div className="case-p">
              <p>
                <b>{t('userPersona.meetMike.title')}</b>
              </p>
              <span className="space"></span>
              <p>{t('userPersona.meetMike.description')}</p>
            </div>
          </section>
          <section className="child">
            <div className="case-p">
              <h4>{t('definingMVP.title')}</h4>
              <p>{t('definingMVP.description1')}</p>
              <span className="space"></span>
              <p>{t('definingMVP.description2')}</p>
            </div>
            <div className="img-container">
              <img src={MVPDefine} alt="MVP Define" loading="lazy" />
            </div>
        </section>
        </section>
        <section className='parent'>
          <section className="baby">
          <div className="case-p">
            <h3>{t('productArchitecture.title')}</h3>
          </div>
        </section>
        <section className="child">
          <div className="case-p">
            <h4>{t('visualSitemap.title')}</h4>
          </div>
          <div className="img-container">
            <img className="width-800" src={Sitemap} alt="Sitemap" loading="lazy" />
          </div>
          <div className="case-p">
            <p>{t('visualSitemap.description')}</p>
          </div>
        </section>
        <section className="child">
          <div className="case-p">
            <h4>{t('userJourney.title')}</h4>
          </div>
          <div className="img-container">
            <img className="width-1200" src={Journey} alt="User Journey" loading="lazy" />
          </div>
          <div className="case-p">
            <p>{t('userJourney.description')}</p>
          </div>
        </section>
        <section className="child">
          <div className="case-p">
            <h4>{t('customFilter.title')}</h4>
          </div>
          <div className="img-container">
            <img src={Filter} alt="Filter" loading="lazy" />
          </div>
          <div className="case-p">
            <p>{t('customFilter.description')}</p>
          </div>
        </section>
        <section className='child'>
          <div className='case-p'>
            <h4>{t('midFidelityWireframe.title')}</h4>
          </div>
          <div className='img-container'>
            <img src={Wireframe} alt="Wireframe" loading="lazy" />
          </div>
          <div className='case-p'>
            <p>{t('midFidelityWireframe.description')}</p>
          </div>
        </section>
        </section>
        <section className='parent'>
          <section className='baby'>
            <div className='case-p'>
              <h3>{t('uiBranding.title')}</h3>
            </div>
          </section>

          <section className='child'>
            <div className='case-p'>
              <h4>{t('styleGuide.title')}</h4>
            </div>
            <div className='img-container'>
              <img className='width-800' src={StyleGuide} alt="Style Guide" loading="lazy" />
            </div>
            <div className='case-p'>
              <p>{t('styleGuide.description')}</p>
            </div>
          </section>
          <section className='child'>
        <div className='case-p'>
          <h4>{t('designSystem.title')}</h4>
          <p>{t('designSystem.description')}</p>
        </div>
        <div className='img-container'>
          <img className='width-1200' src={DesignSystem} alt={t('altText.designSystem')} loading="lazy"></img>
        </div>
      </section>
      <section className='child'>
        <div className='case-p'>
          <h4>{t('responsiveUI.title')}</h4>
          <p>{t('responsiveUI.description')}</p>
        </div>
      </section>
        </section>
      </div>
        
      <div className='span-banner'>
        <img src={FinalUI} alt="Final UI" loading="lazy"></img>
      </div>
      
      <div className='case-study'>
      <section className='child'>
      <div className='case-p'>
        <h3>{t('prototypeTesting.title')}</h3>
      </div>

      <section className='child'>
        <div className='gif-container'>
          <div className='mobile-container'>
            <img className='mobile-gif' src={OldFilter} alt="Old Filter" loading="lazy" />
          </div>
          <div className='mobile-container'>
            <img className='mobile-gif' src={OldProto2} alt="Old Prototype" loading="lazy" />
          </div>
        </div>
        <div className='case-p'>
          <p><b>{t('prototypeTesting.problemTitle')}</b> {t('prototypeTesting.problemDescription')}</p>
        </div>
      </section>

      <section className='child'>
        <div className='gif-container'>
          <div className='mobile-container'>
            <img className='mobile-gif' src={NewFilter} alt="New Filter" loading="lazy" />
          </div>
          <div className='mobile-container'>
            <img className='mobile-gif' src={NewProto} alt="New Prototype" loading="lazy" />
          </div>
        </div>
        <div className='case-p'>
          <p><b>{t('prototypeTesting.solutionTitle')}</b> {t('prototypeTesting.solutionDescription')}</p>
        </div>
      </section>

      <section className='child'>
        <div className='img-container'>
          <img className='width-1200' src={FinalProto} alt="Final Prototype" loading="lazy" />
          <h6 style={{ margin: '0px' }}>{t('prototypeTesting.finalProtoCaption')}</h6>
        </div>
      </section>

      <section className='baby'>
        <div className='case-p'>
          <h3>{t('finalThoughts.title')}</h3>
        </div>
      </section>

      <section className='child'>
        <div className='case-p'>
          <h4>{t('conclusion.title')}</h4>
          <p>{t('conclusion.paragraph1')}</p>
          <span className='space'></span>
          <p>{t('conclusion.paragraph2')}</p>
        </div>
      </section>

      <section className='child'>
        <div className='case-p'>
          <h4>{t('nextSteps.title')}</h4>
          <p>{t('nextSteps.paragraph1')}</p>
          <span className='space'></span>
          <p>{t('nextSteps.paragraph2')}</p>
        </div>
      </section>
    </section>
      </div>
      
    </main>
  );
};

export default Sip;
