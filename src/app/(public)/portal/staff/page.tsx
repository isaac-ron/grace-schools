import Link from "next/link";
import { SITE } from "@/lib/site";

const features = [
  {
    icon: "grading",
    title: "Enter Marks & Reports",
    body: "Teachers record termly grades, assessment scores, and competency comments for their classes.",
  },
  {
    icon: "groups",
    title: "Class Lists & Attendance",
    body: "View enrolled learners per class, mark daily attendance, and flag concerns to administration.",
  },
  {
    icon: "payments",
    title: "Bursar Tools",
    body: "Bursar staff can post fee receipts, view balances, and trigger parent SMS notifications.",
  },
  {
    icon: "admin_panel_settings",
    title: "Admin Oversight",
    body: "Management can monitor school-wide performance, oversee staff activity, and generate reports.",
  },
];

export default function StaffPortalPage() {
  return (
    <>
      <div className="bg-[var(--color-crimson)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-red-300 mb-4 flex items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-white">Staff Portal</span>
          </nav>
          <span className="inline-block text-xs font-semibold bg-[var(--color-gold)] text-[var(--color-crimson-dark)] px-3 py-1 rounded-full mb-4">
            Coming Soon
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Staff Portal
          </h1>
          <p className="mt-4 text-red-100 max-w-xl">
            The internal workspace for teachers, the bursar, and management, purpose-built around
            how Grace Schools actually runs day-to-day.
          </p>
        </div>
      </div>

      <section className="py-16 bg-[var(--color-surface)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Coming-soon notice */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-12 flex flex-col sm:flex-row items-start gap-5 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[var(--color-crimson)] text-[24px]">build</span>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Under active development
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We are rebuilding the staff portal from scratch around the school's actual workflows.
                Accounts will be created and provisioned by administration. Staff should reach out
                to the school office for current paper-based workflows in the interim.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold bg-[var(--color-crimson)] hover:bg-[var(--color-crimson-dark)] text-white px-5 py-2 rounded-full transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">mail</span>
                  Contact Administration
                </a>
              </div>
            </div>
          </div>

          {/* What's included */}
          <div className="mb-8">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-crimson)] mb-2">
              What it will include
            </span>
            <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "var(--font-heading)" }}>
              Tools for every role on staff
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
            <span className="material-symbols-outlined text-[var(--color-gold-light)] text-[32px] block mb-3">badge</span>
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>
              Staff sign-in launching soon
            </h3>
            <p className="text-red-100 text-sm max-w-md mx-auto mb-6">
              Accounts will be provisioned by school administration. If you are a member of staff,
              you'll receive your login details directly from the office.
            </p>
            <button
              disabled
              className="inline-flex items-center gap-2 bg-white/20 text-white/70 font-semibold px-6 py-2.5 rounded-full text-sm cursor-not-allowed"
            >
              <span className="material-symbols-outlined text-[18px]">login</span>
              Staff Sign In (Disabled)
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
