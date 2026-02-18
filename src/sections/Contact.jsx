import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [focused, setFocused] = useState({ name: false, email: false, message: false });

    const handleFocus = (field) => setFocused(prev => ({ ...prev, [field]: true }));
    const handleBlur = (field) => {
        if (!formData[field]) {
            setFocused(prev => ({ ...prev, [field]: false }));
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation logic would go here
        console.log('Form submitted:', formData);
    };

    return (
        <Section id="contact" className="contact-section">
            <div className="section-header text-center">
                <motion.h2
                    className="section-title text-gradient"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Get In Touch
                </motion.h2>
                <p className="section-subtitle">Let's create something extraordinary together.</p>
            </div>

            <div className="contact-container">
                <motion.form
                    className="contact-form glass-panel"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={`form-group ${focused.name || formData.name ? 'active' : ''}`}>
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => handleFocus('name')}
                            onBlur={() => handleBlur('name')}
                        />
                    </div>

                    <div className={`form-group ${focused.email || formData.email ? 'active' : ''}`}>
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => handleFocus('email')}
                            onBlur={() => handleBlur('email')}
                        />
                    </div>

                    <div className={`form-group ${focused.message || formData.message ? 'active' : ''}`}>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={() => handleFocus('message')}
                            onBlur={() => handleBlur('message')}
                            rows={4}
                        />
                    </div>

                    <Button variant="primary" className="submit-btn">Send Message</Button>
                </motion.form>
            </div>
        </Section>
    );
};

export default Contact;
