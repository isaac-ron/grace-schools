import Link from "next/link";

const resourceCategories = [
  {
    icon: "calendar_month",
    title: "Academic Calendar",
    items: [
      "2026 Term Dates",
      "School Holidays & Public Holidays",
      "Exam Timetables",
      "Key Events Schedule",
    ],
  },
  {
    icon: "download",
    title: "Forms & Documents",
    items: [
      "Admission Application Form",
      "School Rules & Regulations",
      "Fee Structure 2026",
      "School Uniform Guidelines",
    ],
  },
  {
    icon: "menu_book",
    title: "CBC Learning Resources",
    items: [
      "CBC Curriculum Overview",
      "KICD Resource Portal (External)",
      "Recommended Book Lists",
      "Study Tips & Guides",
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <div className="bg-[var(--color-crimson)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-red-300 mb-4 flex items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-white">Resources</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Resources
          </h1>
          <p className="mt-4 text-red-100 max-w-2xl">
            Useful documents, guides, and information for parents, learners, and prospective families.
          </p>
        </div>
      </div>

      <section className="py-16 bg-[var(--color-cream)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {resourceCategories.map((cat) => (
              <div key={cat.title} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-[var(--color-crimson)] text-[28px] mb-4 block">{cat.icon}</span>
                <h2 className="font-bold text-gray-900 text-lg mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                  {cat.title}
                </h2>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-crimson)] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="p-6 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-4">
            <span className="material-symbols-outlined text-[var(--color-gold)] text-[24px] flex-shrink-0 mt-0.5">info</span>
            <div>
              <p className="font-semibold text-gray-900 mb-1">Resources Coming Soon</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Downloadable documents and forms will be published here. In the meantime, please{" "}
                <Link href="/contact" className="text-[var(--color-crimson)] hover:underline font-medium">
                  contact the school office
                </Link>{" "}
                directly for any documents you need.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
