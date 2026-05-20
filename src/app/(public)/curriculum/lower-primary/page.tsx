import Link from "next/link";

const subjects = [
  "Literacy Activities",
  "Kiswahili Language Activities",
  "English Language Activities",
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
      <div className="bg-[var(--color-blue-accent)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-blue-200 mb-4 flex items-center gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <Link href="/curriculum" className="hover:text-white">Curriculum</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-white">Lower Primary</span>
          </nav>
          <span className="inline-block text-xs font-semibold bg-white/20 px-3 py-1 rounded-full mb-4">
            Grades 1 – 3
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Lower Primary
          </h1>
          <p className="mt-4 text-blue-100 max-w-2xl">
            The foundation of a child's academic journey, built on exploration, discovery, and joy.
          </p>
        </div>
      </div>

      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="h-1 w-16 bg-[var(--color-blue-accent)] rounded mb-10" />

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Lower Primary at The Grace Schools covers Grades 1, 2, and 3: the critical early years
            where children develop foundational literacy, numeracy, and interpersonal skills through
            active, play-based, and competency-focused learning.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Our Approach
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            In the lower primary years, learning is experiential and child-centred. Teachers guide
            learners through hands-on activities, storytelling, songs, movement, and creative play.
            Assessment is continuous and formative, focused on growth rather than high-stakes testing.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            Our classrooms are joyful, inclusive spaces where every child's pace and learning style is
            respected. We believe confident readers and thinkers are made, not born, and our Lower
            Primary programme is designed to build that confidence from day one.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Learning Areas (Grades 1 – 3)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {subjects.map((s) => (
              <div key={s} className="flex items-center gap-3 p-4 bg-[var(--color-cream)] rounded-xl">
                <span className="w-2 h-2 rounded-full bg-[var(--color-blue-accent)] flex-shrink-0" />
                <span className="text-sm text-gray-700">{s}</span>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-[var(--color-blue-accent)] rounded-2xl p-6 mb-10">
            <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Assessment in Lower Primary
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              The CBC framework uses continuous formative assessment (CFA) in Lower Primary, with no end-of-term
              exams. Teachers observe, document, and engage with each child's progress throughout the term,
              providing feedback that informs instruction and celebrates growth.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/curriculum/upper-primary"
              className="inline-flex items-center gap-2 bg-[var(--color-crimson)] hover:bg-[var(--color-crimson-dark)] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
            >
              Upper Primary
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 border border-gray-200 hover:border-[var(--color-crimson)] text-gray-700 hover:text-[var(--color-crimson)] text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
