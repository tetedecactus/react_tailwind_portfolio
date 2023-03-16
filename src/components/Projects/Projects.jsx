import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState, useEffect } from "react";
import "../../style/Project.scss";
import "react-tabs/style/react-tabs.css";
import ProjectPage from "./42Projects/ProjectPage";

function ProjectTabs() {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((angle) => angle + 1);
    }, 10);

    return () => clearInterval(interval);
  }, []);
  return (
    <section id="projects" className="project-tabs-page h-auto m-auto overflow-visible">
      <div className="container  lg:py-16 px-16 mx-auto  ml-12 overflox-visible relative ">
        <h2 className="projects-title  my-20 text-6xl font-extrabold text-center">
          My Projects
        </h2>
        <div className="project-div">
            <ProjectPage />
        </div>
      </div>
    </section>
  );
}

export default ProjectTabs;

{/* <p className="projects-text items-center text-justify px-20 py-12">
              Les projet fait a 42 Quebec sont des projets est développée par
              une équipe pédagogique qualifiée, de sorte à permettre une courbe
              d'apprentissage en progression constante. Certains projets sont
              obligatoires alors que d'autres sont au choix, selon les ambitions
              et intérêts de chacun(e). Certains sont communs à tous les campus
              du Réseau 42 alors qu'il est possible de retrouver des projets qui
              correspondent à la réalité du marché du travail local. Compétences
              développées : Autonomie, organisation, pensée critique.
            </p> */}