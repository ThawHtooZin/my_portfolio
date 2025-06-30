import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Hamburger icon animation
  const Hamburger = ({ open }) => (
    <div className="w-6 h-6 flex flex-col justify-center items-center relative">
      <motion.span
        className="block absolute h-0.5 w-6 bg-white rounded"
        animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{ left: 0, top: 6 }}
      />
      <motion.span
        className="block absolute h-0.5 w-6 bg-white rounded"
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
        style={{ left: 0, top: 12 }}
      />
      <motion.span
        className="block absolute h-0.5 w-6 bg-white rounded"
        animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{ left: 0, top: 18 }}
      />
    </div>
  )

  // Close menu on link click
  const handleLinkClick = () => setIsMenuOpen(false)

  const navItems = ['Home', 'About', 'Projects', 'Contact']

  return (
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
            <a className="text-white text-xl font-bold" href="#">Thaw Htoo Zin</a>
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
                  className="relative text-white hover:text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.4)] group hover:scale-105 hover:-translate-y-0.5 active:scale-95"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 opacity-0 group-hover:opacity-10 rounded-md transition-opacity duration-300"></span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-500 transition-all duration-500 group-hover:w-full"></span>
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
              Member of <a href="https://protechmm.com/" className="relative inline-block text-yellow-400 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-300 group">
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
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
              aria-label="Toggle menu"
            >
              <Hamburger open={isMenuOpen} />
            </button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.3, type: 'spring', stiffness: 200, damping: 20 }}
              className="md:hidden fixed left-0 right-0 top-16 px-2 pt-2 pb-3 space-y-3 sm:px-3 bg-black bg-opacity-70 backdrop-blur-xl rounded-b-2xl shadow-2xl border-b border-purple-700 z-40"
              style={{ boxShadow: '0 8px 32px 0 rgba(88, 28, 135, 0.25)' }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                  onClick={handleLinkClick}
                  className="relative text-white active:text-transparent bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text block px-3 py-4 rounded-md text-lg font-semibold transition-all duration-300 active:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] active:drop-shadow-[0_0_15px_rgba(59,130,246,0.4)] group active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 opacity-0 group-active:opacity-20 rounded-md transition-opacity duration-300"></span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-500 transition-all duration-300 group-active:w-full"></span>
                  {item}
                </motion.a>
              ))}
              <motion.div 
                className="border-t border-purple-700 pt-3 mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <p className="text-white text-base font-medium block px-3 py-2">
                  Member of <a href="https://protechmm.com/" className="relative inline-block text-yellow-400 active:text-white active:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50">
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-active:w-full"></span>
                    ProTechMM
                    <span className="absolute top-0 -right-1 translate-x-1/2 -translate-y-1/2 text-lg rotate-45">👑</span>
                  </a>
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
