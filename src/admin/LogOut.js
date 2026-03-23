import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const confirmLogout = window.confirm(
      "CONFIRM LOGOUT YOUR WEBSITE?"
    );

    if (confirmLogout) {
      localStorage.removeItem("token");
      navigate("/admin/login", { replace: true });
    } 
  }, [navigate]);

  return null;
};

export default LogOut;

