import React from 'react';
import './Esports.css'
import ScrollProgress from '../components/ScrollProgress';
import EsportsBanner from '../resources/esports/esports-banner.png';
import EsportsApproach from '../resources/esports/esports-approach.png'
import EsportsProblem from '../resources/esports/esports-problem.png'
import EsportsUser from '../resources/esports/esports-user.png'

const Esports = () => {
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
            <span className='space'></span>
            <span className='space'></span>
            <h5 className='emphasis'>An app dedicated to online alcohol home delivery has the potential to become an instant-hit</h5>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Esports;