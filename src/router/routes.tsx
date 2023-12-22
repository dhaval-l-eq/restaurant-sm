import { lazy } from 'react';
import { Route } from '../typescript/interfaces/router';
import { Navigate } from 'react-router-dom';

const Dashboard = lazy(() => import('../pages/dashboard/Dashboard'));
const Landing = lazy(() => import('../pages/auth/Landing'));
const Signup = lazy(() => import('../pages/auth/Signup'));
const Login = lazy(() => import('../pages/auth/Login'));

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
        element: <Dashboard />,
    },
    {
        path: '*',
        element: <Navigate to='/' />
    }

];

export { routes };
