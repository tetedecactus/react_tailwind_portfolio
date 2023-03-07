import { useState, useEffect } from "react";
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
        className="about-page container justify-center relative mb-20 py-8 min-h-full m-auto px-10 md:px-12 xl:px-6"
      >
        <div className="flex flex-row flex-wrap sm:flex-wrap justify-center sm:ml-12 lg:ml-20 relative">
		<img className="img-component-5 absolute" src={theme === 'light' ? images.bg_component_light_5 : theme === 'dark' ? images.bg_component_dark_5 : images.bg_component_CSM_polygon}></img>
		<img className="img-component-6 absolute" src={theme === 'light' ? images.bg_component_light_6 : theme === 'dark' ? images.bg_component_dark_6 : images.bg_component_CSM_gy}></img>
          <div className="lg:w-1/2">
            <span className="tagline">Welcome to my Portfolio</span>
			<img className="img-component-1 absolute" src={theme === 'light' ? images.bg_component_light_1 : theme === 'dark' ? images.bg_component_dark_1 : images.bg_component_CSM_green}></img>
			<img className="img-component-2 absolute" src={theme === 'light' ? images.bg_component_light_2 : theme === 'dark' ? images.bg_component_dark_2 : images.bg_component_CSM_yellow}></img>
            <img
              className="profil-img flex-grow justify-center items-center rounded-md lg:hidden my-8 z-1"
              src={images.olabrecq}
              alt="me"
              width="350"
              height="350"
            />
            <h2 className="quote mt-20 mx-8 flex-end font-extrabold relative z-10 text-6xl">
              {`Hi I'm a Programming Student  / `}
              <span className="wrap">{text}</span>
            </h2>
            <p className="intro text-justify text-xl relative z-10">
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
              <button className="connect-button relative border z-10 font-bold rounded-md px-4 py-4 mt-6 mr-6">
                Let's Connect
              </button>
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
              className="profil-img  rounded-md"
              src={images.olabrecq}
              alt="me"
              width="450"
              height="450"
            />
          </div>
        </div>
      </div>
		  <img className="img-component-3 absolute" src={theme === 'light' ? images.bg_component_light_3 : theme === 'dark' ? images.bg_component_dark_3 : images.bg_component_CSM_triangle}></img>
		  <img className="img-component-4 absolute" src={theme === 'light' ? images.bg_component_light_4 : theme === 'dark' ? images.bg_component_dark_4 : images.bg_component_CSM_line}></img>
    </section>
  );
  //   return (
  //     <div className={`${style.container} ${style[theme]}`}>
  //       <div id="about" className="min-h-full py-8 px-10 about-page">
  //         <div className="container m-auto px-6 md:px-12 xl:px-6">
  //           <div className="md:1/12 lg:1/12 mb:20">
  //             <p className="iam mt-5 sm:text-start md:text-center font-bold text-sm">
  //               I am
  //             </p>
  //           </div>
  //           <div className="about-card">
  //             <div className="about-card space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
  //               <div className="md:7/12 lg:w-8/12">
  //                 <h2 className="name z-10 text-2xl font-bold md:text-4xl md:absolute lg:absolute">
  //                   Olivier Labrecque <br />
  //                   Lacasse
  //                 </h2>
  //               </div>
  //               <div className="md:1/12 lg:w-6/12 justify-center">
  //                 <img
  //                   className="profil-img rounded-md sticky"
  //                   src={images.olabrecq}
  //                   alt="me"
  //                   width="350"
  //                   height="350"
  //                 />
  //               </div>
  //             </div>
  //             <div>
  //               <h2 className="quote mt-20 mx-8 lg:ml-40 sm:text-center flex-end font-extrabold text-4xl">
  //                 {`Programming Student  & `}
  //                 <span className="wrap">{text}</span>
  //               </h2>
  //               <div className="description xsm:hidden lg:px-24 md:px-12 text-justify">
  //                 <p>
  //                   {" "}
  //                   Hello and welcome! My name is Olivier Labrecque-Lacasse, and I
  //                   am a front-end web development intern. I am excited to be part
  //                   of this team and have the opportunity to work on challenging
  //                   projects that will allow me to develop my skills and gain
  //                   real-world experience in the field. My background in 42 Quebec
  //                   has provided me with a strong foundation in HTML, CSS,
  //                   JavaScript, React, Wordpress and other web development
  //                   technologies. I am eager to learn from experienced
  //                   professionals and contribute my knowledge and creativity to
  //                   the team. I am confident that this internship will not only
  //                   help me grow as a developer but also make a valuable
  //                   contribution to the organization. Thank you for the
  //                   opportunity, and I look forward to working with you.
  //                 </p>
  // 				{/* <a href={(theme === 'light' ? images.cv_light_PDF : theme === 'dark' ? images.cv_dark_PDF : images.cv_csm_PDF)} target="_blank" rel="noopener noreferrer">
  // 					<button>DOWNLOAD C.V</button>
  // 				</a> */}
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
}

export default About;
