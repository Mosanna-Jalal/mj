'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const categories = [
  {
    label: 'Frontend',
    color: '#4a9eff',
    skills: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5 / CSS3', 'Redux', 'WordPress / Gutenberg', 'Tailwind CSS'],
  },
  {
    label: 'Backend',
    color: '#3cb371',
    skills: ['Node.js', 'Express.js', 'PHP', 'Java', 'C', 'REST APIs'],
  },
  {
    label: 'Database',
    color: '#f0a500',
    skills: ['MongoDB', 'Mongoose ODM', 'MySQL (basics)', 'Firebase (basics)'],
  },
  {
    label: 'AI & Emerging',
    color: '#c084fc',
    skills: ['OpenAI APIs', 'Prompt Engineering', 'Claude AI', 'Generative AI Tools', 'LLM Integration'],
  },
  {
    label: 'Tools & DevOps',
    color: '#fb7185',
    skills: ['Linux / Bash', 'Git & GitHub', 'VS Code', 'Postman', 'npm / Yarn', 'Webpack'],
  },
  {
    label: 'Soft Stack',
    color: 'var(--gold)',
    skills: ['System Design (basics)', 'Agile / Scrum', 'Technical Debugging', 'Code Review', 'Team Mentoring'],
  },
]

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-28 px-6 relative">
      {/* Bg accent */}
      <div
        className="absolute top-1/2 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)',
          filter: 'blur(60px)',
          transform: 'translateY(-50%)',
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.p
          className="section-label mb-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          03 / Skills
        </motion.p>
        <motion.h2
          className="font-display text-4xl md:text-5xl font-bold tracking-wide mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          The <span className="gold-shimmer">Arsenal</span>
        </motion.h2>
        <motion.p
          className="text-sm leading-7 max-w-xl mb-14"
          style={{ color: 'var(--text-muted)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          A decade of hands-on experience across the full stack — from logic gates
          in C to AI-powered products in React.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              className="glass-card p-6 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + ci * 0.1, duration: 0.6 }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)`,
                }}
              />

              {/* Category label */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}` }}
                />
                <span
                  className="font-display text-sm font-semibold tracking-[0.12em] uppercase"
                  style={{ color: cat.color }}
                >
                  {cat.label}
                </span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="skill-badge"
                    whileHover={{
                      borderColor: cat.color,
                      color: cat.color,
                      boxShadow: `0 0 12px ${cat.color}30`,
                    }}
                    style={{ borderColor: `${cat.color}25`, background: `${cat.color}08` }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Known Technical Skills Marquee ── */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p
            className="text-center text-xs tracking-[0.3em] uppercase mb-8"
            style={{ color: 'var(--text-dim)' }}
          >
            Known Technical Skills
          </p>

          {/* Fade edges */}
          <div className="relative overflow-hidden" style={{
            WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
            maskImage: 'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
          }}>
            <div className="marquee-track flex gap-4" style={{ width: 'max-content' }}>
              {[
                '/photos/Known%20Technical%20Skills/react-js-700x399.png',
                '/photos/Known%20Technical%20Skills/medium_MERN_Stack_9437df2ba9_62af1dd3fc.webp',
                '/photos/Known%20Technical%20Skills/Gold_MongoDB_FG.jpg',
                '/photos/Known%20Technical%20Skills/Feature%20graphic_Node.js-%20Develop%20server-side%20JavaScript%20applications.jpg',
                '/photos/Known%20Technical%20Skills/linux-adreajudr0n7ad5a.jpg',
                '/photos/Known%20Technical%20Skills/claude_ene5.1200.webp',
                '/photos/Known%20Technical%20Skills/generative-ai-tools-6181583717223482_l.jpg',
                '/photos/Known%20Technical%20Skills/1_mtsk3fQ_BRemFidhkel3dA.png',
                '/photos/Known%20Technical%20Skills/sddefault.jpg',
                '/photos/Known%20Technical%20Skills/concept-of-web-development-with-connecting-icons-and-hand-touching-screen-on-dark-background-photo.jpeg',
                '/photos/Known%20Technical%20Skills/images%20(1).jpg',
                '/photos/Known%20Technical%20Skills/images%20(1).png',
                '/photos/Known%20Technical%20Skills/images%20(2).png',
                '/photos/Known%20Technical%20Skills/images%20(3).png',
                '/photos/Known%20Technical%20Skills/images%20(4).png',
                '/photos/Known%20Technical%20Skills/images%20(5).png',
                '/photos/Known%20Technical%20Skills/images%20(6).png',
                '/photos/Known%20Technical%20Skills/images.jpg',
                '/photos/Known%20Technical%20Skills/images.png',
                // duplicate set for seamless loop
                '/photos/Known%20Technical%20Skills/react-js-700x399.png',
                '/photos/Known%20Technical%20Skills/medium_MERN_Stack_9437df2ba9_62af1dd3fc.webp',
                '/photos/Known%20Technical%20Skills/Gold_MongoDB_FG.jpg',
                '/photos/Known%20Technical%20Skills/Feature%20graphic_Node.js-%20Develop%20server-side%20JavaScript%20applications.jpg',
                '/photos/Known%20Technical%20Skills/linux-adreajudr0n7ad5a.jpg',
                '/photos/Known%20Technical%20Skills/claude_ene5.1200.webp',
                '/photos/Known%20Technical%20Skills/generative-ai-tools-6181583717223482_l.jpg',
                '/photos/Known%20Technical%20Skills/1_mtsk3fQ_BRemFidhkel3dA.png',
                '/photos/Known%20Technical%20Skills/sddefault.jpg',
                '/photos/Known%20Technical%20Skills/concept-of-web-development-with-connecting-icons-and-hand-touching-screen-on-dark-background-photo.jpeg',
                '/photos/Known%20Technical%20Skills/images%20(1).jpg',
                '/photos/Known%20Technical%20Skills/images%20(1).png',
                '/photos/Known%20Technical%20Skills/images%20(2).png',
                '/photos/Known%20Technical%20Skills/images%20(3).png',
                '/photos/Known%20Technical%20Skills/images%20(4).png',
                '/photos/Known%20Technical%20Skills/images%20(5).png',
                '/photos/Known%20Technical%20Skills/images%20(6).png',
                '/photos/Known%20Technical%20Skills/images.jpg',
                '/photos/Known%20Technical%20Skills/images.png',
              ].map((src, i) => (
                <div
                  key={i}
                  className="glass flex-shrink-0 overflow-hidden"
                  style={{ width: '130px', height: '80px', borderRadius: '4px' }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                    style={{ display: 'block' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  )
}
