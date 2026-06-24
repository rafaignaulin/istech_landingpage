'use client'

import Image from 'next/image'
import { useLocale } from '@/lib/locale-provider'

export default function Hero() {
  const { t } = useLocale()

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl w-full text-center">
        <div className="flex justify-center mb-8">
          <Image src="/img/svg/istech_blue.png" alt="isTech" width={80} height={80} />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span style={{ color: 'var(--accent)' }}>{t.hero.title}</span>
        </h1>
        <p className="text-xl md:text-2xl mb-4 font-medium" style={{ color: 'var(--text-secondary)' }}>
          {t.hero.subtitle}
        </p>
        <p className="text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
          {t.hero.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2">
            {t.hero.cta} →
          </a>
          <a href="#about" className="btn-secondary inline-flex items-center justify-center gap-2">
            {t.hero.learnMore}
          </a>
        </div>
      </div>
    </section>
  )
}
