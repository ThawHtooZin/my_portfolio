import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '#' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => item.id).filter((id) => id !== 'home')
    const observers = sections.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      observer.observe(el)
      return observer
    })

    const onTop = () => {
      if (window.scrollY < 120) setActiveSection('home')
    }
    window.addEventListener('scroll', onTop, { passive: true })

    return () => {
      observers.forEach((o) => o?.disconnect())
      window.removeEventListener('scroll', onTop)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  const handleLinkClick = () => setIsMenuOpen(false)

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <nav
          className={`max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-[4.25rem] border-b transition-all duration-400 ${
            scrolled
              ? 'bg-[#0c1220]/95 backdrop-blur-sm border-[rgba(184,146,74,0.35)] shadow-[0_4px_24px_rgba(0,0,0,0.2)]'
              : 'bg-transparent border-[rgba(184,146,74,0.15)]'
          }`}
        >
          <a href="#" className="flex items-center gap-3 shrink-0 group" onClick={handleLinkClick}>
            <span className="font-display text-xl sm:text-2xl text-[#f5f0e8] tracking-wide group-hover:text-[#d4b978] transition-colors">
              T<span className="text-[#b8924a]">.</span> Htoo Zin
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`relative py-1 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
                  activeSection === item.id
                    ? 'text-[#d4b978]'
                    : 'text-[#9a958a] hover:text-[#e8e4dc]'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-[1.35rem] left-0 right-0 h-px bg-[#b8924a]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden sm:inline-flex btn-heritage-primary !py-2 !px-5 !text-[0.7rem]">
              Inquire
            </a>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-px bg-[#d4b978] transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-px bg-[#d4b978] transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-px bg-[#d4b978] transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-[#0c1220]/90" onClick={() => setIsMenuOpen(false)} />
            <motion.div
              className="absolute top-16 left-0 right-0 bg-[#141c2e] border-b border-[rgba(184,146,74,0.3)] px-6 py-8"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            >
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`block py-3 text-sm uppercase tracking-[0.2em] border-b border-[rgba(184,146,74,0.1)] ${
                    activeSection === item.id ? 'text-[#d4b978]' : 'text-[#9a958a]'
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="btn-heritage-primary w-full mt-6 text-center"
              >
                Inquire
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
