import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import cuteguy from '../assets/cuteguy.png'

function About() {
  const [activeTab, setActiveTab] = useState('about')
  const [isAstronautHovered, setIsAstronautHovered] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  // Check if component is in view and trigger animation once
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('about')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const skills = [
    { name: 'Laravel', level: 98, color: 'from-rose-400 to-pink-600' },
    { name: 'PHP', level: 90, color: 'from-indigo-400 to-indigo-600' },
    { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Flutter', level: 80, color: 'from-cyan-400 to-cyan-600' },
    { name: 'React', level: 80, color: 'from-blue-400 to-blue-600' },
    { name: 'Python', level: 72, color: 'from-blue-500 to-blue-700' }
  ]

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'ProTech MM (Family Business)',
      period: '2023 - Present',
      description: 'Built internal systems and public websites for clients using Laravel, Flutter, and Firebase. Led full-stack development and deployed to cloud servers.',
      tech: ['Laravel', 'Flutter', 'Firebase', 'Tailwind CSS']
    },
    {
      title: 'Software Developer (Remote)',
      company: 'Digital Genius (Thailand)',
      period: '2025 - Present',
      description: 'Solo dev role for crypto/forex alert app. Built Flutter frontend and secure Python backend with WebSocket support. Real-time alert system in production.',
      tech: ['Flutter', 'Python', 'Supabase', 'WebSockets']
    },
    {
      title: 'Web Developer',
      company: 'Freelance Clients',
      period: '2023 - 2025',
      description: 'Delivered responsive and modern portfolio, company, and service websites. Specialized in animated UI/UX with Tailwind and React.',
      tech: ['React', 'Tailwind CSS', 'JavaScript', 'Figma']
    },
    {
      title: 'Intern Developer',
      company: 'Shwe Phone Hein Agency',
      period: '2021 - 2022',
      description: 'Helped design and deploy an agency website. Worked with legacy PHP systems and migrated parts to Laravel.',
      tech: ['PHP', 'Laravel', 'MySQL']
    }
  ]

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-full p-2">
            {['about', 'skills', 'experience'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content with AnimatePresence */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'about' && (
              <motion.div
                key="about"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                {/* Left Side - Interactive Astronaut Image */}
                <div className="relative">
                  <div className="relative z-10">
                    <motion.img
                      src={cuteguy}
                      alt="Thaw Htoo Zin"
                      className="w-full max-w-md mx-auto rounded-2xl shadow-2xl cursor-pointer"
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: isAstronautHovered ? [0, -5, 5, -5, 0] : 0
                      }}
                      transition={{ 
                        y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                        rotate: { duration: 0.5, ease: "easeInOut" }
                      }}
                      onHoverStart={() => setIsAstronautHovered(true)}
                      onHoverEnd={() => setIsAstronautHovered(false)}
                      whileHover={{ 
                        scale: 1.05,
                        filter: "brightness(1.1)",
                        boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    />
                    {/* Floating particles around astronaut */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                          style={{
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                          }}
                          animate={{
                            x: [
                              Math.cos((i * 45) * Math.PI / 180) * 120,
                              Math.cos((i * 45 + 360) * Math.PI / 180) * 120
                            ],
                            y: [
                              Math.sin((i * 45) * Math.PI / 180) * 120,
                              Math.sin((i * 45 + 360) * Math.PI / 180) * 120
                            ],
                            opacity: [0.3, 1, 0.3],
                            scale: [0.8, 1.2, 0.8]
                          }}
                          transition={{
                            x: { duration: 8, repeat: Infinity, ease: "linear" },
                            y: { duration: 8, repeat: Infinity, ease: "linear" },
                            opacity: { duration: 3, repeat: Infinity, delay: i * 0.4 },
                            scale: { duration: 2, repeat: Infinity, delay: i * 0.3 }
                          }}
                        />
                      ))}
                      
                      {/* Additional smaller particles for more cosmic effect */}
                      {[...Array(12)].map((_, i) => (
                        <motion.div
                          key={`small-${i}`}
                          className="absolute w-1 h-1 bg-blue-400 rounded-full"
                          style={{
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                          }}
                          animate={{
                            x: [
                              Math.cos((i * 30) * Math.PI / 180) * 80,
                              Math.cos((i * 30 + 360) * Math.PI / 180) * 80
                            ],
                            y: [
                              Math.sin((i * 30) * Math.PI / 180) * 80,
                              Math.sin((i * 30 + 360) * Math.PI / 180) * 80
                            ],
                            opacity: [0.2, 0.8, 0.2],
                            scale: [0.5, 1, 0.5]
                          }}
                          transition={{
                            x: { duration: 12, repeat: Infinity, ease: "linear" },
                            y: { duration: 12, repeat: Infinity, ease: "linear" },
                            opacity: { duration: 4, repeat: Infinity, delay: i * 0.2 },
                            scale: { duration: 3, repeat: Infinity, delay: i * 0.2 }
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl transform rotate-6 scale-105 opacity-20"></div>
                </div>

                {/* Right Side - Content */}
                <div className="space-y-6">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-3xl font-bold text-white"
                  >
                    Passionate Developer & Problem Solver
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-gray-300 text-lg leading-relaxed"
                  >
                    I'm a dedicated software developer with a passion for creating innovative solutions 
                    that make a difference. With expertise in full-stack development, I love turning 
                    complex problems into simple, beautiful, and intuitive solutions.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-gray-300 text-lg leading-relaxed"
                  >
                    When I'm not coding, you can find me exploring new technologies, contributing to 
                    open-source projects, or sharing knowledge with the developer community. I believe 
                    in continuous learning and staying up-to-date with the latest industry trends.
                  </motion.p>

                  {/* Quick Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="grid grid-cols-3 gap-4 pt-6"
                  >
                    {[
                      { number: '2+', label: 'Years Experience' },
                      { number: '4+', label: 'Projects Completed' },
                      { number: '98%', label: 'Client Satisfaction' }
                    ].map((stat, index) => (
                      <motion.div 
                        key={index} 
                        className="text-center"
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            )}

            {activeTab === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="space-y-8"
              >
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-white mb-4">Technical Skills</h3>
                  <p className="text-gray-300">My expertise spans across various technologies and frameworks</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-colors duration-300"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={hasAnimated ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1,
                            delay: index * 0.1 + 0.5,
                            type: "spring",
                            stiffness: 120,
                            damping: 10
                          }}
                          className={`h-3 bg-gradient-to-r ${skill.color} rounded-full`}
                          style={{ minWidth: '1.5rem' }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Additional Skills */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mt-12"
                >
                  <h4 className="text-2xl font-bold text-white mb-6 text-center">Other Skills</h4>
                  <div className="flex flex-wrap justify-center gap-4">
                    {['Firebase', 'Tailwind CSS', 'MySQL', 'SQLite', 'Figma', 'Postman', 'Git', 'Next.js', 'REST APIs', 'Framer Motion', 'Node.js'].map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-4 py-2 bg-gray-700 bg-opacity-50 rounded-full text-gray-300 text-sm border border-gray-600 hover:border-purple-500 transition-colors duration-300 cursor-pointer"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}

            {activeTab === 'experience' && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="space-y-8"
              >
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-white mb-4">Professional Experience</h3>
                  <p className="text-gray-300">My journey in software development</p>
                </div>

                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="relative"
                    >
                      {/* Timeline Line */}
                      {index < experiences.length - 1 && (
                        <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-purple-500 to-blue-500"></div>
                      )}
                      
                      <div className="flex items-start space-x-6">
                        {/* Timeline Dot */}
                        <motion.div 
                          className="relative z-10 flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.2 }}
                          animate={{ 
                            boxShadow: ["0 0 0 0 rgba(168, 85, 247, 0.4)", "0 0 0 10px rgba(168, 85, 247, 0)"],
                          }}
                          transition={{
                            boxShadow: {
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }}
                        >
                          <div className="w-4 h-4 bg-white rounded-full"></div>
                        </motion.div>

                        {/* Content */}
                        <motion.div 
                          className="flex-1 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-colors duration-300"
                          whileHover={{ scale: 1.02, y: -5 }}
                        >
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                            <span className="text-purple-400 font-medium">{exp.period}</span>
                          </div>
                          <p className="text-blue-400 font-medium mb-3">{exp.company}</p>
                          <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.tech.map((tech) => (
                              <motion.span
                                key={tech}
                                whileHover={{ scale: 1.1 }}
                                className="px-3 py-1 bg-gray-700 bg-opacity-50 rounded-full text-sm text-gray-300 border border-gray-600 hover:border-purple-500 transition-colors duration-300"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function AnimatedCounter({ value, delay }) {
  const [display, setDisplay] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    const duration = 1000; // ms
    const startTime = performance.now() + delay * 1000;
    let raf;
    function animate(now) {
      if (now < startTime) {
        raf = requestAnimationFrame(animate);
        return;
      }
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setDisplay(Math.round(progress * value));
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    }
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [value, delay]);
  return (
    <span className="ml-2 text-white font-bold align-middle">{display}%</span>
  );
}

export default About 