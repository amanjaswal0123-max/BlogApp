import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        backgroundColor: "black",
        color: "white",
        padding: "20px",
      }}
    >
      <h3 style={{ marginBottom: "30px", textAlign: "center", color:"red"}}>
        ADMIN_PANEL
      </h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          fontSize: "16px",
        }}
      >
      
        <Link to="/admin/addblog" style={{    color: "#fff",  textDecoration: "none", }} >  Add Blog  </Link>

        <Link to="/admin/viewblog" style={{   color: "#fff",   textDecoration: "none", }}> View Blogs </Link>

        <Link to= "/admin/logOut"  style={{   color: "#fff",   textDecoration: "none", }} >LogOut</Link>

        
      </div>
    </div>
  );
};

export default NavBar;
