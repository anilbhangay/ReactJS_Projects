import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './About';
import Contact from './Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './Body';
import Error from './Error';


const appRouter = createBrowserRouter([
  {
     path: "/",
     element: <App />,
     errorElement: <Error />,
     children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/"
      }
     ]
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

