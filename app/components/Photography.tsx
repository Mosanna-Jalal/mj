'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const shots = [
  {
    src: '/photos/Cinematography/1675720763645.jpg',
    label: 'Behind the Lens',
  },
  {
    src: '/photos/Cinematography/2fd4fd199364233.Y3JvcCwzMjMyLDI1MjgsMCww.png',
    label: 'Cinematic Frame',
  },
  {
    src: '/photos/Cinematography/3-point-lighting-birtecinematography.wordpress.png',
    label: '3-Point Lighting',
  },
  {
    src: '/photos/Cinematography/71JEHsRGlDL._AC_UF1000,1000_QL80_.jpg',
    label: 'Cinematic Gear',
  },
]

const highlights = [
  { icon: '📷', label: 'DSLR Cinematography', sub: 'Primary Camera' },
  { icon: '💡', label: '3-Point Lighting', sub: 'Key · Fill · Back' },
  { icon: '🎬', label: 'Phil Ebiner', sub: 'Mentor / Instructor' },
  { icon: '🌅', label: 'Cinematography+', sub: 'Certified' },
]

export default function Photography() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="photography" className="py-28 px-6 relative overflow-hidden">
      {/* Film-grain tint overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 90% 60% at 50% 100%, rgba(212,175,55,0.04) 0%, transparent 70%)',
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.p
          className="section-label mb-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          05 / Behind the Lens
        </motion.p>
        <motion.h2
          className="font-display text-4xl md:text-5xl font-bold tracking-wide mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          Frames &amp; <span className="gold-shimmer">Stories</span>
        </motion.h2>
        <motion.p
          className="text-sm leading-7 max-w-xl mb-14"
          style={{ color: 'var(--text-muted)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Code is written logic. Cinematography is lived logic. I bring the same
          obsessive precision to framing a shot as I do to architecting an API. Currently
          practicing 3-point lighting setups under the guidance of{' '}
          <span style={{ color: 'var(--gold)' }}>Phil Ebiner</span>.
        </motion.p>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
          {shots.map((shot, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden group"
              style={{
                aspectRatio: i === 0 ? '1/1.3' : '1/1',
                gridRow: i === 0 ? 'span 2' : 'span 1',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <Image
                src={shot.src}
                alt={shot.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, transparent 60%)',
                }}
              >
                <span
                  className="text-xs tracking-wider"
                  style={{ color: 'var(--gold-light)' }}
                >
                  {shot.label}
                </span>
              </div>
              {/* Border */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ border: '1px solid rgba(212,175,55,0.4)' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Highlights strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              className="glass-card p-5 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <div className="text-3xl mb-3">{h.icon}</div>
              <div className="font-display text-sm font-semibold tracking-wider mb-1" style={{ color: 'var(--text)' }}>
                {h.label}
              </div>
              <div className="text-xs" style={{ color: 'var(--gold-dark)' }}>
                {h.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  )
}
