'use client'

import { useState } from 'react'
import { useLocale } from '@/lib/locale-provider'
import { useTheme } from '@/lib/theme-provider'
import Wordmark from '@/components/Wordmark'

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { locale, t, setLocale } = useLocale()
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.mission, href: '#mission' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{ borderColor: 'var(--border-color)' }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Wordmark size="sm" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors"
              style={{ color: 'var(--text-secondary)' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)' }}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => setLocale(locale === 'en' ? 'pt' : 'en')}
            className="font-mono text-xs font-semibold px-2 py-1 rounded border transition-colors"
            style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
          >
            {locale === 'en' ? 'PT' : 'EN'}
          </button>
          <button
            onClick={toggleTheme}
            className="icon-btn"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 mb-1.5 transition-all" style={{ backgroundColor: 'var(--text-primary)' }} />
          <span className="block w-6 h-0.5 mb-1.5 transition-all" style={{ backgroundColor: 'var(--text-primary)' }} />
          <span className="block w-6 h-0.5 transition-all" style={{ backgroundColor: 'var(--text-primary)' }} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t px-6 py-4 space-y-4" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-primary)' }}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium"
              style={{ color: 'var(--text-secondary)' }}
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={() => setLocale(locale === 'en' ? 'pt' : 'en')}
              className="font-mono text-xs font-semibold px-2 py-1 rounded border"
              style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
            >
              {locale === 'en' ? 'PT' : 'EN'}
            </button>
            <button onClick={toggleTheme} className="icon-btn" aria-label="Toggle theme">
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
