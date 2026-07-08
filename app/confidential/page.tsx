import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import PasswordGate from './PasswordGate'
import ConfidentialClient from './ConfidentialClient'
import BiodataDocument from './BiodataDocument'

export const metadata: Metadata = {
  title: 'Confidential Area — Mosanna Jalal',
  description: 'Private, access-restricted area.',
  robots: { index: false, follow: false }, // keep out of search engines
}

export default async function ConfidentialPage() {
  const store = await cookies()
  const authed = store.get('confidential_auth')?.value === 'granted'

  if (!authed) return <PasswordGate />

  return (
    <ConfidentialClient>
      <BiodataDocument />
    </ConfidentialClient>
  )
}
