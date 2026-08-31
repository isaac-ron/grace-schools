import Image from "next/image";
import { SITE } from "@/lib/site";
import SchoolGallery from "@/components/SchoolGallery";
import {
  Band,
  ButtonLink,
  Figure,
  Icon,
  PlateHead,
  Row,
  Ruled,
  Section,
} from "@/components/ui";

/**
 * Home.
 *
 * The previous version ran the same block six times: a tracked uppercase eyebrow,
 * a centred heading, then a grid of identical icon cards. Crest replaces all of
 * it with ruled rows and photographs at full strength. Nothing on this page is a
 * card, and the only icons left are the ones that carry information.
 */

const schools = [
  {
    href: "/curriculum/lower-primary",
    marker: "1 to 3",
    title: "Lower Primary",
    body: "Foundational literacy, numeracy and life skills, taught through play and structured discovery.",
  },
  {
    href: "/curriculum/upper-primary",
    marker: "4 to 6",
    title: "Upper Primary",
    body: "Core and elective learning areas, building the analytical habits that Junior School assumes.",
  },
  {
    href: "/curriculum/junior-school",
    marker: "7 to 9",
    title: "Junior School",
    body: "Broad based learning and talent pathways, ending in the KJSEA and senior school placement.",
  },
];

const facilities = [
  {
    marker: "Studio",
    title: "Recording studio",
    body: "A fully equipped space for music, voice and performance, open to every learner rather than reserved for a club.",
  },
  {
    marker: "Lab",
    title: "Computer laboratory",
    body: "Hands on digital literacy from Grade 4, and the Computer Packages course that carries a certificate.",
  },
  {
    marker: "Boarding",
    title: "Boarding section",
    body: "Structured supervision, welfare and evening study for boarders, with day scholar places alongside.",
  },
  {
    marker: "Transport",
    title: "School transport",
    body: "Bus and van routes covering Chepilat and the surrounding region for day scholars.",
  },
  {
    marker: "Grounds",
    title: "Playing fields",
    body: "Space for football, athletics and physical education, and the sports days the whole town turns up for.",
  },
  {
    marker: "Staff",
    title: "TSC registered teachers",
    body: "Qualified educators who stay, so the teacher who taught a child in Grade 1 still knows them in Grade 9.",
  },
];

const highlights = [
  {
    date: "Class of 2025",
    title: "A jubilant graduation",
    body: "We sent our finalists off with song, dance and a great deal of gratitude, for every learner who walked the journey and every family who walked it with them.",
  },
  {
    date: "May 2026",
    title: "Student election",
    body: "Candidates campaigned, classmates voted, and the newly elected student leaders took office. Civic responsibility, practised rather than taught.",
  },
  {
    date: "Term 2, 2026",
    title: "Innovation showcase",
    body: "From costume design to creative arts projects, learners keep surprising us. Recent pieces are being curated for an upcoming showcase.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-crimson-deep px-4 py-20 text-center sm:px-6 sm:py-28">
        <div className="mx-auto max-w-3xl border border-gold/40 px-6 py-12 sm:px-10 sm:py-14">
          <Image
            src="/logo.jpg"
            alt="The Grace Schools crest"
            width={72}
            height={72}
            className="mx-auto"
            priority
          />
          <p className="doc-label mt-6 text-gold">
            Founded {SITE.founded}
          </p>
          <h1 className="mt-4 text-4xl text-white sm:text-5xl lg:text-6xl">
            {SITE.name}
          </h1>
          <p className="mt-4 font-heading text-xl italic text-gold sm:text-2xl">
            {SITE.motto}
          </p>
          <span aria-hidden className="mx-auto mt-8 block h-px w-16 bg-gold" />
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/85">
            A faith-based school running the national Competency Based Education
            curriculum from Pre-Primary through Grade 9, with a boarding section, a
            recording studio, and a computer lab that sends every Grade 9 leaver out
            with a certificate.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/apply" variant="gold">
              Apply for admission
            </ButtonLink>
            <ButtonLink href="/about/our-story" variant="onDark">
              Read our story
            </ButtonLink>
          </div>
        </div>
      </section>

      <Figure
        src="/student-photos/graduating-students-1.jpg"
        alt="Graduating learners in crimson and gold gowns seated at the 2025 ceremony"
        caption="The class of 2025, in the school's own colours"
        banner
        focus="midUpper"
        priority
        sizes="100vw"
      />

      {/* ── Welcome ──────────────────────────────────────────── */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl text-ink sm:text-4xl">
            Welcome to The Grace Schools
          </h2>
          <span aria-hidden className="mx-auto mt-6 block h-px w-16 bg-gold" />
          <p className="mt-8 text-base leading-relaxed text-ink-soft sm:text-lg">
            From a small beginning in July 2021, the school has grown into three
            stages of learning on one campus in Chepilat town. Rooted in our guiding
            principle of <em className="font-heading not-italic text-ink">God First</em>,
            we set out to build a place where character is taken as seriously as
            results, and where every learner is known by name.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/about/our-story" variant="secondary">
              Our story
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* ── The three schools ────────────────────────────────── */}
      <Section tone="surface">
        <PlateHead
          label="The three schools"
          title="One campus, three stages of learning"
          lede="Learners move through all three without changing school, which is why our teachers know a child's history as well as their current marks."
        />
        <div className="mt-12">
          <Ruled>
            {schools.map((s) => (
              <Row
                key={s.href}
                href={s.href}
                marker={s.marker}
                title={s.title}
                action="Explore"
              >
                {s.body}
              </Row>
            ))}
          </Ruled>
        </div>
      </Section>

      {/* ── School life ──────────────────────────────────────── */}
      <Section className="px-0! pb-0!">
        <div className="px-4 sm:px-6">
          <PlateHead
            title="A day at Grace Schools"
            lede="Classrooms, playing fields, the studio, and the ground between them."
          />
        </div>
        <div className="mt-12">
          <SchoolGallery />
        </div>
      </Section>

      {/* ── What sets us apart ───────────────────────────────── */}
      <Section tone="surface">
        <PlateHead
          title="What sets us apart"
          lede="Purpose built spaces and programmes that go past the standard classroom, because every learner deserves to find out what they are good at."
        />
        <div className="mt-12">
          <Ruled>
            {facilities.map((f) => (
              <Row key={f.title} marker={f.marker} title={f.title}>
                {f.body}
              </Row>
            ))}
          </Ruled>
        </div>

        {/* The single strongest differentiator, given its own plate. */}
        <div className="mt-12 border border-t-2 border-line border-t-gold bg-card p-6 sm:p-10">
          <p className="doc-label text-blue-accent">Free for our Grade 9 leavers</p>
          <h3 className="mt-3 text-2xl text-ink">
            Computer Packages training, with certification
          </h3>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
            An employer recognised Computer Packages course with flexible schedules,
            including weekends and evenings. It is free for every Grace Schools
            learner who completes Junior School, and open to the wider community at a
            modest fee.
          </p>
          <div className="mt-6">
            <ButtonLink href="/contact" variant="primary">
              Enquire about enrolment
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* ── Highlights ───────────────────────────────────────── */}
      <Section>
        <PlateHead
          label="Notice board"
          title="Recent news from the school"
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <Figure
            src="/student-photos/grad-party-dancing-1.jpg"
            alt="Learners and families dancing at the class of 2025 graduation celebration"
            caption="Graduation celebration, class of 2025"
            className="aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[24rem]"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <Ruled>
            {highlights.map((h) => (
              <Row key={h.title} marker={h.date} title={h.title}>
                {h.body}
              </Row>
            ))}
          </Ruled>
        </div>
      </Section>

      {/* ── Mission ──────────────────────────────────────────── */}
      <Band>
        <p className="font-heading text-2xl leading-relaxed text-white sm:text-3xl">
          To promote a safe, orderly, caring, and supportive environment for
          learning.
        </p>
        <p className="doc-label mt-6 text-gold">The school mission</p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/about/mission-vision" variant="onDark">
            Mission, vision and values
          </ButtonLink>
        </div>
      </Band>

      {/* ── Admissions ───────────────────────────────────────── */}
      <Section tone="surface">
        <div className="mx-auto max-w-2xl text-center">
          <p className="doc-label text-crimson">2027 admissions open</p>
          <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
            Begin your child&rsquo;s journey with us
          </h2>
          <span aria-hidden className="mx-auto mt-6 block h-px w-16 bg-gold" />
          <p className="mt-8 text-base leading-relaxed text-ink-soft sm:text-lg">
            We are accepting applications across all three schools. Come and see the
            place first if you would rather: visits are welcome on any school day.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/apply">Apply for admission</ButtonLink>
            <ButtonLink href="/enquiries" variant="secondary">
              Send an enquiry
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* ── Find us ──────────────────────────────────────────── */}
      <Section className="py-12!">
        <div className="flex flex-col items-start justify-between gap-6 border-t border-line pt-10 md:flex-row md:items-center">
          <div>
            <h2 className="font-heading text-lg text-ink">Find us in Chepilat</h2>
            <p className="mt-1 text-sm text-ink-soft">{SITE.address}</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={`tel:${SITE.phones[0].tel}`}
              className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold
                         text-crimson transition-colors hover:text-crimson-dark
                         focus-visible:outline-2 focus-visible:outline-offset-2
                         focus-visible:outline-crimson"
            >
              <Icon name="phone" className="h-4 w-4" />
              {SITE.phones[0].display}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex min-h-[44px] items-center gap-2 break-all text-sm
                         font-semibold text-crimson transition-colors hover:text-crimson-dark
                         focus-visible:outline-2 focus-visible:outline-offset-2
                         focus-visible:outline-crimson"
            >
              <Icon name="mail" className="h-4 w-4" />
              {SITE.email}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
