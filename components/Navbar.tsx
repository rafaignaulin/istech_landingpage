'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLocale } from '@/lib/locale-provider'
import { useTheme } from '@/lib/theme-provider'

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
          <Image src="/img/svg/istech_blue.png" alt="isTech" width={32} height={32} />
          <span className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>isTech</span>
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
            className="text-sm px-2 py-1 rounded border transition-colors"
            style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
          >
            {locale === 'en' ? 'PT' : 'EN'}
          </button>
          <button
            onClick={toggleTheme}
            className="text-sm px-2 py-1"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
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
          <div className="flex gap-4 pt-2">
            <button
              onClick={() => setLocale(locale === 'en' ? 'pt' : 'en')}
              className="text-sm px-2 py-1 rounded border"
              style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
            >
              {locale === 'en' ? 'PT' : 'EN'}
            </button>
            <button onClick={toggleTheme} className="text-sm px-2 py-1">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
