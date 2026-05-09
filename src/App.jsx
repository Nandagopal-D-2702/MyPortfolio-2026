import { Routes, Route } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Home from '@/pages/Home'
import Projects from '@/pages/Projects'
import Blog from '@/pages/Blog'
import Vlogs from '@/pages/Vlogs'

function App() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '56px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/vlogs" element={<Vlogs />} />
        </Routes>
      </div>
    </>
  )
}

export default App

