"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE } from "@/lib/site";

export default function EnquiriesPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire up to form backend (e.g. Formspree / EmailJS) when ready
    setSubmitted(true);
  }

  return (
    <>
      <div className="bg-[var(--color-crimson)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-red-300 mb-4 flex items-center gap-1">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-white">Enquiries</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
            Enquiries
          </h1>
          <p className="mt-4 text-red-100 max-w-xl">
            Have a question? Fill in the form below and our team will get back to you within
            1–2 business days.
          </p>
        </div>
      </div>

      <section className="py-16 bg-[var(--color-surface)]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {submitted ? (
            <div className="bg-white rounded-2xl border border-gray-100 p-10 text-center shadow-sm">
              <span className="material-symbols-outlined text-green-500 text-[48px] block mb-4">check_circle</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                Enquiry Sent!
              </h2>
              <p className="text-gray-500 mb-6">
                Thank you for reaching out. We will respond to your enquiry within 1–2 business days.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-[var(--color-crimson)] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[var(--color-crimson-dark)] transition-colors"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField label="Full Name" id="name" type="text" required placeholder="Your full name" />
                <FormField label="Phone Number" id="phone" type="tel" required placeholder="+254 700 000 000" />
              </div>
              <FormField label="Email Address" id="email" type="email" required placeholder="you@email.com" />

              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Type of Enquiry <span className="text-[var(--color-crimson)]">*</span>
                </label>
                <select
                  id="type"
                  name="type"
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--color-crimson)] focus:border-transparent bg-white"
                >
                  <option value="">Select enquiry type</option>
                  <option value="admissions">Admissions / Enrollment</option>
                  <option value="curriculum">Curriculum & Academics</option>
                  <option value="fees">Fees & Financial</option>
                  <option value="boarding">Boarding</option>
                  <option value="general">General Enquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Message <span className="text-[var(--color-crimson)]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Please describe your enquiry in detail..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--color-crimson)] focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--color-crimson)] hover:bg-[var(--color-crimson-dark)] text-white font-semibold py-3 rounded-full text-sm transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
                Submit Enquiry
              </button>

              <p className="text-xs text-center text-gray-400">
                Prefer to call? Reach us at{" "}
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
