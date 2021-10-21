import "./Footer.css";
import "../Header/Header.css";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

import { Facebook, GitHub, Instagram, LinkedIn } from "@material-ui/icons";
import { Link, animateScroll as scroll } from "react-scroll";
function Footer() {
  return (
    <div className="mainfooter">
      <div className="container">
        <div className="btncon">
          <div className="footerbtnup">
            <Link
              activeClass="active"
              to="upbtn"
              spy={true}
              smooth={true}
              duration={1500}
            >
              <ArrowDropUpIcon id="downbtn" fontSize="large" />
            </Link>
          </div>
        </div>
        <div className="footersbtn">
          <div className="socialbuttons sbtn">
            <a href="https://www.linkedin.com/in/yaseer-manasiya-b550631a7/">
              <LinkedIn fontSize="large" className="social_btn" />
            </a>
            <a href="https://github.com/YaseerManasiya">
              <GitHub fontSize="large" className="social_btn" />
            </a>
            <a href="https://www.instagram.com/Yaseer___2020/">
              <Instagram fontSize="large" className="social_btn" />
            </a>
            <a href="https://www.facebook.com/yaseer.manasiya.7/">
              <Facebook fontSize="large" className="social_btn" />
            </a>
          </div>
        </div>
        <div className="copyline">
          <p>© 2021 yaseerdev. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
