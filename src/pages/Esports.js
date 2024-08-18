import React, { useEffect } from 'react';
import './Esports.css'
import ScrollProgress from '../components/ScrollProgress';
import EsportsBanner from '../resources/esports/esports-banner.png';
import EsportsApproach from '../resources/esports/esports-approach.png'
import EsportsProblem from '../resources/esports/esports-problem2.png'
import EsportsProblem2 from '../resources/esports/esports-problem.png'
import EsportsUser from '../resources/esports/esports-user.png'
import EsportsInterview from '../resources/esports/esports-interview.png'
import EsportsPersona from '../resources/esports/esports-persona.png'
import EsportsSitemap from '../resources/esports/esports-sitemap.png'
import EsportsFlow from '../resources/esports/esports-flow.png'
import EsportsWireframe from '../resources/esports/esports-wireframe.png'
import EsportsElements from '../resources/esports/esports-elements.png'
import EsportsUI from '../resources/esports/esports-final.png'
import EsportsProto from '../resources/esports/esports-proto.gif'

const Esports = () => {

  useEffect(() => {
    const images = [
      EsportsBanner,
      EsportsApproach,
      EsportsProblem,
      EsportsProblem2,
      EsportsUser,
      EsportsInterview,
      EsportsPersona,
      EsportsSitemap,
      EsportsFlow,
      EsportsWireframe,
      EsportsElements,
      EsportsUI,
      EsportsProto
    ];

    // Preload all images
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <main>
      <ScrollProgress color="#D4D4D4" />
      <div className='lead-banner'>
        <img src = { EsportsBanner }></img>
      </div>
      <div className='case-study'>
        <div className='overview'>
            <h5>Role: UI/UX Designer (Responsive Web)</h5>
            <h5>Responsibility: UX Research and UI Design</h5>
            <h5>Timeline: March 2021 - September 2021</h5>
        </div>
        <section className='baby'>
        <div className='case-p'>
          <h2>Overview</h2>
          <p>Esportsmaestro is a platform for esports professionals seeking careers in  League of Legends, the world's largest esport. It facilitates networking between esports talent and organizations, enabling job seekers to share their resumes and employers to list job openings. As one of the UI/UX designers of this project, I worked closely with the stakeholders to conduct user research and create responsive designs for the platform.   
          </p>
        </div>
        </section>
        <section className='baby'>
        <div className='case-p'>
          <h2>Problem</h2>
          <p>League of Legends is one of the largest esports with various annual tournaments taking place worldwide. On average, 4000 esports professionals compete in a global circuit to have a chance at securing their careers in the field. However, the employment process for these professionals has largely relied on networking through social media sites, most notably Twitter (now known as X). Esports professionals face a wide range of risks and challenges when job hunting through social media sites.  </p>
        </div>
        <div className='img-container'>
              <img className= 'width-1200' src = { EsportsProblem }></img>
              <p>
              Every month, 100s of Esports talent post their notices on Twitter for job recruitment.</p>  
        </div>
        </section>
        <section className='baby'>
        <div className='case-p'>
          <h2>Objective</h2>
          <p>Esportsmaestro was designed to address the challenges esports professionals face when job hunting through social media by providing a dedicated, secure, and professional environment tailored specifically to the esports industry. My primary objective was to design an intuitive, user-centered experience that seamlessly connects esports professionals with job opportunities. This involves understanding the unique needs and pain points of users—both job seekers and employers—and designing interfaces that simplify the job search, application, and recruitment processes. </p>
        </div>
        </section>
        <section className='parent'>  
          <div className='case-p'>
            <h2>Approach</h2>
            <p>My design approach focuses on creating a user-centered platform through a structured process.</p> 
            <ul>
                <br></br>
                <li>Discovery, where I identify the target users and conduct thorough user research to understand their needs and challenges.</li>
                <br></br>
                <li>In the Define phase, I develop user personas, create a visual sitemap, and outline user flows to ensure the platform's structure aligns with user goals. </li>
                <br></br>
                <li>During Ideation, I produce wireframes and design essential UI elements, iterating on these concepts to refine the user experience. </li>
                <br></br>
                <li>Finally, in the Design phase, I translate these ideas into polished, high-fidelity designs and interactive prototypes that effectively address the users' needs and facilitate seamless interactions on the platform.</li>
                <br></br>
              </ul>
          </div>
        </section>   
      </div>
      <div className='banner'>
        <img src = { EsportsApproach }></img>
      </div>
      <div className='case-study'>
        <section className='child'>
          <div className='esports-case'>
            <h3 className='step-title'>DISCOVERY</h3>
            <h4 className='section-title'>Understanding Target User</h4> 
            <span className='space'></span>
          </div>
          <div className='case-p'>
            <p >Esportsmaestro target user is professional gamers, coaches, and team managers; this has been very clear since the inception of the project. The target audience predominantly comprises males aged 16 to 30, all with a deep-rooted passion for video games. Key traits of our audience include an appreciation for simplicity, a preference for dark mode, and a love for minimalist design. Accordingly, design elements should incorporate futuristic vibe/motif that resonates with the world of technology and gaming.</p>
            <span className='space'></span>
            <span className='space'></span>
            <span className='space'></span>
          </div>
          <div className='img-container'>
              <img className= 'width-800' src = { EsportsUser } ></img>
              <span className='space'></span>
              <h6>
              The League of Legends (LoL) esports scene is one of the most established and globally recognized competitive gaming ecosystems. </h6> 
            </div>
          <div className='case-p'>
            <h5 className='emphasis'>Design a product that resonates with gamers while filling the void present in esports recruitment.</h5>
          </div>
        </section>
        <section className='child'>
          <div className='esports-case'>
            <h3 className='step-title'>DISCOVERY</h3>
            <h4 className='section-title'>User Research</h4> 
            <span className='space'></span>
          </div>
          <div className='case-p'>
            <p >To understand the user’s needs and pain points I conducted user interviews with esports professionals. A number of these interviews were done in group settings of 5 - 7 people, while some of them were done on a 1-on-1 basis. There were a total of 25 participants. This high participant count was made possible through my connections as a former esports coach for 3 League of Legends teams. The key moments of the interviews were summarized into the user interview log below.</p>
            <span className='space'></span>
            <span className='space'></span>
            <span className='space'></span>
          </div>
          <div className='img-container'>
              <img className= 'width-1200' src = { EsportsInterview } ></img>
              <span className='space'></span>
          </div>
          <div className='case-p'>
            <p>The pain points Esports talent faced on a d</p>
          </div>
          <div className='img-container'>
              <img className= 'width-1200' src = { EsportsProblem2 }></img>
          </div>
          <div className='case-p'>
            <h5 className='emphasis'>Esports talent faced noticeable pain points when it comes to job searching on twitter but had no better alternative.</h5>
          </div>
        </section>
        <section className='child'>
          <div className='esports-case'>
              <h3 className='step-title'>DEFINE</h3>
              <h4 className='section-title'>User Persona</h4> 
              <span className='space'></span>
          </div>
          <div className='img-container'>
              <img className= 'width-1200' src = { EsportsPersona } ></img>
              <span className='space'></span>
          </div>
          <div className='case-p'>
            <p><b>Meet Tim</b></p>
            <span className='space'></span>
            <p >Tim is the culmination of the qualitative data I gathered through the user interviews. He is a prime example of the typical Esports player looking to accelerate his career to the next level. However the pain points he currently faces serve as a significant obstacle to his goals of securing a career in Esports. It was clear from the user research that there was a need for a platform where Esports talent can find organized job openings and post their own availability for recruitment.</p>
          </div>
        </section>
        <section className='child'>
          <div className='esports-case'>
              <h3 className='step-title'>DEFINE</h3>
              <h4 className='section-title'>Visual Sitemap</h4> 
              <span className='space'></span>
          </div>
          <div className='img-container'>
              <span className='space'></span>
              <span className='space'></span>
              <img className= 'width-800' src = { EsportsSitemap } ></img>
              <span className='space'></span>
              <span className='space'></span>
              <span className='space'></span>
          </div>
          <div className='case-p'>
            <p >Having done the research, I constructed a visual sitemap of the the main pages. A lot of the features in this product involve in-page dynamic updates and booleans that would be better represented in user journey flowcharts. The actual number of pages are kept to a minimum to increase the overall simplicity and accessibility of the product. </p>
          </div>
        </section>
        <section className='child'>
          <div className='esports-case'>
              <h3 className='step-title'>DEFINE</h3>
              <h4 className='section-title'>User Journey Flow</h4> 
              <span className='space'></span>
          </div>
          <div className='img-container'>
              <span className='space'></span>
              <img className= 'width-1200' src = { EsportsFlow } ></img>
              <span className='space'></span>
          </div>
          <div className='case-p'>
            <p >Having done the research, I constructed a visual sitemap of the the main pages. A lot of the features in this product involve in-page dynamic updates and booleans that would be better represented in user journey flowcharts. The actual number of pages are kept to a minimum to increase the overall simplicity and accessibility of the product. </p>
          </div>
        </section>
        <section className='child'>
          <div className='esports-case'>
              <h3 className='step-title'>Ideation</h3>
              <h4 className='section-title'>Mid-fidelity Wireframes</h4> 
              <span className='space'></span>
          </div>
          <div className='img-container'>
              <span className='space'></span>
              <img className= 'width-1200' src = { EsportsWireframe } ></img>
              <span className='space'></span>
          </div>
          <div className='case-p'>
            <p >Having done the research, I constructed a visual sitemap of the the main pages. A lot of the features in this product involve in-page dynamic updates and booleans that would be better represented in user journey flowcharts. The actual number of pages are kept to a minimum to increase the overall simplicity and accessibility of the product. </p>
          </div>
        </section>
        <section className='baby'>
          <div className='esports-case'>
              <h3 className='step-title'>Ideation</h3>
              <h4 className='section-title'>UI elements</h4> 
              <span className='space'></span>
          </div>
          <div className='case-p'>
            <p >Having done the research, I constructed a visual sitemap of the the main pages. A lot of the features in this product involve in-page dynamic updates and booleans that would be better represented in user journey flowcharts. The actual number of pages are kept to a minimum to increase the overall simplicity and accessibility of the product. </p>
          </div>
          <div className='img-container'>
              <span className='space'></span>
              <img className= 'width-1200' src = { EsportsElements } ></img>
              <span className='space'></span>
          </div>
        </section>
        <section className='child'>
          <div className='esports-case'>
              <h3 className='step-title'>Designs</h3>
              <h4 className='section-title'>Final Designs</h4> 
              <span className='space'></span>
          </div>
          <div className='case-p'>
            <p >Having done the research, I constructed a visual sitemap of the the main pages. A lot of the features in this product involve in-page dynamic updates and booleans that would be better represented in user journey flowcharts. The actual number of pages are kept to a minimum to increase the overall simplicity and accessibility of the product. </p>
          </div>
        </section>
      </div>
      <div className='lead-banner'>
        <img src = { EsportsUI }></img>
      </div>
      <div className='case-study'>
        <section className='child'>
        <div className='esports-case'>
              <h3 className='step-title'>Designs</h3>
              <h4 className='section-title'>Prototype</h4> 
              <span className='space'></span>
          </div>
            <div className='img-container'>
              <img className= 'width-1200' src = { EsportsProto }></img>
              <h6 style= {{ margin: '0px'}}>Responsive prototype of user purchase and checkout flow</h6>
              <span className='space'></span>
              <span className='space'></span>
            </div>
            <div className='case-p'>
              <p >Having done the research, I constructed a visual sitemap of the the main pages. A lot of the features in this product involve in-page dynamic updates and booleans that would be better represented in user journey flowcharts. The actual number of pages are kept to a minimum to increase the overall simplicity and accessibility of the product. </p>
            </div>
        </section>
        <section className='child'>
          <div className='esports-case'>
              <h3 className='step-title'>Conclusion</h3>
              <h4 className='section-title'>Final Thoughts</h4> 
              <span className='space'></span>
          </div>
          <div className='case-p'>
            <p >Having done the research, I constructed a visual sitemap of the the main pages. A lot of the features in this product involve in-page dynamic updates and booleans that would be better represented in user journey flowcharts. The actual number of pages are kept to a minimum to increase the overall simplicity and accessibility of the product. </p>
          </div>
          

        </section>
      </div>
    </main>
  );
};

export default Esports;