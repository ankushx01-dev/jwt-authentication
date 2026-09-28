import React from "react";
import Dashboard from "./Dashboard.jsx";
import Login from "./Login.jsx";

export default function ProtectedRoute({ user, onLogin, onLogout }) {
  if (!user) {
    return <Login onLogin={onLogin} />;
  }

  return <Dashboard onLogout={onLogout} user={user} />;
}
