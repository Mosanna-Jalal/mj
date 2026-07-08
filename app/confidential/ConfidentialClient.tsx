'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { LuShieldCheck, LuEyeOff, LuArrowLeft, LuLock } from 'react-icons/lu'
import { lockConfidential } from './actions'

export default function ConfidentialClient({ children }: { children: React.ReactNode }) {
  const [masked, setMasked] = useState(false) // window/tab not focused → hide content
  const [warn, setWarn] = useState(false) // brief "not permitted" flash
  const warnTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    document.body.classList.add('confidential-lock')

    const flashWarning = () => {
      setWarn(true)
      if (warnTimer.current) clearTimeout(warnTimer.current)
      warnTimer.current = setTimeout(() => setWarn(false), 2600)
    }

    // On Windows, PrintScreen copies the screen to the clipboard — overwrite it.
    const scrubClipboard = () => {
      navigator.clipboard
        ?.writeText('⛔ Screenshots of this confidential page are not permitted.')
        .catch(() => {})
    }

    const mask = () => setMasked(true)
    const unmask = () => setMasked(false)
    const onVisibility = () => (document.hidden ? mask() : unmask())

    const onKey = (e: KeyboardEvent) => {
      const key = (e.key || '').toLowerCase()

      // PrintScreen (fires reliably on keyup)
      if (key === 'printscreen' || e.code === 'PrintScreen') {
        scrubClipboard()
        flashWarning()
        return
      }
      // Block print / save-to-PDF and save-page shortcuts
      if ((e.ctrlKey || e.metaKey) && (key === 'p' || key === 's')) {
        e.preventDefault()
        flashWarning()
      }
      // Block the macOS screenshot shortcut chords (best-effort)
      if (e.metaKey && e.shiftKey && ['3', '4', '5'].includes(key)) {
        flashWarning()
      }
    }

    const block = (e: Event) => e.preventDefault()

    window.addEventListener('blur', mask)
    window.addEventListener('focus', unmask)
    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('keydown', onKey)
    window.addEventListener('keyup', onKey)
    document.addEventListener('contextmenu', block)
    document.addEventListener('copy', block)
    document.addEventListener('cut', block)
    document.addEventListener('dragstart', block)

    return () => {
      document.body.classList.remove('confidential-lock')
      window.removeEventListener('blur', mask)
      window.removeEventListener('focus', unmask)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('keyup', onKey)
      document.removeEventListener('contextmenu', block)
      document.removeEventListener('copy', block)
      document.removeEventListener('cut', block)
      document.removeEventListener('dragstart', block)
      if (warnTimer.current) clearTimeout(warnTimer.current)
    }
  }, [])

  return (
    <main
      className="relative min-h-screen px-4 py-8 md:py-12 overflow-hidden"
      style={{ background: 'var(--bg)', color: 'var(--text)' }}
    >
      {/* backdrop glow */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 40% at 50% 0%, rgba(212,175,55,0.06) 0%, transparent 70%)',
        }}
      />

      {/* ── Top control bar ── */}
      <div className="relative z-10 mx-auto mb-8 flex w-full max-w-[720px] items-center justify-between gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase transition-colors duration-300"
          style={{ color: 'var(--text-muted)' }}
        >
          <LuArrowLeft size={13} /> Portfolio
        </Link>

        <span
          className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase"
          style={{
            color: 'var(--gold)',
            background: 'rgba(212,175,55,0.07)',
            border: '1px solid rgba(212,175,55,0.3)',
            borderRadius: 999,
          }}
        >
          <LuShieldCheck size={13} /> Confidential
        </span>

        <form action={lockConfidential}>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-3 py-1.5 text-[11px] tracking-[0.15em] uppercase transition-colors duration-300"
            style={{ color: 'var(--text-muted)', border: '1px solid var(--border)', borderRadius: 4 }}
          >
            <LuLock size={12} /> Lock
          </button>
        </form>
      </div>

      {/* ── Protected content ── */}
      <div
        className="relative z-10 select-none transition-[filter] duration-200"
        style={{ filter: masked ? 'blur(22px)' : 'none' }}
      >
        {children}

        <p className="mt-6 text-center text-[10px] tracking-[0.2em] uppercase" style={{ color: 'var(--text-dim)' }}>
          Private document · Do not distribute or screenshot
        </p>
      </div>

      {/* ── Mask overlay (window/tab not focused) ── */}
      {masked && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-3 text-center px-6"
          style={{ background: 'var(--bg)' }}
        >
          <LuEyeOff size={30} style={{ color: 'var(--gold)' }} />
          <p className="text-sm tracking-[0.15em] uppercase" style={{ color: 'var(--text-muted)' }}>
            Content hidden while the window is not focused
          </p>
        </div>
      )}

      {/* ── Screenshot / print warning flash ── */}
      {warn && (
        <div
          className="fixed left-1/2 bottom-8 z-50 px-5 py-3 text-center text-xs tracking-wide"
          style={{
            animation: 'confidential-warn 2.6s ease forwards',
            background: 'rgba(110,20,35,0.95)',
            color: '#fff',
            borderRadius: 6,
            boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
          }}
        >
          ⛔ Screenshots &amp; printing are disabled on this confidential page.
        </div>
      )}
    </main>
  )
}
