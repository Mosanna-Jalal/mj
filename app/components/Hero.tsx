'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const roles = [
  'Full-Stack Developer',
  'MERN Specialist',
  'AI Engineer',
  'Cinematographer',
  'Problem Solver',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'var(--bg)',
      }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Edge vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, rgba(0,0,0,0.6) 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ── Left: Text ── */}
        <div>
          <motion.p
            className="font-mono text-xs tracking-[0.4em] uppercase mb-6"
            style={{ color: 'rgba(212,175,55,0.55)' }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Gaya, Bihar &mdash; India
          </motion.p>

          <motion.h1
            className="font-display text-6xl md:text-7xl xl:text-8xl font-black leading-none tracking-tight mb-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            MOSANNA
          </motion.h1>

          <motion.h1
            className="font-display text-6xl md:text-7xl xl:text-8xl font-black leading-none tracking-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            style={{
              WebkitTextStroke: '1px rgba(255,255,255,0.25)',
              color: 'transparent',
            }}
          >
            JALAL
          </motion.h1>

          {/* Divider line */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            style={{ transformOrigin: 'left' }}
          >
            <div className="h-px w-10" style={{ background: 'rgba(255,255,255,0.2)' }} />
            <span className="font-mono text-[10px] tracking-[0.45em] uppercase" style={{ color: 'rgba(239,239,239,0.3)' }}>
              MJ
            </span>
            <div className="h-px flex-1 max-w-14" style={{ background: 'rgba(212,175,55,0.25)' }} />
          </motion.div>

          {/* Animated role */}
          <motion.div
            className="h-7 mb-8 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                className="text-base tracking-[0.12em]"
                style={{ color: 'var(--text-muted)' }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.p
            className="text-sm leading-8 max-w-md mb-10"
            style={{ color: 'var(--text-secondary)', lineHeight: '1.9' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            Full-stack developer from Gaya, Bihar. I build web products,
            work with AI APIs, and have been writing code for about a decade.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            <a
              href="#journey"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#journey')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-3 font-semibold tracking-[0.14em] text-xs uppercase transition-all duration-300"
              style={{
                background: '#efefef',
                color: '#0a0a0a',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.background = '#efefef')}
            >
              My Journey
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-3 font-semibold tracking-[0.14em] text-xs uppercase transition-all duration-300"
              style={{
                border: '1px solid rgba(255,255,255,0.18)',
                color: 'rgba(239,239,239,0.65)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
                e.currentTarget.style.color = '#efefef'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'
                e.currentTarget.style.color = 'rgba(239,239,239,0.65)'
              }}
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* ── Right: Photo ── */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle glow only */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />

          {/* Photo */}
          <div className="photo-frame relative" style={{ width: '270px', height: '270px' }}>
            <Image
              src="/photos/My%20Pics/theycallme_mj___20250323_8.jpg"
              alt="Mosanna Jalal"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <motion.span
          className="text-[9px] tracking-[0.4em] uppercase"
          style={{ color: 'var(--text-dim)' }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          Scroll
        </motion.span>
        <motion.div
          className="w-px h-10"
          style={{ background: 'linear-gradient(180deg, rgba(212,175,55,0.6) 0%, transparent 100%)' }}
          animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}
