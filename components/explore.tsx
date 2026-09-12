import Image from 'next/image'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'

interface Attraction {
  title: string
  category: string
  image: string
  description: string
  distance: string
  href: string
}

const attractions: Attraction[] = [
  {
    title: 'Twelve Mile Lake',
    category: 'Lakes & Beaches',
    image: '/images/explore-lake.png',
    description:
      'Swim, paddle, or relax at the sandy shorelines and clear lakes scattered throughout the Highlands.',
    distance: 'Approx. 10 min drive',
    href: 'https://maps.app.goo.gl/R13RvSnFT7EDdfKQA',
  },
  {
    title: 'Ritchie Falls',
    category: 'Hiking & Nature',
    image: '/images/explore-hiking.png',
    description:
      'Explore forested trails, granite ridges, and lookouts with routes for every experience level.',
    distance: 'Approx. 15 min drive',
    href: 'https://myhaliburtonhighlands.com/summer/waterfalls/',
  },
  {
    title: 'Algonquin Outfitters',
    category: 'On the Water',
    image: '/images/explore-canoe.png',
    description:
      'Paddle calm lakes and winding rivers, rentals and launch points are close by.',
    distance: 'Approx. 2 min drive',
    href: 'https://algonquinoutfitters.com/',
  },
  {
    title: 'Minden River Walk',
    category: 'Parks & Scenic Areas',
    image: '/images/explore-park.png',
    description:
      'Stroll the Gull River boardwalk and scenic green spaces right in the heart of town.',
    distance: 'Approx. 2 min drive',
    href: 'https://www.google.com/maps/place/Minden+River+Walk/@44.9287866,-78.7258119,17z/data=!3m1!4b1!4m6!3m5!1s0x4cd50fdc244e0761:0x2cce1928fc2a99d3!8m2!3d44.9287828!4d-78.723237!16s%2Fg%2F11ghnq0546?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    title: 'Downtown Minden',
    category: 'Downtown',
    image: '/images/explore-downtown.png',
    description:
      'Boutique shops, galleries, and small-town charm along a walkable historic main street.',
    distance: 'Approx. 3 min drive',
    href: 'https://comewander.ca/story/welcome-friendly-town-minden',
  },
  {
    title: 'Restaurants & Cafés',
    category: 'Food & Drink',
    image: '/images/explore-dining.png',
    description:
      "From cozy cafés to local pubs and dining spots, there's something for every taste nearby.",
    distance: 'Approx. 2-20 min drive',
    href: 'https://silvermaplefarmhouse.com/blog/best-restaurants-near-minden-haliburton',
  },
  {
    title: 'Fall Colours & Seasonal Fun',
    category: 'Seasonal Activities',
    image: '/images/explore-seasonal.png',
    description:
      'Leaf-peeping, snowshoeing, skiing, and festivals, the Highlands shine in every season.',
    distance: 'Throughout the region',
    href: 'https://www.google.com/maps/search/things+to+do+Haliburton+Highlands',
  },
  {
    title: 'Haliburton Highlands Attractions',
    category: 'Nearby Attractions',
    image: '/images/explore-wildlife.png',
    description:
      'Wildlife sanctuaries, conservation areas, and destinations across Haliburton County.',
    distance: 'Approx. 5-30 min drive',
    href: 'https://www.google.com/maps/search/attractions+Haliburton+Highlands',
  },
]

export function Explore() {
  return (
    <section id="explore" className="bg-primary/5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Things to Do
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Explore Minden &amp; the Haliburton Highlands
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Adventure and relaxation are right outside your door. Distances are
            placeholders and can be updated with exact drive times.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {attractions.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 3) * 80}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image || '/placeholder.svg'}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="flex items-start justify-between gap-2 font-serif text-lg font-semibold text-foreground">
                    {item.title}
                    <ArrowUpRight
                      className="mt-1 h-4 w-4 shrink-0 text-primary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-foreground/70">
                    <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                    {item.distance}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
