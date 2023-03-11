import images from "../../../module/Images"
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext.js";

function ProjectCard({ title, imgUrl, description, language, lien }) {
	const { theme } = useContext(ThemeContext);

  return (
    <diV className="flex justify-center">
      <div className="mb-72">
        <div>
          <h2 className=" text-4xl">{title}</h2>
        </div>
        <div className="flex">
          <div>
            <img
              className=""
              src={imgUrl}
              width={950}
              alt="project icons"
            />
          </div>
          <div className="w-96 rounded-md h-auto lg:absolute left-1/2 mt-12 ml-12 ">
            {/* <p className=" text-justify">{description}</p> */}
          </div>
        </div>
        <div>
          {/* <p className="">{language}</p> */}
        </div>
        <div className="justify-start flex">
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
    </diV>
  );
}

export default ProjectCard;
