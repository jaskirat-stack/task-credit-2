import { Link } from "react-router-dom";
function Footer() {
    return (
        <footer className="footer">

            <div className="footer-top">

                <div className="footer-section">
                    <h3>Explore</h3>
                    <a href="#home">Home</a>
                    <a href="#articles">Articles</a>
                    <a href="#tutorials">Tutorials</a>
                </div>

                <div className="footer-section">
                    <h3>Support</h3>
                    <a href="#contact">Contact</a>
                </div>
                <div className="footer-section">
                   <h3>Stay Connected</h3>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </div>

            </div>

            

            <div className="footer-bottom">
                <p>© 2026 DEV@Deakin. All rights reserved.</p>

               
            </div>

        </footer>
    );
}

export default Footer;