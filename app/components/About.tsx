'use client'
import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const stats = [
  { value: '10+', label: 'Years Coding' },
  { value: '3', label: 'Cities Lived' },
  { value: '1', label: 'JEE Cracked' },
  { value: '∞', label: 'Curiosity' },
]

const allPics = [
  '/photos/My%20Pics/theycallme_mj___20250323_8.jpg',
  '/photos/My%20Pics/IMG-20241006-WA0057.jpg',
  '/photos/My%20Pics/IMG-20241006-WA0055.jpg',
  '/photos/My%20Pics/IMG_3385.JPG',
  '/photos/My%20Pics/IMG_20220629_204720.jpg',
  '/photos/My%20Pics/IMG_20221102_074925.jpg',
  '/photos/My%20Pics/IMG_20210405_205629.jpg',
  '/photos/My%20Pics/Snapchat-186385685.jpg',
  '/photos/My%20Pics/image.png',
  '/photos/My%20Pics/Gemini_Generated_Image_8cwnl98cwnl98cwn.png',
]

function PhotoSlideshow() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setIndex(i => (i + 1) % allPics.length), [])
  const prev = useCallback(() => setIndex(i => (i - 1 + allPics.length) % allPics.length), [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 3800)
    return () => clearInterval(id)
  }, [paused, next])

  return (
    <div
      className="relative select-none"
      style={{ aspectRatio: '3/4' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Main photo area */}
      <div
        className="relative w-full h-full overflow-hidden"
        style={{
          border: '1px solid var(--border)',
          boxShadow: '0 0 60px rgba(0,0,0,0.7), 0 0 120px rgba(212,175,55,0.04)',
        }}
      >
        <AnimatePresence>
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{
              opacity: 1,
              scale: 1.12,
              transition: {
                opacity: { duration: 0.9, ease: 'easeIn' },
                scale: { duration: 5, ease: 'linear' },
              },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.7, ease: 'easeOut' },
            }}
          >
            <Image
              src={allPics[index]}
              alt="Mosanna Jalal"
              fill
              className="object-cover object-top"
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic dark vignette */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: `
              radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%),
              linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 30%, transparent 60%, rgba(0,0,0,0.75) 100%)
            `,
          }}
        />

        {/* Gold corner accents */}
        <div className="absolute top-0 left-0 w-7 h-7 border-t-2 border-l-2 z-20" style={{ borderColor: 'var(--gold)' }} />
        <div className="absolute top-0 right-0 w-7 h-7 border-t-2 border-r-2 z-20" style={{ borderColor: 'var(--gold)' }} />
        <div className="absolute bottom-0 left-0 w-7 h-7 border-b-2 border-l-2 z-20" style={{ borderColor: 'var(--gold)' }} />
        <div className="absolute bottom-0 right-0 w-7 h-7 border-b-2 border-r-2 z-20" style={{ borderColor: 'var(--gold)' }} />

        {/* Watermark bottom-left */}
        <div className="absolute bottom-5 left-5 z-20">
          <p className="font-mono text-[9px] tracking-[0.35em] uppercase" style={{ color: 'rgba(212,175,55,0.35)' }}>
            Mosanna Jalal · MJ
          </p>
        </div>

        {/* Prev / Next click zones */}
        <button
          onClick={prev}
          className="absolute left-0 top-0 w-1/4 h-full z-20 cursor-w-resize"
          style={{ background: 'transparent', border: 'none', outline: 'none' }}
          aria-label="Previous photo"
        />
        <button
          onClick={next}
          className="absolute right-0 top-0 w-1/4 h-full z-20 cursor-e-resize"
          style={{ background: 'transparent', border: 'none', outline: 'none' }}
          aria-label="Next photo"
        />

        {/* Pause indicator */}
        <AnimatePresence>
          {paused && (
            <motion.div
              className="absolute top-4 left-5 z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div style={{
                width: '7px',
                height: '12px',
                borderLeft: '2px solid rgba(212,175,55,0.5)',
                borderRight: '2px solid rgba(212,175,55,0.5)',
                display: 'inline-block',
              }} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progress bar */}
      {!paused && (
        <motion.div
          key={`progress-${index}`}
          className="absolute bottom-0 left-0 h-[2px] z-30"
          style={{ background: 'var(--gold)', boxShadow: '0 0 6px rgba(212,175,55,0.6)' }}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 3.8, ease: 'linear' }}
        />
      )}
    </div>
  )
}

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="py-28 px-6 relative overflow-hidden">
      {/* Subtle bg accent */}
      <div
        className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label mb-3">01 / About Me</p>
          <h2
            className="font-display text-4xl md:text-5xl font-bold tracking-wide"
            style={{
              background: 'linear-gradient(90deg, #f0f0f0 0%, var(--gold-light) 60%, var(--gold-dark) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            The Man Behind
            <br />
            The Code
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-5 text-base leading-8" style={{ color: 'rgba(240,240,240,0.75)' }}>
              <p>
                I&apos;m <span style={{ color: 'var(--gold)' }} className="font-semibold">Mosanna Jalal</span> —
                a full-stack developer from Gaya, Bihar, whose journey began with the
                disciplined halls of{' '}
                <span style={{ color: 'var(--text)' }}>E.P.S Gaya</span> and reached the
                competitive arena of{' '}
                <span style={{ color: 'var(--text)' }}>JEE Mains 2017</span>.
              </p>
              <p>
                My B.Tech in{' '}
                <span style={{ color: 'var(--text)' }}>Electrical Engineering</span> from{' '}
                <span style={{ color: 'var(--text)' }}>AEC Asansol</span> was where I discovered
                my true calling — not in circuits, but in{' '}
                <span style={{ color: 'var(--gold)' }}>code</span>. I dove into C and Java,
                sharpening logic like a blade, then made a defining pivot in{' '}
                <span style={{ color: 'var(--text)' }}>2021</span> toward the web.
              </p>
              <p>
                Trained by mentors from{' '}
                <span style={{ color: 'var(--text)' }}>Amazon</span> and{' '}
                <span style={{ color: 'var(--text)' }}>Microsoft</span> at Newton School,
                shaped by{' '}
                <span style={{ color: 'var(--gold)' }}>Arfat Salman</span> from Oslo and
                the legendary{' '}
                <span style={{ color: 'var(--gold)' }}>Dr. Angela Yu</span> from London —
                I built my craft with the best.
              </p>
              <p>
                At{' '}
                <span style={{ color: 'var(--text)' }}>Infobeans Technologies, Pune</span>,
                I spent nearly two years deep in{' '}
                <span style={{ color: 'var(--gold)' }}>OpenAI APIs</span>, React, PHP,
                Gutenberg, and multi-project IDG work. Today, I continue this journey
                from{' '}
                <span style={{ color: 'var(--text)' }}>GBM College, Gaya</span>.
              </p>
              <p>
                But code is only one layer. I write{' '}
                <span style={{ color: 'var(--gold)' }}>poetry</span>, research{' '}
                <span style={{ color: 'var(--gold)' }}>psychology</span>, study diet science,
                and shoot cinematic frames. I am, in every sense,
                a multidimensional human being.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 mt-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="glass-card p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div
                    className="font-display text-2xl font-bold mb-1"
                    style={{ color: 'var(--gold)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[10px] tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Cinematic slideshow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <PhotoSlideshow />
          </motion.div>
        </div>
      </div>

      <div className="section-divider mt-24" />
    </section>
  )
}
