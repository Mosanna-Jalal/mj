'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const mentors = [
  {
    name: 'Arfat Salman',
    role: 'JavaScript Mentor',
    location: 'Oslo, Norway',
    desc: 'Arfat\'s JavaScript training was rigorous and thorough — closures, async patterns, architecture. The way I think about JS fundamentals today comes largely from his teaching.',
    initial: 'AS',
    flag: '🇳🇴',
    photo: '/photos/mentors/Arfat.jpg',
    photoShape: 'rectangle' as const,
  },
  {
    name: 'Dr. Angela Yu',
    role: 'Web Dev Instructor · App Brewery',
    location: 'London, UK',
    desc: 'Dr. Angela Yu\'s course covered the full landscape of web development clearly and practically. It was the most structured learning I had in this field.',
    initial: 'AY',
    flag: '🇬🇧',
    photo: '/photos/mentors/Angela.png',
    photoShape: 'portrait' as const,
  },
  {
    name: 'Newton School Mentors',
    role: 'Industry Professionals',
    location: 'Amazon · Microsoft · and more',
    desc: 'The Newton School programme connected me with working engineers. Their perspective on real-world standards and code quality was useful beyond the curriculum.',
    initial: 'NS',
    flag: '🏛️',
    photo: null,
  },
  {
    name: 'Infobeans Colleagues',
    role: 'Teammates & Co-developers',
    location: 'Pune, India',
    desc: 'The people I worked with at Infobeans taught me a lot — through code reviews, shared problems, and two years of day-to-day collaboration.',
    initial: 'IB',
    flag: '🏢',
    photo: null,
  },
]

export default function Gratitude() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="gratitude" className="py-28 px-6 relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.p
          className="section-label mb-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          07 / Gratitude
        </motion.p>
        <motion.h2
          className="font-display text-4xl md:text-5xl font-bold tracking-wide mb-4"
          style={{ color: 'var(--text)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          People Who Helped
        </motion.h2>
        <motion.p
          className="text-sm leading-7 max-w-xl mb-6"
          style={{ color: 'var(--text-muted)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          A few people whose teaching and mentorship made a real difference along the way.
        </motion.p>

        <motion.blockquote
          className="italic text-sm max-w-2xl mb-14 pl-4 leading-8"
          style={{
            color: 'var(--text-muted)',
            borderLeft: '2px solid var(--border-hover)',
          }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          &ldquo;I also want to thank those whose names I cannot recall — but who were
          with me during the long, quiet nights of learning. You mattered.&rdquo;
        </motion.blockquote>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {mentors.map((m, i) => (
            <motion.div
              key={m.name}
              className="glass-card p-7 flex gap-5 relative overflow-hidden"
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              {/* Accent top line */}
              <div
                className="absolute top-0 left-0 w-full h-px"
                style={{ background: 'linear-gradient(90deg, var(--border-hover), transparent)' }}
              />

              {/* Avatar — photo or initials */}
              <div className="flex-shrink-0">
                {m.photo ? (
                  <div
                    className="overflow-hidden"
                    style={{
                      width: m.photoShape === 'rectangle' ? '112px' : '80px',
                      height: m.photoShape === 'portrait' ? '112px' : '80px',
                      borderRadius: '4px',
                      border: '1px solid var(--border-hover)',
                    }}
                  >
                    <Image
                      src={m.photo}
                      alt={m.name}
                      width={112}
                      height={112}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                ) : (
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center font-display text-sm font-bold"
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border-hover)',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {m.initial}
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1 flex-wrap">
                  <h3
                    className="font-display font-bold text-sm tracking-wide"
                    style={{ color: 'var(--text)' }}
                  >
                    {m.name}
                  </h3>
                  <span className="text-base flex-shrink-0">{m.flag}</span>
                </div>
                <p className="text-[11px] tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>
                  {m.role}
                </p>
                <p className="text-xs mb-3" style={{ color: 'var(--text-dim)' }}>
                  {m.location}
                </p>
                <p className="text-sm leading-6" style={{ color: 'var(--text-secondary)' }}>
                  {m.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Places strip */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p
            className="text-center text-xs tracking-[0.3em] uppercase mb-8"
            style={{ color: 'var(--text-dim)' }}
          >
            Places that shaped me
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { src: '/photos/College/1521526974php31POUB.png', label: 'AEC Asansol' },
              { src: '/photos/Companies/infobeans_acquires_philosophy_2019925_10438_25_09_2019.jpg', label: 'Infobeans' },
              { src: '/photos/GBM/image.png', label: 'GBM College' },
              { src: '/photos/school/9394d5440b67f06fd735f4a971a03755.jpg', label: 'E.P.S Gaya' },
            ].map(({ src, label }) => (
              <div
                key={label}
                className="glass flex flex-col items-center gap-2 p-3"
                style={{ width: '100px' }}
              >
                <div className="relative overflow-hidden rounded" style={{ width: '60px', height: '45px' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={label} className="w-full h-full object-cover" />
                </div>
                <span
                  className="text-[9px] tracking-widest uppercase text-center"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  )
}
