'use client'

import { useLocale } from '@/lib/locale-provider'

export default function Mission() {
  const { t } = useLocale()

  return (
    <section
      id="mission"
      className="section-container border-t"
      style={{ borderColor: 'var(--border-color)' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="section-title">{t.mission.title}</h2>
        <p className="text-lg mb-8 leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          {t.mission.description}
        </p>
        <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2">
          {t.mission.cta} →
        </a>
      </div>
    </section>
  )
}
