import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import backgroundUfo from '../assets/background_ufo.jpg'
import cvPdf from '../assets/Thaw Htoo Zin CV.pdf'

const titles = [
  'Software Developer',
  'Full-Stack Developer',
  'Web Developer',
  'Mobile Developer',
]

const techMarquee = [
  'Laravel', 'React', 'Flutter', 'Tailwind', 'Firebase', 'PHP', 'JavaScript', 'MySQL',
]

function Hero({ children }) {
  const [currentTitle, setCurrentTitle] = useState('')
  const [titleIndex, setTitleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [blink, setBlink] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const typingSpeed = isDeleting ? 45 : 90
    const pause = 2000
    let timeout

    if (!isDeleting && charIndex < titles[titleIndex].length) {
      timeout = setTimeout(() => {
        setCurrentTitle(titles[titleIndex].slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, typingSpeed)
      setIsPaused(false)
    } else if (!isDeleting && charIndex === titles[titleIndex].length) {
      setIsPaused(true)
      timeout = setTimeout(() => setIsDeleting(true), pause)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCurrentTitle(titles[titleIndex].slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, typingSpeed)
      setIsPaused(false)
    } else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false)
        setTitleIndex((titleIndex + 1) % titles.length)
      }, 400)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, titleIndex])

  useEffect(() => {
    if (!isPaused) return
    const blinkInterval = setInterval(() => setBlink((b) => !b), 530)
    return () => clearInterval(blinkInterval)
  }, [isPaused])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden section-dark">
      <div className="heritage-texture" />

      {/* Background — subdued, editorial */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.12] grayscale-[40%] sepia-[30%]"
        style={{ backgroundImage: `url(${backgroundUfo})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c1220] via-[#0c1220]/95 to-[#0c1220]" />
      <div className="heritage-frame hidden lg:block" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-28 lg:pt-32">
        <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="heritage-eyebrow mb-6"
          >
            Full Stack · Web & Mobile
          </motion.p>

          <motion.h1
            className="heritage-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f5f0e8] mb-4"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Thaw Htoo Zin
          </motion.h1>

          <div className="heritage-divider-short mx-auto lg:mx-0 mb-8" />

          <motion.p
            className="text-lg sm:text-xl text-[#c9c4b8] mb-10 min-h-[2rem] leading-relaxed max-w-xl mx-auto lg:mx-0 italic"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            A dedicated{' '}
            <span className="text-[#d4b978] not-italic font-medium">{currentTitle}</span>
            <span
              className={`inline-block w-px h-[1em] ml-1 align-middle bg-[#b8924a] transition-opacity ${
                blink && isPaused ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              className="btn-heritage-primary"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              View Portfolio
            </motion.button>
            <motion.a
              href={cvPdf}
              download="Thaw Htoo Zin CV.pdf"
              className="btn-heritage-outline"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-10 sm:gap-14 justify-center lg:justify-start border-t border-[rgba(184,146,74,0.2)] pt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            {[
              { value: '3+', label: 'Years' },
              { value: '9+', label: 'Projects' },
              { value: 'Full Stack', label: 'Discipline' },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="font-display text-2xl sm:text-3xl text-[#d4b978]">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8a8478] mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Tech strip */}
      <div className="relative z-10 border-t border-[rgba(184,146,74,0.2)] bg-[#0a101a]/80 py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...techMarquee, ...techMarquee].map((tech, i) => (
            <span key={i} className="inline-flex items-center mx-8 text-xs uppercase tracking-[0.2em] text-[#8a8478]">
              <span className="text-[#b8924a] mr-3">◆</span>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#6b6560]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#b8924a] to-transparent animate-scroll-bounce" />
      </motion.div>

      {children}
    </section>
  )
}

export default Hero
