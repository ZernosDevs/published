import React from 'react';
import './Unibuzz.css';
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


const Unibuzz = () => {

  return (
    <>
      <div className='banner'>
        <img src = { Sipbanner }></img>
      </div> 
      <div className='case-study'>
        <div className='overview'>
            <h5>Role: Product Designer (Responsive Web)</h5>
            <h5>Responsibility: End to end UI UX design</h5>
            <h5>Timeline: April 2024 - June 2024</h5>
        </div>
        <div className='case-p'>
          <h2>Overview</h2>
          <p>In South Korea, online alcohol sales are heavily regulated, with delivery currently banned. However, recent policy changes now allow consumers to order online for pick-up at select convenience stores. A client by the name of Mr. Lee, a liquor store owner, plans to launch a platform for online alcohol purchases and delivery, anticipating future policy shifts. 
          </p>
          <p>
          Sip at Home is an online marketplace(Ecommerce) for all types of alcoholic beverages. It lets you choose your drink based on type, ingredient, and most importantly taste. As the sole product designer of this project, I was hired as a freelancer to handle everything from logo creation to user experience research and responsive web design. </p>

          <p>*For the sake of international viewers, all figures and designs have been translated from Korean to English*</p>
          
        </div>
        <div className='case-p'>
          <h2>Problem</h2>
          <p>The strict regulations on online alcohol sales and the prohibition of delivery in South Korea limits the business potential of liquor store owners and consumer convenience. Users are frustrated by the inability to have alcohol delivered, relying instead on physical store visits or inconvenient pick-up options. Existing solutions around the restrictions, like online ordering for in-store pick-up, failed to meet the growing demand for home delivery. My task was to design a platform ready to launch once the delivery ban is lifted which would help position my client at the forefront of the market. </p>
        </div>
        <div className='case-p'>
          <h2>Objective</h2>
          <p>My primary objective was to create a seamless and convenient online alcohol purchasing experience for users, ensuring easy access and delivery once regulations allowed. For the business, the goal was to establish a leading market position and form strategic partnerships with liquor stores nationwide for distribution and sales. I aimed to complete the platform within three months, divided into phases of user research, design development, and final prototyping. Success would be measured by user count and satisfaction, the number of partnerships secured, and the platform’s readiness for launch. </p>
        </div>   
      </div>
      <div className='approach-bg'>
        <img src = { Approach }></img>
      </div>
      <div className='case-study'>
        <div className='case-p'>
          <h2>Approach</h2> 
          <p>Through a simple yet effective design process, I approached this task by understanding the scope of the project, conducting user research, preparing user journeys and sitemaps, designing the final UI and ultimately testing the product through usability tests and prototypes. If the stakeholders would like to change any part of the product I go back and redesign any components. </p>
          <h3>Project Overview</h3>
        </div>
        <div className='img-container'>
          <img className= 'width-800' src = { TargetUser }></img> 
        </div>
        <div className='case-p'>
          <h4>Understanding the User</h4> 
          <p>Every digital product has a specific audience to target and focus on. In the case of Sip at Home, the target user happens to be every adult who is legally allowed to drink and has access to the internet. This means the age group ranges from 18 years and above, with no specific preference on gender and race, although some cultures have banned the consumption of alcohol. </p>
          <h5 className='emphasis'>Create a product that is inclusive, neutral, and appealing to a wide demographic.</h5>
        </div>
        <div className='case-p'>
          <h4>Understanding the Business</h4> 
        </div>
        <div className='img-container'>
          <img className= 'width-800' src = { Stats }></img>
          <h6>Quarterly transaction value of online food and beverages sales in South Korea from the 1st quarter of 2017 to the 1st quarter of 2024, Statista (2024)</h6> 
        </div>
        <div className='case-p'>
          <p>The online food and beverage market in South Korea has experienced remarkable growth, driven by an increasing preference for convenience and technological advancements. Home delivery services have become particularly popular due to the busy lifestyles of South Koreans and the rapid adoption of mobile technology. Although alcohol can be purchased online, it must be picked up at one of the following covenience stores in the country. </p>
        </div>
        <div className='img-container'>
          <img className= 'width-800' src = { Conbini }></img>
          <h6>Online alcohol sales are dominated by physical store visits or pickup services provided by convenience store chains.</h6> 
        </div>
        <div className='case-p'>
          <h5 className='emphasis'>An app dedicated to online alcohol home delivery has the potential to become an instant-hit</h5>
        </div>
        <div className='case-p'>
          <h4>Business Requests</h4> 
        </div>
        <div className='img-container'>
          <img className= 'width-1200' src = { Requests }></img>
          <h6>Stakeholder demands to meet during product development</h6> 
        </div>
        <div className='case-p'>
          <p>Just like any other project, a client or stakeholder will demand certain requests or features to be carried out during the development process. My client requested several key features for the platform: a filter option for the drink catalog based on type, ingredient, and taste; product labels indicating country of origin, rating, and seller count; validation of business requests through both quantitative and qualitative user research; and a responsive design to facilitate future mobile application development. </p>
        </div>
        <div className='case-p'>
          <h3>User Research</h3>
          <p>
          Based on my understanding of the target user and the business requirements, I conducted two methods of research to test initial hypothesis and get a better insight into what the users would think of the product’s features.  
          </p>
        </div>
        <div className='case-p'>
          <h4>Quantitative Research: User Survey</h4> 
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
            <li>The current e-commerce experience for alcohol is good, as only 12% of participants felt difficulty using the products for pick-up services. </li>
            <li>Roughly half of participants had regret when buying alcohol which is an interesting statistic and requires more research. If the current user experience is good why are half of users not satisfied?</li>
            <li>73% of participants think having a taste filter would for alcohol would be helpful, which signifies its need in the current market. </li>
            <li>All participants felt home delivery would be more convenient than pick-up services as was expected. This assures the stakeholders the business idea has value in today's market.</li>
            <li>The current user interface of existing products is generally favorable, although the remaining 31% of participants perhaps felt there could be improvements made. </li>
          </ul>
        </div>
        <div className='case-p'>
        <h4>Qualitative Research: User Survey</h4> 
        </div>
        <div className='img-container'>
          <img className= 'width-1200' src = { UserInterview }></img>
        </div>
        <div className='case-p'>
            <p><b>Key Findings:</b> 
            <ul>
              <li>Users expressed frustration over spending significant amounts on liquor they ultimately didn't enjoy, indicating a need for better information or guidance before making purchasing decisions.</li>
              <li>Many users highlighted the challenge of buying alcohol without sufficient knowledge, emphasizing that the difficulty lies not in the buying process itself but in the risk associated with choosing unfamiliar products.</li>
              <li>Users found reviews crucial for understanding the taste of drinks, suggesting that incorporating filters based on taste preferences could enhance their shopping experience significantly. </li>
              <li>Users expressed reservations about alcohol apps linked primarily to convenience stores, which are not typically associated with offering a wide variety or high-quality selection of alcoholic beverages.</li>
            </ul>
          </p>
        </div>
        <div className='case-p'>
          <h5 className='emphasis'>Despite the ease of online alcohol purchasing, some struggle with drink selection.</h5>
        </div>
        <div className='case-p'>
          <h4>User Persona</h4> 
        </div>
        <div className='img-container'>
          <img className= 'width-1200' src = { Persona }></img>
        </div>
        <div className='case-p'>
          <p><b>Meet Mike</b></p>
          <p>The data and insights gathered through quantitative and qualitative methods gave birth to Mike Kim. Like many young adults in their 20s and 30s (Gen Z) Mike appreciates the convenience of online shopping, yet still faces difficulties making the right selection of alcoholic drinks. Mike wishes to be able to purchase alcohol quickly and efficiently, without having to regret spending money on a drink he might not like. </p> 
        </div>
        <div className='case-p'>
          <h4>Defining the MVP</h4>
          <p>At this point, I was ready to start defining the features the platform would include. I had got to know my target user, and reaffirmed the business demands set by the stakeholder through UX research. With this information in hand, I set out to define the MVP (minimum viable product).</p> 
        </div>
        <div className='img-container'>
          <img className= 'width-1200' src = { MVPDefine }></img>
        </div>
        <div className='case-p'>
          <h3>Product Architecture</h3>
          <p>After UX research, i strategically organized the layout of interface elements and flow interactions through sitemaps, user journey flows, and wireframes. </p>
        </div>
        <div className='case-p'>
          <h4>Visual Sitemap</h4>
        </div>
        <div className='img-container'>
          <img className= 'width-800' src = { Sitemap }></img>
        </div>
        <div className='case-p'>
          <p>With the features of the platform decided, I constructed a visual sitemap of the the main pages. This sitemap was created with developers in mind, instructing them when to keep the user interface elements in the same page without reloading new pages through dynamic updates, or in more technical terms AJAX updates. This should help the design and development team be in sync and reduce miscommunication issues. </p> 
        </div>
        <div className='case-p'>
          <h4>User Journey</h4>
        </div>
        <div className='img-container'>
          <img className= 'width-1200' src = { Journey }></img>
        </div>
        <div className='case-p'>
          <p>To further help define the structure and architecture of the website, I created a User Journey flow of what a typical user of the platform might go through during his experience with the product. User flowcharts help me visualize and understand the paths users take while interacting with the product UI. </p> 
        </div>
        <div className='case-p'>
          <h4>The Custom Filter</h4>
        </div>
        <div className='img-container'>
          <img className= 'width-1200' src = { Filter }></img>
        </div>
        <div className='case-p'>
          <p>With the help of the stakeholders, liquor experts, and alcohol enthusiasts, I was able to create their requested "taste" filter for different types of drinks. Users can select their combination of flavor notes and will be given the selection of alcohol that best matches the combination based on other user reviews. For the MVP, this feature is available for wine, beer, and whiskey as these were the most popular drinks sold in liquor shops nationwide. Filters for other fermented or distilled alcohols will be considered in the future.</p>
        </div>
        <div className='case-p'>
          <h4>Mid-fidelity Wireframe</h4>
        </div>
        <div className='img-container'>
          <img className= 'width-1200' src = { Wireframe }></img>
        </div>
        <div className='case-p'>
          <p>Now that the structure and architecture of the product has been set along with the requested taste filter, I created mid-fidelity responsive wireframes that will act as blueprints for the final UI designs. </p>
        </div>
        <div className='case-p'>
          <h3>UI and Branding</h3>
          <h4>Style Guide</h4>
          <p>With the mid-fidelity wireframes ready, I made sure that the design of the site matched the stakeholder’s vision and the message he wanted to send to the users. Below are some keywords that represent the idea or feel of the brand with a mood + inspiration board. </p>
        </div>
        <div className='img-container'>
          <img className= 'width-1200' src = { StyleGuide }></img>
        </div>
        <div className='case-p'>
          <h4>Design System</h4>
          <p>A design system with the base foundations are set to create the UIs for responsive platform. </p>
        </div>
        <div className='img-container'>
          <img className= 'width-1200' src = { DesignSystem }></img>
        </div>
        <div className='case-p'>
          <h4>UI: Responsive Web</h4>
          <p>Based on the style guide and design system I built, I designed the user interface of the platform for both desktop and mobile web screens.  </p>
        </div>
      </div>
      <div className='span-banner'>
        <img src = { FinalUI }></img>
      </div>
      <div className='case-study'>
        <div className='case-p'>
          <h3>Prototype and Testing</h3>
        </div>
        <div className='gif-container'>
          <img className='mobile-gif' src = { OldFilter }></img>
          <img className='mobile-gif' src = { OldProto2 }></img>
        </div>
        <div className='case-p'>
          <p><b>Problem:</b> During the testing phase I noticed that the drink type selection in mobile screen was unintuitive and confusing. Since you can only select either distilled or fermented drinks, it made little sense for the UI to be two selectable buttons.</p>
        </div>
        <div className='gif-container'>
          <img className='mobile-gif' src = { NewFilter }></img>
          <img className='mobile-gif' src = { NewProto }></img>
        </div>
        <div className='case-p'>
          <p><b>Solution:</b>To fix this issue, the two selectable buttons were given radio inputs so only one or the other could be selected. Once it is selected, the desired drink in the category can be picked! This is one of the many cases of usability testing that was conducted to create the final working product.</p>
        </div>
        <div className='img-container'>
          <img className= 'width-1200' src = { FinalProto }></img>
          <h6>Responsive prototype of user purchase and checkout flow</h6>
        </div>
        <div className='case-p'>
          <h3>Final Thoughts</h3>
          <p> By the end of the project, I was able to successfully deliver a user-centered e-commerce platform for alcoholic beverages that met both business demands and modern UI/UX standards. My client was left thoroughly satisfied with the first iterations of his product and was happy to share the prototypes to other liquor store owners, who may now be interested in forming distribution partnerships.
          </p>
          <h4>Lessons Learned</h4>
          <p>Throughout the project, I learned the critical importance of thorough user research in shaping design decisions. Iterative testing and feedback loops were essential in refining features to meet user expectations effectively. I also had to constantly communicate with the stakeholder's to match their expectations and vision of the product. This was by far the biggest challenge since most communication was done online or through calls. In the future I will make the effort to physically meet the client for more efficient communication.</p>
        </div>
      </div>
      
    </>
  );
};

export default Unibuzz;