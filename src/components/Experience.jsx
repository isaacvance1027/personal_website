import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react'
import { experience } from '../data/content'
import { useInView } from '../hooks/useInView'
import SectionHeader from './SectionHeader'

function TimelineItem({ item, index, isLast }) {
  const [ref, isInView] = useInView({ threshold: 0.2 })
  const isEducation = item.role.includes('B.S.') || item.role.includes('B.A.')
  const Icon = isEducation ? GraduationCap : Briefcase

  return (
    <div ref={ref} className="relative pl-8 md:pl-12">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] md:left-[19px] top-10 bottom-0 w-px bg-border" />
      )}

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="absolute left-0 md:left-2 top-1 w-[22px] h-[22px] rounded-full bg-surface border-2 border-primary flex items-center justify-center"
      >
        <Icon size={10} className="text-primary" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="pb-12"
      >
        <div className="p-5 md:p-6 rounded-xl bg-card-bg backdrop-blur-sm border border-border hover:border-border-light transition-all group">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
            <div>
              <h3 className="font-heading font-semibold text-text-primary group-hover:text-primary transition-colors">
                {item.role}
              </h3>
              <p className="text-primary font-medium text-sm">{item.company}</p>
            </div>
            <div className="flex flex-col sm:items-end gap-1">
              <div className="flex items-center gap-1.5 text-text-muted text-xs font-mono">
                <Calendar size={12} />
                {item.period}
              </div>
              <div className="flex items-center gap-1.5 text-text-muted text-xs">
                <MapPin size={12} />
                {item.location}
              </div>
            </div>
          </div>

          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            {item.description}
          </p>

          {/* Highlights */}
          <ul className="space-y-1.5 mb-4">
            {item.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {item.tech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-surface-elevated text-text-muted border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          label="Experience"
          title="Where I've worked"
          description="My professional journey from university to payments engineering."
        />

        <div className="relative">
          {experience.map((item, i) => (
            <TimelineItem
              key={`${item.company}-${item.role}`}
              item={item}
              index={i}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
