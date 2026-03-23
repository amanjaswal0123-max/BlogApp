import { Navigate, Outlet } from "react-router-dom";

const UserProtectedRoute = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // Not logged in
  if (!token) {
    return <Navigate to="/user/login" replace />;
  }

  // Logged in but not a user
  if (role && role !== "user") {
    return <Navigate to="/" replace />; // or "/admin/viewblog" for admins
  }

  // Logged in as user
  return <Outlet />;
};

export default UserProtectedRoute;