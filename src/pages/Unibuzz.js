import React, { useEffect, useRef } from 'react';
import './Unibuzz.css';
import UnibuzzBanner from '../resources/unibuzz/unibuzz-banner.png';
import UnibuzzProblem from '../resources/unibuzz/unibuzz-problem.png';
import UnibuzzObjective from '../resources/unibuzz/unibuzz-objective.png';
import UnibuzzApproach from '../resources/unibuzz/unibuzz-agile.png';
import UnibuzzInterview from '../resources/unibuzz/unibuzz-interview.png';
import UnibuzzSystem from '../resources/unibuzz/unibuzz-system.png';
import UnibuzzFlow from '../resources/unibuzz/unibuzz-flow.png';
import ScrollProgress from '../components/ScrollProgress';
import { useOutletContext } from 'react-router-dom';
import Slider from '../components/Slider';
import SliderReverse from '../components/SliderReverse';
import UnibuzzProto from '../resources/unibuzz/unibuzz-proto-final.gif';
import UnibuzzTokens from '../resources/unibuzz/unibuzz-tokens.png';
import UnibuzzMode from '../resources/unibuzz/unibuzz-modes.mp4';

const Unibuzz = () => {
  const { locoScroll } = useOutletContext();
  const imageRefs = useRef([]); // To store references to all images

  // Update Locomotive Scroll when images load
  useEffect(() => {
    const handleImageLoad = () => {
      if (locoScroll) {
        locoScroll.update(); // Update the Locomotive Scroll instance
      }
    };

    // Add load event listeners to each image
    imageRefs.current.forEach((img) => {
      if (img.complete) {
        handleImageLoad(); // If the image is already loaded, call the handler
      } else {
        img.addEventListener('load', handleImageLoad);
      }
    });

    // Clean up event listeners
    return () => {
      imageRefs.current.forEach((img) => {
        img.removeEventListener('load', handleImageLoad);
      });
    };
  }, [locoScroll]);

  return (
    <main className="fade-in">
      <ScrollProgress color="#FDA5AF" />
      <div className="lead-banner">
        <img
          ref={(el) => (imageRefs.current[0] = el)}
          src={UnibuzzBanner}
          alt="Unibuzz project banner"
          loading="eager" // This image is loaded immediately
        />
      </div>
      <div className="case-study">
        <div className="overview">
          <h5>Role: Lead Designer</h5>
          <h5>Responsibility: Responsive Web and Mobile App design</h5>
          <h5>Timeline: May 2022 - Present</h5>
        </div>
        <section className="baby">
          <div className="case-p">
            <h2>Overview</h2>
            <p>
              Unibuzz is a social network platform for university students that
              helps with all university related matters from peer networking,
              online messaging, forums for academic and non-academic purposes,
              and more. Its goal is to revolutionize university life for the 235
              million students across 30,000 universities globally.
            </p>
            <span className="space"></span>
            <p>
              As the lead designer of this massive startup project I worked
              closely with the stakeholders to deliver designs and prototypes
              for responsive web and mobile application. A large part of my
              responsibilities also included being involved in other sectors of
              the team such as marketing, development, and administration.
            </p>
          </div>
        </section>
        <section className="baby">
          <div className="case-p">
            <h2>Problem</h2>
            <div className="img-container">
              <img
                ref={(el) => (imageRefs.current[1] = el)}
                className="width-1200"
                src={UnibuzzProblem}
                alt="Unibuzz problem statement image"
                loading="lazy" // Lazy load this image
                style={{
                  boxShadow:
                    '0px 6px 15px -2px rgba(16, 24, 40, 0.08), 0px 6px 15px -2px rgba(16, 24, 40, 0.08)',
                }}
              />
            </div>
            <p>
              Many students face significant challenges when navigating the
              transition to university life which includes finding authentic
              firsthand information about universities and career paths. They
              often rely on scattered information from various online sources,
              leading to frustration and inefficiency in managing academic and
              social interactions. Once enrolled, university students struggle
              to balance their personal and university lives. Lacking a clear
              distinction between the two can lead to confusion and missed
              opportunities. Currently the market is overcrowded with numerous
              unfocused platforms, and no single solution effectively addresses
              the needs of university life.
            </p>
          </div>
        </section>
        <section className="baby">
          <div className="case-p">
            <h2>Objective</h2>
            <div className="img-container">
              <img
                ref={(el) => (imageRefs.current[2] = el)}
                className="width-1200"
                src={UnibuzzObjective}
                alt="Unibuzz project objective image"
                loading="lazy" // Lazy load this image
                style={{
                  boxShadow:
                    '0px 6px 15px -2px rgba(16, 24, 40, 0.08), 0px 6px 15px -2px rgba(16, 24, 40, 0.08)',
                }}
              />
            </div>
            <p>
              As a UX/Product Designer, my objective with Unibuzz is to design a
              platform that meets the unique needs of university students and
              faculty. My primary focus is on designing a user experience that
              minimizes the need for multiple apps, and facilitates both
              academic and non-academic interactions. From a business
              standpoint, my goal is to output high fidelity designs that can be
              used to attract possible investors to kickstart the project. With
              investments acquired, success will be measured by user engagement
              metrics, retention rates, and positive feedback on the user
              experience after MVP launch.
            </p>
          </div>
        </section>
        <section className="parent">
          <div className="case-p">
            <h2>Approach</h2>
            <p>
              In developing Unibuzz, our approach is rooted in Agile UX
              principles. Design and user experience are iteratively refined
              through continuous feedback and collaboration. Feedback from each
              iteration will directly inform adjustments and improvements,
              allowing me to remain responsive to user needs and business goals.
              Throughout the process, cross-functional collaboration with
              development, marketing, and design teams will ensure that design
              decisions align with technical feasibility and project timelines.
            </p>
          </div>
        </section>
      </div>
      <div className="banner">
        <img
          ref={(el) => (imageRefs.current[3] = el)}
          src={UnibuzzApproach}
          alt="Unibuzz approach image"
          loading="lazy" // Lazy load this image
        />
      </div>
      <div className="case-study">
        <section className="parent">
          <div className="unibuzz-case">
            <h3 className="step-title">UX RESEARCH</h3>
            <h4 className="section-title">Target User Interview</h4>
            <span className="space"></span>
          </div>
          <section className="child">
            <div className="img-container">
              <img
                ref={(el) => (imageRefs.current[4] = el)}
                className="width-1200"
                src={UnibuzzInterview}
                alt="Unibuzz target user interview image"
                loading="lazy" // Lazy load this image
                style={{
                  boxShadow:
                    '0px 6px 15px -2px rgba(16, 24, 40, 0.08), 0px 6px 15px -2px rgba(16, 24, 40, 0.08)',
                }}
              />
            </div>
            <div className="case-p">
              <p>
                User interviews were conducted to understand the demand of the
                product as well as specific user pain points and needs.
                University students participated in 1-on-1 on-site or remote
                interviews. The results of these interviews informed and
                affected all future design decisions.
              </p>
            </div>
          </section>
          <section className="child">
            <div className="unibuzz-case">
              <h3 className="step-title">Product Architecture</h3>
              <h4 className="section-title">User Journey Flows</h4>
              <span className="space"></span>
            </div>
            <div className="img-container">
              <img
                ref={(el) => (imageRefs.current[5] = el)}
                className="width-1200"
                src={UnibuzzFlow}
                alt="Unibuzz user journey flow image"
                loading="lazy" // Lazy load this image
                style={{
                  boxShadow:
                    '0px 6px 15px -2px rgba(16, 24, 40, 0.08), 0px 6px 15px -2px rgba(16, 24, 40, 0.08)',
                }}
              />
            </div>
            <div className="case-p">
              <p>
                When I mapped the user journey flow for Unibuzz I focused on
                understanding every step a student takes while using the app. By
                mapping out their journey—from logging in and joining groups to
                posting updates and managing notifications—I was able to
                pinpoint areas where the user experience could be improved.
                Detailed user journey flows allows me to streamline interactions
                and address any potential issues students might face.
              </p>
            </div>
          </section>
          <section className="child">
            <div className="unibuzz-case">
              <h3 className="step-title">Design System</h3>
              <h4 className="section-title">Visual Identity</h4>
              <span className="space"></span>
            </div>
            <div className="img-container">
              <img
                ref={(el) => (imageRefs.current[6] = el)}
                className="width-1200"
                src={UnibuzzSystem}
                alt="Unibuzz design system visual identity image"
                loading="lazy" // Lazy load this image
                style={{
                  boxShadow:
                    '0px 6px 15px -2px rgba(16, 24, 40, 0.08), 0px 6px 15px -2px rgba(16, 24, 40, 0.08)',
                }}
              />
            </div>
            <div className="case-p">
              <p>
                Unibuzz's design system can be quickly summarized into the
                foundations of color and typography. We believe that in order to
                reach as many students around the world as possible, the
                platform has to be visually accessible to all young adults
                around the world. By prioritizing clear and inclusive design
                elements, we strive to make the platform easily accessible and
                engaging for young adults everywhere.
              </p>
            </div>
          </section>
          <section className="child">
            <div className="unibuzz-case">
              <h3 className="step-title">High Fidelity & Prototype</h3>
              <h4 className="section-title">Design Showcase</h4>
            </div>
          </section>
        </section>
      </div>
      <Slider locoScroll={locoScroll} />
      <SliderReverse locoScroll={locoScroll} />
      <div className="case-study">
        <section className="child">
          <div className="img-container">
            <img
              ref={(el) => (imageRefs.current[7] = el)}
              className="width-1200"
              src={UnibuzzProto}
              alt="Unibuzz high fidelity prototype"
              loading="lazy" // Lazy load this image
            />
            <h6>
              User onboarding sign up prototype flow for web desktop and mobile
              application.
            </h6>
          </div>
        </section>
        <section className="child">
          <div className="unibuzz-case">
            <h3 className="step-title">Design Tokens</h3>
            <h4 className="section-title">Super Fast Designing</h4>
            <span className="space"></span>
          </div>
          <div className="img-container">
            <img
              ref={(el) => (imageRefs.current[8] = el)}
              className="width-1200"
              src={UnibuzzTokens}
              alt="Unibuzz design tokens image"
              loading="lazy" // Lazy load this image
              style={{
                boxShadow:
                  '0px 6px 15px -2px rgba(16, 24, 40, 0.08), 0px 6px 15px -2px rgba(16, 24, 40, 0.08)',
              }}
            />
          </div>
          <div className="video-container">
            <video
              autoPlay
              loop
              muted
              className="video-content"
              aria-label="Unibuzz design mode video"
            >
              <source src={UnibuzzMode} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="case-p">
            <p>
              Utilizing variables and tokens allows us to maintain a cohesive
              visual identity while quickly adapting to different contexts and
              needs. By defining color tokens, we ensure that our color palette
              remains consistent across various parts of the app. Typography
              tokens help us apply consistent text styles, which improves
              readability and user experience. They also allow for some really
              cool and super time efficient design hacks, such as fast dark mode
              transitions.
            </p>
          </div>
        </section>
        <section className="child">
          <div className="unibuzz-case">
            <h3 className="step-title">Next Steps</h3>
            <h4 className="section-title">Product Launch: Q1 2025</h4>
            <span className="space"></span>
          </div>
          <div className="case-p">
            <p>
              As the UX designer for Unibuzz, I'm thrilled about our upcoming
              launch in 2025. We've been working diligently to create a platform
              that truly resonates with university students globally. So much
              time and labor has been poured on this project to ensure that the
              platform is easy to use and navigate. We've also integrated a lot
              of feedback from potential users to refine features and
              interactions. Our goal is to ultimately deliver a platform that
              supports both academic and social connections effectively to all
              university students around the world. We're looking forward to
              seeing how students will engage with Unibuzz and how it can
              enhance their university experience.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Unibuzz;
