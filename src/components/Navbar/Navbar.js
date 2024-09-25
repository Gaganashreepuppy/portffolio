import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpeg';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="" className="logo" />
      <div className="desktopmenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          offset={-50}
          duration={500}
          className="desktopmenuList"
        >
          Home
        </Link>

        {/* <Link className="desktopmenuList">Clients</Link> */}
        <Link
          activeClass="active"
          to="skill"
          spy={true}
          offset={-50}
          duration={500}
          className="desktopmenuList"
        >
          Education and Experience
        </Link>

        <Link
          activeClass="active"
          to="works"
          spy={true}
          offset={-50}
          duration={500}
          className="desktopmenuList"
        >
          Projects
        </Link>
      </div>
      <button
        className="desktopmenuBtn"
        onClick={() => {
          document
            .getElementById('contact')
            .scrollIntoView({ behaviour: 'smooth' });
        }}
      >
        <img src={contactImg} alt="" className="desktopmenuImage" /> contact me
      </button>
    </nav>
  );
}

export default Navbar;
