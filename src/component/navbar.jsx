
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    function handleSearch(event) {
        event.preventDefault();

        if (searchText.trim() === "") {
            alert("Please enter something to search.");
            return;
        }

        navigate("/search?q=" + encodeURIComponent(searchText.trim()));
    }

    return (
        <nav className="navbar">

            <Link to="/" className="logo">
                Personal Website
            </Link>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>

                <form onSubmit={handleSearch} className="search-form">
                    <input
                        type="search"
                        placeholder="Search"
                        value={searchText}
                        onChange={(event) => setSearchText(event.target.value)}
                    />
                    <button type="submit" className="search-button">
                        Search
                    </button>
                </form>

                <button
                    className="post-button"
                    onClick={() => navigate("/post")}
                >
                    Post
                </button>
            </div>

        </nav>
    );
}

export default Navbar;
