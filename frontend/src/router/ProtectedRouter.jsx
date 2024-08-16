import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function ProtectedRoute({ element: Component, isAuthenticated, isAdmin }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!isAdmin) {
    // Se o usuário não tiver o papel necessário, redireciona para a página home
    return <Navigate to="/" replace />;
  }

  return Component;
}
