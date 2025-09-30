import ProjectPage from "../../components/ProjectPage";
import projects from "../../components/Projects";

const project = projects.find((p) => p.id === "gabikami");

export default function Gavorkaart() {
	return project ? (
		<ProjectPage project={project} />
	) : (
		<p>Projektas nerastas</p>
	);
}
