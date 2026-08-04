"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

/**
 * The enquiry form.
 *
 * The previous version called preventDefault and then showed "Enquiry Sent!"
 * without sending anything anywhere. Every enquiry made through this site since
 * launch was silently discarded, and the parent was told it had gone through.
 *
 * This is a static export with no backend, so the form now composes the message
 * and hands it to the visitor's mail app, which genuinely works with no server.
 * The phone number stays in view throughout, because in Chepilat a call is the
 * more likely route anyway.
 *
 * If a real inbox is wanted, point `action` at a form service and drop the
 * mailto path. That is a credentials question, not a code one.
 */

const enquiryTypes = [
  "Admission and enrolment",
  "Curriculum and academics",
  "Fees",
  "Boarding",
  "School transport",
  "Something else",
];

const control =
  "min-h-[44px] w-full rounded-md border border-line-strong bg-card px-3.5 text-base " +
  "text-ink placeholder:text-ink-muted transition-colors duration-150 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson " +
  "focus:border-crimson";

export function EnquiryForm() {
  const [handedOff, setHandedOff] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const subject = `Enquiry: ${get("type")}`;
    const body = [
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Email: ${get("email")}`,
      `Type: ${get("type")}`,
      "",
      get("message"),
    ].join("\n");

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setHandedOff(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" id="name" type="text" placeholder="Your full name" />
        <Field label="Phone number" id="phone" type="tel" placeholder="0720 000 000" />
      </div>

      <Field label="Email address" id="email" type="email" placeholder="you@example.com" />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="type" className="text-sm font-semibold text-ink">
          What is your enquiry about?
        </label>
        <select id="type" name="type" required defaultValue="" className={control}>
          <option value="" disabled>
            Choose one
          </option>
          {enquiryTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-semibold text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us what you would like to know."
          className={`${control} resize-y py-2.5`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-crimson
                   px-6 text-sm font-semibold text-white transition-colors duration-200
                   hover:bg-crimson-dark focus-visible:outline-2
                   focus-visible:outline-offset-2 focus-visible:outline-crimson"
      >
        Open this in my email app
      </button>

      {handedOff && (
        <p
          role="status"
          className="border border-t-2 border-line border-t-gold bg-surface p-4 text-sm
                     leading-relaxed text-ink-soft"
        >
          Your email app should have opened with the message ready to send. It is
          not sent until you send it there. If nothing opened, email us directly at{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="font-semibold text-crimson underline underline-offset-4"
          >
            {SITE.email}
          </a>{" "}
          or call{" "}
          <a
            href={`tel:${SITE.phones[0].tel}`}
            className="font-semibold text-crimson underline underline-offset-4"
          >
            {SITE.phones[0].display}
          </a>
          .
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  id,
  type,
  placeholder,
}: {
  label: string;
  id: string;
  type: string;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className={control}
      />
    </div>
  );
}
