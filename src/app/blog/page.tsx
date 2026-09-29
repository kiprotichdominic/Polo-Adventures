import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Blog",
  description: "Safari tips, destination guides and travel inspiration from the Polo Adventures team in Nairobi, Kenya.",
};

const posts = [
  {
    slug: "best-time-to-visit-maasai-mara",
    title: "The best time to visit the Maasai Mara",
    excerpt: "The Great Migration runs from July to October, but the Mara offers world-class wildlife year-round. Here's how to plan your timing.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    category: "Destination Guide",
    readTime: "5 min read",
    date: "12 Aug 2025",
  },
  {
    slug: "what-to-pack-for-a-kenya-safari",
    title: "What to pack for a Kenya safari",
    excerpt: "From neutral-toned clothing to the right binoculars, our guides share the essential packing list refined over thousands of game drives.",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
    category: "Safari Tips",
    readTime: "7 min read",
    date: "28 Jul 2025",
  },
  {
    slug: "zanzibar-stone-town-guide",
    title: "A first-timer's guide to Stone Town, Zanzibar",
    excerpt: "UNESCO-listed Stone Town is one of Africa's most atmospheric cities. Here's how to spend two perfect days exploring its labyrinthine streets.",
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80",
    category: "Destination Guide",
    readTime: "6 min read",
    date: "10 Jul 2025",
  },
  {
    slug: "mount-kenya-trek-guide",
    title: "Trekking Mount Kenya: everything you need to know",
    excerpt: "Africa's second-highest peak is achievable without technical climbing experience. Here's a complete guide to the Sirimon–Chogoria route.",
    image: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&q=80",
    category: "Adventure",
    readTime: "9 min read",
    date: "2 Jun 2025",
  },
  {
    slug: "gorilla-trekking-bwindi",
    title: "Gorilla trekking in Bwindi: our honest review",
    excerpt: "One hour with a mountain gorilla family changes your perspective on the natural world. Is the permit price worth it? Absolutely.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    category: "Wildlife",
    readTime: "8 min read",
    date: "15 May 2025",
  },
  {
    slug: "budget-safari-kenya-tips",
    title: "5 ways to do a Kenya safari on a budget",
    excerpt: "A world-class East African safari doesn't have to cost a fortune. These strategies let you see the Big Five without breaking the bank.",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80",
    category: "Safari Tips",
    readTime: "6 min read",
    date: "30 Apr 2025",
  },
];

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <div className="bg-navy-900 pt-28 pb-14 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="display-heading text-white text-4xl sm:text-5xl mb-3">The Polo Blog</h1>
          <p className="text-navy-300/75 text-lg max-w-xl">
            Safari tips, destination guides and travel inspiration from our team in the field.
          </p>
        </div>
      </div>

      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-surface-base">
        <div className="max-w-7xl mx-auto space-y-10">

          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-2 rounded-xl overflow-hidden bg-white shadow-[0_1px_3px_oklch(0%_0_0/0.05),0_4px_20px_oklch(0%_0_0/0.07)] hover:shadow-[0_4px_12px_oklch(0%_0_0/0.08),0_16px_40px_oklch(0%_0_0/0.10)] transition-shadow duration-300"
          >
            <div className="relative aspect-video lg:aspect-auto min-h-64 overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-7 sm:p-9 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="navy">{featured.category}</Badge>
                <span className="text-xs text-ink-400 flex items-center gap-1.5">
                  <Clock size={11} /> {featured.readTime}
                </span>
              </div>
              <h2 className="display-heading text-ink-900 text-2xl sm:text-3xl mb-3 group-hover:text-navy-700 transition-colors">
                {featured.title}
              </h2>
              <p className="text-ink-500 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <p className="text-xs text-ink-400">{featured.date}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-700 group-hover:gap-2.5 transition-all">
                  Read more <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-[0_1px_3px_oklch(0%_0_0/0.05),0_4px_16px_oklch(0%_0_0/0.06)] hover:shadow-[0_4px_12px_oklch(0%_0_0/0.07),0_16px_40px_oklch(0%_0_0/0.09)] transition-shadow duration-300 flex flex-col"
              >
                <div className="relative aspect-16/10 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2.5 mb-3">
                    <Badge variant="earth">{post.category}</Badge>
                    <span className="text-xs text-ink-400 flex items-center gap-1">
                      <Clock size={11} /> {post.readTime}
                    </span>
                  </div>
                  <h2 className="display-heading text-ink-900 text-base sm:text-lg mb-2 flex-1 group-hover:text-navy-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-ink-500 text-xs leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                  <p className="text-xs text-ink-400 pt-3 border-t border-ink-100">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
