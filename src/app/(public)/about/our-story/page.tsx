import Link from "next/link";

export default function OurStoryPage() {
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
            <span className="text-white">Our Story</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Our Story
          </h1>
        </div>
      </div>

      {/* Content */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="h-1 w-16 bg-[var(--color-gold)] rounded mb-10" />

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            The Grace Schools was established on <strong>27 July 2021</strong>, during a season of
            tremendous uncertainty. Kenya's schools had been closed since March 2020 due to the
            COVID-19 pandemic. Out of that disruption, founders <strong>Pastor Walter Ong'ala</strong> and{" "}
            <strong>Jecinta Ong'ala</strong> answered a calling: to build a school in Chepilat that would
            serve as a beacon for the community, rooted in faith and unwavering in its pursuit of excellence.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            A Calling Born in a Difficult Season
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            When most of the country was waiting for things to return to normal, our founders chose
            instead to build something new. The conviction was simple: children in Chepilat deserved
            an education that placed <em>God First</em>, that took both academics and character seriously,
            and that refused to settle for ordinary in a moment that demanded the extraordinary.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            From Humble Beginnings
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            From those early days, the school has grown to become what our Director describes as
            <em> "a sanctuary of excellence, faith, and opportunity."</em> Each term, more families
            have chosen to entrust their children to us, and each term we have worked to honour
            that trust through better teaching, better facilities, and a deeper community.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Today, The Grace Schools offers education across three CBC school levels:
            <strong> Lower Primary (Grades 1–3)</strong>,
            <strong> Upper Primary (Grades 4–6)</strong>, and
            <strong> Junior Secondary (Grades 7–9)</strong>, with both day and boarding options
            serving families from Chepilat and the surrounding region.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            A Director's Message
          </h2>
          <blockquote className="border-l-4 border-[var(--color-gold)] bg-[var(--color-surface)] pl-5 py-4 mb-6 italic text-gray-700">
            "From humble beginnings, this school has grown to become a sanctuary of excellence, faith,
            and opportunity. We are building a legacy of academic and moral excellence, cultivating
            integrity and purpose in every student we welcome."
            <footer className="not-italic text-sm text-gray-500 mt-3">Pst. Walter Ong'ala, Director</footer>
          </blockquote>

          <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            A School with a Difference
          </h2>
          <p className="text-gray-600 leading-relaxed mb-10">
            We are more than a school. We are a community of learners, educators, and families walking
            together. The Grace Schools remains committed to being a place where every child is known
            by name, valued for who they are, and equipped for all that they can become.
          </p>

          <div className="border-t border-gray-100 pt-8 flex flex-wrap gap-4">
            <Link
              href="/about/mission-vision"
              className="inline-flex items-center gap-2 bg-[var(--color-crimson)] hover:bg-[var(--color-crimson-dark)] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
            >
              Our Mission & Vision
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
            <Link
              href="/about/administration"
              className="inline-flex items-center gap-2 border border-gray-200 hover:border-[var(--color-crimson)] text-gray-700 hover:text-[var(--color-crimson)] text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
