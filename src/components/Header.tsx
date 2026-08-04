"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui";

/**
 * The masthead: the deep crimson field closed by a gold rule.
 *
 * That pairing is the structural mark of the Crest system and it repeats at the
 * head of every record in the portal, which is what ties the two surfaces
 * together as one school.
 */

const aboutLinks = [
  { href: "/about/our-story", label: "Our Story" },
  { href: "/about/mission-vision", label: "Mission and Vision" },
  { href: "/about/administration", label: "Administration" },
];

const curriculumLinks = [
  { href: "/curriculum/lower-primary", label: "Lower Primary" },
  { href: "/curriculum/upper-primary", label: "Upper Primary" },
  { href: "/curriculum/junior-school", label: "Junior School" },
];

const portalLinks = [
  { href: "/portal/student", label: "Parent and Student" },
  { href: "/portal/staff", label: "Staff" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const closeAll = () => {
    setMobileOpen(false);
    setOpenSection(null);
  };

  return (
    <header className="sticky top-0 z-50 border-b-2 border-gold bg-crimson-deep">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3 rounded-xs
                       focus-visible:outline-2 focus-visible:outline-offset-4
                       focus-visible:outline-gold"
          >
            <Image
              src="/logo.jpg"
              alt="The Grace Schools crest"
              width={44}
              height={44}
              priority
            />
            <span className="hidden leading-tight sm:block">
              <span className="block font-heading text-base text-white">
                The Grace Schools
              </span>
              <span className="doc-label mt-0.5 block text-gold">Chepilat</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            <NavLink href="/" label="Home" active={pathname === "/"} />
            <Dropdown label="About" links={aboutLinks} active={isActive("/about")} />
            <Dropdown
              label="Curriculum"
              links={curriculumLinks}
              active={isActive("/curriculum")}
            />
            <NavLink href="/resources" label="Resources" active={isActive("/resources")} />
            <NavLink href="/contact" label="Contact" active={isActive("/contact")} />
            <Dropdown label="Portal" links={portalLinks} active={isActive("/portal")} />
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/apply"
              className="hidden min-h-[44px] items-center rounded-md border border-gold px-5
                         text-sm font-semibold text-gold transition-colors duration-200
                         hover:bg-gold hover:text-crimson-deep
                         focus-visible:outline-2 focus-visible:outline-offset-2
                         focus-visible:outline-gold sm:inline-flex"
            >
              Apply
            </Link>
            <button
              type="button"
              className="-mr-2 flex h-11 w-11 items-center justify-center rounded-md text-white
                         transition-colors duration-200 hover:bg-white/10
                         focus-visible:outline-2 focus-visible:outline-offset-2
                         focus-visible:outline-gold lg:hidden"
              onClick={() => setMobileOpen((o) => !o)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <Icon name={mobileOpen ? "close" : "menu"} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/15 bg-crimson-deep lg:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            <MobileLink href="/" label="Home" onClick={closeAll} />
            <MobileGroup
              label="About"
              links={aboutLinks}
              open={openSection === "about"}
              onToggle={() => setOpenSection((s) => (s === "about" ? null : "about"))}
              onNavigate={closeAll}
            />
            <MobileGroup
              label="Curriculum"
              links={curriculumLinks}
              open={openSection === "curriculum"}
              onToggle={() =>
                setOpenSection((s) => (s === "curriculum" ? null : "curriculum"))
              }
              onNavigate={closeAll}
            />
            <MobileLink href="/resources" label="Resources" onClick={closeAll} />
            <MobileLink href="/contact" label="Contact" onClick={closeAll} />
            <MobileGroup
              label="Portal"
              links={portalLinks}
              open={openSection === "portal"}
              onToggle={() => setOpenSection((s) => (s === "portal" ? null : "portal"))}
              onNavigate={closeAll}
            />
            <Link
              href="/apply"
              onClick={closeAll}
              className="mt-3 flex min-h-[44px] items-center justify-center rounded-md
                         bg-gold px-5 text-sm font-semibold text-crimson-deep"
            >
              Apply for admission
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

const navItem =
  "flex min-h-[44px] items-center gap-1 rounded-md px-3 text-sm font-medium " +
  "transition-colors duration-200 focus-visible:outline-2 " +
  "focus-visible:outline-offset-2 focus-visible:outline-gold";

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`${navItem} ${active ? "text-gold" : "text-white/85 hover:text-white"}`}
    >
      {label}
    </Link>
  );
}

/**
 * Hover dropdown that also opens on keyboard focus. The previous version was
 * hover-only, so nobody navigating by keyboard could reach Our Story at all.
 */
function Dropdown({
  label,
  links,
  active,
}: {
  label: string;
  links: { href: string; label: string }[];
  active: boolean;
}) {
  return (
    <div className="group relative">
      <button
        type="button"
        className={`${navItem} ${active ? "text-gold" : "text-white/85 hover:text-white"}`}
      >
        {label}
        <Icon name="chevron" className="h-4 w-4" />
      </button>
      <div
        className="invisible absolute left-0 top-full w-56 border border-line border-t-2
                   border-t-gold bg-card opacity-0 shadow-lg transition-opacity duration-150
                   group-focus-within:visible group-focus-within:opacity-100
                   group-hover:visible group-hover:opacity-100"
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="block border-b border-line px-4 py-3 text-sm text-ink-soft
                       transition-colors duration-150 last:border-b-0
                       hover:bg-surface hover:text-crimson
                       focus-visible:outline-2 focus-visible:-outline-offset-2
                       focus-visible:outline-crimson"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex min-h-[44px] items-center border-b border-white/10 text-sm
                 font-medium text-white/90"
    >
      {label}
    </Link>
  );
}

function MobileGroup({
  label,
  links,
  open,
  onToggle,
  onNavigate,
}: {
  label: string;
  links: { href: string; label: string }[];
  open: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex min-h-[44px] w-full items-center justify-between text-sm
                   font-medium text-white/90"
      >
        {label}
        <Icon
          name="chevron"
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pb-2 pl-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={onNavigate}
              className="flex min-h-[44px] items-center text-sm text-gold"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
