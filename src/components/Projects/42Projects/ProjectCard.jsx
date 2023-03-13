import images from "../../../module/Images";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext.js";
import "../../../style/42Projects/ProjectCard.scss"

function ProjectCard({ title, imgUrl, description, language, lien }) {
  const { theme } = useContext(ThemeContext);

  return (
    <section className="container flex overflow-x-hidden">
      <div className="mb-12">
        <div className="justify-start">
          <h2 className="project-title text-4xl font-bold justify-start mb-6">{title}</h2>
        </div>
        <div className="">
          <img src={imgUrl} />
        </div>
        <div className="rounded-md h-auto absolute  mt-12 ml-12 ">
          <p className="project-description font-bold  text-justify p-6">
            {description}
          </p>
        </div>
        <div>
          <p className="project-techno fixed">
            {language}
          </p>
        </div>
        <div className="flex">
          <a href={lien}>
            <img
              className=" hover:translate-x-1.5"
              width={28}
              src={
                theme === "light"
                  ? images.githubicons_l
                  : theme === "dark"
                  ? images.githubicons_d
                  : images.githubicons_csm
              }
              alt="github"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
