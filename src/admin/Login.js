import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {

  const DEFAULT_CREDENTIALS = {
    username: "AMAN",
    password: "AMAN1234",
  };


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

 const handleSubmit = (e) => {
    e.preventDefault();

    

    // Check if entered credentials match the default ones
    if (
      username === DEFAULT_CREDENTIALS.username &&
      password === DEFAULT_CREDENTIALS.password
    ) {
      // Generate a random string and store it in local storage
      const token = Math.random().toString(36).substring(2);
      localStorage.setItem("token", token);
      setIsLoggedIn(true);
      navigate("/admin"); // Adjust the path as needed
    } else {
      // Set error message for invalid credentials
      setError("Invalid username or password. plz Check Your Password ");
    }
  };
  


  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "300px" }}
      >
        <h2> Login</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ marginBottom: "10px", padding: "8px" }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ marginBottom: "10px", padding: "8px" }}
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            marginBottom: "10px",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
