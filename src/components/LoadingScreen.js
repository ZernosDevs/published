import React, { useState, useEffect } from 'react';
import { HashLoader } from 'react-spinners';
import './LoadingScreen.css';


function LoadingScreen() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
    }, 2000); 
  }, []);

  return (
    <div className='screen'>
      <HashLoader color="#36D7B7" loading={loading} size={150} />
      <p>Entering the Microcosm...</p>  
    </div>
  );
}

export default LoadingScreen;


