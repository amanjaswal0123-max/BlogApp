import UserNavBar from "./UserNavBar";
import { Outlet } from "react-router-dom";

const UserSideBar = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <UserNavBar />

      <div style={{ flex: 1, padding: "20px", overflowY: "auto", backgroundColor: "#fff" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default UserSideBar;