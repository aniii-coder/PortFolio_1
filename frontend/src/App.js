import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Project from './component/Projects';
import Skills from './component/Skills';
import Contact from './component/Contact';
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <>

      <Navbar />
      <Hero />
      <About />
      <Project />
      <Skills />
      <Contact />
      <Footer />
      {/* More sections will go here */}
    </>
  );
}

export default App;
