'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const mentors = [
  {
    name: 'Arfat Salman',
    role: 'JavaScript Mentor',
    location: 'Oslo, Norway',
    desc: 'Arfat took JavaScript from a language to a philosophy. His deep, rigorous training in JS fundamentals, closures, async patterns, and architecture shaped how I think about every line of code I write.',
    color: '#f0a500',
    initial: 'AS',
    flag: '🇳🇴',
  },
  {
    name: 'Dr. Angela Yu',
    role: 'Web Dev Instructor · App Brewery Founder',
    location: 'London, UK',
    desc: 'One of the world\'s most gifted instructors. With Dr. Angela Yu, I travelled the entire landscape of web development — from HTML basics to full-stack deployment. Brilliant, clear, and genuinely inspiring.',
    color: '#fb7185',
    initial: 'AY',
    flag: '🇬🇧',
  },
  {
    name: 'Newton School Mentors',
    role: 'Industry Professionals',
    location: 'Amazon · Microsoft · and more',
    desc: 'The Newton School internship connected me to real-world tech professionals. Their insights on scaling systems, code quality, and industry standards bridged the gap between academia and production.',
    color: '#4a9eff',
    initial: 'NS',
    flag: '🏛️',
  },
  {
    name: 'Infobeans Colleagues',
    role: 'Teammates & Co-developers',
    location: 'Pune, India',
    desc: 'Nearly two years of shared sprints, late-night deployments, code reviews, and creative problem-solving. Still connected, still grateful. The IDG team was a family.',
    color: '#3cb371',
    initial: 'IB',
    flag: '🏢',
  },
]

export default function Gratitude() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="gratitude" className="py-28 px-6 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

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
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          Standing on <span className="gold-shimmer">Giants</span>
        </motion.h2>
        <motion.p
          className="text-sm leading-7 max-w-xl mb-6"
          style={{ color: 'var(--text-muted)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Nobody builds alone. I am the sum of every teacher, mentor, colleague, and
          stranger who shared their knowledge generously. This section is a permanent
          thank-you.
        </motion.p>

        {/* Italicised quote */}
        <motion.blockquote
          className="italic text-sm max-w-2xl mb-14 pl-4 leading-8"
          style={{
            color: 'var(--gold-dark)',
            borderLeft: '2px solid rgba(212,175,55,0.4)',
          }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          &ldquo;I also want to thank those whose names I cannot recall — but who were
          with me during the long, quiet nights of my programming journey. You mattered.&rdquo;
        </motion.blockquote>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mentors.map((m, i) => (
            <motion.div
              key={m.name}
              className="glass-card p-7 flex gap-5 relative overflow-hidden"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12 }}
            >
              {/* Accent line */}
              <div
                className="absolute top-0 left-0 w-full h-px"
                style={{
                  background: `linear-gradient(90deg, ${m.color}80, transparent)`,
                }}
              />

              {/* Avatar */}
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center font-display text-base font-bold flex-shrink-0"
                style={{
                  background: `${m.color}15`,
                  border: `2px solid ${m.color}40`,
                  color: m.color,
                }}
              >
                {m.initial}
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
                <p className="text-[11px] tracking-wider mb-1" style={{ color: m.color }}>
                  {m.role}
                </p>
                <p className="text-xs mb-3" style={{ color: 'var(--text-muted)' }}>
                  📍 {m.location}
                </p>
                <p className="text-sm leading-6" style={{ color: 'rgba(240,240,240,0.6)' }}>
                  {m.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* College logos strip */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
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
                <div
                  className="relative overflow-hidden rounded"
                  style={{ width: '60px', height: '45px' }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={label}
                    className="w-full h-full object-cover"
                  />
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
