import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './components/pages/MainPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App child={<MainPage />} />
    },
    {
        path: '/activities',
        element: <App child={<></>} />
    }
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)