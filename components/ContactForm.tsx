"use client";

import { useState } from "react";

const divisionInterests = [
  "Information Technology Services",
  "Agricultural Business",
  "Real Estate & Land Development",
  "Machinery & Equipment Manufacturing",
  "Construction & Infrastructure",
  "General Trading & Commerce",
  "Oil & Gas Services",
  "Business & Management Consulting",
  "Forensic Financial Services",
  "Automotive Manufacturing & Distribution",
  "Research & Development",
  "Renewable Energy Solutions",
  "General / Corporate Enquiry",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    division: "",
    subject: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    // TODO: wire to Resend / Formspree / server action
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-orange/30 bg-orange/5 p-12 text-center">
        <div className="w-10 h-0.5 bg-orange mx-auto mb-6" />
        <p className="text-xl font-bold text-(--fg) mb-3">
          Message received.
        </p>
        <p className="text-sm text-(--fg-muted)">
          Thank you for reaching out. Our team will review your enquiry and
          respond within 2–3 business days.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full h-11 bg-(--bg) border border-(--border) px-4 text-sm text-(--fg) placeholder:text-(--fg-faint) focus:outline-none focus:border-orange transition-colors duration-200";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="cf-name"
            className="text-[10px] text-(--fg-faint) tracking-[0.2em] uppercase"
          >
            Full Name *
          </label>
          <input
            id="cf-name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="cf-org"
            className="text-[10px] text-(--fg-faint) tracking-[0.2em] uppercase"
          >
            Organisation
          </label>
          <input
            id="cf-org"
            name="organization"
            value={form.organization}
            onChange={handleChange}
            placeholder="Your organisation"
            className={inputClass}
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="cf-email"
            className="text-[10px] text-(--fg-faint) tracking-[0.2em] uppercase"
          >
            Email Address *
          </label>
          <input
            id="cf-email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="cf-phone"
            className="text-[10px] text-(--fg-faint) tracking-[0.2em] uppercase"
          >
            Phone Number
          </label>
          <input
            id="cf-phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+234 ..."
            className={inputClass}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="cf-division"
          className="text-[10px] text-(--fg-faint) tracking-[0.2em] uppercase"
        >
          Division of Interest
        </label>
        <select
          id="cf-division"
          name="division"
          value={form.division}
          onChange={handleChange}
          aria-label="Division of interest"
          className={`${inputClass} appearance-none cursor-pointer`}
        >
          <option value="">Select a division...</option>
          {divisionInterests.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="cf-subject"
          className="text-[10px] text-(--fg-faint) tracking-[0.2em] uppercase"
        >
          Subject *
        </label>
        <input
          id="cf-subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          placeholder="Brief subject line"
          className={inputClass}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="cf-message"
          className="text-[10px] text-(--fg-faint) tracking-[0.2em] uppercase"
        >
          Message *
        </label>
        <textarea
          id="cf-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell us about your project, partnership idea, or enquiry..."
          className="w-full bg-(--bg) border border-(--border) px-4 py-3 text-sm text-(--fg) placeholder:text-(--fg-faint) focus:outline-none focus:border-orange transition-colors duration-200 resize-none"
        />
      </div>
      <button
        type="submit"
        className="h-12 px-10 bg-orange text-white text-xs font-semibold tracking-[0.15em] uppercase hover:bg-orange-hover transition-colors duration-300 self-start"
      >
        Send Message
      </button>
    </form>
  );
}
