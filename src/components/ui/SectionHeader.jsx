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
        <p className="heritage-eyebrow mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="heritage-title text-4xl sm:text-5xl lg:text-6xl text-[#e8e4dc] leading-[1.1]">
        {title}{' '}
        {highlight && <span className="heritage-title-accent">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-[#c9c4b8] text-lg max-w-xl ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeader
