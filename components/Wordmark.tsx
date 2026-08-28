const sizes = {
  sm: 'text-lg',
  md: 'text-2xl',
  lg: 'text-4xl',
  hero: 'text-6xl md:text-8xl',
} as const

export default function Wordmark({
  size = 'md',
  className = '',
}: {
  size?: keyof typeof sizes
  className?: string
}) {
  return (
    <span
      className={`font-serif font-bold ${sizes[size]} ${className}`}
      style={{ color: 'var(--wordmark)' }}
      role="img"
      aria-label="ISTech"
    >
      IST
      <span className="italic font-medium" style={{ color: 'var(--wordmark-accent)' }}>
        ech
      </span>
    </span>
  )
}
