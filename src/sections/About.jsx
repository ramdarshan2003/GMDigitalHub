import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import './About.css';

const About = () => {
    return (
        <Section id="about" className="about-section" light>
            <div className="about-container">
                <div className="about-content">
                    <motion.h2
                        className="section-title text-gradient"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Redefining Digital Possibilities
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="about-text">
                            GM Digital Hub is where creativity meets code. We are a team of visionaries,
                            designers, and developers dedicated to crafting digital experiences that linger
                            in the mind long after the tab is closed.
                        </p>
                        <p className="about-text">
                            We don't just build websites; we build ecosystems. From high-performance
                            web applications to immersive brand storytelling, every pixel is purposeful
                            and every interaction is designed to delight.
                        </p>

                        <div className="about-stats">
                            <div className="stat-item">
                                <h3>50+</h3>
                                <p>Projects</p>
                            </div>
                            <div className="stat-item">
                                <h3>15+</h3>
                                <p>Awards</p>
                            </div>
                            <div className="stat-item">
                                <h3>98%</h3>
                                <p>Retention</p>
                            </div>
                        </div>

                        <Button variant="primary">More About Us</Button>
                    </motion.div>
                </div>

                <div className="about-visual">
                    <motion.div
                        className="visual-card glass-card"
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="abstract-shape shape-1"></div>
                        <div className="abstract-shape shape-2"></div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

export default About;
