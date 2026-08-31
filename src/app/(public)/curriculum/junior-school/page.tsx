import type { Metadata } from "next";
import {
  ButtonLink,
  Figure,
  Note,
  PageHero,
  Prose,
  Row,
  Ruled,
  Section,
  SubjectList,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Junior School | The Grace Schools Chepilat",
  description:
    "Junior School at The Grace Schools covers Grades 7 to 9, ending in the KJSEA and senior school placement.",
};

const coreSubjects = [
  "English",
  "Kiswahili",
  "Mathematics",
  "Integrated Science",
  "Social Studies",
  "Pre-Technical and Pre-Career Education",
  "Creative Arts",
  "Sports and Physical Education",
  "Religious Education",
];

const pathways = [
  {
    marker: "STEM",
    title: "Science and technology",
    body: "Science, technology, engineering and mathematics, for learners with analytical and technical aptitude.",
  },
  {
    marker: "Arts",
    title: "Arts and sports",
    body: "Creative arts, performing arts and physical education, for the creatively and athletically gifted.",
  },
  {
    marker: "Social",
    title: "Social sciences",
    body: "Humanities, languages and social sciences, for learners with communication and leadership strengths.",
  },
];

export default function JuniorSchoolPage() {
  return (
    <>
      <PageHero
        trail={[
          { href: "/", label: "Home" },
          { href: "/curriculum", label: "Curriculum" },
        ]}
        title="Junior School"
        lede="Grades 7 to 9. Broad based learning and talent pathways, ending in the KJSEA and senior school placement."
      />

      <Figure
        src="/student-photos/graduating-students-1.jpg"
        alt="Grace Schools learners in crimson and gold gowns at the close of their Junior School journey"
        banner
        focus="midUpper"
        priority
        sizes="100vw"
      />

      <Section>
        <Prose>
          <p className="text-lg text-ink">
            Junior School covers Grades 7, 8 and 9. It is a distinct phase that
            bridges primary learning and the specialised pathways of senior school,
            and it ends with the Kenya Junior School Education Assessment.
          </p>

          <h2>A broad and balanced programme</h2>
          <p>
            Every learner studies a broad core across language, science,
            mathematics, social studies and creative arts. That breadth is
            deliberate: no doors close before a learner has had the chance to find
            out where their strengths actually are.
          </p>
          <p>
            Alongside the core, learners start to identify the interest pathway they
            will follow into senior school.
          </p>

          <h2>Core learning areas</h2>
        </Prose>

        <div className="mx-auto mt-6 max-w-[68ch]">
          <SubjectList items={coreSubjects} />
        </div>
      </Section>

      <Section tone="surface">
        <h2 className="mb-8 text-2xl text-ink sm:text-3xl">Interest pathways</h2>
        <Ruled>
          {pathways.map((p) => (
            <Row key={p.marker} marker={p.marker} title={p.title}>
              {p.body}
            </Row>
          ))}
        </Ruled>

        <div className="mt-12">
          <Note title="How Junior School is assessed">
            Grades 7 to 9 use the eight point national achievement scale, from EE1
            at the top to BE2 at the bottom, reported per learning area with the
            teacher&rsquo;s comment. Results are released by the Headteacher once
            every subject is entered and checked.
          </Note>
        </div>

        <div className="mt-12 flex flex-wrap gap-3 border-t border-line pt-8">
          <ButtonLink href="/apply">Apply for admission</ButtonLink>
          <ButtonLink href="/curriculum/upper-primary" variant="secondary">
            Back to Upper Primary
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
