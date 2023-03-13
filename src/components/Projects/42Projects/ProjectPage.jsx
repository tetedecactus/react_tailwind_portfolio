import { useState } from "react";
import projects from "./ProjectObj";
import ProjectCard from "./ProjectCard";
import images from "../../../module/Images";
import Carousel from "../Carousel";

function ProjectPage() {
  const [index, setIndex] = useState(0);
  return (
    <section>
      <div className="pt-12 ">
        <div className="flex justify-center py-12">
          {/* <Carousel autoSlide={false} autoSlideInterval={1000}> */}
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectPage;
