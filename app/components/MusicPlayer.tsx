'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCrown } from 'react-icons/fa'

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(true)
      const audio = audioRef.current
      if (!audio) return
      audio.volume = 0.35
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }, 1200)
    return () => clearTimeout(t)
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.volume = 0.35
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/They Call Him King Theme King 320 Kbps.mp3"
        loop
        preload="auto"
      />

      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Label above button */}
            {/* Crown — always visible */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FaCrown size={14} style={{ color: 'var(--gold)', filter: 'drop-shadow(0 0 6px rgba(212,175,55,0.7))' }} />
            </motion.div>

            <AnimatePresence>
              {!playing && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center gap-1"
                >
                  <p
                    className="font-mono text-[9px] tracking-[0.3em] uppercase whitespace-nowrap"
                    style={{ color: 'rgba(212,175,55,0.6)' }}
                  >
                    They Call Him King
                  </p>
                  <motion.div
                    className="w-px h-4"
                    style={{ background: 'linear-gradient(180deg, rgba(212,175,55,0.5) 0%, transparent 100%)' }}
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Button */}
            <div className="relative flex items-center justify-center">
              {/* Pulse rings — only when not playing */}
              {!playing && (
                <>
                  {[1, 2, 3].map(i => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full pointer-events-none"
                      style={{
                        width: '56px',
                        height: '56px',
                        border: '1px solid rgba(212,175,55,0.6)',
                      }}
                      animate={{
                        scale: [1, 2.2],
                        opacity: [0.7, 0],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: 'easeOut',
                        delay: i * 0.55,
                      }}
                    />
                  ))}
                </>
              )}

              <motion.button
                onClick={toggle}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.93 }}
                title={playing ? 'Pause music' : 'Play music'}
                className="relative flex items-center justify-center rounded-full"
                style={{
                  width: '56px',
                  height: '56px',
                  background: playing
                    ? 'rgba(3,3,3,0.9)'
                    : 'linear-gradient(135deg, var(--gold-dark) 0%, var(--gold) 50%, var(--gold-light) 100%)',
                  border: playing
                    ? '1px solid rgba(212,175,55,0.4)'
                    : '1px solid rgba(212,175,55,0.8)',
                  boxShadow: playing
                    ? '0 0 20px rgba(212,175,55,0.15), 0 4px 20px rgba(0,0,0,0.5)'
                    : '0 0 32px rgba(212,175,55,0.45), 0 0 64px rgba(212,175,55,0.15), 0 8px 32px rgba(0,0,0,0.5)',
                  backdropFilter: 'blur(12px)',
                  cursor: 'pointer',
                  transition: 'background 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease',
                }}
              >
                {playing ? (
                  /* Animated equalizer bars */
                  <span className="flex items-end gap-[3px]" style={{ height: '18px' }}>
                    {[1, 2, 3, 4].map(i => (
                      <motion.span
                        key={i}
                        style={{
                          display: 'block',
                          width: '3px',
                          background: 'var(--gold)',
                          borderRadius: '2px',
                        }}
                        animate={{ height: ['4px', '16px', '8px', '14px', '4px'] }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: i * 0.12,
                        }}
                      />
                    ))}
                  </span>
                ) : (
                  /* Play triangle — dark on gold bg */
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ marginLeft: '2px' }}>
                    <path d="M4 2.5L15 9L4 15.5V2.5Z" fill="#0a0a0a" />
                  </svg>
                )}
              </motion.button>
            </div>

            {/* "Now Playing" tag when active */}
            <AnimatePresence>
              {playing && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="font-mono text-[8px] tracking-[0.25em] uppercase"
                  style={{ color: 'rgba(212,175,55,0.45)' }}
                >
                  Now Playing
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
