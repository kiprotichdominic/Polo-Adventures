"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { clsx } from "clsx";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/tours", label: "Tours" },
  { href: "/destinations", label: "Destinations" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300",
        transparent
          ? "bg-transparent"
          : "bg-white/98 backdrop-blur-md shadow-[0_1px_0_oklch(0.14_0.005_256/0.08),0_2px_16px_oklch(0.14_0.005_256/0.06)]"
      )}
    >
      {/* Lime brand stripe — echoes the logo vertical divider */}
      <div
        className={clsx(
          "h-0.75 transition-[opacity,transform] duration-300 origin-left",
          transparent
            ? "opacity-0 scale-x-0"
            : "opacity-100 scale-x-100"
        )}
        style={{ background: "linear-gradient(90deg, oklch(0.63 0.17 122), oklch(0.72 0.16 122))" }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-15 lg:h-17">

        {/* Logo — both rendered, crossfade via opacity */}
        <Link href="/" className="relative flex items-center shrink-0 h-10" aria-label="Polo Adventures home">
          {/* Image logo: visible on solid nav */}
          <Image
            src="/images/logo.png"
            alt="Polo Adventures"
            width={140}
            height={79}
            className={clsx(
              "h-9 w-auto absolute left-0 transition-[opacity,transform] duration-300",
              transparent ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
            )}
            priority
          />
          {/* Text logo: visible on transparent hero */}
          <div
            className={clsx(
              "flex flex-col leading-none transition-[opacity,transform] duration-300",
              transparent ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"
            )}
          >
            <span className="font-display font-bold text-[1.1rem] tracking-[-0.01em] text-white">
              POLO ADVENTURES
            </span>
            <span className="text-[0.55rem] text-white/55 tracking-[0.22em] font-medium mt-0.5 uppercase">
              For a Magical Experience
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={clsx(
                  "relative px-3 py-2 text-sm font-medium transition-colors duration-150 rounded-md",
                  // Active underline via pseudo-element approach using after in Tailwind
                  active && "after:absolute after:bottom-0.5 after:inset-x-3 after:h-0.5 after:rounded-full",
                  transparent
                    ? [
                        active
                          ? "text-white after:bg-lime-400"
                          : "text-white/75 hover:text-white hover:bg-white/10",
                      ]
                    : [
                        active
                          ? "text-navy-700 after:bg-lime-500"
                          : "text-ink-500 hover:text-navy-700 hover:bg-navy-50",
                      ]
                )}
                aria-current={active ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Phone — visible on large screens only */}
          <a
            href="tel:+254725076705"
            className={clsx(
              "hidden lg:flex items-center gap-1.5 text-sm transition-colors duration-150",
              transparent ? "text-white/65 hover:text-white" : "text-ink-400 hover:text-ink-900"
            )}
          >
            <Phone size={13} />
            <span>+254 725 076 705</span>
          </a>

          {/* WhatsApp icon button */}
          <a
            href="https://wa.me/254725076705"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className={clsx(
              "p-2 rounded-md transition-colors duration-150",
              transparent
                ? "text-white/65 hover:text-white hover:bg-white/10"
                : "text-ink-400 hover:text-ink-900 hover:bg-ink-100"
            )}
          >
            <MessageCircle size={17} />
          </a>

          <Link
            href="/request-quote"
            className={clsx(
              "px-4 py-2 rounded-md text-sm font-medium transition-[background-color,box-shadow] duration-150",
              transparent
                ? "bg-scarlet-600 text-white hover:bg-scarlet-500 shadow-[0_2px_8px_oklch(0.45_0.18_22/0.35)]"
                : "bg-navy-700 text-white hover:bg-navy-600 shadow-[0_2px_8px_oklch(0.32_0.12_256/0.25)]"
            )}
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className={clsx(
            "md:hidden p-2 rounded-md transition-colors duration-150",
            transparent ? "text-white hover:bg-white/10" : "text-ink-600 hover:bg-ink-100"
          )}
        >
          <span
            className={clsx(
              "block transition-[opacity,transform] duration-200",
              open ? "opacity-0 rotate-90 absolute" : "opacity-100 rotate-0"
            )}
          >
            <Menu size={20} />
          </span>
          <span
            className={clsx(
              "block transition-[opacity,transform] duration-200",
              open ? "opacity-100 rotate-0" : "opacity-0 -rotate-90 absolute"
            )}
          >
            <X size={20} />
          </span>
        </button>
      </div>

      {/* Mobile drawer — animated with max-height */}
      <div
        id="mobile-menu"
        className={clsx(
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-white border-t border-ink-100 px-5 pb-6 pt-3">
          {/* Nav links */}
          <nav className="space-y-0.5 mb-5" aria-label="Mobile navigation">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={clsx(
                    "flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                    active
                      ? "bg-navy-50 text-navy-700"
                      : "text-ink-500 hover:text-navy-700 hover:bg-navy-50"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {label}
                  {active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-500 shrink-0" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Contact + CTA */}
          <div className="pt-4 border-t border-ink-100 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:+254725076705"
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-md text-sm text-ink-500 border border-ink-200 hover:bg-ink-50 transition-colors"
              >
                <Phone size={13} />
                Call us
              </a>
              <a
                href="https://wa.me/254725076705"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-md text-sm text-ink-500 border border-ink-200 hover:bg-ink-50 transition-colors"
              >
                <MessageCircle size={13} />
                WhatsApp
              </a>
            </div>
            <Link
              href="/request-quote"
              className="flex items-center justify-center w-full px-4 py-3 rounded-md bg-navy-700 text-white text-sm font-medium hover:bg-navy-600 transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
