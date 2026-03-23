import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div
      style={{
        padding: "20px",
        fontSize: "16px",
        backgroundColor: "blue",
      }}
    >
      <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
        Home
      </Link>
    </div>
  );
};

export default NavigationBar;