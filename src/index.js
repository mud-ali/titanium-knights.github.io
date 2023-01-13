import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Contact from './pages/Contact';
import TeamA from './pages/TeamA';
import TeamB from './pages/TeamB';
import Sponsors from './pages/Sponsors';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/team-a",
    element: <TeamA />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/team-b",
    element: <TeamB />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sponsors",
    element: <Sponsors />,
    errorElement: <ErrorPage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
