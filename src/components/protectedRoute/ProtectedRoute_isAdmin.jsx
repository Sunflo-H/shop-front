import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute_isAdmin({ children }) {
  return <Navigate to="/" replace />;
}
