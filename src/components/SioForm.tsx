'use client'

import { useState, type FormEvent } from 'react'

export default function SioForm({ id, styles }: { id: string; styles: Record<string, string> }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      await fetch('https://systeme.io/embedded/39441551/subscription', {
        method: 'POST',
        body: data,
        mode: 'no-cors',
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.sioForm} id={id} style={{ textAlign: 'center', padding: '2rem 0' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>&#10003;</div>
        <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>
          C&apos;est envoy&eacute; !
        </p>
        <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
          V&eacute;rifie ta bo&icirc;te mail (et tes spams).
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.sioForm}
      id={id}
    >
      <div className={styles.sioField}>
        <input type="email" name="email" placeholder="Ton email" required className={styles.sioInput} />
      </div>
      <div className={styles.sioField}>
        <input type="text" name="surname" placeholder="Ton prenom" required className={styles.sioInput} />
      </div>
      <button type="submit" className={styles.sioSubmit} disabled={status === 'loading'}>
        {status === 'loading' ? 'Envoi en cours...' : 'Recevoir les 3 agents gratuits \u2192'}
      </button>
      {status === 'error' && (
        <p style={{ color: '#EF4444', fontSize: '0.85rem', textAlign: 'center' }}>
          Une erreur est survenue. R&eacute;essaie.
        </p>
      )}
    </form>
  )
}
