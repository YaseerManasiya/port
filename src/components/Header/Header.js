import "./Header.css";
import TypeWriter from "react-typewriter";
import {
  LinkedIn,
  GitHub,
  Instagram,
  Facebook,
  ArrowDropDownCircle,
} from "@material-ui/icons/";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div id="home">
      <div className="mainheader">
        <div
          className={colorChange ? "navbar colorChange menu" : "navbar menu"}
        >
          <div className="container">
            <ul className="menu__items">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={1500}
              >
                <li className="menu__item menu__items--items1"> Home</li>
              </Link>
              <Link
                activeClass="active"
                to="techskill"
                spy={true}
                smooth={true}
                duration={1500}
              >
                <li className="menu__item menu__items--items2"> Project</li>
              </Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={1500}
              >
                <li className="menu__item menu__items--items3"> About</li>
              </Link>

              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={1500}
              >
                <li className="menu__item menu__items--items4"> Contact</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="header">
          <div className="header__line">
            <h1>
              Hi , I'm{" "}
              <TypeWriter typing={0.5} className="phbreak">
                Yaseer Manasiya
              </TypeWriter>
            </h1>
          </div>
          <div className="header__smallline">
            <p>Full Stack Web Developer</p>
          </div>
          <div className="socialbuttons">
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
          <div>
            <Link
              activeClass="active"
              to="downbtn"
              spy={true}
              smooth={true}
              duration={1500}
            >
              <ArrowDropDownCircle
                id="upbtn"
                fontSize="large"
                className="down_btn"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
