import React, { useState } from "react";
import { clearUserToken, getStoredUser } from "./auth.js";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

export default function App() {
  const [user, setUser] = useState(getStoredUser);

  function handleLogout() {
    clearUserToken();
    setUser(null);
  }

  return (
    <ProtectedRoute
      onLogin={setUser}
      onLogout={handleLogout}
      user={user}
    />
  );
}
