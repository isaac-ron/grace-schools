import type { Metadata } from "next";
import { PageHero, Row, Ruled, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "About | The Grace Schools Chepilat",
  description:
    "The Grace Schools Chepilat: our founding, our mission and values, and the leadership team running the school.",
};

const sections = [
  {
    href: "/about/our-story",
    marker: "2021",
    title: "Our story",
    body: "How the school came to be, from a small start in July 2021 to three stages of learning on one campus.",
  },
  {
    href: "/about/mission-vision",
    marker: "Values",
    title: "Mission, vision and motto",
    body: "The convictions behind the decisions: what we are trying to build, and the seven values we hold ourselves to.",
  },
  {
    href: "/about/administration",
    marker: "People",
    title: "Administration",
    body: "The leadership team running the school day to day, and who to ask for what.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        trail={[{ href: "/", label: "Home" }]}
        title="About"
        lede="A faith-based school in Chepilat, Kenya, where character formation is taken as seriously as results."
      />

      <Section>
        <Ruled>
          {sections.map((s) => (
            <Row
              key={s.href}
              href={s.href}
              marker={s.marker}
              title={s.title}
              action="Read more"
            >
              {s.body}
            </Row>
          ))}
        </Ruled>
      </Section>
    </>
  );
}
