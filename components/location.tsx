import {
  MapPin,
  Navigation,
  Clock,
  Phone,
  Mail,
} from 'lucide-react'

import { Reveal } from '@/components/reveal'

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

const fullAddress =
  'Motel Minden, 12600 Hwy 35, Minden, ON K0M 2K0, Canada'

const directionsUrl =
  'https://www.google.com/maps/dir/?api=1&destination=Motel+Minden,+12600+Hwy+35,+Minden,+ON+K0M+2K0'

const mapEmbedUrl =
  'https://www.google.com/maps?q=Motel+Minden,+12600+Hwy+35,+Minden,+ON+K0M+2K0&output=embed'

const distances = [
  {
    place: 'Downtown Minden',
    time: 'Approx. 4 min',
  },
  {
    place: 'Haliburton Village',
    time: 'Approx. 25 min',
  },
  {
    place: 'Algonquin Park (West Gate)',
    time: 'Approx. 1 hr 20 min',
  },
  {
    place: 'Toronto',
    time: 'Approx. 2 hr 35 min',
  },
  {
    place: 'Peterborough',
    time: 'Approx. 1 hr 40 min',
  },
  {
    place: 'Minden Lake',
    time: 'Approx. 6 min',
  },
]

export function Location() {
  return (
    <section
      id="location"
      className="bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">

        {/* Heading */}
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Location
          </p>

          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Perfectly placed in cottage country
          </h2>

          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Motel Minden is conveniently located on Highway 35, just minutes
            from downtown Minden and surrounded by the lakes, trails, shops,
            restaurants, and natural beauty of the Haliburton Highlands.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">

          {/* Map */}
          <Reveal className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl border border-border/60 shadow-sm">
              <iframe
                src={mapEmbedUrl}
                title="Map showing the location of Motel Minden"
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-[360px] w-full sm:h-[420px]"
              />
            </div>
          </Reveal>

          {/* Location Information */}
          <Reveal
            delay={100}
            className="lg:col-span-2"
          >
            <div className="flex h-full flex-col rounded-2xl border border-border/60 bg-card p-7 shadow-sm">

              {/* Address */}
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </span>

                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    Motel Minden
                  </h3>

                  <address className="mt-1 not-italic leading-relaxed text-muted-foreground">
                    12600 Hwy 35
                    <br />
                    Minden, ON K0M 2K0
                    <br />
                    Canada
                  </address>
                </div>
              </div>

              {/* Directions Button */}
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.02]"
              >
                <Navigation
                  className="h-4 w-4"
                  aria-hidden="true"
                />
                Get Directions
              </a>

              {/* Contact Info */}
              <div className="mt-7 border-t border-border/60 pt-6">

                <a
                  href="tel:+17052866900"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone
                    className="h-4 w-4 text-primary"
                    aria-hidden="true"
                  />

                  <span>705-286-6900</span>
                </a>

                <a
                  href="mailto:motelminden@gmail.com"
                  className="mt-3 flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail
                    className="h-4 w-4 text-primary"
                    aria-hidden="true"
                  />

                  <span>motelminden@gmail.com</span>
                </a>
              </div>

              {/* Driving Distances */}
              <div className="mt-7 border-t border-border/60 pt-6">

                <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Clock
                    className="h-4 w-4 text-accent"
                    aria-hidden="true"
                  />
                  Approximate driving times
                </h4>

                <ul className="mt-4 space-y-3 text-sm">
                  {distances.map((distance) => (
                    <li
                      key={distance.place}
                      className="flex items-center justify-between gap-4 text-muted-foreground"
                    >
                      <span className="text-foreground/90">
                        {distance.place}
                      </span>

                      <span className="shrink-0 tabular-nums">
                        {distance.time}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-xs leading-relaxed text-muted-foreground/80">
                  Driving times are approximate and may vary depending on
                  traffic, weather, and road conditions.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <p className="sr-only">
          {fullAddress}
        </p>
      </div>
    </section>
  )
}