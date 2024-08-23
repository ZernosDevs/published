import React, { useEffect } from 'react';
import './Esports.css'
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


  return (
    <main className="fade-in"> 
      <div className='lead-banner'>
        <img src = { EsportsBanner } loading='eager'></img>
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
          <p><i>Esportsmaestro</i> is a platform for Esports professionals seeking careers in  League of Legends, the world's largest Esport. It facilitates networking between Esports talent and organizations, enabling job seekers to share their resumes and employers to list job openings. As one of the UI/UX designers of this project, I worked closely with the stakeholders to conduct user research and create responsive designs for the platform.   
          </p>
        </div>
        </section>
        <section className='baby'>
        <div className='case-p'>
          <h2>Problem</h2>
          <p>League of Legends is one of the largest Esports with various annual tournaments taking place worldwide. On average, 4000 Esports professionals compete in a global circuit to have a chance at securing their careers in the field. However, the employment process for these professionals has largely relied on networking through social media sites, most notably Twitter (now known as X). Esports professionals face a wide range of risks and challenges when job hunting through social media sites.  </p>
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
          <p><i>Esportsmaestro</i> was designed to address the challenges Esports professionals face when job hunting through social media by providing a dedicated, secure, and professional environment tailored specifically to the Esports industry. My primary objective was to design an intuitive, user-centered experience that connects Esports professionals with job opportunities. This involves understanding the unique needs and pain points of job seekers and designing interfaces that simplify the job search, application, and recruitment processes. </p>
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
                <li>Finally, in the Design phase, I create high-fidelity designs and interactive prototypes that effectively address the users' needs and simulates interactions on the platform.</li>
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
            <p ><i>Esportsmaestro</i> target user is professional gamers, coaches, and team managers; this has been very clear since the inception of the project. The target audience predominantly comprises males aged 16 to 30, all with a deep-rooted passion for video games. Key traits of our audience include an appreciation for simplicity, a preference for dark mode, and a love for minimalist design. Accordingly, design elements should incorporate futuristic vibe/motif that resonates with the world of technology and gaming.</p>
            <span className='space'></span>
            <span className='space'></span>
            <span className='space'></span>
          </div>
          <div className='img-container'>
              <img className= 'width-800' src = { EsportsUser } ></img>
              <span className='space'></span>
              <h6>
              The League of Legends (LoL) Esports scene is one of the most established and globally recognized competitive gaming ecosystems. </h6> 
            </div>
          <div className='case-p'>
            <h5 className='emphasis'>Design a product that resonates with gamers while filling the void present in Esports recruitment.</h5>
          </div>
        </section>
        <section className='child'>
          <div className='esports-case'>
            <h3 className='step-title'>DISCOVERY</h3>
            <h4 className='section-title'>User Research</h4> 
            <span className='space'></span>
          </div>
          <div className='case-p'>
            <p >To understand the user's needs and pain points I conducted user interviews with Esports professionals. A number of these interviews were done in group settings of 5 - 7 people, while some of them were done on a 1-on-1 basis. There were a total of 25 participants. This high participant count was made possible through my connections as a former Esports coach for 3 League of Legends teams. The key moments of the interviews were summarized into the user interview log below.</p>
            <span className='space'></span>
            <span className='space'></span>
            <span className='space'></span>
          </div>
          <div className='img-container'>
              <img className= 'width-1200' src = { EsportsInterview } ></img>
              <span className='space'></span>
          </div>
          <div className='case-p'>
            <p>Many Esports professionals find social media, particularly Twitter, convenient for job hunting since it eliminates the need for traditional cover letters and resumes. However it was clear from the user interviews that significant challenges still existed. </p>
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
            <p >With the sitemap done I created user journey flows for different scenarios. The flow above begins with the user's onboarding process, where they create a profile and input their gaming credentials. It then guides them through exploring available job listings, filtering opportunities based on their skills and interests, and applying to positions.</p>
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
            <p >Mid fidelity wireframes provide detailed yet simplified visual representations of the platform's layout and functionality. These wireframes go beyond simple sketches but do not offer the same level of detail of high fidelity designs, allowing us to focus on the big picture first.</p>
          </div>
        </section>
        <section className='baby'>
          <div className='esports-case'>
              <h3 className='step-title'>Ideation</h3>
              <h4 className='section-title'>UI elements</h4> 
              <span className='space'></span>
          </div>
          <div className='case-p'>
            <p >The base UI foundations of the platform such as the colors and typography set a guideline to ensure uniformity across the platform's interface. </p>
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
            <p >Based on the sitemap, user journey flows, wireframes, and UI elements, I designed the final UI of the platform for stakeholder's review and developer handover.  </p>
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
              <h6 style= {{ margin: '0px'}}>Responsive prototype of user job application</h6>
              <span className='space'></span>
              <span className='space'></span>
            </div>
            <div className='case-p'>
            <p >Responsive prototype of a user sending job application on <i>Esportsmaestro</i> demonstrates how the user navigates through job listing, reviews the job details, and sends the filled out application form. This can be viewed dynamically in desktop and mobile interfaces.</p>
          </div>
        </section>
        <section className='child'>
          <div className='esports-case'>
              <h3 className='step-title'>Conclusion</h3>
              <h4 className='section-title'>Final Thoughts</h4> 
              <span className='space'></span>
          </div>
          <div className='case-p'>
            <p ><i>Esportsmaestro</i> is a project that I am incredibly proud to have contributed to, marking my first experience in real product design within a field I'm deeply passionate about. While I encountered challenges in aligning the design style with the diverse opinions of stakeholders, our focus on the target user led us to the conclusion that a "fast, simple, and modern" approach was ideal. This led us to designing a platform that eliminates the frustrations of esports job hunting, and making sure Esports talent are no longer compelled to use social media sites for their job hunting purposes. </p>
          </div>
          

        </section>
      </div>
    </main>
  );
};

export default Esports;