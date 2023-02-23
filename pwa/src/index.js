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
import Intro from "./components/Intro/Intro";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Profile from "./components/Profile/Profile";
import {AuthProvider} from "./context/AuthProvider";
import Start from "./components/Start/Start";
import Start2 from "./components/Start/Start2";
import StartFirst from "./components/Start/StartFirst";
import Battle from "./components/Battle/Battle";

const router = createBrowserRouter([
	{
		path: "/start",
		element: <Start />,
	},
	{
		path: "/start2",
		element: <Start2 />,
	},
	{
		path: "/startfirst",
		element: <StartFirst />,
	},
	{
		path: "/battle",
		element: <Battle />,
	},
	{
		path: "/tutorial",
		element: <Tutorial />,
	},
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "intro",
				element: <Intro />,
			},
			{
				path: "category",
				element: <Category />,
			},
			{
				path: "profile",
				element: <Profile />,
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "register",
				element: <Register />,
			},
		],
	},
]);

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
