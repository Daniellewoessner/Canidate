import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import CandidateSearch from './pages/CandidateSearch';
import SavedCandidates from './pages/SavedCandidates';
import './index.css';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <CandidateSearch />,
      },
      {
        path: 'SavedCandidates',
        element: <SavedCandidates />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);