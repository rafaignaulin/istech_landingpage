import type { Metadata } from 'next'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import ReactMarkdown from 'react-markdown'
import styles from '../privacy/page.module.css'

// Source of truth: ~/www/projects/istech (legal/render istech-site). Copy the rendered files
// from legal/out/istech-site/ into content/legal/ when the policy changes.
const read = (f: string) => readFileSync(path.join(process.cwd(), 'content', 'legal', f), 'utf8')

export const metadata: Metadata = {
  title: 'Refund Policy | ISTech',
  description: 'Refunds and cancellations at ISTech (Ignaulin Soluções Tecnológicas LTDA).',
  alternates: { canonical: 'https://istechdata.com/refund' },
}

export default function Refund() {
  return (
    <main className={styles.shell}>
      <article className={styles.doc}>
        <ReactMarkdown>{read('refund.en.md')}</ReactMarkdown>
      </article>
      <hr className={styles.rule} />
      <article className={styles.doc} lang="pt-BR">
        <ReactMarkdown components={{ h1: 'h2' }}>{read('refund.pt.md')}</ReactMarkdown>
      </article>
    </main>
  )
}
