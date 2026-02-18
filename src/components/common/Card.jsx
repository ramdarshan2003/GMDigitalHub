import React from 'react';
import { motion } from 'framer-motion';
import './Card.css';

const Card = ({ children, className = '', hoverEffect = true }) => {
    return (
        <motion.div
            className={`glass-card ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={hoverEffect ? { y: -10, boxShadow: "0 20px 30px rgba(0,0,0,0.1)" } : {}}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export default Card;
