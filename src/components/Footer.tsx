import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { Icon } from "@/components/ui";

const aboutLinks = [
  { href: "/about/our-story", label: "Our Story" },
  { href: "/about/mission-vision", label: "Mission and Vision" },
  { href: "/about/administration", label: "Administration" },
];

const curriculumLinks = [
  { href: "/curriculum/lower-primary", label: "Lower Primary, Grades 1 to 3" },
  { href: "/curriculum/upper-primary", label: "Upper Primary, Grades 4 to 6" },
  { href: "/curriculum/junior-school", label: "Junior School, Grades 7 to 9" },
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-gold bg-crimson-deep text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-5 flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="The Grace Schools crest"
                width={44}
                height={44}
              />
              <span className="leading-tight">
                <span className="block font-heading text-base text-white">
                  The Grace Schools
                </span>
                <span className="doc-label mt-0.5 block text-gold">Chepilat</span>
              </span>
            </Link>
            <p className="font-heading text-lg text-gold">{SITE.motto}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              A faith-based school running the national Competency Based Education
              curriculum from Pre-Primary through Grade 9.
            </p>
          </div>

          <FooterColumn title="About" links={aboutLinks} />
          <FooterColumn title="Curriculum" links={curriculumLinks} />

          <div>
            <h2 className="doc-label mb-5 text-gold">Get in touch</h2>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span className="text-sm text-white/80">{SITE.address}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span className="flex flex-col">
                  {SITE.phones.map((p) => (
                    <a
                      key={p.tel}
                      href={`tel:${p.tel}`}
                      className="min-h-[36px] text-sm text-white/80 transition-colors
                                 hover:text-gold focus-visible:outline-2
                                 focus-visible:outline-offset-2 focus-visible:outline-gold"
                    >
                      {p.display}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Icon name="mail" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="break-all text-sm text-white/80 transition-colors hover:text-gold
                             focus-visible:outline-2 focus-visible:outline-offset-2
                             focus-visible:outline-gold"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/apply"
                className="inline-flex min-h-[44px] items-center rounded-md bg-gold px-5
                           text-sm font-semibold text-crimson-deep transition-colors
                           duration-200 hover:bg-gold-light focus-visible:outline-2
                           focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Apply
              </Link>
              <Link
                href="/enquiries"
                className="inline-flex min-h-[44px] items-center rounded-md border
                           border-white/40 px-5 text-sm font-semibold text-white
                           transition-colors duration-200 hover:border-gold hover:text-gold
                           focus-visible:outline-2 focus-visible:outline-offset-2
                           focus-visible:outline-white"
              >
                Enquire
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div
          className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2
                     px-4 py-5 sm:flex-row sm:px-6"
        >
          <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()} The Grace Schools, Chepilat. All rights
            reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/contact"
              className="text-xs text-white/60 transition-colors hover:text-gold"
            >
              Contact
            </Link>
            <Link
              href="/enquiries"
              className="text-xs text-white/60 transition-colors hover:text-gold"
            >
              Enquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h2 className="doc-label mb-5 text-gold">{title}</h2>
      <ul className="flex flex-col">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="flex min-h-[40px] items-center text-sm text-white/80
                         transition-colors duration-150 hover:text-gold
                         focus-visible:outline-2 focus-visible:outline-offset-2
                         focus-visible:outline-gold"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
