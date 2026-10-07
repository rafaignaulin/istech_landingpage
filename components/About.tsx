'use client'

import { useLocale } from '@/lib/locale-provider'

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
        <div id="services" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.about.cards.map((card, idx) => (
            <div key={idx} className="card flex flex-col">
              <div className="flex items-center justify-between gap-3 mb-4">
                <span
                  className="font-mono text-xs font-semibold px-2 py-1 rounded"
                  style={{ backgroundColor: 'rgba(46, 99, 235, 0.1)', color: 'var(--accent)' }}
                >
                  {String.fromCharCode(65 + idx)} · {card.tag}
                </span>
                <span className="font-mono text-xs" style={{ color: 'var(--text-tertiary)' }}>
                  {card.timeline}
                </span>
              </div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                <b style={{ color: 'var(--text-primary)' }}>{t.about.forLabel}:</b> {card.for}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
