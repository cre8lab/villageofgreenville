import Link from 'next/link'

const navColumns = [
  {
    heading: 'Community Record',
    links: [
      { href: '/', label: 'Home' },
      { href: '/timeline', label: 'Greenville Timeline' },
      { href: '/who-represents', label: 'Who Represents Greenville?' },
    ],
  },
  {
    heading: 'Public Information',
    links: [
      { href: '/public-records', label: 'Public Records' },
      { href: '/growth-development', label: 'Growth & Development' },
      { href: '/about', label: 'About & Standards' },
    ],
  },
]

const officialLinks = [
  { href: 'https://greenvillewi.gov/', label: 'Village of Greenville (Official)' },
  { href: 'https://myvote.wi.gov/en-us/My-Elected-Officials', label: 'MyVote Wisconsin' },
  { href: 'https://www.outagamie.gov/', label: 'Outagamie County' },
]

export default function SiteFooter() {
  return (
    <footer className="bg-navy-dark border-t border-navy-light mt-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Identity column */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="font-serif text-xl font-semibold text-warm-white block leading-tight">
                VillageOfGreenville<span className="text-gold">.com</span>
              </span>
              <span className="font-sans text-[0.6rem] font-bold tracking-[0.18em] uppercase text-navy-muted block mt-1">
                The Community Record
              </span>
            </div>
            <p className="text-sm font-sans text-warm-text leading-relaxed">
              A community record built on facts, public sources, and respect for Greenville residents. Greenville, WI 54942.
            </p>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.heading}>
              <h3 className="section-label text-navy-muted mb-3">{col.heading}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-sans text-warm-text no-underline hover:text-gold-light transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Official links */}
          <div>
            <h3 className="section-label text-navy-muted mb-3">Official Sources</h3>
            <ul className="space-y-2">
              {officialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-sans text-warm-text no-underline hover:text-gold-light transition-colors flex items-center gap-1.5"
                  >
                    {link.label}
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-50 flex-shrink-0">
                      <path d="M2 10L10 2M10 2H5M10 2v5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-light pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs font-sans text-navy-muted">
              Independent community website. Not affiliated with the official Village of Greenville government.
            </p>
            <p className="text-xs font-sans text-navy-muted">
              Information may be incomplete or contain errors. Verify important facts with official sources.
            </p>
          </div>
          <div className="text-xs font-sans text-navy-muted text-right flex-shrink-0">
            <p>&copy; {new Date().getFullYear()} VillageOfGreenville.com</p>
            <p className="mt-0.5">v0.1 &middot; Greenville, WI 54942</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
