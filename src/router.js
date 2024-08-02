import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Work from './pages/Work';
import About from './pages/About';
import Unibuzz from './pages/Unibuzz';
import Sip from './pages/Sip';
import Esports from './pages/Esports';
import ErrorLayout from './layouts/ErrorLayout';

const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />, // Use RootLayout as the root element
      errorElement: <ErrorLayout />,
      children: [
        {
          index: true,
          element: <Work />, // Default route is WorkPage
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "unibuzz",
          element: <Unibuzz />,
        },
        {
          path: "sip",
          element: <Sip />,
        },
        {
          path: "esports",
          element: <Esports />,
        },
        
      ],
    },
  ]);
  

export default router;