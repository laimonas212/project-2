import ProjectPage from "../../components/ProjectPage";
import projects from "../../components/Projects";

const project = projects.find((p) => p.id === "lzspa");

export default function LzspaPage() {
	return project ? (
		<ProjectPage project={project} />
	) : (
		<p>Projektas nerastas</p>
	);
}
