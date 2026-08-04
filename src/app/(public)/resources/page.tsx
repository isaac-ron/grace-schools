import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Resources | The Grace Schools Chepilat",
  description:
    "Term dates, forms, fee structure and CBE learning resources for Grace Schools parents and learners.",
};

const categories = [
  {
    title: "Academic calendar",
    items: [
      "2027 term dates",
      "School and public holidays",
      "Assessment timetables",
      "Key events schedule",
    ],
  },
  {
    title: "Forms and documents",
    items: [
      "Admission application form",
      "School rules and regulations",
      "Fee structure",
      "School uniform guidelines",
    ],
  },
  {
    title: "CBE learning resources",
    items: [
      "Curriculum overview",
      "KICD resource portal",
      "Recommended book lists",
      "Study guides",
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        trail={[{ href: "/", label: "Home" }]}
        title="Resources"
        lede="Documents, guides and dates for parents, learners and families considering a place."
      />

      <Section>
        {/* Honest about state: nothing here is downloadable yet, so the page says
            so once at the top rather than presenting dead links as live ones. */}
        <div className="mb-12 border border-t-2 border-line border-t-gold bg-surface p-6">
          <p className="font-heading text-lg text-ink">
            These documents are not published here yet
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
            The list below is what the office holds. Until the files are online,
            please{" "}
            <Link
              href="/contact"
              className="font-semibold text-crimson underline underline-offset-4
                         hover:text-crimson-dark"
            >
              call or email the office
            </Link>{" "}
            and we will send you whatever you need.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <div key={c.title}>
              <h2 className="border-b border-gold pb-3 font-heading text-lg text-ink">
                {c.title}
              </h2>
              <ul className="mt-1">
                {c.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-line py-3 text-sm text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
