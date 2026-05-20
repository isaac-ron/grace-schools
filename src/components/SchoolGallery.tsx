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
    src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1600&q=80&auto=format&fit=crop",
    alt: "Students engaged in classroom learning",
    caption: "Active Classrooms",
    sub: "CBC-aligned, learner-centred teaching across every grade.",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80&auto=format&fit=crop",
    alt: "Children reading at school",
    caption: "A Love of Learning",
    sub: "Building confident readers and critical thinkers from day one.",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80&auto=format&fit=crop",
    alt: "School library and resources",
    caption: "Resources to Fuel Curiosity",
    sub: "From the library to the recording studio, every interest has a home.",
  },
  {
    src: "https://images.unsplash.com/photo-1581726690015-c9861fa5057f?w=1600&q=80&auto=format&fit=crop",
    alt: "Students collaborating",
    caption: "Community & Character",
    sub: "Faith-grounded learning, with leadership built into school life.",
  },
  {
    src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1600&q=80&auto=format&fit=crop",
    alt: "Students playing sports",
    caption: "Sports, Music & Beyond",
    sub: "Spacious playgrounds, recording studio, and a vibrant clubs life.",
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
