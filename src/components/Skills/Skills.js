import React from 'react'
import './Skills.css';
import UIDesign from '../../assets/ui-design.png' ;
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png'

function Skills() {
  return (
    <section id="skill">
      <span className="skillTitle">
        What I do|| I did
      </span>
      <span className="skillExplain">jdheuufbjdhsbcjdsfushfuiwhfsjdfjsdhisjdhfiushfiushfuishfiuhfiuwhfiwfhiwefwifwifhiwfhwifhwei
      </span>
      <div className="skillBar">
        <img src={UIDesign} alt="UIdesign" className="skillBarImg" />
        <div className="skillBarText">
          <h2>UI/UX</h2>
          <p>Demo Text</p>
        </div>
      </div>
      <div className="skillBar">
        <img src={WebDesign} alt="webDesign" className="skillBarImg" />
        <div className="skillBarText">
          <h2>Web Design</h2>
          <p>Demo Text</p>
        </div>
      </div>
      <div className="skillBar">
        <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
        <div className="skillBarText">
          <h2>App Design</h2>
          <p>Demo Text</p>
        </div>
      </div>
    </section>
  )
}

export default Skills
