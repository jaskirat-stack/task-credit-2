
import { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Firebase listener updates the user immediately.
    } catch (error) {
      setMessage("Invalid email or password.");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setMessage("You have logged out successfully.");
      setPassword("");
    } catch (error) {
      setMessage("Logout failed. Please try again.");
    }
  };

  if (loading) {
    return <p>Checking login status...</p>;
  }

  return (
    <div className="login-container">
      {user ? (
        <>
          <h2>You are logged in!</h2>

          <p className="success-message">
            ✓ Login successful
          </p>

          <p>Email: {user.email}</p>

          <button onClick={() => navigate("/")}>
            Go to Home
          </button>

          <button onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <h2>Welcome Back</h2>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Login</button>
          </form>
        </>
      )}

      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
