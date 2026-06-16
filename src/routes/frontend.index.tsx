import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  Sparkles,
  Star,
  TrendingUp,
  UserPlus,
  Wand2,
  Wallet,
} from "lucide-react";
import {
  designerTestimonials,
  img,
  recruitBenefits,
  recruitSteps,
} from "@/lib/mock";

export const Route = createFileRoute("/frontend/")({
  head: () => ({
    meta: [
      { title: "Become a Designer — MyDesignGhar" },
      {
        name: "description",
        content:
          "Join MyDesignGhar, India's AI-powered interior design platform. Get qualified leads, manage projects, and grow your design business.",
      },
      { property: "og:title", content: "Become a Designer — MyDesignGhar" },
      {
        property: "og:description",
        content:
          "Get matched with homeowners, manage projects, and earn more with AI-powered tools built for Indian designers.",
      },
      { property: "og:image", content: img("designer-hero", 1200, 630) },
      { name: "twitter:image", content: img("designer-hero", 1200, 630) },
    ],
  }),
  component: Landing,
});

const benefitIcons: Record<string, typeof Wallet> = {
  leads: UserPlus,
  earnings: Wallet,
  ai: Bot,
  growth: TrendingUp,
};

function Landing() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24">
          <div className="animate-float-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" /> For Interior Designers
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Grow your design
              <br />
              business with{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI
              </span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">
              Get matched with homeowners across India, generate concepts in
              seconds, and manage every project from a single dashboard.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/frontend/onboarding"
                className="inline-flex h-12 items-center gap-2 rounded-full gradient-primary px-7 text-base font-semibold text-primary-foreground shadow-glow transition hover:opacity-95"
              >
                Apply as a designer <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/frontend/dashboard"
                className="inline-flex h-12 items-center rounded-full border border-border bg-card px-7 text-base font-semibold transition hover:bg-muted"
              >
                Explore dashboard
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div>
                <p className="font-display text-2xl font-extrabold text-foreground">2,400+</p>
                <p>Designers</p>
              </div>
              <div>
                <p className="font-display text-2xl font-extrabold text-foreground">₹18.6L</p>
                <p>Avg. yearly</p>
              </div>
              <div>
                <p className="flex items-center gap-1 font-display text-2xl font-extrabold text-foreground">
                  4.9 <Star className="h-4 w-4 fill-accent text-accent" />
                </p>
                <p>Designer rating</p>
              </div>
            </div>
          </div>

          <div className="relative animate-float-up">
            <div className="overflow-hidden rounded-[2rem] border border-border shadow-soft">
              <img
                src={img("designer-hero", 900, 1000)}
                alt="Interior designer at work"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="glass absolute -bottom-5 -left-5 hidden rounded-2xl p-4 shadow-soft sm:block">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl gradient-primary">
                  <Wand2 className="h-5 w-5 text-primary-foreground" />
                </span>
                <div>
                  <p className="text-sm font-bold">AI mood board ready</p>
                  <p className="text-xs text-muted-foreground">Generated in 4s</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Everything you need to thrive
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Built for India's interior designers — from solo freelancers to full
            studios.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {recruitBenefits.map((b) => {
            const Icon = benefitIcons[b.icon];
            return (
              <div
                key={b.title}
                className="rounded-3xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{b.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="text-center font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Start earning in 3 steps
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {recruitSteps.map((s) => (
              <div key={s.n} className="rounded-3xl border border-border bg-card p-7">
                <span className="font-display text-4xl font-extrabold text-primary/30">
                  {s.n}
                </span>
                <h3 className="mt-3 text-xl font-bold">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <h2 className="text-center font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          Loved by designers across India
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {designerTestimonials.map((t) => (
            <div key={t.name} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent" />
                ))}
              </div>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-foreground">
                “{t.quote}”
              </p>
              <div className="mt-5 flex items-center gap-3">
                <img
                  src={img(`avatar-${t.seed}`, 80, 80)}
                  alt={t.name}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-bold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="gradient-hero relative overflow-hidden rounded-[2.5rem] px-8 py-16 text-center shadow-soft">
          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-primary/30 blur-3xl" />
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            Ready to design your future?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/70">
            Join 2,400+ designers building thriving businesses on MyDesignGhar.
          </p>
          <Link
            to="/frontend/onboarding"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-base font-semibold text-secondary transition hover:opacity-95"
          >
            Get started free <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
