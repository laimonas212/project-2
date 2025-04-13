import ProjectPage from '../../components/ProjectPage'
import projects from '../../components/Projects'

const project = projects.find(p => p.id === 'archi-grupe')

export default function ArchiGrupe() {
    return project ? <ProjectPage project={project} /> : <p>Projektas nerastas</p>
}
