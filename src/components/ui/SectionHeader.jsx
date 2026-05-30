import { motion } from 'framer-motion'

function SectionHeader({ eyebrow, title, highlight, subtitle, align = 'left' }) {
  const isCenter = align === 'center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`mb-14 ${isCenter ? 'text-center mx-auto max-w-3xl' : ''}`}
    >
      {eyebrow && (
        <p className="text-sm font-semibold tracking-[0.25em] uppercase text-purple-400 mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] font-display">
        {title}{' '}
        {highlight && <span className="projects-shimmer-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-gray-400 text-lg max-w-xl ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeader
