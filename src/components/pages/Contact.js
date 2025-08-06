import React from 'react';
import '../../styles/Contact.css'; // Import the CSS file
import contactUsImage from '../../styles/img/contact_image.jpg';

function Contact()
{
    return (
        <div className="contact-us-container">
            <section className="contact-header-section">
                <div className="contact-content">
                    <div className="text-content">
                        <h2>We'd Love to Hear From You!</h2>
                        <p>
                            Whether you have a question, want to partner with us, or just want to say hello, we're here and ready to connect.
                        </p>

                        <div className="contact-details">
                            <h3>Get In Touch</h3>
                            <div className="contact-item">
                                <strong>Email:</strong>
                                <a href="mailto:info@etprog.org">info@etprog.org</a>
                            </div>
                            <div className="contact-item">
                                <strong>Phone:</strong>
                                <a href="tel:+254722691379">+254 722 691 379</a>
                            </div>
                            <div className="contact-item">
                                <strong>Location:</strong>
                                <span>YMA Building (No.2), Nairobi, Kenya</span>
                            </div>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={contactUsImage} alt="Contact Us - Two professionals shaking hands" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;