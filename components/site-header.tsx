'use client'

import { useEffect, useState } from 'react'
import { Menu, TreePine, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks } from '@/lib/site-data'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/60 bg-background/85 backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Primary"
      >
        <a
          href="#home"
          className={cn(
            'flex items-center gap-2 font-serif text-lg font-semibold tracking-tight transition-colors',
            scrolled ? 'text-foreground' : 'text-white',
          )}
        >
          <TreePine
            className={cn('h-5 w-5', scrolled ? 'text-primary' : 'text-white')}
            aria-hidden="true"
          />
          Motel Minden
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:opacity-70',
                  scrolled ? 'text-foreground/80' : 'text-white/90',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className={cn(
            'inline-flex items-center justify-center rounded-md p-2 md:hidden',
            scrolled ? 'text-foreground' : 'text-white',
          )}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={cn(
          'fixed inset-0 z-50 transform bg-background transition-transform duration-300 md:hidden',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
        aria-hidden={!open}
      >
        <div className="flex h-16 items-center justify-between px-5">
          <span className="flex items-center gap-2 font-serif text-lg font-semibold">
            <TreePine className="h-5 w-5 text-primary" aria-hidden="true" />
            Motel Minden
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <ul className="flex flex-col gap-1 px-5 pt-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-border/60 py-4 font-serif text-2xl text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
