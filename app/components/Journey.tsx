'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const events = [
  {
    year: 'Early Days',
    title: 'Primary Schooling',
    place: 'E.P.S Gaya, Bihar',
    desc: 'Grew up in Gaya. School gave me structure, curiosity, and a habit of asking why things work the way they do.',
    tag: 'Education',
  },
  {
    year: '~2015',
    title: '12th — Science Stream',
    place: 'Gaya, Bihar',
    desc: 'Chose Physics, Chemistry, and Maths. Set the path toward engineering entrance exams.',
    tag: 'Education',
  },
  {
    year: '2017',
    title: 'JEE Mains 2017',
    place: 'All India',
    desc: 'Qualified JEE Mains — one of India\'s competitive engineering entrance exams.',
    tag: 'Achievement',
    highlight: true,
  },
  {
    year: '2017–2021',
    title: 'B.Tech — Electrical Engineering',
    place: 'AEC Asansol, West Bengal',
    desc: 'Studied Electrical Engineering. Got introduced to programming along the way and found it more interesting than circuits.',
    tag: 'Education',
  },
  {
    year: '2018–2020',
    title: 'Learning C & Java',
    place: 'Self-taught alongside college',
    desc: 'Started with C, then picked up Java. Focused on fundamentals — algorithms, data structures, problem solving.',
    tag: 'Coding',
  },
  {
    year: '2021',
    title: 'Moved into Web Development',
    place: 'MERN Stack',
    desc: 'Decided to shift focus to web development. Spent time learning the MERN stack from the ground up.',
    tag: 'Career',
  },
  {
    year: '2021–2022',
    title: 'Newton School of Technology',
    place: 'Online Training',
    desc: 'Trained in JavaScript by Arfat Salman and in full web development by Dr. Angela Yu. Completed an online internship programme.',
    tag: 'Training',
  },
  {
    year: '2022–2024',
    title: 'Infobeans Technologies',
    place: 'Indore → Pune',
    desc: 'Worked for nearly two years on React, PHP, Gutenberg blocks, OpenAI API integrations, and multi-project work under the IDG umbrella.',
    tag: 'Work',
    highlight: true,
  },
  {
    year: '2024–Present',
    title: 'GBM College, Gaya',
    place: 'Administration, Gaya',
    desc: 'Back in Gaya, working in college administration. Continuing to code and learn on the side.',
    tag: 'Current',
  },
]

function TimelineItem({ event, index }: { event: (typeof events)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const isLeft = index % 2 === 0

  return (
    <div ref={ref} className="relative flex items-start gap-0 md:gap-8">
      {/* Left card (desktop even) */}
      <motion.div
        className="hidden md:block flex-1"
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.1 }}
      >
        {isLeft && (
          <div
            className="glass-card p-6 ml-auto max-w-md"
            style={{ borderColor: event.highlight ? 'var(--border-hover)' : undefined }}
          >
            <TimelineCard event={event} />
          </div>
        )}
      </motion.div>

      {/* Center node */}
      <div className="flex flex-col items-center" style={{ minWidth: '40px' }}>
        <motion.div
          className="timeline-node"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.2 }}
          style={event.highlight ? { background: 'var(--text)', boxShadow: '0 0 0 4px var(--border)' } : {}}
        />
        <div className="timeline-line" style={{ height: '80px', width: '1px' }} />
      </div>

      {/* Right card (desktop odd, mobile all) */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: isLeft ? 30 : -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.1 }}
      >
        <div className="md:hidden glass-card p-6">
          <TimelineCard event={event} />
        </div>
        {!isLeft && (
          <div
            className="hidden md:block glass-card p-6 mr-auto max-w-md"
            style={{ borderColor: event.highlight ? 'var(--border-hover)' : undefined }}
          >
            <TimelineCard event={event} />
          </div>
        )}
      </motion.div>
    </div>
  )
}

function TimelineCard({ event }: { event: (typeof events)[0] }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <span
          className="text-[10px] tracking-[0.2em] uppercase px-2 py-0.5"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            color: 'var(--text-dim)',
          }}
        >
          {event.tag}
        </span>
        <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
          {event.year}
        </span>
      </div>
      <h3
        className="font-display text-base font-bold tracking-wide mb-1"
        style={{ color: 'var(--text)' }}
      >
        {event.title}
      </h3>
      <p className="text-xs tracking-wide mb-2" style={{ color: 'var(--text-muted)' }}>
        {event.place}
      </p>
      <p className="text-sm leading-6" style={{ color: 'var(--text-secondary)' }}>
        {event.desc}
      </p>
    </div>
  )
}

export default function Journey() {
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true })

  return (
    <section id="journey" className="py-28 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div ref={headRef}>
          <motion.p
            className="section-label mb-3"
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
          >
            02 / Journey
          </motion.p>
          <motion.h2
            className="font-display text-4xl md:text-5xl font-bold tracking-wide mb-4"
            style={{ color: 'var(--text)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            How I Got Here
          </motion.h2>
          <motion.p
            className="text-sm leading-7 max-w-xl mb-16"
            style={{ color: 'var(--text-muted)' }}
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            A straightforward account of where I studied, what I learned, and where I worked.
          </motion.p>
        </div>

        <div className="relative">
          {/* Central vertical line (desktop) */}
          <div
            className="absolute hidden md:block top-0 bottom-0"
            style={{
              left: '50%',
              width: '1px',
              background: 'linear-gradient(180deg, transparent 0%, var(--border-hover) 15%, var(--border-hover) 85%, transparent 100%)',
              transform: 'translateX(-50%)',
            }}
          />
          <div className="flex flex-col gap-0">
            {events.map((event, i) => (
              <TimelineItem key={i} event={event} index={i} />
            ))}
          </div>
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  )
}
