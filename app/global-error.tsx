'use client'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body style={{ background: '#030303', color: '#f0f0f0', fontFamily: 'Arial, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', margin: 0 }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#d4af37', marginBottom: '1rem' }}>Something went wrong</h2>
          <button
            onClick={() => reset()}
            style={{ background: '#d4af37', color: '#000', border: 'none', padding: '0.75rem 2rem', cursor: 'pointer', fontWeight: 600 }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
