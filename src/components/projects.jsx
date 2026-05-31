import React, { useState, useEffect } from 'react'
import {
  motion,
  AnimatePresence,
} from 'framer-motion'
import learningprotechmm from '../assets/projects/learningprotechmm.png'
import shwebhonehein from '../assets/projects/shwebhonehein.png'
import asokabuddhiststudies from '../assets/projects/asokabuddhiststudies.png'
import digitalgeniusmobileapp from '../assets/projects/digitalgeniusmobileapp.jpg'
import digitalgeniusweb from '../assets/projects/digitalgeniusweb.jpg'
import behs3bahan from '../assets/projects/behs3bahan.jpg'
import thescentlab from '../assets/projects/thescentlab.jpg'
import kzkecommerce from '../assets/projects/kzkecommerce.jpg'
import nous from '../assets/projects/nous.jpg'
import SectionBackground from './ui/SectionBackground'
import { glowFromAccent } from './ui/glassGlow'

const projects = [
  {
    title: 'Digital Genius (Web)',
    description:
      'Online learning platform for Digital Genius with courses, books, and app download section. Features a clean hero for courses and the eLibrary application, with Android and iOS download options and an Our Courses section.',
    image: digitalgeniusweb,
    tech: ['Laravel', 'Tailwind CSS', 'JavaScript'],
    live: 'https://digitalgenius.asia',
    github: '',
    category: 'web',
    accent: 'from-violet-500 via-purple-500 to-indigo-600',
    featured: true,
  },
  {
    title: 'The Scent Lab',
    description:
      'Luxury body mist ecommerce storefront with a guided Scent Match experience — customers answer personalized questions, discover their signature scent profile, and get matched with the right body mist. Full shopping flow, order tracking, and an admin dashboard for catalog and order management.',
    image: thescentlab,
    tech: ['Laravel', 'Tailwind CSS', 'Alpine.js', 'Vite', 'Blade'],
    live: 'https://thescentlab.protechmm.com',
    github: 'https://github.com/ThawHtooZin/scent-lab',
    category: 'web',
    accent: 'from-amber-300 via-yellow-500 to-orange-400',
  },
  {
    title: 'Team Nous',
    description:
      'AI-powered study platform for ASEAN students preparing for GED, IGCSE, and IELTS — with expert resources, study plans, and exam pathways. Built to scale into a guided marketplace for tutors and learners.',
    image: nous,
    tech: ['Laravel', 'Tailwind CSS', 'Vite', 'Blade', 'MySQL'],
    live: 'https://nous.protechmm.com/',
    github: 'https://github.com/ThawHtooZin/teamnous_web',
    category: 'education',
    accent: 'from-sky-400 via-blue-500 to-indigo-600',
  },
  {
    title: 'Khaing Zin Kyaw Ecommerce',
    description:
      'Mobile-first, full-featured ecommerce for building materials and hardware — wholesale pricing in MMK, database-driven categories and products, cart and checkout, bilingual EN/Myanmar UI, and admin catalog management.',
    image: kzkecommerce,
    tech: ['Laravel', 'Tailwind CSS', 'Vite', 'Blade', 'MySQL'],
    live: 'http://kzkecommerce.protechmm.com/',
    github: 'https://github.com/ThawHtooZin/kzk_ecommerce',
    category: 'web',
    accent: 'from-yellow-400 via-amber-500 to-orange-600',
  },
  {
    title: 'Digital Genius E-Library App',
    description:
      'The Digital Genius E-Library is a feature-rich mobile app that allows users to read eBooks, listen to audiobooks, and download content for offline access. It supports both free and paid digital books, with a smooth UX. Built with a focus on performance and accessibility',
    image: digitalgeniusmobileapp,
    tech: ['Flutter', 'Firebase', 'Hive', 'Laravel', 'Laravel Backpack'],
    live: '',
    github: '',
    playstore:
      'https://play.google.com/store/apps/details?id=com.digitalgenius.elibrary',
    appstore: '',
    category: 'mobile',
    accent: 'from-cyan-400 via-blue-500 to-violet-600',
  },
  {
    title: 'BEHS 3 Bahan (YMBA)',
    description:
      'A community platform for BEHS 3 Bahan that brings alumni, current students, and everyone connected to the school together. Features networking, updates, and a shared information hub to keep the school family in touch.',
    image: behs3bahan,
    tech: ['Laravel', 'API', 'React', 'Tailwind CSS'],
    live: '',
    github: '',
    category: 'community',
    accent: 'from-emerald-400 via-green-500 to-teal-600',
  },
  {
    title: 'ProTechMM Learning Website',
    description:
      'Corporate site for a tech training and professional career development. Includes course listing, quizes, leaderboard, and responsive UI.',
    image: learningprotechmm,
    tech: ['Laravel', 'Tailwind CSS', 'React'],
    live: 'https://learning.protechmm.com',
    github: '',
    category: 'web',
    accent: 'from-orange-400 via-amber-500 to-yellow-500',
  },
  {
    title: 'Shwe Phone Hein Agency',
    description:
      'Recruitment agency website that enables Burmese job seekers to apply for overseas positions. One of the best recruitment agency in Myanmar.',
    image: shwebhonehein,
    tech: ['Laravel', 'JavaScript', 'Bootstrap'],
    live: 'https://shwebhonehein.com',
    github: 'https://github.com/ThawHtooZin/SBH/',
    category: 'web',
    accent: 'from-rose-400 via-pink-500 to-fuchsia-600',
  },
  {
    title: 'Asoka Buddhist Studies',
    description:
      'A Buddhist education web application built for students to study and learn about Buddhism. Features a dashboard for admin control and Forum Features for discussions and even online meetings and at last but not least, a Video based learning system.',
    image: asokabuddhiststudies,
    tech: ['Laravel', 'Livewire', 'Tailwind CSS', 'MySQL'],
    live: 'https://asokabuddhiststudies.com',
    github: 'https://github.com/ThawHtooZin/asoka',
    category: 'web',
    accent: 'from-amber-300 via-yellow-400 to-orange-500',
  },
]

const FILTERS = [
  { id: 'all', label: 'All Work' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'education', label: 'Education' },
  { id: 'community', label: 'Community' },
]

const bentoLayout = [
  'lg:col-span-2 lg:row-span-2',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
]

function ExternalLink({ href, children, variant = 'primary' }) {
  const styles = {
    primary: 'btn-heritage-primary !text-[0.7rem] !py-2.5 !px-5',
    ghost: 'btn-heritage-outline !text-[0.7rem] !py-2.5 !px-5',
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 ${styles[variant]}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </motion.a>
  )
}

function ProjectCard({ project, index, layoutClass, onOpen, isFiltered }) {
  const isFeatured = project.featured && !isFiltered
  const num = String(index + 1).padStart(2, '0')

  return (
    <motion.article
      layout
      layoutId={`project-${project.title}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`group ${layoutClass} ${isFeatured ? 'min-h-[420px] lg:min-h-[520px]' : 'min-h-[320px]'}`}
      whileHover={{ y: -4 }}
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        className={`glass-card-border ${glowFromAccent(project.accent)} w-full h-full text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#b8924a] rounded-sm`}
      >
        <div className="glass-card-inner flex flex-col h-full">
          <div
            className={`relative overflow-hidden shrink-0 border-b border-[rgba(184,146,74,0.15)] ${
              isFeatured ? 'h-[55%] lg:h-[58%]' : 'h-[52%]'
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <span className="absolute top-4 right-4 font-display text-4xl text-[#f5f0e8]/10 select-none leading-none">
              {num}
            </span>
          </div>

          <div className="relative z-20 flex flex-col flex-1 p-5 lg:p-6">
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.slice(0, isFeatured ? 4 : 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase text-[#9a958a] border border-[rgba(184,146,74,0.25)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h3
              className={`font-display text-[#f5f0e8] mb-2 leading-tight group-hover:text-[#d4b978] transition-colors ${
                isFeatured ? 'text-2xl lg:text-3xl' : 'text-xl'
              }`}
            >
              {project.title}
            </h3>

            <p
              className={`text-[#9a958a] leading-relaxed flex-1 text-sm ${
                isFeatured ? 'line-clamp-3 lg:line-clamp-4' : 'line-clamp-2'
              }`}
            >
              {project.description}
            </p>

            <p className="mt-4 text-xs uppercase tracking-[0.15em] text-[#b8924a]">
              View case study →
            </p>
          </div>
        </div>
      </button>
    </motion.article>
  )
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  if (!project) return null

  const isMobileProject = project.category === 'mobile'

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 lg:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="absolute inset-0 bg-[#0c1220]/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        layoutId={`project-${project.title}`}
        className={`relative w-full flex flex-col max-h-[min(92dvh,92vh)] overflow-hidden rounded-sm glass-card-border ${glowFromAccent(project.accent)} is-active ${
          isMobileProject ? 'max-w-5xl' : 'max-w-7xl'
        }`}
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 320, damping: 32 }}
      >
        <div
          className={`glass-card-inner glass-card-inner--scroll flex min-h-0 flex-1 flex-col scroll-smooth max-h-[min(92dvh,92vh)] ${
            isMobileProject ? 'lg:flex-row lg:items-start' : ''
          }`}
        >
          {/* Image panel — full-width showcase for web, side panel for mobile */}
          <div
            className={
              isMobileProject
                ? 'relative shrink-0 flex items-center justify-center bg-[#0a0a10] p-4 sm:p-6 min-h-[220px] sm:min-h-[260px] lg:w-[44%] lg:sticky lg:top-0'
                : 'relative shrink-0 w-full flex items-center justify-center bg-[#0a101a] p-3 sm:p-5 border-b border-[rgba(184,146,74,0.15)]'
            }
          >
            <img
              src={project.image}
              alt={project.title}
              className={
                isMobileProject
                  ? 'relative max-w-full max-h-[36vh] sm:max-h-[40vh] lg:max-h-[70vh] w-auto h-auto object-contain rounded-xl shadow-2xl shadow-black/40'
                  : 'relative w-full max-h-[32vh] sm:max-h-[38vh] md:max-h-[42vh] object-contain object-top border border-[rgba(184,146,74,0.2)]'
              }
            />
          </div>

          {/* Details panel */}
          <div className="flex flex-col flex-1 min-w-0 p-6 sm:p-8 pb-10">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <p className="heritage-eyebrow mb-2">Case Study</p>
                <h3 className="font-display text-2xl sm:text-3xl text-[#f5f0e8]">{project.title}</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="shrink-0 w-10 h-10 border border-[rgba(184,146,74,0.35)] flex items-center justify-center text-[#d4b978] hover:bg-[rgba(184,146,74,0.1)] transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <p className="text-[#c9c4b8] leading-relaxed mb-6">{project.description}</p>

            <div className="mb-8">
              <p className="heritage-eyebrow mb-3 !text-[0.65rem]">Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs uppercase tracking-wider text-[#d4b978] border border-[rgba(184,146,74,0.35)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {project.maintenance ? (
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#141c2e] text-[#c9c4b8] text-sm font-semibold border border-[rgba(184,146,74,0.25)]">
                  <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Maintenance in progress
                </span>
              ) : (
                <>
                  {project.live && (
                    <ExternalLink href={project.live}>Live Site</ExternalLink>
                  )}
                  {project.github && (
                    <ExternalLink href={project.github} variant="ghost">
                      GitHub
                    </ExternalLink>
                  )}
                  {project.playstore && (
                    <ExternalLink href={project.playstore} variant="ghost">
                      Play Store
                    </ExternalLink>
                  )}
                  {project.appstore && (
                    <ExternalLink href={project.appstore} variant="ghost">
                      App Store
                    </ExternalLink>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  const isFiltered = activeFilter !== 'all'

  return (
    <section
      id="projects"
      className="relative min-h-screen py-28 px-4 sm:px-6 overflow-hidden section-dark"
    >
      <SectionBackground />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="heritage-eyebrow mb-4">Selected Work</p>
            <h2 className="heritage-title text-4xl sm:text-5xl lg:text-6xl text-[#f5f0e8]">
              Work of{' '}
              <span className="heritage-title-accent">distinction</span>
            </h2>
            <p className="mt-4 text-[#9a958a] text-lg max-w-xl">
              A curated collection of web apps, mobile products, and community platforms — built end-to-end.
            </p>
          </motion.div>

          {/* Filter pills */}
          <motion.div
            className="heritage-tabs self-start lg:self-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`heritage-tab ${activeFilter === filter.id ? 'is-active' : ''}`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Bento grid */}
        <motion.div
          layout
          className={`grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 ${
            isFiltered ? 'lg:grid-cols-3' : 'lg:grid-cols-3 auto-rows-[minmax(300px,auto)]'
          }`}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => {
              const originalIndex = projects.findIndex((p) => p.title === project.title)
              const layoutClass = isFiltered ? '' : bentoLayout[originalIndex] || ''

              return (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={i}
                  layoutClass={layoutClass}
                  onOpen={setSelectedProject}
                  isFiltered={isFiltered}
                />
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom stat strip */}
        <motion.div
          className="mt-16 pt-8 border-t border-[rgba(184,146,74,0.2)] flex flex-wrap gap-8 sm:gap-16 justify-center sm:justify-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            { value: `${projects.length}+`, label: 'Projects delivered' },
            { value: 'Full Stack', label: 'Web & mobile' },
            { value: 'Laravel', label: 'Primary stack' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl sm:text-3xl text-[#d4b978]">
                {stat.value}
              </p>
              <p className="text-sm text-[#8a8478] mt-1 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Case study modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
