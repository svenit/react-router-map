import {Routes} from 'react-router-map';
import WithoutNavbarLayout from './layouts/WithoutNavbarLayout';
import {useGuestGuard} from './guards/useGuestGuard';
import {lazy} from 'react';
import WithNavbarLayout from './layouts/WithNavbarLayout';
import useAuthentication from './guards/useAuthentication';
import useAuthorization from './guards/useAuthorization';
import OverrideRootConfigLayout from './layouts/OverrideRootConfigLayout';
import Component4 from './components/Component4';

export const routeNames = {
   nothing: 'nothing',
   login: 'login'
}

const routes: Routes = [
    {
        path: 'nothing',
        component: WithoutNavbarLayout,
        name: routeNames.nothing
    },
    {
        path: 'auth',
        component: WithoutNavbarLayout,
        canActivate: [useGuestGuard],
        children: [
            {
                path: 'login',
                component: lazy(() => import('./components/Login')),
                name: routeNames.login,
            },
            {
                path: '',
                exact: true,
                redirectTo: routeNames.login
            }
        ]
    },
    {
        path: 'v2',
        component: OverrideRootConfigLayout,
        children: [
            {
                path: 'component4',
                component: Component4,
            },
            {
                path: '',
                redirectTo: 'component4',
                exact: true
            }
        ]
    },
    {
        path: ':id',
        component: WithNavbarLayout,
        canActivate: [useAuthentication],
        canActivateChild: [useAuthorization],
        children: [
            {
                path: 'component2',
                component: lazy(() => import('./components/Component2')),
                data: {
                   role: 2
                }
            },
            {
                path: 'component3',
                component: lazy(() => import('./components/Component3')),
            },
            {
                path: '',
                exact: true,
                redirectTo: 'component3',
            }
        ]
    },
    {
        path: '',
        exact: true,
        redirectTo: 'default-app-id'
    }
];

export default routes;
