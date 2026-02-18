import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import './Process.css';

const steps = [
    { id: 1, title: 'Discovery', description: 'We dive deep into your business goals, audience, and market landscape.' },
    { id: 2, title: 'Strategy', description: 'Crafting a roadmap that aligns creative vision with technical feasibility.' },
    { id: 3, title: 'Design', description: 'Visualizing the concept with high-fidelity mockups and interactive prototypes.' },
    { id: 4, title: 'Development', description: 'Building robust, scalable solutions using cutting-edge technologies.' },
    { id: 5, title: 'Launch & Scale', description: 'Deploying your digital product and optimizing for growth.' },
];

const Process = () => {
    return (
        <Section id="process" className="process-section">
            <div className="section-header text-center">
                <motion.h2
                    className="section-title text-gradient"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    How We Work
                </motion.h2>
            </div>

            <div className="timeline">
                <div className="timeline-line"></div>
                {steps.map((step, index) => (
                    <motion.div
                        key={step.id}
                        className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <div className="timeline-content glass-panel">
                            <div className="step-number">0{step.id}</div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Process;
