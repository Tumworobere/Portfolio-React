import React from "react";
import "./about.css";
import Me from "../../images/me-4.png";
import { FaAward, FaCertificate, FaFolder} from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Hello I'm</h5>
        <h2>Annah Tumworobere</h2>
        {/* <h5 className="text-light"> Full-stack Developer</h5> */}
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="About me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about_card">
              <FaCertificate className="about_icon" />
              <h5>Certificates</h5>
              <small>7+</small>
            </article>
            <article className="about_card">
              <FaFolder className="about_icon" />
              <h5>Projects</h5>
              <small>35+ projects completed</small>
            </article>
          </div>
          <p>I’m a certified full-stack developer, who enjoys building interactive  interfaces with JavaScript, React and Ruby On Rails.
            <br />
            <br />
            I'm also a Mentor at Microverse.
            <br />
            <br />
            I'm open to Full-stack(remote/onsite) opportunities with a passion of Front-end development.
            If you like what you see and have a project you need coded, 
            don’t hestiate to contact me.
          </p>
          <a href="#project" className="btn btn-primary"> See my projects</a>
        </div>
      </div>
    </section>
  );
};

export default About;
