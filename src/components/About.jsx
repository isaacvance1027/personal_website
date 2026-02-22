import { motion } from 'framer-motion'
import { MapPin, Briefcase, Rocket, GraduationCap, Quote } from 'lucide-react'
import { personalInfo, interests } from '../data/content'
import { useInView } from '../hooks/useInView'
import SectionHeader from './SectionHeader'

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const highlights = [
    { icon: Briefcase, label: "Current Role", value: "Sr. Cloud Engineer at Cadre Gov Solutions" },
    { icon: Rocket, label: "Building", value: "Conduit & TerminaLLM" },
    { icon: GraduationCap, label: "Education", value: "B.S. Computer Science, CU Boulder" },
    { icon: MapPin, label: "Location", value: "Arvada, Colorado" },
  ]

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="About"
          title="A bit about me"
          description="Engineer, entrepreneur, and creative problem solver."
        />

        <div ref={ref} className="grid md:grid-cols-5 gap-12 items-start">
          {/* Photo + Quote Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border group">
              <img
                src="/images/hot.jpg"
                alt="Isaac Vance"
                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-60" />
            </div>

            {/* Quote card */}
            <div className="relative p-5 rounded-xl bg-card-bg backdrop-blur-sm border border-border">
              <Quote size={18} className="text-primary mb-2 opacity-60" />
              <p className="text-text-secondary text-sm italic leading-relaxed">
                "{personalInfo.quote.text}"
              </p>
              <p className="text-text-muted text-xs mt-2 font-medium">
                -- {personalInfo.quote.author}
              </p>
            </div>
          </motion.div>

          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-3 space-y-6"
          >
            {/* Highlight cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="p-4 rounded-xl bg-card-bg backdrop-blur-sm border border-border hover:border-border-light transition-colors"
                >
                  <item.icon size={18} className="text-primary mb-2" />
                  <p className="text-text-muted text-xs font-mono uppercase tracking-wider">{item.label}</p>
                  <p className="text-text-primary text-sm font-medium mt-1">{item.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Bio paragraphs */}
            <div className="space-y-4">
              {personalInfo.bio.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.1 }}
                  className="text-text-secondary leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.65 }}
            >
              <p className="text-text-muted text-xs font-mono uppercase tracking-wider mb-3">Interests</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-surface-elevated text-text-secondary border border-border hover:border-primary hover:text-primary transition-all cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
