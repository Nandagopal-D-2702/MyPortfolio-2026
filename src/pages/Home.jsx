import Divider from '../components/ui/Divider'
import BlogList from '../features/blog/BlogList'
import Contact from '../features/contact/Contact'
import Experience from '../features/experience/Experience'
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
      <Experience />
      <Divider />
      <BlogList />
      <Divider />
      <VlogGallery />
      <Contact />
    </main>
  )
}

export default Home
