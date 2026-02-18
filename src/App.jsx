import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
