import type { Metadata } from 'next'
import About from '@/components/About'

export const metadata: Metadata = {
  title: 'About — Shamsudeen Husseni',
  description:
    'Filmmaker, sports photographer and creative director based in Accra, Ghana — founder of After90, with 4+ years turning raw footage and courtside moments into brand storytelling, podcasts and live event coverage.',
}

export default function AboutPage() {
  return <About />
}
