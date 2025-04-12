import ProjectPage from '../../components/ProjectPage'
import projects from '../../components/Projects'

const project = projects.find(p => p.id === 'veselovaite')

export default function Veselovaite() {
  return project ? <ProjectPage project={project} /> : <p>Projektas nerastas</p>
}
