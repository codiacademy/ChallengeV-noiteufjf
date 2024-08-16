import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ element: Component, isAuthenticated}) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return Component;
}
