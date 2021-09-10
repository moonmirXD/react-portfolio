import telos from "../../assets/images/telos.png";
import waters from "../../assets/images/waters.png";
import "./project.css";
const Project = () => {
  return (
    <>
      <div className='brown-blue'></div>
      <section className='section-project' id='projects'>
        <div className='container'>
          <div className='section-header'>
            <div className='section-title'>
              <h1>
                Projects <span className='tag-line'></span>
              </h1>
            </div>
            <div className='subheader'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                condimentum duis mi in vitae. Etiam accumsan molestie viverra
                tincidunt eget mauris elementum.
              </p>
            </div>
          </div>

          <div className='project-1 project'>
            <a
              href='https://app.telosrpm.com/'
              rel='noreferrer'
              target='_blank'
            >
              <img src={telos} alt='' />
            </a>
            <div className='description'>
              <h1>Telos RPM</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                velit urna porta a velit, pellentesque id. Donec dictum commodo
                imperdiet blandit vel odio mattis mollis.
              </p>
            </div>
          </div>

          <div className='project-2 project'>
            <img src={waters} alt='' />
            <div className='description'>
              <h1>Waters App Distribution</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                velit urna porta a velit, pellentesque id. Donec dictum commodo
                imperdiet blandit vel odio mattis mollis.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className='blue-white'></div>
    </>
  );
};

export default Project;
