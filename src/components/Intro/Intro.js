import React from 'react';
import './Intro.css';
import bg from '../../assets/image.jpeg';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

function Intro() {
  return (
    <section id="intro">
      <div className="introcontent">
        <span className="Hello">Hello,</span>
        <br/>
        <span className="introduction">
          I'm Gaganashree <br /> Tech Enthusiast
        </span>
        <p className="explain">
          {' '}
          A passionate Web Developer with a focus on React.js and the MERN
          stack.
        </p>
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
