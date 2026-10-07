'use client'

import { useLocale } from '@/lib/locale-provider'

export default function Results() {
  const { t } = useLocale()

  return (
    <section id="results" className="section-container border-t" style={{ borderColor: 'var(--border-color)' }}>
      <div className="max-w-6xl mx-auto">
        <span className="eyebrow block text-center">{t.results.eyebrow}</span>
        <h2 className="section-title text-center">{t.results.title}</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {t.results.description}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.results.items.map((item, idx) => (
            <div key={idx} className="card">
              <p className="font-mono text-2xl font-bold mb-3" style={{ color: 'var(--verified)' }}>
                {item.metric}
              </p>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
