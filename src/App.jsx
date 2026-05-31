import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  return (
    <div className="overflow-x-hidden bg-[#0c1220] min-h-screen">
      <Hero>
        <Navbar />
      </Hero>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
