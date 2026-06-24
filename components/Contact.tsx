'use client'

import { useState, FormEvent } from 'react'
import { useLocale } from '@/lib/locale-provider'

export default function Contact() {
  const { t } = useLocale()
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    setError('')
    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed to send')
      setSubmitted(true)
    } catch {
      setError('Failed to send message. Please try again or email us directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="section-container border-t" style={{ borderColor: 'var(--border-color)' }}>
      <div className="max-w-2xl mx-auto">
        <h2 className="section-title text-center">{t.contact.title}</h2>
        <p className="text-center mb-8" style={{ color: 'var(--text-secondary)' }}>
          {t.contact.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
          <a
            href="mailto:rafa@ignaulin.com"
            className="card flex items-center gap-3 hover:border-accent transition-colors"
            style={{ borderColor: 'var(--border-color)' }}
          >
            <span className="text-2xl">✉️</span>
            <div>
              <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>Email</p>
              <p className="text-sm" style={{ color: 'var(--accent)' }}>rafa@ignaulin.com</p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/rafa-ignaulin/"
            target="_blank"
            rel="noopener noreferrer"
            className="card flex items-center gap-3 hover:border-accent transition-colors"
            style={{ borderColor: 'var(--border-color)' }}
          >
            <span className="text-2xl">💼</span>
            <div>
              <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>LinkedIn</p>
              <p className="text-sm" style={{ color: 'var(--accent)' }}>linkedin.com/in/rafa-ignaulin</p>
            </div>
          </a>
        </div>

        {submitted ? (
          <div className="card text-center py-8">
            <p className="text-lg font-semibold mb-2" style={{ color: 'var(--accent)' }}>
              {t.contact.submit} ✓
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                {t.contact.name}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder={t.contact.namePlaceholder}
                className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all focus:ring-2 focus:ring-accent/50"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)',
                }}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                {t.contact.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={t.contact.emailPlaceholder}
                className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all focus:ring-2 focus:ring-accent/50"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)',
                }}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                {t.contact.message}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder={t.contact.messagePlaceholder}
                className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all focus:ring-2 focus:ring-accent/50 resize-none"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)',
                }}
              />
            </div>
            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}
            <button type="submit" className="btn-primary w-full" disabled={sending}>
              {sending ? '...' : `${t.contact.submit} →`}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
