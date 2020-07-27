import { BrowserRouter } from 'react-router-dom';
import React from 'react';

import Routes from 'Router/Routes';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default Router;
