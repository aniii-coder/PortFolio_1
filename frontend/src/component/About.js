import React from 'react';
import '../styles/About.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container py-5">
        <h2 className="section-title text-center mb-5">About Me</h2>
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0 fade-in-left">
            <img
              src="/dcs/pp.jpg"
              alt="Aniket Singh"
              className="profile-img img-fluid rounded-circle shadow"
            />
          </div>
          <div className="col-md-6 fade-in-right">
            <p className="about-text">
              Hello! I'm <strong>Aniket Singh</strong>, a passionate Full Stack Developer pursuing a Bachelor's in Computer Science from Birla College.
              <br /><br />
              I love building dynamic, responsive web applications and exploring new technologies. With a strong background in both frontend and backend, I’ve worked on multiple internships and personal projects including a real-time code editor and a personalized learning dashboard.
              <br /><br />
              My goal is to blend creativity with functionality, delivering intuitive user experiences and clean code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
