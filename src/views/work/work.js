import ScrollAnimation from "react-animate-on-scroll";

import techcellarIcon from "../../assets/images/tc-techcellar.png";
import telosIcon from "../../assets/images/telos-logo.png";
import "./work.css";

const Work = () => {
  return (
    <>
      <section className='section-timeline' id='works'>
        <ScrollAnimation
          animateIn='bounceInLeft'
          animateOut='fadeOut'
          duration={1.2}
        >
          <div className='section-title'>
            <h1>
              .Work(); <span></span>
            </h1>
          </div>
          <div className='timeline'>
            <div className='container left'>
              <div className='content'>
                <h2>2019</h2>
                <img
                  src={techcellarIcon}
                  alt='company'
                  className='techcellar-logo'
                />
                <h3 className='address'>Makati City, Philippines</h3>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
              </div>
            </div>
            <div className='container right'>
              <div className='content'>
                <h2>2020</h2>
                <img
                  src={techcellarIcon}
                  alt='company'
                  className='techcellar-logo'
                />
                <h3 className='address'>Makati City, Philippines</h3>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
              </div>
            </div>
            <div className='container left'>
              <div className='content'>
                <h2>2020</h2>
                <img src={telosIcon} alt='company' className='telos-logo' />
                <h3 className='address'>Dallas, USA</h3>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
              </div>
            </div>
            <div className='container right'>
              <div className='content'>
                <h2>2021</h2>
                <img src={telosIcon} alt='company' className='telos-logo' />
                <h3 className='address'>Dallas, USA</h3>
                <p>
                  Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                  admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                  quis iuvaret expetendis his, te elit voluptua dignissim per,
                  habeo iusto primis ea eam.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </>
  );
};

export default Work;
