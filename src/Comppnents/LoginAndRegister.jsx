import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './LoginAndRegister.css';

const API_BASE_URL = "https://medicine-me-backend-rntyitptm-philopaterwaheeds-projects.vercel.app/auth";

const LoginAndRegister = () => {
  const [user, setUser] = useState(null);
  const [action, setAction] = useState(""); // "active" for register, "" for login
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
      navigate("/home");
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const registerLink = () => {
    setAction("active");
    setError("");
  };

  const loginLink = () => {
    setAction("");
    setError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data || "Invalid credentials");

      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data || "Registration failed");

      alert("Registration successful. Please log in.");
      loginLink();
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={`wrapper ${action}`}>
      {/* Error Message */}
      {error && <p className="error">{error}</p>}

      {/* Login Form */}
      <div className="form-box login">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              Don't have an account?{" "}
              <a href="#" onClick={registerLink}>
                Register
              </a>
            </p>
          </div>
        </form>
      </div>

      {/* Register Form */}
      <div className="form-box register">
        <form onSubmit={handleRegister}>
          <h1>Register</h1>
          <div className="input-box">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Register</button>
          <div className="register-link">
            <p>
              Already have an account?{" "}
              <a href="#" onClick={loginLink}>
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginAndRegister;
