import ProjectPage from '../../components/ProjectPage'
import projects from '../../components/Projects'

const project = projects.find(p => p.id === 'lithuan')

export default function Lithuan() {
    return project ? <ProjectPage project={project} /> : <p>Projektas nerastas</p>
}
