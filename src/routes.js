/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import Home from './screens/Home';

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
                component: Home
            }
        ]
    }
];

export default routes;