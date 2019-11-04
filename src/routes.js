/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import Home from './screens/Home';
import Dashboard from './views/home/Dashboard';

const routes = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/home" />
    },
    {
        route: '*',
        component: Home,
        routes: [
            {
                path: '/home',
                exact: true,
                component: Dashboard
            },
            {
                path: '/user/list',
                exact: true,
                component: lazy(() => import('./views/user/UserList'))
            },
            {
                path: '/user/create',
                exact: true,
                component: lazy(() => import('./views/user/UserCreate'))
            }
        ]
    }
];

export default routes;