"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const aboutLinks = [
  { href: "/about/our-story", label: "Our Story" },
  { href: "/about/mission-vision", label: "Mission & Vision" },
  { href: "/about/administration", label: "Administration" },
];

const curriculumLinks = [
  { href: "/curriculum/lower-primary", label: "Lower Primary" },
  { href: "/curriculum/upper-primary", label: "Upper Primary" },
  { href: "/curriculum/junior-school", label: "Junior Secondary" },
];

const portalLinks = [
  { href: "/portal/student", label: "Student Portal" },
  { href: "/portal/staff", label: "Staff Portal" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileCurriculumOpen, setMobileCurriculumOpen] = useState(false);
  const [mobilePortalOpen, setMobilePortalOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.jpg"
              alt="The Grace Schools crest"
              width={44}
              height={44}
              className="rounded"
              priority
            />
            <div className="hidden sm:block leading-tight">
              <p className="font-bold text-[var(--color-crimson)] text-sm uppercase tracking-wide">
                The Grace Schools
              </p>
              <p className="text-[10px] text-gray-500 tracking-widest uppercase">
                Chepilat
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavLink href="/" label="Home" active={pathname === "/"} />

            {/* About dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-[var(--color-crimson)] hover:bg-red-50 ${
                  isActive("/about") ? "text-[var(--color-crimson)]" : "text-gray-700"
                }`}
              >
                About
                <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </button>
              <div className="absolute left-0 top-full mt-1 w-48 bg-white border border-gray-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                {aboutLinks.map((l) => (
                  <DropdownItem key={l.href} {...l} active={pathname === l.href} />
                ))}
              </div>
            </div>

            {/* Curriculum dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-[var(--color-crimson)] hover:bg-red-50 ${
                  isActive("/curriculum") ? "text-[var(--color-crimson)]" : "text-gray-700"
                }`}
              >
                Curriculum
                <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </button>
              <div className="absolute left-0 top-full mt-1 w-48 bg-white border border-gray-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                {curriculumLinks.map((l) => (
                  <DropdownItem key={l.href} {...l} active={pathname === l.href} />
                ))}
              </div>
            </div>

            <NavLink href="/resources" label="Resources" active={isActive("/resources")} />
            <NavLink href="/contact" label="Contact" active={isActive("/contact")} />

            {/* Portals dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-[var(--color-crimson)] hover:bg-red-50 ${
                  isActive("/portal") ? "text-[var(--color-crimson)]" : "text-gray-700"
                }`}
              >
                Portals
                <span className="material-symbols-outlined text-[16px]">expand_more</span>
              </button>
              <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                {portalLinks.map((l) => (
                  <DropdownItem key={l.href} {...l} active={pathname === l.href} />
                ))}
              </div>
            </div>
          </nav>

          {/* CTA + mobile trigger */}
          <div className="flex items-center gap-3">
            <Link
              href="/apply"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[var(--color-crimson)] hover:bg-[var(--color-crimson-dark)] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
            >
              Apply Now
            </Link>
            <button
              className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined">
                {mobileOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            <MobileNavLink href="/" label="Home" onClick={() => setMobileOpen(false)} />

            {/* About accordion */}
            <div>
              <button
                className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-red-50 hover:text-[var(--color-crimson)]"
                onClick={() => setMobileAboutOpen((o) => !o)}
              >
                About
                <span className="material-symbols-outlined text-[18px]">
                  {mobileAboutOpen ? "expand_less" : "expand_more"}
                </span>
              </button>
              {mobileAboutOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  {aboutLinks.map((l) => (
                    <MobileNavLink key={l.href} {...l} onClick={() => setMobileOpen(false)} />
                  ))}
                </div>
              )}
            </div>

            {/* Curriculum accordion */}
            <div>
              <button
                className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-red-50 hover:text-[var(--color-crimson)]"
                onClick={() => setMobileCurriculumOpen((o) => !o)}
              >
                Curriculum
                <span className="material-symbols-outlined text-[18px]">
                  {mobileCurriculumOpen ? "expand_less" : "expand_more"}
                </span>
              </button>
              {mobileCurriculumOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  {curriculumLinks.map((l) => (
                    <MobileNavLink key={l.href} {...l} onClick={() => setMobileOpen(false)} />
                  ))}
                </div>
              )}
            </div>

            <MobileNavLink href="/resources" label="Resources" onClick={() => setMobileOpen(false)} />
            <MobileNavLink href="/contact" label="Contact" onClick={() => setMobileOpen(false)} />

            {/* Portals accordion */}
            <div>
              <button
                className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-red-50 hover:text-[var(--color-crimson)]"
                onClick={() => setMobilePortalOpen((o) => !o)}
              >
                Portals
                <span className="material-symbols-outlined text-[18px]">
                  {mobilePortalOpen ? "expand_less" : "expand_more"}
                </span>
              </button>
              {mobilePortalOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  {portalLinks.map((l) => (
                    <MobileNavLink key={l.href} {...l} onClick={() => setMobileOpen(false)} />
                  ))}
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-gray-100">
              <Link
                href="/apply"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center bg-[var(--color-crimson)] text-white text-sm font-semibold px-4 py-2.5 rounded-full w-full"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:text-[var(--color-crimson)] hover:bg-red-50 ${
        active ? "text-[var(--color-crimson)] bg-red-50" : "text-gray-700"
      }`}
    >
      {label}
    </Link>
  );
}

function DropdownItem({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`block px-4 py-2.5 text-sm transition-colors hover:bg-red-50 hover:text-[var(--color-crimson)] first:rounded-t-lg last:rounded-b-lg ${
        active ? "text-[var(--color-crimson)] bg-red-50" : "text-gray-700"
      }`}
    >
      {label}
    </Link>
  );
}

function MobileNavLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-red-50 hover:text-[var(--color-crimson)]"
    >
      {label}
    </Link>
  );
}
