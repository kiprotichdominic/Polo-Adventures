import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import { tours, categories } from "@/lib/data";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Tours",
  description: "Browse all safari packages, beach holidays, mountain climbing expeditions and more across Kenya, Tanzania, Zanzibar and Uganda.",
};

export default function ToursPage() {
  return (
    <>
      <div className="bg-navy-900 pt-28 pb-14 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="display-heading text-white text-4xl sm:text-5xl mb-3">Our Tours</h1>
          <p className="text-navy-300/75 text-lg max-w-xl">
            From intimate bush safaris to family beach holidays — every trip crafted around you.
          </p>
        </div>
      </div>

      {/* Category filter */}
      <div className="bg-white border-b border-ink-100 px-5 sm:px-8 sticky top-14.75 z-30">
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto py-3">
          <button className="shrink-0 px-4 py-1.5 rounded-full text-sm font-medium bg-navy-700 text-white">
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.key}
              className="shrink-0 px-4 py-1.5 rounded-full text-sm font-medium text-ink-500 hover:bg-navy-50 hover:text-navy-700 transition-colors border border-ink-200"
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-surface-base">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tours.map((tour) => (
              <Link
                key={tour.id}
                href={`/tours/${tour.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-[0_1px_3px_oklch(0%_0_0/0.05),0_4px_16px_oklch(0%_0_0/0.07)] hover:shadow-[0_4px_12px_oklch(0%_0_0/0.08),0_16px_40px_oklch(0%_0_0/0.10)] transition-shadow duration-300 flex flex-col"
              >
                <div className="relative aspect-16/10 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant={tour.featured ? "scarlet" : "navy"}>
                      {tour.category === "bush" ? "Bush Safari"
                        : tour.category === "beach" ? "Beach"
                        : tour.category === "climbing" ? "Climbing"
                        : tour.category === "budget" ? "Budget"
                        : tour.category === "group" ? "Group"
                        : "Family"}
                    </Badge>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-ink-400 text-xs mb-2">
                    <MapPin size={11} />
                    {tour.destination}
                  </div>
                  <h2 className="display-heading text-ink-900 text-lg mb-2 group-hover:text-navy-700 transition-colors">
                    {tour.title}
                  </h2>
                  <p className="text-ink-500 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                    {tour.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-ink-100">
                    <div>
                      <p className="text-xs text-ink-400 flex items-center gap-1">
                        <Clock size={11} /> {tour.duration}
                      </p>
                      <p className="text-base font-semibold text-ink-900 tabular-nums mt-0.5">
                        From ${tour.price.toLocaleString()}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-navy-50 flex items-center justify-center text-navy-700 group-hover:bg-navy-700 group-hover:text-white transition-colors duration-200">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
