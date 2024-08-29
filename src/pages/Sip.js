import React from 'react';
import './Sip.css';
import Sipbanner from '../resources/sipbanner.png';
import Approach from '../resources/approach.png';
import TargetUser from '../resources/target user.png';
import Stats from '../resources/stats.png';
import Conbini from '../resources/conbini.png';
import Requests from '../resources/requests.png';
import SurveyData from '../resources/survey-data.png';
import SurveyInsight from '../resources/survey-insight.png';
import UserInterview from '../resources/user-interview.png';
import Persona from '../resources/persona.png';
import MVPDefine from '../resources/mvp-features.png';
import Sitemap from '../resources/sitemap.png';
import Journey from '../resources/user-journey.png';
import Filter from '../resources/filter.png';
import Wireframe from '../resources/wireframe.png';
import StyleGuide from '../resources/style-guide.png';
import DesignSystem from '../resources/design-system.png';
import FinalUI from '../resources/finalui.png';
import OldProto2 from '../resources/old-filter-prototype2.gif';
import OldFilter from '../resources/old-filter.png';
import NewFilter from '../resources/new-filter.png';
import NewProto from '../resources/new-filter-prototype.gif';
import FinalProto from '../resources/final-proto2.gif';

const Sip = () => {

  return (
    <main className='fade-in'>
      <div className='lead-banner'>
        <img src={Sipbanner} alt="Sip at Home banner" loading='lazy' />
      </div> 
      <div className='case-study'>
        <div className='overview'>
            <h5>Role: Product Designer (Responsive Web)</h5>
            <h5>Responsibility: End to end UI UX design</h5>
            <h5>Timeline: April 2024 - June 2024</h5>
        </div>
        <section className='baby'>
        <div className='case-p'>
          <h2>Overview</h2>
          <p>In South Korea, the online sale of alcohol is heavily regulated, with delivery options currently banned. However, recent policy changes now allow consumers to order online for pick-up at select convenience stores. Anticipating a shift towards the legalization of alcohol delivery, my client plans to launch an e-commerce platform centered around alcohol delivery. 
          </p>
          <span className='space'></span>
          <p>
          Sip at Home is an e-commerce site for all types of alcoholic beverages. It lets you choose your drink based on type, ingredient, and most importantly, taste. As the sole product designer for this project, I was hired as a freelancer to handle everything from user experience research to design system creation and responsive web design.</p>
          <span className='space'></span>
          <p><i>To protect the client's intellectual property, most of the content presented has been modified for a global audience, and all text has been translated from Korean to English.</i></p>
          
        </div>
        </section>
        <section className='baby'>
        <div className='case-p'>
          <h2>Problem</h2>
          <p>The strict regulations on online alcohol sales and the prohibition of delivery in South Korea limits the business potential of liquor store owners and affects consumer convenience. Users are frustrated by the inability to have alcohol delivered, relying instead on physical store visits or inconvenient pick-up options. Existing solutions around the restrictions have failed to meet the growing demand for home delivery. My task was to design a platform ready to launch once the delivery ban is lifted which would help position my client at the forefront of the market. </p>
        </div>
        </section>
        <section className='baby'>
        <div className='case-p'>
          <h2>Objective</h2>
          <p>The client requested that I first develop the website version before committing to a mobile app, as that would require additional time and costs. Since the business can only operate once the delivery ban is lifted, my client is cautious about investing too much in a venture that cannot be fully assessed even after the MVP is ready. Therefore, my primary objective was to create responsive web designs for the MVP, aiming to provide a seamless online alcohol purchasing experience. The goal was to complete the platform within three months, divided into phases of user research, design development, and final prototyping. Success would be measured by client satisfaction and additional investments received once MVP is launched.  </p>
        </div>
        </section>
        <section className='parent'>  
          <div className='case-p'>
            <h2>Approach</h2> 
            <p>Through a simple yet effective design process, I approached this task by understanding the project's scope, conducting user research, preparing user journeys and sitemaps, designing the final UI, and ultimately testing the product through usability tests and prototypes. If stakeholders requested changes, I would revisit and redesign the necessary components.</p>
          </div>
        </section>   
      </div>
      <div className='banner'>
        <img src={Approach} alt="Approach diagram" loading='lazy' />
      </div>
      <div className='case-study'>
        <section className='parent'>
          <div className='case-p'>
            <h3>Project Overview</h3>
          </div>
          <section className='child'>
            <div className='img-container'>
              <img className='width-800' src={TargetUser} alt="Target user demographic" loading='lazy' />
            </div>
            <div className='case-p'>
              <h4>Understanding the User</h4> 
              <p>Every digital product has a specific audience to target and focus on. In the case of Sip at Home, the target user happens to be every adult who is legally allowed to drink and has access to the internet. This means the age group ranges from 18 years and above, with no specific preference on gender, occupation, or location within South Korea.</p>
            </div>
            <div className='case-p'>
              <span className='space'></span>
              <span className='space'></span>
              <h5 className='emphasis'>Create a product that is inclusive, neutral, and appealing to a wide demographic.</h5>
            </div>
          </section>
          <section className='child'>
            <div className='case-p'>
              <h4>Understanding the Business</h4> 
            </div>
            <div className='img-container'>
              <img className='width-800' src={Stats} alt="Quarterly transaction value of online food and beverages sales in South Korea" loading='lazy' />
              <h6>Quarterly transaction value of online food and beverages sales in South Korea from the 1st quarter of 2017 to the 1st quarter of 2024, Statista (2024)</h6> 
            </div>
            <div className='case-p'>
            <div className='img-container'>
              <img className='width-800' src={Conbini} alt="Online alcohol sales by convenience store chains" loading='lazy' />
              <h6>Online alcohol sales are dominated by physical store visits or pickup services provided by convenience store chains.</h6> 
            </div>
              <p>The online food and beverage market in South Korea has experienced remarkable growth, driven by an increasing preference for convenience and technological advancements. Home delivery services have become particularly popular due to the busy lifestyles of South Koreans and the rapid adoption of mobile technology. Although alcohol can be purchased online, it must be picked up at convenience stores that provide the service.</p>
            </div>
            
            <div className='case-p'>
              <span className='space'></span>
              <span className='space'></span>
              <h5 className='emphasis'>An app dedicated to online alcohol home delivery has the potential to become an instant-hit</h5>
            </div>
            
          </section>
          <section className='child'>
            <div className='case-p'>
              <h4>Business Requests</h4> 
              <span className='space'></span>
              <span className='space'></span>
            </div>
            <div className='img-container'>
              <img src={Requests} alt="Business requests and key features" loading='lazy' />
            </div>
            <div className='case-p'>
              <span className='space'></span>
              <p>Like any project, clients or stakeholders have specific requests during the development process. My client requested several key features for the platform: filters for the drink catalog based on alcohol type, ingredient, and taste; a comprehensive design system defining colors, typography, etc; an appealing design suitable for all adults legally allowed to drink; and a responsive design that would enable easy transition to a mobile application in the future.</p>
              <span className='space'></span>
              <p>Now that I have thoroughly understood the project's overview and business demands, I set out to conduct user research to better understand the needs, behaviors, and pain points of the target audience. This will help me minimize design decisions based on assumption and ultimately deliver a data-driven user experience. </p>
            </div>
          </section>
        </section>
        <section className='parent'>
          <section className='baby'>
            <div className='case-p'>
              <h3>User Research</h3>
            </div>
          </section>
          <section className='child'>
            <div className='case-p'>
              <h4>Quantitative Research: User Survey</h4>
              <p>To gather quantitative data, I distributed a survey to a diverse group of potential users to understand their preferences and behaviors when purchasing alcohol online. The survey provided valuable insights into user expectations, pain points, and desired features.</p>
            </div>
            <div className='img-container'>
              <img src={SurveyData} alt="Survey data visualization" loading='lazy' />
            </div>
            <div className='img-container'>
              <img src={SurveyInsight} alt="Survey insights" loading='lazy' />
            </div>
            <div className='case-p'>
              <p>The survey results revealed that users highly valued convenience and ease of use. A significant number of respondents expressed frustration with current alcohol purchasing options, particularly the lack of delivery services. The data also highlighted a strong interest in filtering options and personalized recommendations.</p>
              <span className='space'></span>
            </div>
          </section>
          <section className='child'>
            <div className='case-p'>
              <h4>Qualitative Research: User Interviews</h4>
              <p>In addition to the survey, I conducted in-depth interviews with a smaller group of users to gain qualitative insights into their experiences and preferences. This helped to uncover deeper motivations and behaviors that the survey could not fully capture.</p>
            </div>
            <div className='img-container'>
              <img src={UserInterview} alt="User interviews process" loading='lazy' />
            </div>
            <div className='case-p'>
              <p>The interviews provided rich feedback on user expectations and frustrations. Common themes included the desire for a streamlined checkout process, clear product information, and easy access to customer support. Users also expressed a need for a platform that would cater to their specific taste preferences and offer recommendations based on past purchases.</p>
              <span className='space'></span>
            </div>
          </section>
        </section>
        <section className='parent'>
          <div className='case-p'>
            <h3>Design Process</h3>
            <p>With the research data in hand, I moved forward with the design process. This involved creating user personas, mapping out user journeys, and developing a sitemap to organize the content and features effectively.</p>
          </div>
          <section className='child'>
            <div className='img-container'>
              <img className='width-800' src={Persona} alt="User personas" loading='lazy' />
            </div>
            <div className='case-p'>
              <h4>User Personas</h4>
              <p>I created user personas to represent the various segments of the target audience. These personas helped to keep the design process focused on the needs and preferences of real users.</p>
            </div>
            <div className='img-container'>
              <img className='width-800' src={Journey} alt="User journey mapping" loading='lazy' />
            </div>
            <div className='case-p'>
              <h4>User Journey</h4>
              <p>Mapping out user journeys allowed me to visualize the steps users would take when interacting with the platform, from discovering it to making a purchase. This helped identify potential pain points and areas for improvement in the user experience.</p>
            </div>
            <div className='img-container'>
              <img className='width-800' src={Sitemap} alt="Sitemap structure" loading='lazy' />
            </div>
            <div className='case-p'>
              <h4>Sitemap</h4>
              <p>The sitemap outlined the structure of the platform, ensuring that all necessary pages and features were included and organized in a logical manner. This was essential for creating an intuitive navigation system.</p>
            </div>
          </section>
          <section className='child'>
            <div className='case-p'>
              <h4>Design Exploration</h4>
              <p>With a clear understanding of user needs and project goals, I began exploring various design options. This included wireframing, developing a style guide, and creating a design system to ensure consistency across the platform.</p>
            </div>
            <div className='img-container'>
              <img className='width-800' src={Wireframe} alt="Wireframe design" loading='lazy' />
            </div>
            <div className='case-p'>
              <h4>Wireframes</h4>
              <p>Wireframes were created to outline the basic structure and layout of the platform. This stage allowed me to experiment with different design approaches and gather feedback before moving on to high-fidelity designs.</p>
            </div>
            <div className='img-container'>
              <img className='width-800' src={StyleGuide} alt="Style guide" loading='lazy' />
            </div>
            <div className='case-p'>
              <h4>Style Guide</h4>
              <p>The style guide defined the visual elements of the platform, including color schemes, typography, and iconography. This ensured that the design was cohesive and aligned with the brand identity.</p>
            </div>
            <div className='img-container'>
              <img className='width-800' src={DesignSystem} alt="Design system" loading='lazy' />
            </div>
            <div className='case-p'>
              <h4>Design System</h4>
              <p>The design system provided a comprehensive set of guidelines and components for building the platform. This facilitated a consistent and efficient design process and made it easier to maintain and update the platform in the future.</p>
            </div>
            <div className='img-container'>
              <img className='width-800' src={FinalUI} alt="Final UI design" loading='lazy' />
            </div>
            <div className='case-p'>
              <h4>Final UI Design</h4>
              <p>The final UI design incorporated all the elements from the previous stages and was refined based on feedback and usability testing. This design was used to create high-fidelity prototypes and prepare for development.</p>
            </div>
          </section>
        </section>
        <section className='parent'>
          <div className='case-p'>
            <h3>Prototyping and Testing</h3>
            <p>Prototyping allowed me to test the design with real users and gather feedback on its usability. I created interactive prototypes to simulate the user experience and conducted usability tests to identify areas for improvement.</p>
          </div>
          <section className='child'>
            <div className='img-container'>
              <img className='width-800' src={OldProto2} alt="Old prototype version 2" loading='lazy' />
            </div>
            <div className='case-p'>
              <h4>Old Prototype Version 2</h4>
              <p>The second version of the prototype included several design iterations based on initial feedback. It was used for further testing and refinement of the user experience.</p>
            </div>
            <div className='img-container'>
              <img className='width-800' src={OldFilter} alt="Old filter design" loading='lazy' />
            </div>
            <div className='case-p'>
              <h4>Old Filter Design</h4>
              <p>The old filter design was part of the early prototype and was used to test different filtering options with users. Feedback from this phase led to improvements in the final filter design.</p>
            </div>
            <div className='img-container'>
              <img className='width-800' src={NewFilter} alt="New filter design" loading='lazy' />
            </div>
            <div className='case-p'>
              <h4>New Filter Design</h4>
              <p>The new filter design incorporated user feedback and provided a more intuitive and effective way for users to find their preferred drinks. This design was implemented in the final prototype.</p>
            </div>
            <div className='img-container'>
              <img className='width-800' src={NewProto} alt="New prototype version" loading='lazy' />
            </div>
            <div className='case-p'>
              <h4>New Prototype Version</h4>
              <p>The final prototype included all the improvements and refinements from previous versions. It was used for final testing and to ensure that the design met user needs and expectations.</p>
            </div>
            <div className='img-container'>
              <img className='width-800' src={FinalProto} alt="Final prototype version" loading='lazy' />
            </div>
            <div className='case-p'>
              <h4>Final Prototype Version</h4>
              <p>The final prototype was the culmination of the design process, incorporating all feedback and refinements. It was used for final presentation and approval before development began.</p>
            </div>
          </section>
        </section>
        <section className='parent'>
          <div className='case-p'>
            <h3>Conclusion</h3>
            <p>The project successfully delivered a responsive web platform ready for launch as soon as alcohol delivery regulations are lifted in South Korea. The design process was iterative and user-centered, ensuring that the final product met the needs and expectations of the target audience. The platform is poised to become a leading solution in the online alcohol delivery market.</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Sip;
