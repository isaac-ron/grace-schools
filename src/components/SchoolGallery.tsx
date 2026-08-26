import { Figure } from "@/components/ui";

/**
 * School life, shown rather than described.
 *
 * This replaced an auto-advancing carousel. Three reasons: it moved on a 5.5
 * second timer with no way to pause it on a touch device, which fails WCAG
 * 2.2.2; it showed one photograph at a time when the school's archive is the
 * most persuasive thing on the site; and it shipped a client component to do it.
 * This is a server component with no JavaScript at all.
 */

const lead = {
  src: "/student-photos/students-outside-learning.jpg",
  alt: "A teacher in a Grace Schools coat leading her class through the grass on the school grounds",
  caption: "Learning outdoors on the school grounds, Term 2",
};

const strip = [
  {
    src: "/student-photos/students-in-recording-studio.jpg",
    alt: "Learners at work in the school recording studio, with a drum kit beside them",
    caption: "The recording studio",
  },
  {
    src: "/student-photos/kindergarteners-studying.jpg",
    alt: "Pre-Primary learners in crimson uniforms working at their desks",
    caption: "Pre-Primary at work",
  },
  {
    src: "/student-photos/students-athleticism-showcase.jpg",
    alt: "Grace Schools learners taking part in an athletics showcase",
    caption: "Sports day",
  },
];

export default function SchoolGallery() {
  return (
    <div className="flex flex-col gap-px bg-line">
      <Figure
        src={lead.src}
        alt={lead.alt}
        caption={lead.caption}
        banner
        sizes="100vw"
      />
      <div className="grid gap-px bg-line sm:grid-cols-3">
        {strip.map((s) => (
          <Figure
            key={s.src}
            src={s.src}
            alt={s.alt}
            caption={s.caption}
            className="aspect-[4/3]"
            sizes="(min-width: 640px) 33vw, 100vw"
          />
        ))}
      </div>
    </div>
  );
}
