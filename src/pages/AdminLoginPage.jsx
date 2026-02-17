import React, { useState } from "react";
import "../styles/pages.css";
import "../styles/admin-login.css";

const AdminLoginPage = ({ setCurrentPage }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple static check for demonstration
    if (username === "admin" && password === "admin123") {
      setError("");
      setCurrentPage && setCurrentPage('admin');
    } else {
      setError("Invalid admin credentials");
    }
  };

  return (
    <div className="login-page-container">
      <div className="admin-login-card">
        <h2>Admin Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <div className="error-message">{error}</div>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
