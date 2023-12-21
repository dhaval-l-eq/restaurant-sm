import { lazy } from 'react';
import { Route } from '../typescript/interfaces/router';
import Landing from '../pages/auth/Landing';
import Signup from '../pages/auth/Signup';
import { Navigate } from 'react-router-dom';
import Login from '../pages/auth/Login';
const Index = lazy(() => import('../pages/Index'));

const routes: Route[] = [
    {
        path: '/',
        element: <Landing />,
        layout: 'blank',
    },
    {
        path: '/signup',
        element: <Signup />,
        layout: 'blank',
    },
    {
        path: '/login',
        element: <Login />,
        layout: 'blank',
    },
    {
        path: '/dashboard',
        element: <Index />,
    },
    {
        path: '*',
        element: <Navigate to='/' />
    }

];

export { routes };
