import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Briefcase,
  Inbox,
  IndianRupee,
  Search,
  Star,
  Users,
} from "lucide-react";
import {
  designerClients,
  designerPipeline,
  designerProjects,
  designerStats,
  img,
  type DesignerProject,
} from "@/lib/mock";

export const Route = createFileRoute("/frontend/dashboard")({
  head: () => ({
    meta: [
      { title: "Designer Dashboard — MyDesignGhar" },
      {
        name: "description",
        content:
          "Manage your interior design projects and clients in one place with the MyDesignGhar designer dashboard.",
      },
    ],
  }),
  component: Dashboard,
});

const statIcons: Record<string, typeof Briefcase> = {
  projects: Briefcase,
  clients: Users,
  revenue: IndianRupee,
  rating: Star,
};

const statusMeta: Record<
  DesignerProject["status"],
  { label: string; cls: string }
> = {
  lead: { label: "Lead", cls: "bg-accent/15 text-accent" },
  "in-progress": { label: "In Progress", cls: "bg-primary/15 text-primary" },
  review: { label: "In Review", cls: "bg-indigo-500/15 text-indigo-500" },
  completed: { label: "Completed", cls: "bg-success/15 text-success" },
};

const inr = (n: number) => "₹" + n.toLocaleString("en-IN");

function Dashboard() {
  const [tab, setTab] = useState<"projects" | "clients">("projects");
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<"all" | DesignerProject["status"]>("all");

  const projects = useMemo(
    () =>
      designerProjects.filter(
        (p) =>
          (filter === "all" || p.status === filter) &&
          (p.title.toLowerCase().includes(q.toLowerCase()) ||
            p.client.toLowerCase().includes(q.toLowerCase())),
      ),
    [q, filter],
  );

  const clients = useMemo(
    () =>
      designerClients.filter((c) =>
        c.name.toLowerCase().includes(q.toLowerCase()),
      ),
    [q],
  );

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-extrabold tracking-tight">
            Welcome back, Priya 👋
          </h1>
          <p className="mt-1 text-muted-foreground">
            Here's what's happening with your studio today.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {designerStats.map((s) => {
          const Icon = statIcons[s.icon];
          return (
            <div
              key={s.label}
              className="rounded-3xl border border-border bg-card p-5 shadow-soft"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-xs font-semibold text-success">
                  {s.trend}
                </span>
              </div>
              <p className="mt-4 font-display text-3xl font-extrabold">
                {s.value}
              </p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          );
        })}
      </div>

      {/* Pipeline */}
      <div className="mt-6 rounded-3xl border border-border bg-card p-6 shadow-soft">
        <h2 className="text-base font-bold">Project pipeline</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-4">
          {designerPipeline.map((p) => (
            <div key={p.stage}>
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-muted-foreground">{p.stage}</span>
                <span className="font-display text-lg font-extrabold">
                  {p.count}
                </span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${Math.min(100, p.count * 12)}%`,
                    background: p.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs + search */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex rounded-full border border-border bg-card p-1">
          {(["projects", "clients"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition ${
                tab === t
                  ? "gradient-primary text-primary-foreground shadow-glow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={`Search ${tab}…`}
            className="h-11 w-64 rounded-full border border-border bg-card pl-10 pr-4 text-sm outline-none transition focus:border-primary"
          />
        </div>
      </div>

      {tab === "projects" ? (
        <>
          <div className="mt-5 flex flex-wrap gap-2">
            {(["all", "lead", "in-progress", "review", "completed"] as const).map(
              (f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium capitalize transition ${
                    filter === f
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-card text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {f === "all" ? "All" : statusMeta[f].label}
                </button>
              ),
            )}
          </div>

          {projects.length === 0 ? (
            <EmptyBlock
              icon={<Inbox className="h-7 w-7" />}
              title="No projects found"
              body="Try a different search or filter."
            />
          ) : (
            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              {projects.map((p) => {
                const meta = statusMeta[p.status];
                return (
                  <div
                    key={p.id}
                    className="rounded-3xl border border-border bg-card p-5 shadow-soft transition hover:-translate-y-0.5"
                  >
                    <div className="flex items-start gap-4">
                      <img
                        src={img(`avatar-${p.clientSeed}`, 96, 96)}
                        alt={p.client}
                        className="h-12 w-12 rounded-2xl object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="truncate font-bold">{p.title}</h3>
                          <span
                            className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${meta.cls}`}
                          >
                            {meta.label}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {p.client} · {p.city} · {p.budget}
                        </p>
                        <div className="mt-3">
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>Progress</span>
                            <span>{p.progress}%</span>
                          </div>
                          <div className="mt-1 h-2 overflow-hidden rounded-full bg-muted">
                            <div
                              className="h-full gradient-primary"
                              style={{ width: `${p.progress}%` }}
                            />
                          </div>
                        </div>
                        <div className="mt-3 flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            Due {p.deadline}
                          </span>
                          <span className="font-display font-extrabold">
                            {inr(p.value)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      ) : clients.length === 0 ? (
        <EmptyBlock
          icon={<Users className="h-7 w-7" />}
          title="No clients found"
          body="Try a different search."
        />
      ) : (
        <div className="mt-5 overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          <table className="w-full text-sm">
            <thead className="border-b border-border bg-muted/40 text-left text-muted-foreground">
              <tr>
                <th className="px-5 py-3 font-semibold">Client</th>
                <th className="px-5 py-3 font-semibold">City</th>
                <th className="px-5 py-3 font-semibold">Projects</th>
                <th className="px-5 py-3 font-semibold">Lifetime value</th>
                <th className="px-5 py-3 font-semibold">Last active</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((c) => (
                <tr key={c.id} className="border-b border-border/60 last:border-0">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={img(`avatar-${c.avatarSeed}`, 72, 72)}
                        alt={c.name}
                        className="h-9 w-9 rounded-full object-cover"
                      />
                      <span className="font-semibold">{c.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-muted-foreground">{c.city}</td>
                  <td className="px-5 py-4">{c.projects}</td>
                  <td className="px-5 py-4 font-display font-bold">
                    {inr(c.lifetimeValue)}
                  </td>
                  <td className="px-5 py-4 text-muted-foreground">
                    {c.lastActive}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function EmptyBlock({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="mt-5 flex flex-col items-center justify-center rounded-3xl border border-dashed border-border py-16 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-primary">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-bold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}
