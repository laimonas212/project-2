import ProjectPage from "../../components/ProjectPage";
import projects from "../../components/Projects";

const project = projects.find((p) => p.id === "smaragdo-uostas");

export default function Smaragdouostas() {
	return project ? (
		<ProjectPage project={project} />
	) : (
		<p>Projektas nerastas</p>
	);
}
