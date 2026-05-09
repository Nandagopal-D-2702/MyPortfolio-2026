import Divider from '../components/ui/Divider'
import Hero from '../features/hero/Hero'
import ProjectGrid from '../features/projects/ProjectGrid'

function Home() {
  return (
    <main>
      <Hero />
      <Divider />
      <ProjectGrid />
    </main>
  )
}

export default Home
