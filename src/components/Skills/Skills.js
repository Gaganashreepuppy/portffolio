import React from 'react';
import './Skills.css';
import UIDesign from '../../assets/nhce.jpeg';
import WebDesign from '../../assets/meltwater.jpeg';
import AppDesign from '../../assets/mern.jpeg';

function Skills() {
  return (
    <section id="skill">
      <span className="skillTitle">Experience and Education</span>
      <span className="skillExplain">
        Aspiring React Developer | Former Product Support Engineer at Meltwater
        | MCA Graduate
      </span>
      <div className="skillBar">
        <img src={UIDesign} alt="UIdesign" className="skillBarImg" />
        <div className="skillBarText">
          <h2>Higher Education-Master of Computer Applications: 8.4</h2>
          <p>New Horizon College of Engineering</p>
        </div>
      </div>
      <div className="skillBar">
        <img src={WebDesign} alt="webDesign" className="skillBarImg" />
        <div className="skillBarText">
          <h2>Internships-Meltwater</h2>
          <p>Product support Engineer</p>
        </div>
      </div>
      <div className="skillBar">
        <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
        <div className="skillBarText">
          <h2>Internships-Prinston</h2>
          <p>MERN Full stack Developer</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
