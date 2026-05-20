import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import SchoolGallery from "@/components/SchoolGallery";

const notices = [
  {
    kind: "Event",
    kindClass: "bg-[var(--color-blue-accent)] text-white",
    date: "19 May 2026",
    title: "Student Election 2026",
    body: "A vibrant exercise in civic responsibility. Candidates campaigned, classmates voted, and our newly elected student leaders are ready to serve.",
    icon: "how_to_vote",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&q=80&auto=format&fit=crop",
  },
  {
    kind: "Innovation",
    kindClass: "bg-[var(--color-crimson)] text-white",
    date: "Term 2, 2026",
    title: "Student Innovations Showcase",
    body: "From science projects to creative arts pieces, our learners continue to surprise us. Recent projects are being curated for an upcoming showcase.",
    icon: "lightbulb",
    image: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=1200&q=80&auto=format&fit=crop",
  },
  {
    kind: "Programme",
    kindClass: "bg-[var(--color-gold)] text-[var(--color-crimson-dark)]",
    date: "Open Enrolment",
    title: "Computer Packages Training",
    body: "Affordable, certified Computer Packages training with flexible schedules. Free for Grace Schools learners who complete Junior Secondary.",
    icon: "workspace_premium",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80&auto=format&fit=crop",
  },
  {
    kind: "Notice",
    kindClass: "bg-[var(--color-blue-accent)] text-white",
    date: "Now Open",
    title: "2026 Admissions",
    body: "Applications are open for Grades 1–9. Both day and boarding options available. Visit the school office or apply online today.",
    icon: "campaign",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80&auto=format&fit=crop",
  },
];

const facilities = [
  {
    icon: "graphic_eq",
    title: "Recording Studio",
    body: "A fully equipped studio for music, podcasting, and performance, nurturing creative and artistic talent.",
  },
  {
    icon: "sports_soccer",
    title: "Spacious Playgrounds",
    body: "Ample, well-maintained fields for football, athletics, and physical education.",
  },
  {
    icon: "computer",
    title: "Modern Computer Lab",
    body: "Hands-on digital literacy and Computer Packages training, with a certified completion certificate.",
  },
  {
    icon: "directions_bus",
    title: "School Transport",
    body: "Safe and reliable bus and van services for day scholars across the surrounding region.",
  },
  {
    icon: "bed",
    title: "Boarding Section",
    body: "A home away from home for boarders, with structured care, supervision, and welfare programmes.",
  },
  {
    icon: "school",
    title: "Qualified Teaching Staff",
    body: "TSC-registered, experienced educators committed to unlocking every learner's full potential.",
  },
];

const features = [
  {
    icon: "church",
    title: "Faith-Based Education",
    body: "Grounded in Christian values, we nurture character alongside academic excellence in a supportive spiritual environment.",
  },
  {
    icon: "menu_book",
    title: "CBC Curriculum",
    body: "Fully aligned with Kenya's Competency Based Curriculum, developing well-rounded, creative, and critical thinkers.",
  },
  {
    icon: "home",
    title: "Day & Boarding",
    body: "Flexible options for both day scholars and boarders, with a safe and structured residential programme.",
  },
  {
    icon: "school",
    title: "Qualified Educators",
    body: "Experienced, TSC-registered teachers passionate about unlocking every learner's full potential.",
  },
  {
    icon: "sports_soccer",
    title: "Holistic Development",
    body: "Sports, music, drama, and clubs complement the classroom, because excellence extends beyond academics.",
  },
  {
    icon: "security",
    title: "Safe Environment",
    body: "A secure, disciplined campus where every child thrives with confidence, protected and cared for.",
  },
];

const levels = [
  {
    href: "/curriculum/lower-primary",
    badge: "Grades 1 – 3",
    title: "Lower Primary",
    body: "Foundational competencies in Literacy, Numeracy, and Life Skills, learning through play and discovery.",
    color: "bg-blue-50 border-[var(--color-blue-accent)]",
    badgeColor: "bg-[var(--color-blue-accent)] text-white",
  },
  {
    href: "/curriculum/upper-primary",
    badge: "Grades 4 – 6",
    title: "Upper Primary",
    body: "Deepening knowledge across core and elective subjects, building analytical skills and learner identity.",
    color: "bg-red-50 border-[var(--color-crimson)]",
    badgeColor: "bg-[var(--color-crimson)] text-white",
  },
  {
    href: "/curriculum/junior-school",
    badge: "Grades 7 – 9",
    title: "Junior Secondary",
    body: "Broad-based learning with talent nurturing pathways that prepare learners for Senior Secondary and beyond.",
    color: "bg-amber-50 border-[var(--color-gold)]",
    badgeColor: "bg-[var(--color-gold)] text-[var(--color-crimson-dark)]",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        className="relative bg-[var(--color-crimson-dark)] text-white overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 70% 50%, #A82828 0%, #6B0F0F 60%, #4A0808 100%)",
        }}
      >
        {/* Decorative lines mirroring the logo (gold + slate-blue) */}
        <div className="absolute left-0 right-0 top-1/3 h-px bg-[var(--color-gold)] opacity-20" />
        <div className="absolute left-0 right-0 bottom-1/3 h-px bg-[var(--color-gold)] opacity-20" />
        {/* Soft slate-blue glows echoing the logo's ray marks */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[var(--color-blue-accent)] opacity-10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[var(--color-blue-accent)] opacity-10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center text-center">
          <div className="relative mb-6">
            {/* Soft white halo behind the logo so its white background blends with the hero */}
            <div className="absolute inset-0 -m-3 rounded-2xl bg-white shadow-2xl" />
            <Image
              src="/logo.jpg"
              alt="The Grace Schools crest"
              width={112}
              height={112}
              className="relative rounded-xl"
              priority
            />
          </div>

          <p className="inline-flex items-center gap-2 text-[var(--color-blue-accent-light)] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            <span className="w-6 h-px bg-[var(--color-blue-accent-light)]" />
            Chepilat, Kenya
            <span className="w-6 h-px bg-[var(--color-blue-accent-light)]" />
          </p>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The Grace Schools
          </h1>

          <p
            className="text-xl sm:text-2xl text-[var(--color-gold-light)] italic mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            A School with a Difference
          </p>

          <p className="max-w-xl text-red-100 text-base sm:text-lg leading-relaxed mb-10">
            A faith-based institution offering CBC education from Lower Primary through Junior Secondary.
            We nurture excellence, character, and purpose in every learner.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-[var(--color-crimson-dark)] font-bold px-8 py-3.5 rounded-full text-sm transition-colors shadow-lg"
            >
              <span className="material-symbols-outlined text-[18px]">edit_document</span>
              Apply for 2026 Admissions
            </Link>
            <Link
              href="/about/our-story"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-colors"
            >
              Explore Our School
            </Link>
          </div>

          {/* Stats strip */}
          <div className="mt-16 grid grid-cols-3 gap-8 sm:gap-16 w-full max-w-lg border-t border-white/10 pt-10">
            {[
              { value: "3", label: "School Levels" },
              { value: "CBC", label: "Curriculum" },
              { value: "Day & Board", label: "Options" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-bold text-[var(--color-gold-light)]">{s.value}</p>
                <p className="text-xs text-red-200 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Welcome strip ──────────────────────────────────────── */}
      <section className="bg-[var(--color-surface)] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-crimson)] mb-4">
            Welcome
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Welcome to The Grace Schools, Chepilat
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            From humble beginnings, The Grace Schools has grown to become a sanctuary of excellence,
            faith, and opportunity. Rooted in our guiding principle of <em>God First</em>, we are
            committed to cultivating integrity and purpose in every learner. Together we are building
            a legacy of academic and moral excellence in the heart of Chepilat.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/about/our-story"
              className="text-sm font-semibold text-[var(--color-crimson)] hover:text-[var(--color-crimson-dark)] flex items-center gap-1"
            >
              Read our story
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── School Life carousel ───────────────────────────────── */}
      <section className="py-16 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-blue-accent)] mb-3">
              <span className="w-8 h-px bg-[var(--color-blue-accent)]" />
              School Life
              <span className="w-8 h-px bg-[var(--color-blue-accent)]" />
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-900"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              A Day at Grace Schools
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              A glimpse of life on campus, from active classrooms to playgrounds and beyond.
            </p>
          </div>
          <SchoolGallery />
        </div>
      </section>

      {/* ── Why Choose Us ──────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-blue-accent)] mb-3">
              <span className="w-8 h-px bg-[var(--color-blue-accent)]" />
              Why Grace Schools
              <span className="w-8 h-px bg-[var(--color-blue-accent)]" />
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-900"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              More Than a School. A Community.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => {
              const blue = i % 3 === 1;
              return (
              <div
                key={f.title}
                className={`group p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-all duration-200 ${
                  blue ? "hover:border-[var(--color-blue-accent)]" : "hover:border-[var(--color-crimson)]"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                  blue
                    ? "bg-blue-50 group-hover:bg-[var(--color-blue-accent)]"
                    : "bg-red-50 group-hover:bg-[var(--color-crimson)]"
                }`}>
                  <span className={`material-symbols-outlined group-hover:text-white text-[22px] transition-colors ${
                    blue ? "text-[var(--color-blue-accent)]" : "text-[var(--color-crimson)]"
                  }`}>
                    {f.icon}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  {f.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.body}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Notice Board / Highlights ──────────────────────────── */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Slate-blue decorative band */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--color-blue-accent)] via-[var(--color-crimson)] to-[var(--color-gold)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-blue-accent)] mb-3">
              <span className="w-8 h-px bg-[var(--color-blue-accent)]" />
              Notice Board
              <span className="w-8 h-px bg-[var(--color-blue-accent)]" />
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-900"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Highlights & Announcements
            </h2>
            <p className="mt-3 text-gray-500">
              Recent events, ongoing programmes, and the moments that make Grace Schools tick.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Featured notice with full-bleed photo */}
            <article className="lg:row-span-2 group relative rounded-2xl overflow-hidden bg-[var(--color-crimson-dark)] text-white min-h-[460px] flex flex-col justify-end shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={notices[0].image}
                alt={notices[0].title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              {/* Crimson-blue overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-crimson-dark)]/95 via-[var(--color-crimson-dark)]/70 to-[var(--color-crimson-dark)]/20" />
              <div className="absolute inset-0 bg-[var(--color-blue-accent)] mix-blend-multiply opacity-10" />

              <div className="relative p-8 sm:p-10">
                <span className="inline-flex items-center gap-2 bg-[var(--color-blue-accent)] text-white text-xs font-semibold px-3 py-1 rounded-full mb-5">
                  <span className="material-symbols-outlined text-[14px]">how_to_vote</span>
                  Event &middot; {notices[0].date}
                </span>
                <h3
                  className="text-2xl sm:text-3xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {notices[0].title}
                </h3>
                <p className="text-red-100 leading-relaxed max-w-md">{notices[0].body}</p>
              </div>
            </article>

            {/* Right column smaller cards with thumbnails */}
            {notices.slice(1).map((n) => (
              <article
                key={n.title}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[var(--color-blue-accent)] hover:shadow-md transition-all flex"
              >
                <div className="relative w-32 sm:w-40 flex-shrink-0 bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={n.image}
                    alt={n.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 min-w-0 p-5 sm:p-6">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span className={`inline-block text-[10px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wide ${n.kindClass}`}>
                      {n.kind}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">{n.date}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1.5" style={{ fontFamily: "var(--font-heading)" }}>
                    {n.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{n.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Facilities & Programs ──────────────────────────────── */}
      <section className="py-20 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-crimson)] mb-3">
              Facilities & Programs
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-900"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              What Sets Us Apart
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              Purpose-built spaces and programmes that go beyond the standard classroom, because
              every learner deserves to discover what they are great at.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[var(--color-crimson)] hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[var(--color-crimson)] text-[22px]">{f.icon}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  {f.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>

          {/* Computer Packages callout */}
          <div className="mt-10 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start gap-6">
            <div className="w-14 h-14 rounded-xl bg-[var(--color-crimson)] flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[var(--color-gold-light)] text-[26px]">workspace_premium</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                Computer Packages Training with Certification
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Affordable, employer-recognised Computer Packages training with flexible schedules,
                including weekends and evenings. <strong>Free for all Grace Schools learners who complete
                Junior Secondary</strong>. It is our way of investing in your child's future.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-crimson)] hover:text-[var(--color-crimson-dark)]"
              >
                Enquire about enrolment
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CBC Curriculum levels ──────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-crimson)] mb-3">
              Our Curriculum
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-gray-900"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Competency Based Curriculum (CBC)
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              Three distinct school levels, one coherent journey, aligned with the Kenya Institute
              of Curriculum Development (KICD) framework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {levels.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`group flex flex-col p-8 rounded-2xl border-2 hover:shadow-lg transition-all duration-200 ${l.color}`}
              >
                <span className={`self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 ${l.badgeColor}`}>
                  {l.badge}
                </span>
                <h3
                  className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--color-crimson)] transition-colors"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {l.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">{l.body}</p>
                <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-[var(--color-crimson)]">
                  Learn more
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Admissions CTA ────────────────────────────────────── */}
      <section className="py-20 bg-[var(--color-crimson)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-gold-light)] mb-4">
            2026 Admissions Open
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Begin Your Child's Journey with Us
          </h2>
          <p className="text-red-100 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            We are now accepting applications for the 2026 academic year across all school levels.
            Take the first step. Join a community where every child is known, valued, and empowered to excel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-gold)] hover:bg-[var(--color-gold-light)] text-[var(--color-crimson-dark)] font-bold px-8 py-3.5 rounded-full text-sm transition-colors shadow-lg"
            >
              <span className="material-symbols-outlined text-[18px]">edit_document</span>
              Apply Now
            </Link>
            <Link
              href="/enquiries"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
              Send an Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* ── Quick contact strip ────────────────────────────────── */}
      <section className="py-12 bg-[var(--color-surface-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-semibold text-gray-900" style={{ fontFamily: "var(--font-heading)" }}>
                Find Us in Chepilat
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {SITE.address}. Come visit us or reach out below.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${SITE.phones[0].tel}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-crimson)] hover:text-[var(--color-crimson-dark)]"
              >
                <span className="material-symbols-outlined text-[18px]">phone</span>
                {SITE.phones[0].display}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-crimson)] hover:text-[var(--color-crimson-dark)] break-all"
              >
                <span className="material-symbols-outlined text-[18px]">mail</span>
                {SITE.email}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-crimson)] hover:text-[var(--color-crimson-dark)]"
              >
                Full contact details
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
