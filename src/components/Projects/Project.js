import "./Project.css";
import ShifaImage from "../../assets/shifa.png";
import AmazonImage from "../../assets/amazon.png";

import Projectcard from "./Projectcard";
const shifalink = "https://shifahospitalahmedabad.com/";
const amazonlink = "https://www.yaseeramazon.cf/";
function Project() {
  return (
    <div className="main_project" id="Project">
      <div className="container">
        <div className="heading__project">
          <p>My Projects</p>
        </div>
        <div className="project__container">
          <Projectcard path={ShifaImage} alt="ShifaImage" link={shifalink} />
          <Projectcard path={AmazonImage} alt="AmazonImage" link={amazonlink} />
        </div>
      </div>
    </div>
  );
}

export default Project;
