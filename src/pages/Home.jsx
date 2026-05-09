import Divider from '../components/ui/Divider'
import BlogList from '../features/blog/BlogList'
import Hero from '../features/hero/Hero'
import ProjectGrid from '../features/projects/ProjectGrid'

function Home() {
  return (
    <main>
      <Hero />
      <Divider />
      <ProjectGrid />
      <Divider />
      <BlogList />
    </main>
  )
}

export default Home
