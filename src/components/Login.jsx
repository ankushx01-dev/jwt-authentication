import React, { useState } from "react";
import { authenticate, saveUserToken } from "../auth.js";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const user = authenticate(username.trim(), password);
    if (!user) {
      setError("Incorrect username or password. Please try again.");
      return;
    }

    saveUserToken(user);
    onLogin(user);
  }

  return (
    <main className="page-shell">
      <section className="auth-card" aria-labelledby="login-title">
        <div className="brand-mark" aria-hidden="true">
          J
        </div>
        <p className="eyebrow">SIMULATED JWT AUTHENTICATION</p>
        <h1 id="login-title">Login System</h1>
        <p className="card-description">
          Sign in to continue to your protected dashboard.
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            autoComplete="username"
            id="username"
            name="username"
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter your username"
            required
            value={username}
          />

          <label htmlFor="password">Password</label>
          <input
            autoComplete="current-password"
            id="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            required
            type="password"
            value={password}
          />

          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}

          <button className="primary-button" type="submit">
            Login
          </button>
        </form>

        <p className="demo-hint">
          Demo credentials: <strong>admin</strong> / <strong>admin123</strong>
        </p>
      </section>
    </main>
  );
}
