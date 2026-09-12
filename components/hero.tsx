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
            country. Whether you&apos;re here for the lakes, the trails, a Muskoka
            getaway, or a stopover on a longer journey, our recently refreshed
            rooms give you a clean, quiet, and welcoming place to unwind, just
            minutes from everything the Haliburton Highlands has to offer.
          </p>
        </div>

        {/* Motel Image */}
        <div className="mt-14 sm:mt-20">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/images/123.png"
              alt="Motel Minden"
              className="h-[320px] w-full object-cover sm:h-[450px] lg:h-[520px]"
            />
          </div>
        </div>

      </div>
    </section>
  )
}