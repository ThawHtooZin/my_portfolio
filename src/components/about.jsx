import React, { useState } from 'react'
import {
  motion,
  AnimatePresence,
} from 'framer-motion'
import cuteguy from '../assets/cuteguy.png'
import SectionBackground from './ui/SectionBackground'
import GlassCard from './ui/GlassCard'
import { glowFromAccent, SKILL_GLOW } from './ui/glassGlow'

const STAT_GLOWS = ['glass-glow-emerald', 'glass-glow-amber', 'glass-glow-sky']

const TABS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
]

const skills = [
  { name: 'Laravel', level: 98, color: 'from-rose-400 to-pink-600' },
  { name: 'PHP', level: 90, color: 'from-indigo-400 to-indigo-600' },
  { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-yellow-600' },
  { name: 'Flutter', level: 80, color: 'from-cyan-400 to-cyan-600' },
  { name: 'React', level: 80, color: 'from-blue-400 to-blue-600' },
  { name: 'Python', level: 72, color: 'from-blue-500 to-blue-700' },
]

const otherSkills = [
  'Firebase', 'Tailwind CSS', 'MySQL', 'SQLite', 'Figma', 'Postman',
  'Git', 'Next.js', 'REST APIs', 'Framer Motion', 'Node.js',
]

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'ProTech MM (Family Business)',
    period: '2023 — Present',
    description:
      'Built internal systems and public websites for clients using Laravel, Flutter, and Firebase. Led full-stack development and deployed to cloud servers.',
    tech: ['Laravel', 'Flutter', 'Firebase', 'Tailwind CSS'],
    accent: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Software Developer (Remote)',
    company: 'Digital Genius (Thailand)',
    period: '2025 — Present',
    description:
      'Solo dev role for eLibrary app using Firebase and secure Laravel backend and Flutter frontend built in with Laravel Backpack dashboard library.',
    tech: ['Flutter', 'Laravel', 'Firebase', 'Laravel Backpack'],
    accent: 'from-cyan-400 to-blue-600',
  },
  {
    title: 'Web Developer',
    company: 'Freelance Clients',
    period: '2023 — 2025',
    description:
      'Delivered responsive and modern portfolio, company, and service websites using Tailwind and Bootstrap.',
    tech: ['Tailwind CSS', 'Bootstrap', 'JavaScript', 'Figma'],
    accent: 'from-rose-400 to-orange-500',
  },
]

const education = [
  {
    degree: 'Diploma in Network Communication',
    institution: 'University of Distance Education Yangon',
    status: 'Completed',
    icon: '🌐',
    accent: 'from-emerald-400 via-teal-500 to-cyan-600',
    highlights: ['Networking fundamentals', 'Communication systems', 'Infrastructure & protocols'],
  },
  {
    degree: 'Diploma in Computing',
    institution: 'NCC Education',
    status: 'Candidate',
    icon: '💻',
    accent: 'from-violet-500 via-purple-500 to-indigo-600',
    highlights: ['Software development', 'Computing fundamentals', 'Industry-standard curriculum'],
  },
]

const stats = [
  { value: '3+', label: 'Years experience' },
  { value: '9+', label: 'Projects shipped' },
  { value: '98%', label: 'Client satisfaction' },
]

function ProfileCard() {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <GlassCard className="overflow-hidden" tone="light" glow="glass-glow-gold">
        <div className="relative p-6 lg:p-8 flex flex-col items-center justify-center min-h-[340px]">
          <motion.img
            src={cuteguy}
            alt="Thaw Htoo Zin"
            className="relative w-full max-w-[260px] border border-[rgba(184,146,74,0.35)] shadow-[0_8px_32px_rgba(28,27,24,0.12)]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />

          <div className="relative mt-6 text-center">
            <p className="heritage-eyebrow heritage-eyebrow-dark mb-2">Developer</p>
            <p className="font-display text-2xl text-[#1c1b18]">Thaw Htoo Zin</p>
            <p className="text-sm text-[#5c574f] mt-1 italic">Full Stack · Web & Mobile</p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}

function AboutTab() {
  return (
    <motion.div
      key="about"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5"
    >
      <div className="lg:col-span-5">
        <ProfileCard />
      </div>

      <motion.div
        className="lg:col-span-7"
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.1 }}
      >
        <GlassCard tone="light" glow="glass-glow-indigo">
          <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center h-full min-h-[340px]">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1c1b18] mb-5 leading-tight">
              Passionate developer &{' '}
              <span className="bg-gradient-to-r from-[#b8924a] to-[#8a7340] bg-clip-text text-transparent">
                problem solver
              </span>
            </h3>
            <p className="text-[#3d3a35] text-base sm:text-lg leading-relaxed mb-4">
              I'm a dedicated software developer with a passion for creating innovative solutions
              that make a difference. With expertise in full-stack development, I love turning
              complex problems into simple, beautiful, and intuitive products.
            </p>
            <p className="text-[#5c574f] text-base sm:text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source, or sharing knowledge with the developer community. Continuous learning
              is how I stay sharp.
            </p>
          </div>
        </GlassCard>
      </motion.div>

      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className="lg:col-span-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
        >
          <GlassCard hover={false} tone="light" glow={STAT_GLOWS[i]}>
            <div className="p-6 sm:p-8 text-center">
              <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#b8924a] to-[#8a7340] bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-sm text-[#8a8478] mt-2 uppercase tracking-wider">{stat.label}</p>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </motion.div>
  )
}

function SkillsTab() {
  return (
    <motion.div
      key="skills"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
      className="space-y-5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
          >
            <GlassCard tone="light" glow={SKILL_GLOW[skill.color] || 'glass-glow-default'}>
              <div className="p-5 sm:p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[#1c1b18] font-semibold">{skill.name}</span>
                  <span className={`text-sm font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-[#ebe6dc] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
                  />
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <GlassCard hover={false} tone="light" glow="glass-glow-mint">
        <div className="p-6 sm:p-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8a8478] mb-5">
            Also comfortable with
          </p>
          <div className="flex flex-wrap gap-2">
            {otherSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ scale: 1.06, y: -2 }}
                className="px-3 py-1.5 text-sm text-[#5c574f] bg-[#ebe6dc]/60 border border-[#d4cfc4] hover:border-[#b8924a]/60 hover:text-[#1c1b18] transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}

function ExperienceTab() {
  return (
    <motion.div
      key="experience"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
      className="space-y-4 lg:space-y-5"
    >
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.title}
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative"
        >
          <GlassCard tone="light" glow={glowFromAccent(exp.accent)}>
            <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-5 sm:gap-8">
              {/* Timeline indicator */}
              <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-0 sm:w-28 shrink-0">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${exp.accent} flex items-center justify-center shadow-lg`}>
                  <span className="text-[#1c1b18] font-bold text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-xs font-semibold tracking-wider uppercase text-[#8a7340] sm:mt-4">
                  {exp.period}
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-xl sm:text-2xl font-bold text-[#1c1b18] mb-1">{exp.title}</h4>
                <p className={`text-sm font-medium bg-gradient-to-r ${exp.accent} bg-clip-text text-transparent mb-3`}>
                  {exp.company}
                </p>
                <p className="text-[#5c574f] leading-relaxed mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 text-[#6b5340] border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </motion.div>
  )
}

function EducationTab() {
  return (
    <motion.div
      key="education"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5"
    >
      {education.map((item, index) => (
        <motion.div
          key={item.degree}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.12 }}
          className="h-full"
        >
          <GlassCard tone="light" glow={glowFromAccent(item.accent)}>
            <div className="p-6 sm:p-8 h-full flex flex-col">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accent} flex items-center justify-center text-2xl shadow-lg`}
                >
                  {item.icon}
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                    item.status === 'Completed'
                      ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                      : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-[#1c1b18] mb-2 leading-snug">
                {item.degree}
              </h4>
              <p className={`text-sm font-medium bg-gradient-to-r ${item.accent} bg-clip-text text-transparent mb-5`}>
                {item.institution}
              </p>

              <ul className="space-y-2 mt-auto">
                {item.highlights.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-[#5c574f]">
                    <span className="w-1 h-1 rounded-full bg-[#b8924a] shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>
        </motion.div>
      ))}

      {/* Extra info card spanning full width on mobile, can sit below */}
      <motion.div
        className="md:col-span-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <GlassCard hover={false} tone="light" glow="glass-glow-lime">
          <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <div className="flex-1">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8a7340] mb-2">
                Always learning
              </p>
              <p className="text-[#3d3a35] leading-relaxed">
                Grounded in network communication and computing fundamentals — building real-world
                software with a strong technical foundation from both diplomas.
              </p>
            </div>
            <div className="flex gap-6 shrink-0">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#1c1b18]">2</p>
                <p className="text-xs text-[#8a8478] mt-1 uppercase tracking-wider">Diplomas</p>
              </div>
              <div className="w-px bg-white/10" />
              <div className="text-center">
                <p className="text-2xl font-bold text-[#1c1b18]">NCC</p>
                <p className="text-xs text-[#8a8478] mt-1 uppercase tracking-wider">Education</p>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  )
}

function About() {
  const [activeTab, setActiveTab] = useState('about')

  const tabContent = {
    about: <AboutTab />,
    skills: <SkillsTab />,
    experience: <ExperienceTab />,
    education: <EducationTab />,
  }

  return (
    <section id="about" className="relative min-h-screen py-28 px-4 sm:px-6 overflow-hidden section-light">
      <SectionBackground tone="light" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="heritage-eyebrow heritage-eyebrow-dark mb-4">
              Who I Am
            </p>
            <h2 className="heritage-title text-4xl sm:text-5xl lg:text-6xl text-[#1c1b18]">
              Building with{' '}
              <span className="heritage-title-accent">purpose & craft</span>
            </h2>
            <p className="mt-4 text-[#5c574f] text-lg max-w-xl">
              Full-stack developer crafting web and mobile experiences — from Laravel backends to Flutter apps.
            </p>
          </motion.div>

          {/* Tab pills */}
          <motion.div
            className="heritage-tabs heritage-tabs-light self-start lg:self-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`heritage-tab ${activeTab === tab.id ? 'is-active' : ''}`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          {tabContent[activeTab]}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default About
