import React from 'react';
import { motion } from 'framer-motion';
import './Section.css';

const Section = ({ id, className = '', children, light = false }) => {
    return (
        <section
            id={id}
            className={`section ${light ? 'section-light' : 'section-dark'} ${className}`}
        >
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.2 }
                        }
                    }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
};

export default Section;
