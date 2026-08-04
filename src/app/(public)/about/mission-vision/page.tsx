import type { Metadata } from "next";
import { Band, Figure, PageHero, PlateHead, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Mission and Vision | The Grace Schools Chepilat",
  description:
    "The mission, vision, motto and seven core values of The Grace Schools, Chepilat.",
};

const values = [
  {
    letter: "V",
    label: "Valuing",
    body: "Staff, learners and parents are respected as essential members of the school community.",
  },
  {
    letter: "O",
    label: "Open",
    body: "We treat mistakes as opportunities to grow, inside a culture that includes everyone.",
  },
  {
    letter: "D",
    label: "Delivering",
    body: "One unified vision, communicated clearly across the whole school.",
  },
  {
    letter: "L",
    label: "Listening",
    body: "Every voice is heard. We encourage courteous, honest dialogue at every level.",
  },
  {
    letter: "I",
    label: "Improving",
    body: "We stay open to new practice and keep strengthening what already works.",
  },
  {
    letter: "P",
    label: "Partnering",
    body: "Collaborative teamwork is how we pursue excellence as an institution.",
  },
  {
    letter: "S",
    label: "Supporting",
    body: "Assistance and acknowledgement offered without judgement, across our community.",
  },
];

export default function MissionVisionPage() {
  return (
    <>
      <PageHero
        trail={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
        ]}
        title="Mission and vision"
      />

      <Section>
        <div className="mx-auto grid max-w-4xl gap-px bg-line sm:grid-cols-2">
          <div className="bg-card p-8">
            <p className="doc-label text-crimson">Our mission</p>
            <p className="mt-4 font-heading text-xl leading-relaxed text-ink">
              To promote a safe, orderly, caring, and supportive environment for
              learning.
            </p>
          </div>
          <div className="bg-card p-8">
            <p className="doc-label text-blue-accent">Our vision</p>
            <p className="mt-4 font-heading text-xl leading-relaxed text-ink">
              To develop well-rounded, confident, and responsible individuals who
              aspire to be change agents.
            </p>
          </div>
        </div>
      </Section>

      <Band>
        <p className="doc-label text-gold">Our motto</p>
        <p className="mt-5 font-heading text-3xl italic text-gold sm:text-4xl">
          A School with a Difference
        </p>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/85">
          This is not a tagline. It is a commitment to going past what is ordinary
          in pursuit of what is genuinely excellent.
        </p>
      </Band>

      <Section tone="surface">
        <PlateHead
          label="VODLIPS"
          title="Our core values"
          lede="Seven principles. Together they spell out what we owe every learner, parent and member of staff."
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <ul className="border-t border-line">
            {values.map((v) => (
              <li key={v.letter} className="flex gap-5 border-b border-line py-5">
                <span
                  aria-hidden
                  className="flex h-10 w-10 shrink-0 items-center justify-center bg-crimson
                             font-heading text-lg text-gold"
                >
                  {v.letter}
                </span>
                <span>
                  <span className="block font-heading text-lg text-ink">
                    {v.label}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-ink-soft">
                    {v.body}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Figure
        src="/student-photos/students-assembly.jpg"
        alt="Grace Schools learners lined up at a school assembly beside painted banners"
        caption="Values are practised at assembly every morning, where the whole school gathers to begin the day"
        className="aspect-[16/9] max-h-[440px] sm:aspect-[21/9]"
        sizes="100vw"
      />
    </>
  );
}
