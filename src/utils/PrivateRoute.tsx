import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../services/auth';

interface Props {
  component: React.FC;
}

const PrivateRoute = ({ component: RouteComponent }: Props) => {
  return (isAuthenticated() ? <RouteComponent key={RouteComponent.name} /> : <Navigate to={'/login'} />);
};

export default PrivateRoute;
