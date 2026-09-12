'use client'

import { useState, type FormEvent } from 'react'
import { Phone, Mail, MapPin, Clock, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { motel } from '@/lib/site-data'

const details = [
  {
    icon: Phone,
    label: 'Phone',
    value: motel.phone,
    href: `tel:${motel.phone.replace(/[^\d+]/g, '')}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: motel.email,
    href: `mailto:${motel.email}`,
  },
  {
    icon: MapPin,
    label: 'Address',
    value: `${motel.address.line1}, ${motel.address.line2}`,
  },
  {
    icon: Clock,
    label: 'Phone inquiry hours',
    value: motel.phoneHours,
  },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: Wire this form to a real email/handler service.
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Contact
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            We&apos;d love to hear from you
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Have a question about your visit? Reach out any time — contact details
            below are placeholders and can be updated later.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-4">
            {details.map((d) => (
              <div
                key={d.label}
                className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <d.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {d.label}
                  </p>
                  {d.href ? (
                    <a
                      href={d.href}
                      className="mt-1 block text-lg font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {d.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-lg font-medium text-foreground">
                      {d.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-border/60 bg-card p-7 shadow-sm sm:p-8">
              {submitted ? (
                <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">
                    Thank you!
                  </h3>
                  <p className="mt-2 max-w-sm text-muted-foreground">
                    Your message has been received. We&apos;ll get back to you as
                    soon as we can.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="name" label="Name" type="text" autoComplete="name" required />
                    <Field
                      id="phone"
                      label="Phone Number"
                      type="tel"
                      autoComplete="tel"
                    />
                  </div>
                  <Field
                    id="email"
                    label="Email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="How can we help with your stay?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.02]"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

interface FieldProps {
  id: string
  label: string
  type: string
  autoComplete?: string
  required?: boolean
}

function Field({ id, label, type, autoComplete, required }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  )
}
