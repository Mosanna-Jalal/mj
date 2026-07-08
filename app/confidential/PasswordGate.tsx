'use client'

import { useActionState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { LuLock, LuArrowLeft } from 'react-icons/lu'
import { unlockConfidential, type UnlockState } from './actions'

const initial: UnlockState = { error: null }

export default function PasswordGate() {
  const [state, formAction, pending] = useActionState(unlockConfidential, initial)

  return (
    <main
      className="relative flex min-h-screen items-center justify-center px-6 py-20 overflow-hidden"
      style={{ background: 'var(--bg)', color: 'var(--text)' }}
    >
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(212,175,55,0.08) 0%, transparent 70%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-md text-center"
      >
        {/* Lock badge */}
        <div
          className="mx-auto mb-8 flex items-center justify-center rounded-full"
          style={{
            width: 76,
            height: 76,
            background: 'rgba(212,175,55,0.08)',
            border: '1px solid rgba(212,175,55,0.35)',
            color: 'var(--gold)',
            boxShadow: '0 0 40px rgba(212,175,55,0.12)',
          }}
        >
          <LuLock size={30} />
        </div>

        <p className="section-label mb-3">Restricted</p>
        <h1 className="font-display text-3xl md:text-4xl font-black tracking-wide mb-3">
          Confidential Area
        </h1>
        <p className="text-sm leading-7 mb-8 mx-auto max-w-xs" style={{ color: 'var(--text-muted)' }}>
          This section is private. Enter the access password to continue.
        </p>

        <form action={formAction} className="flex flex-col gap-3">
          <input
            type="password"
            name="password"
            autoFocus
            autoComplete="off"
            placeholder="Enter password"
            aria-label="Access password"
            className="w-full px-5 py-3.5 text-center tracking-[0.15em] outline-none transition-colors duration-300"
            style={{
              background: 'var(--surface)',
              border: `1px solid ${state.error ? 'rgba(220,80,80,0.6)' : 'var(--border)'}`,
              color: 'var(--text)',
              borderRadius: 4,
            }}
          />

          <button
            type="submit"
            disabled={pending}
            className="w-full px-8 py-3.5 font-semibold tracking-[0.14em] text-xs uppercase transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
            style={{
              background: 'var(--gold)',
              color: '#000',
              boxShadow: '0 0 30px rgba(212,175,55,0.22)',
              borderRadius: 4,
            }}
          >
            {pending ? 'Verifying…' : 'Unlock'}
          </button>
        </form>

        {state.error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-xs tracking-wide"
            style={{ color: '#e06666' }}
          >
            {state.error}
          </motion.p>
        )}

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase transition-colors duration-300"
          style={{ color: 'var(--text-muted)' }}
        >
          <LuArrowLeft size={13} /> Back to portfolio
        </Link>
      </motion.div>
    </main>
  )
}
