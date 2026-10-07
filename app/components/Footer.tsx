'use client'
import { useRef, useState, type CSSProperties } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaInstagram, FaCode, FaFilm } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { LuLock, LuArrowUpRight } from 'react-icons/lu'

const studios = [
  {
    name: 'MJX Web Studio',
    tag: 'Web Development',
    desc: 'Full-stack web solutions — MERN, React, AI integrations, and modern web experiences.',
    icon: FaCode,
    color: 'rgba(212,175,55,0.8)',
  },
  {
    name: 'MJX Cinematix Studio',
    tag: 'Cinematography',
    desc: 'Visual storytelling through cinematic frames, lighting craft, and post-production.',
    icon: FaFilm,
    color: 'rgba(240,240,240,0.55)',
  },
]

/* brand: accent for the ring / glow / hover tint · iconBg: the glossy badge fill */
const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/Mosanna-Jalal',
    icon: FaGithub,
    brand: '#a371f7',
    iconBg: 'linear-gradient(145deg, #3d444d 0%, #161b22 55%, #0d1117 100%)',
    handle: '@Mosanna-Jalal',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mosanna-jalal-2a1a931aa/',
    icon: FaLinkedinIn,
    brand: '#0a66c2',
    iconBg: 'linear-gradient(145deg, #2a8ff0 0%, #0a66c2 50%, #004182 100%)',
    handle: 'Mosanna Jalal',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/theycallme_mj__/',
    icon: FaInstagram,
    brand: '#e1306c',
    iconBg: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%)',
    handle: '@theycallme_mj__',
  },
  {
    label: 'X / Twitter',
    href: 'https://x.com/JalalMosanna',
    icon: FaXTwitter,
    brand: '#1d9bf0',
    iconBg: 'linear-gradient(145deg, #2f3336 0%, #0f1419 55%, #000000 100%)',
    handle: '@JalalMosanna',
  },
]

export default function Footer() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [copied, setCopied] = useState(false)

  const email = 'mjiraqui322@gmail.com'

  const copyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <footer
      id="contact"
      ref={ref}
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: 'var(--bg-3)' }}
    >
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)',
        }}
      />

      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(212,175,55,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* ── Header ── */}
          <div className="text-center mb-14">
            <p className="section-label mb-4">08 / Contact</p>
            <h2 className="font-display text-4xl md:text-6xl font-black tracking-wide mb-6">
              Get in Touch
            </h2>
            <p
              className="text-sm leading-8 max-w-md mx-auto"
              style={{ color: 'var(--text-muted)' }}
            >
              If you have a project in mind or just want to say hello, feel free to reach out.
            </p>
          </div>

          {/* ── Social Links ── */}
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <p
              className="text-center text-[10px] tracking-[0.3em] uppercase mb-6"
              style={{ color: 'var(--text-dim)' }}
            >
              Find me on
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
              {socials.map((s, i) => {
                const Icon = s.icon
                return (
                  /* entrance motion lives on the wrapper so it never fights the CSS hover transform */
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.25 + i * 0.07 }}
                  >
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-card"
                      style={{ '--brand': s.brand, '--brand-bg': s.iconBg } as CSSProperties}
                    >
                      <LuArrowUpRight className="social-card-arrow" size={14} aria-hidden />

                      <span className="social-icon">
                        <Icon size={24} />
                      </span>

                      <span className="block w-full text-center">
                        <span className="social-label block text-[11px] tracking-[0.2em] uppercase font-semibold">
                          {s.label}
                        </span>
                        <span
                          className="block text-[11px] font-mono mt-1 truncate"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          {s.handle}
                        </span>
                      </span>
                    </a>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* ── MJX Studios ── */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45 }}
          >
            {studios.map((s) => {
              const StudioIcon = s.icon
              return (
              <div
                key={s.name}
                className="relative overflow-hidden p-6"
                style={{
                  background: `${s.color}06`,
                  border: `1px solid ${s.color}25`,
                  transition: 'border-color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${s.color}60`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${s.color}25`)}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, ${s.color}80, transparent)` }}
                />
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 flex items-center justify-center flex-shrink-0 rounded"
                    style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${s.color}40`, color: s.color }}
                  >
                    <StudioIcon size={18} />
                  </div>
                  <div>
                    <p
                      className="text-[10px] tracking-[0.25em] uppercase mb-1 font-medium"
                      style={{ color: s.color }}
                    >
                      {s.tag}
                    </p>
                    <h3
                      className="font-display font-bold text-base tracking-wide mb-1"
                      style={{ color: 'var(--text)' }}
                    >
                      {s.name}
                    </h3>
                    <p className="text-xs leading-5" style={{ color: 'var(--text-muted)' }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
              )
            })}
          </motion.div>

          {/* ── Email CTA ── */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55 }}
          >
            <a
              href={`mailto:${email}`}
              className="px-8 py-3.5 font-semibold tracking-[0.12em] text-xs uppercase transition-all duration-300 hover:scale-105"
              style={{
                background: 'var(--gold)',
                color: '#000',
                boxShadow: '0 0 30px rgba(212,175,55,0.25)',
              }}
            >
              Send an Email
            </a>
            <button
              onClick={copyEmail}
              className="px-8 py-3.5 font-semibold tracking-[0.12em] text-xs uppercase transition-all duration-300"
              style={{
                border: '1px solid rgba(212,175,55,0.4)',
                color: copied ? 'var(--gold-light)' : 'var(--text-muted)',
                background: copied ? 'rgba(212,175,55,0.08)' : 'transparent',
              }}
            >
              {copied ? '✓ Copied!' : 'Copy Email'}
            </button>
          </motion.div>

          <p
            className="text-center font-mono text-sm tracking-wider mb-14"
            style={{ color: 'rgba(212,175,55,0.45)' }}
          >
            {email}
          </p>

          {/* ── Divider ── */}
          <div className="section-divider mb-10" />

          {/* ── Bottom bar ── */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="font-display text-2xl font-black tracking-[0.15em]">
              MJ<span style={{ color: 'var(--gold)' }}>.</span>
            </div>

            {/* Confidential Area */}
            <Link
              href="/confidential"
              className="group inline-flex items-center gap-2.5 px-5 py-2.5 transition-all duration-300"
              style={{
                border: '1px solid rgba(212,175,55,0.3)',
                borderRadius: 4,
                color: 'var(--text-muted)',
                background: 'rgba(212,175,55,0.04)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212,175,55,0.6)'
                e.currentTarget.style.background = 'rgba(212,175,55,0.1)'
                e.currentTarget.style.color = 'var(--gold)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212,175,55,0.3)'
                e.currentTarget.style.background = 'rgba(212,175,55,0.04)'
                e.currentTarget.style.color = 'var(--text-muted)'
              }}
            >
              <LuLock size={13} style={{ color: 'var(--gold)' }} />
              <span className="text-[11px] tracking-[0.2em] uppercase font-semibold">
                Confidential Area
              </span>
            </Link>

            <div className="flex items-center gap-4">
              <span className="text-[10px] tracking-[0.15em] uppercase font-medium" style={{ color: '#4a9eff60' }}>
                MJX Web Studio
              </span>
              <span style={{ color: 'var(--text-dim)' }}>·</span>
              <span className="text-[10px] tracking-[0.15em] uppercase font-medium" style={{ color: '#c084fc60' }}>
                MJX Cinematix Studio
              </span>
            </div>
          </div>

          <p className="text-center text-xs mt-6" style={{ color: 'var(--text-dim)' }}>
            © 2025 · Mosanna Jalal · Gaya, India
          </p>
          <p className="text-center text-[10px] mt-2 tracking-[0.15em]" style={{ color: 'var(--text-dim)' }}>
            Designed &amp; Developed by{' '}
            <span style={{ color: 'rgba(212,175,55,0.5)' }}>Mosanna Jalal</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
