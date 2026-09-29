import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Polo Adventures — Nairobi's premier safari and travel company, curating exceptional East African experiences since 2014.",
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-navy-900 pt-28 pb-14 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
          <div>
            <h1 className="display-heading text-white text-4xl sm:text-5xl mb-4">
              About Polo Adventures
            </h1>
            <p className="text-navy-300/75 text-lg leading-relaxed">
              A premier tour and travel company based in Nairobi, Kenya — dedicated to curating exceptional and personalised travel experiences across Africa and Asia.
            </p>
          </div>
          <div className="flex gap-8 lg:justify-end flex-wrap">
            {stats.map(({ label, value }) => (
              <div key={label}>
                <p className="text-white font-display font-bold text-3xl tabular-nums">{value}</p>
                <p className="text-navy-400 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative rounded-xl overflow-hidden aspect-4/3">
            <Image
              src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80"
              alt="Polo Adventures team in the field"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="display-heading text-ink-900 text-3xl sm:text-4xl mb-6">
              Born from a love of East Africa
            </h2>
            <div className="space-y-4 text-ink-600 leading-relaxed text-[15px]">
              <p>
                Polo Adventures was founded in Nairobi with a simple belief: every traveller deserves a safari experience that feels personal, not packaged. We started with a single Land Cruiser and deep knowledge of the Kenyan bush — and have grown into a full-service tour operator trusted by thousands of guests worldwide.
              </p>
              <p>
                Our team is made up entirely of Kenyan-born guides and travel specialists. We know these landscapes intimately — not from textbooks, but from years of living, working and exploring them. That knowledge is what sets every Polo Adventures experience apart.
              </p>
              <p>
                Whether you&apos;re tracking the Great Migration in the Maasai Mara, summiting Mount Kenya or unwinding on Zanzibar&apos;s pristine shores, we design every itinerary around your interests, your pace and your budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 bg-surface-subtle">
        <div className="max-w-7xl mx-auto">
          <h2 className="display-heading text-ink-900 text-3xl sm:text-4xl mb-12">What guides us</h2>
          <div className="divide-y divide-ink-100">
            {[
              { title: "Responsible tourism", desc: "We partner with conservation areas and local communities to ensure our safaris benefit the places we love, not just visit them." },
              { title: "Local expertise", desc: "Every guide is Kenyan-born with certified wildlife training. You get the inside story that no guidebook can give you." },
              { title: "Personal itineraries", desc: "No two trips are the same. We listen first, then design — whether that's a private bush camp or a family-friendly safari lodge." },
              { title: "Fair pricing", desc: "Premium experiences at honest prices. We're transparent about costs and offer flexible packages at every budget level." },
              { title: "Safety first", desc: "Fully insured, fully licensed, and operating with vehicles maintained to the highest safety standards for African terrain." },
              { title: "Always available", desc: "From booking to your final game drive, a dedicated travel consultant is reachable by phone, email or WhatsApp." },
            ].map(({ title, desc }, i) => (
              <div key={title} className="py-6 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-8 items-start">
                <div className="flex items-center gap-4">
                  <span className="text-ink-300 text-sm tabular-nums font-mono w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-ink-900 font-semibold">{title}</h3>
                </div>
                <p className="text-ink-500 text-sm leading-relaxed sm:col-span-2 pl-10 sm:pl-0">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-5 sm:px-8 bg-navy-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="display-heading text-white text-3xl sm:text-4xl mb-4">
            Let&apos;s plan your adventure
          </h2>
          <p className="text-navy-300/70 text-base mb-8 max-w-md mx-auto">
            Reach out and one of our specialists will design your dream itinerary within 24 hours.
          </p>
          <Link
            href="/request-quote"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-scarlet-600 text-white font-medium hover:bg-scarlet-500 transition-colors"
          >
            Request a Quote
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
