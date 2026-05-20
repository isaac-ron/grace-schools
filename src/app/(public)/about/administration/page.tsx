import Link from "next/link";

const team = [
  {
    role: "Director",
    name: "Pst. Walter Ong'ala",
    icon: "stars",
    note: "Provides strategic leadership and overall oversight of the school's mission, vision, and operations.",
  },
  {
    role: "Administrator",
    name: "Madam Jecinta Ogolo",
    icon: "manage_accounts",
    note: "Co-founder and administrator, overseeing day-to-day administration and community relations.",
  },
  {
    role: "Headteacher",
    name: "Mr. Harrison Ouso",
    icon: "school",
    note: "Leads academic delivery, staff management, and discipline across all CBC school levels.",
  },
  {
    role: "Finance",
    name: "Mr. Brian Ogwang",
    icon: "account_balance",
    note: "Manages school finances, fees, and financial reporting in partnership with administration.",
  },
  {
    role: "Information & Technology",
    name: "Mr. Anthony Moir",
    icon: "computer",
    note: "Heads ICT, overseeing systems, the computer lab, and digital learning infrastructure.",
  },
];

export default function AdministrationPage() {
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
            <span className="text-white">Administration</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Administration
          </h1>
          <p className="mt-4 text-red-100 max-w-xl">
            Our leadership team brings together experience, passion, and a shared commitment to
            making The Grace Schools a school with a real difference.
          </p>
        </div>
      </div>

      {/* Team grid */}
      <section className="py-16 bg-[var(--color-surface)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.role}
                className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-[var(--color-crimson)] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[var(--color-gold-light)] text-[26px]">{member.icon}</span>
                </div>
                <p className="text-xs font-semibold text-[var(--color-crimson)] uppercase tracking-wide mb-1">
                  {member.role}
                </p>
                <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{member.note}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-gray-400">
            For direct enquiries, please{" "}
            <Link href="/contact" className="text-[var(--color-crimson)] hover:underline">
              contact us
            </Link>.
          </p>
        </div>
      </section>
    </>
  );
}
