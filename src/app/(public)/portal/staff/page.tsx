import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import {
  ButtonLink,
  Icon,
  PageHero,
  Row,
  Ruled,
  Section,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Staff Portal | The Grace Schools Chepilat",
  description:
    "The Grace Schools staff portal: daily register, mark entry, assignments and school administration.",
};

const features = [
  {
    marker: "Register",
    title: "Daily register",
    body: "Everyone starts present and only the exceptions are tapped. A register marked with no signal is kept on the device and sent when the connection returns.",
  },
  {
    marker: "Marks",
    title: "Mark entry",
    body: "One class and one assessment at a time, usable on a phone. Achievement levels are computed from the raw mark, never typed in twice.",
  },
  {
    marker: "Work",
    title: "Assignments",
    body: "Set work, post materials, and grade the photographs learners send back from home.",
  },
  {
    marker: "Office",
    title: "Administration",
    body: "Learners, classes, staff accounts, terms, fee balances and the year-end promotion, with an audit log behind every change to a mark.",
  },
];

export default function StaffPortalPage() {
  return (
    <>
      <PageHero
        trail={[{ href: "/", label: "Home" }]}
        title="Staff Portal"
        lede="Where teachers take the register, enter marks and set work, and where the office runs the school record."
      />

      <Section>
        <div className="border border-t-2 border-line border-t-gold bg-surface p-6 sm:p-8">
          <h2 className="font-heading text-xl text-ink">Access is issued by the office</h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft">
            Staff accounts are created by administration with a temporary password
            you change on first sign in. If you have not been given one, or you have
            been locked out, speak to the office rather than trying to register.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Contact the office</ButtonLink>
            <a
              href={`tel:${SITE.phones[0].tel}`}
              className="inline-flex min-h-[44px] items-center justify-center gap-2
                         rounded-md border border-line-strong px-6 text-sm font-semibold
                         text-ink transition-colors duration-200 hover:bg-card
                         focus-visible:outline-2 focus-visible:outline-offset-2
                         focus-visible:outline-crimson"
            >
              <Icon name="phone" className="h-4 w-4" />
              {SITE.phones[0].display}
            </a>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-2xl text-ink sm:text-3xl">What staff can do</h2>
          <div className="mt-8">
            <Ruled>
              {features.map((f) => (
                <Row key={f.marker} marker={f.marker} title={f.title}>
                  {f.body}
                </Row>
              ))}
            </Ruled>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl text-ink">Who can see what</h2>
          <span aria-hidden className="mx-auto mt-6 block h-px w-16 bg-gold" />
          <p className="mt-8 text-base leading-relaxed text-ink-soft">
            A teacher sees the classes they are assigned to and nothing else. A
            parent sees their own children and nothing else. Results stay in draft
            and are invisible to parents until the Headteacher releases them for the
            term. Those limits are enforced by the database itself, not by hiding
            buttons.
          </p>
        </div>
      </Section>
    </>
  );
}
