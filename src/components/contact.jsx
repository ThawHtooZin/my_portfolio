import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionBackground from './ui/SectionBackground'
import GlassCard from './ui/GlassCard'
import { CONTACT_GLOW } from './ui/glassGlow'
import githubIcon from '../assets/icons/github.svg'

const API_URL =
  import.meta.env.DEV
    ? 'http://localhost:3001/api'
    : 'https://thawhtoozin.protechmm.com/api'

const contactInfo = [
  {
    id: 'email',
    icon: '✉',
    label: 'Email',
    value: 'thawhtoozin200811@gmail.com',
    href: 'mailto:thawhtoozin200811@gmail.com',
  },
  {
    id: 'location',
    icon: '◆',
    label: 'Location',
    value: 'Yangon, Myanmar',
  },
  {
    id: 'response',
    icon: '◷',
    label: 'Response time',
    value: 'Within 24 hours',
  },
]

const socialLinks = [
  {
    name: 'GitHub',
    handle: '@ThawHtooZin',
    url: 'https://github.com/ThawHtooZin',
    icon: <img src={githubIcon} alt="" className="w-5 h-5 opacity-70" />,
  },
  {
    name: 'Email',
    handle: 'thawhtoozin200811@gmail.com',
    url: 'mailto:thawhtoozin200811@gmail.com',
    icon: (
      <svg className="w-5 h-5 text-[#6b5340]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
      </svg>
    ),
  },
  {
    name: 'Telegram',
    handle: '@thawhtoozin',
    url: 'https://t.me/thawhtoozin',
    icon: (
      <svg className="w-5 h-5 text-[#6b5340]" viewBox="0 0 20 20" fill="currentColor">
        <path d="M14.4415206,6 C14.060553,6.00676048 13.476055,6.20741135 10.663148,7.36249773 C9.67796175,7.7670526 7.70897661,8.60437935 4.75619264,9.87447795 C4.27670659,10.0627254 4.02553067,10.2468857 4.00266485,10.4269588 C3.95876487,10.7726802 4.46291296,10.8803081 5.09723696,11.0838761 C5.61440201,11.2498453 6.31007997,11.4440124 6.67173438,11.4517262 C6.99978943,11.4587234 7.36593635,11.3251987 7.77017511,11.051152 C10.5290529,9.21254679 11.9531977,8.28322679 12.0426094,8.26319203 C12.1056879,8.24905787 12.1930992,8.23128593 12.2523244,8.28325656 C12.3115496,8.33522719 12.3057275,8.43364956 12.299454,8.46005377 C12.2492926,8.67117474 9.65764825,10.998457 9.50849738,11.1513987 L9.43697409,11.2233057 C8.88741493,11.7661123 8.33196049,12.1205055 9.290333,12.7440164 C10.155665,13.3069957 10.6592923,13.6661378 11.5507686,14.2430701 C12.1204738,14.6117635 12.5671299,15.0489784 13.1553348,14.9955401 C13.4259939,14.9709508 13.705567,14.7196888 13.8475521,13.9703127 C14.1831052,12.1993135 14.8426779,8.36209709 14.9951103,6.78087197 C15.0084653,6.64233621 14.9916649,6.46503787 14.9781732,6.38720805 C14.9646815,6.30937823 14.9364876,6.19848702 14.8340164,6.11639754 C14.7126597,6.01917896 14.5253109,5.99867765 14.4415206,6 Z" />
      </svg>
    ),
  },
]

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        throw new Error(result.message || 'Failed to send message')
      }
    } catch {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative min-h-screen py-28 px-4 sm:px-6 overflow-hidden section-light">
      <SectionBackground tone="light" />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="heritage-eyebrow heritage-eyebrow-dark mb-4">Correspondence</p>
            <h2 className="heritage-title text-4xl sm:text-5xl lg:text-6xl text-[#1c1b18]">
              Let us{' '}
              <span className="heritage-title-accent">commence</span>
            </h2>
            <p className="mt-4 text-[#5c574f] text-lg max-w-xl">
              Have a project in mind? I respond to all inquiries within twenty-four hours.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.15em] text-[#6b5340] border border-[rgba(107,83,64,0.25)] px-4 py-2 self-start"
          >
            Accepting new commissions
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-5">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard hover={false} active tone="light" glow="glass-glow-emerald">
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
                <div>
                  <p className="heritage-eyebrow heritage-eyebrow-dark mb-1">Write to me</p>
                  <h3 className="font-display text-2xl text-[#1c1b18]">Send a message</h3>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a8478] mb-2">
                      Name
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="input-modern" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a8478] mb-2">
                      Email
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="input-modern" placeholder="you@email.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a8478] mb-2">
                    Subject
                  </label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="input-modern" placeholder="Regarding…" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a8478] mb-2">
                    Message
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="input-modern resize-none" placeholder="Your message…" />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-heritage-primary ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                  whileHover={!isSubmitting ? { y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? 'Sending…' : 'Send message'}
                </motion.button>

                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-sm text-[#1e3d32] border border-[#1e3d32]/30 bg-[#1e3d32]/5 px-4 py-3">
                      Message received. I shall reply shortly.
                    </motion.p>
                  )}
                  {submitStatus === 'error' && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-sm text-[#5c2a2a] border border-[#5c2a2a]/30 bg-[#5c2a2a]/5 px-4 py-3">
                      Delivery failed. Please write directly to thawhtoozin200811@gmail.com
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </GlassCard>
          </motion.div>

          <div className="lg:col-span-5 flex flex-col gap-5">
            {contactInfo.map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <GlassCard tone="light" glow={CONTACT_GLOW[item.id]}>
                  <div className="p-5 sm:p-6 flex items-start gap-4">
                    <span className="font-display text-2xl text-[#b8924a] w-8 shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#8a8478] mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-[#1c1b18] hover:text-[#6b5340] transition-colors text-sm">{item.value}</a>
                      ) : (
                        <p className="text-[#1c1b18] text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}

            <GlassCard hover={false} tone="light" glow="glass-glow-pink">
              <div className="p-5 sm:p-6">
                <p className="heritage-eyebrow heritage-eyebrow-dark mb-4">Connect</p>
                <div className="space-y-2">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 border border-[rgba(107,83,64,0.15)] hover:border-[#b8924a] transition-colors group"
                      whileHover={{ x: 4 }}
                    >
                      <span className="w-9 h-9 flex items-center justify-center border border-[rgba(184,146,74,0.25)]">{social.icon}</span>
                      <div>
                        <p className="text-sm font-medium text-[#1c1b18]">{social.name}</p>
                        <p className="text-xs text-[#8a8478] truncate">{social.handle}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
