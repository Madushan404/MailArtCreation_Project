import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuth = false; // later replace with real auth

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
