import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import './index.css'
import Home from './pages/Home.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import Jobs from './pages/Jobs.jsx';
import Job, { getJobById } from './pages/Job.jsx';
import NotFound from './pages/NotFound.jsx';
import AddJob from './pages/AddJob.jsx'
import EditJob from './pages/EditJob.jsx';

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
          {
            path: ":id",
            Component: Job,
            loader: async ({ params }) => {
              // return data from here
              return await getJobById(params.id);
            },
          },
          {
            path: "edit/:id",
            Component: EditJob,
            loader: async ({ params }) => {
              return await getJobById(params.id);
            },
          },
        ],
      },
      { path: "add-job", Component: AddJob },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
