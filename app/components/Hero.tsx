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

type Particle = {
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 18 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1.5,
        duration: Math.random() * 12 + 10,
        delay: Math.random() * 8,
      }))
    )
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
        background:
          'radial-gradient(ellipse 90% 70% at 75% 40%, rgba(212,175,55,0.07) 0%, transparent 65%), radial-gradient(ellipse 60% 50% at 15% 85%, rgba(180,140,30,0.04) 0%, transparent 55%), #030303',
      }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(212,175,55,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.035) 1px, transparent 1px)',
          backgroundSize: '70px 70px',
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(0,0,0,0.7) 100%)',
        }}
      />

      {/* Particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ── Left: Text ── */}
        <div>
          <motion.p
            className="section-label mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            ✦ Welcome to my universe
          </motion.p>

          <motion.h1
            className="font-display text-6xl md:text-7xl xl:text-8xl font-black leading-none tracking-tight mb-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            MOSANNA
          </motion.h1>

          <motion.h1
            className="font-display text-6xl md:text-7xl xl:text-8xl font-black leading-none tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            style={{
              WebkitTextStroke: '1.5px rgba(212,175,55,0.6)',
              color: 'transparent',
            }}
          >
            JALAL
          </motion.h1>

          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="h-px w-12" style={{ background: 'var(--gold)' }} />
            <span
              className="font-mono text-xs tracking-[0.4em]"
              style={{ color: 'var(--gold)' }}
            >
              MJ
            </span>
            <div className="h-px flex-1 max-w-16" style={{ background: 'rgba(212,175,55,0.3)' }} />
          </motion.div>

          {/* Animated role */}
          <motion.div
            className="h-8 mb-8 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                className="text-lg tracking-wider"
                style={{ color: 'var(--text-muted)' }}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35 }}
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.p
            className="text-base leading-8 max-w-md mb-10"
            style={{ color: 'var(--text-muted)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            A decade of code, a life of curiosity. From the banks of Gaya to
            the AI-powered floors of Pune — building things that matter, one
            line at a time.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <a
              href="#journey"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#journey')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-3 font-semibold tracking-[0.12em] text-xs uppercase transition-all duration-300 hover:scale-105"
              style={{
                background: 'var(--gold)',
                color: '#000',
                boxShadow: '0 0 25px rgba(212,175,55,0.3)',
              }}
            >
              My Journey
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-3 font-semibold tracking-[0.12em] text-xs uppercase transition-all duration-300 hover:bg-[rgba(212,175,55,0.08)]"
              style={{
                border: '1px solid var(--gold)',
                color: 'var(--gold)',
              }}
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* ── Right: Photo ── */}
        <motion.div
          className="flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Outer ring */}
          <div
            className="absolute rounded-full"
            style={{
              width: '360px',
              height: '360px',
              border: '1px solid rgba(212,175,55,0.18)',
              animation: 'rotate-slow 25s linear infinite',
            }}
          />
          {/* Inner ring */}
          <div
            className="absolute rounded-full"
            style={{
              width: '310px',
              height: '310px',
              border: '1px dashed rgba(212,175,55,0.10)',
              animation: 'rotate-slow-reverse 18s linear infinite',
            }}
          />

          {/* Glow backdrop */}
          <div
            className="absolute rounded-full"
            style={{
              width: '280px',
              height: '280px',
              background: 'radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 70%)',
              filter: 'blur(30px)',
            }}
          />

          {/* Photo */}
          <div
            className="photo-frame relative"
            style={{ width: '260px', height: '260px' }}
          >
            <Image
              src="/photos/My%20Pics/theycallme_mj___20250323_8.jpg"
              alt="Mosanna Jalal"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Floating badge top-right */}
          <motion.div
            className="glass absolute"
            style={{
              top: '20px',
              right: '-10px',
              padding: '8px 16px',
              fontSize: '10px',
              letterSpacing: '0.25em',
              color: 'var(--gold)',
              textTransform: 'uppercase',
            }}
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            ◈ 10+ Years Coding
          </motion.div>

          {/* Floating badge bottom-left */}
          <motion.div
            className="glass absolute"
            style={{
              bottom: '30px',
              left: '-10px',
              padding: '8px 16px',
              fontSize: '10px',
              letterSpacing: '0.25em',
              color: 'var(--gold)',
              textTransform: 'uppercase',
            }}
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            ◈ MERN + AI
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.span
          className="text-[10px] tracking-[0.35em] uppercase"
          style={{ color: 'var(--text-dim)' }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll
        </motion.span>
        <motion.div
          className="w-px h-12"
          style={{
            background: 'linear-gradient(180deg, var(--gold) 0%, transparent 100%)',
          }}
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}
