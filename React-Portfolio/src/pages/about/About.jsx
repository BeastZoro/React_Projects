import React from "react";
import "./about.css";
import image from "../../images/download.jpeg";

const About = () => {
  const skills = [
    {
      name: "HTML",
      value: "95",
    },
    {
      name: "CSS",
      value: "95",
    },
    {
      name: "Javascript",
      value: "75",
    },
    {
      name: "ReactJS",
      value: "80",
    },
  ];

  const mappedSKills = skills.map((skill) => {
    return (
      <div className="skill-progress">
        {skill.name}
        <div className="progress" style={{ width: `${skill.value}%` }}>
          {skill.value}%
        </div>
      </div>
    );
  });
  return (
    <section className="about-section">
      <div className="abt-container">
        <div className="abt-info-wrapper">
          <div className="about-info">
            <img src={image} />
            <div className="personal-info">
              <p>
                <span className="bold">Name :</span> Mukesh Kumar
              </p>
              <p>
                <span className="bold">Profile :</span> Full stack web developer
              </p>
              <p>
                <span className="bold">Email :</span> mukesh0221998@gmail.com
              </p>
              <p>
                <span className="bold">Phone :</span> 7019565874
              </p>
            </div>
          </div>

          <div className="skills">
            <h2>Skills</h2>
            {mappedSKills}
          </div>
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi there! My name is Mukesh Kumar and I am a front-end web
            developer, interested and passionate in designing and building
            visually stunning, responsive websites. I am always exploring new
            ways to improve user experience through my designs. <br /> <br />My technical
            skills include proficiency in HTML, CSS, ReactJS, Bootstrap,
            Javascript. I am dedicated to delivering projects that are not only
            aesthetically pleasing, but also functionally effective and
            user-friendly. I am committed to lifelong learning, and I regularly
            attend workshops and conferences to keep up-to-date with the latest
            developments in my field.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
