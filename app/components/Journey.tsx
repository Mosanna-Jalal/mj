'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const events = [
  {
    year: 'Early Days',
    title: 'Primary Schooling',
    place: 'E.P.S Gaya, Bihar',
    desc: 'The foundation was laid in the historic city of Gaya. Discipline, curiosity, and a hunger to understand the world were the gifts of these early years.',
    tag: 'Education',
    color: '#a08030',
  },
  {
    year: '~2015',
    title: '12th Science Stream',
    place: 'Gaya, Bihar',
    desc: 'Chose Science — Physics, Chemistry, Maths. The decision that set the engineering path in motion and opened the door to India\'s most competitive entrance exams.',
    tag: 'Education',
    color: '#a08030',
  },
  {
    year: '2017',
    title: 'JEE Mains 2017 — Cracked',
    place: 'All India',
    desc: 'One of India\'s toughest engineering entrance exams — cleared with determination. This milestone proved that pressure creates diamonds.',
    tag: '🏆 Achievement',
    color: 'var(--gold)',
    highlight: true,
  },
  {
    year: '2017–2021',
    title: 'B.Tech — Electrical Engineering',
    place: 'AEC Asansol, West Bengal',
    desc: 'College was more than a degree. Workshops, technical debates, seminars — and the discovery of programming. The seed of a decade-long passion was planted here.',
    tag: 'Education',
    color: '#a08030',
  },
  {
    year: '2018–2020',
    title: 'C & Java — Logic Forge',
    place: 'AEC, Self-taught',
    desc: 'Started with C, then mastered Java. Every algorithm, every data structure, every debugging marathon sharpened problem-solving into a superpower.',
    tag: 'Coding',
    color: '#4a9eff',
  },
  {
    year: '2021',
    title: 'The Great Pivot — Web Development',
    place: 'MERN Stack',
    desc: 'A defining career move. Shifted entirely to web development — diving deep into the MERN stack. The fullstack world became home.',
    tag: 'Career Pivot',
    color: '#3cb371',
  },
  {
    year: '2021–2022',
    title: 'Newton School of Technology',
    place: 'Online Internship & Training',
    desc: 'Mentored by professionals from Amazon and Microsoft. Trained rigorously in JavaScript by Arfat Salman (Oslo) and the full web development stack by Dr. Angela Yu (London, App Brewery). Earned the Newton School Certificate.',
    tag: 'Training',
    color: '#9b59b6',
  },
  {
    year: '2022–2024',
    title: 'Infobeans Technologies',
    place: 'Indore → Pune (Crystal IT Park → GigaSpace IT Park)',
    desc: 'Nearly two years at one of India\'s leading tech companies. Worked on OpenAI APIs, prompt engineering, MERN stack, PHP, Gutenberg blocks, and React under the IDG umbrella — a constellation of projects and brilliant colleagues.',
    tag: '💼 Professional',
    color: 'var(--gold)',
    highlight: true,
  },
  {
    year: '2024–Present',
    title: 'GBM College, Gaya',
    place: 'Administration Branch, Gaya',
    desc: 'Back to roots. Contributing to education administration while continuing to code, create, and grow. The journey goes on.',
    tag: 'Current',
    color: '#3cb371',
  },
]

function TimelineItem({
  event,
  index,
}: {
  event: (typeof events)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const isLeft = index % 2 === 0

  return (
    <div ref={ref} className="relative flex items-start gap-0 md:gap-8">
      {/* Left card (desktop even) */}
      <motion.div
        className="hidden md:block flex-1"
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {isLeft && (
          <div
            className="glass-card p-6 ml-auto max-w-md"
            style={{
              borderColor: event.highlight ? 'rgba(212,175,55,0.4)' : undefined,
              boxShadow: event.highlight ? '0 0 25px rgba(212,175,55,0.08)' : undefined,
            }}
          >
            <TimelineCard event={event} />
          </div>
        )}
      </motion.div>

      {/* Center line + node */}
      <div className="flex flex-col items-center" style={{ minWidth: '40px' }}>
        <motion.div
          className="timeline-node"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{
            background: event.highlight ? 'var(--gold-light)' : 'var(--gold)',
            boxShadow: event.highlight
              ? '0 0 0 5px rgba(212,175,55,0.2), 0 0 25px rgba(212,175,55,0.5)'
              : '0 0 0 4px rgba(212,175,55,0.15)',
          }}
        />
        <div className="timeline-line" style={{ height: '80px', width: '2px' }} />
      </div>

      {/* Right card (desktop odd, mobile all) */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div
          className="md:hidden glass-card p-6"
          style={{
            borderColor: event.highlight ? 'rgba(212,175,55,0.4)' : undefined,
          }}
        >
          <TimelineCard event={event} />
        </div>
        {!isLeft && (
          <div
            className="hidden md:block glass-card p-6 mr-auto max-w-md"
            style={{
              borderColor: event.highlight ? 'rgba(212,175,55,0.4)' : undefined,
              boxShadow: event.highlight ? '0 0 25px rgba(212,175,55,0.08)' : undefined,
            }}
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
            background: `${event.color}18`,
            border: `1px solid ${event.color}40`,
            color: event.color,
          }}
        >
          {event.tag}
        </span>
        <span
          className="font-mono text-xs font-semibold"
          style={{ color: event.color }}
        >
          {event.year}
        </span>
      </div>
      <h3
        className="font-display text-base font-bold tracking-wide mb-1"
        style={{ color: event.highlight ? 'var(--gold-light)' : 'var(--text)' }}
      >
        {event.title}
      </h3>
      <p
        className="text-xs tracking-wider mb-2"
        style={{ color: 'var(--gold-dark)' }}
      >
        📍 {event.place}
      </p>
      <p
        className="text-sm leading-6"
        style={{ color: 'rgba(240,240,240,0.65)' }}
      >
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
      {/* Radial bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,175,55,0.03) 0%, transparent 70%)',
        }}
      />

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
            transition={{ delay: 0.15 }}
          >
            The Road
            <span className="gold-shimmer"> Taken</span>
          </motion.h2>
          <motion.p
            className="text-sm leading-7 max-w-xl mb-16"
            style={{ color: 'var(--text-muted)' }}
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            From the classrooms of Gaya to the AI-powered corridors of Pune —
            every chapter shaped who I am.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central vertical line (desktop) */}
          <div
            className="absolute hidden md:block top-0 bottom-0"
            style={{
              left: '50%',
              width: '2px',
              background:
                'linear-gradient(180deg, transparent 0%, var(--gold-dark) 15%, var(--gold) 50%, var(--gold-dark) 85%, transparent 100%)',
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
