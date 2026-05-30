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
    const typingSpeed = isDeleting ? 40 : 85
    const pause = 1800
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
    const blinkInterval = setInterval(() => setBlink((b) => !b), 500)
    return () => clearInterval(blinkInterval)
  }, [isPaused])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#050508]">
      <ShootingStars />

      {/* Background layers */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${backgroundUfo})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/70 via-[#050508]/50 to-[#050508]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050508]/90 via-transparent to-[#050508]/40" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-32 lg:pt-32">
        <div className="max-w-3xl">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.08] backdrop-blur-md mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-sm text-gray-300">
              Available for freelance & full-time
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] font-display tracking-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Hello, I'm{' '}
            <span className="block mt-1 bg-gradient-to-r from-purple-300 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Thaw Htoo Zin
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 min-h-[2.5rem] leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            A passionate{' '}
            <span className="text-white font-medium">{currentTitle}</span>
            <span
              className={`inline-block w-[3px] h-[1.1em] ml-1 align-middle bg-purple-400 transition-opacity duration-300 ${
                blink && isPaused ? 'opacity-100' : 'opacity-0'
              }`}
            />
            {' '}building web & mobile products that ship.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-gray-950 bg-white hover:bg-white/90 shadow-[0_0_40px_rgba(255,255,255,0.12)] transition-colors"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              View my work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
            <motion.a
              href={cvPdf}
              download="Thaw Htoo Zin CV.pdf"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-white border border-white/20 bg-white/[0.05] backdrop-blur-sm hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Download CV
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            className="flex flex-wrap gap-8 sm:gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            {[
              { value: '3+', label: 'Years' },
              { value: '9+', label: 'Projects' },
              { value: 'Full Stack', label: 'Focus' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-bold text-white font-display">{stat.value}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Tech marquee */}
      <div className="relative z-10 border-y border-white/[0.06] bg-white/[0.02] backdrop-blur-sm py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...techMarquee, ...techMarquee].map((tech, i) => (
            <span key={i} className="inline-flex items-center mx-6 text-sm text-gray-500">
              <span className="w-1 h-1 rounded-full bg-purple-500 mr-3" />
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white/50 animate-scroll-bounce" />
        </div>
      </motion.div>

      {children}
    </section>
  )
}

function ShootingStars() {
  const canvasRef = React.useRef(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    function handleResize() {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    const stars = []
    function spawnStar() {
      const startX = Math.random() * width * 0.9 + width * 0.05
      const startY = Math.random() * 20
      const endY = Math.random() * height * 0.8 + height * 0.2
      const length = 60 + Math.random() * 40
      const speed = 6 + Math.random() * 3
      const deltaX = (Math.random() - 0.5) * 200
      const deltaY = endY - startY
      const angle = Math.atan2(deltaY, deltaX)
      stars.push({ x: startX, y: startY, length, speed, angle, alpha: 0.5 + Math.random() * 0.2 })
    }

    let lastSpawn = 0
    function animate(now) {
      ctx.clearRect(0, 0, width, height)
      for (let i = stars.length - 1; i >= 0; i--) {
        const star = stars[i]
        ctx.save()
        ctx.globalAlpha = star.alpha
        ctx.strokeStyle = 'white'
        ctx.shadowColor = '#fff'
        ctx.shadowBlur = 4
        ctx.lineWidth = 1.1
        ctx.beginPath()
        ctx.moveTo(star.x, star.y)
        ctx.lineTo(
          star.x + Math.cos(star.angle) * star.length,
          star.y + Math.sin(star.angle) * star.length
        )
        ctx.stroke()
        ctx.restore()
        star.x += Math.cos(star.angle) * star.speed
        star.y += Math.sin(star.angle) * star.speed
        star.alpha -= 0.018
        if (star.alpha <= 0) stars.splice(i, 1)
      }
      if (!lastSpawn || now - lastSpawn > 400 + Math.random() * 400) {
        for (let i = 0; i < 2 + Math.floor(Math.random() * 2); i++) spawnStar()
        lastSpawn = now
      }
      animationFrameId = requestAnimationFrame(animate)
    }
    animationFrameId = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[2]"
    />
  )
}

export default Hero
