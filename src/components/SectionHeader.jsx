import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function SectionHeader({ label, title, description }) {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  return (
    <div ref={ref} className="mb-12 md:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {label && (
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
            {label}
          </p>
        )}
        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
          {title}
        </h2>
        {description && (
          <p className="text-text-secondary text-lg max-w-2xl">
            {description}
          </p>
        )}
        <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-[var(--color-gradient-start)] to-[var(--color-gradient-end)]" />
      </motion.div>
    </div>
  )
}
