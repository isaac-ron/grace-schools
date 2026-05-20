import Link from "next/link";

const sections = [
  {
    href: "/about/our-story",
    icon: "history_edu",
    title: "Our Story",
    body: "Learn how The Grace Schools came to be: our founding, our growth, and the community we have built in Chepilat.",
  },
  {
    href: "/about/mission-vision",
    icon: "stars",
    title: "Mission, Vision & Motto",
    body: "Discover the values and convictions that guide every decision we make as a school and as a community of learners.",
  },
  {
    href: "/about/administration",
    icon: "groups",
    title: "Administration",
    body: "Meet the dedicated leadership team committed to delivering quality education and a safe learning environment.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-[var(--color-crimson)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-red-300 mb-4 flex items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-white">About</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            About The Grace Schools
          </h1>
          <p className="mt-4 text-red-100 max-w-2xl">
            A faith-grounded institution in Chepilat, Kenya, where academic excellence meets character formation.
          </p>
        </div>
      </div>

      {/* Section cards */}
      <section className="py-16 bg-[var(--color-cream)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex flex-col p-8 bg-white rounded-2xl border border-gray-100 hover:border-[var(--color-crimson)] hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 group-hover:bg-[var(--color-crimson)] flex items-center justify-center mb-5 transition-colors">
                <span className="material-symbols-outlined text-[var(--color-crimson)] group-hover:text-white text-[22px] transition-colors">
                  {s.icon}
                </span>
              </div>
              <h2 className="font-bold text-gray-900 text-lg mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                {s.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{s.body}</p>
              <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-[var(--color-crimson)]">
                Read more
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
