'use client'
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

type Cert = {
  title: string
  category: string
  year: string
  file: string
  type: 'pdf' | 'img'
  highlight?: boolean
  icon: string
}

const certs: Cert[] = [
  {
    title: 'JEE Mains 2017',
    category: 'Academic Achievement',
    year: '2017',
    file: '/photos/achievements/CBSE%20-%20JOINT%20ENTRANCE%20EXAMINATION%20(MAIN)%20-%202017.pdf',
    type: 'pdf',
    highlight: true,
    icon: '🏆',
  },
  {
    title: 'B.Tech — Electrical Engineering',
    category: 'Academic Degree',
    year: '2021',
    file: '/photos/Degree%20-%20Electrical%20Engineering/Degree_B.Tech.pdf',
    type: 'pdf',
    highlight: true,
    icon: '🎓',
  },
  {
    title: 'Newton School Certificate',
    category: 'Full-Stack Training',
    year: '2022',
    file: '/photos/Technical%20Certificates/Newton%20School%20certificate.pdf',
    type: 'pdf',
    icon: '💻',
  },
  {
    title: 'Web Development',
    category: 'Dr. Angela Yu',
    year: '2022',
    file: '/photos/Technical%20Certificates/web%20dev%20certificate.pdf',
    type: 'pdf',
    icon: '🌐',
  },
  {
    title: 'Backend — MongoDB Express Node',
    category: 'Backend Development',
    year: '2022',
    file: '/photos/Technical%20Certificates/Backend%20API%20using%20MongoDb%20Express%20and%20Node.pdf',
    type: 'pdf',
    icon: '⚙️',
  },
  {
    title: 'Redux Certification',
    category: 'State Management',
    year: '2022',
    file: '/photos/Technical%20Certificates/reduxCertificate.pdf',
    type: 'pdf',
    icon: '🔄',
  },
  {
    title: 'Cinematography+',
    category: 'Phil Ebiner',
    year: '2023',
    file: '/photos/Technical%20Certificates/Cinematography%2B%20Certificate%20by%20Phil%20Ebiner.pdf',
    type: 'pdf',
    icon: '🎬',
  },
  {
    title: 'Fitness Trainer',
    category: 'Diet & Fitness Science',
    year: '2023',
    file: '/photos/Technical%20Certificates/Fitness_trainer.pdf',
    type: 'pdf',
    icon: '💪',
  },
  {
    title: 'Creative Thinking',
    category: 'Professional Development',
    year: '2023',
    file: '/photos/Technical%20Certificates/Creative_Thinking.png',
    type: 'img',
    icon: '💡',
  },
  {
    title: 'Information Security',
    category: 'Infobeans Training',
    year: '2023',
    file: '/photos/Technical%20Certificates/Information%20Security%20Course.pdf',
    type: 'pdf',
    icon: '🔒',
  },
  {
    title: 'Impactful Communication',
    category: 'Soft Skills',
    year: '2023',
    file: '/photos/Technical%20Certificates/Impactful%20Communication.pdf',
    type: 'pdf',
    icon: '🗣️',
  },
  {
    title: 'UHV — AICTE',
    category: 'Universal Human Values',
    year: '2025',
    file: '/photos/Technical%20Certificates/UHV_AICTE_13-15-DEC-2025.pdf',
    type: 'pdf',
    icon: '🌱',
  },
]

function Modal({ cert, onClose }: { cert: Cert; onClose: () => void }) {
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-3xl"
        style={{
          background: 'var(--bg-3)',
          border: '1px solid var(--border-hover)',
          maxHeight: '88vh',
        }}
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ borderBottom: '1px solid var(--border)' }}
        >
          <div>
            <span className="text-base mr-2">{cert.icon}</span>
            <span className="font-display font-semibold tracking-wide text-sm" style={{ color: 'var(--gold-light)' }}>
              {cert.title}
            </span>
            <span className="text-xs ml-3" style={{ color: 'var(--text-muted)' }}>
              {cert.category} · {cert.year}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-lg transition-colors hover:text-white"
            style={{ color: 'var(--text-muted)' }}
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div style={{ height: '70vh', overflow: 'hidden' }}>
          {cert.type === 'pdf' ? (
            <iframe
              src={cert.file}
              className="w-full h-full"
              title={cert.title}
              style={{ border: 'none', background: '#fff' }}
            />
          ) : (
            <div className="relative w-full h-full">
              <Image src={cert.file} alt={cert.title} fill className="object-contain p-4" />
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          className="px-5 py-3 flex justify-end"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <a
            href={cert.file}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.15em] uppercase px-4 py-2 transition-colors hover:bg-[rgba(212,175,55,0.1)]"
            style={{ color: 'var(--gold)', border: '1px solid rgba(212,175,55,0.3)' }}
          >
            Open in new tab ↗
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Achievements() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeCert, setActiveCert] = useState<Cert | null>(null)

  return (
    <section id="achievements" className="py-28 px-6 relative">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 100% at 50% 100%, rgba(212,175,55,0.04) 0%, transparent 70%)',
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.p
          className="section-label mb-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          04 / Achievements
        </motion.p>
        <motion.h2
          className="font-display text-4xl md:text-5xl font-bold tracking-wide mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          Proof of the <span className="gold-shimmer">Journey</span>
        </motion.h2>
        <motion.p
          className="text-sm leading-7 max-w-xl mb-14"
          style={{ color: 'var(--text-muted)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Certificates, degrees, and accolades — each one a chapter of relentless effort.
          Click any card to view the document.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              className="cert-card p-5 relative overflow-hidden"
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.06 }}
              onClick={() => setActiveCert(cert)}
              style={{
                borderColor: cert.highlight ? 'rgba(212,175,55,0.3)' : undefined,
                boxShadow: cert.highlight ? '0 0 20px rgba(212,175,55,0.07)' : undefined,
              }}
            >
              {cert.highlight && (
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
                  }}
                />
              )}

              <div className="text-3xl mb-4">{cert.icon}</div>

              <h3
                className="font-display font-semibold text-sm tracking-wide leading-tight mb-1"
                style={{ color: cert.highlight ? 'var(--gold-light)' : 'var(--text)' }}
              >
                {cert.title}
              </h3>
              <p className="text-xs mb-3" style={{ color: 'var(--text-muted)' }}>
                {cert.category}
              </p>
              <div className="flex items-center justify-between">
                <span
                  className="font-mono text-xs"
                  style={{ color: 'var(--gold-dark)' }}
                >
                  {cert.year}
                </span>
                <span
                  className="text-[10px] tracking-wider uppercase"
                  style={{ color: 'rgba(212,175,55,0.5)' }}
                >
                  View ↗
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeCert && (
          <Modal cert={activeCert} onClose={() => setActiveCert(null)} />
        )}
      </AnimatePresence>

      <div className="section-divider mt-20" />
    </section>
  )
}
