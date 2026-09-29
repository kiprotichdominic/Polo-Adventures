import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Clock, ChevronRight } from "lucide-react";
import { tours, destinations, testimonials, stats } from "@/lib/data";
import Badge from "@/components/ui/Badge";

export default function HomePage() {
  const featuredTours = tours.filter((t) => t.featured);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-svh flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=85"
            alt="Lions at golden hour in the Maasai Mara"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Gradient: transparent top → dark bottom-left pool */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_100%,oklch(0.13_0.06_256/0.92)_0%,oklch(0.13_0.06_256/0.4)_55%,transparent_100%)]" />
          <div className="absolute inset-0 bg-linear-to-t from-navy-950/70 via-transparent to-transparent" />
          {/* Top vignette — keeps navbar text legible on any photo */}
          <div className="absolute inset-0 bg-linear-to-b from-navy-950/55 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pt-24 pb-12 sm:pt-28 sm:pb-16">
          <div className="max-w-xl">
            {/* Lime accent bar — echoes the logo's vertical divider */}
            <div className="flex items-start gap-5 mb-6 animate-fade-up">
              <div className="w-[3px] self-stretch bg-lime-500 rounded-full shrink-0 min-h-[5rem]" />
              <div>
                <p className="text-white/60 text-sm font-medium tracking-wide mb-1">
                  Polo Adventures · Nairobi, Kenya
                </p>
                <h1 className="display-heading text-white text-5xl sm:text-6xl lg:text-[4.5rem]">
                  Explore Africa&apos;s Wild Heart
                </h1>
              </div>
            </div>

            <p className="text-white/75 text-lg leading-relaxed mb-10 animate-fade-up delay-150 max-w-md ml-8">
              Safari packages, mountain climbing and coastal getaways — curated for every explorer from the Mara to Zanzibar.
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-up delay-200 ml-8">
              <Link
                href="/tours"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[8px] bg-scarlet-600 text-white text-sm font-medium hover:bg-scarlet-500 transition-colors duration-150"
              >
                Browse Tours
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/request-quote"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[8px] text-sm font-medium bg-white/10 text-white border border-white/25 hover:bg-white/20 backdrop-blur-sm transition-colors duration-150"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom right: tagline from logo */}
        <p className="absolute bottom-7 right-8 text-white/30 text-xs tracking-widest hidden lg:block">
          FOR A MAGICAL EXPERIENCE
        </p>
      </section>

      {/* ── Stats strip ───────────────────────────────────────────────────── */}
      <div className="bg-navy-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 grid grid-cols-2 sm:grid-cols-4 divide-x divide-navy-700">
          {stats.map(({ label, value }) => (
            <div key={label} className="px-6 first:pl-0 last:pr-0 py-2">
              <p className="text-white font-display font-bold text-2xl tabular-nums">{value}</p>
              <p className="text-navy-400 text-xs mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Featured Tours ────────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <h2 className="display-heading text-ink-900 text-3xl sm:text-4xl">
              Featured Tours
            </h2>
            <Link
              href="/tours"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-400 hover:text-ink-900 transition-colors group shrink-0"
            >
              View all tours
              <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Asymmetric: 1 large left + 2 stacked right */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {featuredTours[0] && (
              <Link
                href={`/tours/${featuredTours[0].slug}`}
                className="lg:col-span-3 group relative rounded-xl overflow-hidden bg-navy-100 aspect-4/3 lg:aspect-auto lg:min-h-120 flex flex-col justify-end"
              >
                <Image
                  src={featuredTours[0].image}
                  alt={featuredTours[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy-950/85 via-navy-950/25 to-transparent" />
                {/* Lime accent on featured card */}
                <div className="absolute top-0 left-0 w-[3px] h-full bg-lime-500" />
                <div className="relative z-10 p-6 sm:p-8">
                  <Badge variant="white" className="mb-3">{featuredTours[0].destination} · Bush Safari</Badge>
                  <h3 className="display-heading text-white text-2xl sm:text-3xl mb-2">
                    {featuredTours[0].title}
                  </h3>
                  <div className="flex items-center gap-4 text-white/65 text-sm">
                    <span className="flex items-center gap-1.5"><Clock size={13} />{featuredTours[0].duration}</span>
                    <span className="font-semibold text-gold-300">From ${featuredTours[0].price.toLocaleString()}</span>
                  </div>
                </div>
              </Link>
            )}

            <div className="lg:col-span-2 flex flex-col gap-4">
              {featuredTours.slice(1, 3).map((tour) => (
                <Link
                  key={tour.id}
                  href={`/tours/${tour.slug}`}
                  className="group relative rounded-xl overflow-hidden bg-navy-100 flex-1 min-h-55 flex flex-col justify-end"
                >
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy-950/80 via-navy-950/10 to-transparent" />
                  <div className="relative z-10 p-5">
                    <Badge variant="white" className="mb-2">{tour.destination}</Badge>
                    <h3 className="display-heading text-white text-lg sm:text-xl mb-1.5">{tour.title}</h3>
                    <div className="flex items-center gap-3 text-white/65 text-sm">
                      <span className="flex items-center gap-1"><Clock size={12} />{tour.duration}</span>
                      <span className="text-gold-300 font-medium">From ${tour.price.toLocaleString()}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Destinations ──────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 px-5 sm:px-8 bg-surface-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 justify-between mb-10">
            <h2 className="display-heading text-ink-900 text-3xl sm:text-4xl">Destinations</h2>
            <p className="text-ink-400 text-sm max-w-sm">
              Four countries. Countless ecosystems. Every itinerary built around your pace.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {destinations.map((dest) => (
              <Link
                key={dest.id}
                href={`/destinations/${dest.slug}`}
                className="group relative rounded-xl overflow-hidden aspect-3/4 flex flex-col justify-end"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy-950/80 via-navy-950/15 to-transparent" />
                <div className="relative z-10 p-4 sm:p-5">
                  <p className="text-white/55 text-xs mb-1 tabular-nums">{dest.tourCount} tours</p>
                  <h3 className="display-heading text-white text-xl">{dest.name}</h3>
                  <p className="text-white/50 text-xs mt-1 hidden sm:block leading-snug">{dest.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us — editorial, not icon grid ─────────────────────────────── */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 bg-navy-900 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: heading + prose + image mosaic */}
          <div>
            <h2 className="display-heading text-white text-4xl sm:text-5xl mb-6 max-w-md">
              Your adventure,<br />our expertise
            </h2>
            <p className="text-navy-300/75 text-base leading-relaxed mb-10 max-w-md">
              Founded in Nairobi by Kenyan bush experts, every trip we plan draws on first-hand knowledge of the ecosystems, seasons and communities across East Africa.
            </p>

            {/* Image mosaic */}
            <div className="grid grid-cols-2 gap-3 h-80">
              <div className="relative rounded-xl overflow-hidden row-span-2">
                <Image src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80" alt="Elephants at Amboseli" fill className="object-cover" sizes="25vw" />
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=600&q=80" alt="Safari game drive" fill className="object-cover" sizes="25vw" />
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80" alt="Wildlife encounter" fill className="object-cover" sizes="25vw" />
              </div>
            </div>
          </div>

          {/* Right: numbered editorial list — not icon+title+text cards */}
          <div className="pt-2 lg:pt-14">
            <div className="divide-y divide-navy-700/60">
              {[
                {
                  n: "01",
                  title: "Certified local guides",
                  body: "Every guide is Kenyan-born, KATO-certified, and has spent years reading the specific terrain they'll take you through.",
                },
                {
                  n: "02",
                  title: "Built around you",
                  body: "No fixed groups, no rushed itineraries. Each trip is designed from scratch — your pace, your parks, your budget.",
                },
                {
                  n: "03",
                  title: "Fully licensed & insured",
                  body: "Registered with Kenya Tourism Board. Vehicle fleets maintained to 4WD safari-grade standards. Travel insurance options available.",
                },
                {
                  n: "04",
                  title: "24-hour support",
                  body: "A dedicated consultant stays reachable by phone, email and WhatsApp from deposit through to your last game drive.",
                },
              ].map(({ n, title, body }) => (
                <div key={n} className="py-6 flex gap-5 items-start group">
                  <span className="text-navy-600 text-sm tabular-nums font-mono shrink-0 pt-0.5 group-hover:text-lime-500 transition-colors duration-200">{n}</span>
                  <div>
                    <p className="text-white font-semibold mb-1.5">{title}</p>
                    <p className="text-navy-400 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-navy-700/60">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-lime-400 hover:text-lime-300 transition-colors"
              >
                About our team
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials — 1 featured + 2 compact ─────────────────────────── */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="display-heading text-ink-900 text-3xl sm:text-4xl mb-16">
            What our guests say
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-ink-200 rounded-xl overflow-hidden">
            {/* Featured testimonial — spans 2 columns */}
            <div className="lg:col-span-2 bg-surface-base p-8 sm:p-10 flex flex-col justify-between">
              {/* Large decorative quote mark */}
              <div
                className="font-display text-[7rem] leading-none text-navy-100 select-none mb-2"
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <blockquote className="text-ink-900 text-xl sm:text-2xl font-display leading-relaxed -mt-8 mb-8" style={{ maxWidth: "none" }}>
                {testimonials[0].text}
              </blockquote>
              <footer>
                <div className="flex items-center gap-0.5 mb-3">
                  {Array.from({ length: testimonials[0].rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="text-ink-900 font-semibold text-sm">{testimonials[0].name}</p>
                <p className="text-ink-400 text-xs mt-0.5">{testimonials[0].country} · {testimonials[0].tour}</p>
              </footer>
            </div>

            {/* Two compact testimonials stacked */}
            <div className="flex flex-col gap-px">
              {testimonials.slice(1, 3).map((t) => (
                <div key={t.id} className="bg-surface-base p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-0.5 mb-3">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={12} className="fill-gold-500 text-gold-500" />
                      ))}
                    </div>
                    <blockquote className="text-ink-700 text-sm leading-relaxed line-clamp-4" style={{ maxWidth: "none" }}>
                      &ldquo;{t.text}&rdquo;
                    </blockquote>
                  </div>
                  <footer className="mt-5 pt-4 border-t border-ink-100">
                    <p className="text-ink-900 text-xs font-semibold">{t.name}</p>
                    <p className="text-ink-400 text-xs mt-0.5">{t.country}</p>
                  </footer>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 px-5 sm:px-8 bg-scarlet-600">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <h2 className="display-heading text-white text-3xl sm:text-4xl lg:text-5xl">
                Ready to plan your safari?
              </h2>
              <p className="text-white/75 text-base mt-3 max-w-md">
                Share your dates and interests. We&apos;ll send a tailored itinerary within 24 hours.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/request-quote"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-[8px] bg-white text-scarlet-700 text-sm font-medium hover:bg-scarlet-50 transition-colors duration-150 whitespace-nowrap"
              >
                Request a Quote
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/tours"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-[8px] border border-white/35 text-white text-sm font-medium bg-white/10 hover:bg-white/20 transition-colors duration-150 whitespace-nowrap"
              >
                Browse All Tours
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
