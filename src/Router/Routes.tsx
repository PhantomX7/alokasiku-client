import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'reducers';

// import AdminRoute from "./routes/LoggedInRoutes";
import PublicRoutes from './PublicRoutes';

const Router: React.FC = () => {
  const token = useSelector<RootState, string>((state) => state.auth.token);
  console.log(token);

  if (token) return <div>HELLO</div>;
  return <PublicRoutes />;
};

export default Router;
