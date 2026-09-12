'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const photos = [
  {
    src: '/images/Motel_Minden_002.jpg',
    alt: 'Motel Minden exterior and property',
  },
  {
    src: '/images/Motel_Minden_005.jpg',
    alt: 'Motel Minden exterior walkway',
  },
  {
    src: '/images/Motel_Minden_017.jpg',
    alt: 'Spacious Motel Minden suite living area',
  },
  {
    src: '/images/Motel_Minden_026.jpg',
    alt: 'Motel Minden room and private bathroom',
  },
  {
    src: '/images/Motel_Minden_032.jpg',
    alt: 'Motel Minden room with two beds',
  },
  {
    src: '/images/Motel_Minden_033.jpg',
    alt: 'Motel Minden double room',
  },
  {
    src: '/images/Motel_Minden_036.jpg',
    alt: 'Motel Minden private bathroom',
  },
  {
    src: '/images/Motel_Minden_039.jpg',
    alt: 'Motel Minden guest room',
  },
  {
    src: '/images/Motel_Minden_041.jpg',
    alt: 'Motel Minden queen room',
  },
  {
    src: '/images/Motel_Minden_046.jpg',
    alt: 'Motel Minden bathroom vanity',
  },
  {
    src: '/images/Motel_Minden_048.jpg',
    alt: 'Motel Minden guest room with desk and television',
  },
  {
    src: '/images/Motel_Minden_056.jpg',
    alt: 'Motel Minden room with two blue beds',
  },
  {
    src: '/images/Motel_Minden_058.jpg',
    alt: 'Motel Minden double guest room',
  },
  {
    src: '/images/Motel_Minden_060.jpg',
    alt: 'Spacious Motel Minden guest room',
  },
  {
    src: '/images/Motel_Minden_061.jpg',
    alt: 'Motel Minden suite with kitchenette',
  },
  {
    src: '/images/Motel_Minden_065.jpg',
    alt: 'Motel Minden spacious queen room',
  },
]

export function Gallery() {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const prev = useCallback(() => {
    setIndex((current) =>
      current === 0 ? photos.length - 1 : current - 1,
    )
  }, [])

  const next = useCallback(() => {
    setIndex((current) =>
      current === photos.length - 1 ? 0 : current + 1,
    )
  }, [])

  // Automatically change image every 4 seconds
  useEffect(() => {
    if (isPaused) return

    const interval = window.setInterval(() => {
      next()
    }, 4000)

    return () => window.clearInterval(interval)
  }, [next, isPaused])

  // Allow keyboard arrow navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') prev()
      if (event.key === 'ArrowRight') next()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [prev, next])

  return (
    <section
      id="gallery"
      className="bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">

        {/* Heading */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Gallery
          </p>

          <h2 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Take a look around
          </h2>

          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Explore our rooms, property, and peaceful surroundings.
          </p>
        </Reveal>

        {/* Main Gallery Carousel */}
        <Reveal className="mt-12">
          <div
            className="relative mx-auto overflow-hidden rounded-2xl bg-black shadow-xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Main Image */}
            <div className="relative aspect-[16/9] w-full">
              {photos.map((photo, photoIndex) => (
                <Image
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  priority={photoIndex === 0}
                  sizes="(min-width: 1280px) 1152px, 100vw"
                  className={`object-cover transition-all duration-700 ease-in-out ${
                    photoIndex === index
                      ? 'scale-100 opacity-100'
                      : 'pointer-events-none scale-[1.02] opacity-0'
                  }`}
                />
              ))}

              {/* Subtle gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
            </div>

            {/* Left Arrow */}
            <button
              type="button"
              onClick={prev}
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/35 p-3 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-black/60 sm:left-6 sm:p-4"
              aria-label="Previous photo"
            >
              <ChevronLeft
                className="h-6 w-6 sm:h-7 sm:w-7"
                aria-hidden="true"
              />
            </button>

            {/* Right Arrow */}
            <button
              type="button"
              onClick={next}
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/35 p-3 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-black/60 sm:right-6 sm:p-4"
              aria-label="Next photo"
            >
              <ChevronRight
                className="h-6 w-6 sm:h-7 sm:w-7"
                aria-hidden="true"
              />
            </button>

            {/* Photo Counter */}
            <div className="absolute bottom-5 right-5 z-20 rounded-full bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md sm:text-sm">
              {index + 1} / {photos.length}
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-5 left-1/2 z-20 flex max-w-[70%] -translate-x-1/2 items-center justify-center gap-1.5 rounded-full bg-black/30 px-3 py-2 backdrop-blur-sm">
              {photos.map((photo, photoIndex) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setIndex(photoIndex)}
                  aria-label={`View photo ${photoIndex + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    photoIndex === index
                      ? 'w-6 bg-white'
                      : 'w-1.5 bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}