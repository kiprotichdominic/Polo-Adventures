import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Polo Adventures. We're based in Nairobi, Kenya and available by phone, email or WhatsApp.",
};

const inputClass =
  "w-full px-3.5 py-2.5 rounded-md border border-ink-200 bg-surface-base text-sm text-ink-900 placeholder:text-ink-300 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-shadow";

export default function ContactPage() {
  return (
    <>
      <div className="bg-navy-900 pt-28 pb-14 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="display-heading text-white text-4xl sm:text-5xl mb-3">Contact Us</h1>
          <p className="text-navy-300/75 text-lg max-w-lg">
            Have a question or ready to plan your trip? We&apos;re a message away.
          </p>
        </div>
      </div>

      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-surface-base">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-[0_1px_3px_oklch(0%_0_0/0.05),0_4px_16px_oklch(0%_0_0/0.06)]">
              <h2 className="text-ink-900 font-semibold mb-5">Contact information</h2>
              <div className="space-y-4">
                {[
                  { icon: <Phone size={16} />, label: "Phone", value: "+254 725 076 705", href: "tel:+254725076705" },
                  { icon: <MessageCircle size={16} />, label: "WhatsApp", value: "+254 725 076 705", href: "https://wa.me/254725076705" },
                  { icon: <Mail size={16} />, label: "Email", value: "info@poloadventures.co.ke", href: "mailto:info@poloadventures.co.ke" },
                  { icon: <MapPin size={16} />, label: "Location", value: "Nairobi, Kenya", href: undefined },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-md bg-navy-50 flex items-center justify-center text-navy-700 shrink-0 mt-0.5">
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs text-ink-400 mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm font-medium text-ink-800 hover:text-navy-700 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-ink-800">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-[0_1px_3px_oklch(0%_0_0/0.05),0_4px_16px_oklch(0%_0_0/0.06)] flex gap-3 items-start">
              <div className="w-8 h-8 rounded-md bg-lime-100 flex items-center justify-center text-lime-700 shrink-0">
                <Clock size={16} />
              </div>
              <div>
                <p className="text-sm font-medium text-ink-800">We respond within 24 hours</p>
                <p className="text-xs text-ink-400 mt-0.5">Mon – Sat, 8am – 6pm EAT</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-xl p-6 sm:p-8 shadow-[0_1px_3px_oklch(0%_0_0/0.05),0_4px_16px_oklch(0%_0_0/0.06)]">
            <h2 className="text-ink-900 font-semibold mb-6">Send us a message</h2>
            <form className="space-y-5" action="mailto:info@poloadventures.co.ke" method="get">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="block text-xs font-medium text-ink-600 mb-1.5">First name</label>
                  <input id="first-name" name="first-name" type="text" required placeholder="Jane" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-xs font-medium text-ink-600 mb-1.5">Last name</label>
                  <input id="last-name" name="last-name" type="text" required placeholder="Smith" className={inputClass} />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-ink-600 mb-1.5">Email address</label>
                <input id="email" name="email" type="email" required placeholder="jane@email.com" className={inputClass} />
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-ink-600 mb-1.5">Subject</label>
                <input id="subject" name="subject" type="text" placeholder="Maasai Mara safari enquiry" className={inputClass} />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-ink-600 mb-1.5">Message</label>
                <textarea id="message" name="message" rows={5} required placeholder="Tell us what you have in mind…"
                  className={`${inputClass} resize-none`} />
              </div>
              <button type="submit"
                className="w-full py-3 rounded-md bg-navy-700 text-white text-sm font-medium hover:bg-navy-600 active:bg-navy-800 transition-colors focus-visible:ring-2 focus-visible:ring-navy-600 focus-visible:ring-offset-2 focus-visible:outline-none">
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
