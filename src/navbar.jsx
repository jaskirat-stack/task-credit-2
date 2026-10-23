import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">

            <Link to="/" className="logo">
                DEV@Deakin
            </Link>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                <button className="search-button">Search</button>
                <button className="post-button">Post</button>
            </div>

        </nav>
    );
}

export default Navbar;