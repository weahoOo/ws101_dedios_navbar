import React, { useState } from 'react';
import './ContactUs.css'; // Custom CSS for Contact Us

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Handle form submission logic
    };

    return (
        <section className="contact-container">
            <h2 className="contact-title">Get in Touch</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Message:
                    <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
                </label>
                <button type="submit" className="contact-submit">Submit</button>
            </form>
        </section>
    );
};

export default ContactUs;
