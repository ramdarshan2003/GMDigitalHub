import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-gradient-line"></div>

            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h2 className="text-gradient">GM Digital Hub</h2>
                        <p>Crafting digital experiences that inspire and innovate.</p>
                        <div className="social-icons">
                            <motion.a href="#" whileHover={{ y: -5 }}><Instagram /></motion.a>
                            <motion.a href="#" whileHover={{ y: -5 }}><Twitter /></motion.a>
                            <motion.a href="#" whileHover={{ y: -5 }}><Linkedin /></motion.a>
                            <motion.a href="#" whileHover={{ y: -5 }}><Github /></motion.a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <p>hello@gmdigitalhub.com</p>
                        <p>+1 (555) 123-4567</p>
                        <p>123 Innovation Dr, Tech City</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} GM Digital Hub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
