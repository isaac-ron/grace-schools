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
  title: "Lower Primary | The Grace Schools Chepilat",
  description:
    "Lower Primary at The Grace Schools covers Grades 1 to 3: foundational literacy, numeracy and life skills under the CBE curriculum.",
};

const subjects = [
  "Literacy Activities",
  "English Language Activities",
  "Kiswahili Language Activities",
  "Mathematical Activities",
  "Environmental Activities",
  "Hygiene and Nutrition Activities",
  "Religious Education Activities",
  "Movement and Creative Activities",
  "Indigenous Language Activities",
];

export default function LowerPrimaryPage() {
  return (
    <>
      <PageHero
        trail={[
          { href: "/", label: "Home" },
          { href: "/curriculum", label: "Curriculum" },
        ]}
        title="Lower Primary"
        lede="Grades 1 to 3. The foundation of a child's schooling, built on exploration and discovery."
      />

      <Figure
        src="/student-photos/kindergarteners-studying.jpg"
        alt="Lower Primary learners in crimson uniforms working at their desks"
        className="aspect-[16/9] max-h-[480px] sm:aspect-[21/9]"
        priority
        sizes="100vw"
      />

      <Section>
        <Prose>
          <p className="text-lg text-ink">
            Lower Primary covers Grades 1, 2 and 3: the early years where children
            build foundational literacy, numeracy and the ability to work with
            other people.
          </p>

          <h2>Our approach</h2>
          <p>
            Learning in these years is experiential and child centred. Teachers
            work through hands on activities, storytelling, song and movement
            rather than lecturing. Assessment is continuous and formative, focused
            on growth rather than on ranking.
          </p>
          <p>
            Classrooms are inclusive spaces where each child&rsquo;s pace is
            respected. Confident readers and thinkers are made rather than born,
            and this is where that work starts.
          </p>

          <h2>Learning areas</h2>
        </Prose>

        <div className="mx-auto mt-6 max-w-[68ch]">
          <SubjectList items={subjects} />
        </div>

        <div className="mx-auto mt-12 max-w-[68ch]">
          <Note title="How Lower Primary is assessed">
            The CBE framework uses continuous formative assessment here, with no
            end of term examinations. Teachers observe and record progress through
            the term, and the feedback shapes what is taught next.
          </Note>
        </div>

        <div className="mx-auto mt-12 flex max-w-[68ch] flex-wrap gap-3 border-t border-line pt-8">
          <ButtonLink href="/curriculum/upper-primary">
            Upper Primary next
          </ButtonLink>
          <ButtonLink href="/apply" variant="secondary">
            Apply for admission
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
