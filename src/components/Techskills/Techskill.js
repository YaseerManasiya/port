import "./Techskill.css";
import mongoicon from "../../assets/mongodb-icon.png";
import expressicon from "../../assets/express-icon.svg";
import nexticon from "../../assets/nextjs-icon.svg";
import nodeicon from "../../assets/node-icon.png";
import reacticon from "../../assets/react-icon.png";
import stripeicon from "../../assets/stripe-icon.png";
import typeicon from "../../assets/typescript-icon.png";
import jsicon from "../../assets/jsicon.png";
import cssicon from "../../assets/cssicon.png";
import htmlicon from "../../assets/htmlicon.png";
import taiwan from "../../assets/taiwanicon.svg";
import Techcard from "./Techcard";
function Techskill() {
  return (
    <div>
      <div className="tech" id="techskill">
        <div className="container">
          <div className="tech_heading">
            <p>Some Cool Tech I've Used</p>
          </div>
          <div className="tech__cards">
            <Techcard
              classname="mongoIcon"
              path={mongoicon}
              alt="mongodb"
              desc="MongoDB"
            />
            <Techcard
              classname="expressIcon"
              path={expressicon}
              alt="Express"
              desc="Express"
            />
            <Techcard
              classname="nodeIcon"
              path={nodeicon}
              alt="Node"
              desc="Node"
            />
            <Techcard classname="" path={nexticon} alt="Next" desc="Next.js" />
            <Techcard classname="" path={reacticon} alt="React" desc="React" />
            <Techcard
              classname="stripeIcon"
              path={stripeicon}
              alt="Stripe"
              desc="Stripe"
            />
            <Techcard classname="" path={htmlicon} alt="HTML" desc="HTML" />
            <Techcard classname="cssIcon" path={cssicon} alt="CSS" desc="CSS" />
            <Techcard classname="" path={jsicon} alt="JS" desc="JavaScript" />
            <Techcard
              classname=""
              path={taiwan}
              alt="TailwindCSS"
              desc="Tailwind CSS"
            />
            <Techcard
              classname="typeIcon"
              path={typeicon}
              alt="TypeScript"
              desc="TypeScript"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Techskill;
