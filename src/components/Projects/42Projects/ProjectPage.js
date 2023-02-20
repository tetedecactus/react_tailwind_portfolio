import projects from "./ProjectObj";
import ProjectCard from "./ProjectCard";

function ProjectPage() {
	return (
		<div>
			<h2>42 projects</h2>
			<p className="text-[#6b7891] items-center text-justify w-2/4 ">Les projet fait a  42 Quebec sont des projets est développée par une équipe
			 pédagogique qualifiée, de sorte à permettre une courbe d'apprentissage en 
			 progression constante. Certains projets sont obligatoires alors que d'autres 
			 sont au choix, selon les ambitions et intérêts de chacun(e). Certains sont 
			 communs à tous les campus du Réseau 42 alors qu'il est possible de retrouver 
			 des projets qui correspondent à la réalité du marché du travail local.
 
			Compétences développées : Autonomie, organisation, pensée critique.
			</p>
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