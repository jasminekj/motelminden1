import { ChevronDown, MapPin } from 'lucide-react'

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
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/fpvideo1.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/60" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-4xl flex-col items-center justify-center px-5 pt-16 text-center text-white">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-sm">
          <MapPin
            className="h-3.5 w-3.5"
            aria-hidden="true"
          />
          Minden, Ontario
        </p>

        <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-8xl md:text-8xl">
          Motel Minden
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/90 sm:text-lg">
          Comfortable, convenient accommodations surrounded by lakes, forest,
          and the natural beauty of Ontario&apos;s cottage country.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#accommodations"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-foreground shadow-lg transition-transform duration-200 hover:scale-[1.03]"
          >
            View Accommodations
          </a>

          <a
            href="#explore"
            className="inline-flex items-center justify-center rounded-full border border-white/50 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
          >
            Explore Minden
          </a>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <a
        href="#intro"
        aria-label="Scroll to introduction"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/80 transition-colors hover:text-white"
      >
        <ChevronDown
          className="h-7 w-7 animate-bounce"
          aria-hidden="true"
        />
      </a>
    </section>
  )
}

export function Intro() {
  return (
    <section
      id="intro"
      className="bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Welcome
        </p>

        <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
          A warm, restful basecamp for cottage country
        </h2>

        <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
          Motel Minden offers comfortable and convenient accommodations for
          visitors exploring Minden, Haliburton County, and Ontario cottage
          country. Whether you&apos;re here for the lakes, the trails, a Muskoka
          getaway, or a stopover on a longer journey, our recently refreshed
          rooms give you a clean, quiet, and welcoming place to unwind, just
          minutes from everything the Haliburton Highlands has to offer.
        </p>
      </div>
    </section>
  )
}