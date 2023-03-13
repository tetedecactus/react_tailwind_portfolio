import { useState, useEffect } from "react";
// import React from 'react';
// import { useTranslation } from 'react-i18next';

import images from "../module/Images";
import style from "../style/About.scss";
import "../style/LightDarkMode.scss";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.js";
function About() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  // const { t } = useTranslation();

  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className={`${style.container} ${style[theme]}`}>
      <div
        id="about"
        className="about-page container justify-center lg:relative mb-20 py-8 m-auto px-10 md:px-12 xl:px-6 h-full overflow-x-hidden"
      >
        <div className="flex flex-row flex-wrap sm:flex-wrap justify-center sm:ml-12 lg:ml-20 relative h-full">
          <img
            className="img-component-5 fixed"
            atl=""
            src={
              theme === "light"
                ? images.bg_component_light_5
                : theme === "dark"
                ? images.bg_component_dark_5
                : images.bg_component_CSM_polygon
            }
          ></img>
          <img
            className="img-component-6 absolute"
            atl=""
            src={
              theme === "light"
                ? images.bg_component_light_6
                : theme === "dark"
                ? images.bg_component_dark_6
                : images.bg_component_CSM_gy
            }
          ></img>
          <div className="lg:w-1/2 ">
            <span className="tagline">Welcome to my Portfolio</span>
            <img
              className="img-component-1 fixed "
              atl=""
              src={
                theme === "light"
                  ? images.bg_component_light_1
                  : theme === "dark"
                  ? images.bg_component_dark_1
                  : images.bg_component_CSM_green
              }
            ></img>
            <img
              className="img-component-2 absolute"
              atl=""
              src={
                theme === "light"
                  ? images.bg_component_light_2
                  : theme === "dark"
                  ? images.bg_component_dark_2
                  : images.bg_component_CSM_yellow
              }
            ></img>
            <img
              className="profil-img  justify-center items-center w-72 lg:hidden rounded-md my-8 z-1"
              src={images.olabrecq}
              alt="me"
            />
            <h1 className="quote my-6 flex-end font-extrabold relative lg:text-6xl">
              {`Hi I'm a Programming Student  / `}
              <span className="wrap">{text}</span>
            </h1>
            <p className="intro text-justify md:text-lg lg:text-xl w-auto h-auto relative z-10 ">
              {" "}
              Hello and welcome! My name is Olivier Labrecque-Lacasse, and I am
              a front-end web development intern. I am excited to be part of
              this team and have the opportunity to work on challenging projects
              that will allow me to develop my skills and gain real-world
              experience in the field. My background in 42 Quebec has provided
              me with a strong foundation in HTML, CSS, JavaScript, React,
              Wordpress and other web development technologies. I am eager to
              learn from experienced professionals and contribute my knowledge
              and creativity to the team. I am confident that this internship
              will not only help me grow as a developer but also make a valuable
              contribution to the organization. Thank you for the opportunity,
              and I look forward to working with you.
            </p>
            <div>
              <a href={"#contact"}>
                <button className="connect-button relative border font-bold rounded-md px-4 py-4 mt-6 mr-6">
                  Let's Connect
                </button>
              </a>
              <a
                href={
                  theme === "light"
                    ? images.cv_light_PDF
                    : theme === "dark"
                    ? images.cv_dark_PDF
                    : images.cv_csm_PDF
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="connect-button relative z-1 border font-bold rounded-md px-4 py-4 mt-6">
                  DOWNLOAD C.V
                </button>
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex items-center justify-center px-6">
            <img
              className="profil-img  rounded-md "
              id="profile-img-1"
              src={images.olabrecq}
              alt="me"
              width="450"
              height="450"
            />
          </div>
        </div>
      </div>
      <img
        className="img-component-3 fixed"
        atl=""
        src={
          theme === "light"
            ? images.bg_component_light_3
            : theme === "dark"
            ? images.bg_component_dark_3
            : images.bg_component_CSM_triangle
        }
      ></img>
      <img
        className="img-component-4 fixed"
        atl=""
        src={
          theme === "light"
            ? images.bg_component_light_4
            : theme === "dark"
            ? images.bg_component_dark_4
            : images.bg_component_CSM_line
        }
      ></img>
    </section>
  );
}

export default About;
