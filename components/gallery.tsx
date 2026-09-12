'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const photos = [
  {
    src: '/images/Motel_Minden_002.jpg',
    alt: 'Motel Minden exterior',
  },
  {
    src: '/images/Motel_Minden_005.jpg',
    alt: 'Motel Minden exterior walkway',
  },
  {
    src: '/images/Motel_Minden_017.jpg',
    alt: 'Motel Minden suite living area',
  },
  {
    src: '/images/Motel_Minden_026.jpg',
    alt: 'Motel Minden guest room and bathroom',
  },
  {
    src: '/images/Motel_Minden_032.jpg',
    alt: 'Motel Minden guest room with two beds',
  },
  {
    src: '/images/Motel_Minden_033.jpg',
    alt: 'Motel Minden double guest room',
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
    alt: 'Motel Minden queen guest room',
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
    alt: 'Motel Minden room with two beds',
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
    alt: 'Spacious Motel Minden queen room',
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

  // Automatically rotate every 4 seconds
  useEffect(() => {
    if (isPaused) return

    const timer = window.setInterval(() => {
      next()
    }, 4000)

    return () => {
      window.clearInterval(timer)
    }
  }, [next, isPaused])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prev()
      }

      if (event.key === 'ArrowRight') {
        next()
      }
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
            Explore our rooms, property, and comfortable accommodations at
            Motel Minden.
          </p>
        </Reveal>

        {/* Gallery */}
        <Reveal className="mt-12">
          <div
            className="relative mx-auto overflow-hidden rounded-2xl bg-black shadow-xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >

            {/* Current Image Only */}
            <div className="relative aspect-[4/3] w-full sm:aspect-[16/9]">

              <Image
                key={photos[index].src}
                src={photos[index].src}
                alt={photos[index].alt}
                fill
                priority={index === 0}
                sizes="(min-width: 1280px) 1152px, (min-width: 768px) 90vw, 100vw"
                className="object-cover"
              />

              {/* Gradient Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
            </div>

            {/* Previous Button */}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2.5 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-black/60 sm:left-6 sm:p-4"
            >
              <ChevronLeft
                className="h-6 w-6 sm:h-7 sm:w-7"
                aria-hidden="true"
              />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={next}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2.5 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-black/60 sm:right-6 sm:p-4"
            >
              <ChevronRight
                className="h-6 w-6 sm:h-7 sm:w-7"
                aria-hidden="true"
              />
            </button>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 z-20 flex max-w-[75%] -translate-x-1/2 items-center justify-center gap-1.5 rounded-full bg-black/35 px-3 py-2 backdrop-blur-sm sm:bottom-5">
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

            {/* Photo Counter */}
            <div className="absolute bottom-4 right-4 z-20 rounded-full bg-black/45 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm sm:bottom-5 sm:right-5 sm:text-sm">
              {index + 1} / {photos.length}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}