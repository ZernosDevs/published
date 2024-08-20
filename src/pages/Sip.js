import React, { useEffect } from 'react';
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
import ScrollProgress from '../components/ScrollProgress';




const Sip = () => {

  return (
    <main className='fade-in'>
      <ScrollProgress color="#FDA5AF" />
      <div className='lead-banner'>
        <img src = { Sipbanner } loading='eager'></img>
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
        <img src = { Approach }></img>
      </div>
      <div className='case-study'>
        <section className='parent'>
          <div className='case-p'>
            <h3>Project Overview</h3>
          </div>
          <section className='child'>
            <div className='img-container'>
              <img className= 'width-800' src = { TargetUser }></img> 
            </div>
            <div className='case-p'>
              <h4>Understanding the User</h4> 
              <p >Every digital product has a specific audience to target and focus on. In the case of Sip at Home, the target user happens to be every adult who is legally allowed to drink and has access to the internet. This means the age group ranges from 18 years and above, with no specific preference on gender, occupation, or location within South Korea. </p>
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
              <img className= 'width-800' src = { Stats } ></img>
              <h6>Quarterly transaction value of online food and beverages sales in South Korea from the 1st quarter of 2017 to the 1st quarter of 2024, Statista (2024)</h6> 
            </div>
            <div className='case-p'>
            <div className='img-container'>
              <img className= 'width-800' src = { Conbini }></img>
              <h6>Online alcohol sales are dominated by physical store visits or pickup services provided by convenience store chains.</h6> 
            </div>
              <p >The online food and beverage market in South Korea has experienced remarkable growth, driven by an increasing preference for convenience and technological advancements. Home delivery services have become particularly popular due to the busy lifestyles of South Koreans and the rapid adoption of mobile technology. Although alcohol can be purchased online, it must be picked up at convenience stores that provide the service. </p>
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
              <img src = { Requests }>
              </img> 
            </div>
            <div className='case-p'>
              <span className='space'></span>
              <p>Like any project, clients or stakeholders have specific requests during the development process. My client requested several key features for the platform: filters for the drink catalog based on alcohol type, ingredient, and taste; a comprehensive design system defining colors, typography, etc; an appealing design suitable for all adults legally allowed to drink; and a responsive design that would enable easy transition to a mobile application in the future.</p>
              <span className='space'></span>
              <p>
              Now that I have thoroughly understood the project's overview and business demands, I set out to conduct user research to better understand the needs, behaviors, and pain points of the target audience. This will help me minimize design decisions based on assumption and ultimately deliver a data-driven user experience.   
              </p>
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
              <p>In order to better understand the scope of the work, I wanted to know how users felt about current e-commerce for alcohol sale.</p>
              <span className='space'></span>
              <p><b>Scope:</b> 75 participants undertook an online survey, that consisted of 5 questions which they answered in Likert scale (strongly disagree -> strongly agree). All of the participants were adults over the age of 18, and had a history of drinking alcohol at home. The questions in this survey were formulated based on the business goals I need to accomplish and experience/emotion of our target users. </p>
            </div>
            <div className='img-container'>
              <img className= 'width-1200' src = { SurveyData }></img>
            </div>
            <div className='img-container'>
              <img className= 'width-1200' src = { SurveyInsight }></img>
            </div>
            <div className='case-p'>
              <p><b>Key Findings:</b> Based on the survey data we can infer the following insights: </p>
              <ul>
                <br></br>
                <li>The current e-commerce experience for alcohol is good, as only 12% of participants felt difficulty using their services. </li>
                <br></br>
                <li>Roughly half of participants had regrets when purchasing alcohol online which is an interesting statistic and requires more research. If the current user experience for e-commerce is good why are half of users not satisfied with their purchase?</li>
                <br></br>
                <li>73% of participants think having a taste filter for alcohol would be helpful, which proves the client's business demand matches the user's demand. </li>
                <br></br>
                <li>All participants felt home delivery would be more convenient than pick-up services as was expected. This assures the client the business idea has value in today's market.</li>
                <br></br>
                <li>The current user interface of existing products is generally favorable, although the remaining 31% of participants perhaps felt there could be improvements made. </li>
              </ul>
            </div>
          </section>
          <section className='child'>
            <div className='case-p'>
            <h4>Qualitative Research: User Interview</h4>
            <p><b>Scope:</b> 3 participants who undertook the initial survey were asked questions and provide insight into their answers. I asked questions regarding the feeling of regret after buying alcohol online, the use of the taste filter, and the UI of existing products for alcohol e-commerce.</p> 
            </div>
            <div className='img-container'>
              <img className= 'width-1200' src = { UserInterview }></img>
            </div>
            <div className='case-p'>
                <p><b>Key Findings:</b> 
                <ul>
                  <br></br>
                  <li>Users expressed frustration over spending significant amounts of money on alcohol they ultimately didn't enjoy, indicating a need for better information or guidance before making purchasing decisions.</li>
                  <br></br>
                  <li>Many users highlighted the challenge of buying alcohol without sufficient knowledge, emphasizing that the difficulty lies not in the buying process itself but in the risk associated with choosing unfamiliar products.</li>
                  <br></br>
                  <li>Users found reviews crucial for understanding the taste of drinks, suggesting that incorporating filters based on taste preferences could enhance their shopping experience significantly. </li>
                  <br></br>
                  <li>Users expressed reservations about alcohol apps linked primarily to convenience stores, which are not particularly tailored towards the alcohol industry.</li>
                  <br></br>
                </ul>
              </p>
            </div>
            <div className='case-p'>
              <span className='space'></span>
              <span className='space'></span>
              <h5 className='emphasis'  >Despite the ease of online alcohol purchasing, some struggle with drink selection.</h5>
            </div>
          </section>
          <section className='child'>  
            <div className='case-p'>
              <h4>User Persona</h4> 
            </div>
            <div className='img-container'>
              <img className= 'width-1200' src = { Persona } ></img>
            </div>
            <div className='case-p'>
             
              <p><b>Meet Mike</b></p>
              <span className='space'></span>
              <p>The data and insights gathered through quantitative and qualitative methods gave birth to Mike Kim. Like many young adults in their 20s (Gen Z) and 30s (Millenial) Mike appreciates the convenience of online shopping, yet still faces difficulties making the right selection of alcoholic drinks. Mike wishes to be able to purchase alcohol quickly and efficiently, without having to regret spending money on a drink he might not like. </p> 
            </div>
          </section>
          <section className='child'>
            <div className='case-p'>
              <h4>Defining the MVP</h4>
              <p>At this point, I was ready to start defining the platform's features. I had gotten to know my target users and reaffirmed the business demands set by the client through UX research. With this information in hand, I set out to define the MVP (minimum viable product).</p>
              <span className='space'></span>
              <p>The MVP for <i>Sip at Home</i>  should include essential features like a comprehensive drink catalog, search navigation, payment gateway and more. All of this requires it to be planned out through user journey flows and wireframes as part of the product's architecture. </p> 
            </div>
            <div className='img-container'>
              <img src = { MVPDefine } ></img>
            </div>
          </section> 
        </section>
        <section className='parent'>
          <section className='baby'>
            <div className='case-p'>
              <h3>Product Architecture</h3>
              
            </div>
          </section>
          <section className='child'>
            <div className='case-p'>
              <h4>Visual Sitemap</h4>
            </div>
            <div className='img-container'>
              <img className= 'width-800' src = { Sitemap } ></img>
            </div>
            <div className='case-p'>
              <p>With the features of the platform decided, I constructed a visual sitemap of the the main pages. This sitemap was created with developers in mind, instructing them when to keep the user interface elements in the same page without reloading new pages through dynamic updates, or in more technical terms AJAX updates. This should help the design and development team be in sync and reduce miscommunication issues. </p> 
            </div>
          </section>
          <section className='child'>
            <div className='case-p'>
              <h4>User Journey</h4>
            </div>
            <div className='img-container'>
              <img className= 'width-1200' src = { Journey }></img>
            </div>
            <div className='case-p'>
              <p>To further help define the structure and architecture of the website, I created a User Journey flow of what a typical user of the platform might go through during his experience with the product. User flow-charts help me visualize and understand the paths users take while interacting with the product user interface. </p> 
            </div>
          </section>
          <section className='child'>
            <div className='case-p'>
              <h4>The Custom Filter</h4>
            </div>
            <div className='img-container'>
              <img  src = { Filter }></img>
            </div>
            <div className='case-p'>
              <p>With the help of my client, liquor experts, and alcohol enthusiasts, I was able to create the requested "taste" filter for different types of drinks. Users can select their combination of flavor notes and will be given the selection of alcohol that best matches the combination based on other user reviews. For the MVP, this feature is available for wine, beer, and whiskey as these were the most popular drinks sold in liquor shops nationwide. Filters for other fermented or distilled alcohols will be considered in the future.</p>
            </div>
          </section>
          <section className='child'>
            <div className='case-p'>
              <h4>Mid-fidelity Wireframe</h4>
            </div>
            <div className='img-container'>
              <img src = { Wireframe }></img>
            </div>
            <div className='case-p'>
              <p>Now that the structure and architecture of the product has been set along with the requested taste filter, I created mid-fidelity responsive wireframes that will act as blueprints for the final UI designs. </p>
              
            </div>
          </section>
        </section>
        <section className='parent'>
          <section className='baby'> 
            <div className='case-p'>
              <h3>UI and Branding</h3>
              
            </div>
            </section>
            <section className='child'>
              <div className='case-p'>
                <h4>Style Guide</h4>
              </div>
              <div className='img-container'>
                <img className= 'width-800' src = { StyleGuide }></img>
              </div>
              <div className='case-p'>
                <p>With the mid-fidelity wireframes ready, I made sure that the design of the site matched the client's vision and the message he wanted to send to the users. He specifically requested to make the platform look welcoming/accessible to all adults who are able to drink alcohol. This was done through a style guide, a design system and finally the high-fidelity designs of the product. </p>
              </div>
            </section>
          
          <section className='child'>
            <div className='case-p'>
              <h4>Design System</h4>
              <p>A design system with the base foundations are set to create the UIs for responsive platform. This is essential to any product as it provides a cohesive set of standards, guidelines, and reusable components. This will help main visual and functional uniformity as well as help streamline the design and development process. </p>
            </div>
            <div className='img-container'>
              <img className= 'width-1200' src = { DesignSystem }></img>
            </div>
          </section>
          <section className='child'>
            <div className='case-p'>
              <h4>UI: Responsive Web</h4>
              <p>Based on the style guide and design system I built, I designed the user interface of the platform for both desktop and mobile web screens. With this, all of the business requests were completed before entering the prototype and testing phase. </p>
            </div>
          </section>   
        </section>
      </div>
        
      <div className='span-banner'>
        <img src = { FinalUI }></img>
      </div>
      
      <div className='case-study'>
        <section className='parent'>
          <div className='case-p'>
            <h3>Prototype/Testing</h3>
          </div>
          <section className='child'>
            <div className='gif-container'>
              <div className='mobile-container'>
                <img className='mobile-gif' src = { OldFilter }></img></div>
              <div className='mobile-container'>
                <img className='mobile-gif' src = { OldProto2 }></img>
              </div>
            </div>
            <div className='case-p'>
              <p><b>Problem:</b> During the testing phase I noticed that the drink type selection in mobile screen was unintuitive and confusing. Since you can only select either distilled or fermented drinks, it made little sense for the UI to be two selectable dropdowns. The user should only have the choice to select one or the other.</p>
            </div>
          </section>
          <section className='child'>
            <div className='gif-container'>
              <div className='mobile-container'>
                <img className='mobile-gif' src = { NewFilter }></img>
              </div>
              <div className= 'mobile-container'>
                <img className='mobile-gif' src = { NewProto }></img>
              </div>
              
            </div>
            <div className='case-p'>
              <p><b>Solution: </b>To fix this issue, the two selectable buttons were given radio inputs so only one or the other could be selected. Once it is selected, the desired drink in the category can be picked. Although a fairly simple fix this was not easy to notice amongst the hundreds of screens that I had to work with when handling the prototypes. This is one of the many cases of usability testing that was conducted to create the final designs for the MVP.</p>
            </div>
          </section>
          <section className='child'>
            <div className='img-container'>
              <img className= 'width-1200' src = { FinalProto }></img>
              <h6 style= {{ margin: '0px'}}>Responsive prototype of user purchase and checkout flow</h6>
            </div>
          </section>
        </section>
          <section className='baby'>
            <div className='case-p'>
              <h3>Final Thoughts</h3>
              
            </div>
            </section>
            <section className='child'>
            <div className='case-p'> 
              <h4>Conclusion</h4>
              <p>Throughout the project, I learned the critical importance of thorough user research and  iterative testing. These were essential in refining features to meet user expectations and business demands effectively. Constant communication with the client was  also necessary to align with his vision. Overall, it was a significant project given the three-month timeframe, and I'm proud I completed it on time.
              </p>
              <span className='space'></span>
              <p>By the end of the project, I was able to successfully deliver a user-centered e-commerce platform for alcoholic beverages that met both business demands and modern UI/UX standards. For pre-seed startups or entrepreneurs, acquiring funding is a key success metric. My client was thoroughly satisfied with the initial iterations and was pleased to share the design prototypes with liquor shop owners, who expressed interest in investing in the product.
              </p>
            </div>
          </section>
          <section className='child'>
            <div className='case-p'> 
              <h4>Next Steps</h4>
              <p> My client has expressed that he would like me to work on the mobile app version of the product in the future. For now, he is planning to hire developers to handle the server side and frontend application, and wants me to collaborate with them as much as possible for a smooth design to developer handover. 
              </p>
              <span className='space'></span>
              <p>For the meantime, I will continue to occasionally refine and reiterate the designs through multiple rounds of usability tests and make sure the user experience is as smooth and intuitive as it can be.</p>
            </div>
          </section>
      </div>
      
    </main>
  );
};

export default Sip;