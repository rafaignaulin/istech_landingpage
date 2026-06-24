'use client'

import { useLocale } from '@/lib/locale-provider'

export default function Footer() {
  const { t } = useLocale()

  return (
    <footer className="border-t py-8 px-6" style={{ borderColor: 'var(--border-color)' }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
          © {new Date().getFullYear()} isTech. {t.footer.rights}
        </p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:rafa@ignaulin.com"
            className="text-sm hover:underline"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t.footer.email}
          </a>
          <a
            href="https://www.linkedin.com/in/rafa-ignaulin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline"
            style={{ color: 'var(--text-secondary)' }}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/rafaignaulin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:underline"
            style={{ color: 'var(--text-secondary)' }}
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
