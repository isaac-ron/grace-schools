import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/**
 * Crest primitives for the marketing site.
 *
 * The system is document grammar: ruled rows instead of cards, a gold hairline
 * closing every head, deep crimson for drenched fields. See
 * ../../grace-portal/DESIGN.md, which the portal and this site share.
 *
 * There is no icon font. The Material Symbols stylesheet was a render-blocking
 * request to Google for eighty-two decorative glyphs, paid for in mobile data by
 * parents in Chepilat. The handful of genuinely functional marks are inline SVG
 * in `Icon` below.
 */

function cx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

/* -------------------------------------------------------------------------- */
/* Icons                                                                       */
/* -------------------------------------------------------------------------- */

const paths = {
  phone:
    "M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.7.1.4 0 .7-.2 1l-2.3 2.1Z",
  mail: "M3 5h18v14H3V5Zm2 2v.4l7 4.4 7-4.4V7H5Zm14 3.9-6.5 4a1 1 0 0 1-1 0L5 10.9V17h14v-6.1Z",
  pin: "M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7Zm0 4.5A2.5 2.5 0 1 0 12 11a2.5 2.5 0 0 0 0-5Z",
  arrow: "M13.2 5.6 19.6 12l-6.4 6.4-1.4-1.4 4-4H4v-2h11.8l-4-4 1.4-1.4Z",
  menu: "M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z",
  close:
    "m12 10.6 5.3-5.3 1.4 1.4-5.3 5.3 5.3 5.3-1.4 1.4-5.3-5.3-5.3 5.3-1.4-1.4 5.3-5.3-5.3-5.3 1.4-1.4 5.3 5.3Z",
  chevron: "M12 15.4 6.6 10l1.4-1.4 4 4 4-4L17.4 10 12 15.4Z",
} as const;

export type IconName = keyof typeof paths;

export function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d={paths[name]} />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* Buttons                                                                     */
/* -------------------------------------------------------------------------- */

const btnBase =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md px-6 " +
  "text-sm font-semibold tracking-wide transition-colors duration-200 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2";

const btnVariants = {
  /* On paper. */
  primary:
    "bg-crimson text-white hover:bg-crimson-dark focus-visible:outline-crimson",
  secondary:
    "border border-line-strong text-ink hover:bg-surface focus-visible:outline-crimson",
  /* On a drenched crimson field. */
  gold: "bg-gold text-crimson-deep hover:bg-gold-light focus-visible:outline-white",
  onDark:
    "border border-white/40 text-white hover:border-gold hover:text-gold focus-visible:outline-white",
} as const;

export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: keyof typeof btnVariants }) {
  return (
    <Link className={cx(btnBase, btnVariants[variant], className)} {...props}>
      {children}
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/* Page head                                                                   */
/* -------------------------------------------------------------------------- */

/**
 * The head of an inner page.
 *
 * Deep crimson, continuing the masthead field so the two read as one letterhead
 * with the gold rule between them. The breadcrumb is a real trail, not
 * decoration: these pages sit two levels deep and people arrive from search.
 */
export function PageHero({
  trail,
  title,
  lede,
}: {
  trail: { href: string; label: string }[];
  title: string;
  lede?: string;
}) {
  return (
    <section className="bg-crimson-deep px-4 py-14 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-white/70">
            {trail.map((t) => (
              <li key={t.href} className="flex items-center gap-2">
                <Link
                  href={t.href}
                  className="transition-colors hover:text-gold focus-visible:outline-2
                             focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  {t.label}
                </Link>
                <span aria-hidden className="text-white/35">
                  /
                </span>
              </li>
            ))}
            <li className="text-gold">{title}</li>
          </ol>
        </nav>

        <h1 className="mt-5 text-3xl text-white sm:text-4xl lg:text-5xl">{title}</h1>
        <span aria-hidden className="mt-6 block h-px w-16 bg-gold" />
        {lede && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85">
            {lede}
          </p>
        )}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Section heads                                                               */
/* -------------------------------------------------------------------------- */

/**
 * A section head.
 *
 * The old site put a tracked uppercase eyebrow above all six sections, which is
 * scaffolding rather than voice. Here the label is optional and used once or
 * twice a page at most, where it genuinely names a category.
 */
export function PlateHead({
  label,
  title,
  lede,
  align = "center",
}: {
  label?: string;
  title: string;
  lede?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cx("max-w-2xl", align === "center" ? "mx-auto text-center" : "")}>
      {label && <p className="doc-label text-blue-accent">{label}</p>}
      <h2
        className={cx(
          "text-3xl sm:text-4xl text-ink",
          label && "mt-3",
        )}
      >
        {title}
      </h2>
      {lede && (
        <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
          {lede}
        </p>
      )}
      <span
        aria-hidden
        className={cx("mt-6 block h-px w-16 bg-gold", align === "center" && "mx-auto")}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Long form                                                                   */
/* -------------------------------------------------------------------------- */

/**
 * Article body. Capped near 68 characters so a line stays readable, with the
 * serif carried into subheadings and the sans left to do the reading.
 */
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div
      className="mx-auto max-w-[68ch] text-base leading-relaxed text-ink-soft
                 [&_em]:text-ink
                 [&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:text-ink
                 [&_h2:first-child]:mt-0
                 [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:text-ink
                 [&_p]:mb-5
                 [&_strong]:font-semibold [&_strong]:text-ink"
    >
      {children}
    </div>
  );
}

/**
 * A pull quote.
 *
 * Ruled top and bottom rather than given a coloured left stripe: the stripe is a
 * decorative tic, and a document sets a quotation off with rules.
 */
export function PullQuote({
  children,
  attribution,
}: {
  children: ReactNode;
  attribution?: string;
}) {
  return (
    <blockquote className="my-10 border-y border-gold py-7 text-center">
      <p className="font-heading text-xl italic leading-relaxed text-ink sm:text-2xl">
        {children}
      </p>
      {attribution && (
        <footer className="doc-label mt-5 text-ink-muted">{attribution}</footer>
      )}
    </blockquote>
  );
}

/* -------------------------------------------------------------------------- */
/* Ruled rows                                                                  */
/* -------------------------------------------------------------------------- */

/** A ruled list. Replaces the identical-card grid that ran the whole old site. */
export function Ruled({ children }: { children: ReactNode }) {
  return <div className="border-t border-line">{children}</div>;
}

/**
 * One row of a ruled list. `marker` is the left column: a grade range, a year, a
 * short label. It is separated by the gold hairline that structures the system.
 */
export function Row({
  marker,
  title,
  children,
  href,
  action,
}: {
  marker?: string;
  title: string;
  children?: ReactNode;
  href?: string;
  action?: string;
}) {
  const body = (
    <>
      {marker && (
        <span
          className="shrink-0 border-gold font-heading text-lg text-crimson
                     sm:w-24 sm:border-r sm:pr-5"
        >
          {marker}
        </span>
      )}
      <span className="min-w-0 flex-1">
        <span className="block font-heading text-lg text-ink">{title}</span>
        {children && (
          <span className="mt-1 block text-sm leading-relaxed text-ink-soft">
            {children}
          </span>
        )}
      </span>
      {action && (
        <span
          className="doc-label shrink-0 self-start text-blue-accent sm:self-center
                     group-hover:text-crimson"
        >
          {action}
        </span>
      )}
    </>
  );

  const shape =
    "flex flex-col gap-3 border-b border-line py-6 sm:flex-row sm:items-center sm:gap-6";

  if (!href) return <div className={shape}>{body}</div>;

  return (
    <Link
      href={href}
      className={cx(
        shape,
        "group transition-colors duration-200 hover:bg-surface",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson",
      )}
    >
      {body}
    </Link>
  );
}

/**
 * A list of learning areas.
 *
 * Two ruled columns, not a grid of tinted pills. A syllabus is a list, and
 * setting it as one makes it scannable and roughly half the height.
 */
export function SubjectList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-x-10 sm:grid-cols-2">
      {items.map((s) => (
        <li key={s} className="border-b border-line py-3 text-sm text-ink-soft">
          {s}
        </li>
      ))}
    </ul>
  );
}

/** A quiet aside: an assessment note, a caveat, a "what this means in practice". */
export function Note({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="border border-t-2 border-line border-t-gold bg-surface p-6">
      <p className="font-heading text-lg text-ink">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{children}</p>
    </aside>
  );
}

/* -------------------------------------------------------------------------- */
/* Bands                                                                       */
/* -------------------------------------------------------------------------- */

/** A drenched crimson band. Used for the mission, the vision, and the closing call. */
export function Band({
  children,
  tone = "deep",
}: {
  children: ReactNode;
  tone?: "deep" | "crimson";
}) {
  return (
    <section
      className={cx(
        "px-4 py-16 text-center sm:px-6 sm:py-20",
        tone === "deep" ? "bg-crimson-deep" : "bg-crimson",
      )}
    >
      <div className="mx-auto max-w-3xl">{children}</div>
    </section>
  );
}

/** A section on paper. Alternate `surface` and `card` for rhythm. */
export function Section({
  children,
  tone = "card",
  className,
}: {
  children: ReactNode;
  tone?: "card" | "surface";
  className?: string;
}) {
  return (
    <section
      className={cx(
        "px-4 py-16 sm:px-6 sm:py-20",
        tone === "surface" ? "bg-surface" : "bg-card",
        className,
      )}
    >
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Figures                                                                     */
/* -------------------------------------------------------------------------- */

/**
 * Focal points.
 *
 * `object-cover` on a wide band throws away most of a photograph's height, and
 * the default centre is the wrong half often enough to matter: on the Director's
 * portrait it cut his face off at the eyes. These are the offsets that keep the
 * subject, chosen by rendering the actual crop rather than by guessing.
 */
const focalPoints = {
  /** Subject fills the frame, or is genuinely central. */
  center: "object-center",
  /** Standing subject whose head sits high in the frame. */
  upper: "object-[50%_20%]",
  /** Seated group, or faces in the upper third. */
  midUpper: "object-[50%_35%]",
} as const;

/**
 * The banner ratio.
 *
 * One scale, defined once. Previously each page passed its own
 * `aspect-[21/9] max-h-[Npx]` pair, and those two properties fight: once the
 * clamp engages, the rendered ratio is set by the viewport rather than by the
 * design, so the crop got harsher the wider the screen and differed on every
 * page. Ratios only here, no max-height, so a crop verified once stays correct.
 */
const bannerRatio = "aspect-[4/3] sm:aspect-[16/9] lg:aspect-[12/5]";

/**
 * A photograph with a caption.
 *
 * Full bleed and full strength. The school's archive is the one thing on this
 * site no template can buy, and the old design buried it in rounded thumbnails.
 */
export function Figure({
  src,
  alt,
  caption,
  className,
  priority = false,
  sizes = "100vw",
  focus = "center",
  banner = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  focus?: keyof typeof focalPoints;
  banner?: boolean;
}) {
  return (
    <figure
      className={cx(
        "relative overflow-hidden bg-crimson-deep",
        banner && bannerRatio,
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={cx("h-full w-full object-cover", focalPoints[focus])}
      />
      {caption && (
        <figcaption
          className="absolute inset-x-0 bottom-0 bg-linear-to-t from-crimson-deep
                     via-crimson-deep/75 to-transparent px-5 pb-4 pt-12 text-sm text-white/90"
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
