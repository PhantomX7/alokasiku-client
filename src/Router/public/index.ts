import { IRoute } from 'entity/route';
// import { lazy } from 'react';

import SignInPage from 'pages/SignIn/Loadable';

export type TPublicRouteNames = 'LOGIN';

export const publicRoutes: Record<TPublicRouteNames, IRoute> = {
  LOGIN: {
    path: '/login',
    Page: SignInPage,
  },
};
