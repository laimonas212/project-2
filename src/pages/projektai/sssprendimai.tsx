import ProjectPage from "../../components/ProjectPage";
import projects from "../../components/Projects";

const project = projects.find((p) => p.id === "sssprendimai");

export default function Sssprendimai() {
	return project ? (
		<ProjectPage project={project} />
	) : (
		<p>Projektas nerastas</p>
	);
}
