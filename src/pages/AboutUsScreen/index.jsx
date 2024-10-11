import React from 'react';
import './styles.css'

function AboutUsScreen() {
    
    return(
    <div className="about-us-wrapper">
        <div className="about-us-hero">
            <h1>About Us</h1>
        </div>
        <div className="about-us-container">
            <section className="about-section">
                <h2>Welcome to <span className='highlight'>Feed with Tech</span></h2>
                <p>We are dedicated to leveraging technology to make a difference in the lives of those in need. Our mission is to connect generosity with those who need it most, ensuring that every meal counts.</p>
            </section>
            
            <section className="mission-section">
                <h2>Our Mission</h2>
                <p>Our mission is to utilize technology to streamline the process of food donations, making it easier for donors to contribute and for volunteers to distribute meals to those in need. We believe in the power of community and the impact that technology can have in bringing people together to tackle hunger.</p>
            </section>
            
            <section className="values-section">
                <h2>Our Values</h2>
                <ul>
                    <li>Compassion: We are driven by a deep concern for the well-being of others.</li>
                    <li>Innovation: We strive to find new and better ways to solve problems.</li>
                    <li>Community: We believe in the strength of working together for a common cause.</li>
                    <li>Transparency: We operate with openness and honesty in all we do.</li>
                </ul>
            </section>
            
            <section className="team-section">
                <h2>Meet the Team</h2>
                <p>Our team consists of passionate individuals who are committed to making a difference. From developers to volunteers, each member of our team plays a crucial role in our mission to feed the hungry through technology.</p>
            </section>
            
            <section className="contact-section">
                <h2>Contact Us</h2>
                <p>If you have any questions or would like to get involved, feel free to reach out to us at <a href="mailto:email@example.com">email@example.com</a>. We'd love to hear from you!</p>
            </section>
        </div>
    </div>
    )
}

export default AboutUsScreen;
