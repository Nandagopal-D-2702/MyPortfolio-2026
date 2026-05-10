import Divider from '../components/ui/Divider'
import BlogList from '../features/blog/BlogList'
import Hero from '../features/hero/Hero'
import ProjectGrid from '../features/projects/ProjectGrid'
import VlogGallery from '../features/vlogs/VlogGallery'

function Home() {
  return (
    <main>
      <Hero />
      <Divider />
      <ProjectGrid />
      <Divider />
      <BlogList />
      <Divider />
      <VlogGallery />
    </main>
  )
}

export default Home
