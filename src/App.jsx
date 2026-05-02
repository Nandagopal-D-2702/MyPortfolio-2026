import Button from './components/ui/Button'
import Badge from './components/ui/Badge'
import Card from './components/ui/Card'
import { Heading, Label, Text } from './components/ui/Typography'
import Divider from './components/ui/Divider'
import Navbar from './components/layout/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Vlogs from './pages/Vlogs'

function App() {
  return (
    <>
      {/* Navbar e=renders on every page */}
      <Navbar />

      {/* Main content - offset by navbar height */}
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
