import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { designerOnboardingSteps } from "@/lib/mock";

export const Route = createFileRoute("/frontend/onboarding")({
  head: () => ({
    meta: [
      { title: "Designer Onboarding — MyDesignGhar" },
      {
        name: "description",
        content:
          "Set up your designer profile, portfolio, expertise and pricing to start receiving leads on MyDesignGhar.",
      },
    ],
  }),
  component: Onboarding,
});

function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const steps = designerOnboardingSteps;
  const last = step === steps.length - 1;
  const S = steps[step];

  const next = () =>
    last ? navigate({ to: "/frontend/dashboard" }) : setStep(step + 1);

  return (
    <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[320px_1fr]">
      {/* Stepper */}
      <aside className="lg:border-r lg:border-border/60 lg:pr-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Designer setup
        </p>
        <h1 className="mt-1 font-display text-2xl font-extrabold">
          Let's get you ready
        </h1>
        <ol className="mt-8 space-y-1">
          {steps.map((s, i) => {
            const done = i < step;
            const current = i === step;
            return (
              <li key={s.key}>
                <button
                  onClick={() => i <= step && setStep(i)}
                  className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition ${
                    current ? "bg-muted" : "hover:bg-muted/60"
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                      done
                        ? "bg-success text-success-foreground"
                        : current
                          ? "gradient-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {done ? <Check className="h-4 w-4" /> : i + 1}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      current ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {s.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </aside>

      {/* Panel */}
      <section className="flex flex-col">
        <div className="mb-6">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full gradient-primary transition-all"
              style={{ width: `${((step + 1) / steps.length) * 100}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Step {step + 1} of {steps.length}
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
          <h2 className="font-display text-2xl font-extrabold">{S.title}</h2>
          <p className="mt-2 text-muted-foreground">{S.desc}</p>

          <div className="mt-6">
            <StepForm stepKey={S.key} />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-semibold transition hover:bg-muted disabled:opacity-40"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          <button
            onClick={next}
            className="inline-flex h-11 items-center gap-2 rounded-full gradient-primary px-6 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-95"
          >
            {last ? "Finish & go to dashboard" : "Continue"}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
}

const inputCls =
  "h-12 w-full rounded-2xl border border-border bg-background px-4 text-sm outline-none transition focus:border-primary";

function StepForm({ stepKey }: { stepKey: string }) {
  if (stepKey === "profile") {
    return (
      <div className="grid gap-4 sm:grid-cols-2">
        <input className={inputCls} placeholder="Full name" />
        <input className={inputCls} placeholder="City" />
        <input className={`${inputCls} sm:col-span-2`} placeholder="Studio / brand name" />
        <textarea
          className="min-h-28 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary sm:col-span-2"
          placeholder="Short bio clients will see…"
        />
      </div>
    );
  }
  if (stepKey === "portfolio") {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <button
            key={i}
            className="flex aspect-square items-center justify-center rounded-2xl border-2 border-dashed border-border text-muted-foreground transition hover:border-primary hover:text-primary"
          >
            + Upload
          </button>
        ))}
      </div>
    );
  }
  if (stepKey === "expertise") {
    const tags = [
      "Modern",
      "Luxury",
      "Minimalist",
      "Rajasthan",
      "Kerala",
      "Goa",
      "Living Room",
      "Bedroom",
      "Kitchen",
      "Office",
    ];
    return <TagPicker tags={tags} />;
  }
  if (stepKey === "pricing") {
    return (
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-muted-foreground">
            Per-session fee (₹)
          </label>
          <input className={`${inputCls} mt-1.5`} placeholder="1499" defaultValue="1499" />
        </div>
        <div>
          <label className="text-sm font-medium text-muted-foreground">
            Weekly availability
          </label>
          <input className={`${inputCls} mt-1.5`} placeholder="Mon–Fri, 10am–6pm" />
        </div>
      </div>
    );
  }
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <button className="flex h-28 items-center justify-center rounded-2xl border-2 border-dashed border-border text-sm text-muted-foreground hover:border-primary hover:text-primary">
        Upload Govt. ID
      </button>
      <button className="flex h-28 items-center justify-center rounded-2xl border-2 border-dashed border-border text-sm text-muted-foreground hover:border-primary hover:text-primary">
        Upload credentials
      </button>
    </div>
  );
}

function TagPicker({ tags }: { tags: string[] }) {
  const [sel, setSel] = useState<string[]>([]);
  const toggle = (t: string) =>
    setSel((s) => (s.includes(t) ? s.filter((x) => x !== t) : [...s, t]));
  return (
    <div className="flex flex-wrap gap-2.5">
      {tags.map((t) => {
        const active = sel.includes(t);
        return (
          <button
            key={t}
            onClick={() => toggle(t)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition active:scale-95 ${
              active
                ? "gradient-primary border-transparent text-primary-foreground shadow-glow"
                : "border-border bg-background text-muted-foreground hover:text-foreground"
            }`}
          >
            {t}
          </button>
        );
      })}
    </div>
  );
}
