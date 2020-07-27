import _ from 'lodash';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { publicRoutes } from 'Router/public';

const PublicRoutes: React.FC = () => {
  return (
    <Switch>
      {_.values(publicRoutes)
        .filter((route) => Boolean(route.Page))
        .map((route) => {
          return (
            <Route key={route.path} path={route.path} component={route.Page} />
          );
        })}
      <Route path="*">
        <Redirect to={publicRoutes.LOGIN.path} />
      </Route>
    </Switch>
  );
};

export default PublicRoutes;
