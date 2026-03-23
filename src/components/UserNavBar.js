import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const UserNavBar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    role: localStorage.getItem("role"),
    username: localStorage.getItem("username"),
  });

  if (user.role !== "user") return null;

  const logout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    setUser({ role: null, username: null });
    navigate("/user/login");
  };

  const linkStyle = { marginLeft: 20, color: "white" };

  return (
    <div style={{ background: "#2c2f70", color: "white", padding: 10 }}>
      <h3>User Panel</h3>
      <span>Welcome, {user.username}</span>
      <NavLink to="/user/blogs" style={linkStyle}>My Blogs</NavLink>
      <NavLink to="/user/addblog" style={linkStyle}>Add Blog</NavLink>
      <button onClick={logout} style={{ marginLeft: 20 }}>Logout</button>
    </div>
  );
};

export default UserNavBar;