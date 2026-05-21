"use client";

import { useEffect, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  caption: string;
  sub: string;
};

const slides: Slide[] = [
  {
    src: "/student-photos/students-class-activity-1.jpg",
    alt: "Grace Schools learners working through a class activity together",
    caption: "Active Classrooms",
    sub: "CBC-aligned, learner-centred teaching across every grade.",
  },
  {
    src: "/student-photos/kindergarteners-studying.jpg",
    alt: "Young learners focused on their work in class",
    caption: "Foundational Years",
    sub: "Building confident readers and curious thinkers from day one.",
  },
  {
    src: "/student-photos/students-outside-learning.jpg",
    alt: "Students learning outdoors on the school grounds",
    caption: "Beyond the Classroom",
    sub: "Learning is not confined to four walls. The world is part of the syllabus.",
  },
  {
    src: "/student-photos/students-in-recording-studio.jpg",
    alt: "Students recording in the school's recording studio",
    caption: "The Recording Studio",
    sub: "A purpose-built creative space for music, voice, and performance.",
  },
  {
    src: "/student-photos/students-athleticism-showcase.jpg",
    alt: "Grace Schools learners showcasing athletic ability",
    caption: "Sports & Athletics",
    sub: "Spacious playgrounds, sports days, and a strong physical-education culture.",
  },
  {
    src: "/student-photos/music-class-drums.jpg",
    alt: "Students playing drums during a music class",
    caption: "Music & Performance",
    sub: "Drums, voice, and the rhythm of a school that loves to play and perform.",
  },
];

export default function SchoolGallery() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5500);
    return () => clearInterval(id);
  }, [paused]);

  function prev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }
  function next() {
    setIndex((i) => (i + 1) % slides.length);
  }

  return (
    <div
      className="relative w-full overflow-hidden rounded-3xl bg-[var(--color-crimson-dark)] aspect-[16/9] sm:aspect-[21/9] max-h-[560px] shadow-xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={i !== index}
        >
          {/* Plain img — external URL, static export safe */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={s.src}
            alt={s.alt}
            className="absolute inset-0 w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
          {/* Crimson tint + bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-[var(--color-crimson-dark)] mix-blend-multiply opacity-25" />

          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white">
            <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[var(--color-blue-accent-light)] mb-3">
              <span className="w-6 h-px bg-[var(--color-blue-accent-light)]" />
              School Life
            </span>
            <h3
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {s.caption}
            </h3>
            <p className="text-sm sm:text-base text-red-100 max-w-xl">{s.sub}</p>
          </div>
        </div>
      ))}

      {/* Prev / next */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur flex items-center justify-center text-white transition-colors"
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur flex items-center justify-center text-white transition-colors"
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-8 bg-[var(--color-gold-light)]" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
