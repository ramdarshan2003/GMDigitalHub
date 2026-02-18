import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Section from '../components/common/Section';
import './Portfolio.css';

const categories = ['All', 'Web Design', 'App Development', 'Branding'];

const projects = [
    { id: 1, title: 'Nebula Finance', category: 'Web Design', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
    { id: 2, title: 'EcoTrack App', category: 'App Development', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: 'Lumina Brand', category: 'Branding', image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800' },
    { id: 4, title: 'Aether Dashboard', category: 'Web Design', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
    { id: 5, title: 'Pulse Fitness', category: 'App Development', image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=800' },
    { id: 6, title: 'Zenith Logistics', category: 'Web Design', image: 'https://images.unsplash.com/photo-1664575602554-208c7a2292fe?auto=format&fit=crop&q=80&w=800' },
];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <Section id="portfolio" className="portfolio-section" light>
            <div className="section-header text-center">
                <motion.h2
                    className="section-title text-gradient"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Selected Works
                </motion.h2>
            </div>

            <div className="portfolio-filters">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <motion.div layout className="portfolio-grid">
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            key={project.id}
                            className="portfolio-item"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="portfolio-image">
                                <img src={project.image} alt={project.title} />
                                <div className="portfolio-overlay">
                                    <h3>{project.title}</h3>
                                    <p>{project.category}</p>
                                    <a href="#" className="portfolio-link">
                                        View Project <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </Section>
    );
};

export default Portfolio;
