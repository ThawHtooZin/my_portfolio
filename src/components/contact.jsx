import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'
// Import SVG files
import githubIcon from '../assets/icons/github.svg'
import emailIcon from '../assets/icons/email.svg'
import telegramIcon from '../assets/icons/telegram.svg'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [hasAnimated, setHasAnimated] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', null

  // Initialize EmailJS
  useEffect(() => {
    // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
    emailjs.init('As0TkG6Jds3fVjOVz')
  }, [])

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

    const element = document.getElementById('contact')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Replace these with your actual EmailJS credentials
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'thawhtoozin200811@gmail.com' // Your Gmail address
      }

      const result = await emailjs.send(
        'service_kt0p5p9', // Replace with your EmailJS service ID
        'template_49i6et7', // Replace with your EmailJS template ID
        templateParams
      )

      console.log('Email sent successfully:', result)
      setSubmitStatus('success')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)

    } catch (error) {
      console.error('Email send failed:', error)
      setSubmitStatus('error')
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/ThawHtooZin',
      icon: (
        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-600">
          <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
        </span>
      )
    },
    {
      name: 'Email',
      url: 'mailto:thawhtoozin200811@gmail.com',
      icon: (
        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-600 text-gray-800">
         <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
           <path 
             d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
             fill="currentColor"
           />
         </svg>
        </span>
      )
    },
    {
      name: 'Telegram',
      url: 'https://t.me/thawhtoozin',
      icon: (
        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-600 text-gray-800">
          <svg
            width="30"
            height="30"
            viewBox="0 0 20 20"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
          >
            <path
              d="M14.4415206,6 C14.060553,6.00676048 13.476055,6.20741135 10.663148,7.36249773 C9.67796175,7.7670526 7.70897661,8.60437935 4.75619264,9.87447795 C4.27670659,10.0627254 4.02553067,10.2468857 4.00266485,10.4269588 C3.95876487,10.7726802 4.46291296,10.8803081 5.09723696,11.0838761 C5.61440201,11.2498453 6.31007997,11.4440124 6.67173438,11.4517262 C6.99978943,11.4587234 7.36593635,11.3251987 7.77017511,11.051152 C10.5290529,9.21254679 11.9531977,8.28322679 12.0426094,8.26319203 C12.1056879,8.24905787 12.1930992,8.23128593 12.2523244,8.28325656 C12.3115496,8.33522719 12.3057275,8.43364956 12.299454,8.46005377 C12.2492926,8.67117474 9.65764825,10.998457 9.50849738,11.1513987 L9.43697409,11.2233057 C8.88741493,11.7661123 8.33196049,12.1205055 9.290333,12.7440164 C10.155665,13.3069957 10.6592923,13.6661378 11.5507686,14.2430701 C12.1204738,14.6117635 12.5671299,15.0489784 13.1553348,14.9955401 C13.4259939,14.9709508 13.705567,14.7196888 13.8475521,13.9703127 C14.1831052,12.1993135 14.8426779,8.36209709 14.9951103,6.78087197 C15.0084653,6.64233621 14.9916649,6.46503787 14.9781732,6.38720805 C14.9646815,6.30937823 14.9364876,6.19848702 14.8340164,6.11639754 C14.7126597,6.01917896 14.5253109,5.99867765 14.4415206,6 Z"
              fill="currentColor"
            />
          </svg>
        </span>
      )
    }
  ]

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-blue-950 py-24 px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Get In <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Ready to start a project or just want to chat? I'd love to hear from you!
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-purple-800"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300"
                  placeholder="Your name"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300"
                placeholder="What's this about?"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300 resize-none"
                placeholder="Tell me about your project or just say hello!"
              />
            </motion.div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg font-semibold shadow-lg transition-all duration-300 ${
                isSubmitting 
                  ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:shadow-[0_0_20px_5px_rgba(139,92,246,0.5)] hover:scale-105'
              }`}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              initial={{ opacity: 0, y: 20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-900 bg-opacity-50 border border-green-500 rounded-lg"
              >
                <p className="text-green-400 text-center">
                  ✅ Message sent successfully! I'll get back to you soon.
                </p>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-red-900 bg-opacity-50 border border-red-500 rounded-lg"
              >
                <p className="text-red-400 text-center break-words">
                  ❌ Failed to send message. Please try again or contact me directly at thawhtoozin200811@gmail.com
                </p>
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Contact Info & Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8"
        >
          {/* Contact Info */}
          <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-purple-800">
            <h3 className="text-2xl font-bold text-white mb-6">Let's connect</h3>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                📮
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <a href="mailto:thawhtoozin200811@gmail.com" className="text-white hover:text-purple-400 transition-colors duration-300 break-all">
                    thawhtoozin200811@gmail.com
                  </a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                📍
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Location</p>
                  <p className="text-white">Yangon, Myanmar</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-center space-x-4"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                  ⏰
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Response Time</p>
                  <p className="text-white">Within 24 hours</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-purple-800">
            <h3 className="text-2xl font-bold text-white mb-6">Follow me</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <span className="w-8 h-8 flex items-center justify-center text-2xl flex-shrink-0">{social.icon}</span>
                  <span className="text-white group-hover:text-purple-400 transition-colors duration-300">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 