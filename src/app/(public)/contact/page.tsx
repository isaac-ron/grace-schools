import Link from "next/link";
import { SITE } from "@/lib/site";

export default function ContactPage() {
  return (
    <>
      <div className="bg-[var(--color-crimson)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-red-300 mb-4 flex items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-white">Contact Us</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Contact Us
          </h1>
          <p className="mt-4 text-red-100 max-w-xl">
            We would love to hear from you. Reach out with any questions about admissions,
            curriculum, or life at The Grace Schools.
          </p>
        </div>
      </div>

      <section className="py-16 bg-[var(--color-surface)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Contact details */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8" style={{ fontFamily: "var(--font-heading)" }}>
                Get in Touch
              </h2>
              <div className="space-y-5">

                {/* Address */}
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[var(--color-crimson)] text-[20px]">location_on</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                      Physical Address
                    </p>
                    <p className="text-gray-900 font-medium">{SITE.address}</p>
                    <p className="text-sm text-gray-500 mt-0.5">Chepilat, Kenya</p>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[var(--color-crimson)] text-[20px]">phone</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                      Phone
                    </p>
                    <div className="flex flex-col gap-1">
                      {SITE.phones.map((p) => (
                        <a
                          key={p.tel}
                          href={`tel:${p.tel}`}
                          className="text-gray-900 font-medium hover:text-[var(--color-crimson)] transition-colors"
                        >
                          {p.display}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[var(--color-crimson)] text-[20px]">mail</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-gray-900 font-medium hover:text-[var(--color-crimson)] transition-colors break-all"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>

                {/* Office hours */}
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[var(--color-crimson)] text-[20px]">schedule</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                      Office Hours
                    </p>
                    <p className="text-gray-900 font-medium">Monday – Friday: 7:30 AM – 5:00 PM</p>
                    <p className="text-sm text-gray-500 mt-0.5">Saturday: 8:00 AM – 12:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-[var(--color-crimson)] rounded-xl text-white">
                <p className="font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  Prefer a form?
                </p>
                <p className="text-sm text-red-100 mb-4">
                  Use our enquiry form and we will respond within 1–2 business days.
                </p>
                <Link
                  href="/enquiries"
                  className="inline-flex items-center gap-2 bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-[var(--color-crimson-dark)] text-sm font-semibold px-5 py-2 rounded-full transition-colors"
                >
                  Send an Enquiry
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Map placeholder */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8" style={{ fontFamily: "var(--font-heading)" }}>
                Find Us
              </h2>
              <div className="bg-white rounded-2xl overflow-hidden h-72 flex items-center justify-center border border-slate-200">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.7626657333954!2d35.06862607242626!3d-0.6943673537841257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182b0d9e47d6b151%3A0xa03f3d0435a2065f!2sThe%20Grace%20Schools%20Chepilat%20Township!5e0!3m2!1sen!2ske!4v1779263937537!5m2!1sen!2ske" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                {/*<div className="text-center text-gray-400">
                  <span className="material-symbols-outlined text-[48px] block mb-2">map</span>
                  <p className="text-sm">Map embed coming soon</p>
                  <p className="text-xs mt-1">Chepilat, opposite Summit Hospital</p>
                </div>*/}
              </div>
              <div className="mt-4 p-5 bg-white rounded-xl border border-slate-200">
                <p className="text-sm text-gray-600 leading-relaxed">
                  We are located in <strong>Chepilat Town, opposite Summit Hospital</strong>. Visitors
                  are warmly welcomed during office hours. Call ahead to schedule a tour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
