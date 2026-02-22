import { socialLinks } from '../data/content'
import SocialIcon from './SocialIcon'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary transition-colors"
                aria-label={link.name}
              >
                <SocialIcon name={link.icon} size={16} />
              </a>
            ))}
          </div>

          <p className="text-text-muted text-xs font-mono">
            &copy; {currentYear} Isaac Vance. Built with React + Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
