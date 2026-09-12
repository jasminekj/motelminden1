import { TreePine, Phone, Mail, Navigation } from 'lucide-react'
import { motel, navLinks, directionsUrl } from '@/lib/site-data'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <span className="flex items-center gap-2 font-serif text-xl font-semibold">
              <TreePine className="h-5 w-5" aria-hidden="true" />
              {motel.name}
            </span>
            <address className="mt-4 not-italic leading-relaxed text-primary-foreground/80">
              {motel.address.line1}
              <br />
              {motel.address.line2}
              <br />
              {motel.address.country}
            </address>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/70">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/85 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/70">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${motel.phone.replace(/[^\d+]/g, '')}`}
                  className="inline-flex items-center gap-2 text-primary-foreground/85 transition-colors hover:text-primary-foreground"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {motel.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${motel.email}`}
                  className="inline-flex items-center gap-2 text-primary-foreground/85 transition-colors hover:text-primary-foreground"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {motel.email}
                </a>
              </li>
              <li>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-foreground/85 transition-colors hover:text-primary-foreground"
                >
                  <Navigation className="h-4 w-4" aria-hidden="true" />
                  Get Directions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-6 text-sm text-primary-foreground/70">
          <p>
            &copy; {year} {motel.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
