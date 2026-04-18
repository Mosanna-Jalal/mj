'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const interests = [
  {
    title: 'Poetry',
    subtitle: 'Hindi & Urdu verse',
    desc: 'Writing poetry is how I slow down. Mostly Hindi and Urdu — it\'s a personal practice more than anything else.',
  },
  {
    title: 'Psychology',
    subtitle: 'Robert A. Baron · Social Psychology',
    desc: 'I\'ve read through Robert A. Baron\'s psychology text. Understanding how people think informs how I approach building products.',
  },
  {
    title: 'Diet & Fitness',
    subtitle: 'Certified Fitness Trainer',
    desc: 'Completed a fitness trainer certification. I follow nutrition and training fairly seriously — it helps me stay consistent with everything else.',
  },
  {
    title: 'Currently Reading',
    subtitle: 'Never Split the Difference — Chris Voss',
    desc: 'A book on negotiation by a former FBI hostage negotiator. Practical, well-written, and surprisingly relevant to everyday situations.',
  },
]

export default function BeyondCode() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="beyond" className="py-28 px-6 relative overflow-hidden">
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
          style={{ color: 'var(--text)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          Other Interests
        </motion.h2>
        <motion.p
          className="text-sm leading-7 max-w-xl mb-14"
          style={{ color: 'var(--text-muted)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          A few things I spend time on outside of work.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {interests.map((item, i) => (
            <motion.div
              key={item.title}
              className="glass-card p-7"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1 }}
            >
              <h3
                className="font-display text-base font-semibold tracking-wide mb-1"
                style={{ color: 'var(--text)' }}
              >
                {item.title}
              </h3>
              <p
                className="text-[11px] tracking-[0.15em] uppercase mb-4"
                style={{ color: 'var(--text-dim)' }}
              >
                {item.subtitle}
              </p>
              <p className="text-sm leading-7" style={{ color: 'var(--text-secondary)' }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  )
}
