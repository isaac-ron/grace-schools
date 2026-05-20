import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-crimson-dark)] text-white">
      {/* Gold accent bar */}
      <div className="h-1 bg-[var(--color-gold)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-lg p-1.5 shadow-md">
                <Image
                  src="/logo.jpg"
                  alt="The Grace Schools crest"
                  width={44}
                  height={44}
                  className="rounded"
                />
              </div>
              <div className="leading-tight">
                <p className="font-bold text-white text-sm uppercase tracking-wide">
                  The Grace Schools
                </p>
                <p className="text-[10px] text-[var(--color-blue-accent-light)] tracking-widest uppercase">
                  Chepilat
                </p>
              </div>
            </Link>
            <p className="text-sm text-red-200 leading-relaxed italic">
              "A School with a Difference"
            </p>
            <p className="text-xs text-red-300 mt-3 leading-relaxed">
              A faith-based institution nurturing academic excellence and holistic development through the CBC curriculum.
            </p>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              About Us
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/about/our-story", label: "Our Story" },
                { href: "/about/mission-vision", label: "Mission & Vision" },
                { href: "/about/administration", label: "Administration" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-red-200 hover:text-[var(--color-gold-light)] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Curriculum */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              CBC Curriculum
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/curriculum/lower-primary", label: "Lower Primary (Gr. 1–3)" },
                { href: "/curriculum/upper-primary", label: "Upper Primary (Gr. 4–6)" },
                { href: "/curriculum/junior-school", label: "Junior Secondary (Gr. 7–9)" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-red-200 hover:text-[var(--color-gold-light)] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[var(--color-gold)] text-[18px] mt-0.5">location_on</span>
                <span className="text-sm text-red-200">{SITE.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[var(--color-gold)] text-[18px] mt-0.5">phone</span>
                <div className="flex flex-col gap-0.5">
                  {SITE.phones.map((p) => (
                    <a key={p.tel} href={`tel:${p.tel}`} className="text-sm text-red-200 hover:text-[var(--color-gold-light)]">
                      {p.display}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[var(--color-gold)] text-[18px] mt-0.5">mail</span>
                <a href={`mailto:${SITE.email}`} className="text-sm text-red-200 hover:text-[var(--color-gold-light)] break-all">
                  {SITE.email}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-2">
              <Link
                href="/enquiries"
                className="text-xs bg-[var(--color-crimson)] hover:bg-[var(--color-crimson-light)] border border-red-400 text-white px-3 py-1.5 rounded-full transition-colors"
              >
                Enquire
              </Link>
              <Link
                href="/apply"
                className="text-xs bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-[var(--color-crimson-dark)] font-semibold px-3 py-1.5 rounded-full transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-red-300">
            © {new Date().getFullYear()} The Grace Schools Chepilat. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="text-xs text-red-300 hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/enquiries" className="text-xs text-red-300 hover:text-white transition-colors">
              Enquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
