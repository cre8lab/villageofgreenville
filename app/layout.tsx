import type { Metadata } from 'next'
import { Spectral, Mulish } from 'next/font/google'
import './globals.css'
import DisclaimerBanner from '@/components/DisclaimerBanner'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

const spectral = Spectral({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-spectral',
  display: 'swap',
})

const mulish = Mulish({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-mulish',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'VillageOfGreenville.com — The Community Record',
    template: '%s | VillageOfGreenville.com',
  },
  description:
    'A community record built on facts, public sources, and respect for Greenville residents. Independent community website for Greenville, WI 54942.',
  keywords: ['Greenville', 'Wisconsin', 'community record', 'public records', 'village board', 'Greenville WI'],
  openGraph: {
    title: 'VillageOfGreenville.com — The Community Record',
    description:
      'A community record built on facts, public sources, and respect for Greenville residents.',
    siteName: 'VillageOfGreenville.com',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spectral.variable} ${mulish.variable}`}>
      <body className="min-h-screen flex flex-col bg-cream antialiased">
        <DisclaimerBanner />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
