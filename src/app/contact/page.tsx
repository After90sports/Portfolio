import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Shamsudeen Husseni',
  description:
    'Get in touch with Shamsudeen Husseni for filmmaking, sports photography, creative direction and production work.',
}

export default function ContactPage() {
  return <ContactForm />
}
