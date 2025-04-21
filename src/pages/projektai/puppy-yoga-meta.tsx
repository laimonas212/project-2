import ProjectPage from '../../components/ProjectPage'
import projects from '../../components/Projects'

const project = projects.find(p => p.id === 'puppy-yoga-meta')

export default function PuppyYogaMeta() {
  return project ? <ProjectPage project={project} /> : <p>Projektas nerastas</p>
}
