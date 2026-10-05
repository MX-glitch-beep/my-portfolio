"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Container from "@/app/components/layout/ui/Container";

const SERVICES = [
  "Web Architecture",
  "UI/UX Design",
  "Full-Stack App",
  "Performance / SEO",
];

const BUDGET_RANGES = ["< $2,000", "$2,000 - $5,000", "$5,000 - $10,000", "$10,000+"];

const DIRECT_EMAIL = "michaelolorunfemi355@gmail.com";

interface InquiryData {
  service: string;
  budget: string;
  name: string;
  email: string;
  message: string;
}

async function submitInquiry(data: InquiryData) {
  const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "4199c191-3ffe-4cf0-b5ba-22743cfc5dfe";

  // Attempt direct submission via Web3Forms API
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: apiKey,
        subject: `New project inquiry: ${data.service}`,
        to_email: DIRECT_EMAIL,
        from_name: data.name,
        replyto: data.email,
        ...data,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return true;
    }
  } catch {
    // API connection failed; proceeding to mailto fallback
  }

  // Fallback: Launch default system email client directly
  const subject = `New project inquiry: ${data.service}`;
  const body = [
    `Service: ${data.service}`,
    `Budget: ${data.budget}`,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    "",
    data.message,
  ].join("\n");

  window.location.href = `mailto:${DIRECT_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return true;
}

interface RadioPillGroupProps {
  legend: string;
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  layout?: "flow" | "grid";
}

function RadioPillGroup({ legend, name, options, value, onChange, layout = "flow" }: RadioPillGroupProps) {
  const isGrid = layout === "grid";

  return (
    <fieldset className="space-y-3 border-0 p-0 m-0 min-w-0">
      <legend className="block text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider text-neutral-800 font-bold">
        {legend}
      </legend>
      <div className={isGrid ? "grid grid-cols-2 sm:grid-cols-4 gap-2.5" : "flex flex-wrap gap-2.5"}>
        {options.map((option: string) => {
          const isActive = value === option;
          return (
            <label key={option} className={isGrid ? "block cursor-pointer" : "inline-block cursor-pointer"}>
              <input
                type="radio"
                name={name}
                value={option}
                checked={isActive}
                onChange={() => onChange(option)}
                className="peer sr-only"
              />
              <span
                className={`items-center gap-2 rounded-xl text-xs transition-all peer-focus-visible:ring-2 peer-focus-visible:ring-amber-500 peer-focus-visible:ring-offset-2 ${isGrid ? "flex px-3 py-3 justify-center" : "inline-flex px-4 py-2.5"
                  } ${isActive
                    ? "bg-[#222226] text-white shadow-md shadow-neutral-900/10 font-bold"
                    : "bg-neutral-100 text-neutral-700 border border-neutral-200/80 hover:bg-neutral-200/60 hover:text-neutral-900 font-semibold"
                  }`}
              >
                {isActive && (
                  <svg
                    className="w-3.5 h-3.5 shrink-0 text-amber-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                )}
                {option}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

interface FormFieldProps {
  id: string;
  label: string;
  error?: string | null;
  children: React.ReactNode;
}

function FormField({ id, label, error, children }: FormFieldProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-xs font-bold text-neutral-800 uppercase tracking-wider">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-xs text-rose-600 font-bold pt-0.5">
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass = (hasError: boolean) =>
  `w-full px-4 py-3 rounded-xl bg-neutral-50 border text-neutral-900 font-medium placeholder-neutral-400 text-sm focus:outline-none transition-all ${hasError
    ? "border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 bg-rose-50/20"
    : "border-neutral-200 focus:border-neutral-800 focus:bg-white focus:ring-2 focus:ring-neutral-900/10 hover:border-neutral-300"
  }`;

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [selectedService, setSelectedService] = useState("Web Architecture");
  const [selectedBudget, setSelectedBudget] = useState("$2,000 - $5,000");
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [phase, setPhase] = useState<"idle" | "submitting" | "sent">("idle");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(DIRECT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const clearFieldError = (field: string) => {
    setErrors((prev) => (prev[field] ? { ...prev, [field]: null } : prev));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Add your name to continue.";
    if (!email) {
      nextErrors.email = "Add an email so we can reply.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "That email address doesn't look right.";
    }
    if (!message || message.length < 10) {
      nextErrors.message = "Tell us a bit more about the project (at least 10 characters).";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setPhase("submitting");

    try {
      await submitInquiry({
        service: selectedService,
        budget: selectedBudget,
        name,
        email,
        message,
      });

      // Clear input fields on successful dispatch
      if (formRef.current) {
        formRef.current.reset();
      }

      setPhase("sent");
    } catch {
      setPhase("idle");
      setErrors({ form: "Something went wrong sending that." });
    }
  };

  const closeModal = () => {
    setPhase("idle");
  };

  return (
    <main className="min-h-screen bg-[#F8F7F4] text-neutral-900 pt-20 pb-20 relative overflow-hidden flex items-center justify-center">
      {/* OPAY-STYLE TRANSACTION MODAL */}
      {phase !== "idle" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-all">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl flex flex-col items-center text-center space-y-6 border border-neutral-100">

            {phase === "submitting" ? (
              <>
                {/* Processing State: OPay Circular Loader */}
                <div className="relative w-24 h-24 flex items-center justify-center my-2">
                  <div className="absolute inset-0 rounded-full border-4 border-amber-100 animate-ping opacity-30" />
                  <div className="w-20 h-20 rounded-full border-4 border-amber-200 border-t-amber-500 animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="w-3.5 h-3.5 bg-amber-500 rounded-full" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
                    Processing Inquiry...
                  </h3>
                  <p className="text-xs font-semibold text-neutral-500">
                    Preparing your request details
                  </p>
                </div>
              </>
            ) : (
              <>
                {/* Success State: OPay Green Success Badge */}
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center my-2 shadow-inner">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-neutral-900 tracking-tight">
                    Details Verified!
                  </h3>
                  <p className="text-xs font-semibold text-neutral-600 leading-relaxed max-w-xs">
                    Your project details have been sent. I will get back to you within 24 hours!
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeModal}
                  className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-emerald-600/20"
                >
                  Done
                </button>
              </>
            )}

          </div>
        </div>
      )}

      {/* Background Graphic Accents */}
      <div
        aria-hidden="true"
        className="absolute top-12 left-10 w-48 h-48 border-[14px] border-amber-400/80 rounded-full pointer-events-none hidden md:block"
      />
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-96 h-96 bg-amber-200/50 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-100px] right-[10%] w-80 h-80 border-[30px] border-neutral-900/90 rounded-full pointer-events-none hidden lg:block"
      />

      <Container size="canvas" className="relative z-10 w-full max-w-6xl">
        <div className="space-y-8">
          {/* Top Navigation */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider text-neutral-700 hover:text-neutral-900 font-bold transition-colors rounded p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Home
            </Link>
          </div>

          {/* Main Container Card */}
          <div className="bg-white border border-neutral-200/80 rounded-[2.5rem] shadow-2xl shadow-neutral-900/10 overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative">

            {/* LEFT FORM SECTION */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-8">
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl font-serif font-extrabold text-neutral-900 tracking-tight">
                  Contact us
                </h1>
                <p className="text-neutral-600 text-xs sm:text-sm font-semibold leading-relaxed max-w-md">
                  Have a project in mind, or want to build something great together? Share your details below and I’ll get back to you within 24 hours.
                </p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">
                <RadioPillGroup
                  legend="1. Select Service"
                  name="service"
                  options={SERVICES}
                  value={selectedService}
                  onChange={setSelectedService}
                  layout="flow"
                />

                <RadioPillGroup
                  legend="2. Estimated Budget"
                  name="budget"
                  options={BUDGET_RANGES}
                  value={selectedBudget}
                  onChange={setSelectedBudget}
                  layout="grid"
                />

                <div className="space-y-4 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField id="name" label="Name" error={errors.name}>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Your name"
                        aria-invalid={errors.name ? "true" : undefined}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        onChange={() => clearFieldError("name")}
                        className={inputClass(Boolean(errors.name))}
                      />
                    </FormField>

                    <FormField id="email" label="Email" error={errors.email}>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="your.email@example.com"
                        aria-invalid={errors.email ? "true" : undefined}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        onChange={() => clearFieldError("email")}
                        className={inputClass(Boolean(errors.email))}
                      />
                    </FormField>
                  </div>

                  <FormField id="message" label="Message" error={errors.message}>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us about your project or inquiry..."
                      aria-invalid={errors.message ? "true" : undefined}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      onChange={() => clearFieldError("message")}
                      className={`${inputClass(Boolean(errors.message))} resize-none`}
                    />
                  </FormField>
                </div>

                {/* Submit Action Button */}
                <div className="space-y-3 pt-2">
                  <button
                    type="submit"
                    disabled={phase !== "idle"}
                    className="w-full py-4 rounded-xl font-bold text-sm bg-[#222226] hover:bg-black active:scale-[0.99] text-white hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <span>Send Message</span>
                  </button>

                  {errors.form && (
                    <div aria-live="polite" className="text-center">
                      <p role="alert" className="text-xs text-rose-600 font-bold">
                        {errors.form} You can also email us directly at{" "}
                        <a href={`mailto:${DIRECT_EMAIL}`} className="underline hover:text-rose-700">
                          {DIRECT_EMAIL}
                        </a>.
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </div>

            {/* RIGHT INFO CARD SECTION */}
            <div className="lg:col-span-5 bg-amber-400 p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="bg-[#222226] text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-8 my-auto relative z-10">
                <div className="flex items-center justify-between border-b border-neutral-700/60 pb-4">
                  <h2 className="text-2xl font-bold tracking-tight text-white">
                    Info
                  </h2>
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                </div>

                <div className="space-y-6 text-sm text-neutral-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-neutral-800 text-amber-400 shrink-0">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div className="space-y-1 min-w-0 flex-1">
                      <p className="text-xs uppercase tracking-wider text-neutral-400 font-mono font-bold">Email Us</p>
                      <p className="font-bold text-white truncate">{DIRECT_EMAIL}</p>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="px-2.5 py-1 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-bold text-amber-400 transition-colors shrink-0"
                    >
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-neutral-800 text-amber-400 shrink-0">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-xs uppercase tracking-wider text-neutral-400 font-mono font-bold">Response Time</p>
                      <p className="font-bold text-white">Under 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-neutral-800 text-amber-400 shrink-0">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 3v18" />
                      </svg>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-xs uppercase tracking-wider text-neutral-400 font-mono font-bold">Availability</p>
                      <p className="font-bold text-white">Flexible / Global Timezones</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-700/60">
                  <p className="text-xs font-semibold text-neutral-400 leading-relaxed">
                    All project details and intellectual property remain strictly confidential under NDA standards.
                  </p>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-amber-500 z-20 hidden lg:block"
              />
            </div>

          </div>
        </div>
      </Container>
    </main>
  );
}