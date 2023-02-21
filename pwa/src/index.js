import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Category from "./components/Category/Category";
import Tutorial from "./components/Tutorial/Tutorial";
import Layout from "./components/Layout/Layout";
import Intro from "./components/Intro/Intro";

const router = createBrowserRouter([
    {
        path: "/tutorial",
        element: <Tutorial />
    },
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: 'intro',
                element: (<Intro/>)

            },
            {
                path: "category",
                element: <Category />
            },
            {
                path: 'homepage',
                element: (<div>homepage</div>)
            },
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
