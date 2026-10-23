import { useAuth } from "../authcontext";
import { usestate } from "react";

export default function Dashboard() {
    const { currentUser, logout } = useAuth();
    const [error, setError] = usestate("");

    return (
        <div>
            <h2> My application Dashboard</h2>
            {currentUser ? photoURL ? (
                <img src={currentUser.photoURL} alt="Profile image"></img>
            ) : (
                <p>No profile picture available</p>
            ) : (
                <p loading user information />
            )}
            <div>
                {currentUser?.email?.[0].toUppercase()}
            </div>
            <div>
                <h2>{currentUser?.displayname || "authenticated user"}</h2>
                <p>{currentUser?.email || "no email available"}</p>
            </div>
            <div>
                <p><span> UID: {currentUser?.uid}</span></p>
                <p><span>Provider: {currentUser?.providerdate?.[0]?.providerID}</span></p>

            </div>
            <button onClick={logout}>logout</button>
        </div>

    )
}