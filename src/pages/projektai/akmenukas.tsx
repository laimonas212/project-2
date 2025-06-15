import ProjectPage from '../../components/ProjectPage'
import projects from '../../components/Projects'

const project = projects.find(p => p.id === 'akmenukas')

export default function Akmenukas() {
  return project ? <ProjectPage project={project} /> : <p>Projektas nerastas</p>
}
