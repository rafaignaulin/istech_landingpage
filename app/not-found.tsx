import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4" style={{ color: 'var(--accent)' }}>404</h1>
        <p className="text-xl mb-8" style={{ color: 'var(--text-secondary)' }}>
          Page not found
        </p>
        <Link href="/" className="btn-primary inline-block">
          Back to Home
        </Link>
      </div>
    </main>
  )
}
