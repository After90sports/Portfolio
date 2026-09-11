import type { Metadata, Viewport } from 'next'
import { Crimson_Text, Unica_One } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

const crimsonText = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-crimson',
  display: 'swap',
})

const unicaOne = Unica_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-unica',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: 'Shamsudeen Husseni — Filmmaker, Sports Photographer & Creative Director',
  description:
    'Portfolio of Shamsudeen Husseni — filmmaker, sports photographer, creative director and production lead based in Accra, Ghana. Premiere Pro, After Effects, DaVinci Resolve, brand design and live event production.',
  keywords: [
    'filmmaker', 'sports photographer', 'video editor', 'creative director', 'Shamsudeen Husseni',
    'Accra sports photographer', 'Ghana video editor', 'Premiere Pro editor',
    'After Effects', 'DaVinci Resolve', 'creative designer Ghana', 'event production',
  ],
  authors: [{ name: 'Shamsudeen Husseni' }],
  creator: 'Shamsudeen Husseni',
  openGraph: {
    title: 'Shamsudeen Husseni — Filmmaker, Sports Photographer & Creative Director',
    description:
      'I turn raw footage and courtside moments into powerful visual stories. Filmmaking, sports photography, creative direction and production — based in Accra, Ghana.',
    type: 'website',
    siteName: 'Shamsudeen Husseni',
    locale: 'en_US',
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
    <html lang="en" className={`${crimsonText.variable} ${unicaOne.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
