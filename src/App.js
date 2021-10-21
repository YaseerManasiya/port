import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Project from "./components/Projects/Project";
import Techskill from "./components/Techskills/Techskill";
// import Loaderfile from "./Loaderfile";
// import Loader from "./Loaderfile";
import "./App.css";

function App() {
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => setSpinner(false), 2000);
  }, []);
  return (
    <>
      {!spinner ? (
        <div className="App">
          <Header />
          <div className="backgroundcolor">
            <Techskill />
            <Project />
            <About />
            <Contact />
          </div>
          <Footer />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            background: "linear-gradient(#e66465, #9198e5",
          }}
        >
          <Loader
            type="Bars"
            className="loaderanimation"
            color="gold"
            height={100}
            width={100}
            timeout={10000} //3 secs
          />
        </div>
      )}
    </>
  );
}

export default App;
