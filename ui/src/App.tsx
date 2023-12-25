import { ConnectWallet } from '@thirdweb-dev/react';
import './styles/Home.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CreatePage = lazy(() => import('./pages/CreatePage/CreatePage'));
const ProfilePage = lazy(() => import('./pages/Profile/ProfilePage'));
const DetailsPage = lazy(() => import('./pages/DetailsPage/DetailsPage'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/create-campaign',
    element: <CreatePage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/details/:id',
    element: <DetailsPage />,
  },
]);
export default function Home() {
  return (
    <main className="main font-monteserret">
      <Suspense fallback={<div>Loading....</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </main>
  );
}
