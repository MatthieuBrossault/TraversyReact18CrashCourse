import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import Jobs from './pages/Jobs.jsx';
import NotFound from './pages/NotFound.jsx';

const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "*", Component: NotFound
      },
      {
        path: "jobs",
        children: [
          { index: true, Component: Jobs },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
