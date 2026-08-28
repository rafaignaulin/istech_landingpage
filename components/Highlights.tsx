'use client'

import { useLocale } from '@/lib/locale-provider'

export default function Highlights() {
  const { t } = useLocale()

  return (
    <section className="section-container border-t" style={{ borderColor: 'var(--border-color)' }}>
      <div className="max-w-4xl mx-auto">
        <span className="eyebrow">Verified</span>
        <div
          className="card"
          style={{
            background: 'linear-gradient(to right, rgba(31, 148, 99, 0.08), transparent)',
            borderColor: 'rgba(31, 148, 99, 0.25)',
          }}
        >
          <h3 className="text-xl font-semibold mb-6" style={{ color: 'var(--text-primary)' }}>
            {t.highlights.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {t.highlights.items.map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <span className="text-lg flex-shrink-0" style={{ color: 'var(--verified)' }}>✓</span>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
