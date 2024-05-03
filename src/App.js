import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Skillset from './components/Skillset';
import Projects from './components/Projects';
import Workflow from './components/Workflow';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";


const App = () => {

  const [ , setInit ] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
      initParticlesEngine(async (engine) => {
          // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
          // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
          // starting from v2 you can add only the features you need reducing the bundle size
          //await loadAll(engine);
          //await loadFull(engine);
          await loadSlim(engine);
          //await loadBasic(engine);
      }).then(() => {
          setInit(true);
      });
  }, []);

  const particlesLoaded = (container) => {
      console.log(container);
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
    }, 3000); 
  }, []);

  return (
    < div className='app-layout'>
    {
        loading ? 
        <LoadingScreen /> :(
            <>
      <Header />, 
      <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 80,
                particles: {
                    color: {
                        value: ['#ffffff', '#2EB83A', '#BF1E68', '#4ABADE', '#78C6DF', '#E5A628', '#723890']
                    },
                    move: {
                        direction: "top",
                        enable: true,
                        outModes: {
                            default: "out",
                        },
                        random: true,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                        random: true,
                        animation: {
                          enable: false,
                          speed: 1,
                          opacity_min: 0.1,
                          sync: false
                      }
                    },
                    
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                        random: true,
                        animation:{
                          destroy: { min: 1, max: 5 },
                          enable:true,
                          speed:4.872463273808071,
                          size_min:1,
                          sync:false,
                        }
                    },
                },
                detectRetina: false,
            }}
        />, 
     <Main />,
     <About />,
     <Skillset />,
     <Projects />,
     <Workflow />
     <Footer/> 
     </>)}
    </div>
  )  
};

export default App;
