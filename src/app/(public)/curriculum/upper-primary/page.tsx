import Link from "next/link";

const coreSubjects = [
  "English",
  "Kiswahili",
  "Mathematics",
  "Integrated Science",
  "Social Studies",
  "Religious Education (CRE / IRE)",
  "Creative Arts & Sports",
  "Agriculture & Nutrition",
];

const electiveSubjects = [
  "Home Science",
  "Art & Craft",
  "Music",
  "Business Studies",
  "Computer Science",
  "German / French / Mandarin (Languages)",
];

export default function UpperPrimaryPage() {
  return (
    <>
      <div className="bg-[var(--color-crimson)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-red-300 mb-4 flex items-center gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <Link href="/curriculum" className="hover:text-white">Curriculum</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-white">Upper Primary</span>
          </nav>
          <span className="inline-block text-xs font-semibold bg-white/20 px-3 py-1 rounded-full mb-4">
            Grades 4 – 6
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Upper Primary
          </h1>
          <p className="mt-4 text-red-100 max-w-2xl">
            Deepening knowledge, building identity, and discovering individual strengths.
          </p>
        </div>
      </div>

      {/* Hero image */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12 relative z-10">
          <figure className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 aspect-[16/9] bg-[var(--color-surface-dark)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/student-photos/two-students-portrait.jpg"
              alt="Two upper primary learners at Grace Schools"
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
      </div>

      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="h-1 w-16 bg-[var(--color-crimson)] rounded mb-10" />

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Upper Primary (Grades 4, 5, and 6) builds on the strong foundation of Lower Primary by
            introducing a broader range of subjects and encouraging learners to begin identifying
            their interests, talents, and learning pathways within the CBC framework.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Our Approach
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Teaching in Upper Primary moves towards more structured subject delivery while maintaining
            the learner-centred philosophy of CBC. Learners engage with projects, presentations, and
            collaborative tasks that develop critical thinking, communication, and problem-solving skills.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10">
            Assessment combines continuous formative assessment with summative assessments at the end
            of each term, helping learners and parents track progress in a meaningful way.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-5" style={{ fontFamily: "var(--font-heading)" }}>
                Core Subjects
              </h2>
              <div className="space-y-2">
                {coreSubjects.map((s) => (
                  <div key={s} className="flex items-center gap-3 p-3 bg-[var(--color-cream)] rounded-lg">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-crimson)] flex-shrink-0" />
                    <span className="text-sm text-gray-700">{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-5" style={{ fontFamily: "var(--font-heading)" }}>
                Elective / Optional Subjects
              </h2>
              <div className="space-y-2">
                {electiveSubjects.map((s) => (
                  <div key={s} className="flex items-center gap-3 p-3 bg-[var(--color-cream)] rounded-lg">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-gold)] flex-shrink-0" />
                    <span className="text-sm text-gray-700">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/curriculum/lower-primary"
              className="inline-flex items-center gap-2 border border-gray-200 hover:border-[var(--color-crimson)] text-gray-700 hover:text-[var(--color-crimson)] text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              Lower Primary
            </Link>
            <Link
              href="/curriculum/junior-school"
              className="inline-flex items-center gap-2 bg-[var(--color-crimson)] hover:bg-[var(--color-crimson-dark)] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
            >
              Junior Secondary
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
