import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Animated hamburger icon with smooth transitions
  const Hamburger = ({ open }) => (
    <div className="w-6 h-6 flex flex-col justify-center items-center">
      <span className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ease-in-out ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
      <span className={`block h-0.5 w-6 bg-white rounded mt-1 transition-all duration-300 ease-in-out ${open ? 'opacity-0 scale-0' : ''}`}></span>
      <span className={`block h-0.5 w-6 bg-white rounded mt-1 transition-all duration-300 ease-in-out ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
    </div>
  )

  // Close menu on link click
  const handleLinkClick = () => setIsMenuOpen(false)

  const navItems = ['Home', 'About', 'Projects', 'Contact']

  return (
    <>
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand - Left */}
            <motion.div 
              className="flex-shrink-0"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a className="text-white text-xl font-bold hover:scale-105 transition-transform duration-300" href="#">Thaw Htoo Zin</a>
            </motion.div>

            {/* Desktop Navigation - Middle */}
            <motion.div 
              className="hidden md:block absolute left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-baseline space-x-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                    className="text-white hover:text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Member Text - Right */}
            <motion.div 
              className="hidden md:block flex-shrink-0"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-white">
                Member of <a href="https://protechmm.com/" className="relative inline-block text-yellow-400 hover:text-white transition-all duration-300 hover:scale-105">
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  ProTechMM
                  <span className="absolute top-0 -right-1 translate-x-1/2 -translate-y-1/2 text-lg rotate-45">👑</span>
                </a>
              </p>
            </motion.div>

            {/* Mobile menu button */}
            <motion.div 
              className="md:hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gray-300 focus:outline-none transition-colors duration-300 hover:scale-110"
                aria-label="Toggle menu"
              >
                <Hamburger open={isMenuOpen} />
              </button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation - Boxed Card Style */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: -20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 200, damping: 20 }}
            className="md:hidden fixed top-20 left-4 right-4 z-40 bg-black/80 backdrop-blur-xl rounded-2xl border border-purple-500/30 shadow-2xl"
            style={{ 
              boxShadow: '0 20px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(168,85,247,0.2), inset 0 1px 0 rgba(255,255,255,0.1)'
            }}
          >
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-purple-600/90 to-blue-600/90 rounded-t-2xl px-6 py-4 flex justify-between items-center">
              <h3 className="text-white text-lg font-bold">Menu</h3>
            </div>

            {/* Menu Content */}
            <div className="px-6 py-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                  onClick={handleLinkClick}
                  className="relative text-white hover:text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text block px-4 py-3 rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-purple-500/10 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item}
                  </span>
                </motion.a>
              ))}
              
              {/* Footer */}
              <motion.div 
                className="border-t border-purple-500/30 pt-4 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <p className="text-white/80 text-sm font-medium text-center">
                  Member of <a href="https://protechmm.com/" className="relative inline-block text-yellow-400 hover:text-white transition-all duration-300 group">
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                    ProTechMM
                    <span className="ml-1">👑</span>
                  </a>
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
