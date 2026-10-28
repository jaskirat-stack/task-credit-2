
import { FaInstagram, FaThreads } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-top">

                <div className="footer-section">
                    <h3>Explore</h3>
                    <a href="#about">About</a>
                    <a href="#work">Articles</a>
                    <a href="#tutorials">Tutorials</a>
                </div>

                <div className="footer-section">
                    <h3>Support</h3>
                    <a href="#contact">Contact</a>
                </div>

                <div className="footer-section">
                    <h3>Stay Connected</h3>

                    <div className="footer-socials">
                        <a
                            href="https://www.instagram.com/jaskirat_dhillon.58?psln=c2xiMnJwOTdvcTE4&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            title="Instagram"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://www.threads.com/@jaskirat_dhillon.58?invite=0"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Threads"
                            title="Threads"
                        >
                            <FaThreads />
                        </a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 DEV@Deakin. All rights reserved.</p>
            </div>

        </footer>
    );
}

export default Footer;
