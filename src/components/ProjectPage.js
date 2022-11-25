import projects from "./ProjectObj";
import ProjectCard from "./ProjectCard";

function ProjectPage() {
	return (
		<div>
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
	);
}

export default ProjectPage;