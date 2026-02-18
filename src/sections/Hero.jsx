import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import Section from '../components/common/Section';
import './Hero.css';

const Hero = () => {
    return (
        <div id="home" className="hero-container">
            {/* Ambient Background */}
            <div className="hero-bg">
                <motion.div
                    className="blob blob-1"
                    animate={{ x: [0, 100, 0], y: [0, 50, 0], rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="blob blob-2"
                    animate={{ x: [0, -100, 0], y: [0, -50, 0], rotate: [0, -360] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
                <div className="glass-overlay"></div>
            </div>

            <div className="hero-content">
                <motion.h1
                    className="hero-title text-gradient"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    We Craft <br />
                    <span className="hero-highlight">Digital Futures</span>
                </motion.h1>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Elevating brands through immersive design, cutting-edge technology, and motion-driven experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="hero-cta"
                >
                    <Button variant="primary">Start Project</Button>
                    <Button variant="outline">View Portfolio</Button>
                </motion.div>
            </div>

            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
