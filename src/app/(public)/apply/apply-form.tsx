"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

/**
 * The admission application form.
 *
 * As with the enquiry form, the previous version called preventDefault and then
 * told the family "Application Received!" while sending nothing anywhere. On an
 * application for a school place that is the most damaging version of the bug:
 * a parent believes their child is in the queue and the school never hears.
 *
 * Static export, no backend, so the form composes the application and hands it
 * to the visitor's mail app. The office phone number is shown alongside and in
 * the confirmation, because that is the route most families here will use.
 */

const grades = [
  { group: "Pre-Primary", options: ["PP1", "PP2"] },
  { group: "Lower Primary", options: ["Grade 1", "Grade 2", "Grade 3"] },
  { group: "Upper Primary", options: ["Grade 4", "Grade 5", "Grade 6"] },
  { group: "Junior School", options: ["Grade 7", "Grade 8", "Grade 9"] },
];

const control =
  "min-h-[44px] w-full rounded-md border border-line-strong bg-card px-3.5 text-base " +
  "text-ink placeholder:text-ink-muted transition-colors duration-150 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson " +
  "focus:border-crimson";

export function ApplyForm() {
  const [handedOff, setHandedOff] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const body = [
      "LEARNER",
      `Name: ${get("student_first_name")} ${get("student_last_name")}`,
      `Date of birth: ${get("dob")}`,
      `Gender: ${get("gender")}`,
      `Applying for: ${get("grade")}`,
      `Day or boarding: ${get("boarding")}`,
      `Previous school: ${get("prev_school") || "None given"}`,
      "",
      "PARENT OR GUARDIAN",
      `Name: ${get("parent_name")}`,
      `Relationship: ${get("relationship")}`,
      `Phone: ${get("parent_phone")}`,
      `Email: ${get("parent_email")}`,
      "",
      "ADDITIONAL INFORMATION",
      get("notes") || "None given",
    ].join("\n");

    const subject = `Application: ${get("student_first_name")} ${get(
      "student_last_name",
    )}, ${get("grade")}`;

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setHandedOff(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-12">
      <fieldset className="border-0 p-0">
        <legend className="mb-6 w-full border-b border-gold pb-3 font-heading text-xl text-ink">
          The learner
        </legend>
        <div className="flex flex-col gap-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="First name" id="student_first_name" type="text" required />
            <Field label="Surname" id="student_last_name" type="text" required />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Date of birth" id="dob" type="date" required />
            <Select label="Gender" id="gender" required options={["Female", "Male"]} />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="grade" className="text-sm font-semibold text-ink">
                Applying for
              </label>
              <select id="grade" name="grade" required defaultValue="" className={control}>
                <option value="" disabled>
                  Choose a class
                </option>
                {grades.map((g) => (
                  <optgroup key={g.group} label={g.group}>
                    {g.options.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
            <Select
              label="Day or boarding"
              id="boarding"
              required
              options={["Day scholar", "Boarding"]}
            />
          </div>
          <Field
            label="Previous school"
            id="prev_school"
            type="text"
            hint="Leave blank if this is their first school."
          />
        </div>
      </fieldset>

      <fieldset className="border-0 p-0">
        <legend className="mb-6 w-full border-b border-gold pb-3 font-heading text-xl text-ink">
          Parent or guardian
        </legend>
        <div className="flex flex-col gap-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Full name" id="parent_name" type="text" required />
            <Field
              label="Relationship to the learner"
              id="relationship"
              type="text"
              required
              placeholder="Mother, father, guardian"
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Phone number" id="parent_phone" type="tel" required placeholder="0720 000 000" />
            <Field label="Email address" id="parent_email" type="email" required />
          </div>
        </div>
      </fieldset>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="notes" className="text-sm font-semibold text-ink">
          Anything else we should know
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder="Health needs, siblings already at the school, anything you would like to raise."
          className={`${control} resize-y py-2.5`}
        />
      </div>

      <div className="border-t border-line pt-8">
        <button
          type="submit"
          className="inline-flex min-h-[44px] w-full items-center justify-center rounded-md
                     bg-crimson px-6 text-sm font-semibold text-white transition-colors
                     duration-200 hover:bg-crimson-dark focus-visible:outline-2
                     focus-visible:outline-offset-2 focus-visible:outline-crimson sm:w-auto"
        >
          Open this application in my email app
        </button>

        <p className="mt-4 text-sm leading-relaxed text-ink-soft">
          Submitting means we may use your details to contact you about this
          application. If you would rather apply in person, the office is open
          Monday to Friday and can fill the form in with you.
        </p>

        {handedOff && (
          <p
            role="status"
            className="mt-6 border border-t-2 border-line border-t-gold bg-surface p-4 text-sm
                       leading-relaxed text-ink-soft"
          >
            Your email app should have opened with the application ready to send.{" "}
            <strong className="text-ink">It is not sent until you send it there.</strong>{" "}
            If nothing opened, call the office on{" "}
            <a
              href={`tel:${SITE.phones[0].tel}`}
              className="font-semibold text-crimson underline underline-offset-4"
            >
              {SITE.phones[0].display}
            </a>{" "}
            and we will take the details over the phone.
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  id,
  type,
  required,
  placeholder,
  hint,
}: {
  label: string;
  id: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  hint?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}
        {!required && <span className="ml-2 font-normal text-ink-muted">Optional</span>}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="text-sm text-ink-soft">
          {hint}
        </p>
      )}
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        aria-describedby={hint ? `${id}-hint` : undefined}
        className={control}
      />
    </div>
  );
}

function Select({
  label,
  id,
  required,
  options,
}: {
  label: string;
  id: string;
  required?: boolean;
  options: string[];
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}
      </label>
      <select id={id} name={id} required={required} defaultValue="" className={control}>
        <option value="" disabled>
          Choose one
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
