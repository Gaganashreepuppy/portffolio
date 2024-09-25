import React from 'react';
import './Intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

function Intro() {
  return (
    <section id="intro">
      <div className="introcontent">
        <span className="Hello">Hello,</span>
        <span className="introduction">
          I'm Gaganashree <br /> React Developer
        </span>
        <p className="explain">I'm a Skilled React developer</p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire me" className="btnImg" />
            Hire me
          </button>
        </Link>
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
}

export default Intro;
