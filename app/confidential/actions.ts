'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

/* NOTE: This runs only on the server ('use server'), so the password is never
   shipped in the client bundle. For a hardened setup move it to an env var
   (e.g. process.env.CONFIDENTIAL_PASSWORD). */
const PASSWORD = 'KingwithacapitalK'
const COOKIE = 'confidential_auth'
const TOKEN = 'granted'

export type UnlockState = { error: string | null }

export async function unlockConfidential(
  _prev: UnlockState,
  formData: FormData,
): Promise<UnlockState> {
  const attempt = String(formData.get('password') ?? '')

  if (attempt !== PASSWORD) {
    return { error: 'Incorrect password — access denied.' }
  }

  const store = await cookies()
  store.set(COOKIE, TOKEN, {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    path: '/confidential',
    maxAge: 60 * 30, // 30 minutes
  })

  // Re-request the page; the server component now sees the auth cookie.
  redirect('/confidential')
}

export async function lockConfidential(): Promise<void> {
  const store = await cookies()
  store.delete({ name: COOKIE, path: '/confidential' })
  redirect('/confidential')
}
