import type { Metadata } from 'next'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import ReactMarkdown from 'react-markdown'
import styles from './page.module.css'

// Source of truth: ~/www/projects/istech (legal/render istech-site). Copy the rendered files
// from legal/out/istech-site/ into content/legal/ when the policy changes.
const read = (f: string) => readFileSync(path.join(process.cwd(), 'content', 'legal', f), 'utf8')

export const metadata: Metadata = {
  title: 'Privacy Policy — ISTech',
  description: 'How ISTech (Ignaulin Soluções Tecnológicas LTDA) handles personal data sent through this site.',
  alternates: { canonical: 'https://istech.ignaulin.com/privacy' },
}

export default function Privacy() {
  return (
    <main className={styles.shell}>
      <article className={styles.doc}>
        <ReactMarkdown>{read('privacy.en.md')}</ReactMarkdown>
      </article>
      <hr className={styles.rule} />
      <article className={styles.doc} lang="pt-BR">
        <ReactMarkdown>{read('privacy.pt.md')}</ReactMarkdown>
      </article>
    </main>
  )
}
