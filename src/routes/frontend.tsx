import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";

export const Route = createFileRoute("/frontend")({
  component: FrontendLayout,
});

const nav = [
  { to: "/frontend", label: "Home" },
  { to: "/frontend/dashboard", label: "Dashboard" },
  { to: "/frontend/onboarding", label: "Join as Designer" },
];

function FrontendLayout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link to="/frontend" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl gradient-primary shadow-glow">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </span>
            <span className="font-display text-lg font-extrabold tracking-tight">
              MyDesign<span className="text-primary">Ghar</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/frontend" }}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/frontend/dashboard"
              className="text-sm font-semibold text-muted-foreground hover:text-foreground"
            >
              Sign in
            </Link>
            <Link
              to="/frontend/onboarding"
              className="inline-flex h-10 items-center rounded-full gradient-primary px-5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:opacity-95"
            >
              Apply now
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-border/60 bg-background px-5 py-4 md:hidden">
            <nav className="flex flex-col gap-3">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {n.label}
                </Link>
              ))}
              <Link
                to="/frontend/onboarding"
                onClick={() => setOpen(false)}
                className="mt-1 inline-flex h-11 items-center justify-center rounded-full gradient-primary text-sm font-semibold text-primary-foreground"
              >
                Apply now
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-border/60 bg-muted/40">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </span>
              <span className="font-display text-base font-extrabold">
                MyDesign<span className="text-primary">Ghar</span>
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              India's AI-powered interior design platform connecting homeowners
              with the country's best designers.
            </p>
          </div>
          <div>
            <p className="text-sm font-bold">For Designers</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/frontend/onboarding" className="hover:text-foreground">Apply now</Link></li>
              <li><Link to="/frontend/dashboard" className="hover:text-foreground">Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground">Consumer app</Link></li>
              <li><span>About</span></li>
              <li><span>Contact</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
          © 2026 MyDesignGhar. Crafted in India.
        </div>
      </footer>
    </div>
  );
}
