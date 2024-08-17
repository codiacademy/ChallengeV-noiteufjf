import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/AppProvider';

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ element: Component, requireAdmin = false }) {
  const { user, isLoading } = useContext(UserContext)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requireAdmin && !user?.isAdmin) {
    return <Navigate to="/" replace />;
  }

  return Component;
}
