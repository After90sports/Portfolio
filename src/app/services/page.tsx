import type { Metadata } from 'next'
import Services from '@/components/Services'

export const metadata: Metadata = {
  title: 'Services — Shamsudeen Husseni',
  description:
    'Filmmaking, sports photography, creative direction, event production and brand design services from Shamsudeen Husseni, based in Accra, Ghana.',
}

export default function ServicesPage() {
  return <Services />
}
