import Link from "next/link";

const levels = [
  {
    href: "/curriculum/lower-primary",
    badge: "Grades 1 – 3",
    title: "Lower Primary",
    body: "Foundational learning through play, exploration, and competency-based activities.",
    badgeClass: "bg-[var(--color-blue-accent)] text-white",
  },
  {
    href: "/curriculum/upper-primary",
    badge: "Grades 4 – 6",
    title: "Upper Primary",
    body: "Building depth across core and elective subjects with increasing analytical rigour.",
    badgeClass: "bg-[var(--color-crimson)] text-white",
  },
  {
    href: "/curriculum/junior-school",
    badge: "Grades 7 – 9",
    title: "Junior Secondary",
    body: "Broad-based learning with talent pathways preparing learners for Senior Secondary.",
    badgeClass: "bg-[var(--color-gold)] text-[var(--color-crimson-dark)]",
  },
];

export default function CurriculumPage() {
  return (
    <>
      <div className="bg-[var(--color-crimson)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-red-300 mb-4 flex items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-white">Curriculum</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            CBC Curriculum
          </h1>
          <p className="mt-4 text-red-100 max-w-2xl">
            The Grace Schools delivers the Competency Based Curriculum (CBC) as designed by the
            Kenya Institute of Curriculum Development (KICD). It is a holistic, learner-centred framework
            that focuses on values, skills, and applied knowledge.
          </p>
        </div>
      </div>

      <section className="py-16 bg-[var(--color-cream)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {levels.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group flex flex-col p-8 bg-white rounded-2xl border border-gray-100 hover:border-[var(--color-crimson)] hover:shadow-md transition-all"
              >
                <span className={`self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 ${l.badgeClass}`}>
                  {l.badge}
                </span>
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--color-crimson)] transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                  {l.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{l.body}</p>
                <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-[var(--color-crimson)]">
                  Learn more
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>

          {/* CBC explainer */}
          <div className="mt-12 p-8 bg-white rounded-2xl border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              What is CBC?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Competency Based Curriculum replaced Kenya's 8-4-4 system, shifting focus from
              knowledge retention to the development of competencies: skills, values, and attitudes
              that prepare learners for real-life challenges. The CBC journey spans:
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "Early Years Education (Pre-Primary 1 & 2)",
                "Lower Primary (Grades 1, 2, 3)",
                "Upper Primary (Grades 4, 5, 6)",
                "Junior Secondary (Grades 7, 8, 9)",
                "Senior Secondary (Grades 10, 11, 12)",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-crimson)] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              The Grace Schools currently offers Lower Primary through Junior Secondary.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
