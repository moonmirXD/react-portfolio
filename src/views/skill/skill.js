import ScrollAnimation from "react-animate-on-scroll";
import "./skill.css";
import cssIcon from "../../assets/images/vscode-icons_file-type-css.svg";
import htmlIcon from "../../assets/images/vscode-icons_file-type-html.svg";
import scssIcon from "../../assets/images/vscode-icons_file-type-scss2.svg";
import jsIcon from "../../assets/images/vscode-icons_file-type-js-official.svg";
import bootstrapIcon from "../../assets/images/logos_bootstrap.svg";
import angularIcon from "../../assets/images/logos_angular-icon.svg";
import tsIcon from "../../assets/images/logos_typescript-icon.svg";
import nestjsIcon from "../../assets/images/logos_nestjs.svg";
import nodejsIcon from "../../assets/images/logos_nodejs.svg";
import mongodbIcon from "../../assets/images/logos_mongodb.svg";
const Skill = () => {
  return (
    <>
      <section className='skills' id='skills'>
        <div className='container'>
          <ScrollAnimation
            animateIn='bounceInLeft'
            animateOut='fadeOut'
            duration={1.2}
          >
            <div className='section-title'>
              <h1>.Skill();</h1>
              <span className='tag-line'></span>
            </div>

            <ul>
              <li>
                <img src={htmlIcon} alt='html' />
              </li>
              <li>
                <img src={cssIcon} alt='css' />
              </li>
              <li>
                <img src={scssIcon} alt='scss' />
              </li>
              <li>
                <img src={jsIcon} alt='javascript' />
              </li>
              <li>
                <img src={bootstrapIcon} alt='bootstrap' />
              </li>
              <li>
                <img src={angularIcon} alt='angular' />
              </li>
              <li>
                <img src={tsIcon} alt='typescript' />
              </li>
              <li>
                <img src={nestjsIcon} alt='nestjs' />
              </li>
              <li>
                <img src={nodejsIcon} alt='nodejs' />
              </li>
              <li>
                <img src={mongodbIcon} alt='mongodb' />
              </li>
            </ul>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default Skill;
