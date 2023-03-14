import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState, useEffect } from "react";
import "../../style/Project.scss";
import "react-tabs/style/react-tabs.css";
import ProjectPage from "./42Projects/ProjectPage";

export default function ProjectTabs() {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((angle) => angle + 1);
    }, 10);

    return () => clearInterval(interval);
  }, []);
  return (
    <section id="projects" className="project-tabs-page h-auto m-auto overflow-visible">
      <div className="container  lg:py-16 px-16 mx-auto  overflox-visible relative ">
        <h2 className="projects-title  my-20 text-6xl font-extrabold text-center">
          My Projects
        </h2>
        <Tabs className="justify-center py-4">
          <TabList className="flex items-center justify-center">
            <Tab className="onglet-project text-2xl px-6 py-2 font-bold ">
              Projects 42
            </Tab>
            <Tab className="onglet-project text-2xl px-6 py-2 font-bold">
              Personnal Projects
            </Tab>
            <Tab className="onglet-project text-2xl px-6 py-2 font-bold">
              Free Lance Projects
            </Tab>
          </TabList>
          <TabPanel className="flex items-center text-xl font-bold justify-center">
            <p className="projects-text items-center text-justify px-20 py-12">
              Les projet fait a 42 Quebec sont des projets est développée par
              une équipe pédagogique qualifiée, de sorte à permettre une courbe
              d'apprentissage en progression constante. Certains projets sont
              obligatoires alors que d'autres sont au choix, selon les ambitions
              et intérêts de chacun(e). Certains sont communs à tous les campus
              du Réseau 42 alors qu'il est possible de retrouver des projets qui
              correspondent à la réalité du marché du travail local. Compétences
              développées : Autonomie, organisation, pensée critique.
            </p>
            <ProjectPage />
          </TabPanel>
          <TabPanel>
          <p className="project-intro  text-center">
          Currently, I am working on developing a mobile app using React Native
          and integrating it with Firebase. Additionally, I am studying
          algorithms and data structures to improve my problem-solving skills.{" "}
          </p>
          </TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    </section>
  );

  //   return (
  //     <div
  //       style={{
  //         width: "200px",
  //         height: "200px",
  //         backgroundColor: "red",
  //         transform: `rotate3d(1, 1, 1, ${angle}deg)`
  //       }}
  //     ></div>
  //   );
  // }

  // Dans cet exemple, la div est créée avec une largeur
  // et une hauteur de 200px, ainsi qu'une couleur de fond
  // rouge. La propriété transform est utilisée pour
  // appliquer la rotation sur la div, en utilisant la
  // fonction rotate3d() pour spécifier l'axe de rotation et l'angle de rotation.

  // La variable angle est initialisée à 0 en utilisant le
  // hook useState(), puis la méthode useEffect() est utilisée pour
  // mettre en place une boucle d'animation avec setInterval().
  //  À chaque itération de la boucle, l'angle est mis à jour avec
  //  la fonction setAngle(), ce qui déclenche une mise à jour de l'interface
  //  utilisateur avec la nouvelle rotation appliquée à la div.

  // Vous pouvez ajuster les propriétés CSS et les valeurs de la boucle
  // d'animation selon vos besoins pour obtenir l'apparence et le comportement souhaités.
}
