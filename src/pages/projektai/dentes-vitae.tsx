import ProjectPage from '../../components/ProjectPage'
import projects from '../../components/Projects'

const project = projects.find(p => p.id === 'dentes-vitae')

export default function dentesVitae() {
  return project ? <ProjectPage project={project} /> : <p>Projektas nerastas</p>
}
