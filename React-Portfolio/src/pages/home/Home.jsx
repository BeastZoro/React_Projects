import React from "react";
import "./Home.css";
import Typed from 'react-typed'
import resume from "../../assests/resume.pdf"
const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-container">
          <div className="hero-wrapper">
            <h1>Hi there, I'm Kumar</h1>
            <Typed 
              strings={[
                'Web Developer',
                'React Developer',
                'Front End Web Developer'
              ]}
              typeSpeed={150}
              backSpeed={150}
              loop            
            />

          </div>
          <div className="hero-btn">
            <a href="">
              <button>Portfolio</button>
            </a>
            <a href={resume} download="MukeshCV.pdf">
              <button>Download Resume</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
