import { Link } from "react-router-dom";

export default function Booking() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
          Conversion Funnel • Booking Page
        </span>

        <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Book a free strategy call and
          <span className="block bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
            fix your landing page leaks
          </span>
        </h1>

        <p className="mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
          In 30 minutes, we’ll identify exactly what’s killing your conversions
          and give you a clear, actionable plan to improve results.
        </p>

        <div className="mt-7 flex gap-3">
          <a
            href="#cta"
            className="rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-95"
          >
            Book Free Call
          </a>

          <Link
            to="/"
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            Back to Landing
          </Link>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Why most landing pages don’t convert
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            "Unclear messaging",
            "Weak or confusing CTAs",
            "Poor mobile experience",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 text-sm text-white/70"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          How the call works
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Step
            num="01"
            title="Review your page"
            desc="We analyze your landing page structure, copy, and CTA flow."
          />
          <Step
            num="02"
            title="Identify leaks"
            desc="We pinpoint exactly where users drop off or hesitate."
          />
          <Step
            num="03"
            title="Action plan"
            desc="You leave with clear next steps to improve conversions."
          />
        </div>
      </section>

      {/* Social proof */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-8">
          <p className="text-sm text-white/70">
            “This session helped us restructure our page and immediately improve
            lead quality.”
          </p>
          <p className="mt-3 text-xs text-white/50">
            — Demo testimonial (for portfolio)
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Ready to fix your conversions?
          </h2>

          <p className="mt-3 text-sm text-white/70">
            Book a free strategy call. No pressure. No sales scripts.
          </p>

          <a
            href="#"
            className="mt-6 inline-flex rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-8 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-95"
          >
            Book Free Call
          </a>

          <p className="mt-3 text-xs text-white/50">
            Demo CTA — connect Calendly or booking tool later
          </p>
        </div>
      </section>
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
      <div className="text-xs font-semibold text-white/50">{num}</div>
      <div className="mt-2 font-semibold">{title}</div>
      <div className="mt-2 text-sm text-white/70">{desc}</div>
    </div>
  );
}
