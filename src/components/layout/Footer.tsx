import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const tourLinks = [
  { label: "Bush Safaris", href: "/tours?category=bush" },
  { label: "Beach Holidays", href: "/tours?category=beach" },
  { label: "Climbing Expeditions", href: "/tours?category=climbing" },
  { label: "Group Safaris", href: "/tours?category=group" },
  { label: "Budget Safaris", href: "/tours?category=budget" },
];

const destinationLinks = [
  { label: "Kenya", href: "/destinations/kenya" },
  { label: "Tanzania", href: "/destinations/tanzania" },
  { label: "Zanzibar", href: "/destinations/zanzibar" },
  { label: "Uganda", href: "/destinations/uganda" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Request a Quote", href: "/request-quote" },
];

export default function Footer() {
  return (
    <footer className="bg-white/98 text-ink-500 border-t border-ink-100">
      {/* Lime accent stripe — matches the navbar and logo divider */}
      <div className="h-0.75 bg-lime-500" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-18">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5">
              <Image
                src="/images/logo.png"
                alt="Polo Adventures"
                width={140}
                height={79}
                className="h-11 w-auto"
              />
            </div>
            <p className="text-sm text-ink-500 leading-relaxed mb-6 max-w-xs">
              Premier tour and travel company based in Nairobi, Kenya. Exceptional safari experiences across Africa &amp; Asia since 2014.
            </p>
            <div className="flex gap-2.5">
              <a
                href="https://facebook.com/poloadventures"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-md bg-navy-50 flex items-center justify-center text-navy-500 hover:text-white hover:bg-scarlet-600 transition-colors duration-150"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/poloadventures"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-md bg-navy-50 flex items-center justify-center text-navy-500 hover:text-white hover:bg-scarlet-600 transition-colors duration-150"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Tours */}
          <div>
            <h3 className="text-xs font-semibold text-navy-700 uppercase tracking-wider mb-4">Tours</h3>
            <ul className="space-y-2.5">
              {tourLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-ink-500 hover:text-navy-700 transition-colors duration-150">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-xs font-semibold text-navy-700 uppercase tracking-wider mb-4">Destinations</h3>
            <ul className="space-y-2.5">
              {destinationLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-ink-500 hover:text-navy-700 transition-colors duration-150">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold text-navy-700 uppercase tracking-wider mb-4">Get in touch</h3>
            <ul className="space-y-3 mb-5">
              <li>
                <a href="tel:+254725076705" className="flex items-start gap-2.5 text-sm text-ink-500 hover:text-navy-700 transition-colors duration-150">
                  <Phone size={14} className="mt-0.5 shrink-0" />
                  +254 725 076 705
                </a>
              </li>
              <li>
                <a href="mailto:info@poloadventures.co.ke" className="flex items-start gap-2.5 text-sm text-ink-500 hover:text-navy-700 transition-colors duration-150">
                  <Mail size={14} className="mt-0.5 shrink-0" />
                  info@poloadventures.co.ke
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2.5 text-sm text-ink-500">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  Nairobi, Kenya
                </span>
              </li>
            </ul>
            <ul className="space-y-2">
              {companyLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-ink-500 hover:text-navy-700 transition-colors duration-150">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-ink-100 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-ink-400">© {new Date().getFullYear()} Polo Adventures. All rights reserved.</p>
          <p className="text-xs text-ink-400">Registered tour operator · Nairobi, Kenya</p>
        </div>
      </div>
    </footer>
  );
}
