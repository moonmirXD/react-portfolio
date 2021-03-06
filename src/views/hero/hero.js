import React, { useState } from "react";
import { Animated } from "react-animated-css";
import magnifierLogo from "../../assets/images/simple-line-icons_magnifier.png";
import codingPhoto from "../../assets/images/undraw_Code_thinking_re_gka2.svg";
import arrowLogo from "../../assets/images/animation_500_ksong8u5.gif";
import resumePDF from "../../assets/pdf/my-resume.pdf";
import "./hero.css";

const Hero = () => {
  const [state, setState] = useState({
    subHeader: "I could play",
    name: "I’m Ryan Arqueza",
  });

  const { subHeader, name, description } = state;

  return (
    <>
      <main id='main'>
        <div className='container'>
          <Animated
            animationIn='fadeIn'
            animationOut='fadeOut'
            isVisible={true}
            animationInDuration={2000}
          >
            <div className='content'>
              <img src={codingPhoto} alt='coding' className='coding-img' />
              <div className='left-col'>
                <span className='subheader'>{subHeader}</span>
                <h1>
                  Hello, {name} a{" "}
                  <span>
                    I create{" "}
                    <span style={{ color: "white", fontFamily: "cursive" }}>
                      objects
                    </span>{" "}
                    in Web
                  </span>
                  .
                </h1>
                <p>
                  '"Accept that because we were born with nothing, we can become
                  anything" - <i>Sora</i>
                </p>
                <a href={resumePDF} download className='view-button'>
                  <img src={magnifierLogo} alt='magnifier' />
                  View resume
                </a>
              </div>
            </div>
          </Animated>
          <img className='arrow-down' src={arrowLogo} alt='arrow' />
        </div>
      </main>
      <div className='black-brown'></div>
    </>
  );
};

export default Hero;
