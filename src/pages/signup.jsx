import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

function Signup() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSignup = async (e) => {

        e.preventDefault();

        setError("");

        if (firstName === "" || lastName === "" || email === "" || password === "") {
            setError("Please fill in all fields.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        try {

            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid), {
                firstName: firstName,
                lastName: lastName,
                email: email
            });

            alert("Account created successfully.");

            navigate("/login");

        } catch (error) {

            if (error.code === "auth/email-already-in-use") {
                setError("This email is already registered.");
            }
            else if (error.code === "auth/invalid-email") {
                setError("Please enter a valid email address.");
            }
            else if (error.code === "auth/weak-password") {
                setError("Password is too weak.");
            }
            else {
                setError("Registration failed. Please try again.");
            }
        }
    };

    return (
        <div className="auth-page">

            <div className="auth-box">

                <h1>Create an Account</h1>

                <p>Sign up for a free DEV@Deakin account.</p>

                {error && (
                    <p className="error">
                        {error}
                    </p>
                )}

                <form onSubmit={handleSignup}>

                    <label>First Name</label>

                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter your first name"
                    />

                    <label>Last Name</label>

                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter your last name"
                    />

                    <label>Email</label>

                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />

                    <label>Password</label>

                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />

                    <button type="submit">
                        Sign Up
                    </button>

                </form>

                <p>
                    Already have an account?
                    {" "}
                    <Link to="/login">Login</Link>
                </p>

            </div>

        </div>
    );
}

export default Signup;