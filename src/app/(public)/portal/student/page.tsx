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
  title: "Parent and Student Portal | The Grace Schools Chepilat",
  description:
    "The Grace Schools parent portal: report cards, attendance, assignments and fee balances. Accounts are issued by the school office.",
};

const features = [
  {
    marker: "Results",
    title: "Termly report cards",
    body: "Achievement levels per learning area with the teacher's comment, published once the Headteacher releases the term's results.",
  },
  {
    marker: "Attendance",
    title: "Daily attendance",
    body: "The day by day record and the termly rate, taken by the class teacher each morning.",
  },
  {
    marker: "Work",
    title: "Assignments and materials",
    body: "What has been set, what is due, and a way to send a photograph of completed work back to the teacher.",
  },
  {
    marker: "Fees",
    title: "Fee balance",
    body: "The balance the bursar holds, shown with the date it was last updated so a stale figure is never mistaken for a live one.",
  },
];

export default function StudentPortalPage() {
  return (
    <>
      <PageHero
        trail={[{ href: "/", label: "Home" }]}
        title="Parent and Student Portal"
        lede="A private record of your child's progress: results, attendance, assignments and fees."
      />

      <Section>
        {/* Honest about state. The portal is real and partly built, so this says
            what works today rather than promising a launch date. */}
        <div className="border border-t-2 border-line border-t-gold bg-surface p-6 sm:p-8">
          <h2 className="font-heading text-xl text-ink">
            The portal is still being built
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft">
            Attendance and the school register are working. Report cards and
            assignments are in progress. Until it opens, the office will give you
            anything you need: reports, statements or account details.
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
          <h2 className="text-2xl text-ink sm:text-3xl">What it will show you</h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft">
            Built around one question a parent actually asks: how is my child doing,
            and is there anything I need to do about it.
          </p>
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
          <h2 className="text-2xl text-ink">How accounts are issued</h2>
          <span aria-hidden className="mx-auto mt-6 block h-px w-16 bg-gold" />
          {/* PORTAL_SCOPE.md §3: there is deliberately no self-registration.
              Anyone could otherwise claim to be a parent of any child. */}
          <p className="mt-8 text-base leading-relaxed text-ink-soft">
            There is no sign-up form, and that is deliberate. Anyone could fill one
            in and claim to be a parent of any child. Instead the office creates
            your account against your child&rsquo;s record and gives you a first
            login, so only a guardian the school already knows can see a
            learner&rsquo;s results.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            One account covers the whole family, with a switcher for each child.
          </p>
        </div>
      </Section>
    </>
  );
}
