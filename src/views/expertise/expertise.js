import "./expertise.css";
import designIcon from "../../assets/images/ic_outline-design-services.png";
import developmentIcon from "../../assets/images/carbon_development.png";
import engineeringIcon from "../../assets/images/fluent_developer-board-24-regular.png";
const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <ul>
            <li>
              <img src={designIcon} alt="design" />
              <h2>Design</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
                eget tortor varius amet sollicitudin sit. Neque, id sapien
                placerat odio sed.
              </p>
            </li>
            <li>
              <img src={developmentIcon} alt="development" />
              <h2>Development</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
                eget tortor varius amet sollicitudin sit. Neque, id sapien
                placerat odio sed.
              </p>
            </li>
            <li>
              <img src={engineeringIcon} alt='engineering' />
              <h2>Hardware</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
                eget tortor varius amet sollicitudin sit. Neque, id sapien
                placerat odio sed.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Expertise;
