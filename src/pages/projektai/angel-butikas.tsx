import ProjectPage from '../../components/ProjectPage'
import projects from '../../components/Projects'

const project = projects.find(p => p.id === 'angel-butikas')

export default function Angelbutikas() {
  return project ? <ProjectPage project={project} /> : <p>Projektas nerastas</p>
}
