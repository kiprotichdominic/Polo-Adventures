import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { destinations } from "@/lib/data";

export const metadata: Metadata = {
  title: "Destinations",
  description: "Explore safari and travel destinations across Kenya, Tanzania, Zanzibar and Uganda with Polo Adventures.",
};

export default function DestinationsPage() {
  return (
    <>
      <div className="bg-navy-900 pt-28 pb-14 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="display-heading text-white text-4xl sm:text-5xl mb-3">Destinations</h1>
          <p className="text-navy-300/75 text-lg max-w-xl">
            Four incredible countries. Countless unforgettable experiences. All curated by local experts.
          </p>
        </div>
      </div>

      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-surface-base">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {destinations.map((dest, i) => (
            <Link
              key={dest.id}
              href={`/destinations/${dest.slug}`}
              className={`group relative rounded-xl overflow-hidden flex flex-col justify-end ${
                i === 0 ? "md:col-span-2 min-h-100" : "min-h-75"
              }`}
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes={i === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
              {/* Lime accent — left edge on the featured destination */}
              {i === 0 && <div className="absolute top-0 left-0 w-0.75 h-full bg-lime-500" />}
              <div className="relative z-10 p-6 sm:p-8 flex items-end justify-between">
                <div>
                  <p className="text-white/55 text-sm mb-1 tabular-nums">{dest.tourCount} tours available</p>
                  <h2 className="display-heading text-white text-2xl sm:text-3xl">{dest.name}</h2>
                  <p className="text-white/65 text-sm mt-1.5">{dest.tagline}</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0 ml-4">
                  <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
