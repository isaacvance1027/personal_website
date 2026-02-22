import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, FileText, Github } from 'lucide-react'
import { personalInfo, socialLinks } from '../data/content'
import SocialIcon from './SocialIcon'

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const fullText = personalInfo.tagline

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i))
        i++
      } else {
        clearInterval(timer)
      }
    }, 35)
    return () => clearInterval(timer)
  }, [fullText])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[var(--color-gradient-start)] opacity-[0.04] blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[var(--color-gradient-end)] opacity-[0.04] blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary opacity-[0.02] blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--color-text-muted) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-muted) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-border ring-4 ring-primary-glow mx-auto">
              <img
                src="/images/CO1A0122-ed_copy-sm-removebg-preview.png"
                alt="Isaac Vance"
                className="w-full h-full object-cover object-top scale-110"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-success border-2 border-bg" title="Available" />
          </div>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="text-text-muted text-sm font-mono tracking-widest uppercase mb-3">
            {personalInfo.location}
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-gradient-end)] bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>
          <p className="text-text-secondary text-xl md:text-2xl font-heading font-light mb-6">
            {personalInfo.title}
          </p>
        </motion.div>

        {/* Typed tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mb-10"
        >
          <p className="text-text-muted text-base md:text-lg font-mono inline">
            {typedText}
            <span className="inline-block w-0.5 h-5 bg-primary ml-0.5 animate-pulse align-middle" />
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-gradient-end)] text-white hover:scale-[1.02] hover:shadow-lg hover:shadow-primary-glow transition-all duration-200"
          >
            Get in Touch
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm border border-border text-text-secondary hover:text-text-primary hover:border-border-light hover:bg-surface-elevated transition-all duration-200"
          >
            <FileText size={16} />
            Resume
          </a>
          <a
            href="https://github.com/isaacvance1027"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm border border-border text-text-secondary hover:text-text-primary hover:border-border-light hover:bg-surface-elevated transition-all duration-200"
          >
            <Github size={16} />
            GitHub
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-text-muted hover:text-primary hover:bg-primary-glow transition-all duration-200"
              aria-label={link.name}
            >
              <SocialIcon name={link.icon} size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-text-muted hover:text-primary transition-colors"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
