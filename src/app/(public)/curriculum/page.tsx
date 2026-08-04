import type { Metadata } from "next";
import { ButtonLink, PageHero, PlateHead, Row, Ruled, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Curriculum | The Grace Schools Chepilat",
  description:
    "The Grace Schools runs Kenya's national Competency Based Education curriculum from Pre-Primary through Grade 9.",
};

const levels = [
  {
    href: "/curriculum/lower-primary",
    marker: "1 to 3",
    title: "Lower Primary",
    body: "Foundational learning through play, exploration and competency based activities.",
  },
  {
    href: "/curriculum/upper-primary",
    marker: "4 to 6",
    title: "Upper Primary",
    body: "Depth across core and elective learning areas, with increasing analytical rigour.",
  },
  {
    href: "/curriculum/junior-school",
    marker: "7 to 9",
    title: "Junior School",
    body: "Broad based learning with talent pathways, preparing learners for senior school.",
  },
];

const journey = [
  { stage: "Pre-Primary", grades: "PP1 and PP2", here: true },
  { stage: "Lower Primary", grades: "Grades 1 to 3", here: true },
  { stage: "Upper Primary", grades: "Grades 4 to 6", here: true },
  { stage: "Junior School", grades: "Grades 7 to 9", here: true },
  { stage: "Senior School", grades: "Grades 10 to 12", here: false },
];

export default function CurriculumPage() {
  return (
    <>
      <PageHero
        trail={[{ href: "/", label: "Home" }]}
        title="Curriculum"
        lede="We run the national Competency Based Education curriculum set by the Kenya Institute of Curriculum Development, from Pre-Primary through Grade 9."
      />

      <Section>
        <Ruled>
          {levels.map((l) => (
            <Row
              key={l.href}
              href={l.href}
              marker={l.marker}
              title={l.title}
              action="Learn more"
            >
              {l.body}
            </Row>
          ))}
        </Ruled>
      </Section>

      <Section tone="surface">
        <PlateHead
          title="What Competency Based Education means"
          lede="CBE replaced the 8-4-4 system, moving the emphasis from what a learner can recall to what a learner can do: skills, values and applied knowledge."
        />

        <div className="mx-auto mt-12 max-w-2xl">
          <p className="doc-label mb-4 text-blue-accent">The full journey</p>
          <ul className="border-t border-line">
            {journey.map((j) => (
              <li
                key={j.stage}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1
                           border-b border-line py-4"
              >
                <span className="font-heading text-base text-ink">{j.stage}</span>
                <span className="text-sm text-ink-soft">{j.grades}</span>
                <span
                  className={`doc-label ${j.here ? "text-crimson" : "text-ink-muted"}`}
                >
                  {j.here ? "Offered here" : "Elsewhere"}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-ink-soft">
            Grace Schools covers everything up to Grade 9. Learners then sit the
            KJSEA and move on to senior school placement.
          </p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl text-ink sm:text-3xl">
            Wondering which stage your child joins?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Call the office and we will place them by age and prior schooling, or
            come and see the classrooms first.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/apply">Apply for admission</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact the office
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
