import ProjectPage from '../../components/ProjectPage'
import projects from '../../components/Projects'

const project = projects.find(p => p.id === 'provanso-svajos')

export default function Provansosvajos() {
  return project ? <ProjectPage project={project} /> : <p>Projektas nerastas</p>
}
