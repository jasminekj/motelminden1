import Image from 'next/image'
import {
  BedDouble,
  Users,
  Wifi,
  Car,
  Snowflake,
  Tv,
  Refrigerator,
  Bath,
  Coffee,
  Wind,
  PawPrint,
  Cigarette,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const rooms = [
  {
    name: 'Queen Room',
    image: '/images/room-queen.png',
    description:
      'A bright, cozy room ideal for couples or solo travelers looking for a comfortable, quiet retreat.',
    beds: '1 Queen bed',
    guests: 'Up to 2 guests',
  },
  {
    name: 'Double Queen Room',
    image: '/images/room-double.png',
    description:
      'Extra space and two queen beds, perfect for friends, small families, or anyone who likes room to spread out.',
    beds: '2 Queen beds',
    guests: 'Up to 4 guests',
  },
  {
    name: 'Family Suite',
    image: '/images/room-family.png',
    description:
      'Our most spacious option with flexible sleeping arrangements and a relaxed sitting area for longer stays.',
    beds: '2 Queen beds + Sofa bed',
    guests: 'Up to 6 guests',
  },
]

const roomAmenities = [
  { icon: Wifi, label: 'Free Wi-Fi' },
  { icon: Car, label: 'Free parking' },
  { icon: Snowflake, label: 'Air conditioning' },
  { icon: Wind, label: 'Heating' },
  { icon: Tv, label: 'Flat-screen TV' },
  { icon: Refrigerator, label: 'Mini fridge' },
  { icon: Coffee, label: 'Coffee maker' },
  { icon: Bath, label: 'Private bathroom' },
]

const policies = [
  { icon: PawPrint, label: 'We’re happy to welcome pets with a refundable pet deposit' },
  { icon: Cigarette, label: 'We offer a selection of designated smoking rooms for guests' },
]

export function Accommodations() {
  return (
    <section id="accommodations" className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Accommodations
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Clean, comfortable rooms with everything you need
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Each room at Motel Minden is thoughtfully appointed for a restful
            stay. 
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, i) => (
            <Reveal
              key={room.name}
              delay={i * 90}
              className="group overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={room.image || '/placeholder.svg'}
                  alt={`${room.name} at Motel Minden`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {room.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {room.description}
                </p>
                <div className="mt-5 flex flex-col gap-2 border-t border-border/60 pt-4 text-sm text-foreground/80">
                  <span className="inline-flex items-center gap-2">
                    <BedDouble className="h-4 w-4 text-primary" aria-hidden="true" />
                    {room.beds}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" aria-hidden="true" />
                    {room.guests}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Amenities */}
        <Reveal className="mt-16 rounded-2xl border border-border/60 bg-card p-8 shadow-sm sm:p-10">
          <h3 className="font-serif text-2xl font-semibold text-foreground">
            In every room
          </h3>
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-4">
            {roomAmenities.map((a) => (
              <li key={a.label} className="flex items-center gap-3 text-sm text-foreground/90">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <a.icon className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                {a.label}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-border/60 pt-6 text-sm text-muted-foreground">
            {policies.map((p) => (
              <span key={p.label} className="inline-flex items-center gap-2">
                <p.icon className="h-4 w-4 text-accent" aria-hidden="true" />
                {p.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
