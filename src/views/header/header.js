import menuIcon from "../../assets/images/dashicons_menu-alt3.png";
import closeIcon from "../../assets/images/icons8-close-window-50.png";
import githubIcon from "../../assets/images/akar-icons_github-fill.png";
import twitterIcon from "../../assets/images/akar-icons_twitter-fill.png";
import linkedinIcon from "../../assets/images/akar-icons_linkedin-fill.png";

import "./header.css";

import React, { useEffect, useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  // const [windowSize, setWindowSize] = useState("");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const updateWidthWindow = () => {
    const newWidth = window.innerWidth;
    // setWindowSize(newWidth);
    newWidth > 768 && setShowMenu(true);
  };

  useEffect(() => {
    updateWidthWindow();
    window.addEventListener("resize", updateWidthWindow);
  }, []);

  return (
    <>
      <header>
        <a className='logo' href='#section-contact'>
          <h1>
            Raiiii<span>su</span>
          </h1>
        </a>

        <a
          href='#'
          id='menu-cta'
          className='menu-btn'
          onClick={() => toggleMenu()}
        >
          <img src={menuIcon} alt='menu' />
        </a>

        {showMenu && <Navbar toggleMenu={toggleMenu} />}
      </header>
    </>
  );
};

const Navbar = ({ toggleMenu }) => {
  return (
    <>
      <nav>
        <a
          href='#'
          className='close-menu-btn'
          id='close-menu-cta'
          onClick={() => toggleMenu()}
        >
          <img src={closeIcon} alt='close' />
        </a>
        <ul className='prime-nav'>
          <li className='home-nav'>
            <a href='#main'>Home</a>
          </li>
          <li className=''>
            <a href='#works'>Work</a>
          </li>
          <li className=''>
            <a href='#skills'>Skills</a>
          </li>
          <li>
            <a
              href='https://github.com/moonmirXD'
              rel='noreferrer'
              target='_blank'
            >
              <img src={githubIcon} alt='github' className='github' />
            </a>
          </li>
          <li>
            <a
              href='https://twitter.com/arquezaryan'
              rel='noreferrer'
              target='_blank'
            >
              <img src={twitterIcon} alt='twitter' className='twitter' />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/ryan-arqueza-201054195/'
              target='_blank'
              rel='noreferrer'
            >
              <img src={linkedinIcon} alt='linkedin' className='linkedin' />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Header;
