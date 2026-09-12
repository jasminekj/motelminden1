import { MapPin, Navigation, Clock } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { motel, fullAddress, directionsUrl, mapEmbedUrl } from '@/lib/site-data'

const distances = [
  { place: 'Downtown Minden', time: 'Approx. [X] min' },
  { place: 'Haliburton Village', time: 'Approx. [X] min' },
  { place: 'Algonquin Park (west gate)', time: 'Approx. [X] min' },
  { place: 'Toronto', time: 'Approx. [2.5] hrs' },
  { place: 'Peterborough', time: 'Approx. [X] min' },
  { place: 'Nearest lake / beach', time: 'Approx. [X] min' },
]

export function Location() {
  return (
    <section id="location" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Location
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Perfectly placed in cottage country
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Motel Minden sits in the heart of the Haliburton Highlands, making it
            an easy basecamp for lakes, trails, downtown, and day trips across the
            region.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="overflow-hidden rounded-2xl border border-border/60 shadow-sm">
              <iframe
                src={mapEmbedUrl}
                title={`Map showing the location of ${motel.name}`}
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-[360px] w-full sm:h-[420px]"
              />
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-2xl border border-border/60 bg-card p-7 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    Our Address
                  </h3>
                  <address className="mt-1 not-italic leading-relaxed text-muted-foreground">
                    {motel.address.line1}
                    <br />
                    {motel.address.line2}
                    <br />
                    {motel.address.country}
                  </address>
                </div>
              </div>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.02]"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Get Directions
              </a>

              <div className="mt-7 border-t border-border/60 pt-6">
                <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
                  Driving distances
                </h4>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {distances.map((d) => (
                    <li
                      key={d.place}
                      className="flex items-center justify-between gap-4 text-muted-foreground"
                    >
                      <span className="text-foreground/90">{d.place}</span>
                      <span className="shrink-0 tabular-nums">{d.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
        <p className="sr-only">{fullAddress}</p>
      </div>
    </section>
  )
}
