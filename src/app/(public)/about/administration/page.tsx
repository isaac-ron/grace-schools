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

      {/* Director feature image */}
      <div className="bg-[var(--color-surface)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12 relative z-10">
          <figure className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 aspect-[16/9] bg-[var(--color-surface-dark)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/student-photos/director-addressing-grad.jpg"
              alt="Pst. Walter Ong'ala, Director, addressing learners and parents at the graduation ceremony"
              className="w-full h-full object-cover"
            />
          </figure>
          <figcaption className="text-xs text-gray-500 mt-3 text-center">
            Our Director, Pst. Walter Ong'ala, addressing the school community.
          </figcaption>
        </div>
      </div>

      {/* Team grid */}
      <section className="pt-12 pb-16 bg-[var(--color-surface)]">
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

          {/* Honouring our staff */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <figure className="aspect-[4/3] md:aspect-auto bg-[var(--color-surface-dark)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/student-photos/staff-receiving-gifts.jpg"
                alt="Grace Schools staff being honoured by the school community"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </figure>
            <div className="p-6 sm:p-8 flex flex-col justify-center">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-crimson)] mb-3">
                Honouring Our Staff
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                Behind every learner, a team that shows up
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our teachers, support staff, and administrators are the quiet engine of the school.
                Each year, the community gathers to thank them for the dedication, patience, and
                care they pour into every classroom.
              </p>
            </div>
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
