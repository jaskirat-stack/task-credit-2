
import { useState } from "react";

function DemoLogin() {
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const [msg, setmsg] = useState("");

    function handlelogin(event) {
        event.preventDefault();
        setmsg("login successful");
    }

    return (
        <div className="form">
            <h1>login</h1>

            <form onSubmit={handlelogin}>
                <input
                    type="email"
                    placeholder="enter your email"
                    value={email}
                    onChange={(event) => setemail(event.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="enter your password"
                    value={pass}
                    onChange={(event) => setpass(event.target.value)}
                    required
                />

                <button type="submit">Login</button>
            </form>

            <p>{msg}</p>
        </div>
    );
}

export default DemoLogin;
