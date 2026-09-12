import Image from 'next/image'
import { MapPin } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/fpvideo1.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/60" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-5 pt-16 text-center text-white">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-sm">
          <MapPin className="h-4 w-4" />
          Minden, Ontario
        </p>

        <h1 className="max-w-4xl font-serif text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Your comfortable stay in cottage country
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
          Relax in clean, comfortable accommodations just minutes from
          downtown Minden, local lakes, trails, and everything the Haliburton
          Highlands has to offer.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="tel:7052866900"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Call to Book
          </a>

          <a
            href="#accommodations"
            className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            View Rooms
          </a>
        </div>
      </div>
    </section>
  )
}

export function Intro() {
  return (
    <section
      id="intro"
      className="bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Welcome Text */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Welcome
          </p>

          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            A warm, restful basecamp for cottage country
          </h2>

          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Motel Minden offers comfortable and convenient accommodations for
            visitors exploring Minden, Haliburton County, and Ontario cottage
            country. Whether you&apos;re here for the lakes, the trails, a
            getaway, or a stopover on a longer journey, our recently refreshed
            rooms give you a clean, quiet, and welcoming place to unwind, just
            minutes from everything the Haliburton Highlands has to offer.
          </p>
        </div>

        {/* Motel Image */}
        <div className="mt-14 sm:mt-20">
          <div className="relative h-[320px] overflow-hidden rounded-2xl shadow-lg sm:h-[450px] lg:h-[520px]">
            <Image
              src="/images/123.png"
              alt="Motel Minden"
              fill
              sizes="(min-width: 1280px) 1152px, 95vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}