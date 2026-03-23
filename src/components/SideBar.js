import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const SideBar = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh", 
      }}
    >
      {/* LEFT SIDEBAR */}
      <NavBar />

      {/* RIGHT CONTENT */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          backgroundColor: "#fff",
          overflowY: "auto" 
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default SideBar;
