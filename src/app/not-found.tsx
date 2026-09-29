import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative min-h-svh flex items-center bg-navy-950 overflow-hidden">
      {/* Ambient glow, echoes the hero treatment */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,oklch(0.32_0.12_256/0.5)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pt-24 pb-16 text-center">
        <div className="max-w-xl mx-auto">
          <div className="mx-auto mb-6 w-12 h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center animate-fade-up">
            <Compass size={22} className="text-lime-400" />
          </div>

          <p className="text-white/50 text-sm font-medium tracking-wide mb-3 animate-fade-up delay-100">
            Polo Adventures · 404
          </p>

          <h1 className="display-heading text-white text-6xl sm:text-7xl mb-4 animate-fade-up delay-150">
            Off the Map
          </h1>

          <p className="text-white/70 text-lg leading-relaxed mb-10 animate-fade-up delay-200">
            We couldn&apos;t find the page you were looking for. It may have moved, or the trail ends here — let&apos;s get you back on route.
          </p>

          <div className="flex flex-wrap justify-center gap-3 animate-fade-up delay-300">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[8px] bg-scarlet-600 text-white text-sm font-medium hover:bg-scarlet-500 transition-colors duration-150"
            >
              Back to Home
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[8px] text-sm font-medium bg-white/10 text-white border border-white/25 hover:bg-white/20 backdrop-blur-sm transition-colors duration-150"
            >
              Browse Tours
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
