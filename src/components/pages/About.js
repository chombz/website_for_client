import React from 'react';
import '../../styles/About.css';
import aboutUsImage1 from '../../styles/about_us/aboutus_image1.jpg';
import aboutUsImage3 from '../../styles/about_us/aboutus_image3.jpg';

function About()
{
    return (
        <div className="about-us-container">
            <section className="mission-section">
                <div className="text-content">
                    <h2>Our Story</h2>
                    <p>
                        Entrepreneurship Training Program is a registered non-governmental organization, NGO, in Nairobi, Kenya. ETP was established in 2010 as a charity organization to help solve unemployment crisis across Nairobi County among youth. Over the years, the NGO has been bringing together teams of successful patriotic Kenyan entrepreneurs with a vision of empowering youth, women, and people living with disabilities through training, mentorship, and business nurturing programs. We mobilize resources such as training materials and personnel, doing workshops, and business nurturing programs.
                    </p>
                </div>
                <div className="image-container">
                    <img src={aboutUsImage1} alt="Our Team or Work" />
                </div>
            </section>

            <section className="vision-impact-section">
                <div className="image-container">
                    <img src={aboutUsImage3} alt="Our Impact or Vision" />
                </div>
                <div className="text-content">
                    <h2>Our Vision for the Future</h2>
                    <p>
                        To build a self-reliant, empowered generation of youth, women, and people with disabilities through entrepreneurship, mentorship, and sustainable economic opportunities that transform lives and strengthen communities across Nairobi and beyond.
                    </p>
                    <h2>Our Impact So Far</h2>
                    <p>
                        Since 2010, Entrepreneurship Training Program (ETP) has trained over 1,000 individuals across Nairobi’s 17 constituencies, equipping youth, women, and people living with disabilities with the tools to start and sustain businesses. We've hosted workshops, mentorship programs, and tree-planting initiatives, while collaborating with professional bodies like NACADA to address drug and substance abuse. More than 70% of our trainees remain actively engaged, and many have gone on to build successful ventures, share testimonies, and inspire others. From business registration to procurement training, ETP has become a trusted guide in transforming economic vulnerabilities into pathways of growth, purpose, and community renewal.
                    </p>
                </div>
            </section>

            {/* You can add more sections here for team, values, etc. */}
        </div>
    );
}

export default About;