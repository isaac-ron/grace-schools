"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE } from "@/lib/site";

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <div className="bg-[var(--color-crimson)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-red-300 mb-4 flex items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-white">Apply Now</span>
          </nav>
          <span className="inline-block text-xs font-semibold bg-[var(--color-gold)] text-[var(--color-crimson-dark)] px-3 py-1 rounded-full mb-4">
            2026 Admissions Open
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Apply Now
          </h1>
          <p className="mt-4 text-red-100 max-w-xl">
            Complete the form below to begin your child's application to The Grace Schools Chepilat
            for the 2026 academic year. Our admissions team will follow up with next steps.
          </p>
        </div>
      </div>

      <section className="py-16 bg-[var(--color-surface)]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {submitted ? (
            <div className="bg-white rounded-2xl border border-gray-100 p-10 text-center shadow-sm">
              <span className="material-symbols-outlined text-green-500 text-[48px] block mb-4">check_circle</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                Application Received!
              </h2>
              <p className="text-gray-500 mb-2">
                Thank you for applying to The Grace Schools Chepilat.
              </p>
              <p className="text-gray-500 mb-6">
                Our admissions team will review your application and contact you within 3–5 business days.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-[var(--color-crimson)] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[var(--color-crimson-dark)] transition-colors"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm space-y-8">

              {/* Student details */}
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-5 pb-3 border-b border-gray-100" style={{ fontFamily: "var(--font-heading)" }}>
                  Student Details
                </h2>
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField label="First Name" id="student_first_name" type="text" required placeholder="Student's first name" />
                    <FormField label="Surname" id="student_last_name" type="text" required placeholder="Student's surname" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField label="Date of Birth" id="dob" type="date" required />
                    <div>
                      <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Gender <span className="text-[var(--color-crimson)]">*</span>
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        required
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--color-crimson)] focus:border-transparent bg-white"
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Grade Applying For <span className="text-[var(--color-crimson)]">*</span>
                      </label>
                      <select
                        id="grade"
                        name="grade"
                        required
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--color-crimson)] focus:border-transparent bg-white"
                      >
                        <option value="">Select grade</option>
                        <optgroup label="Lower Primary">
                          <option value="1">Grade 1</option>
                          <option value="2">Grade 2</option>
                          <option value="3">Grade 3</option>
                        </optgroup>
                        <optgroup label="Upper Primary">
                          <option value="4">Grade 4</option>
                          <option value="5">Grade 5</option>
                          <option value="6">Grade 6</option>
                        </optgroup>
                        <optgroup label="Junior Secondary">
                          <option value="7">Grade 7</option>
                          <option value="8">Grade 8</option>
                          <option value="9">Grade 9</option>
                        </optgroup>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="boarding" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Day or Boarding <span className="text-[var(--color-crimson)]">*</span>
                      </label>
                      <select
                        id="boarding"
                        name="boarding"
                        required
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--color-crimson)] focus:border-transparent bg-white"
                      >
                        <option value="">Select option</option>
                        <option value="day">Day Scholar</option>
                        <option value="boarding">Boarding</option>
                      </select>
                    </div>
                  </div>
                  <FormField
                    label="Previous School (if applicable)"
                    id="prev_school"
                    type="text"
                    placeholder="Name of previous school"
                  />
                </div>
              </div>

              {/* Parent / Guardian details */}
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-5 pb-3 border-b border-gray-100" style={{ fontFamily: "var(--font-heading)" }}>
                  Parent / Guardian Details
                </h2>
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField label="Full Name" id="parent_name" type="text" required placeholder="Parent/Guardian full name" />
                    <FormField label="Relationship to Student" id="relationship" type="text" required placeholder="e.g. Mother, Father, Guardian" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField label="Phone Number" id="parent_phone" type="tel" required placeholder="+254 700 000 000" />
                    <FormField label="Email Address" id="parent_email" type="email" required placeholder="parent@email.com" />
                  </div>
                </div>
              </div>

              {/* Additional info */}
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Additional Information
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  placeholder="Any additional information you'd like to share with us..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--color-crimson)] focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--color-crimson)] hover:bg-[var(--color-crimson-dark)] text-white font-semibold py-3 rounded-full text-sm transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">edit_document</span>
                Submit Application
              </button>

              <p className="text-xs text-center text-gray-400 leading-relaxed">
                By submitting this form you agree that we may use your details to contact you
                regarding this application. For questions, call{" "}
                <a href={`tel:${SITE.phones[0].tel}`} className="text-[var(--color-crimson)] hover:underline">
                  {SITE.phones[0].display}
                </a>
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

function FormField({
  label, id, type, required, placeholder,
}: {
  label: string; id: string; type: string; required?: boolean; placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1.5">
        {label} {required && <span className="text-[var(--color-crimson)]">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--color-crimson)] focus:border-transparent"
      />
    </div>
  );
}
