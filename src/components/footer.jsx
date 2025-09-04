import React from 'react'
import { motion } from 'framer-motion'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/ThawHtooZin',
      icon: '🐙',
      color: 'hover:text-gray-400'
    },
    {
      name: 'Email',
      url: 'mailto:thawhtoozin200811@gmail.com',
      icon: '📧',
      color: 'hover:text-red-400'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/ThawHtooZinTommy',
      icon: '📱',
      color: 'hover:text-blue-500'
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="bg-gradient-to-t from-gray-900 via-purple-950 to-blue-950 border-t border-purple-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg font-bold">T</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Thaw Htoo Zin</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Full-stack developer passionate about creating innovative web solutions. 
              Let's build something amazing together!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-purple-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-white mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📧</span>
                </div>
                <a 
                  href="mailto:thawhtoozin200811@gmail.com" 
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                  thawhtoozin200811@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📍</span>
                </div>
                <span className="text-gray-300">Yangon, Myanmar</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">⏰</span>
                </div>
                <span className="text-gray-300">Available for projects</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-purple-800 bg-gray-900 bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-gray-400 text-sm"
            >
              © {currentYear} Thaw Htoo Zin. All rights reserved.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex space-x-6 text-sm"
            >
              <span className="text-gray-400">Built with ❤️ using React & Tailwind </span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 