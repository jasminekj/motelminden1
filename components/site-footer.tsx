import {
  TreePine,
  Phone,
  Mail,
  Navigation,
} from 'lucide-react'

const motel = {
  name: 'Motel Minden',
  phone: '705-286-6900',
  email: 'motelminden@gmail.com',
  address: {
    line1: '12600 Hwy 35',
    line2: 'Minden, ON K0M 2K0',
    country: 'Canada',
  },
}

const directionsUrl =
  'https://www.google.com/maps/dir/?api=1&destination=Motel+Minden,+12600+Hwy+35,+Minden,+ON+K0M+2K0'

const navLinks = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'Rooms',
    href: '#rooms',
  },
  {
    label: 'Amenities',
    href: '#amenities',
  },
  {
    label: 'Gallery',
    href: '#gallery',
  },
  {
    label: 'Explore',
    href: '#explore',
  },
  {
    label: 'Location',
    href: '#location',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Motel Information */}
          <div>
            <span className="flex items-center gap-2 font-serif text-xl font-semibold">
              <TreePine
                className="h-5 w-5"
                aria-hidden="true"
              />

              {motel.name}
            </span>

            <address className="mt-4 not-italic leading-relaxed text-primary-foreground/80">
              {motel.address.line1}
              <br />
              {motel.address.line2}
              <br />
              {motel.address.country}
            </address>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Comfortable accommodations in the heart of the Haliburton
              Highlands, just minutes from downtown Minden, local lakes,
              trails, and cottage country attractions.
            </p>
          </div>

          {/* Navigation */}
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

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/70">
              Get in touch
            </h3>

            <ul className="mt-4 space-y-4">

              {/* Phone */}
              <li>
                <a
                  href="tel:+17052866900"
                  className="inline-flex items-center gap-2 text-primary-foreground/85 transition-colors hover:text-primary-foreground"
                >
                  <Phone
                    className="h-4 w-4"
                    aria-hidden="true"
                  />

                  705-286-6900
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:motelminden@gmail.com"
                  className="inline-flex items-center gap-2 text-primary-foreground/85 transition-colors hover:text-primary-foreground"
                >
                  <Mail
                    className="h-4 w-4"
                    aria-hidden="true"
                  />

                  motelminden@gmail.com
                </a>
              </li>

              {/* Directions */}
              <li>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-foreground/85 transition-colors hover:text-primary-foreground"
                >
                  <Navigation
                    className="h-4 w-4"
                    aria-hidden="true"
                  />

                  Get Directions
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-primary-foreground/20 pt-6 text-sm text-primary-foreground/70">
          <p>
            &copy; {year} Motel Minden. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}