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
    const onScroll = () => setScrolled(window.scrollY > 40)
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
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 sm:pt-5"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          className={`max-w-5xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-5 h-14 sm:h-[3.75rem] rounded-2xl border transition-all duration-500 ${
            scrolled
              ? 'bg-[#0a0a12]/80 backdrop-blur-xl border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
              : 'bg-white/[0.03] backdrop-blur-md border-white/[0.06]'
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 shrink-0 group"
            onClick={handleLinkClick}
          >
            <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold font-display shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform">
              T
            </span>
            <span className="hidden sm:block text-white font-semibold font-display text-sm tracking-tight">
              Thaw Htoo Zin
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1 p-1 rounded-xl bg-white/[0.03]">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 bg-white/[0.08] rounded-lg border border-white/[0.06]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-[0_0_24px_rgba(139,92,246,0.35)] transition-shadow"
            >
              Hire me
            </a>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <span className={`w-5 h-0.5 bg-white rounded transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-5 h-0.5 bg-white rounded transition-all ${isMenuOpen ? 'opacity-0 scale-0' : ''}`} />
              <span className={`w-5 h-0.5 bg-white rounded transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              className="absolute top-24 left-4 right-4 rounded-2xl border border-white/[0.08] bg-[#0a0a12]/95 backdrop-blur-xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 32 }}
            >
              <div className="p-2">
                {NAV_ITEMS.map((item, i) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                      activeSection === item.id
                        ? 'bg-purple-500/15 text-white'
                        : 'text-gray-300 hover:bg-white/[0.04]'
                    }`}
                  >
                    <span className="text-xs text-purple-400 font-mono w-5">
                      0{i + 1}
                    </span>
                    {item.label}
                  </motion.a>
                ))}
              </div>
              <div className="px-4 py-4 border-t border-white/[0.06] flex items-center justify-between">
                <p className="text-xs text-gray-500">
                  Member of{' '}
                  <a href="https://protechmm.com/" className="text-amber-400 hover:text-amber-300">
                    ProTechMM 👑
                  </a>
                </p>
                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                >
                  Hire me
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
