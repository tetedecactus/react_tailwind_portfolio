import projects from "./ProjectObj";
import ProjectCard from "./ProjectCard";
import images from "../../../module/Images"

function ProjectPage() {
	return (
		<section>
			<div className="text-center items-center pt-12 ">
				<div className="flex justify-center py-12">

					{/* <img src={images.fdf} width={500} height={400}></img> */}

				{
					projects.map((project, index) => {
						return (
							<ProjectCard
							key={index}
							{...project}
							/>
							)
						})
					}
				</div>
			</div>
		</section>
	);
}

export default ProjectPage;