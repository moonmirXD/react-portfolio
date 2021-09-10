import techcellarIcon from "../../assets/images/tc-techcellar.png";
import telosIcon from "../../assets/images/telos-logo.png";
import "./work.css";

const Work = () => {
  return (
    <>
      <section className='section-timeline' id='works'>
        <div className='section-title'>
          <h1>
            Works <span></span>
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
              <h3 className='address'>Makati City</h3>
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
              <img src={telosIcon} alt='company' className='telos-logo' />
              <h3 className='address'>Dallas, Texas</h3>
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
              <h2>2021</h2>
              <img src={telosIcon} alt='company' className='telos-logo' />
              <h3 className='address'>Dallas, Texas</h3>
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
