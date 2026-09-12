'use client'

import { Phone, Mail, MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const details = [
  {
    icon: Phone,
    label: 'Phone',
    value: '705-286-6900',
    href: 'tel:+17052866900',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'motelminden@gmail.com',
    href: 'mailto:motelminden@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Motel Minden, 12600 Hwy 35, Minden, ON K0M 2K0',
    href: 'https://www.google.com/maps/search/?api=1&query=Motel+Minden+12600+Hwy+35+Minden+ON+K0M+2K0',
  },
]

export function Contact() {
  return (
    <section id="contact" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">

        {/* Heading */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Contact
          </p>

          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            We&apos;d love to hear from you
          </h2>

          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Have a question about your stay, room availability, or the property?
            Give us a call or send us an email. We&apos;re happy to help.
          </p>
        </Reveal>

        {/* Contact Cards */}
        <Reveal className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
          {details.map((detail) => (
            <a
              key={detail.label}
              href={detail.href}
              target={detail.label === 'Address' ? '_blank' : undefined}
              rel={
                detail.label === 'Address'
                  ? 'noopener noreferrer'
                  : undefined
              }
              className="group flex flex-col items-center rounded-2xl border border-border/60 bg-card p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                <detail.icon
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </span>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                {detail.label}
              </p>

              <p className="mt-2 text-base font-medium leading-relaxed text-foreground transition-colors group-hover:text-primary">
                {detail.value}
              </p>
            </a>
          ))}
        </Reveal>

        {/* Call to Action */}
        <Reveal className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            For room availability and reservations, please contact us directly.
          </p>

          <a
            href="tel:+17052866900"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call 705-286-6900
          </a>
        </Reveal>

      </div>
    </section>
  )
}