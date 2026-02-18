import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Section from '../components/common/Section';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Jenkins',
        role: 'CEO, TechStart',
        text: "GM Digital Hub transformed our online presence. The attention to detail and animations are simply world-class.",
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'Founder, Innovate',
        text: "Working with this team was a game-changer. They understood our vision perfectly and delivered beyond expectations.",
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
    },
    {
        id: 3,
        name: 'Elena Rodriguez',
        role: 'Marketing Dir, Global',
        text: "The new website has increased our conversion rates by 40%. The user experience flow is intuitive and engaging.",
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const timer = setInterval(nextTestimonial, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Section id="testimonials" className="testimonials-section" light>
            <div className="section-header text-center">
                <motion.h2
                    className="section-title text-gradient"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Client Stories
                </motion.h2>
            </div>

            <div className="testimonials-carousel">
                <button className="nav-btn prev" onClick={prevTestimonial}><ChevronLeft /></button>

                <div className="testimonial-wrapper">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentIndex}
                            className="testimonial-card glass-card"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Quote size={40} className="quote-icon" />
                            <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
                            <div className="testimonial-author">
                                <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
                                <div>
                                    <h4>{testimonials[currentIndex].name}</h4>
                                    <span>{testimonials[currentIndex].role}</span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <button className="nav-btn next" onClick={nextTestimonial}><ChevronRight /></button>
            </div>

            <div className="carousel-dots">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </Section>
    );
};

export default Testimonials;
