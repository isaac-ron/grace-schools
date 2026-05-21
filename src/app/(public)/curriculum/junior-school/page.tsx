import Link from "next/link";

const coreSubjects = [
  "English",
  "Kiswahili",
  "Mathematics",
  "Integrated Science",
  "Social Studies",
  "Pre-Technical & Pre-Career Education",
  "Creative Arts",
  "Sports & Physical Education",
  "Religious Education (CRE / IRE)",
];

const pathways = [
  { icon: "biotech", title: "STEM Pathway", body: "Science, Technology, Engineering and Mathematics, for learners with analytical and technical aptitude." },
  { icon: "palette", title: "Arts & Sports", body: "Creative arts, performing arts, and physical education for the creatively and athletically gifted." },
  { icon: "business_center", title: "Social Sciences", body: "Humanities, languages, and social sciences for learners with communication and leadership strengths." },
];

export default function JuniorSchoolPage() {
  return (
    <>
      <div
        className="text-white py-16"
        style={{ background: "linear-gradient(135deg, #D4A017 0%, #A07810 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-amber-200 mb-4 flex items-center gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <Link href="/curriculum" className="hover:text-white">Curriculum</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-white">Junior Secondary</span>
          </nav>
          <span className="inline-block text-xs font-semibold bg-white/20 px-3 py-1 rounded-full mb-4">
            Grades 7 – 9
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Junior Secondary
          </h1>
          <p className="mt-4 text-amber-100 max-w-2xl">
            Broad-based, talent-nurturing learning that prepares learners for Senior Secondary and life.
          </p>
        </div>
      </div>

      {/* Hero image */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12 relative z-10">
          <figure className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 aspect-[16/9] bg-[var(--color-surface-dark)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/student-photos/graduating-students-1.jpg"
              alt="Grace Schools learners at the close of their junior secondary journey"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
      </div>

      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="h-1 w-16 bg-[var(--color-gold)] rounded mb-10" />

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Junior Secondary (Grades 7, 8, and 9) marks a significant transition in the CBC journey.
            Formerly integrated into primary schools, Junior Secondary is now a distinct phase that
            bridges primary learning and the specialised pathways of Senior Secondary.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            A Broad and Balanced Programme
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            All Junior Secondary learners study a broad core curriculum across language, science,
            mathematics, social studies, and creative arts. This breadth is intentional, ensuring
            no doors are closed before learners have had the opportunity to discover where their
            strengths truly lie.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            Alongside the core curriculum, learners begin to identify their interest pathways in
            preparation for the specialised tracks offered in Senior Secondary.
          </p>

          {/* Subjects */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Core Learning Areas (Grades 7 – 9)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
            {coreSubjects.map((s) => (
              <div key={s} className="flex items-center gap-3 p-4 bg-[var(--color-cream)] rounded-xl">
                <span className="w-2 h-2 rounded-full bg-[var(--color-gold)] flex-shrink-0" />
                <span className="text-sm text-gray-700">{s}</span>
              </div>
            ))}
          </div>

          {/* Pathways */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Interest Pathways
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {pathways.map((p) => (
              <div key={p.title} className="p-6 rounded-2xl bg-amber-50 border border-amber-100">
                <span className="material-symbols-outlined text-[var(--color-gold)] text-[28px] mb-3 block">{p.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-heading)" }}>{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/curriculum/upper-primary"
              className="inline-flex items-center gap-2 border border-gray-200 hover:border-[var(--color-crimson)] text-gray-700 hover:text-[var(--color-crimson)] text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              Upper Primary
            </Link>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 bg-[var(--color-crimson)] hover:bg-[var(--color-crimson-dark)] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
            >
              Apply Now
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
