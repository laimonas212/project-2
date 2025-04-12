import ProjectPage from '../../components/ProjectPage'
import projects from '../../components/Projects'

const project = projects.find(p => p.id === 'holistine-kosmetologija')

export default function HolistineKosmetoligija() {
    return project ? <ProjectPage project={project} /> : <p>Projektas nerastas</p>
}
