import React from 'react';
import './About.css'; // Custom CSS for the About page
import { FaLaptopCode, FaServer, FaMobileAlt, FaCloud } from 'react-icons/fa'; // Import icons

const About = () => {
    return (
        <div className="about-container">
            <h2 className="about-title">About Web Development</h2>
            <p className="about-description">
                Web development is the foundation of the digital world. It encompasses the creation and maintenance of websites, ensuring that they are fast, user-friendly, and visually appealing. 
                As a vital part of every business, web development empowers brands to have a digital presence, reach global audiences, and provide seamless user experiences.
                From front-end design to back-end infrastructure, we are committed to building innovative, scalable solutions that meet the demands of a rapidly evolving digital landscape.
            </p>

            <div className="about-icons">
                <div className="about-icon-box">
                    <FaLaptopCode className="about-icon" />
                    <h3>Web Development</h3>
                    <p>Creating responsive and dynamic websites tailored to your needs.</p>
                </div>
                <div className="about-icon-box">
                    <FaServer className="about-icon" />
                    <h3>Server Management</h3>
                    <p>Expert handling of servers to ensure fast and secure hosting solutions.</p>
                </div>
                <div className="about-icon-box">
                    <FaMobileAlt className="about-icon" />
                    <h3>Mobile Apps</h3>
                    <p>Building cross-platform mobile apps for iOS and Android devices.</p>
                </div>
                <div className="about-icon-box">
                    <FaCloud className="about-icon" />
                    <h3>Cloud Solutions</h3>
                    <p>Deploying cloud-based systems to scale your business effectively.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
