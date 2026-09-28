import React from "react";

export default function Dashboard({ user, onLogout }) {
  return (
    <main className="page-shell">
      <section className="dashboard-card" aria-labelledby="dashboard-title">
        <div className="dashboard-topline">
          <span className="status-pill">
            <span className="status-dot" aria-hidden="true" />
            Authenticated
          </span>
          <button className="text-button" onClick={onLogout} type="button">
            Logout
          </button>
        </div>

        <div className="dashboard-content">
          <div className="welcome-icon" aria-hidden="true">
            ✓
          </div>
          <p className="eyebrow">ACCESS GRANTED</p>
          <h1 id="dashboard-title">Welcome to Dashboard</h1>
          <p className="card-description">
            You are signed in and can access this protected page.
          </p>

          <div className="user-details">
            <div>
              <span className="detail-label">User ID</span>
              <span className="detail-value">{user.userId}</span>
            </div>
            <div>
              <span className="detail-label">Role</span>
              <span className="detail-value role-value">
                {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
              </span>
            </div>
          </div>
        </div>

        
      </section>
    </main>
  );
}
