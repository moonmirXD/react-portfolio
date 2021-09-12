import magnifierLogo from "../../assets/images/simple-line-icons_magnifier.png";
import codingPhoto from "../../assets/images/undraw_Code_thinking_re_gka2.svg";
import arrowLogo from "../../assets/images/animation_500_ksong8u5.gif";
import resumePDF from "../../assets/pdf/my-resume.pdf";
import "./hero.css";

import React, { useState } from "react";

const Hero = () => {
  const [state, setState] = useState({
    subHeader: "I could play",
    name: "I’m Ryan Arqueza",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque id turpis semper egestas.",
  });

  const { subHeader, name, description } = state;

  return (
    <>
      <main id='main'>
        <div className='container'>
          <div className='content'>
            <img src={codingPhoto} alt='coding' className='coding-img' />
            <div className='left-col'>
              <span className='subheader'>{subHeader}</span>
              <h1>
                Hello, {name} a <span>Full-stack Developer</span>.
              </h1>
              <p>{description}</p>
              <a href={resumePDF} download className='view-button'>
                <img src={magnifierLogo} alt='magnifier' />
                View resume
              </a>
              {/* <a href='/somefile.txt' download>Click to download</a> */}
            </div>
          </div>
          <img className='arrow-down' src={arrowLogo} alt='arrow' />
        </div>
      </main>
      <div className='black-brown'></div>
    </>
  );
};

export default Hero;
