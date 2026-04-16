'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const interests = [
  {
    icon: '🖋️',
    title: 'Poetry',
    subtitle: 'The Other Language',
    color: '#c084fc',
    desc: "When code can't capture the feeling, verse steps in. Poetry is where I process the world — emotion distilled into rhythm and metaphor. It is my oldest form of expression.",
    detail: 'Hindi & Urdu verse',
  },
  {
    icon: '🧠',
    title: 'Psychology',
    subtitle: 'Understanding the Human OS',
    color: '#4a9eff',
    desc: "I've studied Robert A. Baron's foundational psychology text cover to cover — because building better products starts with understanding people, not just systems.",
    detail: 'Robert A. Baron · Social Psychology',
  },
  {
    icon: '💪',
    title: 'Diet & Fitness Science',
    subtitle: 'Certified Fitness Trainer',
    color: '#3cb371',
    desc: "The body is infrastructure. Certified in diet science, I study nutrition, metabolic health, and training methodologies — because peak performance requires a tuned machine.",
    detail: 'Certified Fitness Trainer',
  },
  {
    icon: '📚',
    title: 'Currently Reading',
    subtitle: 'Never Split the Difference',
    color: 'var(--gold)',
    desc: "Chris Voss, former FBI hostage negotiator, breaks down the art of high-stakes negotiation. Because the skills that close deals, resolve conflicts, and build rapport are universal.",
    detail: 'Chris Voss · Negotiation',
  },
]

export default function BeyondCode() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="beyond" className="py-28 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 20% 50%, rgba(192,132,252,0.04) 0%, transparent 60%)',
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.p
          className="section-label mb-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          06 / Beyond Code
        </motion.p>
        <motion.h2
          className="font-display text-4xl md:text-5xl font-bold tracking-wide mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          More Than a <span className="gold-shimmer">Developer</span>
        </motion.h2>
        <motion.p
          className="text-sm leading-7 max-w-xl mb-14"
          style={{ color: 'var(--text-muted)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          The depth of a developer is measured not just in lines of code, but in the breadth
          of experience they bring to every problem. Here is the rest of my world.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interests.map((item, i) => (
            <motion.div
              key={item.title}
              className="glass-card p-8 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.12 }}
            >
              {/* Top border accent */}
              <div
                className="absolute top-0 left-0 w-0 h-px group-hover:w-full transition-all duration-500"
                style={{ background: item.color }}
              />

              {/* Subtle bg glow */}
              <div
                className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle, ${item.color}18 0%, transparent 70%)`,
                  filter: 'blur(20px)',
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded flex items-center justify-center text-2xl flex-shrink-0"
                    style={{
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}30`,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3
                      className="font-display font-bold text-base tracking-wide"
                      style={{ color: 'var(--text)' }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs tracking-wider" style={{ color: item.color }}>
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-7 mb-5" style={{ color: 'rgba(240,240,240,0.65)' }}>
                  {item.desc}
                </p>

                <div
                  className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase px-3 py-1.5"
                  style={{
                    background: `${item.color}10`,
                    border: `1px solid ${item.color}30`,
                    color: item.color,
                  }}
                >
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: item.color }} />
                  {item.detail}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  )
}
