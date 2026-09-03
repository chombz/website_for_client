import React from 'react';
// import { Link } from 'react-router-dom';
import '../../styles/Footer.css';

function Footer()
{
    return (
        <footer className="home-footer">
            {/* This section is changed from Quick Links to Contact Info */}
            <div className="footer-section contact-info">
                <h3>Get In Touch</h3>
                <p>
                    <strong>Email:</strong>
                    <a href="mailto:info@etprog.co.ke">info@etprog.co.ke</a>
                </p>
                <p>
                    <strong>Phone:</strong>
                    <a href="tel:+254722691379"> +254 722 691 379</a>
                </p>
                <p>
                    <strong>Location:</strong>
                    <span>YMA Building (No.2), Kirichwa Road, Kilimani, Nairobi</span>
                </p>
                <div className="footer-info">
                    <p>&copy; {new Date().getFullYear()} ETP. All Rights Reserved.</p>
                    <p>Empowering The People for a Sustainable Future.</p>
                    {/* You can add more info like address, contact email/phone here */}

                    <div className="footer-socials">
                        <a
                            href="https://www.facebook.com/etpkenya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon facebook-icon"
                            aria-label="ETP Kenya on Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                            </svg>
                        </a>

                        <a
                            href="https://www.youtube.com/@etprogramme2096/videos" /* Replace with your actual YouTube channel URL */
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon youtube-icon"
                            aria-label="ETP Kenya on YouTube">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.001.001C5.373.001 0 5.374 0 12.001c0 6.627 5.373 12 12.001 12s12-5.373 12-12c0-6.627-5.373-12-12.001-12zM12 21.601c-5.29 0-9.6-4.31-9.6-9.601s4.31-9.6 9.6-9.6 9.6 4.31 9.6 9.6-4.31 9.6-9.6 9.6zM9.601 7.201l7.2 4.8-7.2 4.8v-9.6z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;