import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./components/Routes";

const router = createBrowserRouter(routes);
ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
