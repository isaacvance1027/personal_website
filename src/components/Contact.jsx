import { motion } from 'framer-motion'
import { Mail, FileText, MapPin, ArrowUpRight } from 'lucide-react'
import { personalInfo, socialLinks } from '../data/content'
import { useInView } from '../hooks/useInView'
import SocialIcon from './SocialIcon'
import SectionHeader from './SectionHeader'

export default function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          label="Contact"
          title="Let's connect"
          description="Always open to discussing new opportunities, interesting projects, or just a good conversation."
        />

        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center gap-4 p-5 rounded-xl bg-card-bg backdrop-blur-sm border border-border hover:border-primary transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-glow flex items-center justify-center shrink-0">
                <Mail size={20} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-text-muted text-xs font-mono uppercase tracking-wider">Email</p>
                <p className="text-text-primary font-medium truncate group-hover:text-primary transition-colors">
                  {personalInfo.email}
                </p>
              </div>
              <ArrowUpRight size={16} className="text-text-muted group-hover:text-primary transition-colors shrink-0" />
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-xl bg-card-bg backdrop-blur-sm border border-border hover:border-primary transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-glow flex items-center justify-center shrink-0">
                <FileText size={20} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-text-muted text-xs font-mono uppercase tracking-wider">Resume</p>
                <p className="text-text-primary font-medium group-hover:text-primary transition-colors">
                  Download PDF
                </p>
              </div>
              <ArrowUpRight size={16} className="text-text-muted group-hover:text-primary transition-colors shrink-0" />
            </a>

            <div className="flex items-center gap-4 p-5 rounded-xl bg-card-bg backdrop-blur-sm border border-border">
              <div className="w-12 h-12 rounded-xl bg-primary-glow flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-text-muted text-xs font-mono uppercase tracking-wider">Location</p>
                <p className="text-text-primary font-medium">{personalInfo.location}</p>
              </div>
            </div>
          </motion.div>

          {/* Social & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-card-bg backdrop-blur-sm border border-border">
              <h3 className="font-heading font-semibold text-text-primary mb-4">Find me online</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-3 rounded-lg hover:bg-surface-elevated transition-all"
                  >
                    <SocialIcon name={link.icon} size={18} />
                    <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <a
              href={`mailto:${personalInfo.email}`}
              className="block w-full text-center px-6 py-4 rounded-xl font-medium bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-gradient-end)] text-white hover:scale-[1.01] hover:shadow-lg hover:shadow-primary-glow transition-all duration-200"
            >
              Send me an email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
