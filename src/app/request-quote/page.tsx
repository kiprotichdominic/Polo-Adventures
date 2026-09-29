import type { Metadata } from "next";
import { destinations } from "@/lib/data";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Tell us your travel plans and Polo Adventures will build a tailored safari itinerary within 24 hours.",
};

const inputClass =
  "w-full px-3.5 py-2.5 rounded-md border border-ink-200 bg-surface-base text-sm text-ink-900 placeholder:text-ink-300 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent";

const selectClass =
  "w-full px-3.5 py-2.5 rounded-md border border-ink-200 bg-surface-base text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent";

export default function RequestQuotePage() {
  return (
    <>
      <div className="bg-navy-900 pt-28 pb-14 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="display-heading text-white text-4xl sm:text-5xl mb-3">Request a Quote</h1>
          <p className="text-navy-300/75 text-lg max-w-lg">
            Fill in the form below and a dedicated travel specialist will respond with a tailored itinerary within 24 hours — no obligation.
          </p>
        </div>
      </div>

      <section className="py-14 sm:py-20 px-5 sm:px-8 bg-surface-base">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-6 sm:p-10 shadow-[0_1px_3px_oklch(0%_0_0/0.05),0_4px_20px_oklch(0%_0_0/0.07)]">
            <form className="space-y-8" action="mailto:info@poloadventures.co.ke" method="get">

              <fieldset>
                <legend className="text-xs font-semibold text-ink-400 uppercase tracking-wider mb-4">Your details</legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-ink-600 mb-1.5">Full name</label>
                    <input id="name" name="name" type="text" required placeholder="Jane Smith" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-ink-600 mb-1.5">Email address</label>
                    <input id="email" name="email" type="email" required placeholder="jane@email.com" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-ink-600 mb-1.5">Phone (optional)</label>
                    <input id="phone" name="phone" type="tel" placeholder="+1 555 000 0000" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-xs font-medium text-ink-600 mb-1.5">Country of residence</label>
                    <input id="country" name="country" type="text" placeholder="United Kingdom" className={inputClass} />
                  </div>
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-xs font-semibold text-ink-400 uppercase tracking-wider mb-4">Trip details</legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="destination" className="block text-xs font-medium text-ink-600 mb-1.5">Destination</label>
                    <select id="destination" name="destination" className={selectClass}>
                      <option value="">Any destination</option>
                      {destinations.map((d) => (
                        <option key={d.id} value={d.slug}>{d.name}</option>
                      ))}
                      <option value="multi">Multiple destinations</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="tour-type" className="block text-xs font-medium text-ink-600 mb-1.5">Tour type</label>
                    <select id="tour-type" name="tour-type" className={selectClass}>
                      <option value="">Any type</option>
                      <option value="bush">Bush Safari</option>
                      <option value="beach">Beach Holiday</option>
                      <option value="climbing">Mountain Climbing</option>
                      <option value="group">Group Safari</option>
                      <option value="budget">Budget Safari</option>
                      <option value="family">Family Safari</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="arrival" className="block text-xs font-medium text-ink-600 mb-1.5">Arrival date</label>
                    <input id="arrival" name="arrival" type="date" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="duration" className="block text-xs font-medium text-ink-600 mb-1.5">Trip duration</label>
                    <select id="duration" name="duration" className={selectClass}>
                      <option value="">Not sure yet</option>
                      <option value="3-4">3 – 4 days</option>
                      <option value="5-7">5 – 7 days</option>
                      <option value="8-10">8 – 10 days</option>
                      <option value="11+">11+ days</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="travellers" className="block text-xs font-medium text-ink-600 mb-1.5">Number of travellers</label>
                    <select id="travellers" name="travellers" className={selectClass}>
                      <option value="1">1 person</option>
                      <option value="2">2 people</option>
                      <option value="3-4">3 – 4 people</option>
                      <option value="5-8">5 – 8 people</option>
                      <option value="9+">9+ people</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-xs font-medium text-ink-600 mb-1.5">Budget per person (USD)</label>
                    <select id="budget" name="budget" className={selectClass}>
                      <option value="">No preference</option>
                      <option value="under-1000">Under $1,000</option>
                      <option value="1000-2000">$1,000 – $2,000</option>
                      <option value="2000-3500">$2,000 – $3,500</option>
                      <option value="3500+">$3,500+</option>
                    </select>
                  </div>
                </div>
              </fieldset>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-ink-600 mb-1.5">
                  Tell us more about your dream trip
                </label>
                <textarea id="message" name="message" rows={4}
                  placeholder="Specific wildlife, activities, accommodation preferences or special occasions…"
                  className={`${inputClass} resize-none`} />
              </div>

              <div>
                <button type="submit"
                  className="w-full py-4 rounded-md bg-navy-700 text-white font-medium hover:bg-navy-600 active:bg-navy-800 transition-colors focus-visible:ring-2 focus-visible:ring-navy-600 focus-visible:ring-offset-2 focus-visible:outline-none">
                  Send quote request
                </button>
                <p className="text-center text-xs text-ink-400 mt-3">
                  No payment required. We&apos;ll respond within 24 hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
