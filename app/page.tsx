import { SiteHeader } from '@/components/site-header'
import { Hero, Intro } from '@/components/hero'
import { Accommodations } from '@/components/accommodations'
import { Gallery } from '@/components/gallery'
import { Explore } from '@/components/explore'
import { Location } from '@/components/location'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Intro />
        <Accommodations />
        <Gallery />
        <Explore />
        <Location />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
