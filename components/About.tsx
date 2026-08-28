'use client'

import { useLocale } from '@/lib/locale-provider'

function PlatformIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="M3 13l9 5 9-5" />
    </svg>
  )
}

function CloudIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 18h10a4 4 0 0 0 0-8 6 6 0 0 0-11.3-1A4.5 4.5 0 0 0 7 18Z" />
    </svg>
  )
}

function AIIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="7" width="10" height="10" rx="1" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" />
    </svg>
  )
}

function ConsultingIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="8" width="18" height="12" rx="1" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  )
}

const serviceIcons = [PlatformIcon, CloudIcon, AIIcon, ConsultingIcon]

export default function About() {
  const { t } = useLocale()

  return (
    <section id="about" className="section-container border-t" style={{ borderColor: 'var(--border-color)' }}>
      <div className="max-w-6xl mx-auto">
        <span className="eyebrow block text-center">Services</span>
        <h2 className="section-title text-center">{t.about.title}</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {t.about.description}
        </p>
        <div id="services" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.about.cards.map((card, idx) => {
            const Icon = serviceIcons[idx]
            return (
              <div key={idx} className="card text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(46, 99, 235, 0.1)', color: 'var(--accent)' }}>
                    <Icon />
                  </div>
                </div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {card.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
