import { motion } from 'framer-motion'
import { Music as MusicIcon, Quote } from 'lucide-react'
import { music } from '../data/content'
import { useInView } from '../hooks/useInView'
import SectionHeader from './SectionHeader'

export default function Music() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="music" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Music"
          title="The other side"
          description="When I'm not writing code, I'm writing songs."
        />

        <div ref={ref} className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left column - Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-card-bg backdrop-blur-sm border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-gradient-start)] to-[var(--color-gradient-end)] flex items-center justify-center">
                  <MusicIcon size={18} className="text-white" />
                </div>
                <h3 className="font-heading font-semibold text-text-primary">Multi-Instrumentalist</h3>
              </div>
              <p className="text-text-secondary leading-relaxed">
                {music.intro}
              </p>
            </div>

            {/* Quote */}
            <div className="p-5 rounded-xl bg-card-bg backdrop-blur-sm border border-border">
              <Quote size={18} className="text-secondary mb-2 opacity-60" />
              <p className="text-text-secondary text-sm italic leading-relaxed">
                "{music.quote.text}"
              </p>
              <p className="text-text-muted text-xs mt-2 font-medium">
                -- {music.quote.author}
              </p>
            </div>

            {/* Music links */}
            <div className="flex flex-wrap gap-3">
              <a
                href={music.spotifyArtistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-[#1DB954]/10 text-[#1DB954] border border-[#1DB954]/20 hover:bg-[#1DB954]/20 transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Spotify
              </a>
              <a
                href={music.soundcloudUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-[#FF5500]/10 text-[#FF5500] border border-[#FF5500]/20 hover:bg-[#FF5500]/20 transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.06-.05-.1-.1-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.172 1.308c.013.06.045.094.104.094.058 0 .09-.038.104-.094l.21-1.308-.21-1.334c-.014-.057-.046-.09-.104-.09m1.82-1.652c-.065 0-.11.05-.116.112l-.217 2.965.217 2.862c.007.065.05.112.116.112.065 0 .11-.047.116-.112l.244-2.862-.244-2.965c-.006-.06-.05-.112-.116-.112m.829-.376c-.073 0-.121.058-.127.125l-.209 3.34.21 3.193c.005.073.053.126.126.126.073 0 .12-.053.127-.126l.237-3.193-.237-3.34c-.007-.067-.054-.125-.127-.125m.83-.182c-.08 0-.133.065-.14.14l-.2 3.52.2 3.352c.008.075.06.14.14.14.08 0 .132-.065.14-.14l.225-3.352-.225-3.52c-.008-.075-.06-.14-.14-.14m.83-.14c-.087 0-.145.073-.15.153l-.193 3.66.192 3.401c.006.085.064.153.15.153.087 0 .145-.068.15-.153l.218-3.4-.218-3.661c-.005-.08-.063-.153-.15-.153m.83-.08c-.095 0-.155.08-.16.165l-.185 3.74.185 3.413c.005.09.065.165.16.165.094 0 .155-.075.16-.165l.21-3.413-.21-3.74c-.005-.085-.066-.165-.16-.165m.83.045c-.103 0-.163.088-.168.178l-.177 3.695.177 3.375c.005.095.065.178.168.178.1 0 .163-.083.168-.178l.2-3.375-.2-3.695c-.005-.09-.068-.178-.168-.178m.83.195c-.107 0-.172.09-.175.183l-.17 3.5.17 3.295c.003.098.068.183.175.183.108 0 .172-.085.177-.183l.19-3.295-.19-3.5c-.005-.093-.07-.183-.177-.183m2.25-2.473c-.118 0-.193.1-.197.205l-.15 5.768.15 3.218c.004.107.08.205.197.205.12 0 .194-.098.2-.205l.167-3.218-.168-5.768c-.006-.105-.08-.205-.199-.205m-.83.408c-.113 0-.188.095-.194.198l-.158 5.36.158 3.243c.006.103.08.198.194.198.114 0 .188-.095.194-.198l.177-3.243-.177-5.36c-.006-.103-.08-.198-.194-.198m1.66-.666c-.12 0-.2.105-.204.217l-.142 6.032.142 3.18c.004.112.083.21.204.21.12 0 .2-.098.204-.21l.16-3.18-.16-6.032c-.004-.112-.084-.217-.204-.217m.83.08c-.126 0-.207.112-.21.228l-.136 5.95.136 3.155c.004.116.085.228.21.228.127 0 .207-.112.21-.228l.152-3.155-.152-5.95c-.003-.116-.083-.228-.21-.228m.83.028c-.128 0-.213.118-.216.24l-.128 5.922.128 3.122c.003.122.088.24.216.24.13 0 .213-.118.216-.24l.145-3.122-.145-5.922c-.003-.122-.087-.24-.216-.24m3.782-.777c-.07 0-.139.01-.206.03a4.878 4.878 0 00-4.834-4.404c-.622 0-1.228.124-1.74.348-.206.088-.26.177-.263.35v8.735c.004.18.148.33.33.345h6.713c1.31 0 2.374-1.063 2.374-2.375s-1.064-2.375-2.374-2.375"/>
                </svg>
                SoundCloud
              </a>
            </div>
          </motion.div>

          {/* Right column - Spotify embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            <div className="rounded-2xl overflow-hidden border border-border">
              <iframe
                src={music.spotifyEmbedUrl}
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Artist Profile"
                className="block"
              />
            </div>
            <p className="text-text-muted text-xs text-center font-mono">
              Listen on Spotify
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
