import Link from "next/link";
import { SITE } from "@/lib/site";

const features = [
  {
    icon: "auto_stories",
    title: "Termly Reports",
    body: "View your child's termly academic reports, subject scores, and teacher comments in one place.",
  },
  {
    icon: "task_alt",
    title: "Assessment Marks",
    body: "Track continuous assessment results and progress across the CBC competencies as the term unfolds.",
  },
  {
    icon: "receipt_long",
    title: "Fee Statements",
    body: "Check fee balances, view payment history, and receive SMS reminders for upcoming dues.",
  },
  {
    icon: "calendar_month",
    title: "School Calendar",
    body: "Stay updated on term dates, exam timetables, events, and important parent notices.",
  },
];

export default function StudentPortalPage() {
  return (
    <>
      <div className="bg-[var(--color-crimson)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-red-300 mb-4 flex items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-white">Student Portal</span>
          </nav>
          <span className="inline-block text-xs font-semibold bg-[var(--color-gold)] text-[var(--color-crimson-dark)] px-3 py-1 rounded-full mb-4">
            Coming Soon
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Student & Parent Portal
          </h1>
          <p className="mt-4 text-red-100 max-w-xl">
            A secure space for parents and learners to follow progress, view reports, and stay in
            touch with the school, anytime, from anywhere.
          </p>
        </div>
      </div>

      <section className="py-16 bg-[var(--color-surface)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Coming-soon notice */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-12 flex flex-col sm:flex-row items-start gap-5 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[var(--color-crimson)] text-[24px]">construction</span>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                The new portal is on the way
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We are building a redesigned portal where parents and learners can self-register and
                track academic progress and fee balances. In the meantime, please reach out to the
                school office for any reports, statements, or account information.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold bg-[var(--color-crimson)] hover:bg-[var(--color-crimson-dark)] text-white px-5 py-2 rounded-full transition-colors"
                >
                  Contact the School
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
                <a
                  href={`tel:${SITE.phones[0].tel}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold border border-slate-200 hover:border-[var(--color-crimson)] text-gray-700 hover:text-[var(--color-crimson)] px-5 py-2 rounded-full transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">phone</span>
                  {SITE.phones[0].display}
                </a>
              </div>
            </div>
          </div>

          {/* What you'll be able to do */}
          <div className="mb-8">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-crimson)] mb-2">
              What you'll be able to do
            </span>
            <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "var(--font-heading)" }}>
              Built around how families actually use it
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div key={f.title} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[var(--color-crimson)] text-[20px]">{f.icon}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  {f.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>

          {/* Sign-in placeholder */}
          <div className="mt-12 bg-[var(--color-crimson)] rounded-2xl p-8 text-center text-white">
            <span className="material-symbols-outlined text-[var(--color-gold-light)] text-[32px] block mb-3">lock</span>
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Sign-in launching soon
            </h3>
            <p className="text-red-100 text-sm max-w-md mx-auto mb-6">
              Parents will be able to self-register using the phone number or email they provided at
              admission. We will notify you the moment it goes live.
            </p>
            <button
              disabled
              className="inline-flex items-center gap-2 bg-white/20 text-white/70 font-semibold px-6 py-2.5 rounded-full text-sm cursor-not-allowed"
            >
              <span className="material-symbols-outlined text-[18px]">login</span>
              Sign In (Disabled)
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
