import type { Metadata } from 'next'
import Work from '@/components/Work'

export const metadata: Metadata = {
  title: 'Field Notes — Shamsudeen Husseni',
  description:
    'Selected filmmaking, sports photography, creative direction and production work by Shamsudeen Husseni, including After90, Adjuma.io and event production for conferences and hackathons in Ghana.',
}

export default function WorkPage() {
  return <Work />
}
