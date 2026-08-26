import type { Metadata } from "next";
import {
  ButtonLink,
  Figure,
  PageHero,
  Prose,
  PullQuote,
  Section,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Story | The Grace Schools Chepilat",
  description:
    "The Grace Schools was founded on 27 July 2021 by Pastor Walter Ong'ala and Jecinta Ong'ala, during Kenya's pandemic school closures.",
};

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        trail={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
        ]}
        title="Our story"
      />

      <Figure
        src="/student-photos/staff-and-students-at-grad-ceremony.jpg"
        alt="Grace Schools staff and learners gathered for the 2025 graduation ceremony"
        caption="Staff and learners at the 2025 graduation ceremony"
        banner
        focus="midUpper"
        priority
        sizes="100vw"
      />

      <Section>
        <Prose>
          <p className="text-lg text-ink">
            The Grace Schools was established on <strong>27 July 2021</strong>,
            during a season of real uncertainty. Kenya&rsquo;s schools had been closed
            since March 2020. Out of that disruption,{" "}
            <strong>Pastor Walter Ong&rsquo;ala</strong> and{" "}
            <strong>Jecinta Ong&rsquo;ala</strong> set out to build a school in Chepilat
            that would serve the community, rooted in faith and serious about
            excellence.
          </p>

          <h2>A calling in a difficult season</h2>
          <p>
            While most of the country waited for things to return to normal, our
            founders chose to build something new instead. The conviction was
            simple: children in Chepilat deserved an education that placed{" "}
            <em>God First</em>, that took academics and character equally
            seriously, and that refused to settle for ordinary at a moment that
            asked for more.
          </p>

          <h2>From a small beginning</h2>
          <p>
            Each term since, more families have chosen to entrust their children to
            us, and each term we have tried to honour that trust with better
            teaching, better facilities and a deeper community.
          </p>
          <p>
            Today the school covers <strong>Pre-Primary</strong>,{" "}
            <strong>Lower Primary, Grades 1 to 3</strong>,{" "}
            <strong>Upper Primary, Grades 4 to 6</strong>, and{" "}
            <strong>Junior School, Grades 7 to 9</strong>, with day and boarding
            places serving families from Chepilat and the surrounding region.
          </p>

          <PullQuote attribution="Pst. Walter Ong'ala, Director">
            From humble beginnings, this school has grown to become a sanctuary of
            excellence, faith, and opportunity.
          </PullQuote>

          <h2>A school with a difference</h2>
          <p>
            We are a community of learners, teachers and families walking together.
            The Grace Schools remains committed to being a place where every child
            is known by name, valued for who they are, and equipped for what they
            can become.
          </p>
        </Prose>

        <div className="mx-auto mt-12 flex max-w-[68ch] flex-wrap gap-3 border-t border-line pt-8">
          <ButtonLink href="/about/mission-vision">Mission and vision</ButtonLink>
          <ButtonLink href="/about/administration" variant="secondary">
            Meet the team
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
