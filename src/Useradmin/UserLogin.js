import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const UserLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5001/api/auth/login",
        { email, password }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.user.name);
      localStorage.setItem("role", res.data.user.role);   
      localStorage.setItem("userId", res.data.user.id);   

      alert("Login Successful");
      
      if (res.data.user.role === "admin") {
        navigate("/admin/viewblog");
      } else {
        navigate("/user");
      }

      window.location.reload();
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f8f8f8",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "10px",
          width: "350px",
          textAlign: "center",
        }}
      >
        <h2>Welcome To Login Page</h2>

        <form
          onSubmit={handleLogin}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            style={{
              padding: "10px",
              backgroundColor: "#2c2f70",
              color: "#fff",
            }}
          >
            LOG IN
          </button>
        </form>

        <p style={{ marginTop: "10px" }}>
          Don't have an account?{" "}
          <Link to="/signup" style={{ color: "red" }}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;