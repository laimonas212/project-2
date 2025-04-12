import ProjectPage from '../../components/ProjectPage'
import projects from '../../components/Projects'

const project = projects.find(p => p.id === 'topstone')

export default function Topstone() {
  return project ? <ProjectPage project={project} /> : <p>Projektas nerastas</p>
}
