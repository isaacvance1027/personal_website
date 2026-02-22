import { motion } from 'framer-motion'
import { skills } from '../data/content'
import { useInView } from '../hooks/useInView'
import SectionHeader from './SectionHeader'

function SkillBar({ name, level, label, delay }) {
  const [ref, isInView] = useInView({ threshold: 0.3 })

  const getLevelColor = (level) => {
    if (level >= 85) return 'from-[var(--color-gradient-start)] to-[var(--color-gradient-end)]'
    if (level >= 70) return 'from-[var(--color-primary)] to-[var(--color-primary)]'
    if (level >= 55) return 'from-[var(--color-secondary)] to-[var(--color-secondary)]'
    return 'from-[var(--color-info)] to-[var(--color-info)]'
  }

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors">
          {name}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-text-muted">
            {label}
          </span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: delay + 0.5 }}
            className="text-xs font-mono text-primary"
          >
            {level}%
          </motion.span>
        </div>
      </div>
      <div className="h-2 rounded-full bg-surface-elevated overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 1,
            delay: delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className={`h-full rounded-full bg-gradient-to-r ${getLevelColor(level)} relative`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_2s_ease-in-out_infinite]" style={{ backgroundSize: '200% 100%' }} />
        </motion.div>
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="skills" className="py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Skills"
          title="Technical proficiency"
          description="Technologies and tools I work with on a daily basis."
        />

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8">
          {skills.map((category, catIdx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="p-6 md:p-8 rounded-2xl bg-card-bg backdrop-blur-sm border border-border"
            >
              <h3 className="font-heading font-semibold text-lg text-text-primary mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-gradient-end)]" />
                {category.category}
              </h3>
              <div className="space-y-5">
                {category.items.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    label={skill.label}
                    delay={0.1 + i * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-text-muted"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-1.5 rounded-full bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-gradient-end)]" />
            <span>Expert (85%+)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-1.5 rounded-full bg-primary" />
            <span>Advanced (70-84%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-1.5 rounded-full bg-secondary" />
            <span>Proficient (55-69%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-1.5 rounded-full bg-info" />
            <span>Working Knowledge (&lt;55%)</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
