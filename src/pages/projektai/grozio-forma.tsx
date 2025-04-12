import ProjectPage from '../../components/ProjectPage'
import projects from '../../components/Projects'

const project = projects.find(p => p.id === 'grozio-forma')

export default function Grozioforma() {
  return project ? <ProjectPage project={project} /> : <p>Projektas nerastas</p>
}
