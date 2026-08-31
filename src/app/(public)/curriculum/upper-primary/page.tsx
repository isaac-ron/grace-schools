import type { Metadata } from "next";
import {
  ButtonLink,
  Figure,
  Note,
  PageHero,
  Prose,
  Section,
  SubjectList,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Upper Primary | The Grace Schools Chepilat",
  description:
    "Upper Primary at The Grace Schools covers Grades 4 to 6: core and elective learning areas under the CBE curriculum.",
};

const coreSubjects = [
  "English",
  "Kiswahili",
  "Mathematics",
  "Integrated Science",
  "Social Studies",
  "Religious Education",
  "Creative Arts and Sports",
  "Agriculture and Nutrition",
];

const electiveSubjects = [
  "Home Science",
  "Art and Craft",
  "Music",
  "Business Studies",
  "Computer Science",
];

export default function UpperPrimaryPage() {
  return (
    <>
      <PageHero
        trail={[
          { href: "/", label: "Home" },
          { href: "/curriculum", label: "Curriculum" },
        ]}
        title="Upper Primary"
        lede="Grades 4 to 6. Depth across core and elective learning areas, and the habit of working things out."
      />

      <Figure
        src="/student-photos/students-class-activity-1.jpg"
        alt="Upper Primary learners presenting project work to their class"
        banner
        priority
        sizes="100vw"
      />

      <Section>
        <Prose>
          <p className="text-lg text-ink">
            Upper Primary covers Grades 4, 5 and 6. The activity based learning of
            the early years gives way to distinct learning areas, and learners
            start to take responsibility for their own work.
          </p>

          <h2>Our approach</h2>
          <p>
            Teaching moves from broad activities to subject discipline, while
            keeping the practical, competency based method that CBE is built on.
            Learners investigate, present and defend their reasoning rather than
            reciting it.
          </p>
          <p>
            This is also where electives begin, so a child who is drawn to music,
            business or computing can follow it while the core stays broad.
          </p>

          <h2>Core learning areas</h2>
        </Prose>

        <div className="mx-auto mt-6 max-w-[68ch]">
          <SubjectList items={coreSubjects} />
        </div>

        <div className="mx-auto mt-12 max-w-[68ch]">
          <h2 className="mb-6 text-2xl text-ink">Electives</h2>
          <SubjectList items={electiveSubjects} />
        </div>

        <div className="mx-auto mt-12 max-w-[68ch]">
          <Note title="How Upper Primary is assessed">
            Marks are recorded as percentages and reported against the four national
            achievement levels: Exceeding, Meeting, Approaching and Below
            Expectation.
          </Note>
        </div>

        <div className="mx-auto mt-12 flex max-w-[68ch] flex-wrap gap-3 border-t border-line pt-8">
          <ButtonLink href="/curriculum/junior-school">
            Junior School next
          </ButtonLink>
          <ButtonLink href="/curriculum/lower-primary" variant="secondary">
            Back to Lower Primary
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
