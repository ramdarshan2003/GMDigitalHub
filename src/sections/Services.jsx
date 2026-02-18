import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, Globe, Zap, BarChart } from 'lucide-react';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import './Services.css';

const services = [
    {
        icon: <Code size={40} />,
        title: 'Web Development',
        description: 'Custom, high-performance websites built with modern technologies like React, Next.js, and Node.js.'
    },
    {
        icon: <Smartphone size={40} />,
        title: 'App Development',
        description: 'Native and cross-platform mobile applications that provide seamless user experiences.'
    },
    {
        icon: <Palette size={40} />,
        title: 'UI/UX Design',
        description: 'User-centric design solutions that combine aesthetics with intuitive functionality.'
    },
    {
        icon: <Globe size={40} />,
        title: 'Digital Strategy',
        description: 'Comprehensive digital roadmaps to help your business grow and succeed online.'
    },
    {
        icon: <Zap size={40} />,
        title: 'Brand Identity',
        description: 'Creating memorable brand experiences through logo design, typography, and visual assets.'
    },
    {
        icon: <BarChart size={40} />,
        title: 'SEO & Marketing',
        description: 'Data-driven marketing strategies to increase visibility and drive conversion.'
    }
];

const Services = () => {
    return (
        <Section id="services" className="services-section">
            <div className="section-header">
                <motion.h2
                    className="section-title text-gradient"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Our Expertise
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    We deliver comprehensive digital solutions tailored to your unique business needs.
                </motion.p>
            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <Card key={index} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default Services;
