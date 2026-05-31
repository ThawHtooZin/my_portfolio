import React from 'react'
import { motion } from 'framer-motion'
import githubIcon from '../assets/icons/github.svg'

const currentYear = new Date().getFullYear()

const quickLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/ThawHtooZin', icon: githubIcon },
  {
    name: 'Email',
    url: 'mailto:thawhtoozin200811@gmail.com',
    svg: (
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
    ),
  },
  {
    name: 'Telegram',
    url: 'https://t.me/thawhtoozin',
    svg: (
      <path d="M14.4415206,6 C14.060553,6.00676048 13.476055,6.20741135 10.663148,7.36249773 C9.67796175,7.7670526 7.70897661,8.60437935 4.75619264,9.87447795 C4.27670659,10.0627254 4.02553067,10.2468857 4.00266485,10.4269588 C3.95876487,10.7726802 4.46291296,10.8803081 5.09723696,11.0838761 C5.61440201,11.2498453 6.31007997,11.4440124 6.67173438,11.4517262 C6.99978943,11.4587234 7.36593635,11.3251987 7.77017511,11.051152 C10.5290529,9.21254679 11.9531977,8.28322679 12.0426094,8.26319203 C12.1056879,8.24905787 12.1930992,8.23128593 12.2523244,8.28325656 C12.3115496,8.33522719 12.3057275,8.43364956 12.299454,8.46005377 C12.2492926,8.67117474 9.65764825,10.998457 9.50849738,11.1513987 L9.43697409,11.2233057 C8.88741493,11.7661123 8.33196049,12.1205055 9.290333,12.7440164 C10.155665,13.3069957 10.6592923,13.6661378 11.5507686,14.2430701 C12.1204738,14.6117635 12.5671299,15.0489784 13.1553348,14.9955401 C13.4259939,14.9709508 13.705567,14.7196888 13.8475521,13.9703127 C14.1831052,12.1993135 14.8426779,8.36209709 14.9951103,6.78087197 C15.0084653,6.64233621 14.9916649,6.46503787 14.9781732,6.38720805 C14.9646815,6.30937823 14.9364876,6.19848702 14.8340164,6.11639754 C14.7126597,6.01917896 14.5253109,5.99867765 14.4415206,6 Z" />
    ),
  },
]

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative section-dark border-t border-[rgba(184,146,74,0.25)] overflow-hidden">
      <div className="heritage-divider" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <motion.div className="lg:col-span-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="font-display text-2xl text-[#f5f0e8] mb-1">Thaw Htoo Zin</p>
            <p className="text-sm italic text-[#9a958a] mb-6">Full Stack Developer</p>
            <p className="text-[#9a958a] leading-relaxed max-w-sm mb-8 text-sm">
              Crafting considered web and mobile experiences with precision and care.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-[rgba(184,146,74,0.3)] flex items-center justify-center text-[#d4b978] hover:bg-[rgba(184,146,74,0.1)] transition-colors"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  aria-label={social.name}
                >
                  {social.icon ? (
                    <img src={social.icon} alt="" className="w-4 h-4 opacity-80 invert" />
                  ) : (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">{social.svg}</svg>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div className="lg:col-span-3 lg:col-start-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <p className="heritage-eyebrow mb-5">Navigation</p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-[#9a958a] hover:text-[#d4b978] transition-colors uppercase tracking-[0.12em]">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="lg:col-span-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <p className="heritage-eyebrow mb-5">Inquire</p>
            <a href="mailto:thawhtoozin200811@gmail.com" className="text-sm text-[#9a958a] hover:text-[#d4b978] transition-colors break-all">
              thawhtoozin200811@gmail.com
            </a>
            <p className="text-sm text-[#6b6560] mt-3">Yangon, Myanmar</p>
            <p className="text-xs text-[#6b6560] mt-4 italic">
              Member of{' '}
              <a href="https://protechmm.com/" className="text-[#b8924a] hover:text-[#d4b978]">ProTechMM</a>
            </p>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-[rgba(184,146,74,0.15)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6b6560] tracking-wide">
            © {currentYear} Thaw Htoo Zin. All rights reserved.
          </p>
          <motion.button
            type="button"
            onClick={scrollToTop}
            className="btn-heritage-outline !text-[0.65rem] !py-2 !px-4"
            whileHover={{ y: -2 }}
          >
            Return to top
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
