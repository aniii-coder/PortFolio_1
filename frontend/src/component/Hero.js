import React from 'react';
import '../styles/Hero.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
  return (
    <section className="hero-section d-flex align-items-center" id="home">
      <div className="container text-center">
        <h1 className="hero-title">Hi, I'm <span>Aniket Singh</span></h1>
        <p className="hero-subtitle">A Passionate Full Stack Developer & UI Enthusiast</p>
        <div className="hero-buttons mt-4">
          <a href="/ANIKET_RESUME_01.pdf" className="btn btn-primary me-3" download>Download Resume</a>
          <a href="#contact" className="btn btn-outline-light">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
// /AniketSinghResume_1.pdf