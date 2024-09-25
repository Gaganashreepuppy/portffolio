import React from 'react'
import './Works.css';
import Port1 from '../../assets/portfolio-1.png';
import Port2 from '../../assets/portfolio-2.png';
import Port3 from '../../assets/portfolio-3.png';
import Port4 from '../../assets/portfolio-4.png';
import Port5 from '../../assets/portfolio-5.png';
import Port6 from '../../assets/portfolio-6.png';

function Works() {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        wjhduiefhuehiurhguirfhiurfsdnvsdjfsiufruirifrfjsdnvjdshvfufysusdfjnjznfcsudfyesudsfncsdjhfsudfhsduifjsdncjsdhcusdhfsdjfnjsdncjsdhf
      </span>
      <div className="worksImage">
        <img src={Port1} alt="" className="worksImg" />
        <img src={Port2} alt="" className="worksImg" />
        <img src={Port3} alt="" className="worksImg" />
        <img src={Port4} alt="" className="worksImg" />
        <img src={Port5} alt="" className="worksImg" />
        <img src={Port6} alt="" className="worksImg" />
      </div>
      <button className="worksBtn">see more</button>
    </section>
  )
}

export default Works
