import React from 'react'
import { motion } from 'framer-motion'
import protechmm from '../assets/projects/protechmm.png'
import shwebhonehein from '../assets/projects/shwebhonehein.png'
import asokabuddhiststudies from '../assets/projects/asokabuddhiststudies.png'
import digitalgeniusmobileapp from '../assets/projects/digitalgeniusmobileapp.jpg'

const projects = [
  {
    title: 'ProTechMM Official Website',
    description: 'Corporate site for a tech training and web solutions company. Includes course listing, contact forms, dynamic service modules, and responsive UI.',
    image: protechmm,
    tech: ['Laravel', 'Tailwind CSS', 'MySQL'],
    live: 'https://protechmm.com',
    github: ''
  },
  {
    title: 'Shwe Phone Hein Agency',
    description: 'Recruitment agency website that enables Burmese job seekers to apply for overseas positions. One of the best recruitment agency in Myanmar.',
    image: shwebhonehein,
    tech: ['Laravel', 'JavaScript', 'Bootstrap'],
    live: 'https://shwebhonehein.com',
    github: 'https://github.com/ThawHtooZin/Shwe-Bhone-Hein'
  },
  {
    title: 'Asoka Buddhist Studies',
    description: 'A Buddhist education web application built for students to study and learn about Buddhism. Features a dashboard for admin control and Forum Features for discussions and even online meetings and at last but not least, a Video based learning system.',
    image: asokabuddhiststudies,
    tech: ['Laravel', 'Livewire', 'Tailwind CSS', 'MySQL'],
    live: 'https://asokabuddhiststudies.com',
    github: 'https://github.com/ThawHtooZin/asoka'
  },
  {
    title: 'Digital Genius E-Library App',
    description: 'The Digital Genius E-Library is a feature-rich mobile app that allows users to read eBooks(Epub), listen to audiobooks, and download content for offline access. It supports both free and paid digital books, with a smooth UX. Built with a focus on performance and accessibility',
    image: digitalgeniusmobileapp,
    tech: ['Flutter', 'Firebase', 'Hive', 'Supabase'],
    live: '',
    github: 'https://github.com/waiyan112/digitalgeinus-apk'
  }
]

function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-blue-950 via-purple-950 to-gray-900 py-24 px-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          My <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto rounded-full"></div>
      </motion.div>
      {/* Masonry Grid */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="[column-count:1] sm:[column-count:2] lg:[column-count:3] [column-gap:2rem]">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="mb-8 break-inside-avoid bg-gray-900 bg-opacity-80 rounded-2xl shadow-xl border border-purple-800 hover:border-blue-500 transition-colors duration-300 overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <div className="relative h-48 md:h-56 bg-gray-800 flex items-center justify-center rounded-t-2xl overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-contain w-full h-full transition-transform duration-500 hover:scale-105 drop-shadow-lg" 
                  style={{ background: 'rgba(30,41,59,0.7)' }}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-gray-800 bg-opacity-60 rounded-full text-sm text-purple-300 border border-purple-700">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-[0_0_20px_5px_rgba(34,197,94,0.3)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                      View Live
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-[0_0_20px_5px_rgba(139,92,246,0.3)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                      View GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 