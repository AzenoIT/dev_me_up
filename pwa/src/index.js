import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {AuthProvider} from "./context/AuthProvider";
import Category from "./components/Category/Category";
import Tutorial from "./components/Tutorial/Tutorial";
import Layout from "./components/Layout/Layout";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Profile from "./components/Profile/Profile";
import Start from "./components/Start/Start";
import Friends from "./components/Rankings/Friends";
import StartFirst from "./components/Start/StartFirst"
import BattleSummary from "./components/Battle/BattleSummary";
import Battle from "./components/Battle/Battle";

const router = createBrowserRouter([
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
                path: 'register',
                element: (<Register/>)
            },
            {
                path: 'login',
                element: (<Login/>)
            },
            {
                path: "category",
                element: <Category/>
            },
            {
                path: "tutorial",
                element: <Tutorial/>
            },
            {
                path: "profile",
                element: <Profile/>
            },
            {
                path: 'friends',
                element: <Friends/>
            },
            {
                path: "battle",
                element: <Battle/>
            },
            {
                path: 'summary',
                element: <BattleSummary/>
            }
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
