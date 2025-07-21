import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <Hero >
        <Navbar />
      </Hero>
      {/* About Section */}
      <About />
      {/* Projects Section */}
      <Projects />
      {/* Contact Section */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
