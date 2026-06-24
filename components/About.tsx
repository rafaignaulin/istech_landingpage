'use client'

import { useLocale } from '@/lib/locale-provider'

const serviceIcons = ['📊', '☁️', '🤖', '🏢']

export default function About() {
  const { t } = useLocale()

  return (
    <section id="about" className="section-container border-t" style={{ borderColor: 'var(--border-color)' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">{t.about.title}</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {t.about.description}
        </p>
        <div id="services" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.about.cards.map((card, idx) => (
            <div key={idx} className="card text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-lg text-3xl" style={{ backgroundColor: 'rgba(0, 102, 204, 0.1)' }}>
                  {serviceIcons[idx]}
                </div>
              </div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {card.title}
              </h3>
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
