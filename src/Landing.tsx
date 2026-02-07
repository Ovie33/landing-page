import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type FormState = {
  fullName: string;
  email: string;
  company: string;
  goal: string;
};

export default function PremiumLeadGenLanding() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    company: "",
    goal: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isEmailValid = useMemo(() => {
    const e = form.email.trim();
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  }, [form.email]);

  const canSubmit = useMemo(() => {
    return (
      form.fullName.trim().length >= 2 &&
      isEmailValid &&
      form.goal.trim().length >= 6 &&
      !submitting
    );
  }, [form.fullName, form.goal, isEmailValid, submitting]);

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((p) => ({ ...p, [key]: value }));
    setError(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!canSubmit) {
      setError("Please fill in your name, a valid email, and your goal.");
      return;
    }

    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 700));
      setSubmitted(true);

      // Smoothly bring the user to the success card
      setTimeout(() => {
        const el = document.getElementById("form");
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const brand = {
    name: "Ovies Landing",
    tagline: "Premium Landing Pages That Convert",
    accent: "from-indigo-500 via-violet-500 to-fuchsia-500",
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Subtle background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-600/20 via-violet-600/15 to-fuchsia-600/20 blur-3xl" />
        <div className="absolute bottom-[-220px] right-[-120px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-indigo-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:28px_28px] opacity-30" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div
              className={`h-9 w-9 rounded-xl bg-gradient-to-tr ${brand.accent} shadow-lg`}
            />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">
                {brand.name}
              </div>
              <div className="text-xs text-white/60">{brand.tagline}</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a className="hover:text-white" href="#benefits">
              Benefits
            </a>
            <a className="hover:text-white" href="#process">
              Process
            </a>
            <a className="hover:text-white" href="#faq">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#form"
              className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 md:inline-flex"
            >
              View Offer
            </a>
            <a
              href="#form"
              className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-r ${brand.accent} px-4 px-sm-2 py-2 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/10 hover:opacity-95`}
            >
              Get Free Audit
            </a>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="relative">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-16">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                <span
                  className={`h-2 w-2 rounded-full bg-gradient-to-r ${brand.accent}`}
                />
                Conversion-first landing page • React • Mobile-perfect
              </div>

              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Turn clicks into{" "}
                <span
                  className={`bg-gradient-to-r ${brand.accent} bg-clip-text text-transparent`}
                >
                  booked calls
                </span>{" "}
                with a premium landing page that sells.
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                I build marketing-driven landing pages designed to capture
                leads, increase conversions, and feel premium on every device.
                Get a free mini-audit + a high-impact recommendation list.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#form"
                  className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-r ${brand.accent} px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/10 hover:opacity-95`}
                >
                  Get My Free Audit
                </a>
                <Link
                  to="/book"
                  className={`inline-flex items-center justify-center rounded-2xl bg-white/5 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-95`}
                >
                  Book a Free Call
                </Link>
              </div>

              <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                <Stat label="Avg. load target" value="< 1.2s" />
                <Stat label="Mobile first" value="100%" />
                <Stat label="SEO-ready" value="Yes" />
                <Stat label="Integrations" value="Forms/CRM" />
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-white/55">
                <Badge>Lead capture</Badge>
                <Badge>CTA clarity</Badge>
                <Badge>Fast performance</Badge>
                <Badge>Clean UI</Badge>
                <Badge>Analytics-ready</Badge>
              </div>
            </div>

            {/* Form Card */}
            <div className="lg:col-span-5" id="form">
              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/30 backdrop-blur">
                <>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-lg font-semibold tracking-tight">
                        Free Landing Page Mini-Audit
                      </h2>
                      <p className="mt-1 text-sm text-white/65">
                        Get 5 conversion fixes tailored to your offer.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
                      24–48 hrs
                    </div>
                  </div>

                  <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
                    <Field
                      label="Full name"
                      placeholder="e.g. Oviemo Obukohwo"
                      value={form.fullName}
                      onChange={(v) => onChange("fullName", v)}
                    />
                    <Field
                      label="Email"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={(v) => onChange("email", v)}
                      type="email"
                      hint={
                        !isEmailValid && form.email.trim()
                          ? "Enter a valid email address."
                          : undefined
                      }
                    />
                    <Field
                      label="Company (optional)"
                      placeholder="Brand / business name"
                      value={form.company}
                      onChange={(v) => onChange("company", v)}
                    />
                    <Textarea
                      label="What are you trying to achieve?"
                      placeholder="e.g. Book more calls for my service, collect leads for a course, sell a digital product…"
                      value={form.goal}
                      onChange={(v) => onChange("goal", v)}
                    />

                    {error ? (
                      <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                        {error}
                      </div>
                    ) : null}

                    <button
                      type="submit"
                      disabled={!canSubmit}
                      className={`w-full rounded-2xl px-5 py-3 text-sm font-semibold text-white shadow-lg transition
                          ${
                            canSubmit
                              ? `bg-gradient-to-r ${brand.accent} hover:opacity-95 shadow-fuchsia-500/10`
                              : "cursor-not-allowed bg-white/10 text-white/40"
                          }`}
                    >
                      {submitting ? "Submitting..." : "Send Me the Audit"}
                    </button>

                    <p className="text-center text-xs text-white/55">
                      No spam. Just actionable recommendations. Unsubscribe
                      anytime.
                    </p>

                    <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-white/60">
                      <MiniProof title="Fast" desc="Optimized UI" />
                      <MiniProof title="Clear" desc="One CTA" />
                      <MiniProof title="Premium" desc="Modern feel" />
                    </div>
                  </form>
                </>
              </div>
              {submitted && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
                  <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-neutral-900 p-8 shadow-2xl">
                    <ThankYou
                      onReset={() => {
                        setSubmitted(false);
                        setForm({
                          fullName: "",
                          email: "",
                          company: "",
                          goal: "",
                        });
                        setError(null);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    />
                  </div>
                </div>
              )}
              <div className="mt-4 text-center text-xs text-white/55">
                Prefer WhatsApp?{" "}
                <a
                  className="text-white underline decoration-white/30 underline-offset-4 hover:text-white/90"
                  href="#"
                >
                  Add your link
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">
                What you get
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-white/70">
                Built to match funnel intent: capture leads, reduce friction,
                and make the CTA irresistible.
              </p>
            </div>
            <a
              href="#form"
              className="inline-flex w-fit items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Get the free audit
            </a>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Feature
              title="Conversion-first structure"
              desc="Hero clarity, benefit-led sections, trust layers, and a single CTA flow that guides action."
            />
            <Feature
              title="Premium UI that feels expensive"
              desc="Modern typography, spacing, and micro-details that make your brand look credible."
            />
            <Feature
              title="Mobile-perfect layout"
              desc="Designed for thumb-scrolling, with sticky CTA patterns and clean section rhythm."
            />
            <Feature
              title="Speed & SEO-ready"
              desc="Lean components, semantic markup, and performance-minded layout decisions."
            />
            <Feature
              title="Integrations-ready"
              desc="Easy to connect forms to email tools, CRMs, webhooks, and analytics."
            />
            <Feature
              title="Reusable sections"
              desc="Swap copy, offers, and branding quickly to create variations and A/B tests."
            />
          </div>
        </section>

        {/* Social Proof */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <h3 className="text-2xl font-semibold tracking-tight">
                  Built for marketing teams & founders
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  This template is designed to demonstrate funnel intent.
                  Replace testimonials with real ones when you deploy.
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/55">
                  <Badge>CTA clarity</Badge>
                  <Badge>Trust stacking</Badge>
                  <Badge>Low friction</Badge>
                  <Badge>Clean hierarchy</Badge>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="grid gap-4 md:grid-cols-2">
                  <Testimonial
                    quote="Our landing page finally feels premium and focused. Leads increased immediately."
                    name="Client Example"
                    title="Service Business"
                  />
                  <Testimonial
                    quote="Cleaner CTA flow and better mobile experience. The page loads fast and converts."
                    name="Client Example"
                    title="Digital Product"
                  />
                </div>
                <p className="mt-3 text-xs text-white/50">
                  *Demo testimonials shown for layout only.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
          <h3 className="text-2xl font-semibold tracking-tight">
            Simple process
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-white/70">
            From offer clarity to launch-ready page — fast, clean, and
            measurable.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <Step
              num="01"
              title="Audit your offer & audience"
              desc="We align the message to the buyer journey: pain → promise → proof → CTA."
            />
            <Step
              num="02"
              title="Build & integrate"
              desc="Premium layout, responsive polish, form + analytics hooks, performance checks."
            />
            <Step
              num="03"
              title="Launch & iterate"
              desc="Ship fast, then refine using data: scroll depth, clicks, form completion."
            />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">FAQ</h3>
              <p className="mt-2 text-sm text-white/70">
                Quick answers to common questions.
              </p>
            </div>
            <a
              href="#form"
              className={`inline-flex w-fit items-center justify-center rounded-2xl bg-gradient-to-r ${brand.accent} px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/10 hover:opacity-95`}
            >
              Get the free audit
            </a>
          </div>

          <div className="mt-8 grid gap-4">
            <Faq
              q="Is this a real client page?"
              a="This is a demo landing page designed to show conversion intent and premium UI. Replace branding and connect your own form endpoint to go live."
            />
            <Faq
              q="How do I make the form actually work?"
              a="Replace the demo submit logic with a POST request to your API, Formspree, Mailchimp/ConvertKit, or a webhook endpoint."
            />
            <Faq
              q="Can I add a calendar booking instead?"
              a="Yes. Swap the form with a Calendly embed or a booking widget and keep the CTA consistent."
            />
            <Faq
              q="What should I customize first?"
              a="Headline, offer, CTA text, and proof. Then connect analytics (GA4) and validate mobile spacing."
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-neutral-950/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>
            <div className="font-semibold text-white/80">{brand.name}</div>
            <div className="mt-1 text-xs">
              © {new Date().getFullYear()} • Landing page demo (React)
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-xs">
            <a className="hover:text-white" href="#benefits">
              Benefits
            </a>
            <a className="hover:text-white" href="#process">
              Process
            </a>
            <a className="hover:text-white" href="#faq">
              FAQ
            </a>
            <a className="hover:text-white" href="#form">
              Get Audit
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Small components ---------- */

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3">
      <div className="text-xs text-white/60">{label}</div>
      <div className="mt-1 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
      {children}
    </span>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
      <div className="text-base font-semibold">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-white/70">{desc}</div>
    </div>
  );
}

function MiniProof({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2">
      <div className="text-xs font-semibold text-white/90">{title}</div>
      <div className="text-[11px] text-white/60">{desc}</div>
    </div>
  );
}

function Testimonial({
  quote,
  name,
  title,
}: {
  quote: string;
  name: string;
  title: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <p className="text-sm leading-relaxed text-white/75">“{quote}”</p>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-9 w-9 rounded-2xl border border-white/10 bg-white/5" />
        <div className="leading-tight">
          <div className="text-sm font-semibold">{name}</div>
          <div className="text-xs text-white/60">{title}</div>
        </div>
      </div>
    </div>
  );
}

function Step({
  num,
  title,
  desc,
}: {
  num: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
      <div className="text-xs font-semibold text-white/60">{num}</div>
      <div className="mt-2 text-base font-semibold">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-white/70">{desc}</div>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-3xl border border-white/10 bg-white/[0.05] p-6">
      <summary className="cursor-pointer list-none text-base font-semibold">
        <div className="flex items-center justify-between gap-4">
          <span>{q}</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 group-open:hidden">
            +
          </span>
          <span className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 group-open:inline">
            –
          </span>
        </div>
      </summary>
      <div className="mt-3 text-sm leading-relaxed text-white/70">{a}</div>
    </details>
  );
}

function Field({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  hint,
}: {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  hint?: string;
}) {
  return (
    <label className="block">
      <div className="mb-1 text-xs font-medium text-white/80">{label}</div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-neutral-950/40 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none ring-0 focus:border-white/20"
      />
      {hint ? <div className="mt-1 text-xs text-red-200/80">{hint}</div> : null}
    </label>
  );
}

function Textarea({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <div className="mb-1 text-xs font-medium text-white/80">{label}</div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        className="w-full resize-none rounded-2xl border border-white/10 bg-neutral-950/40 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-white/20"
      />
    </label>
  );
}

function ThankYou({ onReset }: { onReset: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-neutral-900 p-8 shadow-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Request received
        </div>

        <h2 className="mt-4 text-2xl font-semibold tracking-tight">
          Thank you — you’re all set 🎉
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-white/70">
          Your request has been captured successfully. This is a demo funnel
          flow built to demonstrate conversion intent and clean front-end UX.
        </p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={onReset}
            className="flex-1 rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
          >
            Back to landing
          </button>

          <a
            href="#"
            className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
          >
            Add WhatsApp / Calendly
          </a>
        </div>
      </div>
    </div>
  );
}
