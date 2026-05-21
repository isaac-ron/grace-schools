import Link from "next/link";

const values = [
  { letter: "V", icon: "favorite", label: "Valuing", body: "Staff, learners, and parents are respected and valued as essential members of the school community." },
  { letter: "O", icon: "psychology_alt", label: "Open", body: "We embrace risk-taking and treat mistakes as opportunities for growth, within an inclusive culture." },
  { letter: "D", icon: "campaign", label: "Delivering", body: "We hold one unified vision and communicate it clearly across the entire school." },
  { letter: "L", icon: "hearing", label: "Listening", body: "Every voice is heard. We encourage courteous, honest dialogue at every level." },
  { letter: "I", icon: "trending_up", label: "Improving", body: "We stay open to innovation and continuously strengthen the practices that already work well." },
  { letter: "P", icon: "handshake", label: "Partnering", body: "Collaborative teamwork is how we pursue shared institutional excellence." },
  { letter: "S", icon: "support", label: "Supporting", body: "We offer non-judgemental assistance and acknowledgement across our community." },
];

export default function MissionVisionPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-[var(--color-crimson)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-red-300 mb-4 flex items-center gap-1 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <Link href="/about" className="hover:text-white">About</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-white">Mission & Vision</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Mission, Vision & Motto
          </h1>
        </div>
      </div>

      {/* Mission / Vision / Motto cards */}
      <section className="py-16 bg-[var(--color-surface)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="p-8 bg-white rounded-2xl border-t-4 border-[var(--color-crimson)] shadow-sm">
            <span className="material-symbols-outlined text-[var(--color-crimson)] text-[28px] mb-4 block">flag</span>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Our Mission
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              To promote a safe, orderly, caring, and supportive environment for learning.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl border-t-4 border-[var(--color-gold)] shadow-sm">
            <span className="material-symbols-outlined text-[var(--color-gold)] text-[28px] mb-4 block">visibility</span>
            <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Our Vision
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              To develop well-rounded, confident, and responsible individuals who aspire to be change agents.
            </p>
          </div>

          <div className="p-8 bg-[var(--color-crimson)] rounded-2xl shadow-sm text-white">
            <span className="material-symbols-outlined text-[var(--color-gold-light)] text-[28px] mb-4 block">format_quote</span>
            <h2 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Our Motto
            </h2>
            <p className="text-2xl italic text-[var(--color-gold-light)]" style={{ fontFamily: "var(--font-heading)" }}>
              "A School with a Difference"
            </p>
            <p className="text-red-200 text-sm leading-relaxed mt-4">
              This is not a tagline. It is a promise. A commitment to going beyond what is ordinary
              in pursuit of what is truly excellent.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-crimson)] mb-3">
              What We Stand On
            </span>
            <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "var(--font-heading)" }}>
              Our Core Values
            </h2>
            <p className="mt-3 text-sm text-gray-500 max-w-xl mx-auto">
              Seven principles. Together they spell our commitment to every learner, parent, and member of staff.
            </p>
          </div>

          {/* VODLIPS acronym strip */}
          <div className="flex justify-center gap-2 sm:gap-3 mb-10 flex-wrap">
            {values.map((v) => (
              <span
                key={v.letter}
                className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[var(--color-crimson)] text-[var(--color-gold-light)] font-bold rounded-lg text-lg sm:text-xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {v.letter}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.label} className="p-6 rounded-2xl bg-[var(--color-surface)] border border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-[var(--color-crimson)] text-[var(--color-gold-light)] font-bold rounded text-sm" style={{ fontFamily: "var(--font-heading)" }}>
                    {v.letter}
                  </span>
                  <h3 className="font-bold text-gray-900 text-lg" style={{ fontFamily: "var(--font-heading)" }}>{v.label}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>

          {/* Values in action — assembly banner */}
          <figure className="mt-12 relative rounded-2xl overflow-hidden aspect-[21/9] bg-[var(--color-crimson-dark)] shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/student-photos/students-assembly.jpg"
              alt="Grace Schools learners gathered together at an assembly"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-crimson-dark)]/85 via-[var(--color-crimson-dark)]/30 to-transparent" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white">
              <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[var(--color-gold-light)] mb-2">
                <span className="w-6 h-px bg-[var(--color-gold-light)]" />
                Lived, Not Listed
              </span>
              <p className="text-base sm:text-lg max-w-2xl text-red-100" style={{ fontFamily: "var(--font-heading)" }}>
                Our values come to life every morning at assembly, where the whole school gathers as
                one community to begin the day.
              </p>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
