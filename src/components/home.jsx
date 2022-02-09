import "./styles/home.css";
import Hokd1 from "../assets/pics/hokd1.png";
import Hokd2 from "../assets/pics/hokd2.png";
import Hokd3 from "../assets/pics/hokd3.png";
import HokM from "../assets/pics/hokm.jpeg";
import { useState, useEffect } from "react";
import { Navbar } from "./navbar";
export const Home = () => {
  const [hokD, setHokD] = useState();
  let hokDarr = [Hokd1, Hokd2, Hokd3];
  useEffect(() => {
    let i = 0;
    let id = setInterval(() => {
      setHokD(hokDarr[i]);
      i++;
      i = i % 3;
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <Navbar color={"white"} />
      <section className="home-section">
        <div className="color-canvas">
          <iframe
            title="gradient"
            className="gradient"
            src="https://unruffled-khorana-e326a0.netlify.app/"
            frameBorder="0"
            width="90%"
            height="100%"
          ></iframe>
          <div className="intro">
            <div className="hero-text">
              <h1>Hello There..</h1>
              <h1>
                I'm <span className="gradient-text">Jaskaran</span>{" "}
              </h1>
              <h1>Full Stack Web Developer</h1>
            </div>
            <div className="desc-text">
              <p>
                I Love to combine the worlds of logic and creative design to
                make eye-catching, accessible, and user-friendly websites and
                applications. Looking forward to working in an organization that
                offers opportunities and helps in the overall growth and
                development.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section2">
        <div className="section2-content">
          <h1>HokmakeUp clone</h1>
          <div className="project1">
            <div className="hok-desktop">
              <img src={hokD} alt="" />
            </div>
            <div className="hok-mobile">
            <img src={HokM} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
