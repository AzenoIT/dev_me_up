import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Category from "./components/Category/Category";
import Tutorial from "./components/Tutorial/Tutorial";
import Layout from "./components/Layout/Layout";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Profile from "./components/Profile/Profile";
import {AuthProvider} from "./context/AuthProvider";
import Start from "./components/Start/Start";
import Friends from "./components/Rankings/Friends";
import StartFirst from "./components/Start/StartFirst"
import BattleSummary from "./components/Battle/BattleSummary";
import Battle from "./components/Battle/Battle";
import {NavigateProvider} from "./context/NavigateProvider";

const router = createBrowserRouter([
    {
        path: '/start',
        element: <Start/>
    },
    {
        path: '/login',
        element: <Login/>
    },

    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: 'start',
                element: (<Start/>)

            },
            {
                path: 'startfirst',
                element: (<StartFirst/>)

            },
            {
                path: "profile",
                element: <Profile/>
            },
            {
                path: "category",
                element: <Category/>
            },
            {
                path: 'login',
                element: (<Login/>)
            },
            {
                path: 'register',
                element: (<Register/>)
            },
            {
                path: 'friends',
                element: <Friends/>
            },
            {
                path: 'summary',
                element: <BattleSummary/>
            },
            {
                path: 'summary',
                element: <BattleSummary/>
            },
            {
                path: "tutorial",
                element: <Tutorial/>
            },
            {
                path: "battle",
                element: <Battle/>
            },
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProvider>
                <RouterProvider router={router}/>
        </AuthProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
