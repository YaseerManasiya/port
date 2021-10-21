import aboutimage from "../../assets/aboutimage.jpg";
import myresume from "../../assets/Myresume.pdf";

import "./About.css";
function About() {
  return (
    <div className="mainabout" id="about">
      <div className="container ">
        <div className="about__heading">
          <p> About</p>
        </div>
        <div className="about">
          <div className="about__image">
            <img src={aboutimage} alt="My Pic" loading="lazy" />
          </div>
          <div className="about__me">
            <div className="about__text">
              <div className="heading__aboutme">
                <h2>About Me</h2>
              </div>
              <div className="aboutme__content">
                <p>
                  Yaseer here, a full stack web developer who is determined to
                  gain knowledge and experience in the tech industry. My passion
                  for coding and the ability to grasp quickly allows me to work
                  efficiently. As a young individual with hunger a for learning
                  I’m looking to work for a tech firm where I can get
                  opportunities to develop my skills and contribute to the firm
                  eminently.
                </p>
              </div>
            </div>
            <div className="resume">
              <div className="resume__heading">
                <h2> Download My Resume</h2>
              </div>
              <div className="btn__download">
                <a href={myresume} download="Myresume.pdf">
                  {" "}
                  <button className="button-18">Download</button>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
