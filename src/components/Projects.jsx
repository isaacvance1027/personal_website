import { motion } from 'framer-motion'
import { ExternalLink, Star } from 'lucide-react'
import { projects } from '../data/content'
import { useInView } from '../hooks/useInView'
import SectionHeader from './SectionHeader'

function ProjectCard({ project, index }) {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  return (
    <motion.a
      ref={ref}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative block p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.01] ${
        project.featured
          ? 'bg-card-bg backdrop-blur-sm border-border hover:border-primary hover:shadow-[var(--shadow-glow)] md:col-span-1'
          : 'bg-card-bg backdrop-blur-sm border-border hover:border-border-light'
      }`}
    >
      {project.featured && (
        <div className="absolute top-4 right-4">
          <Star size={14} className="text-secondary fill-secondary" />
        </div>
      )}

      <div className="flex items-start justify-between mb-3">
        <h3 className="font-heading font-semibold text-lg text-text-primary group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <ExternalLink size={16} className="text-text-muted group-hover:text-primary transition-colors shrink-0 mt-1" />
      </div>

      <p className="text-text-secondary text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-md text-xs font-mono bg-surface-elevated text-text-muted border border-border group-hover:border-border-light transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.a>
  )
}

export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const other = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Projects"
          title="Things I've built"
          description="Selected projects spanning payments infrastructure, open source, and personal explorations."
        />

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Other projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {other.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i + featured.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
