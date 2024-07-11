import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

/**
 *  children에 아무나 접근하지 못하도록 보호하는 컴포넌트
 * - admin 인지 확인한다.
 * - user 인지 확인한다. (로그인)
 */
export default function ProtectedRoute({ children, requireAdmin }) {
  const { user, isLoading } = useAuthContext();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if ((user && !requireAdmin) || (requireAdmin && user?.isAdmin)) {
    return children;
  }

  return <Navigate to="/" replace />;
}
