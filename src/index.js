import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HTML from './pages/html';



import Home from './pages/home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element:  
    <Home /> , 
    errorElement: <h1>Page Not Found Error 404</h1>

  
  },
  {
    path: "/html",
    element:  
    <HTML />
    
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

