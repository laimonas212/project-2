import ProjectPage from "../../components/ProjectPage";
import projects from "../../components/Projects";

const project = projects.find((p) => p.id === "tradicine-virtuve");

export default function Tradicinevirtuve() {
	return project ? (
		<ProjectPage project={project} />
	) : (
		<p>Projektas nerastas</p>
	);
}
