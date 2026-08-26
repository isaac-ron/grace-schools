import type { Metadata } from "next";
import Link from "next/link";
import { Figure, PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Administration | The Grace Schools Chepilat",
  description:
    "The leadership team at The Grace Schools, Chepilat: Director, Administrator, Headteacher, Finance and ICT.",
};

const team = [
  {
    role: "Director",
    name: "Pst. Walter Ong'ala",
    note: "Strategic leadership and overall oversight of the school's mission and operations.",
  },
  {
    role: "Administrator",
    name: "Madam Jecinta Ogolo",
    note: "Co-founder. Day to day administration and community relations.",
  },
  {
    role: "Headteacher",
    name: "Mr. Harrison Ouso",
    note: "Academic delivery, staff management and discipline across all school levels.",
  },
  {
    role: "Finance",
    name: "Mr. Brian Ogwang",
    note: "School finances, fees and financial reporting, alongside administration.",
  },
  {
    role: "Information and Technology",
    name: "Mr. Anthony Moir",
    note: "ICT systems, the computer laboratory and digital learning infrastructure.",
  },
];

export default function AdministrationPage() {
  return (
    <>
      <PageHero
        trail={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
        ]}
        title="Administration"
        lede="Who runs the school, and who to ask for what."
      />

      <Figure
        src="/student-photos/director-addressing-grad.jpg"
        alt="Pst. Walter Ong'ala addressing learners and parents at the graduation ceremony"
        caption="The Director addressing the school community at the 2025 graduation"
        banner
        /* Centre cropped his face off at the eyes. He is standing, so his head
           sits high in the frame and the crop has to be pulled upwards. */
        focus="upper"
        priority
        sizes="100vw"
      />

      <Section>
        {/* A staff list is a record, so it is set as one: role, name, remit. */}
        <ul className="border-t border-line">
          {team.map((m) => (
            <li
              key={m.role}
              className="flex flex-col gap-2 border-b border-line py-6 sm:flex-row sm:gap-6"
            >
              <p className="doc-label shrink-0 pt-1 text-crimson sm:w-52">
                {m.role}
              </p>
              <div className="min-w-0">
                <p className="font-heading text-lg text-ink">{m.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  {m.note}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-ink-soft">
          For anything not covered here, please{" "}
          <Link
            href="/contact"
            className="font-semibold text-crimson underline underline-offset-4
                       hover:text-crimson-dark"
          >
            contact the office
          </Link>
          .
        </p>
      </Section>

      <Section tone="surface" className="px-0! py-0!">
        <div className="grid items-stretch md:grid-cols-2">
          <Figure
            src="/student-photos/staff-receiving-gifts.jpg"
            alt="Grace Schools staff being honoured by the school community"
            className="aspect-[4/3] md:aspect-auto md:min-h-[22rem]"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <div className="flex flex-col justify-center px-4 py-12 sm:px-10">
            <p className="doc-label text-blue-accent">Honouring our staff</p>
            <h2 className="mt-3 text-2xl text-ink">
              Behind every learner, a team that shows up
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Our teachers, support staff and administrators are the quiet engine of
              the school. Each year the community gathers to thank them for the
              patience and care they put into every classroom.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
