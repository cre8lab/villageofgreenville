export default function DisclaimerBanner() {
  return (
    <div
      className="w-full bg-navy-dark border-b border-navy-light"
      role="banner"
      aria-label="Site independence notice"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center gap-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" aria-hidden="true" />
        <p className="text-xs text-warm-border font-sans tracking-wide">
          <span className="font-semibold text-gold-muted">Independent community website.</span>
          {' '}Not affiliated with the official Village of Greenville government.
          {' '}For official services, visit{' '}
          <a
            href="https://greenvillewi.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-muted underline underline-offset-2 hover:text-gold-light transition-colors"
          >
            greenvillewi.gov
          </a>
          .
        </p>
      </div>
    </div>
  )
}
